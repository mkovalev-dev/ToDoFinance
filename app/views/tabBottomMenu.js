import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./homeStack";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS_GRAYSCALE, COLORS_PRIMARY } from "../modules/colors";
import AddTask from "./task/addTask";
import CalendarStack from "./calendar/CalendarStack";

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
          } else if (route.name === "AddTask") {
            iconName = "add";
          } else if (route.name === "Calendar") {
            iconName = "calendar";
          }
          return <Ionicons name={iconName} size={32} color={color} />;
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
      <Tab.Screen name="AddTask" component={AddTask} />
      <Tab.Screen name="Calendar" component={CalendarStack} />
    </Tab.Navigator>
  );
}
