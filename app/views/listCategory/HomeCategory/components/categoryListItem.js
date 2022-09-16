import { Box, Heading, HStack, Icon, Text } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  COLORS_GRAYSCALE,
  COLORS_PRIMARY,
  SECONDARY_GRADIENT,
} from "../../../../modules/colors";
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
          borderColor: COLORS_PRIMARY.DEFAULT,
          borderStyle: "solid",
          borderWidth: 1,
          justifyContent: "center",
          paddingTop: 5,
          paddingBottom: 5,
          paddingLeft: 15,
          paddingRight: 15,
        }}
        _light={{
          backgroundColor: COLORS_GRAYSCALE.WHITE,
        }}
        _dark={{
          backgroundColor: COLORS_GRAYSCALE.DARK_LIGHT_THEME,
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
              size={6}
              name={item.icon}
              textAlign={"center"}
              _light={{
                color: COLORS_GRAYSCALE.WHITE,
              }}
              _dark={{
                color: COLORS_GRAYSCALE.WHITE,
              }}
            />
          </Box>
          <Heading
            size={"sm"}
            _light={{
              color: COLORS_GRAYSCALE.HEADER,
            }}
            _dark={{
              color: COLORS_GRAYSCALE.WHITE,
            }}
          >
            {item.name}
          </Heading>
          <Spacer />
          <Text
            _light={{
              color: COLORS_GRAYSCALE.HEADER,
            }}
            _dark={{
              color: COLORS_GRAYSCALE.WHITE,
            }}
          >
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
            _light={{
              color: COLORS_GRAYSCALE.HEADER,
            }}
            _dark={{
              color: COLORS_GRAYSCALE.WHITE,
            }}
          />
        </HStack>
      </Box>
    </TouchableWithoutFeedback>
  );
}
