import { useGSAP } from "@gsap/react";
import banner from "../assets/banner.png";
import gsap from "gsap";
import Btn from "../Elements/Btn";
import { useNavigate } from "react-router-dom";

const Introduce = () => {
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.fromTo(
      ".banner",
      {
        opacity: 0,
      },
      { opacity: 1, duration: 4 }
    );
    gsap.fromTo(
      ".text",
      { opacity: 0, y: 5 },
      { opacity: 1, y: 0, duration: 2, delay: 1 }
    );
  });

  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black min-h-[100vh] max-w-[1600px] text-white flex flex-col justify-around phone:grid phone:grid-rows-[2fr_1fr]">
        <div className="banner relative z-10">
          <div className="phone:hidden w-full h-full absolute bg-gradient-to-t from-black"></div>
          <div
            className="w-full phone:h-full h-[400px] bg-cover bg-center z-20"
            style={{
              backgroundImage: `url(${banner})`,
            }}
          />
          <div className="font-GL phone:absolute relative -top-10 phone:top-0 phone:left-0 py-2 phone:h-full w-full phone:bg-gradient-to-l phone:from-black flex flex-col phone:items-end justify-start phone:justify-end px-3">
            <div className="text text-[50px] phone:mr-0 phone:text-[100px] flex justify-end phone:flex-col">
              <div>KOO</div> <div>YUNCHAN</div>
            </div>
            <div className="text self-end">
              <div className="text-[10px] grid grid-cols-[1fr_4fr]">
                <span>Email.</span>
                <span>yunchan0339@gmail.com</span>
              </div>
              <div className="text-[10px] grid grid-cols-[1fr_4fr]">
                <span>Github.</span>
                <span>yunchan312</span>
              </div>
              <div className="text-[10px] grid grid-cols-[1fr_4fr]">
                <span>Birth.</span>
                <span>2001.03.12</span>
              </div>
              <div className="text-[10px]">한국외국어대학교 컴퓨터공학부</div>
            </div>
          </div>
        </div>
        <div className="phone:relative font-GL bottom-5 z-30">
          <div className="text-3xl px-7">반갑습니다, 구윤찬입니다.</div>
          <div className="phone:grid phone:grid-cols-[2fr_1fr] *:px-7">
            <div>
              웹사이트를 뚝딱뚝딱 만드는 친구를 보고 나도 해보고싶다는 생각으로
              웹 개발을 시작했습니다. 대학을 다니면서 AI, Cloud, DBMS 등등
              다양한 분야를 도전해봤지만 저는 웹개발이 가장 재미있습니다.
              그렇다보니 자연스럽게 웹 개발자를 제 진로로 정했습니다.
              <br />
              <br />
              목표를 향해 열심히 가다보니, PO와 Frontend 개발자로 참여한 토이
              프로젝트가 3개 기업의 스폰을 받고 진지한 프로젝트가 되었습니다.
              대학생으로서 꽤나 의미 있는 경험을 하고 있다고 생각합니다. 저는
              개발자임과 동시에 PO로서 이러한 경험을 하다보니 개인의 성장만큼
              팀의 성장을 위해 헌신하고, 참여하는 프로젝트에 대한 태도를
              중요하게 생각하게 되었습니다. <br />
              <br />
              좋은 서비스가 만들어지는 것엔 개인적 역량보단 팀 내부에서 발생하는
              긍정적인 분위기와 시너지가 중요하다고 생각합니다. 따라서 다양한
              직무의 구성원들과 적극적으로 소통하고 협업하려고 노력합니다.
            </div>
            <div className="phone:grid phone:grid-rows-3 phone:my-0 my-5 flex justify-between">
              <div
                onClick={() => {
                  window.location.href =
                    "http://flying-chokeberry-02e.notion.site/061d51c247f34f74b3b3d68aa270011f?pvs=4";
                }}
              >
                <Btn text="BLOG" />
              </div>
              <div
                onClick={() => {
                  window.location.href = "https://github.com/yunchan312";
                }}
              >
                <Btn text="Github" />
              </div>
              <div onClick={() => navigate("/contact")}>
                <Btn text="Contact Me" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduce;
