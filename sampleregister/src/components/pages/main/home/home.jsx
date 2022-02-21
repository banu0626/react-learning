import React, { useEffect, useState } from "react";
import {
  addUser,
  deleteUser,
  fetchData,
} from "../../../../redux/register/actions";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const [formdata, setFormdata] = useState({
    username: "",
    password: "",
  });
  const users = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
                value={formdata.username}
                onChange={(e) => handleInput(e)}
              />
            </div>
            <br></br>
            <div className="form-group">
              <input
              type="password"
                className="form-control"
                name="password"
                value={formdata.password}
                onChange={(e) => handleInput(e)}
              />
            </div>
            <br />

            <div className="d-flex justify-content-center">
              <input
                type="submit"
                value="Register"
                onClick={(e) => {
                  handleSubmit(e);
                }}
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
