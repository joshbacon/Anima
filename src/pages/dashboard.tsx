import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { useDispatch } from 'react-redux';
import { loadSettings, SettingsState } from '../state/settingsSlice';

import Player from '../components/player';
import Queue from '../components/queue';
import Playlist from '../components/playlist';
import Search from '../components/search';
import Lyrics from '../components/lyrics';
import Heardle from '../components/heardle';
import Settings from '../components/settings';
import Profile from '../components/profile';


function Dashboard() {

    const dispatch = useDispatch();
    const { snapToGrid, componentList } = useSelector((state: RootState) => state.settings);

    useEffect(() => {
        const savedSettings = JSON.parse(localStorage.getItem('settings')!);
        if (savedSettings) {
            dispatch(loadSettings(savedSettings as SettingsState));
        }
    }, []);

    return <div
        className={
        `w-screen h-screen overflow-auto p-3 font-main ` +
        ( snapToGrid ? 'grid place-items-center gap-3 grid-cols-[repeat(auto-fit,minmax(150px,1fr))] auto-rows-[144px]' : '')
        }
    >
        { componentList.map(id => {
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
        })}
    </div>
}

export default Dashboard;