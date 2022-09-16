import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS_GRAYSCALE } from "../../modules/colors";
import TabWheelButton from "./TabWheelButton";
const { width } = Dimensions.get("window");
export default function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        if (route.name === "TabWheel") {
          return <TabWheelButton />;
        }
        let iconName;

        if (route.name === "Home") {
          iconName = "home";
        } else if (route.name === "AddTaskTab") {
          iconName = "notification";
        } else if (route.name === "Calendar") {
          iconName = "calendar";
        } else if (route.name === "Calendar2") {
          iconName = "people";
        }
        return (
          <View
            key={index}
            style={[
              styles.mainItemContainer,
              { borderRightWidth: label == "notes" ? 3 : 0 },
            ]}
          >
            <Pressable
              onPress={onPress}
              style={{
                backgroundColor: isFocused
                  ? COLORS_GRAYSCALE.WHITE
                  : COLORS_GRAYSCALE.DARK_LIGHT_THEME,
                borderRadius: 210,
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                  padding: 15,
                }}
              >
                <Ionicons
                  name={iconName}
                  size={25}
                  color={
                    isFocused ? COLORS_GRAYSCALE.HEADER : COLORS_GRAYSCALE.WHITE
                  }
                />
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 15,
    backgroundColor: COLORS_GRAYSCALE.DARK_LIGHT_THEME,
    borderRadius: 25,
    marginHorizontal: width * 0.05,
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 1,
    borderColor: "#333B42",
  },
});
