import { useEffect, useState, useRef } from 'react';

import { setToken } from './apicontroller';

import { useSelector, useDispatch } from "react-redux";
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

  const { mode, playerData, queueData, playlistData, settingsData, searchData, lyricsData, heardleData, profileData } = useSelector((state: RootState) => state.settings);

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


  // need to rethink this whole mapping concept now that redux is setup
  const [componentList, setComponentList] = useState<Component[]>([
    { id: "Player",   index: 0, showing: playerData.showing,   component: <Player />   },
    { id: "Queue",    index: 1, showing: queueData.showing,    component: <Queue />    },
    { id: "Playlist", index: 2, showing: playlistData.showing, component: <Playlist /> },
    { id: "Settings", index: 3, showing: settingsData.showing, component: <Settings /> },
    { id: "Search",   index: 4, showing: searchData.showing,   component: <Search />   },
    { id: "Lyrics",   index: 5, showing: lyricsData.showing,   component: <Lyrics />   },
    { id: "Heardle",  index: 6, showing: heardleData.showing,  component: <Heardle />  },
    { id: "Profile",  index: 7, showing: profileData.showing,  component: <Profile />  }
  ]);

  return <div
    key="main"
    className={
      `w-screen h-screen overflow-auto p-3 font-main ` +
      ( mode ? 'grid place-items-center gap-3 grid-cols-[repeat(auto-fit,minmax(150px,1fr))] auto-rows-[144px]' : '')
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
