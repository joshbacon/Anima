// https://developer.spotify.com/documentation/web-api
// https://developer.spotify.com/documentation/web-api/howtos/web-app-profile

import axios from "axios";
import { Buffer } from "buffer";
import { TrackData, emptyTrack, ArtistData, PlaylistData } from './state/interfaces';


export let VITE_CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
export let VITE_REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
export let VITE_AUTH_ENDPOINT = import.meta.env.VITE_AUTH_ENDPOINT;
export let VITE_SECRET = import.meta.env.VITE_SECRET;

export async function setToken() {
    let paramsAfter = new URLSearchParams(window.location.search);
    let code:string|null = paramsAfter.get('code');

    if (!code) return; // throw an error or something idk
    localStorage.setItem('code', code);

    let authToken = Buffer.from(`${VITE_CLIENT_ID}:${VITE_SECRET}`, 'utf-8').toString('base64');

    // This returns a 200 response then a 400 (Bad Request Error)
    // believe it's just because it's in development mode and the state loads twice
    const response = await axios.post('https://accounts.spotify.com/api/token', {
        'client_id': VITE_CLIENT_ID,
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': "http://localhost:5173",
        'code_verifier': localStorage.getItem('verifier')
    }, {
        headers: {
            "Authorization": `Basic ${authToken}`,
            "Content-Type": 'application/x-www-form-urlencoded',
        },
    })
    console.log(response);
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
    params.append("scope", "user-read-private user-read-email user-read-currently-playing user-read-playback-state playlist-read-private user-top-read");
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

export async function getCurrentlyPlaying():Promise<TrackData> {
    return axios.get("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
        .then(res => {console.log(res);
            let { id, name, artists, album, explicit } = res.data.item;
            const data:TrackData =  {
                id: id,
                name: name,
                duration: 0,
                artist: {
                    id: artists[0].id,
                    name: artists[0].name,
                    images: [],
                },
                images: album.images,
                albumID: album.id,
                explicit: explicit,
            }
            console.log(data)
            return data;
        })
        .catch(err => {
            return emptyTrack;
        });
}

export async function getPlaylists():Promise<PlaylistData[]> {
    return axios.get("https://api.spotify.com/v1/me/playlists", {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
        .then(res => {
            return res.data.items.map((playlist: any) => {
                let { name, images, id, tracks, description } = playlist;
                return {
                    id: id,
                    name: name,
                    images: images,
                    tracks: tracks.total,
                    description: description,
                }
            });
        })
        .catch(err => {
            console.log(err);
        });
}

export async function getQueue():Promise<TrackData[]> {
    return axios.get("https://api.spotify.com/v1/me/player/queue", {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
        .then(res => {
            return res.data.queue.map((track: any) => {
                let { name, duration_ms, artists, album, id, explicit } = track;
                return {
                    id: id,
                    name: name,
                    duration: duration_ms,
                    artist: {
                        id: artists[0].id,
                        name: artists[0].name,
                        images: artists[0].images,
                    },
                    images: album.images,
                    albumId: album.id,
                    explicit: explicit,
                }
            });
        })
        .catch(err => {
            console.log(err);
        });
}

export async function getProfile():Promise<string> {
    return axios.get("https://api.spotify.com/v1/me", {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
        .then(res => {
            return res.data.display_name;
        })
        .catch(err => {
            // for error handling, return this and check for it in profile component
            console.log(err);
        });
}

export async function getTopArtists(range:string):Promise<ArtistData[]> {
    return axios.get(`https://api.spotify.com/v1/me/top/artists?time_range=${range}&limit=3`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
        .then(res => {
            return res.data.items.map((artist: any) => {
                let { name, images, id } = artist;
                return {
                    id: id,
                    name: name,
                    images: images,
                }
            });
        })
        .catch(err => {
            // for error handling, return this and check for it in profile component
            console.log(err);
        });
}

export async function getTopTracks(range:string):Promise<TrackData[]> {
    return axios.get(`https://api.spotify.com/v1/me/top/tracks?time_range=${range}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
        .then(res => {
            return res.data.items.map((track: any) => {
                let { name, duration_ms, artists, album, id, explicit } = track;
                return {
                    id: id,
                    name: name,
                    duration: duration_ms,
                    artist: {
                        id: artists[0].id,
                        name: artists[0].name,
                        images: artists[0].images,
                    },
                    images: album.images,
                    albumId: album.id,
                    explicit: explicit,
                }
            });
        })
        .catch(err => {
            // for error handling, return this and check for it in profile component
            console.log(err);
        });
}