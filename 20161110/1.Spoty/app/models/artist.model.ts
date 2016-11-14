import { Album } from './album.model';

export class Artist {
    id: number;
    name: string;
    genres: any;
    albums: Album[];
}