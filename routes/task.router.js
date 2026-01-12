import { Router } from "express";
import { taskController } from "../controllers/taskController.js";

export const taskRouter = Router();

taskRouter.get("/", taskController.getAll);

taskRouter.get("/:id", taskController.getById);

taskRouter.get("/priority/:status", taskController.getByPriority);

taskRouter.post("/", taskController.insert);

taskRouter.put("/:id", taskController.update);
