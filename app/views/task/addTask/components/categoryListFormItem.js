import {
  COLORS_GRAYSCALE,
  COLORS_PRIMARY,
  SECONDARY_GRADIENT,
} from "../../../../modules/colors";
import { Box, Heading, HStack, Icon } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native";

export default function CategoryListFormItem({
  item,
  selectedCategory,
  setSelectedCategory,
}) {
  return selectedCategory !== item.id ? (
    <TouchableWithoutFeedback
      onPress={() => {
        setSelectedCategory(item.id);
      }}
    >
      <Box
        style={{
          width: "100%",
          height: 55,
          marginTop: 5,
          marginBottom: 5,
          borderRadius: 12,
          justifyContent: "center",
          paddingTop: 5,
          paddingBottom: 5,
          paddingLeft: 15,
          paddingRight: 15,
        }}
        _light={{
          backgroundColor: COLORS_GRAYSCALE.INPUT,
        }}
        _dark={{
          backgroundColor: SECONDARY_GRADIENT.START,
        }}
      >
        <HStack alignItems={"center"} space={2}>
          <Box
            style={{
              height: 40,
              width: 40,
              backgroundColor: item.color,
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon
              as={FontAwesome5}
              size={6}
              name={item.icon}
              textAlign={"center"}
              _light={{
                color: COLORS_GRAYSCALE.WHITE,
              }}
              _dark={{
                color: COLORS_GRAYSCALE.WHITE,
              }}
            />
          </Box>
          <Heading
            size={"sm"}
            _dark={{ color: COLORS_GRAYSCALE.WHITE }}
            _light={{ color: COLORS_GRAYSCALE.HEADER }}
          >
            {item.name}
          </Heading>
        </HStack>
      </Box>
    </TouchableWithoutFeedback>
  ) : (
    <Box
      style={{
        width: "100%",
        height: 55,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: COLORS_PRIMARY.DEFAULT,
        justifyContent: "center",
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
      }}
      _light={{
        backgroundColor: COLORS_GRAYSCALE.INPUT,
      }}
      _dark={{
        backgroundColor: SECONDARY_GRADIENT.START,
      }}
    >
      <HStack alignItems={"center"} space={2}>
        <Box
          style={{
            height: 40,
            width: 40,
            backgroundColor: item.color,
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon
            as={FontAwesome5}
            size={6}
            name={item.icon}
            textAlign={"center"}
            _light={{
              color: COLORS_GRAYSCALE.WHITE,
            }}
            _dark={{
              color: COLORS_GRAYSCALE.WHITE,
            }}
          />
        </Box>
        <Heading
          size={"sm"}
          _dark={{ color: COLORS_GRAYSCALE.WHITE }}
          _light={{ color: COLORS_GRAYSCALE.HEADER }}
        >
          {item.name}
        </Heading>
      </HStack>
    </Box>
  );
}
