import { TouchableOpacity } from "react-native";
import { Heading, HStack, Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { COLORS_GRAYSCALE, COLORS_PRIMARY } from "../../../../modules/colors";
import { Spacer } from "native-base/src/components/primitives/Flex";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();
  return (
    <HStack alignItems="center" justifyContent="center">
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icon
          as={AntDesign}
          size={7}
          name="leftcircleo"
          _light={{
            color: COLORS_PRIMARY.DEFAULT,
          }}
          _dark={{
            color: COLORS_PRIMARY.BACKGROUND_LIGHT,
          }}
        />
      </TouchableOpacity>
      <Spacer />
      <Heading
        _dark={{ color: "white" }}
        _light={{ color: COLORS_GRAYSCALE.HEADER }}
        size={"lg"}
      >
        Новая задача
      </Heading>
    </HStack>
  );
}
