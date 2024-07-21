import { useEffect } from 'react';

import { redirectToAuth } from '../apicontroller';

import { useDispatch } from "react-redux";
import { toggleSnapToGrid, changeColor, setListOrder, toggleShowing, changeColSpan, changeRowSpan, changeWidth, changeHeight } from "../state/settingsSlice";

function SignIn() {

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