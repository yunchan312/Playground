import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black text-white h-[100vh] flex flex-col justify-center items-center">
      <div className="text-xl py-2 select-none">404 notfound</div>
      <div
        className="bg-white px-3 py-2 rounded-md hover:opacity-60 cursor-pointer transition duration-700 text-black"
        onClick={() => navigate("/")}
      >
        return to Home
      </div>
    </div>
  );
};

export default NotFound;
