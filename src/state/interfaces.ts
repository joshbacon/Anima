

export interface ImageData {
    width: number,
    height: number,
    url: string,
}

export interface TrackData {
    _type: 'track',
    id: string,
    name: string,
    duration: number,
    artist: ArtistData,
    images: ImageData[],
    albumID: string,
    explicit: boolean,
}

export const emptyTrack:TrackData = {
    _type: 'track',
    id: "0",
    name: "title",
    duration: 0,
    artist: {
        _type: 'artist',
        id: "0",
        name: "artist",
        images: [],
    },
    images: [],
    albumID: "0",
    explicit: false,
};

export interface ArtistData {
    _type: 'artist',
    id: string,
    name: string,
    images: ImageData[],
}

export interface AlbumData {
    _type: 'album',
    name: string,
    artist: string,
    tracks: TrackData[],
    type: string,
    albumType: string,
    images: ImageData[],
    albumLink: string,
    id: string,
}

export interface PlaylistData {
    _type: 'playlist',
    id: string;
    name: string;
    images: ImageData[];
    tracks: number
    description: string;
}
