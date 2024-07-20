import { useEffect, useState } from 'react';

import { setToken } from './apicontroller';

import { useSelector } from "react-redux";
import { RootState } from "./state/store";

import Player from './components/player';
import Queue from './components/queue';
import Playlist from './components/playlist';
import Search from './components/search';
import Lyrics from './components/lyrics';
import Heardle from './components/heardle';
import Settings from './components/settings';
import Profile from './components/profile';
import SignIn from './components/signin';


interface Component {
  id: string,
  index: number,
  component: JSX.Element,
}

//  TODO:
// - add a router
// - have a sign in page that refreshes the token if already logged in and
//    does all the api calls and dispatches initial state into the store
// -- if a call fails (some 400 message) after token refresh have them resign in
// -- only navigate after setting store, should fix issues where store updates but components don't
// - also have a route for a feedback form

function App() {

  const { snapToGrid, componentList } = useSelector((state: RootState) => state.settings);

  const [signedIn, setSignedIn] = useState<boolean>(false);

  useEffect(() => {
    // Show the dashboard if they are already signed in and have a token
    if (localStorage.getItem('token')){
      // looks like the token expires so look into reloading it before setting signedIn
      setSignedIn(true);
    } else {
      // Else check for the redirect code and set the token
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");
      if (code) {
        setToken().then(() => {
          setSignedIn(true);
        });
      }
    }
  }, []);

  return <div
    className={
      `w-screen h-screen overflow-auto p-3 font-main ` +
      ( snapToGrid ? 'grid place-items-center gap-3 grid-cols-[repeat(auto-fit,minmax(150px,1fr))] auto-rows-[144px]' : '')
    }
  >
    { !signedIn ?
      <SignIn /> :
      componentList.map(id => {
        switch(id) {
          case 'player':
            return <Player />;
          case 'queue':
            return <Queue />;
          case 'playlist':
            return <Playlist />;
          case 'settings':
            return <Settings />;
          case 'search':
            return <Search />;
          case 'lyrics':
            return <Lyrics />;
          case 'heardle':
            return <Heardle />;
          case 'profile':
            return <Profile />;
        }
      })
    }
  </div>
}

export default App
