import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  userTasks: [],
  userCategory: [],
  userCalendarDate: [],
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
      let index = Math.random().toString(16).slice(2);
      state.userTasks = [
        ...state.userTasks,
        {
          id: index,
          key: index,
          name: action.payload.name,
          date: action.payload.date,
          is_finish: false,
          flag: action.payload.flag,
          category_id: action.payload.category_id,
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
      }
    },
    /**
     * Добавляет новый список.
     */
    setNewCategory: (state, action) => {
      let index = Math.random().toString(16).slice(2);
      state.userCategory = [
        ...state.userCategory,
        {
          id: index,
          key: index,
          name: action.payload.name,
          color: action.payload.color,
          icon: action.payload.icon,
        },
      ];
    },

    /**
     * Удаляет список.
     */
    setDeleteCategory: (state, action) => {
      const index = getListIndex({
        taskList: state.userCategory,
        id: action.payload,
      });
      if (index) {
        state.userCategory.splice(index, 1);
      }
    },

    /**
     * Создает важную дату.
     */
    setCalendarDate: (state, action) => {
      let index = Math.random().toString(16).slice(2);
      if (!state.userCalendarDate) {
        state.userCalendarDate = [];
      }
      state.userCalendarDate = [
        ...state.userCalendarDate,
        {
          id: index,
          key: index,
          name: action.payload.name,
          color: action.payload.color,
          date: action.payload.date,
        },
      ];
    },

    /**
     * Удаляет важную дату.
     */
    setDeleteCalendarDate: (state, action) => {
      const index = getListIndex({
        taskList: state.userCalendarDate,
        id: action.payload,
      });
      if (index) {
        state.userCalendarDate.splice(index, 1);
      }
    },
  },
  extraReducers: {},
});
export default taskSlice.reducer;

export const {
  setUserCompleteTask,
  setUserTask,
  setDeleteTask,
  setNewCategory,
  setDeleteCategory,
  setCalendarDate,
  setDeleteCalendarDate,
} = taskSlice.actions;
export const userTasks = (state) => state.task.userTasks;
export const userCategory = (state) => state.task.userCategory;
export const userCalendarDate = (state) => state.task.userCalendarDate;
