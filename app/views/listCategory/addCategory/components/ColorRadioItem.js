import { Box } from "native-base";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { COLORS_GRAYSCALE } from "../../../../modules/colors";

export default function ColorRadioItem({
  value,
  setColorSelected,
  colorSelected,
}) {
  return colorSelected === value.color ? (
    <Box
      style={{
        borderRadius: 100,
        borderWidth: 2,
        borderColor: COLORS_GRAYSCALE.PLACEHOLDER,
        height: 48,
        width: 48,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        key={value.id}
        style={{
          height: 40,
          width: 40,
          backgroundColor: value.color,
          borderRadius: 100,
        }}
      />
    </Box>
  ) : (
    <TouchableWithoutFeedback
      onPress={() => {
        setColorSelected(value.color);
      }}
    >
      <Box
        style={{
          height: 48,
          width: 48,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          key={value.id}
          style={{
            height: 40,
            width: 40,
            backgroundColor: value.color,
            borderRadius: 100,
          }}
        />
      </Box>
    </TouchableWithoutFeedback>
  );
}
