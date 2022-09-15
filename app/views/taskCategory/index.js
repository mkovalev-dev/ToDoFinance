import { COLORS_PRIMARY, SECONDARY_GRADIENT } from "../../modules/colors";
import { PADDING } from "../../modules/padding";
import Today from "../today/today";
import { Box } from "native-base";
import Header from "./components/header";
import StaticAction from "./components/StaticAction";
import CategoryStack from "../listCategory/CategoryStack";

export default function TaskCategory() {
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
      <Header />
      <CategoryStack />
    </Box>
  );
}
