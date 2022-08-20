const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/task-list');

const db = mongoose.connect