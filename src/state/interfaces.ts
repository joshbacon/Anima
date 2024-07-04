

export interface ImageData {
    width: number,
    height: number,
    link: string,
}

export interface TrackData {
    id: string,
    track: string,
    duration: number,
    artist: ArtistData,
    images: ImageData[],
    albumID: string,
}

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