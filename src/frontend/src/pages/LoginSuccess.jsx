import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";

const CheckIcon = () => (
    <svg className="w-16 h-16 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);
const ErrorIcon = () => (
    <svg className="w-16 h-16 mx-auto text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);


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
    
    const timer = setTimeout(() => {
        setLoading(false);
    }, 1500); 

    const redirectTimer = setTimeout(() => {
        navigate('/'); 
    }, 4500);

    return () => {
        clearTimeout(timer);
        clearTimeout(redirectTimer);
    };

  }, [location, navigate]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <ClipLoader
          color={"#4f46e5"} 
          loading={loading}
          size={60} 
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <p className="mt-4 text-lg text-gray-600">Verificando autenticación...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-4 text-center bg-white rounded-2xl shadow-lg transform transition-all duration-500 ease-in-out">
        {token ? (
          <>
            <CheckIcon />
            <h1 className="text-3xl font-bold text-gray-800">¡Bienvenido!</h1>
            <p className="text-gray-600">Tu inicio de sesión ha sido exitoso.</p>
            <div className="pt-4">
                <p className="text-sm text-gray-500">
                Serás redirigido a la página principal en unos instantes...
                </p>
            </div>
          </>
        ) : (
          <>
            <ErrorIcon />
            <h1 className="text-3xl font-bold text-gray-800">Algo salió mal</h1>
            <p className="text-gray-600">
              No pudimos verificar tu identidad. Por favor,{' '}
              <a href="/login" className="font-medium text-indigo-600 hover:underline">
                inténtalo de nuevo
              </a>.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginSuccess;