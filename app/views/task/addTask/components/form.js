import { Box, Heading, HStack, Icon, Input, Switch, Text } from "native-base";
import { PADDING } from "../../../../modules/padding";
import {
  COLORS_GRAYSCALE,
  COLORS_PRIMARY,
  PRIMARY_GRADIENT,
} from "../../../../modules/colors";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { setUserTask } from "../../../../services/redux/slices/taskSlice";
import { useNavigation } from "@react-navigation/native";
import DatePicker from "react-native-modern-datepicker";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { Spacer } from "native-base/src/components/primitives/Flex";
import moment from "moment";

export default function Form() {
  const [value, setValue] = useState("Новая задача");
  const [selectedDate, setSelectedDate] = useState(
    moment().format("YYYY/MM/DD")
  );
  const [viewDatePicker, setViewDatePicker] = useState(false);
  const [isFlag, setIsFlag] = useState(false);
  const handleChange = (text) => setValue(text);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <>
      <Box
        style={{
          backgroundColor: "#fff",
          width: "100%",
          minHeight: 55,
          padding: PADDING.ALL,
          borderRadius: 12,
        }}
      >
        <HStack space={2}>
          <Icon
            as={AntDesign}
            size={7}
            name="edit"
            _light={{
              color: COLORS_PRIMARY.DEFAULT,
            }}
            _dark={{
              color: COLORS_PRIMARY.DEFAULT,
            }}
          />
          <Heading
            _dark={{ color: COLORS_GRAYSCALE.HEADER }}
            _light={{ color: COLORS_GRAYSCALE.HEADER }}
            size={"md"}
            mb={4}
          >
            Задача:
          </Heading>
        </HStack>
        <Input
          height={55}
          borderRadius={12}
          variant="filled"
          value={value}
          fontSize={16}
          clearButtonMode="always"
          _light={{
            backgroundColor: COLORS_GRAYSCALE.LINE,
            color: COLORS_GRAYSCALE.HEADER,
          }}
          _dark={{
            color: COLORS_GRAYSCALE.HEADER,
            backgroundColor: COLORS_GRAYSCALE.LINE,
            borderColor: COLORS_GRAYSCALE.LINE,
          }}
          onChangeText={handleChange}
        />
      </Box>
      <Box
        mt={4}
        style={{
          backgroundColor: "#fff",
          width: "100%",
          minHeight: 55,
          padding: PADDING.ALL,
          borderRadius: 12,
        }}
      >
        <HStack space={2}>
          <Icon
            as={AntDesign}
            size={7}
            name="calendar"
            _light={{
              color: COLORS_PRIMARY.DEFAULT,
            }}
            _dark={{
              color: COLORS_PRIMARY.DEFAULT,
            }}
          />
          <Heading
            _dark={{ color: COLORS_GRAYSCALE.HEADER }}
            _light={{ color: COLORS_GRAYSCALE.HEADER }}
            size={"md"}
            mb={4}
          >
            Дата:
          </Heading>
          <Spacer />
          <Switch
            isChecked={viewDatePicker}
            defaultIsChecked={viewDatePicker}
            colorScheme="blue"
            size="md"
            onToggle={setViewDatePicker}
          />
        </HStack>
        {viewDatePicker && (
          <DatePicker
            mode={"calendar"}
            onSelectedChange={(date) => setSelectedDate(date)}
            options={{
              mainColor: COLORS_PRIMARY.DEFAULT,
            }}
            configs={{
              dayNames: [
                "Воскресенье",
                "Понедельник",
                "Вторник",
                "Среда",
                "Четверг",
                "Пятница",
                "Суббота",
              ],
              dayNamesShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
              monthNames: [
                "Январь",
                "Февраль",
                "Март",
                "Апрель",
                "Май",
                "Июнь",
                "Июль",
                "Август",
                "Сентябрь",
                "Октябрь",
                "Ноябрь",
                "Декабрь",
              ],
            }}
          />
        )}
        <Text color={COLORS_GRAYSCALE.PLACEHOLDER} textAlign={"center"}>
          Если дата не выбрана, то задача создается на текущую дату!
        </Text>
      </Box>
      <Box
        mt={4}
        style={{
          backgroundColor: "#fff",
          width: "100%",
          minHeight: 55,
          padding: PADDING.ALL,
          borderRadius: 12,
        }}
      >
        <HStack space={2}>
          <Icon
            as={Entypo}
            size={7}
            name="flag"
            _light={{
              color: COLORS_PRIMARY.DEFAULT,
            }}
            _dark={{
              color: COLORS_PRIMARY.DEFAULT,
            }}
          />
          <Heading
            _dark={{ color: COLORS_GRAYSCALE.HEADER }}
            _light={{ color: COLORS_GRAYSCALE.HEADER }}
            size={"md"}
            mb={4}
          >
            Флажок:
          </Heading>
          <Spacer />
          <Switch
            isChecked={isFlag}
            defaultIsChecked={isFlag}
            colorScheme="blue"
            size="md"
            onToggle={setIsFlag}
          />
        </HStack>
        <Text color={COLORS_GRAYSCALE.PLACEHOLDER} textAlign={"center"}>
          Задача устанавливаетя, как важная!
        </Text>
      </Box>
      <TouchableOpacity
        style={{ marginTop: 12 }}
        onPress={() => {
          dispatch(
            setUserTask({ name: value, date: selectedDate, flag: isFlag })
          );
          navigation.goBack();
        }}
      >
        <LinearGradient
          colors={[PRIMARY_GRADIENT.END, PRIMARY_GRADIENT.START]}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={{
            minWidth: 139,
            height: 56,
            borderRadius: 12,
            alignItems: "center",
            justifyContent: "center",
            padding: PADDING.ALL,
          }}
        >
          <HStack space={2}>
            <Text _light={{ color: "white" }} _dark={{ color: "white" }}>
              Cоздать
            </Text>
          </HStack>
        </LinearGradient>
      </TouchableOpacity>
    </>
  );
}
