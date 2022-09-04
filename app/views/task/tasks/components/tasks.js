import HeaderTask from "./header";
import { FlatList } from "react-native";
import { Box, Heading, Progress, Text } from "native-base";
import { COLORS_GRAYSCALE, COLORS_PRIMARY } from "../../../../modules/colors";
import { PADDING } from "../../../../modules/padding";
import TaskItem from "./taskItem";
import { shallowEqual, useSelector } from "react-redux";
import moment from "moment";
import { useState } from "react";
import { AnimatedFlatList, AnimationType } from "flatlist-intro-animations";

export default function Tasks() {
  const [selectedDate, setSelectedDate] = useState(
    moment().format("YYYY/MM/DD")
  );
  const stateUserTasks = useSelector(
    (state) =>
      Object.keys(state.task.userTasks).reduce((arr, key) => {
        if (state.task.userTasks[key]["date"] === selectedDate)
          arr.push(state.task.userTasks[key]);
        return arr;
      }, []),
    shallowEqual
  );
  const complete_count = useSelector(
    (state) =>
      Object.keys(state.task.userTasks).reduce((arr, key) => {
        if (
          state.task.userTasks[key]["is_finish"] === true &&
          state.task.userTasks[key]["date"] === selectedDate
        )
          arr.push(state.task.userTasks[key]);
        return arr;
      }, []),
    shallowEqual
  );
  return (
    <>
      <HeaderTask
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      {!stateUserTasks || stateUserTasks?.length === 0 ? (
        <Box
          style={{
            width: "100%",
            height: "50%",
            justifyContent: "center",
            padding: PADDING.ALL,
            marginTop: 22,
          }}
          _light={{ borderColor: COLORS_PRIMARY.DEFAULT }}
          _dark={{ borderColor: "white" }}
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
            _dark={{ color: "white" }}
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
            value={(complete_count.length / stateUserTasks?.length) * 100}
          />
          <Heading
            width={"100%"}
            textAlign={"right"}
            _dark={{ color: "white" }}
            _light={{ color: COLORS_GRAYSCALE.HEADER }}
            size={"xs"}
            mt={2}
            mb={2}
            style={{ float: "right" }}
          >
            {complete_count.length}/{stateUserTasks?.length}
          </Heading>
          <FlatList
            showsVerticalScrollIndicator={false}
            inverted={true}
            style={{ marginBottom: 80 }}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "flex-end",
            }}
            data={stateUserTasks}
            renderItem={(item) => (
              <TaskItem item={item.item} index={item.index} />
            )}
          />
        </>
      )}
    </>
  );
}
