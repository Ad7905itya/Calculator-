const Buttons = ({ children, onclick, type = "default", style = {} }) => {
  const getClass = () => {
    switch (type) {
      case "equal":
        return "bg-[--equal-bg] border-[--border-equal] text-[--text-equal] hover:bg-[--equal-bg-hover] hover:border-[--border-equal-hover]";
      case "reset":
        return "bg-[--bg-del] border-[--border-del] text-white hover:bg-[--bg-del-hover] hover:border-[--border-del-hover]";
      case "del":
        return "bg-[--bg-del] border-[--border-del] text-white hover:bg-[--bg-del-hover] hover:border-[--border-del-hover]";
      default:
        return "bg-[--key-bg] border-[--border] text-[--key-text] hover:bg-[--hover-key-bg] hover:border-[--hover-key-bg-border]";
    }
  };

  return (
    <button
      onClick={onclick}
      style={style}
      className={` border-b-[6px] rounded-xl min-h-14 font-extrabold text-2xl ${getClass()}`}
    >
      {children}
    </button>
  );
};

export default Buttons;

