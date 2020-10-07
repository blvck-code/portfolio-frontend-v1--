import {
  FETCH_PROJECTS_LOADING,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_ERROR,
} from "../actions/types";

const initialState = {
  loading: true,
  projects: [],
  error: null,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_PROJECTS_LOADING:
      return {
        ...state,
        loading: true,
        projects: [],
        error: null,
      };
    case FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: payload,
        loading: false,
        error: null,
      };
    case FETCH_PROJECTS_ERROR:
      return {
        ...state,
        projects: [],
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}
