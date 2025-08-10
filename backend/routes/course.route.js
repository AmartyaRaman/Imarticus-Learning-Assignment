import { Router } from "express";
import { fetchCourseInfo } from "../controllers/course.controller.js";

const router = Router();

router.get('/', fetchCourseInfo);

export default router;
