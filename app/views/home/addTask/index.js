import { Box } from "native-base";
import { COLORS_PRIMARY, SECONDARY_GRADIENT } from "../../../modules/colors";
import { PADDING } from "../../../modules/padding";
import Header from "./components/header";
import Form from "./components/form";

export default function AddTask() {
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
      }}
    >
      <Header />
      <Form />
    </Box>
  );
}
