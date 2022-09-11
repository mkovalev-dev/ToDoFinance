import { StaticActionConst } from "./getTasksCountFromAction";

export const getFilterTasksAction = ({
  data,
  date,
  actionName,
  actionValue,
}) => {
  switch (actionName) {
    case StaticActionConst.DATE:
      return data.filter((e) => e.date === date);
    case StaticActionConst.FLAG:
      return data.filter((e) => e.date === date && e.flag === actionValue);
    case StaticActionConst.CATEGORY:
      return data.filter(
        (e) => e.date === date && e.category_id === actionValue
      );
    default:
      return [];
  }
};
