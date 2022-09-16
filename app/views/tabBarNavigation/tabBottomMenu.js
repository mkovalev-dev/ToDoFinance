import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "../homeStack";
import AddTask from "../task/addTask";
import CalendarStack from "../calendar/CalendarStack";
import CustomTabBar from "./CustomTabBar";

const Tab = createBottomTabNavigator();

export default function TabBottomMenu() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        showLabel: false,
      })}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      {/*<Tab.Screen name="AddTaskTab" component={AddTask} />*/}
      <Tab.Screen name="TabWheel" component={CalendarStack} />
      <Tab.Screen name="Calendar" component={CalendarStack} />
      {/*<Tab.Screen name="Calendar2" component={CalendarStack} />*/}
    </Tab.Navigator>
  );
}
