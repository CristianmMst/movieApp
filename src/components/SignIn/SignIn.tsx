import "./SignIn.scss";
import { FaUserAlt } from "react-icons/fa";

export const SignIn = () => {
  return (
    <div className="LoginForm">
      <div className="SignIn">
        <div className="SignIn-title">
          <div className="SignIn-title-icon">
            <FaUserAlt color="#3f4be1" />
          </div>
          <h4 className="SignIn-title-title">Crear Cuenta</h4>
        </div>
        <form className="FormSignIn">
          <input
            type="text"
            className="FormSignIn-input"
            placeholder="Usuario"
          />
          <input
            type="email"
            className="FormSignIn-input"
            placeholder="Email"
          />
          <input
            type="password"
            className="FormSignIn-input"
            placeholder="Contraseña"
          />
          <button type="submit" className="FormSignIn-submit">
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};
