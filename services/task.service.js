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
};
