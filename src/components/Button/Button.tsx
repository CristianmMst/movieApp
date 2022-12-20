import "./Button.scss";

interface ButtonProps {
  children: string;
  color: "dark" | "white";
}

export const Button = ({ children, color }: ButtonProps) => {
  return (
    <button
      className={color === "dark" ? "ButtonDark" : "ButtonWhite"}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
