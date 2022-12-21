import "./Login.scss";
import { FaUserAlt } from "react-icons/fa";

export const Login = () => {
  return (
    <div className="LoginForm">
      <div className="Login">
        <div className="Login-title">
          <div className="Login-title-icon">
            <FaUserAlt color="#3f4be1" />
          </div>
          <h4 className="Login-title-title">Iniciar Sesión</h4>
        </div>
        <form className="Form">
          <input
            type="email"
            className="Form-input"
            placeholder="Email"
          />
          <input
            type="password"
            className="Form-input"
            placeholder="Contraseña"
          />
          <button type="submit" className="Form-submit">
            Entrar
          </button>
        </form>
        <p className="forgot">¿Olvidaste tu contraseña?</p>
      </div>
    </div>
  );
};
