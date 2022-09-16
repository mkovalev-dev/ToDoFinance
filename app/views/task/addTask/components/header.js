import { TouchableOpacity } from "react-native";
import { Heading, HStack, Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { COLORS_GRAYSCALE, COLORS_PRIMARY } from "../../../../modules/colors";
import { Spacer } from "native-base/src/components/primitives/Flex";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();
  return (
    <Heading
      _dark={{ color: COLORS_GRAYSCALE.WHITE }}
      _light={{ color: COLORS_GRAYSCALE.HEADER }}
      size={"lg"}
      style={{ marginBottom: 18 }}
    >
      Новая задача
    </Heading>
  );
}
