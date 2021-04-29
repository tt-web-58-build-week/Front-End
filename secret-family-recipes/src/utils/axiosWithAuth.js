import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')

    return axios.create({
        headers: {
            Authorization: token,
        },
        baseUrl: 'https://tt-web58-recipe-app.herokuapp.com/'
    })
}