import axios from 'axios';
import { axiosWithAuth } from './axiosWithAuth';

export const loginRequest = (values, push, setUserID) => {
    return axios
        .post('https://tt-web58-recipe-app.herokuapp.com/api/auth/login', values) 
        .then(res => {
            // setUserID(res.data.user_id);
            console.log(res.data);
            // localStorage.setItem("token", res.data.token);
            // localStorage.setItem("userID", res.data.user_id);
            // push('/user');
            // push('/');
        })
        .catch(err => {
            console.log('keep trying jack!', {err});
        })
}