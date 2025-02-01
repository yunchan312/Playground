import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { database } from "../firebase";
import { contactForm } from "./Contact";

const ContactDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [detail, setDetail] = useState<contactForm | null>(null);
  useEffect(() => {
    const getDetail = async () => {
      const docRef = doc(database, "contact", `${id}`);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      if (data) {
        setDetail({
          id: docSnap.id,
          title: data.title,
          name: data.name,
          detail: data.detail,
        } as contactForm);
      } else {
        navigate("/unknown");
      }
    };
    getDetail();
  }, []);
  return (
    <div className="bg-black min-h-[100vh] text-white py-10 px-5 font-GL">
      <div className="w-full contact text-[30px] phone:text-[60px] mb-5 flex flex-col">
        {detail?.title ?? "No Data"}
        <hr />
        <div className="text-sm self-end py-2">
          작성자: {detail?.name ?? "No Data"}
        </div>
      </div>
      <div className="px-5">{detail?.detail ?? "No Data"}</div>
    </div>
  );
};

export default ContactDetail;
