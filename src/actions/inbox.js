import { GET_ERRORS } from "./types";
import axios from "axios";
import baseUrl from './baseUrl'

export const createMsg = ({ sender, message }) => (dispatch) => {
  const body = JSON.stringify({ sender, message });

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios
    .post(`${baseUrl}/api/inbox/create`, body, config)
    .then((res) => {
      const data = {
        msg: res.data,
        status: res.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: data,
      });
    })
    .catch((err) => {
      const error = {
        msg: err.response ? err.response.data : "Could not connect to Internet",
        status: err.response ? err.response.status : 400,
      };
      dispatch({
        type: GET_ERRORS,
        payload: error,
      });
    });
};
