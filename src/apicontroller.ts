// https://developer.spotify.com/documentation/web-api

import axios from "axios";

export var VITE_CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
export var VITE_REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
export var VITE_AUTH_ENDPOINT = import.meta.env.VITE_AUTH_ENDPOINT;
export var VITE_RESPONSE_TYPE = import.meta.env.VITE_RESPONSE_TYPE;
export var VITE_SECRET = import.meta.env.VITE_SECRET;

// TODO: error handling

export async function setToken() {
    const response = await axios.post('https://accounts.spotify.com/api/token?', {
        'grant_type': 'client_credentials',
        'client_id': VITE_CLIENT_ID,
        'client_secret': VITE_SECRET
    }, {
        headers: {
            "Content-Type": 'application/x-www-form-urlencoded',
        },
    })
    localStorage.setItem('token', response.data.access_token);
}

export async function getProfile() {
    const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET", headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    console.log(result.json());
}

export function signIn() {

    // axios.get('/login', function(req, res) {
    //     let state = generateRandomString(16);
    //     let scope = 'user-read-private user-read-email';

    //     res.redirect('https://accounts.spotify.com/authorize?' +
    //         querystring.stringify({
    //         response_type: 'code',
    //         client_id: VITE_CLIENT_ID,
    //         scope: scope,
    //         redirect_uri: VITE_REDIRECT_URI,
    //         state: state
    //     }));
    // });

}

export function signOut() {

}

