import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  userCategory,
  setDeleteCategory,
} from "../../../../services/redux/slices/taskSlice";
import CategoryListItem from "./categoryListItem";
import { Box, Text, View } from "native-base";
import { SwipeListView } from "react-native-swipe-list-view";
import { PADDING } from "../../../../modules/padding";
import { COLORS_GRAYSCALE, COLORS_PRIMARY } from "../../../../modules/colors";

export default function CategoryList() {
  const userCategoryList = useSelector(userCategory);
  const dispatch = useDispatch();
  const renderHiddenItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => dispatch(setDeleteCategory(item.id))}
      >
        <View style={styles.rowBack}>
          <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
            <Text style={styles.backTextWhite}>Удалить</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return !userCategoryList || userCategoryList?.length === 0 ? (
    <Box
      style={{
        width: "100%",
        height: "50%",
        justifyContent: "center",
        padding: PADDING.ALL,
      }}
      _light={{ borderColor: COLORS_PRIMARY.DEFAULT }}
      _dark={{ borderColor: "white" }}
    >
      <Text
        style={{ textAlign: "center" }}
        _light={{ color: COLORS_GRAYSCALE.PLACEHOLDER }}
        _dark={{ color: COLORS_GRAYSCALE.PLACEHOLDER }}
      >
        Давай создадим твой первый список!
      </Text>
    </Box>
  ) : (
    <SwipeListView
      style={{ marginTop: 18, marginBottom: 80 }}
      useFlatList={true}
      data={userCategoryList}
      renderItem={(rowData, rowMap) => <CategoryListItem item={rowData.item} />}
      renderHiddenItem={renderHiddenItem}
      rightOpenValue={-75}
      disableRightSwipe
      closeOnRowOpen
      closeOnRowBeginSwipe
      onRowOpen={(rowKey, rowMap) => {
        setTimeout(() => {
          rowMap[rowKey].closeRow();
        }, 2000);
      }}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  backTextWhite: {
    color: "#FFF",
    textAlign: "right",
    width: "100%",
    paddingRight: 10,
  },
  rowFront: {
    alignItems: "center",
    backgroundColor: "#CCC",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "center",
    height: 50,
  },
  rowBack: {
    width: "100%",
    height: 55,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 12,
    backgroundColor: "white",
    justifyContent: "center",
    paddingTop: 5,
    paddingBottom: 5,
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
  },
  backRightBtnRight: {
    width: "100%",
    textAlign: "right",
    backgroundColor: "red",
    borderRadius: 12,
    right: 0,
  },
});
