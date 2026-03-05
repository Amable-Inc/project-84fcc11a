import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="bg-amber-900 text-white p-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold hover:text-amber-200 transition">🍺 CervezaRia</Link>
          <div className="flex gap-6">
            <Link href="/productos" className="hover:text-amber-200 transition">Productos</Link>
            <Link href="/sobre-nosotros" className="hover:text-amber-200 transition">Sobre Nosotros</Link>
            <Link href="/contacto" className="hover:text-amber-200 transition">Contacto</Link>
            <Link href="#ofertas" className="hover:text-amber-200 transition">Ofertas</Link>
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
          <Link href="/productos" className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition">
            Explorar Productos
          </Link>
        </div>
      </section>

      {/* Productos Destacados Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-amber-900">Productos Destacados</h2>
          <Link href="/productos" className="text-amber-700 hover:text-amber-900 font-semibold text-lg transition">
            Ver todos →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Producto 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
            <Link href="/productos#golden-ale">
              <img 
                src="https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&h=500&fit=crop" 
                alt="Cerveza Rubia"
                className="w-full h-64 object-cover"
              />
            </Link>
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
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
            <Link href="/productos#dark-stout">
              <img 
                src="https://images.unsplash.com/photo-1618885472179-5e474019f2a9?w=400&h=500&fit=crop" 
                alt="Cerveza Negra"
                className="w-full h-64 object-cover"
              />
            </Link>
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
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
            <Link href="/productos#hoppy-ipa">
              <img 
                src="https://images.unsplash.com/photo-1600788907416-456578634209?w=400&h=500&fit=crop" 
                alt="Cerveza IPA"
                className="w-full h-64 object-cover"
              />
            </Link>
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
      <section className="bg-amber-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">¿Por Qué Elegirnos?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/sobre-nosotros#calidad" className="text-center hover:scale-105 transition transform">
              <div className="text-6xl mb-4">🌾</div>
              <h3 className="text-2xl font-bold text-amber-900 mb-2">100% Natural</h3>
              <p className="text-gray-700">Ingredientes seleccionados de la más alta calidad</p>
            </Link>
            <Link href="/sobre-nosotros#proceso" className="text-center hover:scale-105 transition transform">
              <div className="text-6xl mb-4">⚗️</div>
              <h3 className="text-2xl font-bold text-amber-900 mb-2">Proceso Artesanal</h3>
              <p className="text-gray-700">Elaboración tradicional con recetas únicas</p>
            </Link>
            <Link href="/contacto" className="text-center hover:scale-105 transition transform">
              <div className="text-6xl mb-4">🚚</div>
              <h3 className="text-2xl font-bold text-amber-900 mb-2">Envío Rápido</h3>
              <p className="text-gray-700">Entrega a domicilio en 24-48 horas</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Ofertas Especiales Section */}
      <section id="ofertas" className="py-16 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">Ofertas Especiales</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative bg-gradient-to-r from-amber-600 to-amber-800 rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&h=400&fit=crop" 
              alt="Pack de cervezas"
              className="w-full h-64 object-cover opacity-40"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
              <h3 className="text-3xl font-bold mb-2">Pack Degustación</h3>
              <p className="text-xl mb-4">6 cervezas variadas por solo $25</p>
              <Link href="/productos#packs" className="bg-white text-amber-900 hover:bg-amber-100 px-6 py-3 rounded-lg font-semibold transition">
                Ver Oferta
              </Link>
            </div>
          </div>

          <div className="relative bg-gradient-to-r from-yellow-600 to-orange-600 rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1532634993-15f421e42ec0?w=800&h=400&fit=crop" 
              alt="Suscripción mensual"
              className="w-full h-64 object-cover opacity-40"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
              <h3 className="text-3xl font-bold mb-2">Suscripción Mensual</h3>
              <p className="text-xl mb-4">Recibe 12 cervezas cada mes con descuento</p>
              <Link href="/productos#suscripcion" className="bg-white text-orange-900 hover:bg-orange-100 px-6 py-3 rounded-lg font-semibold transition">
                Suscribirse
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">Lo Que Dicen Nuestros Clientes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-amber-50 p-6 rounded-lg shadow-md">
              <div className="text-amber-600 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4">"La mejor cerveza artesanal que he probado. El sabor es increíble y la calidad insuperable."</p>
              <p className="font-semibold text-amber-900">- María González</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg shadow-md">
              <div className="text-amber-600 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4">"Excelente servicio y entrega rápida. Las cervezas llegan en perfecto estado."</p>
              <p className="font-semibold text-amber-900">- Carlos Ruiz</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg shadow-md">
              <div className="text-amber-600 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4">"Me encanta la variedad. Cada cerveza tiene su propio carácter único."</p>
              <p className="font-semibold text-amber-900">- Ana Martínez</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">¿Listo para probar el mejor sabor?</h2>
          <p className="text-xl mb-8">Obtén 15% de descuento en tu primera compra</p>
          <Link href="/productos" className="inline-block bg-white text-amber-900 hover:bg-amber-100 px-8 py-4 rounded-lg text-xl font-semibold transition">
            Comprar Ahora
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CervezaRia</h3>
              <p className="text-amber-200">Cerveza artesanal de la más alta calidad</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Enlaces</h4>
              <ul className="space-y-2">
                <li><Link href="/productos" className="text-amber-200 hover:text-white transition">Productos</Link></li>
                <li><Link href="/sobre-nosotros" className="text-amber-200 hover:text-white transition">Sobre Nosotros</Link></li>
                <li><Link href="/contacto" className="text-amber-200 hover:text-white transition">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-amber-200 hover:text-white transition">Términos y Condiciones</a></li>
                <li><a href="#" className="text-amber-200 hover:text-white transition">Política de Privacidad</a></li>
                <li><a href="#" className="text-amber-200 hover:text-white transition">Política de Envíos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <p className="text-amber-200 mb-2">Email: info@cervezaria.com</p>
              <p className="text-amber-200 mb-2">Tel: +34 123 456 789</p>
              <p className="text-amber-200">Madrid, España</p>
            </div>
          </div>
          <div className="border-t border-amber-800 pt-8 text-center text-amber-200">
            <p>© 2024 CervezaRia - Todos los derechos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
