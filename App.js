import OnboardingScreen from "./app/views/onboarding";
import { NativeBaseProvider, extendTheme, StatusBar } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "./app/services/redux/store";
import moment from "moment";
import "moment/locale/ru";
import TabBottomMenu from "./app/views/tabBarNavigation/tabBottomMenu";
const config = {
  dependencies: {
    "linear-gradient": LinearGradient,
  },
  useSystemColorMode: true,
};
moment().locale("ru");

const customTheme = extendTheme({ config });
const MainStack = createStackNavigator();
const persistor = persistStore(store);

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [viewOnboarding, setViewOnboarding] = useState(true);
  const [appIsReady, setAppIsReady] = useState(false);

  const checkViewOnboarding = async () => {
    let data = await AsyncStorage.getItem("onboarding");
    if (data) {
      setViewOnboarding(false);
    } else {
      setViewOnboarding(true);
    }
  };

  useEffect(() => {
    async function prepare() {
      try {
        checkViewOnboarding();
      } catch (e) {
        // console.warn(e);
      } finally {
        setAppIsReady(true);
        if (appIsReady) {
          await SplashScreen.hideAsync();
        }
      }
    }

    prepare();
  }, [appIsReady, viewOnboarding]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider theme={customTheme}>
          <StatusBar />
          <NavigationContainer>
            <MainStack.Navigator>
              {viewOnboarding && (
                <MainStack.Screen
                  name="OnboardingScreen"
                  component={OnboardingScreen}
                  options={{ headerShown: false, gestureEnabled: false }}
                />
              )}
              <MainStack.Screen
                name="HomeStack"
                component={TabBottomMenu}
                options={{ headerShown: false, gestureEnabled: false }}
              />
            </MainStack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
}
