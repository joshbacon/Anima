import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken, redirectToAuth } from '../apicontroller';

import { loadSettings, SettingsState } from '../state/settingsSlice';
import { testAuthorization, refreshToken } from '../apicontroller';

function SignIn() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function pullSettings() {
        const savedSettings = JSON.parse(localStorage.getItem('settings')!);
        if (savedSettings) {
            dispatch(loadSettings(savedSettings as SettingsState));
        }
    }

    function passSignIn() {
        navigate("/dashboard");
    }

    // Load in potentially existing settings, then
    // see if they have already logged in and either refresh the token or go to the sign in page accordingly
    useEffect(() => {
        pullSettings();
        const returnUser:string|null = localStorage.getItem('access_token');
        if (returnUser) {
            testAuthorization(returnUser).then(authorized => {
                if (authorized) {
                    passSignIn();
                } else {
                    refreshToken().then(response => {
                        if (response) { // token refresh worked, so navigate to dashboard
                            passSignIn();
                        } // else, token refresh didn't work, so they need to sign in again
                    })
                }
            });
        } else {
            const params = new URLSearchParams(window.location.search);
            const code = params.get("code");
            if (code) {
                setToken().then(() => {
                    testAuthorization(localStorage.getItem('access_token')??"").then(authorized => {
                        if (authorized) passSignIn();
                    })
                });
            }
        }
    }, []);

    return <div className="w-screen h-screen bg-eigen grid place-items-center">
        <div className='z-0 absolute w-64 aspect-square rounded-full drop-shadow-circle bg-sky-500 animate-wriggle1' />
        <div className='z-0 absolute w-32 aspect-square rounded-full drop-shadow-circle bg-sky-500 animate-wriggle2' />
        <div className='z-0 absolute w-44 aspect-square rounded-full drop-shadow-circle bg-sky-500 animate-wriggle3' />
        <div className='z-0 absolute w-64 aspect-square rounded-full drop-shadow-circle bg-sky-500 animate-wriggle4' />
        <div className="z-10 flex flex-col justify-around items-center gap-12 min-w-96 p-5 bg-indigo-950 backdrop-blur-md bg-opacity-50 rounded-xl">
            <div className='flex flex-col text-center'>
                <h1 className='text-3xl font-bold'>ANIMA</h1>
                <h2 className="text-lg font-semibold">Customize your listening experience</h2>
            </div>
            <button
                onClick={redirectToAuth}
                className='w-full h-16 text-lg font-semibold bg-indigo-700 rounded-md'
            >
                Log In with Spotify
            </button>
        </div>
    </div>
}

export default SignIn;