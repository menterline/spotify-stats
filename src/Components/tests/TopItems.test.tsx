import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { TopItems } from "../TopItems";
import { testArtists, testTracks } from "./TopItems-testData";
describe("TopItems", () => {
  test("renders empty lists correctly", () => {
    const { getByText } = render(<TopItems tracks={[]} artists={[]} />);
    expect(getByText("Tracks")).toBeTruthy();
    expect(getByText("Artists")).toBeTruthy();
  });
  test("renders tracks and artists", () => {
    const { getByRole, getByText } = render(
      <TopItems tracks={testTracks} artists={testArtists} />
    );
    expect(getByText("Tracks")).toBeTruthy();
    expect(getByText("Artists")).toBeTruthy();
    expect(getByRole("link", { name: "Track 1" }).getAttribute("href")).toBe(
      "https://open.spotify.com/track/web-1"
    );
    expect(getByRole("link", { name: "Artist 1" }).getAttribute("href")).toBe(
      "https://open.spotify.com/artist/web-1"
    );
    expect(getByRole("link", { name: "Track 2" }).getAttribute("href")).toBe(
      "https://open.spotify.com/track/web-2"
    );
    expect(getByRole("link", { name: "Artist 2" }).getAttribute("href")).toBe(
      "https://open.spotify.com/artist/web-2"
    );
  });
});
