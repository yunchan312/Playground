import { UseFormRegister } from "react-hook-form";
import { FormValues } from "../Modals/ContactModal";

const TextInput = ({
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
  required: boolean;
}) => {
  return (
    <div className="w-full">
      <input
        type="text"
        id={id}
        {...register(name, { required: required })}
        placeholder={placeholder}
        className="border-2 w-full px-1 outline-none py-1 bg-black placeholder:white text-white border-white"
      />
    </div>
  );
};

export default TextInput;
