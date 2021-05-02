import axios from "axios";

export const axiosWithAuth = () => {

  return axios.create({
    headers: {
      Authorization: JSON.parse(window.localStorage.getItem("token")),
    },
    baseURL: "https://tt-web58-recipe-app.herokuapp.com",
  });
};


//Task List:
//Build and export a function used to send in our authorization token