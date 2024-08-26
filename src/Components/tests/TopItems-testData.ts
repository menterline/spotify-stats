export const testTracks = [
  {
    id: "1",
    name: "Track 1",
    album: {
      id: "1",
      name: "Album 1",
      images: [
        {
          height: 100,
          width: 100,
          url: "https://picsum.photos/100/100",
        },
      ],
      release_date: "2020-01-01",
      total_tracks: 10,
      href: "https://api.spotify.com/v1/albums/1",
      uri: "https://open.spotify.com/album/1",
    },
    artists: [
      {
        id: "1",
        name: "Artist 1",
        genres: ["genre 1"],
        href: "https://api.spotify.com/v1/artists/1",
        popularity: 100,
        type: "artist",
        uri: "https://open.spotify.com/artist/1",
        images: [
          {
            height: 100,
            width: 100,
            url: "https://picsum.photos/100/100",
          },
        ],
      },
    ],
    duration_ms: 1000,
    explicit: false,
    href: "https://api.spotify.com/v1/tracks/1",
    popularity: 100,
    preview_url:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview124/v4/3c/0a/7e/3c0a7e4d-0f13-2f8c-13b7-6c6f8b6c4d66/mzaf_12524435165144433321.plus.aac.p.m4a",
    track_number: 1,
    type: "track",
    uri: "https://open.spotify.com/track/1",
  },
  {
    id: "2",
    name: "Track 2",
    album: {
      id: "2",
      name: "Album 2",
      images: [
        {
          height: 100,
          width: 100,
          url: "https://picsum.photos/100/100",
        },
      ],
      release_date: "2020-01-01",
      total_tracks: 10,
      href: "https://api.spotify.com/v1/albums/2",
      uri: "https://open.spotify.com/album/2",
    },
    artists: [
      {
        id: "2",
        name: "Artist 2",
        genres: ["genre 2"],
        href: "https://api.spotify.com/v1/artists/2",
        popularity: 100,
        type: "artist",
        uri: "https://open.spotify.com/artist/2",
        images: [
          {
            height: 100,
            width: 100,
            url: "https://picsum.photos/100/100",
          },
        ],
      },
    ],
    duration_ms: 1000,
    explicit: false,
    href: "https://api.spotify.com/v1/tracks/2",
    popularity: 100,
    preview_url:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview124/v4/3c/0a/7e/3c0a7e4d-0f13-2f8c-13b7-6c6f8b6c4d66/mzaf_12524435165144433321.plus.aac.p.m4a",
    track_number: 2,
    type: "track",
    uri: "https://open.spotify.com/track/2",
  },
];

export const testArtists = [
  {
    id: "1",
    name: "Artist 1",
    images: [
      {
        height: 100,
        width: 100,
        url: "https://picsum.photos/100/100",
      },
    ],
    genres: ["genre 1"],
    href: "https://api.spotify.com/v1/artists/1",
    popularity: 100,
    type: "artist",
    uri: "https://open.spotify.com/artist/1",
  },
  {
    id: "2",
    name: "Artist 2",
    images: [
      {
        height: 100,
        width: 100,
        url: "https://picsum.photos/100/100",
      },
    ],
    genres: ["genre 2"],
    href: "https://api.spotify.com/v1/artists/2",
    popularity: 100,
    type: "artist",
    uri: "https://open.spotify.com/artist/2",
  },
];
