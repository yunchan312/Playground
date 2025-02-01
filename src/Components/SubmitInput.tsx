const SubmitInput = ({ value }: { value: string }) => {
  return (
    <input
      type="submit"
      value={value}
      className="bg-white text-black rounded-md px-10 py-1 shadow-md shadow-neutral-500 active:scale-[0.9] duration-200 transition cursor-pointer"
    />
  );
};

export default SubmitInput;
