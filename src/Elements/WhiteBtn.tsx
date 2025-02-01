const WhiteBtn = ({
  text,
  clickEvent,
}: {
  text: string;
  clickEvent?: Function;
}) => {
  return (
    <button
      onClick={() => {
        clickEvent ? clickEvent() : null;
      }}
      className="bg-white text-[13px] phone:text-[20px] px-5 py-1 rounded-full text-black cursor-pointer select-none hover:outline-[1px] active:bg-black hover:bg-black active:text-white hover:text-white border-2 border-white transition duration-500"
    >
      {text}
    </button>
  );
};

export default WhiteBtn;
