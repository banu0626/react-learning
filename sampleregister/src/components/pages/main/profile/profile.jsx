import React from "react";
import { MaterialButton, TextField } from "../../../common";
import MaterialRadio from "../../../common/radiobutton";
import RadioGroup from "@mui/material/RadioGroup";
import { connect } from "react-redux";
import { RegUser, fetchRegData } from "../../../../redux/register/actions";
import { Link } from "react-router-dom";
import "../../../../assets/stylesheet/css/style.css";
import {
  isValidEmailAddress,
  isValidPhoneNumber,
} from "../../../../utils/common/validation";


const mapStateToProps = (state) => {
  return {
    app: state.app,
  };
};
const mapDispatchToProps = () => {
  return {
    RegUser,
    fetchRegData,
  };
};

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      mailid: "",
      phone_no: "",
      gender: "",
      formErrors: {},
    };

    this.initialState = this.state;
  }
  handleInput = (event) => {
    if (event.target.name === "mailid") {
      event.target.value
        ? this.validateEmail(event.target.value)
        : this.setState({ emailValid: "" });
    }
    if (event.target.name === "phone_no") {
      event.target.value
        ? this.validatePhoneNo(event.target.value)
        : this.setState({ phoneValid: "" });
    }
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateform()) {
      this.props.RegUser(this.state);
      alert("You have been successfully registered.");
      this.setState(this.initialState)  
    }
  };

  validateform = () => {
    const { firstName, lastName, gender, mailid, phone_no } = this.state;
    let formErrors = {};
    let formIsValid = true;
    if (!firstName) {
      formErrors["firstNameErr"] = "First Name is required.";
      formIsValid = false;
    }
    if (!lastName) {
      formErrors["lastNameErr"] = "Last Name is required.";
      formIsValid = false;
    }
    if (!phone_no) {
      formErrors["phone_noErr"] = "Phone Number is required.";
      formIsValid = false;
    }
    if (!mailid) {
      formErrors["mailidErr"] = "Mail ID is required.";
      formIsValid = false;
    }
    if (!gender) {
      formErrors["genderErr"] = "Gender is required.";
      formIsValid = false;
    }

    this.setState({ formErrors: formErrors });
    return formIsValid;
  };

  validateEmail = (email) => {
    let emailValid = true;
    if (!isValidEmailAddress(email)) {
      this.setState({
        emailValid: "Please Enter the valid Email Address",
      });
      emailValid = false;
    } else {
      this.setState({
        emailValid: "",
      });
      emailValid = true;
    }
    return emailValid;
  };
  validatePhoneNo = (number) => {
    let phoneValid = true;
    if (!isValidPhoneNumber(number)) {
      this.setState({
        phoneValid: "Please Enter the valid Phone Number",
      });
      phoneValid = false;
    } else {
      this.setState({
        phoneValid: "",
      });
      phoneValid = true;
    }
    return phoneValid;
  };

  render() {
    const { firstNameErr, lastNameErr, mailidErr, genderErr, phone_noErr } =
      this.state.formErrors;

    return (
      <div>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-sm-4 shadow round">
            <h3 className="text-center text-secondary">Register </h3>
            <form>
              <div className="form-group">
                <TextField
                  type="text"
                  className="form-control"
                  name="firstName"
                  size="small"
                  label="First Name"
                  variant="outlined"
                  value={this.state.firstName}
                  onChange={this.handleInput}
                />
              </div>
              {firstNameErr && <span className="error">{firstNameErr}</span>}
              <br />
              <div className="form-group">
                <TextField
                  type="text"
                  className="form-control"
                  name="lastName"
                  size="small"
                  label="Last Name"
                  variant="outlined"
                  value={this.state.lastName}
                  onChange={this.handleInput}
                />
              </div>
              {lastNameErr && <span className="error">{lastNameErr}</span>}
              <br />
              <div className="form-group">
                <TextField
                  type="email"
                  className="form-control"
                  name="mailid"
                  size="small"
                  label="Email Id"
                  variant="outlined"
                  value={this.state.mailid}
                  onChange={this.handleInput}
                />
              </div>
              {this.state.emailValid && (
                <span className="error">{this.state.emailValid}</span>
              )}
              {mailidErr && <span className="error">{mailidErr}</span>}
              <br />
              <div className="form-group">
                <TextField
                  type="number"
                  className="form-control"
                  name="phone_no"
                  size="small"
                  label="Phone_no"
                  inputProps={{ maxLength: 10 }}
                  variant="outlined"
                  value={this.state.phone_no}
                  onChange={this.handleInput}
                />
              </div>
              {this.state.phoneValid && (
                <span className="error">{this.state.phoneValid}</span>
              )}
              {phone_noErr && <span className="error">{phone_noErr}</span>}
              <br />
              <div className="form-group">
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <MaterialRadio
                    name="gender"
                    value="female"
                    label="Female"
                    onChange={this.handleInput}
                  />
                  <MaterialRadio
                    name="gender"
                    value="male"
                    label="Male"
                    onChange={this.handleInput}
                  />
                </RadioGroup>
              </div>
              {genderErr && <span className="error">{genderErr}</span>}
              <br />

              <div className="d-flex justify-content-center">
                <MaterialButton
                  value="Register"
                  variant="outlined"
                  message="Save"
                  onClick={this.handleSubmit}
                  size="medium"
                />
                &nbsp;&nbsp;
                <MaterialButton
                  value="Register"
                  variant="outlined"
                  message={
                    <Link to="/login" className="link">
                      Back
                    </Link>
                  }
                  size="medium"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}export default connect(mapStateToProps, mapDispatchToProps())(Profile);
