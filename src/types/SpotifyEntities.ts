export type Artist = {
  id: string;
  name: string;
  genres: string[];
  href: string;
  external_urls: ExternalURL;
  images: Image[];
  popularity: number;
  type: string;
  uri: string;
};

export type Track = {
  id: string;
  name: string;
  album: Album;
  artists: Artist[];
  duration_ms: number;
  explicit: boolean;
  href: string;
  external_urls: ExternalURL;
  popularity: number;
  preview_url?: string;
  track_number: number;
  type: string;
  uri: string;
};

export type Album = {
  id: string;
  name: string;
  images: Image[];
  release_date: string;
  total_tracks: number;
  href: string;
  external_urls: ExternalURL;
  uri: string;
};

export type ExplicitContent = {
  filter_enabled: boolean;
  filter_locked: boolean;
};

export type ExternalURL = {
  spotify: string;
};

export type Followers = {
  href: string | null;
  total: number;
};

export type Image = {
  url: string;
  height?: number;
  width?: number;
};
