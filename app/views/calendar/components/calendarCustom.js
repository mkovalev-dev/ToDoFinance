import React, { useState, useCallback, useMemo, useEffect } from "react";
import { Calendar, CalendarUtils } from "react-native-calendars";
import { COLORS_GRAYSCALE, COLORS_PRIMARY } from "../../../modules/colors";
import { Box, Heading, View } from "native-base";
import { LocaleConfig } from "react-native-calendars/src/index";
import moment from "moment";
import { useSelector } from "react-redux";
import { userCalendarDate } from "../../../services/redux/slices/taskSlice";
import CalendarLegend from "./CalendarLegend";

const INITIAL_DATE = moment().format("YYYY-MM-DD");
LocaleConfig.locales["ru"] = {
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
  monthNamesShort: [
    "Янв.",
    "Фев.",
    "Мар.",
    "Апр.",
    "Май",
    "Июн.",
    "Июл.",
    "Авг.",
    "Сен.",
    "Окт.",
    "Ноя.",
    "Дек.",
  ],
  dayNames: [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ],
  dayNamesShort: ["Вс.", "Пн.", "Вт.", "Ср.", "Чт.", "Пт.", "Сб."],
  today: "Сегодня",
};
LocaleConfig.defaultLocale = "ru";
const CalendarScreen = () => {
  const [selected, setSelected] = useState(INITIAL_DATE);
  const userCalendarDates = useSelector(userCalendarDate);
  const [formatedDates, setFormatedDates] = useState({});
  useEffect(() => {
    let customDate = {};
    userCalendarDates.map((params) => {
      customDate = Object.assign({}, customDate, {
        [params.date]: { dotColor: params.color, marked: true },
      });
    });
    setFormatedDates(customDate);
  }, [userCalendarDates]);
  const getDate = (count) => {
    const date = new Date(INITIAL_DATE);
    const newDate = date.setDate(date.getDate() + count);
    return CalendarUtils.getCalendarDateString(newDate);
  };
  const onDayPress = useCallback((day) => {
    setSelected(day.dateString);
  }, []);

  const marked = useMemo(() => {
    return Object.assign({}, formatedDates, {
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: COLORS_PRIMARY.DEFAULT,
        selectedTextColor: "white",
      },
    });
  }, [selected, formatedDates, userCalendarDates]);

  return (
    <View>
      <Calendar
        enableSwipeMonths
        current={INITIAL_DATE}
        style={{ marginBottom: 15, padding: 10, borderRadius: 12 }}
        onDayPress={onDayPress}
        firstDay={1}
        markedDates={marked}
        theme={{
          textSectionTitleColor: COLORS_GRAYSCALE.HEADER,
          textSectionTitleDisabledColor: "gray",
          todayTextColor: COLORS_PRIMARY.DEFAULT,
          monthTextColor: "black",
          selectedDayBackgroundColor: "#333248",
          arrowColor: COLORS_PRIMARY.DEFAULT,
          stylesheet: {
            calendar: {
              header: {
                week: {
                  marginTop: 30,
                  marginHorizontal: 12,
                  flexDirection: "row",
                  justifyContent: "space-between",
                },
              },
            },
          },
        }}
      />
      <Heading
        _dark={{ color: "white" }}
        _light={{ color: COLORS_GRAYSCALE.HEADER }}
        size={"lg"}
        style={{ marginBottom: 18 }}
      >
        {selected === moment().format("YYYY-MM-DD")
          ? "Сегодня"
          : moment(selected).format("DD-MM-YYYY")}
      </Heading>
      <CalendarLegend selectedDate={selected} dates={userCalendarDates} />
    </View>
  );
};

export default CalendarScreen;
