import "./index.css";

const Button = ({ style, children, className }) => {
  return (
    <button
      onClick={() => {
        alert("Too Early for the Fest. The Fest will be live soon");
      }}
      className={
        "SkewButton bg-white text-black px-20 py-4 text-xl md:text-3xl font-medium " +
        className
      }
      style={style}
    >
      <div>{children}</div>
    </button>
  );
};
export default Button;
