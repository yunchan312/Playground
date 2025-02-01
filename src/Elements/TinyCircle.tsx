import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { useRecoilValue } from "recoil";
import { homeState } from "../atom";
import { useNavigate } from "react-router-dom";

const TinyCircle = ({
  text,
  path,
  dd,
}: {
  text: string;
  path: string;
  dd?: number;
}) => {
  const navigate = useNavigate();
  const isHover = useRecoilValue(homeState);
  gsap.registerPlugin(useGSAP);
  const container = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    if (isHover) {
      gsap.fromTo(
        ".tiny",
        { opacity: 0, display: "hidden" },
        { opacity: 1, display: "block", duration: 1, delay: dd }
      );
    } else {
      gsap.fromTo(
        ".tiny",
        { opacity: 1, display: "block" },
        { opacity: 0, display: "hidden", duration: 1 }
      );
    }
  }, [isHover]);
  return (
    <div
      ref={container}
      className="tiny cursor-pointer"
      onClick={() => navigate(`/${path}`)}
    >
      <div className="px-3 py-2 rounded-full bg-white transition duration-700 hover:bg-opacity-30 select-none">
        {text}
      </div>
    </div>
  );
};

export default TinyCircle;
