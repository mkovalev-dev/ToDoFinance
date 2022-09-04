import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  userTasks: [],
};

/**
 * Находит индекс в списке по id задачи.
 */
const getListIndex = ({ taskList, id }) => {
  let index = null;
  Object.keys(taskList).forEach((key) => {
    Object.keys(taskList[key]).forEach((itemKey) => {
      if (taskList[key]["id"] === id) {
        index = key;
      }
    });
  });
  return index;
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    /**
     * Создает новую задачу.
     */
    setUserTask: (state, action) => {
      let index = state.userTasks.length + 1;
      state.userTasks = [
        ...state.userTasks,
        {
          id: index,
          name: action.payload.name,
          date: action.payload.date,
          is_finish: false,
          flag: action.payload.flag,
        },
      ];
    },
    /**
     * Устанавливает состояние задачи ({index_in_list:int, value:bool}).
     */
    setUserCompleteTask: (state, action) => {
      const index = getListIndex({
        taskList: state.userTasks,
        id: action.payload.index,
      });
      if (index) {
        state.userTasks[index]["is_finish"] = action.payload.value;
      }
    },

    /**
     * Удаляет задачу.
     */
    setDeleteTask: (state, action) => {
      const index = getListIndex({
        taskList: state.userTasks,
        id: action.payload,
      });
      if (index) {
        state.userTasks.splice(index, 1);
        console.log(state.userTasks);
      }
    },
  },
  extraReducers: {},
});
export default taskSlice.reducer;

export const { setUserCompleteTask, setUserTask, setDeleteTask } =
  taskSlice.actions;
export const userTasks = (state) => state.task.userTasks;
