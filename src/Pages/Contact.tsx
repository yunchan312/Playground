import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import { database } from "../firebase";
import { useRecoilState } from "recoil";
import { contactLists } from "../atom";
import { useNavigate } from "react-router-dom";
import WhiteBtn from "../Elements/WhiteBtn";
import ContactModal from "../Modals/ContactModal";
import { useInView } from "react-intersection-observer";

export interface contactForm {
  id?: string;
  title: string;
  name: string;
  detail: string;
}
const Contact = () => {
  const [isModal, setIsModal] = useState(false);
  const [contacts, setContacts] = useRecoilState(contactLists);
  const [lastDoc, setLastDoc] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLast, setIsLast] = useState(false);

  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    fecthNextMessages();
  }, [inView]);

  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.fromTo(
      ".contact",
      {
        opacity: 0,
        y: 20,
      },
      { opacity: 1, y: 0, duration: 1 }
    );
    gsap.fromTo(".contactLists", { opacity: 0 }, { opacity: 1, duration: 1.5 });
  });

  useEffect(() => {
    let unsubscribe: any = null;
    const fecthMessages = async () => {
      setIsLoading(true);
      const messagesQuery = query(
        collection(database, "contact"),
        orderBy("createdAt", "desc"),
        limit(10)
      );
      unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
        if (snapshot.docs.length < 10) setIsLast(true);
        const contactMap = snapshot.docs.map((doc) => {
          const { title, name, detail } = doc.data();
          return {
            id: doc.id,
            title,
            name,
            detail,
          };
        });
        setContacts(contactMap);
        setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
      });
      setIsLoading(false);
    };
    fecthMessages();
    return () => {
      unsubscribe && unsubscribe();
    };
  }, []);

  const fecthNextMessages = async () => {
    if (!lastDoc) return;
    setIsLoading(true);
    const messagesQuery = query(
      collection(database, "contact"),
      orderBy("createdAt", "desc"),
      startAfter(lastDoc),
      limit(10)
    );
    onSnapshot(messagesQuery, (snapshot) => {
      const contactMap = snapshot.docs.map((doc) => {
        const { title, name, detail } = doc.data();
        return {
          id: doc.id,
          title,
          name,
          detail,
        };
      });
      setContacts((prev) => [...prev, ...contactMap]);
      setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
      if (10 > snapshot.docs.length) {
        setIsLast(true);
      }
    });
    setIsLoading(false);
  };

  const navigate = useNavigate();
  const propFunc = () => {
    setIsModal(true);
  };
  return (
    <div className="bg-black min-h-[100vh] text-white py-2 px-5 font-GL">
      {isModal ? <ContactModal setIsModal={setIsModal} /> : null}
      <div className="relative z-10">
        <div className="w-full contact text-[50px] phone:text-[100px] mb-10 flex phone:flex-row flex-col items-start justify-center phone:justify-around phone:items-center">
          <div>Contact</div>
          <WhiteBtn text="Write Something" clickEvent={propFunc} />
        </div>
        <div className="phone:px-20 flex flex-col gap-5 contactLists">
          {contacts.map((contact, i) => {
            return (
              <div key={i} className="relative group">
                <div
                  className="cursor-pointer relative border-r-2 border-b-2 group-hover:border-black group-active:border-black border-white bg-black z-50 rounded-md transition active:duration-100 duration-300 flex justify-between items-center px-5 min-h-[50px]"
                  onClick={() => navigate(`/contact/${contact.id}`)}
                >
                  <div className="text-3xl">{contact.title}</div>
                  <div>{contact.name}</div>
                </div>
                <div className="absolute top-0 left-0 z-30 w-full h-full rounded-md group-active:translate-x-2 group-active:translate-y-2 group-hover:translate-y-2 group-hover:translate-x-2 bg-white transition duration-700"></div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center w-full pt-5" ref={ref}>
          {isLast ? null : isLoading ? "Loading..." : null}
        </div>
      </div>
    </div>
  );
};

export default Contact;
