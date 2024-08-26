import { render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { TopItems } from "../TopItems";
import * as hooks from "../../Hooks/hooks";
import { UserProfile } from "../../types/UserProfile";
import { Profile } from "../Profile";

describe("Profile Tests", () => {
  test("renders correctly", () => {
    const mockFetchProfile = vi.spyOn(hooks, "useFetchProfile");
    const mockGetTopItems = vi.spyOn(hooks, "useGetTopItems");
    const mockGetTrackAnalysis = vi.spyOn(hooks, "useTracksAnalysis");
    const token = "test";
    const mockUserProfile: UserProfile = {
      country: "test",
      display_name: "My Test User",
      email: "test",
      explicit_content: { filter_enabled: false, filter_locked: false },
      external_urls: { spotify: "test" },
      followers: { href: null, total: 0 },
      href: "test",
      id: "test",
      images: [{ height: 0, url: "test", width: 0 }],
      product: "test",
      type: "test",
      uri: "test",
    };
    const mockTopItems = {
      artists: [
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
      ],
      tracks: [
        {
          id: "1",
          name: "Track 1",
          album: {
            id: "1",
            name: "Test Album",
            images: [
              {
                height: 100,
                width: 100,
                url: "https://picsum.photos/100/100",
              },
            ],
            release_date: "2020-01-01",
            total_tracks: 1,
            href: "https://api.spotify.com/v1/albums/1",
            uri: "https://open.spotify.com/album/1",
          },
          artists: [
            {
              id: "1",
              name: "Test Artist",
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
      ],
      term: "test",
      genres: [],
    };
    mockFetchProfile.mockReturnValue([false, mockUserProfile, undefined]);
    mockGetTopItems.mockReturnValue([false, mockTopItems, undefined]);
    mockGetTrackAnalysis.mockReturnValue([false, [], undefined]);
    const { getByText } = render(<Profile token={token} />);
    expect(getByText(/My Test User/)).toBeTruthy();
    expect(getByText(/Track 1/)).toBeTruthy();
    expect(getByText(/Artist 1/)).toBeTruthy();
  });
});
