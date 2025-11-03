import { useEffect } from "react";
import { useSearchParams, useNavigate, replace } from "react-router-dom";

function LoginSuccess() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get("token");

    if (token) {
      console.log("Token recibido y guardado", token);
      localStorage.setItem("authToken", token);
      navigate("/", { replace: true });
    } else {
      console.log("No hay token se envia de nuevo a login");
      console.error("No se recibio ningun token");
      navigate("/login", { replace: true });
    }
  }, [navigate, searchParams]);

  return(
    <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl">Autenticando porfavor espere</p>
    </div>
  );
}

export default LoginSuccess;
