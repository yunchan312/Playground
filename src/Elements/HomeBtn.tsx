import { useNavigate } from "react-router-dom";

const HomeBtn = ({ text, path }: { text: string; path: string }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white rounded-full px-10 py-2 my-2 select-none cursor-pointer"
      onClick={() => navigate(`/${path}`)}
    >
      {text}
    </div>
  );
};

export default HomeBtn;
