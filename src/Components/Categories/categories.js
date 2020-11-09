import React, { Component } from "react";
import { connect } from "react-redux";

class CategoriesComponent extends Component {
  render() {
    return (
      <div className="btn-group">
        {this.props.categoryList.map((item, index) => (
          <button key={index} onClick={() => this._chooseCategory(item.type)} className={ this.props.chooseCategory === item.type ? 'btn btn-primary' : 'btn btn-secondary'}>{item.showName}</button>
        ))}
      </div>
    );
  }

  _chooseCategory = (payload) =>{
      this.props.dispatch({
          type:'SET_CATEGORY',
          payload
      })
  }
}

const mapStateToProps = (state) => ({
  categoryList: state.categories,
  //gọi chooseCategory xuống để check trong button 
  chooseCategory : state.chooseCategory
});
export default connect(mapStateToProps)(CategoriesComponent);
