import { UseFormRegister } from "react-hook-form";
import { FormValues } from "../Modals/ContactModal";

const TextArea = ({
  name,
  id,
  placeholder,
  register,
  required,
}: {
  name: keyof FormValues;
  id: string;
  placeholder: string;
  register: UseFormRegister<FormValues>;
  required: true;
}) => {
  return (
    <div className="w-full">
      <textarea
        {...register(name, { required })}
        id={id}
        placeholder={placeholder}
        className="w-full resize-none h-[100px] px-1 outline-none bg-black text-white border-2 border-white"
      ></textarea>
    </div>
  );
};

export default TextArea;
