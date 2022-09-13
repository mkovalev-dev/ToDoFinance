import { Box, Heading, Text } from "native-base";
import { COLORS_GRAYSCALE } from "../../modules/colors";
import { useSelector } from "react-redux";
import { userCalendarDate } from "../../services/redux/slices/taskSlice";
import { useState } from "react";
import { useEffect } from "react";
import moment from "moment";
import { FlatList } from "react-native";
import TodayItems from "./todayItems";
import React from "react";

export default function Today() {
  const userCalendarDates = useSelector(userCalendarDate);
  const [filteredDates, setFilteredDates] = useState([]);
  useEffect(() => {
    setFilteredDates(
      userCalendarDates.filter((e) => e.date === moment().format("YYYY-MM-DD"))
    );
  }, [userCalendarDates]);
  return (
    <Box style={{ marginBottom: 18 }}>
      <Heading
        _dark={{ color: "white" }}
        _light={{ color: COLORS_GRAYSCALE.HEADER }}
        size={"lg"}
      >
        Сегодня
      </Heading>
      <Box
        style={{
          backgroundColor: "white",
          minHeight: 119,
          maxHeight: 150,
          borderRadius: 12,
          marginTop: 15,
          padding: 12,
          justifyContent: "center",
        }}
      >
        {filteredDates.length === 0 ? (
          <Text
            style={{ textAlign: "center" }}
            _light={{ color: COLORS_GRAYSCALE.PLACEHOLDER }}
            _dark={{ color: COLORS_GRAYSCALE.PLACEHOLDER }}
          >
            На сегодня ничего важного.
          </Text>
        ) : (
          <FlatList
            data={filteredDates}
            renderItem={({ item }) => <TodayItems item={item} />}
          />
        )}
      </Box>
    </Box>
  );
}
