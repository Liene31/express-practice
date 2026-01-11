import { taskService } from "../services/task.service.js";

export const taskController = {
  //send all the tasks
  getAll: (req, res) => {
    const tasks = taskService.find();
    res.status(200).json(tasks);
  },

  //send only task by requested id
  getById: (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = taskService.findById(taskId);
    if (!task) {
      res
        .status(404)
        .json({ status: 404, message: `task with id ${taskId} not found` });
    }

    res.status(200).send(task);
  },
};
