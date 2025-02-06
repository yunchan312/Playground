import axios from "axios";
import { ArtistsQuery } from "../Pages/Playlists/Playlists";

export const GetArtists = async (
  search: string,
  setArtists: React.Dispatch<React.SetStateAction<ArtistsQuery[]>>
) => {
  await axios
    .get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("pl_at")}`,
      },
      params: {
        q: `${search}`,
        type: "artist",
        offset: 0,
        limit: 5,
        include_external: "audio",
      },
    })
    .then((res) => {
      setArtists(res.data.artists.items);
    })
    .catch((err) => console.log(err));
};
