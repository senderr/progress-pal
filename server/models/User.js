mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  favourites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  isInstructor: {
    type: Boolean,
  },
});

UserSchema.pre('remove', async function (next) {
  await mongoose.model('Course').updateMany(
    {
      users: { _id: this._id },
    },
    {
      $pull: { users: this._id },
    }
  );

  await mongoose.model('Course').deleteOne({ owner: this._id })

  next();
});

module.exports = mongoose.model('User', UserSchema);
