import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./homeStack";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS_GRAYSCALE, COLORS_PRIMARY } from "../modules/colors";
import AddTask from "./task/addTask";
import CalendarStack from "./calendar/CalendarStack";
import LottieView from "lottie-react-native";
import { useRef, useEffect } from "react";

const Tab = createBottomTabNavigator();

const LottieIcon = ({ focused, icon, route, progress }) => {
  const animation = useRef();
  if (focused) {
    animation.current?.play();
    setTimeout(() => {
      animation.current?.pause();
      if (progress !== 1) {
        animation.current?.reset();
      }
    }, 1000);
  }
  return (
    <LottieView
      progress={progress}
      loop={true}
      ref={animation}
      source={icon}
      style={{ width: 35 }}
    />
  );
};

export default function TabBottomMenu() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        showLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let progress;

          if (route.name === "Home") {
            iconName = require("../assets/icons/home.json");
            progress = 0;
          } else if (route.name === "AddTask") {
            iconName = require("../assets/icons/plus.json");
            progress = 0;
          } else if (route.name === "Calendar") {
            iconName = require("../assets/icons/calendar.json");
            progress = 1;
          }

          return (
            <LottieIcon
              focused={focused}
              icon={iconName}
              route={route}
              progress={progress}
            />
          );
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
