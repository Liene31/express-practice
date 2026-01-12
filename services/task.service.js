import { tasksData } from "./db.js";

export const taskService = {
  find: () => {
    return tasksData;
  },

  findById: (id) => {
    return tasksData.find((task) => {
      return task.id === id;
    });
  },

  findByPriority: (taskStatus) => {
    return tasksData.filter((task) => {
      return task.priority === taskStatus;
    });
  },

  create: (task) => {
    const idMax = Math.max(...tasksData.map((task) => task.id));

    task.id = idMax + 1;

    tasksData.push(task);
    return task;
  },

  update: (taskId, taskBody) => {
    const task = tasksData.find((task) => {
      return taskId === task.id;
    });
    //Object.assign() copies properties from a source object to a target object.
    const updatedTask = Object.assign(task, taskBody);
    return updatedTask;
  },

  updateStatus: (taskId, taskBodyValue) => {
    const task = tasksData.find((task) => {
      return taskId === task.id;
    });

    task.isDone = taskBodyValue;
    return task;
  },

  delete: (taskId) => {
    const tasks = tasksData.filter((task) => {
      return taskId !== task.id;
    });

    tasksData.splice(0, tasksData.length);
    tasksData.push(tasks);
    return true;
  },
};
