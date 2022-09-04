import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./home";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS_GRAYSCALE, COLORS_PRIMARY } from "../modules/colors";
import { Text } from "native-base";
import CalendarScreen from "./calendar";

const Tab = createBottomTabNavigator();

export default function TabBottomMenu() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        showLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Calendar") {
            iconName = "calendar";
          }
          return <Ionicons name={iconName} size={28} color={color} />;
        },
        tabBarStyle: {
          height: 80,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          paddingHorizontal: 5,
          paddingTop: 20,
          position: "absolute",
          borderTopWidth: 0,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS_PRIMARY.DEFAULT,
        tabBarInactiveTintColor: COLORS_GRAYSCALE.HEADER,
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
    </Tab.Navigator>
  );
}
