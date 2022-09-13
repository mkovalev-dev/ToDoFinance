import { createStackNavigator } from "@react-navigation/stack";
import CalendarScreen from "./index";
import AddCalendar from "./AddCalendar";

const CalendarScreenStack = createStackNavigator();

export default function CalendarStack() {
  return (
    <CalendarScreenStack.Navigator>
      <CalendarScreenStack.Screen
        name="HomeCalendar"
        component={CalendarScreen}
        options={{ headerShown: false, presentation: "modal" }}
      />
      <CalendarScreenStack.Screen
        name="AddCalendar"
        component={AddCalendar}
        options={{ headerShown: false, presentation: "modal" }}
      />
    </CalendarScreenStack.Navigator>
  );
}
