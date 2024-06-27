
// settings list
// * have little info tool tips or just on the side explaining the purpose of the setting

// - toggle snap to grid
// -- animate the components moving to the new position on toggle (but quickly encase they spam it, idk debug)


// * grey out whatever section is disabled to be verbose

// snap-to-grid ON
// - be able to change the component sizes (col/row span) between a couple presets 
// - need to be able to fit nicely in 6x6 or whatever it ends up being, larger grid size means more available presets

// snap-to-grid OFF
// idk honestly

function Settings() {
    return <div className='w-full h-full min-w-fit min-h-fit row-span-3 bg-slate-500 rounded-2xl'>
        settings
    </div>
}

export default Settings;