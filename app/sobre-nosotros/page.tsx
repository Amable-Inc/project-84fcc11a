import Link from 'next/link';

export default function SobreNosotros() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="bg-amber-900 text-white p-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold hover:text-amber-200 transition">🍺 CervezaRia</Link>
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
          alt="Fábrica de cerveza"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl font-bold mb-4">Nuestra Historia</h1>
          <p className="text-2xl">Pasión por la cerveza artesanal desde 2010</p>
        </div>
      </section>

      {/* Historia */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-amber-900 mb-6">¿Quiénes Somos?</h2>
          <div className="text-lg text-gray-700 space-y-4">
            <p>
              CervezaRia nació en 2010 de la pasión de tres amigos cerveceros que soñaban con crear 
              cervezas artesanales de calidad excepcional. Lo que comenzó como un pequeño proyecto 
              en un garaje, hoy es una de las cervecerías artesanales más reconocidas de España.
            </p>
            <p>
              Nuestro compromiso es simple: utilizar solo los mejores ingredientes naturales, seguir 
              procesos tradicionales de elaboración y nunca comprometer la calidad por la cantidad. 
              Cada botella que producimos es el resultado de años de experiencia y dedicación.
            </p>
            <p>
              Nos enorgullece ser parte del movimiento de cerveza artesanal en España y contribuir 
              a la rica tradición cervecera con nuestras recetas únicas e innovadoras.
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
              <div className="text-6xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold text-amber-900 mb-3">Calidad</h3>
              <p className="text-gray-700">
                Nunca comprometemos la calidad. Cada lote es cuidadosamente elaborado 
                con los mejores ingredientes disponibles.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-6xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-amber-900 mb-3">Comunidad</h3>
              <p className="text-gray-700">
                Valoramos nuestra comunidad de amantes de la cerveza y trabajamos 
                con proveedores locales siempre que sea posible.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-6xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold text-amber-900 mb-3">Innovación</h3>
              <p className="text-gray-700">
                Respetamos la tradición pero no tenemos miedo de experimentar con 
                nuevos sabores y técnicas de elaboración.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de Elaboración */}
      <section id="proceso" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">Nuestro Proceso</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
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
                Seleccionamos cuidadosamente malta, lúpulo, levadura y agua de la más alta calidad.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-amber-900 mb-2">2. Maceración</h3>
              <p className="text-gray-700">
                El proceso de maceración extrae los azúcares de la malta, creando el mosto.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-amber-900 mb-2">3. Fermentación</h3>
              <p className="text-gray-700">
                La levadura transforma los azúcares en alcohol durante un período controlado.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-amber-900 mb-2">4. Maduración</h3>
              <p className="text-gray-700">
                La cerveza madura para desarrollar su sabor completo y equilibrado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredientes de Calidad */}
      <section id="calidad" className="bg-amber-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">Ingredientes de Calidad Premium</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-3">🌾</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Malta Premium</h3>
              <p className="text-gray-600">Importada de las mejores malteras europeas</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-3">🌿</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Lúpulo Selecto</h3>
              <p className="text-gray-600">Variedades únicas de todo el mundo</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-3">💧</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Agua Pura</h3>
              <p className="text-gray-600">Filtrada y tratada para perfección</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-3">🧬</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Levadura Única</h3>
              <p className="text-gray-600">Cepas exclusivas cultivadas en casa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">Nuestro Equipo</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" 
              alt="Maestro cervecero"
              className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg"
            />
            <h3 className="text-2xl font-bold text-amber-900 mb-1">Carlos Moreno</h3>
            <p className="text-amber-700 font-semibold mb-2">Maestro Cervecero</p>
            <p className="text-gray-600">15 años de experiencia en cerveza artesanal</p>
          </div>
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop" 
              alt="Directora de calidad"
              className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg"
            />
            <h3 className="text-2xl font-bold text-amber-900 mb-1">Laura Sánchez</h3>
            <p className="text-amber-700 font-semibold mb-2">Directora de Calidad</p>
            <p className="text-gray-600">Experta en control de calidad y procesos</p>
          </div>
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop" 
              alt="Gerente de producción"
              className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg"
            />
            <h3 className="text-2xl font-bold text-amber-900 mb-1">Miguel Torres</h3>
            <p className="text-amber-700 font-semibold mb-2">Gerente de Producción</p>
            <p className="text-gray-600">Especialista en optimización de procesos</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-900 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">¿Quieres saber más?</h2>
          <p className="text-xl mb-8">Visita nuestra fábrica o contáctanos</p>
          <Link href="/contacto" className="inline-block bg-white text-amber-900 hover:bg-amber-100 px-8 py-4 rounded-lg text-xl font-semibold transition">
            Contactar
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
