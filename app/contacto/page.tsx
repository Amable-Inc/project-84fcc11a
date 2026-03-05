import Link from 'next/link';

export default function Contacto() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="bg-amber-900 text-white p-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold hover:text-amber-200 transition">🍺 CervezaRia</Link>
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
          <p className="text-xl">Estamos aquí para ayudarte. ¡Hablemos!</p>
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
                  placeholder="+34 123 456 789"
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
                  <option>Suscripciones</option>
                  <option>Visitas a la fábrica</option>
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
                    <p className="text-gray-700">Calle de la Cerveza, 123<br/>28001 Madrid, España</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-3xl mr-4">📞</div>
                  <div>
                    <h3 className="font-bold text-amber-900 text-lg mb-1">Teléfono</h3>
                    <p className="text-gray-700">+34 123 456 789</p>
                    <p className="text-gray-700">Lun-Vie: 9:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-3xl mr-4">✉️</div>
                  <div>
                    <h3 className="font-bold text-amber-900 text-lg mb-1">Email</h3>
                    <p className="text-gray-700">info@cervezaria.com</p>
                    <p className="text-gray-700">ventas@cervezaria.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-3xl mr-4">⏰</div>
                  <div>
                    <h3 className="font-bold text-amber-900 text-lg mb-1">Horario de Atención</h3>
                    <p className="text-gray-700">Lunes - Viernes: 9:00 - 18:00</p>
                    <p className="text-gray-700">Sábados: 10:00 - 14:00</p>
                    <p className="text-gray-700">Domingos: Cerrado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="bg-amber-900 text-white p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Síguenos</h3>
              <div className="flex gap-4">
                <a href="#" className="bg-amber-700 hover:bg-amber-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl transition">
                  📘
                </a>
                <a href="#" className="bg-amber-700 hover:bg-amber-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl transition">
                  📷
                </a>
                <a href="#" className="bg-amber-700 hover:bg-amber-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl transition">
                  🐦
                </a>
                <a href="#" className="bg-amber-700 hover:bg-amber-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl transition">
                  💼
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="container mx-auto px-4 pb-16">
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">Visítanos</h2>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-600">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-xl">Mapa de ubicación</p>
              <p className="text-sm mt-2">Calle de la Cerveza, 123, Madrid</p>
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
              <h3 className="font-bold text-amber-900 text-lg mb-2">¿Cuál es el pedido mínimo?</h3>
              <p className="text-gray-700">No hay pedido mínimo. Puedes comprar desde una sola botella.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-amber-900 text-lg mb-2">¿Hacen envíos a toda España?</h3>
              <p className="text-gray-700">Sí, realizamos envíos a toda España peninsular en 24-48 horas.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-amber-900 text-lg mb-2">¿Puedo visitar la fábrica?</h3>
              <p className="text-gray-700">¡Por supuesto! Ofrecemos tours guiados los sábados. Contacta para reservar.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-amber-900 text-lg mb-2">¿Ofrecen descuentos por volumen?</h3>
              <p className="text-gray-700">Sí, tenemos descuentos especiales para pedidos grandes. Contáctanos para más información.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-amber-900 mb-4">¿Quieres ver nuestros productos?</h2>
        <p className="text-xl text-gray-700 mb-8">Explora nuestro catálogo completo</p>
        <Link href="/productos" className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition">
          Ver Productos
        </Link>
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
