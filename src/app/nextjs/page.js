export default function NextJSPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" 
        alt="Next.js Logo" 
        className="w-32 h-32 mb-6"
      />
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        ¿Qué es Next.js?
      </h1>
      <p className="max-w-2xl text-center mb-8">
        Next.js es un framework basado en React que permite crear aplicaciones web modernas, rápidas y optimizadas. 
        Ofrece funciones potentes como renderizado en el servidor, generación de páginas estáticas y mucho más.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
        <div className="bg-gray-800 rounded-lg p-4 shadow-md hover:bg-gray-700 transition">
          <h2 className="font-semibold text-xl mb-2">SSR</h2>
          <p>Renderizado del lado del servidor para cargar páginas dinámicas rápidamente.</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 shadow-md hover:bg-gray-700 transition">
          <h2 className="font-semibold text-xl mb-2">SSG</h2>
          <p>Generación de sitios estáticos para mayor rendimiento y escalabilidad.</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 shadow-md hover:bg-gray-700 transition">
          <h2 className="font-semibold text-xl mb-2">Rutas Automáticas</h2>
          <p>Creación automática de rutas basadas en la estructura de archivos.</p>
        </div>
      </div>
    </div>
  );
}
