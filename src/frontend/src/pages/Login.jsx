function Login (){
    const GOOGLE_AUTH_URL = import.meta.env.VITE_GOOGLE_AUTH_URL;
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white rounded-xl shadow-md text-center">
                <h1 className="text-2xl font-bold mb-4">Iniciar Sesion</h1>
                <p className="mb-6 text-orange-600">Usa tu cuenta de google</p>
                <a className="p-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors" href={GOOGLE_AUTH_URL}>Iniciar sesion con Google</a>
            </div>
        </div>
    );
}

export default Login;

