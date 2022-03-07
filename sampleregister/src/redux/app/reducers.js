import { AppActionsTypes } from "./action-types";

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AppActionsTypes.FETCH_DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case AppActionsTypes.FETCH_DATA_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case AppActionsTypes.FETCH_DATA_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
      case AppActionsTypes.ADD_DATA_SUCCESS:
        return {
          loading: false,
          data: action.payload,
          error: "",
        };
        case AppActionsTypes.ADD_DATA_FAILURE:
        return {
          loading: false,
          data: [],
          error: action.payload,
        };
      default:
      return state;
  }
};
export default reducer;
