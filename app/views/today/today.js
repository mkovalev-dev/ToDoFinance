import { Box, Heading, Text } from "native-base";
import { COLORS_GRAYSCALE } from "../../modules/colors";

export default function Today() {
  return (
    <Box style={{ marginBottom: 18 }}>
      <Heading
        _dark={{ color: "white" }}
        _light={{ color: COLORS_GRAYSCALE.HEADER }}
        size={"lg"}
      >
        Сегодня
      </Heading>
      <Box
        style={{
          width: "100%",
          backgroundColor: "white",
          minHeight: 119,
          borderRadius: 12,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 15,
        }}
      >
        <Text color={COLORS_GRAYSCALE.PLACEHOLDER}>Скоро...</Text>
      </Box>
    </Box>
  );
}
