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

    checkSymptoms: () => {
        return axios.get("/api/new-symptom");}
    // },
    // storeFoodGroups: () => {
    //     return axios.get("https://api.nutridigm.com/api/v1/nutridigm/foodgroups?subscriptionId=200a4593b9277ce9ffb162e74cb71ea0");
    // },

    // getRemedies: () => {
    //     return axios.get("https://api.nutridigm.com/api/v1/nutridigm/suggest?subscriptionId=200a4593b9277ce9ffb162e74cb71ea0&problemId="+problemID+"&fg2="+fgID);
    // }

}