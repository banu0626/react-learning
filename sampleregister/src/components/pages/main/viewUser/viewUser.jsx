import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRegData } from "../../../../redux/register/actions";
import { AgGrid } from "../../../common";
import headers from "./headers.json";

const mapStateToProps = (state) => {
  return {
    user: state.app,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    viewUsers: () => dispatch(fetchRegData()),
  };
};
class ViewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  UNSAFE_componentWillMount() {
    this.props.viewUsers();
  }

  render() {
    return (
      <div>
        <AgGrid data={this.props.user.data} header={headers.headers} sorting />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewUser);
