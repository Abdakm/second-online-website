import { GoArrowUpRight } from "react-icons/go";

const Button = ({ color, background, text, arrow, classes, ...other}) => {
  return (
    <>
      <button className={`text-${color} ${background} ${classes} btn`} {...other}>
        {text}
        {arrow ? <GoArrowUpRight color={`${color}`} strokeWidth={1} /> : null}
      </button>
    </>
  );
};

export default Button;
