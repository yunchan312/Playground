import { Link } from "react-router-dom";
import { TracksQuery } from "../Pages/Playlists/Playlists";

const TrackCard = ({ query }: { query: TracksQuery }) => {
  return (
    <Link
      to={`https://www.youtube.com/results?search_query=${query.artists[0].name}+${query.name}`}
      className="my-3 cursor-pointer py-4 px-2 rounded-md phone:hover:bg-neutral-900 transition active:scale-[0.95] duration-500 flex"
    >
      {query.album?.images ? (
        <img
          src={query.album.images[0].url}
          alt="album img"
          className="size-20"
        />
      ) : null}

      <div className="py-2 px-2 flex flex-col items-start justify-around">
        <div className="text-[20px]">{query.name}</div>
        <div className="font-GL">
          {query.artists ? query.artists[0].name : null}
        </div>
      </div>
    </Link>
  );
};

export default TrackCard;
