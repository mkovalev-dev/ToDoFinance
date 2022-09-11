import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import { userCategory } from "../../../../services/redux/slices/taskSlice";
import CategoryListItem from "./categoryListItem";

export default function CategoryList() {
  const userCategoryList = useSelector(userCategory);
  return (
    <FlatList
      style={{ marginTop: 18, marginBottom: 80 }}
      data={userCategoryList}
      renderItem={({ item }) => {
        return <CategoryListItem item={item} />;
      }}
    />
  );
}
