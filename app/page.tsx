import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="bg-amber-900 text-white p-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold hover:text-amber-200 transition">🍺 Pumawari</Link>
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
          alt="Cerveza artesanal Pumawari"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h2 className="text-6xl font-bold mb-4">Cerveza Artesanal del Perú</h2>
          <p className="text-2xl mb-8">Tres mundos, tres sabores, una tradición</p>
          <Link href="/productos" className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition">
            Explorar Nuestras Líneas
          </Link>
        </div>
      </section>

      {/* Las Tres Líneas */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">Nuestras Tres Líneas</h2>
          <p className="text-xl text-gray-700">Inspiradas en la cosmovisión andina</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Hanan Pacha */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
            <Link href="/productos#hanan-pacha">
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=500&fit=crop" 
                alt="Hanan Pacha - Selva"
                className="w-full h-64 object-cover"
              />
            </Link>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-green-800 mb-2">Hanan Pacha</h3>
              <p className="text-sm text-green-600 font-semibold mb-2">EL MUNDO DE ARRIBA - SELVA</p>
              <p className="text-gray-600 mb-4">Cervezas con ingredientes de la Amazonía peruana: cacao, frutas tropicales y hierbas ancestrales</p>
              <Link href="/productos#hanan-pacha" className="text-green-700 hover:text-green-900 font-semibold">
                Ver línea →
              </Link>
            </div>
          </div>

          {/* Kay Pacha */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
            <Link href="/productos#kay-pacha">
              <img 
                src="https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?w=400&h=500&fit=crop" 
                alt="Kay Pacha - Sierra"
                className="w-full h-64 object-cover"
              />
            </Link>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-orange-800 mb-2">Kay Pacha</h3>
              <p className="text-sm text-orange-600 font-semibold mb-2">EL MUNDO DEL MEDIO - SIERRA</p>
              <p className="text-gray-600 mb-4">Cervezas con ingredientes andinos: quinua, maíz morado y hierbas de altura</p>
              <Link href="/productos#kay-pacha" className="text-orange-700 hover:text-orange-900 font-semibold">
                Ver línea →
              </Link>
            </div>
          </div>

          {/* Ukhu Pacha */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
            <Link href="/productos#ukhu-pacha">
              <img 
                src="https://images.unsplash.com/photo-1559604635-1e0b1f2d7e8b?w=400&h=500&fit=crop" 
                alt="Ukhu Pacha - Costa"
                className="w-full h-64 object-cover"
              />
            </Link>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Ukhu Pacha</h3>
              <p className="text-sm text-blue-600 font-semibold mb-2">EL MUNDO DE ABAJO - COSTA</p>
              <p className="text-gray-600 mb-4">Cervezas con ingredientes costeños: ají amarillo, cilantro y maíz blanco</p>
              <Link href="/productos#ukhu-pacha" className="text-blue-700 hover:text-blue-900 font-semibold">
                Ver línea →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Características Section */}
      <section className="bg-amber-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">¿Por Qué Pumawari?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/sobre-nosotros#calidad" className="text-center hover:scale-105 transition transform">
              <div className="text-6xl mb-4">🌿</div>
              <h3 className="text-2xl font-bold text-amber-900 mb-2">Ingredientes Peruanos</h3>
              <p className="text-gray-700">De la selva, sierra y costa del Perú</p>
            </Link>
            <Link href="/sobre-nosotros#proceso" className="text-center hover:scale-105 transition transform">
              <div className="text-6xl mb-4">🏔️</div>
              <h3 className="text-2xl font-bold text-amber-900 mb-2">Tradición Andina</h3>
              <p className="text-gray-700">Recetas inspiradas en la cosmovisión ancestral</p>
            </Link>
            <Link href="/contacto" className="text-center hover:scale-105 transition transform">
              <div className="text-6xl mb-4">🚚</div>
              <h3 className="text-2xl font-bold text-amber-900 mb-2">Envío Nacional</h3>
              <p className="text-gray-700">Entrega en todo el Perú</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-amber-900">Productos Destacados</h2>
          <Link href="/productos" className="text-amber-700 hover:text-amber-900 font-semibold text-lg transition">
            Ver todos →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Producto 1 - Hanan Pacha */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
            <Link href="/productos#cacao-imperial">
              <img 
                src="https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&h=500&fit=crop" 
                alt="Cacao Imperial"
                className="w-full h-64 object-cover"
              />
            </Link>
            <div className="p-6">
              <span className="text-sm text-green-600 font-semibold">HANAN PACHA</span>
              <h3 className="text-2xl font-bold text-amber-900 mb-2">Cacao Imperial</h3>
              <p className="text-gray-600 mb-4">Stout con cacao amazónico y notas de café salvaje</p>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-amber-700">S/ 18.90</span>
                <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg transition">
                  Añadir
                </button>
              </div>
            </div>
          </div>

          {/* Producto 2 - Kay Pacha */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
            <Link href="/productos#chicha-dorada">
              <img 
                src="https://images.unsplash.com/photo-1618885472179-5e474019f2a9?w=400&h=500&fit=crop" 
                alt="Chicha Dorada"
                className="w-full h-64 object-cover"
              />
            </Link>
            <div className="p-6">
              <span className="text-sm text-orange-600 font-semibold">KAY PACHA</span>
              <h3 className="text-2xl font-bold text-amber-900 mb-2">Chicha Dorada</h3>
              <p className="text-gray-600 mb-4">Ale con maíz morado y especias andinas</p>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-amber-700">S/ 16.90</span>
                <button className="bg-orange-700 hover:bg-orange-800 text-white px-6 py-2 rounded-lg transition">
                  Añadir
                </button>
              </div>
            </div>
          </div>

          {/* Producto 3 - Ukhu Pacha */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
            <Link href="/productos#pacifico-ipa">
              <img 
                src="https://images.unsplash.com/photo-1600788907416-456578634209?w=400&h=500&fit=crop" 
                alt="Pacífico IPA"
                className="w-full h-64 object-cover"
              />
            </Link>
            <div className="p-6">
              <span className="text-sm text-blue-600 font-semibold">UKHU PACHA</span>
              <h3 className="text-2xl font-bold text-amber-900 mb-2">Pacífico IPA</h3>
              <p className="text-gray-600 mb-4">IPA con ají amarillo y cilantro costeño</p>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-amber-700">S/ 19.90</span>
                <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition">
                  Añadir
                </button>
              </div>
            </div>
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
              alt="Pack degustación"
              className="w-full h-64 object-cover opacity-40"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
              <h3 className="text-3xl font-bold mb-2">Pack Tres Mundos</h3>
              <p className="text-xl mb-4">3 cervezas de cada línea por solo S/ 140</p>
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
              <h3 className="text-3xl font-bold mb-2">Club Pumawari</h3>
              <p className="text-xl mb-4">12 cervezas cada mes con descuentos exclusivos</p>
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
              <p className="text-gray-700 mb-4">"La línea Hanan Pacha es increíble. El sabor del cacao amazónico es único y auténtico."</p>
              <p className="font-semibold text-amber-900">- María Gonzales, Lima</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg shadow-md">
              <div className="text-amber-600 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4">"Me encanta Kay Pacha. La Chicha Dorada tiene un sabor que me recuerda a mi tierra cusqueña."</p>
              <p className="font-semibold text-amber-900">- Carlos Quispe, Cusco</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg shadow-md">
              <div className="text-amber-600 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4">"Ukhu Pacha es perfecta. El toque de ají amarillo le da un carácter único."</p>
              <p className="font-semibold text-amber-900">- Ana Torres, Trujillo</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">¿Listo para probar el sabor del Perú?</h2>
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
              <h3 className="text-xl font-bold mb-4">Pumawari</h3>
              <p className="text-amber-200">Cerveza artesanal peruana inspirada en los tres mundos</p>
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
              <h4 className="font-bold mb-4">Nuestras Líneas</h4>
              <ul className="space-y-2">
                <li><Link href="/productos#hanan-pacha" className="text-amber-200 hover:text-white transition">Hanan Pacha - Selva</Link></li>
                <li><Link href="/productos#kay-pacha" className="text-amber-200 hover:text-white transition">Kay Pacha - Sierra</Link></li>
                <li><Link href="/productos#ukhu-pacha" className="text-amber-200 hover:text-white transition">Ukhu Pacha - Costa</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <p className="text-amber-200 mb-2">Email: info@pumawari.pe</p>
              <p className="text-amber-200 mb-2">Tel: +51 1 234 5678</p>
              <p className="text-amber-200">Lima, Perú</p>
            </div>
          </div>
          <div className="border-t border-amber-800 pt-8 text-center text-amber-200">
            <p>© 2024 Pumawari - Cerveza artesanal peruana - Todos los derechos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
