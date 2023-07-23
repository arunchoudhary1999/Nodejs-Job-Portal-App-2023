// Import -----
import express from "express";
import { testPostController } from "../controllers/testController.js";

// Routes Object -----
const router = express.Router();

// Routes -----
router.post("/test-post", testPostController);

// Export -----
export default router;