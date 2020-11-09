import React, { Component } from "react";
import { connect } from "react-redux";

class ProductItemComponent extends Component {
  render() {
    const { name, imgSrc_jpg } = this.props.item;
    return (
      <div className="card p-2 my-2">
        <img src={imgSrc_jpg} alt={"dressing_room"} />
        <p>{name}</p>
        <button onClick={() => this._chooseCloth(this.props.item)} className="btn btn-success">Thử Đồ</button>
      </div>
    );
  }
  _chooseCloth = (cloth) => {
    //Không lấy dữ liệu về,chỉ gửi lên --> props.dispatch(không cần mapState.props)
    this.props.dispatch({
      type: "SET_CLOTH",
      payload: {
        type: cloth.type,
        img: cloth.imgSrc_png,
      },
    });
  };
}
export default connect()(ProductItemComponent);
