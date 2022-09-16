import { COLORS_GRAYSCALE, COLORS_PRIMARY } from "../../modules/colors";
import { Box, Heading, HStack, Text } from "native-base";
import React from "react";
import { Spacer } from "native-base/src/components/primitives/Flex";

export default function TodayItems({ item }) {
  return (
    <Box
      style={{
        width: "100%",
        borderRadius: 12,
        justifyContent: "center",
        paddingTop: 5,
        paddingBottom: 5,
      }}
    >
      <HStack alignItems={"center"} space={4}>
        <Box
          style={{
            width: 10,
            height: 10,
            borderRadius: 100,
            backgroundColor: item.color,
          }}
        ></Box>
        <Heading
          _dark={{ color: COLORS_GRAYSCALE.WHITE }}
          _light={{ color: COLORS_GRAYSCALE.HEADER }}
          size={"sm"}
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
