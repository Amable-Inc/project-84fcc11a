import Link from 'next/link';

export default function SobreNosotros() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="bg-amber-900 text-white p-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold hover:text-amber-200 transition">🍺 Pumawari</Link>
          <div className="flex gap-6">
            <Link href="/productos" className="hover:text-amber-200 transition">Productos</Link>
            <Link href="/sobre-nosotros" className="hover:text-amber-200 transition font-semibold">Sobre Nosotros</Link>
            <Link href="/contacto" className="hover:text-amber-200 transition">Contacto</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <img 
          src="https://images.unsplash.com/photo-1559052707-f11dd0721f74?w=1600&h=900&fit=crop" 
          alt="Cervecería Pumawari"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl font-bold mb-4">Nuestra Historia</h1>
          <p className="text-2xl">Conectando la tradición andina con la cerveza artesanal</p>
        </div>
      </section>

      {/* Historia */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-amber-900 mb-6">¿Quiénes Somos?</h2>
          <div className="text-lg text-gray-700 space-y-4">
            <p>
              <strong>Pumawari</strong> nació en 2018 del sueño de tres amigos cusqueños apasionados por 
              rescatar los ingredientes ancestrales del Perú y llevarlos a la cerveza artesanal. 
              El nombre "Pumawari" combina "Puma" (fuerza y sabiduría en quechua) con "Wari" 
              (civilización ancestral peruana), representando nuestra conexión con las raíces andinas.
            </p>
            <p>
              Inspirados en la cosmovisión andina que divide el universo en tres mundos (Hanan Pacha, 
              Kay Pacha y Ukhu Pacha), creamos tres líneas de cerveza que representan la riqueza de 
              cada región del Perú: la selva amazónica, la sierra andina y la costa del Pacífico.
            </p>
            <p>
              Trabajamos directamente con agricultores y comunidades locales de todo el Perú para 
              obtener ingredientes únicos como cacao amazónico, quinua roja, maíz morado, ají amarillo 
              y hierbas ancestrales. Cada botella cuenta la historia de nuestra tierra y su biodiversidad.
            </p>
            <p>
              Hoy, desde nuestra cervecería en Lima, distribuimos nuestras cervezas por todo el Perú 
              y empezamos a compartir los sabores peruanos con el mundo.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">Nuestros Valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-6xl mb-4">🇵🇪</div>
              <h3 className="text-2xl font-bold text-amber-900 mb-3">Peruanidad</h3>
              <p className="text-gray-700">
                Celebramos la riqueza de nuestro país usando ingredientes 100% peruanos 
                en cada una de nuestras cervezas.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-6xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-amber-900 mb-3">Comercio Justo</h3>
              <p className="text-gray-700">
                Trabajamos directamente con comunidades locales, garantizando precios 
                justos y relaciones de largo plazo.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-6xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-amber-900 mb-3">Sostenibilidad</h3>
              <p className="text-gray-700">
                Cuidamos el medio ambiente con procesos responsables y empaques 
                reciclables y biodegradables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Las Tres Líneas */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">Las Tres Líneas: Los Tres Mundos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-green-50 p-8 rounded-lg border-t-4 border-green-600">
            <h3 className="text-3xl font-bold text-green-800 mb-4">Hanan Pacha</h3>
            <p className="text-lg text-gray-700 mb-4">
              <strong>El Mundo de Arriba - La Selva</strong>
            </p>
            <p className="text-gray-600 mb-4">
              Representa el mundo celestial y la exuberante selva amazónica. 
              Nuestras cervezas de esta línea incorporan:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Cacao amazónico de Satipo</li>
              <li>Aguaje y frutas tropicales</li>
              <li>Sacha inchi tostado</li>
              <li>Hierbas y especias de la Amazonía</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-8 rounded-lg border-t-4 border-orange-600">
            <h3 className="text-3xl font-bold text-orange-800 mb-4">Kay Pacha</h3>
            <p className="text-lg text-gray-700 mb-4">
              <strong>El Mundo del Medio - La Sierra</strong>
            </p>
            <p className="text-gray-600 mb-4">
              Representa el mundo terrenal y los majestuosos Andes. 
              Nuestras cervezas de esta línea incorporan:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Quinua roja y blanca</li>
              <li>Maíz morado cusqueño</li>
              <li>Muña y hierbas de altura</li>
              <li>Kiwicha y granos ancestrales</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg border-t-4 border-blue-600">
            <h3 className="text-3xl font-bold text-blue-800 mb-4">Ukhu Pacha</h3>
            <p className="text-lg text-gray-700 mb-4">
              <strong>El Mundo de Abajo - La Costa</strong>
            </p>
            <p className="text-gray-600 mb-4">
              Representa el mundo interno y el océano Pacífico. 
              Nuestras cervezas de esta línea incorporan:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Ají amarillo</li>
              <li>Maíz blanco de la costa</li>
              <li>Cilantro y hierbas costeñas</li>
              <li>Cítricos del norte peruano</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Proceso de Elaboración */}
      <section id="proceso" className="bg-amber-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">Nuestro Proceso Artesanal</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1570737231711-4ea0ca91c9f7?w=800&h=600&fit=crop" 
                alt="Proceso de elaboración"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-amber-900 mb-2">1. Selección de Ingredientes</h3>
                <p className="text-gray-700">
                  Viajamos por todo el Perú seleccionando ingredientes directamente de productores locales.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-amber-900 mb-2">2. Maceración Tradicional</h3>
                <p className="text-gray-700">
                  Combinamos técnicas cerveceras modernas con métodos ancestrales de preparación.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-amber-900 mb-2">3. Fermentación Controlada</h3>
                <p className="text-gray-700">
                  Cada línea tiene su propio perfil de fermentación para resaltar los ingredientes únicos.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-amber-900 mb-2">4. Maduración y Embotellado</h3>
                <p className="text-gray-700">
                  Maduración cuidadosa seguida de embotellado artesanal y control de calidad riguroso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredientes de Calidad */}
      <section id="calidad" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">Ingredientes Peruanos Premium</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition">
            <div className="text-5xl mb-3">🌾</div>
            <h3 className="text-xl font-bold text-amber-900 mb-2">Granos Ancestrales</h3>
            <p className="text-gray-600">Quinua, kiwicha y maíces especiales</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition">
            <div className="text-5xl mb-3">🍫</div>
            <h3 className="text-xl font-bold text-amber-900 mb-2">Cacao Amazónico</h3>
            <p className="text-gray-600">De Satipo y San Martín</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition">
            <div className="text-5xl mb-3">🌶️</div>
            <h3 className="text-xl font-bold text-amber-900 mb-2">Ajíes Peruanos</h3>
            <p className="text-gray-600">Ají amarillo y rocoto</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition">
            <div className="text-5xl mb-3">🌿</div>
            <h3 className="text-xl font-bold text-amber-900 mb-2">Hierbas Nativas</h3>
            <p className="text-gray-600">Muña, coca y más</p>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">Nuestro Equipo</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" 
                alt="Maestro cervecero"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h3 className="text-2xl font-bold text-amber-900 mb-1">Carlos Quispe</h3>
              <p className="text-amber-700 font-semibold mb-2">Maestro Cervecero</p>
              <p className="text-gray-600">Cusqueño apasionado por rescatar sabores ancestrales</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop" 
                alt="Directora de calidad"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h3 className="text-2xl font-bold text-amber-900 mb-1">María Flores</h3>
              <p className="text-amber-700 font-semibold mb-2">Directora de Calidad</p>
              <p className="text-gray-600">Especialista en ingredientes amazónicos</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop" 
                alt="Gerente de producción"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h3 className="text-2xl font-bold text-amber-900 mb-1">Miguel Vargas</h3>
              <p className="text-amber-700 font-semibold mb-2">Gerente de Producción</p>
              <p className="text-gray-600">Ingeniero con pasión por la cerveza artesanal</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-900 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">¿Quieres conocer más?</h2>
          <p className="text-xl mb-8">Visita nuestra cervecería o prueba nuestras tres líneas</p>
          <div className="flex gap-4 justify-center">
            <Link href="/contacto" className="inline-block bg-white text-amber-900 hover:bg-amber-100 px-8 py-4 rounded-lg text-xl font-semibold transition">
              Contactar
            </Link>
            <Link href="/productos" className="inline-block bg-amber-700 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-xl font-semibold transition">
              Ver Productos
            </Link>
          </div>
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
