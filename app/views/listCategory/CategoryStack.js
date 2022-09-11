import { createStackNavigator } from "@react-navigation/stack";
import AddCategory from "./addCategory";
import HomeCategory from "./HomeCategory";

const CategoryScreenStack = createStackNavigator();

export default function CategoryStack() {
  return (
    <CategoryScreenStack.Navigator>
      <CategoryScreenStack.Screen
        name="HomeCategory"
        component={HomeCategory}
        options={{ headerShown: false, presentation: "modal" }}
      />
      <CategoryScreenStack.Screen
        name="AddCategory"
        component={AddCategory}
        options={{ headerShown: false, presentation: "modal" }}
      />
    </CategoryScreenStack.Navigator>
  );
}
