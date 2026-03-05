import Link from 'next/link';

export default function Contacto() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="bg-amber-900 text-white p-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold hover:text-amber-200 transition">🍺 Pumawari</Link>
          <div className="flex gap-6">
            <Link href="/productos" className="hover:text-amber-200 transition">Productos</Link>
            <Link href="/sobre-nosotros" className="hover:text-amber-200 transition">Sobre Nosotros</Link>
            <Link href="/contacto" className="hover:text-amber-200 transition font-semibold">Contacto</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-r from-amber-700 to-amber-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contacto</h1>
          <p className="text-xl">Estamos aquí para ayudarte. ¡Conversemos!</p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulario */}
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">Envíanos un Mensaje</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-gray-700 font-semibold mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-gray-700 font-semibold mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                  placeholder="+51 999 999 999"
                />
              </div>

              <div>
                <label htmlFor="asunto" className="block text-gray-700 font-semibold mb-2">
                  Asunto
                </label>
                <select
                  id="asunto"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                >
                  <option>Consulta sobre productos</option>
                  <option>Pedidos y envíos</option>
                  <option>Club Pumawari</option>
                  <option>Visitas a la cervecería</option>
                  <option>Distribución mayorista</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-gray-700 font-semibold mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-lg transition text-lg"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Información de Contacto */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-xl mb-8">
              <h2 className="text-3xl font-bold text-amber-900 mb-6">Información de Contacto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">📍</div>
                  <div>
                    <h3 className="font-bold text-amber-900 text-lg mb-1">Dirección</h3>
                    <p className="text-gray-700">Av. Los Andes 456<br/>Miraflores, Lima 15074<br/>Perú</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-3xl mr-4">📞</div>
                  <div>
                    <h3 className="font-bold text-amber-900 text-lg mb-1">Teléfono</h3>
                    <p className="text-gray-700">+51 1 234 5678</p>
                    <p className="text-gray-700">WhatsApp: +51 999 888 777</p>
                    <p className="text-gray-700 text-sm mt-1">Lun-Vie: 9:00 - 18:00 | Sáb: 10:00 - 14:00</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-3xl mr-4">✉️</div>
                  <div>
                    <h3 className="font-bold text-amber-900 text-lg mb-1">Email</h3>
                    <p className="text-gray-700">info@pumawari.pe</p>
                    <p className="text-gray-700">ventas@pumawari.pe</p>
                    <p className="text-gray-700">distribuidores@pumawari.pe</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-3xl mr-4">⏰</div>
                  <div>
                    <h3 className="font-bold text-amber-900 text-lg mb-1">Horario de Atención</h3>
                    <p className="text-gray-700">Lunes - Viernes: 9:00 - 18:00</p>
                    <p className="text-gray-700">Sábados: 10:00 - 14:00</p>
                    <p className="text-gray-700">Domingos y feriados: Cerrado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="bg-amber-900 text-white p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Síguenos en Redes</h3>
              <p className="text-amber-100 mb-4">Únete a la comunidad Pumawari</p>
              <div className="grid grid-cols-4 gap-3">
                <a href="#" className="bg-amber-700 hover:bg-amber-600 h-14 rounded-lg flex items-center justify-center text-2xl transition">
                  📘
                </a>
                <a href="#" className="bg-amber-700 hover:bg-amber-600 h-14 rounded-lg flex items-center justify-center text-2xl transition">
                  📷
                </a>
                <a href="#" className="bg-amber-700 hover:bg-amber-600 h-14 rounded-lg flex items-center justify-center text-2xl transition">
                  🎵
                </a>
                <a href="#" className="bg-amber-700 hover:bg-amber-600 h-14 rounded-lg flex items-center justify-center text-2xl transition">
                  💬
                </a>
              </div>
              <p className="text-amber-200 text-sm mt-4">@pumawari.cerveza</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="container mx-auto px-4 pb-16">
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">Visítanos en Lima</h2>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-600">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-xl">Mapa de ubicación</p>
              <p className="text-sm mt-2">Av. Los Andes 456, Miraflores, Lima</p>
              <p className="text-sm text-gray-500">Estamos cerca al Parque Kennedy</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Rápido */}
      <section className="bg-amber-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">Preguntas Frecuentes</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-amber-900 text-lg mb-2">¿Hacen envíos a todo el Perú?</h3>
              <p className="text-gray-700">Sí, enviamos a todas las regiones del Perú. Delivery en Lima en 24 horas.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-amber-900 text-lg mb-2">¿Cuál es el pedido mínimo?</h3>
              <p className="text-gray-700">No hay pedido mínimo. Puedes comprar desde una sola botella.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-amber-900 text-lg mb-2">¿Puedo visitar la cervecería?</h3>
              <p className="text-gray-700">¡Claro! Ofrecemos tours guiados los sábados. Incluye degustación de las tres líneas.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-amber-900 text-lg mb-2">¿Qué es el Club Pumawari?</h3>
              <p className="text-gray-700">Suscripción mensual con 12 cervezas variadas y 20% de descuento permanente.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-amber-900 text-lg mb-2">¿Tienen distribuidores en provincias?</h3>
              <p className="text-gray-700">Sí, tenemos distribuidores en Cusco, Arequipa y Trujillo. Contáctanos para más info.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-amber-900 text-lg mb-2">¿Los ingredientes son realmente peruanos?</h3>
              <p className="text-gray-700">100% peruanos. Trabajamos con comunidades de la selva, sierra y costa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-amber-900 mb-4">¿Quieres conocer nuestros productos?</h2>
        <p className="text-xl text-gray-700 mb-8">Explora las tres líneas de Pumawari</p>
        <Link href="/productos" className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition">
          Ver Productos
        </Link>
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
