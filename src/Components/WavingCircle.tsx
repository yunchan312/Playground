import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useSetRecoilState } from "recoil";
import { homeState } from "../atom";

const WavingCircle = () => {
  const setIsHover = useSetRecoilState(homeState);

  gsap.registerPlugin(useGSAP);
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      let ele1 = gsap.to(".element", { rotation: "+=360", duration: 20 });
      ele1.repeat(-1);
      let ele2 = gsap.to(".element2", { rotation: "-=360", duration: 15 });
      ele2.repeat(-1);
      let ele3 = gsap.to(".element3", { rotation: "-=360", duration: 10 });
      ele3.repeat(-1);
    },
    { scope: container }
  );

  return (
    <div
      className="bg-black w-[300px] h-[300px] flex items-center justify-center"
      ref={container}
    >
      <div
        className="relative size-48 hover:scale-[1.1] group cursor-pointer transition duration-700"
        ref={container}
        onMouseEnter={() => setIsHover((prev) => !prev)}
      >
        <div className="box element rounded-[47%] absolute top-2 left-0 rotate-45  bg-white size-48"></div>
        <div className="box element2 rounded-[43%] absolute top-0 left-1 rotate-12 bg-white size-48"></div>
        <div className="box element3 rounded-[45%] absolute bottom-1 right-1 bg-white size-48 "></div>
      </div>
    </div>
  );
};

export default WavingCircle;
