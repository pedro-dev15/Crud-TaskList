import { Router } from "express";
import * as Task from "./controller.ts";

const router = Router();

// Default route
router.get("/", Task.none);

// Create a new task
router.post("/tasks", Task.create);

// Get all tasks
router.get("/tasks", Task.findAll);

// Get a single task
router.get("/tasks/:id", Task.findOne);

// Update a task
router.put("/tasks/:id", Task.update);

// Delete a task
router.delete("/tasks/:id", Task.remove);

export default router;