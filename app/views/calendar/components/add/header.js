import { Heading, HStack, Text } from "native-base";
import { COLORS_GRAYSCALE, COLORS_PRIMARY } from "../../../../modules/colors";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { setCalendarDate } from "../../../../services/redux/slices/taskSlice";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import { Spacer } from "native-base/src/components/primitives/Flex";
import { useDispatch } from "react-redux";

export default function Header({ color, name, date, time }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <HStack>
      <Heading
        _dark={{ color: "white" }}
        _light={{ color: COLORS_GRAYSCALE.HEADER }}
        size={"lg"}
        style={{ marginBottom: 18 }}
      >
        Новая важная дата
      </Heading>
      <Spacer />
      <TouchableOpacity
        disabled={name.length === 0}
        onPress={() => {
          dispatch(
            setCalendarDate({
              name: name,
              color: color,
              date: moment(date).format("YYYY-MM-DD"),
              time: time,
            })
          );
          navigation.goBack();
        }}
      >
        <HStack space={2} justifyContent={"center"} alignItems={"center"}>
          <Text
            fontWeight={"bold"}
            fontSize={18}
            _light={
              name.length === 0
                ? { color: COLORS_GRAYSCALE.PLACEHOLDER }
                : { color: COLORS_PRIMARY.DEFAULT }
            }
            _dark={
              name.length === 0
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
