import { useEffect, useState, useRef } from 'react';

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
  showing: boolean,
  component: JSX.Element,
}

function App() {

  // TODO: stringify the settings data and put in localStorage
  //       - then load it in with the initial page (is it exists)
  //       * allows for mainly redux use but saves it between sessions
  //       - just figure out how often to write to localStorage
  //         (basically whenever a setting or position is changed)
  const state = useSelector((state: RootState) => state.settings);
  // console.log(JSON.stringify(state));



  let winWidth = useRef(window.innerWidth);
  let winHeight = useRef(window.innerHeight);

  const { mode, player, queue, playlist, settings, search, lyrics, heardle, profile } = useSelector((state: RootState) => state.settings);

  const [signedIn, setSignedIn] = useState<boolean>(false);

  function setScreenSize() {
    localStorage.setItem('winWidth', `${winWidth.current}`);
    localStorage.setItem('winHeight', `${winHeight.current}`);
  }

  useEffect(() => {
    setScreenSize();
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


  // need to rethink this whole mapping concept now that redux is setup
  const [componentList, setComponentList] = useState<Component[]>([
    // TODO: get rid of this whole callback thing when redux is added, just have the components each update the store individually
    { id: "Player",   index: 0, showing: player.showing,   component: <Player />   },
    { id: "Queue",    index: 1, showing: queue.showing,    component: <Queue />    },
    { id: "Playlist", index: 2, showing: playlist.showing, component: <Playlist /> },
    { id: "Settings", index: 3, showing: settings.showing, component: <Settings /> },
    { id: "Search",   index: 4, showing: search.showing,   component: <Search />   },
    { id: "Lyrics",   index: 5, showing: lyrics.showing,   component: <Lyrics />   },
    { id: "Heardle",  index: 6, showing: heardle.showing,  component: <Heardle />  },
    { id: "Profile",  index: 7, showing: profile.showing,  component: <Profile />  }
  ]);

  return <div
    key="main"
    className={
      `w-screen h-screen overflow-auto p-3 font-main ` + 'flex flex-wrap gap-3'
      // ( mode ? 'inline-grid place-items-center gap-3 grid-cols-6' : '')
    }
  >
    { !signedIn ?
      <SignIn /> :
      componentList.sort((a:Component, b:Component) => a.index - b.index).map(c => {
        return c.showing ? c.component : null;
      })
    }
  </div>
}

export default App
