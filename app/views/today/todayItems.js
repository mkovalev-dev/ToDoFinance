import { COLORS_GRAYSCALE, COLORS_PRIMARY } from "../../modules/colors";
import { Box, Heading, HStack } from "native-base";
import React from "react";

export default function TodayItems({ item }) {
  return (
    <Box
      style={{
        width: "100%",
        // height: 50,
        // marginTop: 5,
        // marginBottom: 5,
        borderRadius: 12,
        // borderWidth: 1,
        // backgroundColor: "white",
        justifyContent: "center",
        paddingTop: 5,
        paddingBottom: 5,
        // borderColor: COLORS_PRIMARY.DEFAULT,
      }}
      // _light={{ borderColor: COLORS_PRIMARY.DEFAULT }}
      // _dark={{ borderColor: COLORS_PRIMARY.DEFAULT }}
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
          _dark={{ color: COLORS_GRAYSCALE.HEADER }}
          _light={{ color: COLORS_GRAYSCALE.HEADER }}
          size={"sm"}
        >
          {item.name}
        </Heading>
      </HStack>
    </Box>
  );
}
