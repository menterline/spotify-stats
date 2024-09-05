import { Artist, Track } from "./SpotifyEntities";

export type TopItemsResponse = {
  term: string;
  artists: Artist[];
  tracks: Track[];
  genres: string[];
};
