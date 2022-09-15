import { COLORS_GRAYSCALE, COLORS_PRIMARY } from "../../../../modules/colors";
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
          backgroundColor: COLORS_GRAYSCALE.INPUT,
          justifyContent: "center",
          paddingTop: 5,
          paddingBottom: 5,
          paddingLeft: 15,
          paddingRight: 15,
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
              size={7}
              name={item.icon}
              textAlign={"center"}
              _light={{
                color: "white",
              }}
              _dark={{
                color: "white",
              }}
            />
          </Box>
          <Heading size={"sm"} color={COLORS_GRAYSCALE.HEADER}>
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
        backgroundColor: COLORS_GRAYSCALE.INPUT,
        justifyContent: "center",
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
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
            size={7}
            name={item.icon}
            textAlign={"center"}
            _light={{
              color: "white",
            }}
            _dark={{
              color: "white",
            }}
          />
        </Box>
        <Heading size={"sm"} color={COLORS_GRAYSCALE.HEADER}>
          {item.name}
        </Heading>
      </HStack>
    </Box>
  );
}
