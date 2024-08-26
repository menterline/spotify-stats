import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { TopItems } from "../TopItems";
import { testArtists, testTracks } from "./TopItems-testData";
describe("TopItems", () => {
  test("renders empty lists correctly", () => {
    const { getByText } = render(
      <TopItems
        tracks={[]}
        artists={[]}
        currentTerm={{ name: "short_term", label: "test" }}
      />
    );
    expect(getByText("Tracks")).toBeTruthy();
    expect(getByText("Artists")).toBeTruthy();
  });
  test("renders tracks and artists", () => {
    const { getByText } = render(
      <TopItems
        tracks={testTracks}
        artists={testArtists}
        currentTerm={{ name: "short_term", label: "test" }}
      />
    );
    expect(getByText("Tracks")).toBeTruthy();
    expect(getByText("Artists")).toBeTruthy();
    expect(getByText("Track 1")).toBeTruthy();
    expect(getByText("Artist 1")).toBeTruthy();
    expect(getByText("Track 2")).toBeTruthy();
    expect(getByText("Artist 2")).toBeTruthy();
  });
});
