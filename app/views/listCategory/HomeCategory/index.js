import { Box, Text, View } from "native-base";
import { COLORS_PRIMARY, SECONDARY_GRADIENT } from "../../../modules/colors";
import { PADDING } from "../../../modules/padding";
import Today from "../../today/today";
import StaticAction from "../../taskCategory/components/StaticAction";
import Header from "../../taskCategory/components/header";
import CategoryList from "./components/categoryList";

export default function HomeCategory() {
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
      <CategoryList />
    </Box>
  );
}
