import { Heading, HStack, Icon, Text } from "native-base";
import { COLORS_GRAYSCALE, COLORS_PRIMARY } from "../../../../modules/colors";
import { Spacer } from "native-base/src/components/primitives/Flex";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

export default function HeaderTask({ selectedDate, setSelectedDate }) {
  const navigation = useNavigation();

  return (
    <>
      <HStack alignItems="center" justifyContent="center" space={1}>
        <Heading
          _dark={{ color: "white" }}
          _light={{ color: COLORS_GRAYSCALE.HEADER }}
          size={"lg"}
        >
          Мои задачи
        </Heading>
        <DateTimePicker
          locale="ru-RU"
          display={"compact"}
          style={{ flex: 1 }}
          testID="dateTimePicker"
          value={new Date(selectedDate)}
          mode={"date"}
          is24Hour={true}
          onChange={(event, date) => {
            setSelectedDate(moment(date).format("YYYY/MM/DD"));
          }}
        />
        <Spacer />
        <TouchableOpacity onPress={() => navigation.navigate("AddTask")}>
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
    </>
  );
}
