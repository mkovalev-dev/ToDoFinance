import { Box, Heading, HStack, Icon, Text } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS_GRAYSCALE } from "../../../../modules/colors";
import { Spacer } from "native-base/src/components/primitives/Flex";
import { useSelector } from "react-redux";
import { userTasks } from "../../../../services/redux/slices/taskSlice";
import {
  getTasksCountFromAction,
  StaticActionConst,
} from "../../../../modules/getTasksCountFromAction";
import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CategoryListItem({ item }) {
  const userTaskList = useSelector(userTasks);
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      key={item.id}
      onPress={() => {
        navigation.navigate("Tasks", {
          actionName: StaticActionConst.CATEGORY,
          categoryId: item.id,
        });
      }}
    >
      <Box
        style={{
          width: "100%",
          height: 55,
          marginTop: 5,
          marginBottom: 5,
          borderRadius: 12,
          backgroundColor: "white",
          justifyContent: "center",
          paddingTop: 5,
          paddingBottom: 5,
          paddingLeft: 15,
          paddingRight: 15,
        }}
      >
        <HStack alignItems={"center"} space={2}>
          <Box
            style={{
              height: 40,
              width: 40,
              backgroundColor: item.color,
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon
              as={FontAwesome5}
              size={7}
              name={item.icon}
              textAlign={"center"}
              _light={{
                color: "white",
              }}
              _dark={{
                color: "white",
              }}
            />
          </Box>
          <Heading size={"sm"} color={COLORS_GRAYSCALE.HEADER}>
            {item.name}
          </Heading>
          <Spacer />
          <Text color={COLORS_GRAYSCALE.HEADER}>
            {getTasksCountFromAction({
              data: userTaskList,
              actionName: StaticActionConst.CATEGORY,
              actionValue: item.id,
            })}
          </Text>
          <Icon
            as={FontAwesome5}
            size={5}
            name={"chevron-right"}
            textAlign={"center"}
            color={COLORS_GRAYSCALE.HEADER}
          />
        </HStack>
      </Box>
    </TouchableWithoutFeedback>
  );
}
