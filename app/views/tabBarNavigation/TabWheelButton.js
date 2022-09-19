import {
  Box,
  Center,
  HStack,
  Icon,
  IconButton,
  Stagger,
  useDisclose,
} from "native-base";
import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { COLORS_GRAYSCALE, COLORS_PRIMARY } from "../../modules/colors";
import { useNavigation } from "@react-navigation/native";

export default function TabWheelButton() {
  const { isOpen, onToggle } = useDisclose();
  const navigation = useNavigation();
  return (
    <Center>
      {isOpen && (
        <Box style={{ flexDirection: "row", position: "absolute" }}>
          <Stagger
            visible={isOpen}
            initial={{
              opacity: 0,
              scale: 0,
              translateY: 34,
            }}
            animate={{
              translateY: 0,
              scale: 1,
              opacity: 1,
              transition: {
                type: "spring",
                mass: 0.8,
                stagger: {
                  offset: 30,
                  reverse: true,
                },
              },
            }}
            exit={{
              translateY: 34,
              scale: 0.5,
              opacity: 0,
              transition: {
                duration: 100,
                stagger: {
                  offset: 30,
                  reverse: true,
                },
              },
            }}
          >
            <IconButton
              mb="40"
              variant="solid"
              bg="indigo.500"
              colorScheme="indigo"
              borderRadius="full"
              onPress={() => {
                navigation.navigate("AddTask");
                onToggle();
              }}
              icon={
                <Icon
                  as={MaterialIcons}
                  size="9"
                  name="playlist-add"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="warmGray.50"
                />
              }
            />
            <Box style={{ width: 12 }} />
            <IconButton
              mb="40"
              variant="solid"
              bg="yellow.400"
              colorScheme="yellow"
              borderRadius="full"
              onPress={() => {
                navigation.navigate("AddCategory");
                onToggle();
              }}
              icon={
                <Icon
                  as={MaterialIcons}
                  _dark={{
                    color: "warmGray.50",
                  }}
                  size="9"
                  name="create-new-folder"
                  color="warmGray.50"
                />
              }
            />
            <Box style={{ width: 12 }} />
            <IconButton
              mb="40"
              variant="solid"
              bg="green.400"
              colorScheme="green"
              borderRadius="full"
              onPress={() => {
                navigation.navigate("Calendar", {screen: 'AddCalendar'});
                onToggle();
              }}
              icon={
                <Icon
                  as={FontAwesome5}
                  _dark={{
                    color: "warmGray.50",
                  }}
                  size="9"
                  name="calendar-plus"
                  color="warmGray.50"
                />
              }
            />
          </Stagger>
        </Box>
      )}
      <HStack alignItems="center">
        <IconButton
          variant="solid"
          borderRadius="full"
          size="lg"
          onPress={onToggle}
          _pressed={{
            backgroundColor: COLORS_GRAYSCALE.DARK_LIGHT_THEME,
          }}
          bg={isOpen ? COLORS_PRIMARY.DEFAULT_STRONG : COLORS_PRIMARY.DEFAULT}
          icon={
            <Icon
              as={MaterialCommunityIcons}
              size="9"
              name="plus-circle-outline"
              color="warmGray.50"
              _dark={{
                color: "warmGray.50",
              }}
            />
          }
        />
      </HStack>
    </Center>
  );
}
