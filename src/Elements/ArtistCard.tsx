import { Link } from "react-router-dom";
import { ArtistsQuery } from "../Pages/Playlists/Playlists";

const ArtistCard = ({ query }: { query: ArtistsQuery }) => {
  console.log(query);
  return (
    <Link
      to={`${query.external_urls?.spotify}`}
      className="my-3 cursor-pointer py-4 px-2 rounded-md phone:hover:bg-neutral-900 transition active:scale-[0.95] duration-500"
    >
      <div className="flex flex-col items-center">
        {query.images ? (
          <img
            src={query.images[0].url}
            alt="image"
            className="rounded-full size-32"
          />
        ) : (
          <div className="bg-neutral-500 rounded-full size-32" />
        )}
        <div>{query.name ?? null}</div>
      </div>
    </Link>
  );
};

export default ArtistCard;
