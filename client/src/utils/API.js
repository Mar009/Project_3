import axios from 'axios';

export default {
    // This function is to check if the user is logged in, and to return their info if they are not
    checkUserInfo: () => {
        return axios.get("/api/user_data");
    },
    signup: (signupData) => {
        return axios.post("/api/signup", signupData)
    },
    login: (loginData) => {
        return axios.post("/api/login", loginData)
    },
    logout: () => {
        return axios.get("/logout");
    },

    getSymptoms: () => {
        return axios.get("/api/new-symptom");
   },
    getFoodGroups: () => {
        return axios.get("/api/food-groups");
    },

    // getRemedies: () => {
    //     return axios.get("/api/get-remedy");
    // }

}