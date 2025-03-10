import { useNavigate } from "react-router";

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dc", {
      replace: true,
    });
  };

  return (
    <>
      <div className="container">
        <h1>Login</h1>
        <hr />
        <button className="btn btn-primary" onClick={handleLogin}>
          Ingresar
        </button>
      </div>
    </>
  );
};
