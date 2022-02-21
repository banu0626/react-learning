import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editUser } from "../../../../redux/register/actions";

export default function EditUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { state } = location;
  const initialValue = {
    username: state.username,
    password: state.password,
  };

  const [value, setValue] = useState(initialValue);
  const handleInput = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };
  const handleUpdate = (event) => {
    dispatch(editUser(event, value));
    navigate("/");
  };

  return (
    <div>
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-sm-4 shadow round">
          <h3 className="text-center text-secondary">Register </h3>
          <form>
            <div className="form-group">
              <input
                className="form-control"
                name="username"
                value={value.username}
                onChange={(e) => handleInput(e)}
              />
            </div>
            <br></br>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="password"
                value={value.password}
                onChange={(e) => handleInput(e)}
              />
            </div>
            <br />

            <div className="d-flex justify-content-center">
              <input
                type="submit"
                value="Update"
                onClick={() => {
                  handleUpdate(location.state._id);
                }}
              />
              <input
                type="submit"
                value="Back"
                onClick={() => {
                  navigate('/');
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
