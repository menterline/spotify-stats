import { ExplicitContent, ExternalURL, Followers } from "./SpotifyEntities";

export interface UserProfile {
  country: string;
  display_name: string;
  email: string;
  explicit_content: ExplicitContent;
  external_urls: ExternalURL;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  product: string;
  type: string;
  uri: string;
}
