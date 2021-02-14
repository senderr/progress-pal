const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const auth = require('../auth');
/**
 * Get all courses the user is in
 */
router.get('/', auth, async (req, res) => {
  const courses = await Course.find({ users: req.user.id });

  res.status(200).json(courses);
});

/**
 * Get all courses that begin with string
 */
router.get('/:pre', auth, async (req, res) => {
  // console.log(req.params.pre);
  // var pre = req.params.pre;
  const courses = await Course.find({ name: /.*req.params.pre.*/ });

  res.status(200).json(courses);
});

/**
 * Get a course with a specified ID
 */
router.get('/:id', auth, async (req, res) => {
  const course = await Course.findById(req.params.id).populate([
    {
      path: 'users',
    },
    {
      path: 'assignments',
    },
    {
      path: 'owner',
    },
  ]);

  res.status(200).json(course);
});

/**
 * Create a course
 */
router.post('/', auth, async (req, res) => {
  const { name } = req.body;

  // const user = await User.findByID(req.user.id);

  const newCourse = new Course({
    name,
    owner: req.user.id,
  });

  newCourse.users.push(req.user.id);

  const course = await newCourse.save();

  res.status(200).json(course);
});

router.patch('/join/:id', auth, async (req, res) => {
  const course = await Course.findById(req.params.id);

  course.users.push(req.user.id);
  await course.save();

  res.status(200).send();
});

/**
 * Delete a course
 */
router.delete('/:id', auth, async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (!course) return res.status(404).send();

  await course.remove();

  res.status(200).send();
});

module.exports = router;
