import { Box, Text, View } from "native-base";
import { COLORS_PRIMARY, SECONDARY_GRADIENT } from "../../../modules/colors";
import { PADDING } from "../../../modules/padding";
import Today from "../../today/today";
import StaticAction from "../../taskCategory/components/StaticAction";
import Header from "../../taskCategory/components/header";
import CategoryList from "./components/categoryList";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { useState } from "react";
import HeaderTask from "../../task/tasks/components/header";
import Tasks from "../../task/tasks/components/tasks";
import { StaticActionConst } from "../../../modules/getTasksCountFromAction";

export default function HomeCategory() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Box
      _light={{
        backgroundColor: COLORS_PRIMARY.BACKGROUND_LIGHT,
      }}
      _dark={{
        backgroundColor: SECONDARY_GRADIENT.START,
      }}
      style={{
        flex: 1,
        padding: PADDING.ALL,
        paddingTop: 56,
      }}
    >
      <Today />
      <StaticAction />
      <SegmentedControl
        values={["Мои задачи", "Мои списки"]}
        selectedIndex={selectedIndex}
        style={{ height: 40, marginBottom: 18 }}
        onChange={(event) => {
          setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
        }}
      />
      {selectedIndex === 1 ? (
        <>
          <Header />
          <CategoryList />
        </>
      ) : (
        <>
          <Header name={"Мои задачи"} route={"AddTask"} />
          <Tasks actionName={StaticActionConst.DATE} homePage={true} />
        </>
      )}
    </Box>
  );
}
