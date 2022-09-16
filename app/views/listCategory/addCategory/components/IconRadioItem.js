import { Box, Icon } from "native-base";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { COLORS_GRAYSCALE } from "../../../../modules/colors";
import { FontAwesome5 } from "@expo/vector-icons";

export default function IconRadioItem({
  value,
  setIconSelected,
  iconSelected,
}) {
  return iconSelected === value.icon ? (
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
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
        _dark={{ backgroundColor: COLORS_GRAYSCALE.HEADER }}
        _light={{ backgroundColor: COLORS_GRAYSCALE.HEADER }}
      >
        <Icon
          as={FontAwesome5}
          size={6}
          name={value.icon}
          textAlign={"center"}
          _light={{
            color: COLORS_GRAYSCALE.WHITE,
          }}
          _dark={{
            color: COLORS_GRAYSCALE.WHITE,
          }}
        />
      </Box>
    </Box>
  ) : (
    <TouchableWithoutFeedback
      onPress={() => {
        setIconSelected(value.icon);
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
            // backgroundColor: "#333333",
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
          _dark={{ backgroundColor: COLORS_GRAYSCALE.HEADER }}
          _light={{ backgroundColor: COLORS_GRAYSCALE.HEADER }}
        >
          <Icon
            as={FontAwesome5}
            size={6}
            name={value.icon}
            textAlign={"center"}
            _light={{
              color: COLORS_GRAYSCALE.WHITE,
            }}
            _dark={{
              color: COLORS_GRAYSCALE.WHITE,
            }}
          />
        </Box>
      </Box>
    </TouchableWithoutFeedback>
  );
}
