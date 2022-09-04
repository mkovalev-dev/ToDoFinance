import { createStackNavigator } from "@react-navigation/stack";
import TasksScreen from "./tasks";
import AddTask from "./addTask";

const HomeScreenStack = createStackNavigator();

export default function HomeStack() {
  return (
    <HomeScreenStack.Navigator>
      <HomeScreenStack.Screen
        name="Tasks"
        component={TasksScreen}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <HomeScreenStack.Screen
        name="AddTask"
        component={AddTask}
        options={{ headerShown: false, presentation: "modal" }}
      />
    </HomeScreenStack.Navigator>
  );
}
