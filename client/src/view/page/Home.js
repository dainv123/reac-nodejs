import React, { Component } from "react";
import { connect } from "react-redux";
import { getListProduct, postCreateProduct } from "../../redux/action";
import "../dist/css/Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.call_GetListProduct();
  }

  render() {
    return (
      <div>
        <h3 onClick={this.props.call_CreateProduct}>This is HOME PAGE</h3>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispathToProps = (dispatch, props) => {
  return {
    call_GetListProduct: () => {
      dispatch(getListProduct());
    },
    call_CreateProduct: () => {
      dispatch(postCreateProduct());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Home);
