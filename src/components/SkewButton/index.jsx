import "./index.css";

const Button = ({ style, children, className }) => {
  return (
    <button
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
