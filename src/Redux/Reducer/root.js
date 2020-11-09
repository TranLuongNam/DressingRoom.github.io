import { combineReducers } from "redux"; /* Redux cung cấp store,Reducer,action */
import ProductReducer from "./product";
import CategoryReducer from "./category";
import ChooseCategoryReducer from "./chooseCategory";
import ModelReducer from "./model"

const RootReducer = combineReducers({
  //danh sách state,data lưu trữ trên store
  products: ProductReducer,
  categories: CategoryReducer,
  chooseCategory: ChooseCategoryReducer,
  model: ModelReducer,
});
export default RootReducer;
