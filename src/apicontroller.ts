// https://developer.spotify.com/documentation/web-api
// https://developer.spotify.com/documentation/web-api/howtos/web-app-profile
// https://ritvikbiswas.medium.com/connecting-to-the-spotify-api-using-node-js-and-axios-client-credentials-flow-c769e2bee818

import axios from "axios";

import { Buffer } from "buffer";



// ok the token seems to be working properly
// but when it's used it gives a 401 (Unauthorized) error
// API suggests re-authenticating but it happens with fresh credentials




export var VITE_CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
export var VITE_REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
export var VITE_AUTH_ENDPOINT = import.meta.env.VITE_AUTH_ENDPOINT;
// export var VITE_RESPONSE_TYPE = import.meta.env.VITE_RESPONSE_TYPE;
export var VITE_SECRET = import.meta.env.VITE_SECRET;

export async function setToken() {
    let paramsAfter = new URLSearchParams(window.location.search);
    let code:string|null = paramsAfter.get('code');

    if (!code) return; // throw an error or something idk
    localStorage.setItem('code', code);

    let authToken = Buffer.from(`${VITE_CLIENT_ID}:${VITE_SECRET}`, 'utf-8').toString('base64');
    // console.log(authToken);

    const response = await axios.post('https://accounts.spotify.com/api/token', {
        'grant_type': 'client_credentials',
        // 'grant_type': 'authorization_code',
        'client_id': VITE_CLIENT_ID,
        'client_secret': VITE_SECRET,
        'code': code,
        'code_verifier': localStorage.getItem('verifier')
    }, {
        headers: {
            "Authorization": `Basic ${authToken}`,
            "Content-Type": 'application/x-www-form-urlencoded',
        },
    })
    // console.log(response);
    localStorage.setItem('token', response.data.access_token);
}

export async function redirectToAuth() {
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem("verifier", verifier);

    const params = new URLSearchParams();
    params.append("client_id", VITE_CLIENT_ID);
    params.append("response_type", "code");
    params.append("redirect_uri", "http://localhost:5173");
    params.append("scope", "user-read-private user-read-email");
    params.append("code_challenge_method", "S256");
    params.append("code_challenge", challenge);

    document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

function generateCodeVerifier(length:number) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

async function generateCodeChallenge(codeVerifier:string) {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

export function signOut() {
    // clear the local storage and the SignIn component will come right back up
    localStorage.clear();
    document.location = "http://localhost:5173";
}

export async function getProfile() {
    // console.log('Authorization: ' + `Bearer ${localStorage.getItem('token')}`);

    axios.get("https://api.spotify.com/v1/me", {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
}