import { MoveRight } from "lucide-react";
const Button = ({ text, variant, className }) => {
  return (
    <button
      className={`btn rounded-full font-mplus1 ${className} ${
        variant === "default"
          ? "btn-primary text-secondary btn-xl"
          : variant === "defaultWithIcon"
          ? "btn-primary text-secondary"
          : "btn-outline btn-primary px-6"
      }`}
    >
      {text}
      {variant === "defaultWithIcon" && <MoveRight />}
    </button>
  );
};

export default Button;
