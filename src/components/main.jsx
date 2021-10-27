// import Home from "./home.jsx";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUsers, updateUser } from "../actions/index.js";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";

function Main(props) {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>Invision initialization</MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

// Connect actions to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getUsers: getUsers,
      updateUser: updateUser,
    },
    dispatch
  );
}

// Connect state to props
function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
