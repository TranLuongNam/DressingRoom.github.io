import React, { Component } from "react";
import ProductItemComponent from "../ProductItem/productItem";
import { connect } from "react-redux"; /* connect component (ProductsComponent) với store */
class ProductsComponent extends Component {
  render() {
    return (
      <div className="row">
        {this.props.productList.filter(item => item.type === this.props.chooseCategory).map((item, index) => (
          <div className="col-4" key={index}>
            <ProductItemComponent item={item}/>
            {/* Truyền item={item} vào ProductItem,để render gdien */}
          </div>
        ))}
      </div>
    );
  }
}

//Hàm mapStateToProps : lấy dữ liệu từ store về để sử dụng (return về 1 object)
//state : đại diện cho dữ liệu được lưu trữ trên store
//productList : là danh sách sản phẩm lấy về được từ store
const mapStateToProps = (state) => ({
  productList: state.products,
  chooseCategory : state.chooseCategory
});
export default connect(mapStateToProps)(ProductsComponent);
