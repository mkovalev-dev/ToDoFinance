import moment from "moment";

export const StaticActionConst = {
  DATE: "date",
  FLAG: "flag",
  CATEGORY: "category",
};

export const getTasksCountFromAction = ({
  data,
  actionName,
  actionValue = null,
}) => {
  switch (actionName) {
    case StaticActionConst.DATE:
      let dateDate = data.filter((e) => e.date === actionValue);
      return dateDate.length;
    case StaticActionConst.FLAG:
      let flagDate = data.filter(
        (e) =>
          e.flag === actionValue && e.date === moment().format("YYYY/MM/DD")
      );
      return flagDate.length;
    case StaticActionConst.CATEGORY:
      let categoryDate = data.filter(
        (e) =>
          e.category_id === actionValue &&
          e.date === moment().format("YYYY/MM/DD")
      );
      return categoryDate.length;
    default:
      return 0;
  }
};
