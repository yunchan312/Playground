import axios from "axios";
import { TracksQuery } from "../Pages/Playlists/Playlists";

export const GetTracks = async (
  search: string,
  setTracks: React.Dispatch<React.SetStateAction<TracksQuery[]>>
) => {
  await axios
    .get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("pl_at")}`,
      },
      params: {
        q: `${search}`,
        type: "track",
        offset: 0,
        limit: 12,
        include_external: "audio",
      },
    })
    .then((res) => {
      setTracks(res.data.tracks.items);
    })
    .catch((err) => console.log(err));
};
