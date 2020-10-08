import axios from "axios";
import {
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_ERROR,
  FETCH_PROJECTS_LOADING,
} from "./types";
import baseUrl from "./baseUrl";
import projects from "../data";

export const fetchProjects = () => (dispatch) => {
  console.log(projects);
  
  dispatch({type: FETCH_PROJECTS_LOADING })

  if(projects.length > 0){
    dispatch({
    type: FETCH_PROJECTS_SUCCESS,
    payload: projects,
  });
  }

  

  

  // .catch((err) => {
    
  // });

  // axios
  //   .get(`${baseUrl}/api/projects`)
  //   .then((res) => {
      
  //   })
    
};
