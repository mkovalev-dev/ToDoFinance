export const StaticActionConst = {
  DATE: "date",
  FLAG: "flag",
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
      let flagDate = data.filter((e) => e.flag === actionValue);
      return flagDate.length;
    default:
      return 0;
  }
};
