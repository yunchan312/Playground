const Btn = ({ text }: { text: string }) => {
  return (
    <div className="font-GL cursor-pointer py-10 phone:py-0 ">
      <div className="hover:scale-[1.05] active:scale-[1.05] active:duration-100 hover:duration-700 text-[2rem] transition">
        {text}
      </div>
    </div>
  );
};

export default Btn;
