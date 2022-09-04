import { Heading } from "native-base";
import { COLORS_GRAYSCALE } from "../../../modules/colors";

export default function Header() {
  return (
    <Heading
      _dark={{ color: "white" }}
      _light={{ color: COLORS_GRAYSCALE.HEADER }}
      size={"lg"}
      style={{ marginBottom: 18 }}
    >
      Календарь
    </Heading>
  );
}
