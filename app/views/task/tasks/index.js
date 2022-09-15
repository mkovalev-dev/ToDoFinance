import { Box } from "native-base";
import { COLORS_PRIMARY, SECONDARY_GRADIENT } from "../../../modules/colors";
import { PADDING } from "../../../modules/padding";
import Tasks from "./components/tasks";

export default function TasksScreen({ route }) {
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
      <Tasks
        actionName={route.params.actionName}
        categoryID={route.params?.categoryId}
      />
    </Box>
  );
}
