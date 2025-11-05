import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function LoginSuccess() {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const location = useLocation(); 
  const navigate = useNavigate(); 

  useEffect(() => {
    let receivedToken = null;
    const params = new URLSearchParams(location.search);
    const tokenFromUrl = params.get('token');

    if (tokenFromUrl) {
      receivedToken = tokenFromUrl;
      localStorage.setItem('authToken', receivedToken);
    } else {
      const tokenFromStorage = localStorage.getItem('authToken');
      if (tokenFromStorage) {
        receivedToken = tokenFromStorage;
      }
    }

    if (receivedToken) {
      setToken(receivedToken);
    } else {
      console.error("LoginSuccess.jsx: No se recibió ningún token");
    }
    
    setLoading(false);

    setTimeout(() => {
        navigate('/'); 
    }, 3000); 

  }, [location, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p>Verificando autenticación...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-xl shadow-md text-center">
        {token ? (
          <>
            <h1 className="text-2xl font-bold mb-4 text-green-600">¡Inicio de Sesión Exitoso!</h1>
            <p className="mb-6 text-gray-700">Has sido autenticado correctamente.</p>
            <p className="text-xs text-gray-500 break-all"><strong>Token:</strong> {token}</p>
            <p className="mt-4 text-sm text-gray-600">Serás redirigido en unos segundos...</p>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-4 text-red-600">Error de Autenticación</h1>
            <p className="mb-6 text-gray-700">No se pudo obtener el token. Por favor, intenta iniciar sesión de nuevo.</p>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginSuccess;