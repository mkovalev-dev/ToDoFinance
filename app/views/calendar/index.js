import { COLORS_PRIMARY, SECONDARY_GRADIENT } from "../../modules/colors";
import { PADDING } from "../../modules/padding";
import { Box } from "native-base";
import Header from "./components/header";
import CalendarCustom from "./components/calendarCustom";

export default function CalendarScreen() {
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
      <Header />
      <CalendarCustom />
    </Box>
  );
}
