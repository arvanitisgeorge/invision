// import Home from "./home.jsx";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateUser } from "../actions/index.js";
import { MDBCol, MDBRow } from "mdbreact";

function User(props) {
  function editUser(id) {
    const params = {
      name: props.name,
      email: props.email,
      phone: props.phone,
      active: !props.active,
      type: props.type,
    };
    props.updateUser(id, params);
  }

  function selectUser(ev) {
    var input = document.getElementById(`${ev.target.id}`);
    if (input.checked) {
      props.setSelectedUsersCount(props.selectedUsersCount + 1);
    } else {
      props.setSelectedUsersCount(props.selectedUsersCount - 1);
      document.querySelector("#check-all-button").checked = false;
    }
  }

  const getTypePrefix = (type) => {
    const prefixes = {
      Guest: "GU",
      Supervisor: "SU",
      Employee: "EM",
      Stakeholder: "SH",
    };

    return prefixes[type];
  };

  const getTypeColor = (type) => {
    const prefixes = {
      Guest: "blue-background",
      Supervisor: "grey-background",
      Employee: "red-background",
      Stakeholder: "yellow-background",
    };

    return prefixes[type];
  };

  return (
    <MDBRow className="border-bottom p-3 table-row">
      <MDBCol className="d-flex align-content-center" size="2">
        <label className="checkbox-container">
          <input
            className="user-checkbox"
            type="checkbox"
            value=""
            id={`${props.id}_checkbox`}
            onClick={(ev) => {
              selectUser(ev);
            }}
          />
          <span className="checkmark"></span>
        </label>
        <span
          className={`table-title ${getTypeColor(props.type)} py-1 px-2 ml-2`}
        >
          {getTypePrefix(props.type)}
        </span>
      </MDBCol>
      <MDBCol size="2">
        <span className="user-info">{props.name}</span>
      </MDBCol>
      <MDBCol size="2">
        <span className="user-info">{props.email}</span>
      </MDBCol>
      <MDBCol size="2">
        <span className="user-info">{props.phone}</span>
      </MDBCol>
      <MDBCol className="text-right custom-control custom-switch" size="4">
        <input
          type="checkbox"
          className="custom-control-input green-background"
          id={`${props.id}-status-switch`}
          checked={props.active}
          onChange={() => {
            editUser(props.id);
          }}
        />
        <label
          className="custom-control-label"
          htmlFor={`${props.id}-status-switch`}
        ></label>
      </MDBCol>
    </MDBRow>
  );
}

// Connect actions to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
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

export default connect(mapStateToProps, mapDispatchToProps)(User);
