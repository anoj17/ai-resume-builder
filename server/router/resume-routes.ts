import express from "express";
import {
  addResume,
  deleteResume,
  GetAllResumes,
  updateResume,
} from "../controller/resume-controller";
import protectedRoute from "../middleware";

const router = express.Router();

router.get("/resumes", protectedRoute, GetAllResumes);
router.post("/resumes", protectedRoute, addResume);
router.put("/resumes/:resumeId", protectedRoute, updateResume);
router.delete("/resumes/:resumeId", protectedRoute, deleteResume);

export default router;
