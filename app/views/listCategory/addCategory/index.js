import { Box, Container, Input, Text, Radio, HStack, Icon } from "native-base";
import {
  COLORS_GRAYSCALE,
  COLORS_PRIMARY,
  SECONDARY_GRADIENT,
} from "../../../modules/colors";
import { PADDING } from "../../../modules/padding";
import Header from "./components/header";
import ColorRadioItem from "./components/ColorRadioItem";
import { useState } from "react";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import IconRadioItem from "./components/IconRadioItem";

const colorList = [
  { id: 1, color: "#eb5645" },
  { id: 2, color: "#f3a43c" },
  { id: 3, color: "#f8d649" },
  { id: 4, color: "#67cd68" },
  { id: 5, color: "#89c0fa" },
  { id: 6, color: "#0772FF" },
  { id: 7, color: "#5d5bde" },
  { id: 8, color: "#ea5c7a" },
  { id: 9, color: "#c883ed" },
  { id: 10, color: "#c3a77c" },
  { id: 11, color: "#747e89" },
  { id: 12, color: "#e2b6b1" },
];

const iconList = [
  { id: 1, icon: "asterisk" },
  { id: 2, icon: "award" },
  { id: 3, icon: "bars" },
  { id: 4, icon: "bell" },
  { id: 6, icon: "bomb" },
  { id: 7, icon: "book" },
  { id: 9, icon: "btc" },
  { id: 10, icon: "calculator" },
  { id: 11, icon: "camera" },
  { id: 12, icon: "car" },
  { id: 14, icon: "cat" },
  { id: 15, icon: "cog" },
  { id: 17, icon: "cookie-bite" },
  { id: 19, icon: "dev" },
  { id: 21, icon: "dog" },
  { id: 22, icon: "dribbble" },
  { id: 23, icon: "dumbbell" },
  { id: 24, icon: "ello" },
  { id: 25, icon: "file-alt" },
  { id: 26, icon: "fire" },
  { id: 27, icon: "grin" },
  { id: 28, icon: "grin-hearts" },
  { id: 29, icon: "grin-wink" },
  { id: 30, icon: "hand-spock" },
];

export default function AddCategory() {
  const [name, setName] = useState("");
  const [selectedColor, setSelectedColor] = useState(COLORS_PRIMARY.DEFAULT);
  const [selectedIcon, setSelectedIcon] = useState("grin");
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
        padding: PADDING.ALL,
      }}
    >
      <Header data={{ name: name, color: selectedColor, icon: selectedIcon }} />
      <Box
        _light={{
          backgroundColor: "white",
        }}
        _dark={{
          backgroundColor: "white",
        }}
        style={{ borderRadius: 12, padding: 24 }}
      >
        <Box alignItems={"center"} mb={6}>
          <Box
            style={{
              height: 110,
              width: 110,
              borderRadius: 100,
              backgroundColor: selectedColor,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon
              as={FontAwesome5}
              size={12}
              name={selectedIcon}
              textAlign={"center"}
              _light={{
                color: "white",
              }}
              _dark={{
                color: "white",
              }}
            />
          </Box>
        </Box>
        <Input
          height={55}
          borderRadius={12}
          variant="filled"
          textAlign={"center"}
          fontWeight={"extrabold"}
          fontSize={16}
          placeholder={"Название"}
          clearButtonMode="always"
          _light={{
            backgroundColor: COLORS_GRAYSCALE.LINE,
            color: COLORS_GRAYSCALE.HEADER,
          }}
          _dark={{
            color: COLORS_GRAYSCALE.HEADER,
            backgroundColor: COLORS_GRAYSCALE.LINE,
            borderColor: COLORS_GRAYSCALE.LINE,
          }}
          onChangeText={setName}
        />
      </Box>
      <Box
        _light={{
          backgroundColor: "white",
        }}
        _dark={{
          backgroundColor: "white",
        }}
        style={{ borderRadius: 12, padding: 24 }}
        mt={4}
      >
        <HStack flexWrap={"wrap"} style={{ maxWidth: "100%" }} space={1.5}>
          {colorList.map((value) => {
            return (
              <ColorRadioItem
                key={value.id}
                value={value}
                setColorSelected={setSelectedColor}
                colorSelected={selectedColor}
              />
            );
          })}
        </HStack>
      </Box>
      <Box
        _light={{
          backgroundColor: "white",
        }}
        _dark={{
          backgroundColor: "white",
        }}
        style={{ borderRadius: 12, padding: 24 }}
        mt={4}
      >
        <HStack flexWrap={"wrap"} style={{ maxWidth: "100%" }} space={1.5}>
          {iconList.map((value) => {
            return (
              <IconRadioItem
                key={value.id}
                value={value}
                setIconSelected={setSelectedIcon}
                iconSelected={selectedIcon}
              />
            );
          })}
        </HStack>
      </Box>
    </Box>
  );
}
