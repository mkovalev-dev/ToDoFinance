import { Box, Divider, Heading, Text, View, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, TouchableWithoutFeedback } from "react-native";
import CalendarLegendItem from "./CalendarLegendItem";
import { COLORS_GRAYSCALE, COLORS_PRIMARY } from "../../../modules/colors";
import moment from "moment";
import CategoryListItem from "../../listCategory/HomeCategory/components/categoryListItem";
import { SwipeListView } from "react-native-swipe-list-view";
import { setDeleteCalendarDate } from "../../../services/redux/slices/taskSlice";
import { useDispatch } from "react-redux";

export default function CalendarLegend({ selectedDate, dates }) {
  const [filteredDates, setFilteredDates] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    setFilteredDates(dates.filter((e) => e.date === selectedDate));
  }, [selectedDate, dates]);
  const renderHiddenItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => dispatch(setDeleteCalendarDate(item.id))}
      >
        <View style={styles.rowBack}>
          <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
            <Text style={styles.backTextWhite}>Удалить</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  return (
    <Box
      style={{
        minHeight: 50,
        maxHeight: 300,
        width: "100%",
        backgroundColor: null,
        borderRadius: 12,
        padding: 0,
      }}
      _light={{
        backgroundColor: COLORS_GRAYSCALE.WHITE,
      }}
      _dark={{
        backgroundColor: COLORS_GRAYSCALE.DARK_LIGHT_THEME,
      }}
    >
      {filteredDates.length === 0 ? (
        <Text
          style={{ textAlign: "center" }}
          _light={{ color: COLORS_GRAYSCALE.PLACEHOLDER }}
          _dark={{ color: COLORS_GRAYSCALE.PLACEHOLDER }}
        >
          На эту дату ничего нет. Может создадим?
        </Text>
      ) : (
        <SwipeListView
          useFlatList={true}
          data={filteredDates}
          renderItem={(rowData, rowMap) => (
            <CalendarLegendItem item={rowData.item} />
          )}
          renderHiddenItem={renderHiddenItem}
          ItemSeparatorComponent={() => <View style={{ height: 2 }} />}
          showsVerticalScrollIndicator={false}
          rightOpenValue={-75}
          disableRightSwipe
          closeOnRowOpen
          closeOnRowBeginSwipe
          onRowOpen={(rowKey, rowMap) => {
            setTimeout(() => {
              try {
                rowMap[rowKey].closeRow();
              } catch (e) {}
            }, 2000);
          }}
        />
      )}
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS_GRAYSCALE.WHITE,
    flex: 1,
  },
  backTextWhite: {
    color: "#FFF",
    textAlign: "right",
    width: "100%",
    paddingRight: 10,
  },
  rowFront: {
    alignItems: "center",
    backgroundColor: "#CCC",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "center",
    height: 50,
  },
  rowBack: {
    width: "98%",
    height: 50,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 13,
    backgroundColor: COLORS_GRAYSCALE.WHITE,
    justifyContent: "center",
    // paddingTop: 5,
    // paddingBottom: 5,
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
  },
  backRightBtnRight: {
    width: "100%",
    textAlign: "right",
    backgroundColor: "red",
    borderRadius: 12,
    right: 0,
  },
});
