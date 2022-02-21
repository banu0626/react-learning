import axios from "axios";
import { ERROR_RESPONSE_MESSAGE } from "../constants/messages";

export const PostData = async (url, config = {}, headers = {}) => {
  const response = await axios.post(url, config, headers);
  if (response && response.data) {
    if (response.status === 500 && response.data) {
      response = ERROR_RESPONSE_MESSAGE;
    }
    return response;
  }
  return response;
};
export const GetData = async (url, config = {}, headers = {}) => {
  const response = await axios.get(url, config, headers);
  if (response && response.data) {
    if (response.status === 500 && response.data) {
      response = ERROR_RESPONSE_MESSAGE;
    }
    return response;
  }
  return response;
};

export const DeleteData = async (url, config = {}, headers = {}) => {
  const response = await axios.delete(url, config, headers);
  if (response && response.data) {
    if (response.status === 500 && response.data) {
      response = ERROR_RESPONSE_MESSAGE;
    }
    return response;
  }
  return response;
};

export const PatchData = async (url, config = {}, headers = {}) => {
  const response = await axios.patch(url, config, headers);
  if (response && response.data) {
    if (response.status === 500 && response.data) {
      response = ERROR_RESPONSE_MESSAGE;
    }
    return response;
  }
  return response;
};
const ApiMethods = {
  PostData,
  GetData,
  DeleteData,
  PatchData,
};
export default ApiMethods;
