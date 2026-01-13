import { Router } from "express";
import { taskController } from "../controllers/taskController.js";
import { idValidator } from "../middlewares/idValidator.middleware.js";

export const taskRouter = Router();

taskRouter.get("/", taskController.getAll);

taskRouter.get("/:id", idValidator(), taskController.getById);

taskRouter.get("/priority/:status", taskController.getByPriority);

taskRouter.post("/", taskController.insert);

taskRouter.put("/:id", taskController.update);

taskRouter.patch("/:id", taskController.updateStatus);

taskRouter.delete("/:id", taskController.delete);
