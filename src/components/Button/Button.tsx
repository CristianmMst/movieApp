import "./Button.scss";

interface ButtonProps {
  text: string;
  color: "dark" | "white";
}

export const Button = ({ text, color }: ButtonProps) => {
  return (
    <button
      className={color === "dark" ? "ButtonDark" : "ButtonWhite"}
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
