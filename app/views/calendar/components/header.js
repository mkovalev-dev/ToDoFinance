import { Heading, HStack, Text } from "native-base";
import { COLORS_GRAYSCALE, COLORS_PRIMARY } from "../../../modules/colors";
import { Spacer } from "native-base/src/components/primitives/Flex";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();
  return (
    <HStack>
      <Heading
        _dark={{ color: "white" }}
        _light={{ color: COLORS_GRAYSCALE.HEADER }}
        size={"lg"}
        style={{ marginBottom: 18 }}
      >
        Календарь
      </Heading>
      <Spacer />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("AddCalendar");
        }}
      >
        <HStack space={2} justifyContent={"center"} alignItems={"center"}>
          <Text
            fontWeight={"bold"}
            fontSize={18}
            _light={{ color: COLORS_PRIMARY.DEFAULT }}
            _dark={{ color: COLORS_PRIMARY.DEFAULT }}
          >
            Cоздать
          </Text>
        </HStack>
      </TouchableOpacity>
    </HStack>
  );
}
