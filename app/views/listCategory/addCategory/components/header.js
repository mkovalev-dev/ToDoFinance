import { Heading, HStack, Text } from "native-base";
import { COLORS_GRAYSCALE, COLORS_PRIMARY } from "../../../../modules/colors";
import { Spacer } from "native-base/src/components/primitives/Flex";
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { setNewCategory } from "../../../../services/redux/slices/taskSlice";

export default function Header({ data }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <HStack>
      <Heading
        _dark={{ color: "white" }}
        _light={{ color: COLORS_GRAYSCALE.HEADER }}
        size={"lg"}
        style={{ marginBottom: 18 }}
      >
        Добавить список
      </Heading>
      <Spacer />
      <TouchableOpacity
        disabled={data.name.length === 0}
        onPress={() => {
          dispatch(setNewCategory(data));
          navigation.goBack();
        }}
      >
        <HStack space={2} justifyContent={"center"} alignItems={"center"}>
          <Text
            fontWeight={"bold"}
            fontSize={18}
            _light={
              data.name.length === 0
                ? { color: COLORS_GRAYSCALE.PLACEHOLDER }
                : { color: COLORS_PRIMARY.DEFAULT }
            }
            _dark={
              data.name.length === 0
                ? { color: COLORS_GRAYSCALE.PLACEHOLDER }
                : { color: COLORS_PRIMARY.DEFAULT }
            }
          >
            Cоздать
          </Text>
        </HStack>
      </TouchableOpacity>
    </HStack>
  );
}
