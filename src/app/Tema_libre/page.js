export default function TemaLibrePage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 pt-24 flex flex-col items-center">
      {/* Título */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        Inteligencia Artificial Generativa
      </h1>

      {/* Descripción */}
      <p className="max-w-2xl text-center mb-10 text-lg md:text-xl">
        La IA generativa está revolucionando el mundo, permitiendo crear texto, imágenes y videos de forma automática. 
        Estas son algunas de las herramientas más populares actualmente:
      </p>

      {/* Grid de herramientas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {/* Card 1 */}
        <div className="bg-white text-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition text-center">
          <h2 className="text-2xl font-semibold mb-2">ChatGPT</h2>
          <p className="text-gray-700">
            Modelo de lenguaje desarrollado por OpenAI que genera texto coherente, responde preguntas y asiste en tareas.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white text-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition text-center">
          <h2 className="text-2xl font-semibold mb-2">Midjourney</h2>
          <p className="text-gray-700">
            Herramienta de IA que crea imágenes artísticas de alta calidad a partir de descripciones textuales.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white text-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition text-center">
          <h2 className="text-2xl font-semibold mb-2">Sora</h2>
          <p className="text-gray-700">
            Modelo de OpenAI que puede generar videos realistas basados en instrucciones en lenguaje natural.
          </p>
        </div>
      </div>
    </main>
  );
}