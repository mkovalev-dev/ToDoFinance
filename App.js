import OnboardingScreen from "./app/views/onboarding";
import { NativeBaseProvider, extendTheme, StatusBar } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

const config = {
  dependencies: {
    "linear-gradient": LinearGradient,
  },
  useSystemColorMode: true,
};

const customTheme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <StatusBar />
      <OnboardingScreen />
    </NativeBaseProvider>
  );
}
