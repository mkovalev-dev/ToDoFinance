import {
  COLORS_GRAYSCALE,
  COLORS_PRIMARY,
  SECONDARY_GRADIENT,
} from "../../modules/colors";
import { PADDING } from "../../modules/padding";
import { Box, Heading, HStack, Icon, Input, Switch, Text } from "native-base";
import Header from "./components/add/header";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import ColorRadioItem from "../listCategory/addCategory/components/ColorRadioItem";
import { useState } from "react";
import DatePicker from "react-native-modern-datepicker";
import { ScrollView } from "react-native";
import moment from "moment";
import DateTimePicker from "@react-native-community/datetimepicker";
const colorList = [
  { id: 1, color: "#eb5645" },
  { id: 2, color: "#f3a43c" },
  { id: 3, color: "#f8d649" },
  { id: 4, color: "#67cd68" },
  { id: 5, color: "#89c0fa" },
  { id: 6, color: "#0772FF" },
  { id: 7, color: "#5d5bde" },
  { id: 8, color: "#ea5c7a" },
  { id: 9, color: "#c883ed" },
  { id: 10, color: "#c3a77c" },
  { id: 11, color: "#747e89" },
  { id: 12, color: "#e2b6b1" },
];
export default function AddCalendar() {
  const [selectedColor, setSelectedColor] = useState(COLORS_PRIMARY.DEFAULT);
  const [name, setName] = useState("");
  const [selectedDate, setSelectedDate] = useState(
    moment().format("YYYY/MM/DD")
  );
  const [selectedTime, setSelectedTime] = useState(moment().format("HH:mm"));
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
      <Header
        color={selectedColor}
        name={name}
        date={selectedDate}
        time={selectedTime}
      />
      <ScrollView
        style={{ marginBottom: 80 }}
        showsVerticalScrollIndicator={false}
      >
        <Box
          _light={{
            backgroundColor: "white",
          }}
          _dark={{
            backgroundColor: "white",
          }}
          style={{ borderRadius: 12, padding: 24 }}
        >
          <Input
            height={55}
            borderRadius={12}
            variant="filled"
            textAlign={"center"}
            fontWeight={"extrabold"}
            fontSize={16}
            placeholder={"Название"}
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
            onChangeText={setName}
          />
        </Box>
        <Box
          mt={4}
          style={{
            backgroundColor: "#fff",
            width: "100%",
            minHeight: 55,
            padding: PADDING.ALL,
            // paddingBottom: 0,
            borderRadius: 12,
          }}
        >
          <HStack space={2} justifyContent={"center"} alignItems={"center"}>
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
            >
              Дата:
            </Heading>
            <DateTimePicker
              locale="ru-RU"
              display={"compact"}
              style={{ flex: 1 }}
              testID="dateTimePicker"
              value={new Date(selectedDate)}
              mode={"datetime"}
              is24Hour={true}
              onChange={(event, date) => {
                setSelectedDate(moment(date).format("YYYY/MM/DD HH:mm"));
                setSelectedTime(moment(date).format("HH:mm"));
              }}
            />
          </HStack>
          {/*<DatePicker*/}
          {/*  mode={"calendar"}*/}
          {/*  onSelectedChange={(date) => setSelectedDate(date)}*/}
          {/*  options={{*/}
          {/*    mainColor: COLORS_PRIMARY.DEFAULT,*/}
          {/*  }}*/}
          {/*  configs={{*/}
          {/*    dayNames: [*/}
          {/*      "Воскресенье",*/}
          {/*      "Понедельник",*/}
          {/*      "Вторник",*/}
          {/*      "Среда",*/}
          {/*      "Четверг",*/}
          {/*      "Пятница",*/}
          {/*      "Суббота",*/}
          {/*    ],*/}
          {/*    dayNamesShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],*/}
          {/*    monthNames: [*/}
          {/*      "Январь",*/}
          {/*      "Февраль",*/}
          {/*      "Март",*/}
          {/*      "Апрель",*/}
          {/*      "Май",*/}
          {/*      "Июнь",*/}
          {/*      "Июль",*/}
          {/*      "Август",*/}
          {/*      "Сентябрь",*/}
          {/*      "Октябрь",*/}
          {/*      "Ноябрь",*/}
          {/*      "Декабрь",*/}
          {/*    ],*/}
          {/*  }}*/}
          {/*/>*/}
        </Box>
        <Box
          _light={{
            backgroundColor: "white",
          }}
          _dark={{
            backgroundColor: "white",
          }}
          style={{ borderRadius: 12, padding: 24 }}
          mt={4}
        >
          <Heading
            color={COLORS_GRAYSCALE.HEADER}
            size={"md"}
            width={"100%"}
            mb={4}
          >
            Цвет на календаре:
          </Heading>
          <HStack flexWrap={"wrap"} style={{ maxWidth: "100%" }} space={1.5}>
            {colorList.map((value) => {
              return (
                <ColorRadioItem
                  key={value.id}
                  value={value}
                  setColorSelected={setSelectedColor}
                  colorSelected={selectedColor}
                />
              );
            })}
          </HStack>
        </Box>
      </ScrollView>
    </Box>
  );
}
