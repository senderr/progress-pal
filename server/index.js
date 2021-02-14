const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const app = express();
const port = 5000;

// Setup global vars
dotenv.config();

// Connect to DB
(async function () {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
})();

// Let server parse json requests
app.use(express.json());

// Server static files
app.use(express.static(path.join(__dirname, 'client', 'src')));

app.use('/api/auth', require('./api/auth'));
app.use('/api/courses', require('./api/courses'));
app.use('/api/assignments', require('./api/assignments'));
app.use('/api/users', require('./api/users'));

app.listen(port, () => {
  console.log(`Server listening at https://localhost:${port}`);
});
