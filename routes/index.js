import { Router } from "express";
import { taskRouter } from "./task.router.js";

export const router = Router();

router.get("/", (req, res) => {
  res.status(200).send("Task Management App");
});

router.use("/tasks", taskRouter);
