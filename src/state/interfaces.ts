

export interface ImageData {
    width: number,
    height: number,
    url: string,
}

export interface TrackData {
    id: string,
    name: string,
    duration: number,
    artist: ArtistData,
    images: ImageData[],
    albumID: string,
    explicit: boolean,
}

export const emptyTrack:TrackData = {
    id: "0",
    name: "title",
    duration: 0,
    artist: {
        id: "0",
        name: "artist",
        images: [],
    },
    images: [],
    albumID: "0",
    explicit: false,
};

export interface ArtistData {
    id: string,
    name: string,
    images: ImageData[],
}

export interface AlbumData {
    album: string,
    artist: string,
    tracks: TrackData[],
    type: string,
    albumType: string,
    images: ImageData[],
    albumLink: string,
    id: string,
}

export interface PlaylistData {
    id: string;
    name: string;
    images: ImageData[];
    tracks: number
    description: string;
}
