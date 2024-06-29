// sign in overlay that block use until signed in

// somehow save login data (is this when you switch to cookies instead of locaStorage?)

import { useState } from 'react';

interface signInProps {
    passLoginResult: (value:boolean) => void;
}

function SignIn({passLoginResult}: signInProps) {

    const [showingPassword, setShowingPassword] = useState<boolean>(false);

    function handleLogin() {
        let loginError:boolean = false;

        if (loginError) {
            passLoginResult(false);
        } else {
            passLoginResult(true);
        }
    }

    return <div className="absolute top-0 left-0 z-50 w-screen h-screen bg-eigen grid place-items-center">
        <div className='z-0 absolute w-64 aspect-square rounded-full drop-shadow-circle bg-sky-500 animate-wriggle1' />
        <div className='z-0 absolute w-32 aspect-square rounded-full drop-shadow-circle bg-sky-500 animate-wriggle2' />
        <div className='z-0 absolute w-44 aspect-square rounded-full drop-shadow-circle bg-sky-500 animate-wriggle3' />
        <div className='z-0 absolute w-64 aspect-square rounded-full drop-shadow-circle bg-sky-500 animate-wriggle4' />
        <div className="z-10 flex flex-col justify-around items-center w-1/4 h-2/3 min-w-96 bg-indigo-950 backdrop-blur-md bg-opacity-50 rounded-xl">
            <div className='flex flex-col text-center'>
                <h1 className='text-3xl font-bold'>ANIMA</h1>
                <h2 className="text-lg font-semibold">Customize your listening experience</h2>
            </div>
            <div className='flex flex-col gap-5 w-full px-12'>
                <div>
                    <h2 className='text-xl font-semibold pb-2'>Username</h2>
                    <input
                        type="text"
                        placeholder="username"
                        className='w-full px-2 py-1 text-xl rounded-md'
                    />
                </div>
                <div className='flex flex-col items-start'>
                    <h2 className='text-xl font-semibold pb-2'>Password</h2>
                    <input
                        type={showingPassword ? "text" : "password"}
                        placeholder="password"
                        className='w-full px-2 py-1 text-xl rounded-md'
                    />
                    <button onClick={() => setShowingPassword(!showingPassword)}>
                        {showingPassword ? 'Hide' : 'Show'}
                    </button>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-3 w-full'>
                <p>*use your spotify credentials to login</p>
                <button
                    onClick={handleLogin}
                    className='w-4/5 h-16 text-lg font-semibold bg-indigo-700 rounded-md'
                >
                    Log In
                </button>
            </div>
        </div>
    </div>
}

export default SignIn;