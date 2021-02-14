mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  },
  users: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        unique: true,
      },
      progress: Number,
    },
  ],
});

AssignmentSchema.pre('remove', async function (next) {
  await mongoose.model('Course').updateMany(
    {
      assignments: { _id: this._id },
    },
    {
      $pull: { assignments: this._id },
    }
  );

  next();
});

module.exports = mongoose.model('Assignment', AssignmentSchema);
