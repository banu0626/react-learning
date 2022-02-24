import React from "react";
import { MaterialButton, TextField } from "../../../common";
import MaterialRadio from "../../../common/radiobutton";
import RadioGroup from "@mui/material/RadioGroup";
import { connect } from "react-redux";
import { RegUser } from "../../../../redux/register/actions";

const mapDispatchToProps=(dispatch)=>{
  return{
    adduser:()=>dispatch(RegUser())
  }
}



class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        firstName: "",
        lastName: "",
        mailid: "",
        phone_no: "",
        gender: ""
      };
  

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    alert(
      `${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`
    );
    console.log(this.state);
   this.addUser()
    // this.setState({
    //   firstName: "",
    //   lastName: "",
    //   mailid: "",
    //   phone_no: "",
    //   gender: "",
    // });
    event.preventDefault();
  };

  render() {
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
              <br />
              <div className="form-group">
                <TextField
                  type="number"
                  className="form-control"
                  name="phone_no"
                  size="small"
                  label="Phone_no"
                  variant="outlined"
                  value={this.state.phone_no}
                  onChange={this.handleInput}
                />
              </div>
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
              <br />

              <div className="d-flex justify-content-center">
                <MaterialButton
                  value="Register"
                  variant="outlined"
                  message="Register"
                  onClick={this.handleSubmit}
                  size="medium"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(mapDispatchToProps)(Profile);