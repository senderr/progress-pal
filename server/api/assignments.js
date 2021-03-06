const express = require('express');
const router = express.Router();
const Assignment = require('../models/Assignment');
const auth = require('../auth');

/**
 * Get an assignment with a specified ID
 */
router.get('/:id', auth, async (req, res) => {
  const assignment = await Assignment.findById(req.params.id).populate(
    'users._id'
  );
  res.status(200).json(assignment);
});

/**
 * Create an assignment
 */
router.post('/', auth, async (req, res) => {
  const { name, dueDate, course } = req.body;

  const newAssignment = new Assignment({
    name,
    dueDate,
    course,
  });

  const _course = await mongoose.model('Course').findById(course);
  if (!_course) return res.status(400).send('Invalid Course');

  _course.assignments.push(newAssignment);
  _course.users.forEach((user) => {
    newAssignment.users.push({ _id: user._id, progress: 0 });
  });
  _course.save();

  const assignment = await newAssignment.save();

  res.status(200).json(assignment);
});

/**
 * Delete an assignment
 */
router.delete('/:id', auth, async (req, res) => {
  const assignment = await Assignment.findById(req.params.id);

  if (!assignment) return res.status(404).send();

  await assignment.remove();

  res.status(200).send();
});

/**
 * Add progress to an assignment
 */
router.patch('/progress/:id/:progress', auth, async (req, res) => {
  const response = await Assignment.updateOne(
    { _id: req.params.id, 'users._id': req.user.id },
    { $set: { 'users.$.progress': req.params.progress } }
  );

  res.status(200).json(response);
});
module.exports = router;
