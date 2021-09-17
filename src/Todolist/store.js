import create from "zustand";
import { persist } from "zustand/middleware";

const store = persist((set) => ({
  id: 3,
  tasks: [
    { id: 1, task: "Learn Git" },
    { id: 2, task: "Attend Culture training" },
  ],
  addTask: (task) =>
    set((state) => ({ tasks: [...state.tasks, task], id: state.id + 1 })),
  deleteTask: (id) =>
    set((state) => {
      let newtasks = [...state.tasks];
      console.log(newtasks);
      newtasks = newtasks.filter((t) => t.id !== id);
      console.log(newtasks);
      return { tasks: newtasks };
    }),
}));
const useStore = create(store);

export default useStore;
