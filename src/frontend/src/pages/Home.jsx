import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    }
  },
    []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setToken(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-4">Bienvenido a mi pagina 🏡</h1>
      {token && (
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-600"
        >
          Cerrar Sesion
        </button>
      )}
      {token ? (
        <div>
          <p className="text-green-600 text-xl">Haz iniciado exitosamente</p>
        </div>
      ) : (
        <div>
          <p className="text-red-600 text-xl">
            Parece que no haz iniciado sesion
          </p>
          <Link to="/login" className="mt-4 inline-block text-blue-500">
            Ir a la pagina de Login
          </Link>
        </div>
      )}
    </div>
  );
}
export default Home;
