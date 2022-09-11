import HeaderTask from "./header";
import { FlatList } from "react-native";
import { Box, Heading, Progress, Text } from "native-base";
import { COLORS_GRAYSCALE, COLORS_PRIMARY } from "../../../../modules/colors";
import { PADDING } from "../../../../modules/padding";
import TaskItem from "./taskItem";
import { shallowEqual, useSelector } from "react-redux";
import moment from "moment";
import { useState } from "react";
import { userTasks } from "../../../../services/redux/slices/taskSlice";
import { getFilterTasksAction } from "../../../../modules/getFilterTasksAction";
import { StaticActionConst } from "../../../../modules/getTasksCountFromAction";

export default function Tasks({ actionName, categoryID = null }) {
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
  return (
    <>
      <HeaderTask
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
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
            value={(complete_count.length / userTasksList?.length) * 100}
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
            {complete_count.length}/{userTasksList?.length}
          </Heading>
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
