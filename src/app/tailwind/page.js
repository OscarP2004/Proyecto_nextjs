export default function TailwindPage() {
    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold mb-4">¿Qué es Tailwind CSS?</h1>
            <p className="text-lg mb-6">
                Tailwind CSS es un framework de CSS basado en utilidades que permite construir interfaces personalizadas rápidamente
                usando clases directamente en el HTML o JSX.
            </p>

            <div className="space-y-6">
                {/* Botón */}
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                    Botón Tailwind
                </button>

                {/* Tarjeta */}
                <div className="border rounded-lg p-4 shadow-md max-w-sm">
                    <h2 className="text-xl font-semibold mb-2">Tarjeta</h2>
                    <p className="text-gray-700">
                        Esta es una tarjeta de ejemplo usando clases de Tailwind CSS.
                    </p>
                </div>

                {/* Alerta */}
                <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded">
                    ⚠️ Esto es una alerta de ejemplo.
                </div>
            </div>
        </main>
    );
}
