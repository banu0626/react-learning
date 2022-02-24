import React, { useEffect, useState } from "react";
import {
  addUser,
  deleteUser,
  fetchData,
} from "../../../../redux/register/actions";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AgGrid, MaterialButton, TextField } from "../../../common";

import { AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function Home() {
  const [formdata, setFormdata] = useState({
    username: "",
    password: "",
  });
  const users = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  useEffect(() => {
    dispatch(fetchData());
    
  }, []);

  const handleInput = (event) => {
    setFormdata({ ...formdata, [event.target.name]: event.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(formdata));
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };
  const handleEdit = (user) => {
    navigate("/edit", { state: user });
  };
const [rowData] = useState([
  {make: "Toyota", model: "Celica", price: 35000},
  {make: "Ford", model: "Mondeo", price: 32000},
  {make: "Porsche", model: "Boxter", price: 72000}
]);

const [columnDefs] = useState([
  { field: "make" },
  { field: "model" },
  { field: "price" },
]); 
  return (
    <div>
      <nav><div className="d-flex justify-content-right">
               <MaterialButton
                  value="Login"
                  variant="outlined"
                  message="Login"
                  onClick={() => {
                    navigate('/login');
                  }}
                  size="medium"
                />
            </div></nav>
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-sm-4 shadow round">
          <h3 className="text-center text-secondary">Register </h3>
          <form>
            <div className="form-group">
              <TextField
                  type="text"
                  className="form-control"
                  name="username"
                  size="small"
                  label="Username"
                  variant="outlined"
                  value={formdata.username}
                  onChange={(e) => handleInput(e)}
                />
            </div>
            <br></br>
            <div className="form-group">
               <TextField
                  type="text"
                  className="form-control"
                  name="password"
                  size="small"
                  label="Password"
                  variant="outlined"
                  value={formdata.password}
                  onChange={(e) => handleInput(e)}
                />
            </div>
            <br />
            <div className="d-flex justify-content-center">
              <MaterialButton
                  value="Register"
                  variant="outlined"
                  message="Register"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                  size="medium"
                />
            </div>
          </form>
   
       
      {users.data.map((user) => {
            return (
              <div key={user._id} className="container">
                <div className="content">
                 {user.username} &nbsp;
                  <i
                    className="material-icons"
                    onClick={() => handleDelete(user._id)}
                  >
                    delete
                  </i>
                  <i
                    className="material-icons"
                    onClick={() => handleEdit(user)}
                  >
                    edit
                  </i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
