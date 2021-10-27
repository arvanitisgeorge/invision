// import Home from "./home.jsx";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUsers } from "../actions/index.js";
import { MDBContainer, MDBCol, MDBRow, MDBIcon } from "mdbreact";
import User from "./user";

function Main(props) {
  const [selectedUsersCount, setSelectedUsersCount] = useState(0);

  useEffect(() => {
    props.getUsers();
  }, []);

  function checkAllUsers() {
    var inputs = document.querySelectorAll(".user-checkbox");
    if (document.querySelector("#check-all-button").checked) {
      setSelectedUsersCount(props.userList.data.length);
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked = true;
      }
    } else {
      setSelectedUsersCount(0);
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked = false;
      }
    }
  }

  const retrieveUsers = () => {
    if (props.userList.isLoading) {
      return (
        <div className="spinner-border text-info" role="status">
          <p className="sr-only">Loading...</p>
        </div>
      );
    } else if (props.userList.hasError) {
      return (
        <p className="red-text">
          <MDBIcon icon="exclamation-circle" className="red-text pr-1" />
          {props.userList.hasError}
        </p>
      );
    } else if (props.userList.data) {
      const items = [];
      for (var i = 0; i < props.userList.data.length; i++) {
        items.push(
          <User
            key={props.userList.data[i].id}
            id={props.userList.data[i].id}
            name={props.userList.data[i].name}
            email={props.userList.data[i].email}
            phone={props.userList.data[i].phone}
            active={props.userList.data[i].active}
            type={props.userList.data[i].type}
            selectedUsersCount={selectedUsersCount}
            setSelectedUsersCount={setSelectedUsersCount}
            usersLength={props.userList.data.length}
          ></User>
        );
      }

      return <>{items}</>;
    }
  };

  return (
    <MDBContainer fluid className="mt-5 px-5">
      <MDBRow className="border-bottom p-3">
        <MDBCol className="d-flex align-content-center">
          <MDBIcon className="oval" icon="users" />
          <span className="users-label ml-3">Users</span>
        </MDBCol>
        <MDBCol className="d-flex align-content-center flex-row-reverse">
          <MDBIcon className="oval-2" icon="question" />
          {/* <img src="..\public\Questionmark.svg" alt="?" /> */}
          <span className="silenced-text mr-4">
            {selectedUsersCount} selected
          </span>
        </MDBCol>
      </MDBRow>
      <MDBRow className="border-bottom p-3">
        <MDBCol className="d-flex align-content-center" size="2">
          <label className="checkbox-container">
            <input
              type="checkbox"
              value=""
              id="check-all-button"
              onClick={() => {
                checkAllUsers();
              }}
            />
            <span className="checkmark"></span>
          </label>
          <span className="table-title p-1 ml-2">TYPE</span>
        </MDBCol>
        <MDBCol size="2">
          <span className="table-title">NAME</span>
        </MDBCol>
        <MDBCol size="2">
          <span className="table-title">EMAIL</span>
        </MDBCol>
        <MDBCol size="2">
          <span className="table-title">TELEPHONE</span>
        </MDBCol>
        <MDBCol className="text-right" size="4">
          <span className="table-title">STATUS</span>
        </MDBCol>
      </MDBRow>
      {retrieveUsers()}
    </MDBContainer>
  );
}

// Connect actions to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getUsers: getUsers,
    },
    dispatch
  );
}

// Connect state to props
function mapStateToProps(state) {
  return {
    userList: state.userList,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
