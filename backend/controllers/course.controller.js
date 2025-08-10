import Course from '../models/course.model.js';

export const fetchCourseInfo = async (req, res) => {
  try {
    const course = await Course.find();
    console.log(course)
    return res.status(200).json(course);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
