import { useState } from 'react';

import Player from './components/player';
import Queue from './components/queue';
import Playlist from './components/playlist';
import Search from './components/search';
import Lyrics from './components/lyrics';
import Heardle from './components/heardle';
import Stats from './components/stats';
import Settings from './components/settings';

import SignIn from './components/signin';


function App() {

  const [signedIn, setSignedIn] = useState<boolean>(true);

  return <div className='w-screen h-screen min-w-fit min-h-fit overflow-auto inline-grid place-items-center gap-3 grid-cols-6 grid-rows-6 p-3 font-main'>
    <Player />
    <Queue />
    <Playlist />
    <Settings />
    <Search />
    <Lyrics />
    <Heardle />
    <Stats />

    { !signedIn ? <SignIn passLoginResult={setSignedIn} /> : null }
  </div>
}

export default App
