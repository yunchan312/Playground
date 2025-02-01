import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TextInput from "../Components/TextInput";
import TextArea from "../Components/TextArea";
import SubmitInput from "../Components/SubmitInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { database } from "../firebase";

export type FormValues = {
  title?: string;
  name?: string;
  detail?: string;
};

const ContactModal = ({
  setIsModal,
}: {
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.fromTo(".modal", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(".modalBox", { y: 30 }, { y: 0, duration: 1 });
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const now = Date.now();
      await addDoc(collection(database, "contact"), {
        title: data.title,
        name: data.name,
        detail: data.detail,
        createdAt: now,
      });
      setIsModal(false);
      alert("Success");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="modal absolute z-50 top-0 left-0 w-full h-[100vh] flex items-center justify-center"
      onClick={() => setIsModal(false)}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="modalBox bg-white w-[90%] h-[70%] phone:w-[500px] phone:h-[450px] rounded-md shadow-lg shadow-neutral-400"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-black px-1 py-1 flex justify-end">
          <span
            className="px-3 py-2 cursor-pointer"
            onClick={() => setIsModal(false)}
          >
            X
          </span>
        </div>

        <div className="px-7 text-black flex flex-col justify-around items-center">
          <div className="w-full">
            <div>Name</div>
            <TextInput
              id="name"
              name="name"
              placeholder="What is your name?"
              register={register}
              required={true}
            />
            {errors.name ? (
              <div className="text-red-500 text-sm">Name is required</div>
            ) : null}
          </div>

          <div className="py-3 w-full">
            <div>Title</div>
            <TextInput
              id="title"
              name="title"
              placeholder="What do you want to talk?"
              register={register}
              required={true}
            />
            {errors.title ? (
              <div className="text-red-500 text-sm">Title is required</div>
            ) : null}
          </div>

          <div className="py-3 w-full">
            <div>Detail</div>
            <TextArea
              name="detail"
              id="detail"
              placeholder="Tell me more specific!"
              register={register}
              required={true}
            />
            {errors.detail ? (
              <div className="text-red-500 text-sm">Detail is required</div>
            ) : null}
          </div>
          <SubmitInput value="Send" />
        </div>
      </form>
    </div>
  );
};

export default ContactModal;
