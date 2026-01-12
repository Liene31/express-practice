import { taskService } from "../services/task.service.js";

export const taskController = {
  //send all the tasks
  getAll: (req, res) => {
    const tasks = taskService.find();
    const dataToSend = {
      count: tasks.length,
      //since tasks:tasks repeating it can be written just as tasks
      tasks: tasks,
    };
    res.status(200).json(dataToSend);
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

  getByPriority: (req, res) => {
    const taskStatus = req.params.status;
    const task = taskService.findByPriority(taskStatus);
    const dataToSend = {
      count: task.length,
      //shorter version for task:task
      task,
    };
    res.status(200).send(dataToSend);
  },

  insert: (req, res) => {
    const taskToAdd = req.body;
    const taskAdded = taskService.create(taskToAdd);
    //it is used to set the response header in order to respect REST principe (visible is POST header)
    res.location(`/api/tasks/${taskAdded.id}`);
    res.status(201).send(taskAdded);
  },

  update: (req, res) => {
    const taskId = parseInt(req.params.id);
    //first check if the task by ID exists
    const task = taskService.findById(taskId);
    console.log(task);
  },
};
