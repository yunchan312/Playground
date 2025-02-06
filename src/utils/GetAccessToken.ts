import axios from "axios";

export const GetAccessToken = async () => {
  await axios
    .post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "client_credentials",
        client_id: `${import.meta.env.VITE_SPOTIFY_CLIENT_ID}`,
        client_secret: `${import.meta.env.VITE_CLIENT_SECRET}`,
      }).toString(),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    )
    .then((res) => {
      localStorage.setItem("pl_at", res.data.access_token);
    })
    .catch((err) => console.log(err));
};
