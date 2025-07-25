export default function TailwindPage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 p-6 pt-24 text-white flex flex-col items-center">
      {/* Título */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        ¿Qué es Tailwind CSS?
      </h1>

      {/* Descripción */}
      <p className="max-w-2xl text-center mb-10 text-lg md:text-xl">
        Tailwind CSS es un framework de utilidades para CSS que permite crear diseños modernos y responsivos directamente en el HTML o JSX.
      </p>

      {/* Grid de ejemplos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {/* Ejemplo 1: Botón */}
        <div className="bg-white text-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition text-center">
          <h2 className="text-2xl font-semibold mb-4">Botón de ejemplo</h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Botón Tailwind
          </button>
        </div>

        {/* Ejemplo 2: Tarjeta */}
        <div className="bg-white text-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold mb-2">Tarjeta de ejemplo</h2>
          <p className="text-gray-700">
            Esta es una tarjeta creada usando clases utilitarias de Tailwind CSS, con bordes redondeados y sombra.
          </p>
        </div>

        {/* Ejemplo 3: Alerta */}
        <div className="bg-white text-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition text-center">
          <h2 className="text-2xl font-semibold mb-4">Alerta de ejemplo</h2>
          <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded">
            ⚠️ Esto es una alerta de ejemplo.
          </div>
        </div>
      </div>
    </main>
  );
}
