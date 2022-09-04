import { Heading, HStack, Icon } from "native-base";
import { COLORS_GRAYSCALE, COLORS_PRIMARY } from "../../../modules/colors";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { Spacer } from "native-base/src/components/primitives/Flex";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Header() {
  return (
    <HStack alignItems="center" justifyContent="center" space={1}>
      <Heading
        _dark={{ color: "white" }}
        _light={{ color: COLORS_GRAYSCALE.HEADER }}
        size={"lg"}
      >
        Мои списки
      </Heading>
      <Spacer />
      <TouchableOpacity
      // onPress={() => navigation.navigate("AddTask")}
      >
        <Icon
          as={AntDesign}
          size={7}
          name="plus"
          _light={{
            color: COLORS_PRIMARY.DEFAULT,
          }}
          _dark={{
            color: COLORS_PRIMARY.BACKGROUND_LIGHT,
          }}
        />
      </TouchableOpacity>
    </HStack>
  );
}