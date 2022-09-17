import HeaderTask from "./header";
import { FlatList, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Box, Heading, Progress, Text, View } from "native-base";
import { COLORS_GRAYSCALE, COLORS_PRIMARY } from "../../../../modules/colors";
import { PADDING } from "../../../../modules/padding";
import TaskItem from "./taskItem";
import { shallowEqual, useSelector } from "react-redux";
import moment from "moment";
import { useState } from "react";
import {
  setDeleteCalendarDate,
  userTasks,
} from "../../../../services/redux/slices/taskSlice";
import { getFilterTasksAction } from "../../../../modules/getFilterTasksAction";
import { StaticActionConst } from "../../../../modules/getTasksCountFromAction";
import CalendarLegendItem from "../../../calendar/components/CalendarLegendItem";
import { SwipeListView } from "react-native-swipe-list-view";
import React from "react";

export default function Tasks({
  actionName,
  categoryID = null,
  homePage = false,
}) {
  const [selectedDate, setSelectedDate] = useState(
    moment().format("YYYY/MM/DD")
  );
  const stateUserTasks = useSelector(userTasks);
  const userTasksList = getFilterTasksAction({
    data: stateUserTasks,
    date: selectedDate,
    actionName: actionName,
    actionValue:
      actionName === StaticActionConst.FLAG
        ? true
        : actionName === StaticActionConst.CATEGORY
        ? categoryID
        : null,
  });
  const complete_count = userTasksList.filter((e) => e.is_finish === true);

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
    <>
      {!homePage && (
        <HeaderTask
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      )}
      {!userTasksList || userTasksList?.length === 0 ? (
        <Box
          style={{
            width: "100%",
            height: "50%",
            justifyContent: "center",
            padding: PADDING.ALL,
            marginTop: 22,
          }}
          _light={{ borderColor: COLORS_PRIMARY.DEFAULT }}
          _dark={{ borderColor: COLORS_GRAYSCALE.WHITE }}
        >
          <Text
            style={{ textAlign: "center" }}
            _light={{ color: COLORS_GRAYSCALE.PLACEHOLDER }}
            _dark={{ color: COLORS_GRAYSCALE.PLACEHOLDER }}
          >
            Задачи отсутсвуют...
          </Text>
        </Box>
      ) : (
        <>
          <Heading
            _dark={{ color: COLORS_GRAYSCALE.WHITE }}
            _light={{ color: COLORS_GRAYSCALE.HEADER }}
            size={"sm"}
            mt={4}
            mb={2}
          >
            Прогресс
          </Heading>
          <Progress
            colorScheme="blue"
            size="md"
            value={(complete_count.length / userTasksList?.length) * 100}
          />
          <Heading
            width={"100%"}
            textAlign={"right"}
            _dark={{ color: COLORS_GRAYSCALE.WHITE }}
            _light={{ color: COLORS_GRAYSCALE.HEADER }}
            size={"xs"}
            mt={2}
            mb={2}
            style={{ float: "right" }}
          >
            {complete_count.length}/{userTasksList?.length}
          </Heading>
          {/*<SwipeListView*/}
          {/*  useFlatList={true}*/}
          {/*  data={userTasksList}*/}
          {/*  renderItem={(rowData, rowMap) => (*/}
          {/*    <TaskItem item={rowData.item} index={rowData.index} />*/}
          {/*  )}*/}
          {/*  renderHiddenItem={renderHiddenItem}*/}
          {/*  ItemSeparatorComponent={() => <View style={{ height: 2 }} />}*/}
          {/*  showsVerticalScrollIndicator={false}*/}
          {/*  inverted={true}*/}
          {/*  rightOpenValue={-75}*/}
          {/*  disableRightSwipe*/}
          {/*  closeOnRowOpen*/}
          {/*  closeOnRowBeginSwipe*/}
          {/*  contentContainerStyle={{*/}
          {/*    flexGrow: 1,*/}
          {/*    justifyContent: "flex-end",*/}
          {/*  }}*/}
          {/*  onRowOpen={(rowKey, rowMap) => {*/}
          {/*    setTimeout(() => {*/}
          {/*      try {*/}
          {/*        rowMap[rowKey].closeRow();*/}
          {/*      } catch (e) {}*/}
          {/*    }, 2000);*/}
          {/*  }}*/}
          {/*/>*/}
          <FlatList
            showsVerticalScrollIndicator={false}
            inverted={true}
            style={{ marginBottom: 80 }}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "flex-end",
            }}
            data={userTasksList}
            renderItem={(item) => (
              <TaskItem item={item.item} index={item.index} />
            )}
          />
        </>
      )}
    </>
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
    width: "100%",
    height: 55,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 12,
    backgroundColor: COLORS_GRAYSCALE.WHITE,
    justifyContent: "center",
    paddingTop: 5,
    paddingBottom: 5,
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
