import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { GetAccessToken } from "../../utils/GetAccessToken";
import { GetArtists } from "../../utils/GetArtists";
import { GetTracks } from "../../utils/GetTracks";
import ArtistCard from "../../Elements/ArtistCard";
import TrackCard from "../../Elements/TrackCard";

interface SearchValue {
  search: string;
}
interface ImagesProps {
  url?: string;
  width?: number;
  height?: number;
}
export interface ArtistsQuery {
  external_urls?: { spotify?: string };
  followers?: { href?: string; total?: number };
  genres?: string[];
  href?: string;
  id?: string;
  images?: ImagesProps[];
  name?: string;
  popularity?: number;
  type?: string;
  uri?: string;
}
export interface TracksQuery {
  album?: { images?: ImagesProps[]; name?: string };
  artists: {
    external_urls?: { spotify?: string };
    name?: string;
  }[];
  duration_ms: number;
  external_urls?: { spotify?: string };
  name?: string;
}

const Playlists = () => {
  useEffect(() => {
    GetAccessToken();
  }, []);

  const { register, handleSubmit } = useForm<SearchValue>();
  const [artists, setArtists] = useState<ArtistsQuery[]>([]);
  const [tracks, setTracks] = useState<TracksQuery[]>([]);

  const onSubmit = async (data: SearchValue) => {
    await GetArtists(data.search, setArtists);
    await GetTracks(data.search, setTracks);
  };
  return (
    <div className="min-h-[100vh] py-2 px-5 text-white flex items-center flex-col">
      <div className="py-3 mt-5">Playlists</div>
      <div className="">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            id="search"
            placeholder="Search"
            {...register("search", { required: true })}
            className="focus:outline-none px-1 py-1 text-black"
          />
          <input
            type="submit"
            value="Search"
            className="bg-white text-black py-1 px-1 cursor-pointer font-GL"
          />
        </form>
      </div>

      <div className="w-full">
        <div className="py-5 px-3">Artists</div>
        <div className="phone:flex phone:flex-row grid grid-cols-2 gap-3">
          {artists.length > 0
            ? artists.map((q, i) => (
                <div key={i}>
                  <ArtistCard query={q} />
                </div>
              ))
            : null}
        </div>
      </div>

      <div className="w-full">
        <div className="py-5 px-3">Tracks</div>
        <div className="grid phone:grid-cols-2 grid-cols-1">
          {tracks.length > 0
            ? tracks.map((q, i) => (
                <div key={i}>
                  <TrackCard query={q} />
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Playlists;
