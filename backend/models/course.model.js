import mongoose from 'mongoose';

// lecture or quiz schema
const contentItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['Lecture', 'Quiz'],
    required: true
  },
  isCompleted: {
    type: Boolean,
    default: false
  }
});

// Sub-topic schema
const moduleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: [contentItemSchema]
});

// Course Schema
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  batch_id: {
    type: String,
    required: true,
    unique: true
  },

  modules: [moduleSchema],
}, {
  timestamps: true
});

const Course = mongoose.model('Course', courseSchema);
export default Course;
