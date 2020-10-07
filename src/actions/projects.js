import axios from "axios";
import {
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_ERROR,
  FETCH_PROJECTS_LOADING
} from "./types";
import baseUrl from './baseUrl'

export const fetchProjects = () => (dispatch) => {

  dispatch({
    type: FETCH_PROJECTS_LOADING,
  });
  
  axios
    .get(`${baseUrl}/api/projects`)
    .then((res) => {
      dispatch({
        type: FETCH_PROJECTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_PROJECTS_ERROR,
        payload: err.response
          ? err.response.statusText
          : "Could not connect to Internet",
      });
    });
};
