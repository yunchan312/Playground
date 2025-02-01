import { useEffect, useState } from "react";
import WavingCircle from "../Components/WavingCircle";
import TinyCircle from "../Elements/TinyCircle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import HomeBtn from "../Elements/HomeBtn";

const Home = () => {
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const [circleActive, setCircleActive] = useState(false);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    let tl = gsap.timeline({});
    tl.fromTo(
      ".title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2 }
    );
    tl.fromTo(
      ".circle",
      { opacity: 0, display: "hidden" },
      { opacity: 1, display: "block", duration: 2, delay: -1 }
    );
  });

  useGSAP(() => {
    let list = gsap.timeline();
    if (circleActive) {
      list.to(".lists", { display: "block" });
      list.fromTo(
        ".listItem1",
        { opacity: 0, y: 5 },
        { opacity: 1, y: 0, duration: 1 }
      );
      list.fromTo(
        ".listItem2",
        { opacity: 0, y: 5 },
        { opacity: 1, y: 0, duration: 1, delay: -0.8 }
      );
      list.fromTo(
        ".listItem3",
        { opacity: 0, y: 5 },
        { opacity: 1, y: 0, duration: 1, delay: -0.8 }
      );
      list.fromTo(
        ".listItem4",
        { opacity: 0, y: 5 },
        { opacity: 1, y: 0, duration: 1, delay: -0.8 }
      );
      list.fromTo(
        ".listItem5",
        { opacity: 0, y: 5 },
        { opacity: 1, y: 0, duration: 1, delay: -0.8 }
      );
      list.fromTo(
        ".listItem6",
        { opacity: 0, y: 5 },
        { opacity: 1, y: 0, duration: 1, delay: -0.8 }
      );
      list.fromTo(
        ".listItem7",
        { opacity: 0, y: 5 },
        { opacity: 1, y: 0, duration: 1, delay: -0.8 }
      );
      list.fromTo(
        ".listItem8",
        { opacity: 0, y: 5 },
        { opacity: 1, y: 0, duration: 1, delay: -0.8 }
      );
    } else {
      list.fromTo(
        ".listItem1",
        { opacity: 1, y: 0 },
        { opacity: 0, y: 5, duration: 1 }
      );
      list.fromTo(
        ".listItem2",
        { opacity: 1, y: 0 },
        { opacity: 0, y: 5, duration: 1, delay: -0.8 }
      );
      list.fromTo(
        ".listItem3",
        { opacity: 1, y: 0 },
        { opacity: 0, y: 5, duration: 1, delay: -0.8 }
      );
      list.fromTo(
        ".listItem4",
        { opacity: 1, y: 0 },
        { opacity: 0, y: 5, duration: 1, delay: -0.8 }
      );
      list.fromTo(
        ".listItem5",
        { opacity: 1, y: 0 },
        { opacity: 0, y: 5, duration: 1, delay: -0.8 }
      );
      list.fromTo(
        ".listItem6",
        { opacity: 1, y: 0 },
        { opacity: 0, y: 5, duration: 1, delay: -0.8 }
      );
      list.fromTo(
        ".listItem7",
        { opacity: 1, y: 0 },
        { opacity: 0, y: 5, duration: 1, delay: -0.8 }
      );
      list.fromTo(
        ".listItem8",
        { opacity: 1, y: 0 },
        { opacity: 0, y: 5, duration: 1, delay: -0.8 }
      );
      list.to(".lists", { display: "hidden" });
    }
  }, [circleActive]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWinWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWinWidth(window.innerWidth);
      });
    };
  }, []);

  if (winWidth > 1000) {
    return (
      <div className="flex flex-col items-center justify-center h-[100vh]">
        <div className="text-white">My Playground</div>
        <div className="flex gap-10 items-end justify-center relative top-10">
          <TinyCircle text="Empty" path="Empty" />
          <div className="mb-12">
            <TinyCircle text="About Me" path="introduce" />
          </div>
          <TinyCircle text="Empty" path="Empty" />
        </div>
        <div className="flex justify-center items-center bg-black">
          <TinyCircle text="Empty" path="Empty" />
          <WavingCircle />
          <TinyCircle text="Empty" path="Empty" />
        </div>
        <div className="flex gap-10 items-start justify-center relative bottom-10">
          <TinyCircle text="Empty" path="Empty" />
          <div className="mt-12">
            <TinyCircle text="Empty" path="Empty" />
          </div>
          <TinyCircle text="Empty" path="Empty" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-start min-h-[100vh] py-10">
        <div className="text-white title">My Playground</div>
        <div
          className="circle"
          onClick={() => {
            setCircleActive((prev) => !prev);
            console.log("click!");
          }}
        >
          <WavingCircle />
        </div>
        <div className="lists hidden">
          <div className="listItem1">
            <HomeBtn text="Empty" path="empty" />
          </div>
          <div className="listItem2">
            <HomeBtn text="About Me" path="introduce" />
          </div>
          <div className="listItem3">
            <HomeBtn text="Empty" path="empty" />
          </div>
          <div className="listItem4">
            <HomeBtn text="Empty" path="empty" />
          </div>
          <div className="listItem5">
            <HomeBtn text="Empty" path="empty" />
          </div>
          <div className="listItem6">
            <HomeBtn text="Empty" path="empty" />
          </div>
          <div className="listItem7">
            <HomeBtn text="Empty" path="empty" />
          </div>
          <div className="listItem8">
            <HomeBtn text="Empty" path="empty" />
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
