import { useSelector } from "react-redux";
import { RootState } from "../state/store";

// look into Musixmatch for the lyrics (that's what spotify uses and it's suppose to sync with playback)

// make this a child of the draggable class
function Lyrics() {
    
    const { snapToGrid, color, lyricsData } = useSelector((state: RootState) => state.settings);

    return <div
        key="Lyrics"
        style={ snapToGrid ? {
            width: `100%`,
            height: `100%`,
            gridColumn: `span ${lyricsData.colSpan}`,
            gridRow: `span ${lyricsData.rowSpan}`
        }: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: `${lyricsData.width}px`,
            height: `${lyricsData.height}px`,
            transform: `translate(${lyricsData.posX}px, ${lyricsData.posY}px)`
        }}
        className={lyricsData.showing ? `bg-${color}-600 bg-opacity-50 hover:bg-opacity-70 rounded-2xl overflow-y-scroll p-3 transition-all duration-700` : 'hidden'}
    >
        <h2>
            [Verse 1]
            Now I've heard there was a secret chord
            That David played and it pleased the Lord
            But you don't really care for music, do ya?
            It goes like this, the fourth, the fifth
            The minor fall, the major lift
            The baffled king composing "Hallelujah"
        </h2>
        <h2>
            [Chorus]
            Hallelujah, Hallelujah
            Hallelujah, Hallelujah
        </h2>
        <h2>
            [Verse 2]
            Your faith was strong, but you needed proof
            You saw her bathing on the roof
            Her beauty in the moonlight overthrew ya
            She tied you to a kitchen chair
            She broke your throne and she cut your hair
            And from your lips she drew the Hallelujah
        </h2>
        <h2>
            [Chorus]
            Hallelujah, Hallelujah
            Hallelujah, Hallelujah
        </h2>
        <h2>
            [Verse 3]
            You say I took the name in vain
            I don't even know the name
            But if I did, well, really, what's it to ya?
            There's a blaze of light in every word
            It doesn't matter which you heard
            The holy or the broken Hallelujah
            See upcoming rock shows
            Get tickets for your favorite artists
            You might also like
            Did you know that there’s a tunnel under Ocean Blvd
            Lana Del Rey
            Nobody Gets Me
            SZA
            Creepin’
            Metro Boomin, The Weeknd & 21 Savage
            [Chorus]
            Hallelujah, Hallelujah
            Hallelujah, Hallelujah
        </h2>
        <h2>
            [Verse 4]
            I did my best, it wasn't much
            I couldn't feel, so I tried to touch
            I've told the truth, I didn't come to fool ya
            And even though it all went wrong
            I'll stand before the lord of song
            With nothing on my tongue but hallelujah
        </h2>
        <h2>
            [Chorus]
            Hallelujah, Hallelujah
            Hallelujah, Hallelujah
            Hallelujah, Hallelujah
            Hallelujah, Hallelujah
            Hallelujah, Hallelujah
            Hallelujah, Hallelujah
            Hallelujah, Hallelujah
            Hallelujah, Hallelujah
            Hallelujah, Hallelujah
        </h2>
        <h2>
            [Outro]
            Hallelujah, Hallelujah
            [Additional Lyrics]
            Baby, I've been here before
            I know this room, I've walked this floor
            I used to live alone before I knew ya
            And I've seen your flag on the marble arch
            Love is not a victory march
            It's a cold and it's a broken Hallelujah
        </h2>
        <h2>
            [Additional Lyrics]
            There was a time you let me know
            What's really going on below
            But now you never show it to me, do ya?
            And remember when I moved in you
            The holy dove was moving too
            And every breath we drew was Hallelujah
        </h2>
        <h2>
            [Additional Lyrics]
            Maybe there's a God above
            But all I've ever learned from love
            Was how to shoot at someone who outdrew ya
            And it's not a cry that you hear at night
            It's not somebody who's seen the light
            It's a cold and it's a broken Hallelujah
        </h2>
    </div>
}

export default Lyrics;