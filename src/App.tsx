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

interface Component {
  id: string,
  index: number,
  showing: boolean,
  component: JSX.Element,
}

function App() {

  const [signedIn, setSignedIn] = useState<boolean>(true);

  const [componentList, setComponentList] = useState<Component[]>([
    // TODO: get rid of this whole callback thing when redux is added, just have the components each update the store individually
    { id: "Player",   index: 0, showing: true, component: <Player />   },
    { id: "Queue",    index: 1, showing: true, component: <Queue />    },
    { id: "Playlist", index: 2, showing: true, component: <Playlist /> },
    { id: "Settings", index: 3, showing: true, component: <Settings snapToGrid={true} updateCallback={updateShowing} /> },
    { id: "Search",   index: 4, showing: true, component: <Search />   },
    { id: "Lyrics",   index: 5, showing: true, component: <Lyrics />   },
    { id: "Heardle",  index: 6, showing: true, component: <Heardle />  },
    { id: "Stats",    index: 7, showing: true, component: <Stats />    }
  ]);

  function updateShowing(id:string, isShowing:boolean) {
    let tempList:Component[] = [...componentList];
    tempList[tempList.map(c => c.id).indexOf(id)].showing = isShowing;
    setComponentList(tempList);
  }

  //  use this when yo get to rearranging the components
  function changeIndices(from:number, to:number) {
    let tempList:Component[] = [...componentList];
    tempList[from].index = to;

    // Increse all the indecies between to and from (moved up in array)
    for (let i = from-1; i >= to; i--) tempList[i].index += 1;

    // Decrease all the indecies between from and to (moved down in array)
    for (let i = from+1; i <= to && i < tempList.length; i++) tempList[i].index -= 1;

    setComponentList(tempList);
  }

  return <div key="main" className='w-screen h-screen min-w-fit min-h-fit overflow-auto inline-grid place-items-center gap-3 grid-cols-6 grid-rows-6 p-3 font-main'>
    {
      componentList.sort((a:Component, b:Component) => a.index - b.index).map(c => {
        return c.showing ? c.component : null;
      })
    }

    { !signedIn ? <SignIn passLoginResult={setSignedIn} /> : null }
  </div>
}

export default App
