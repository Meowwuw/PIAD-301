import { Link } from 'react-router-dom'; 

function LoginError() {
  return (
    <div>
      <h1>Error de Autenticación</h1>
      <p>Hubo un problema al intentar iniciar sesión con Google. Por favor, inténtalo de nuevo.</p>
      <Link to="/login">Volver a la página de inicio de sesión</Link>
    </div>
  );
}

export default LoginError;