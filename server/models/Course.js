mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      unique: true,
    },
  ],
  assignments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Assignment',
      unique: true,
    },
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

CourseSchema.pre('remove', async function (next) {
  await mongoose.model('Assignment').deleteMany({
    course: this._id,
  });

  next();
});

module.exports = mongoose.model('Course', CourseSchema);
