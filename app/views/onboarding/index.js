import {
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import {
  COLORS_GRAYSCALE,
  COLORS_PRIMARY,
  PRIMARY_GRADIENT,
  SECONDARY_GRADIENT,
} from "../../modules/colors";
import { OnboardingItems } from "../../modules/onboarding_items";
import { Box, Heading, HStack, Text } from "native-base";
import { PADDING } from "../../modules/padding";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
const { width, height } = Dimensions.get("window");
import { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Slide = ({ item }) => {
  return (
    <View
      style={{
        alignItems: "center",
        width,
      }}
    >
      <Image
        source={item.item.image}
        style={{ height: "60%", width: width / 1.5, resizeMode: "contain" }}
      />
      <Box
        style={{ padding: PADDING.ALL }}
        bg={{
          linearGradient: {
            colors: [COLORS_PRIMARY.DEFAULT, "orange.500"],
            start: [1, 0],
            end: [0, 1],
          },
        }}
      >
        <Heading
          _light={{ color: COLORS_PRIMARY.DEFAULT }}
          _dark={{ color: COLORS_GRAYSCALE.WHITE }}
          size={"xl"}
        >
          {item.item.title}
        </Heading>
        <Text
          mt="3"
          fontWeight="medium"
          _light={{ color: COLORS_GRAYSCALE.LABEL }}
          _dark={{ color: COLORS_GRAYSCALE.PLACEHOLDER }}
        >
          {item.item.subtitle}
        </Text>
      </Box>
    </View>
  );
};

export default function OnboardingScreen() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const refSlider = useRef(null);
  const navigation = useNavigation();
  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    const offset = nextSlideIndex * width;
    refSlider?.current?.scrollToOffset({ offset });
    setCurrentSlideIndex(nextSlideIndex);
  };
  const skipSliders = () => {
    const lastSlideIndex = OnboardingItems.length - 1;
    const offset = lastSlideIndex * width;
    refSlider?.current?.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const updateCurrentSlideIndex = (e) => {
    const currentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(currentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToInitialPage = async () => {
    await AsyncStorage.setItem("onboarding", "true");
    navigation.navigate("HomeStack");
  };
  return (
    <Box
      _light={{
        backgroundColor: COLORS_PRIMARY.BACKGROUND_LIGHT,
      }}
      _dark={{
        backgroundColor: SECONDARY_GRADIENT.START,
      }}
      style={{
        flex: 1,
      }}
    >
      <FlatList
        ref={refSlider}
        pagingEnabled
        data={OnboardingItems}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: height }}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={(item) => <Slide item={item} />}
      />
      {currentSlideIndex === OnboardingItems.length - 1 ? (
        <TouchableOpacity
          onPress={goToInitialPage}
          style={{
            position: "absolute",
            bottom: 36,
            right: PADDING.RIGHT,
            left: PADDING.LEFT,
          }}
        >
          <LinearGradient
            colors={[PRIMARY_GRADIENT.END, PRIMARY_GRADIENT.START]}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={{
              minWidth: "100%",
              height: 56,
              borderRadius: 12,
              alignItems: "center",
              justifyContent: "center",
              padding: PADDING.ALL,
            }}
          >
            <HStack space={2}>
              <Text _light={{ color: "white" }} _dark={{ color: "white" }}>
                К планам
              </Text>
              <AntDesign name="arrowright" size={24} color="white" />
            </HStack>
          </LinearGradient>
        </TouchableOpacity>
      ) : (
        <>
          <TouchableOpacity
            onPress={skipSliders}
            style={{ position: "absolute", top: 66, right: PADDING.RIGHT }}
          >
            <Text
              _light={{ color: COLORS_GRAYSCALE.LABEL }}
              _dark={{ color: COLORS_GRAYSCALE.LABEL }}
            >
              Пропустить
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={goNextSlide}
            style={{ position: "absolute", bottom: 36, right: PADDING.RIGHT }}
          >
            <LinearGradient
              colors={[PRIMARY_GRADIENT.END, PRIMARY_GRADIENT.START]}
              start={{ x: 1, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={{
                minWidth: 139,
                height: 56,
                borderRadius: 12,
                alignItems: "center",
                justifyContent: "center",
                padding: PADDING.ALL,
              }}
            >
              <HStack space={2}>
                <Text _light={{ color: "white" }} _dark={{ color: "white" }}>
                  Далее
                </Text>
                <AntDesign name="arrowright" size={24} color="white" />
              </HStack>
            </LinearGradient>
          </TouchableOpacity>
        </>
      )}
    </Box>
  );
}
