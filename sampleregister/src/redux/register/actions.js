import {
  fetchDataFailure,
  fetchDataRequest,
  fetchDataSuccess,
  addDataSuccess,
  addDataFailure,
} from "../app/actions";
import {
  ADD_USER_URL,
  DELETE_USER_URL,
  FETCH_USER_URL,
  EDIT_USER_URL,
  REGISTER_URL,
  FETCH_REGISTER_URL,
} from "../../apiConfig/register";
import {
  GetData,
  PostData,
  DeleteData,
  PatchData,
} from "../../services/baseapiservices";

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest());

    const response = GetData(FETCH_USER_URL)
      .then((res) => {
        dispatch(fetchDataSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error.message));
      });
  };
};

export const addUser = (data) => {
  return (dispatch) => {
    const response = PostData(ADD_USER_URL, data)
      .then((res) => {
     dispatch(fetchData())
      })
      .catch((error) => {
        dispatch(addDataFailure(error.message));
      });
  };
};
export const deleteUser = (data) => {
  return (dispatch) => {
    const response = DeleteData(DELETE_USER_URL + data)
      .then((res) => {
        dispatch(fetchData());
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error.message));
      });
  };
};
export const editUser = (id, data) => {
  return (dispatch) => {
    const response = PatchData(EDIT_USER_URL + id, data)
      .then((res) => {
        dispatch(fetchData());
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error.message));
      });
  };
};
export const RegUser = (data) => {
  console.log(data)
  return (dispatch) => {
    const response = PostData(REGISTER_URL, data)
      .then((res) => {
        dispatch(addDataSuccess(data));
      })
      .catch((error) => {
        dispatch(addDataFailure(error.message));
      });
  };
};
export const fetchRegData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest());

    const response = GetData(FETCH_REGISTER_URL)
      .then((res) => {
        dispatch(fetchDataSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error.message));
      });
  };
};