import { Box, Heading, HStack, Icon, Text } from "native-base";
import { TouchableOpacity } from "react-native";
import {
  COLORS_GRAYSCALE,
  COLORS_PRIMARY,
  WARNING,
} from "../../../modules/colors";
import { Entypo } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { userTasks } from "../../../services/redux/slices/taskSlice";
import moment from "moment";
import {
  StaticActionConst,
  getTasksCountFromAction,
} from "../../../modules/getTasksCountFromAction";
import { useNavigation } from "@react-navigation/native";

export default function StaticAction() {
  const stateTaskList = useSelector(userTasks);
  const navigation = useNavigation();
  const StackActionData = [
    {
      id: 1,
      name: "Сегодня",
      icon: "calendar",
      count: getTasksCountFromAction({
        data: stateTaskList,
        actionName: "date",
        actionValue: moment().format("YYYY/MM/DD"),
      }),
      color: COLORS_PRIMARY.DEFAULT,
      action: StaticActionConst.DATE,
    },
    {
      id: 2,
      name: "С флажком",
      icon: "flag",
      count: getTasksCountFromAction({
        data: stateTaskList,
        actionName: "flag",
        actionValue: true,
      }),
      color: WARNING.DEFAULT,
      action: StaticActionConst.FLAG,
    },
  ];
  return (
    <HStack space={"4%"} style={{ marginBottom: 18 }}>
      {StackActionData.map((data) => {
        return (
          <TouchableOpacity
            style={{ width: "48%" }}
            key={data.id}
            onPress={() => {
              navigation.navigate("Tasks", { actionName: data.action });
            }}
          >
            <Box
              style={{
                height: 92,
                width: "100%",
                borderRadius: 12,
                padding: 12,
              }}
              _dark={{ backgroundColor: COLORS_GRAYSCALE.DARK_LIGHT_THEME }}
              _light={{ backgroundColor: COLORS_GRAYSCALE.WHITE }}
            >
              <Box
                size={9}
                style={{
                  backgroundColor: data.color,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 12,
                  position: "absolute",
                  top: 10,
                  left: 10,
                }}
              >
                <Icon
                  as={Entypo}
                  size={5}
                  name={data.icon}
                  _light={{
                    color: COLORS_PRIMARY.BACKGROUND_LIGHT,
                  }}
                  _dark={{
                    color: COLORS_PRIMARY.BACKGROUND_LIGHT,
                  }}
                />
              </Box>
              <Heading
                size={"md"}
                style={{
                  position: "absolute",
                  bottom: 10,
                  left: 10,
                }}
                _dark={{ color: COLORS_GRAYSCALE.WHITE }}
                _light={{ color: COLORS_GRAYSCALE.HEADER }}
              >
                {data.name}
              </Heading>
              <Heading
                size={"lg"}
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                }}
                _dark={{ color: COLORS_GRAYSCALE.WHITE }}
                _light={{ color: COLORS_GRAYSCALE.HEADER }}
              >
                {data.count}
              </Heading>
            </Box>
          </TouchableOpacity>
        );
      })}
    </HStack>
  );
}
