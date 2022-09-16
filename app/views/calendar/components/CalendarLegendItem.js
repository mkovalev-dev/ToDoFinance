import { Box, Heading, HStack, Text } from "native-base";
import React from "react";
import { COLORS_GRAYSCALE, COLORS_PRIMARY } from "../../../modules/colors";
import { PADDING } from "../../../modules/padding";
import { Spacer } from "native-base/src/components/primitives/Flex";

export default function CalendarLegendItem({ item }) {
  return (
    <Box
      style={{
        width: "100%",
        height: 50,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 12,
        borderWidth: 1,
        justifyContent: "center",
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
        borderColor: COLORS_PRIMARY.DEFAULT,
      }}
      _light={{
        borderColor: COLORS_PRIMARY.DEFAULT,
        backgroundColor: COLORS_GRAYSCALE.WHITE,
      }}
      _dark={{
        borderColor: COLORS_PRIMARY.DEFAULT,
        backgroundColor: COLORS_GRAYSCALE.DARK_LIGHT_THEME,
      }}
    >
      <HStack alignItems={"center"} space={4}>
        <Box
          style={{
            width: 15,
            height: 15,
            borderRadius: 100,
            backgroundColor: item.color,
          }}
        ></Box>
        <Heading
          _dark={{ color: COLORS_GRAYSCALE.WHITE }}
          _light={{ color: COLORS_GRAYSCALE.HEADER }}
          size={"md"}
        >
          {item.name}
        </Heading>
        <Spacer />
        <Text
          _dark={{ color: COLORS_GRAYSCALE.WHITE }}
          _light={{ color: COLORS_GRAYSCALE.HEADER }}
        >
          {item.time}
        </Text>
      </HStack>
    </Box>
  );
}
