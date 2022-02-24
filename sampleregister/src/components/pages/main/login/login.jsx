import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  INVALID_CREDENTIALS,
} from "../../../../constants/messages";
import { fetchjson } from "../../../../services/baseapiservices";
import { MaterialButton, TextField } from "../../../common";

export default function Login() {
  const jsondata = fetchjson();
  const [inputField, setInputFields] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleInput = (event) => {
    setInputFields({ ...inputField, [event.target.name]: event.target.value });
  };
  const handleSubmit = () => {
    jsondata.map((user) => {
      if (
        user.username === inputField.username &&
        user.password === inputField.password
      ) {
        navigate("/profile");
      }
      setMessage(INVALID_CREDENTIALS);
    });
  };

  return (
    <div>
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-sm-4 shadow round">
          <h3 className="text-center text-secondary">Login </h3>
          <form>
            <div className="form-group">
              <TextField
                type="text"
                className="form-control"
                name="username"
                size="small"
                label="Username"
                variant="outlined"
                value={inputField.username}
                onChange={(e) => handleInput(e)}
              />
            </div>
            <br></br>
            <div className="form-group">
              <TextField
                type="password"
                className="form-control"
                name="password"
                size="small"
                label="password"
                variant="outlined"
                value={inputField.password}
                onChange={(e) => handleInput(e)}
              />
            </div>
            <h6 style={{ color: "red" }}>{message}</h6>
            <br />
            <div className="d-flex justify-content-center">
              <MaterialButton
                value="Login"
                variant="outlined"
                message="Login"
                onClick={() => {
                  handleSubmit();
                }}
                size="medium"
              />
              &nbsp;&nbsp;
              <MaterialButton
                variant="outlined"
                message={"Back"}
                size="medium"
                onClick={() => {
                  navigate("/");
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
