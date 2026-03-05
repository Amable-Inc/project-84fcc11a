export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="bg-amber-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">🍺 CervezaRia</h1>
          <div className="flex gap-6">
            <a href="#productos" className="hover:text-amber-200">Productos</a>
            <a href="#sobre" className="hover:text-amber-200">Sobre Nosotros</a>
            <a href="#contacto" className="hover:text-amber-200">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <img 
          src="https://images.unsplash.com/photo-1608270586620-248524c67de9?w=1600&h=900&fit=crop" 
          alt="Cerveza artesanal"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h2 className="text-6xl font-bold mb-4">Cerveza Artesanal Premium</h2>
          <p className="text-2xl mb-8">Descubre el sabor auténtico de la tradición</p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition">
            Comprar Ahora
          </button>
        </div>
      </section>

      {/* Productos Section */}
      <section id="productos" className="py-16 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">Nuestras Cervezas</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Producto 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <img 
              src="https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&h=500&fit=crop" 
              alt="Cerveza Rubia"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-amber-900 mb-2">Golden Ale</h3>
              <p className="text-gray-600 mb-4">Cerveza rubia suave con notas cítricas y refrescantes</p>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-amber-700">$4.99</span>
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg transition">
                  Añadir
                </button>
              </div>
            </div>
          </div>

          {/* Producto 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <img 
              src="https://images.unsplash.com/photo-1618885472179-5e474019f2a9?w=400&h=500&fit=crop" 
              alt="Cerveza Negra"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-amber-900 mb-2">Dark Stout</h3>
              <p className="text-gray-600 mb-4">Cerveza negra intensa con sabor a café y chocolate</p>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-amber-700">$5.99</span>
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg transition">
                  Añadir
                </button>
              </div>
            </div>
          </div>

          {/* Producto 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <img 
              src="https://images.unsplash.com/photo-1600788907416-456578634209?w=400&h=500&fit=crop" 
              alt="Cerveza IPA"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-amber-900 mb-2">Hoppy IPA</h3>
              <p className="text-gray-600 mb-4">IPA con intenso aroma a lúpulo y amargor equilibrado</p>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-amber-700">$6.49</span>
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg transition">
                  Añadir
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Características Section */}
      <section id="sobre" className="bg-amber-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">¿Por Qué Elegirnos?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🌾</div>
              <h3 className="text-2xl font-bold text-amber-900 mb-2">100% Natural</h3>
              <p className="text-gray-700">Ingredientes seleccionados de la más alta calidad</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">⚗️</div>
              <h3 className="text-2xl font-bold text-amber-900 mb-2">Proceso Artesanal</h3>
              <p className="text-gray-700">Elaboración tradicional con recetas únicas</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🚚</div>
              <h3 className="text-2xl font-bold text-amber-900 mb-2">Envío Rápido</h3>
              <p className="text-gray-700">Entrega a domicilio en 24-48 horas</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">¿Listo para probar el mejor sabor?</h2>
          <p className="text-xl mb-8">Obtén 15% de descuento en tu primera compra</p>
          <button className="bg-white text-amber-900 hover:bg-amber-100 px-8 py-4 rounded-lg text-xl font-semibold transition">
            Comprar Ahora
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-amber-950 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2024 CervezaRia - Todos los derechos reservados</p>
          <p>Email: info@cervezaria.com | Tel: +34 123 456 789</p>
        </div>
      </footer>
    </div>
  );
}
