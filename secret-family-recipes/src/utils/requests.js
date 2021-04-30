import axios from 'axios';

export const loginRequest = (values, push, setUserID) => {
    axios
        .post('https://tt-web58-recipe-app.herokuapp.com/api/auth/login',
            `grant_type=password&username=${values.username}&password=${values.password}`,
        {
        headers: {
          // btoa is converting our client id/client secret into base64
          Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    )
    .then(res => {
        setUserID(res.data.user_id);
        console.log(res.data);
        localStorage.setItem("token", res.data.access_token);
        localStorage.setItem("userID", res.data.user_id);
        push('/user');
    })
}

export const signUpRequest = (values, push) => {
    console.log(values);
    axios
        .post('https://tt-web58-recipe-app.herokuapp.com/api/auth/register', values)
        .then(res => {
            console.log(res.data);
            push('/');
        })
        .catch(err => {
            console.log(err)
        })
}