import { useState } from 'react';

import { useSelector } from "react-redux";
import { RootState } from "../state/store";

// make this a child of the draggable class
function Stats() {
    
    const color = useSelector((state: RootState) => state.settings.color);

    return <div key="Stats" className={`w-full h-full min-w-fit min-h-fit col-span-2 row-span-2 bg-${color}-800 bg-opacity-50 hover:bg-opacity-70 rounded-2xl`}>
        <h2>Stats</h2>
    </div>
}

export default Stats;