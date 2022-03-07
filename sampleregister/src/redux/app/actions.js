import { AppActionsTypes } from "./action-types";

export const fetchDataRequest = () => {
    return {
      type: AppActionsTypes.FETCH_DATA_LOADING
    }
  }
  
  export const fetchDataSuccess = data => {
    return {
      type: AppActionsTypes.FETCH_DATA_SUCCESS,
      payload: data
    }
  }
  
  export const fetchDataFailure = error => {
    return {
      type: AppActionsTypes.FETCH_DATA_FAILURE,
      payload: error
    }
  }

  export const addDataSuccess =  (data)=> {
    return {
      type: AppActionsTypes.ADD_DATA_SUCCESS,
      payload: data
    }
  }
  export const addDataFailure = error => {
    return {
      type: AppActionsTypes.ADD_DATA_FAILURE,
      payload: error
    }
  }
