import { PADDING } from "../../../../modules/padding";
import { COLORS_GRAYSCALE, COLORS_PRIMARY } from "../../../../modules/colors";
import { Box, Checkbox, Heading, HStack, IconButton } from "native-base";
import { Spacer } from "native-base/src/components/primitives/Flex";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserCompleteTask,
  userTasks,
  setDeleteTask,
} from "../../../../services/redux/slices/taskSlice";
import { Alert, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function TaskItem({ item, index }) {
  const [isFinish, setIsFinish] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (item.is_finish) {
      setIsFinish(true);
    } else {
      setIsFinish(false);
    }
  }, []);

  const changeProgress = (v) => {
    setIsFinish(v);
    dispatch(setUserCompleteTask({ index: item.id, value: v }));
  };

  const onDeleteTask = () => {
    Alert.alert("Удаление", `Вы действительно хотите удалить «${item.name}»`, [
      {
        text: "Отменить",
        onPress: () => setIsDelete(false),
        style: "cancel",
      },
      {
        text: "Удалить",
        style: "destructive",
        onPress: () => dispatch(setDeleteTask(item.id)),
      },
    ]);
  };
  return (
    <TouchableOpacity
      onPress={() => {
        changeProgress(!isFinish);
      }}
      onLongPress={() => {
        setIsDelete(true);
      }}
    >
      <Box
        style={{
          width: "100%",
          minHeight: 65,
          borderRadius: 16,
          borderWidth: 1,
          justifyContent: "center",
          padding: PADDING.ALL,
          marginTop: 22,
        }}
        _light={{ borderColor: COLORS_PRIMARY.DEFAULT }}
        _dark={{ borderColor: "white" }}
      >
        <HStack alignItems="center" justifyContent="center" space={2}>
          <Heading
            strikeThrough={isFinish}
            _dark={{ color: "white" }}
            _light={{ color: COLORS_GRAYSCALE.HEADER }}
            size={"sm"}
          >
            {item.name}
          </Heading>
          <Spacer />
          {isFinish && (
            <IconButton
              borderRadius={12}
              isDisabled
              colorScheme="blue"
              variant={"solid"}
              size={"md"}
              _icon={{
                as: AntDesign,
                name: "check",
              }}
            />
          )}
          {isDelete && (
            <>
              <IconButton
                borderRadius={12}
                colorScheme="error"
                variant={"solid"}
                size={"md"}
                _icon={{
                  as: AntDesign,
                  name: "delete",
                }}
                onPress={onDeleteTask}
              />
              <IconButton
                borderRadius={12}
                colorScheme="blueGray"
                variant={"solid"}
                size={"md"}
                _icon={{
                  as: AntDesign,
                  name: "close",
                }}
                onPress={() => {
                  setIsDelete(false);
                }}
              />
            </>
          )}
        </HStack>
      </Box>
    </TouchableOpacity>
  );
}
