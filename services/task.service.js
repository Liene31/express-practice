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
};
