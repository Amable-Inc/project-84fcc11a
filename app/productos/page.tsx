import Link from 'next/link';

export default function Productos() {
  const productos = [
    {
      id: 'golden-ale',
      nombre: 'Golden Ale',
      precio: 4.99,
      descripcion: 'Cerveza rubia suave con notas cítricas y refrescantes',
      imagen: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&h=500&fit=crop',
      alcohol: '5.2%',
      amargor: 'Bajo'
    },
    {
      id: 'dark-stout',
      nombre: 'Dark Stout',
      precio: 5.99,
      descripcion: 'Cerveza negra intensa con sabor a café y chocolate',
      imagen: 'https://images.unsplash.com/photo-1618885472179-5e474019f2a9?w=400&h=500&fit=crop',
      alcohol: '6.5%',
      amargor: 'Medio'
    },
    {
      id: 'hoppy-ipa',
      nombre: 'Hoppy IPA',
      precio: 6.49,
      descripcion: 'IPA con intenso aroma a lúpulo y amargor equilibrado',
      imagen: 'https://images.unsplash.com/photo-1600788907416-456578634209?w=400&h=500&fit=crop',
      alcohol: '6.8%',
      amargor: 'Alto'
    },
    {
      id: 'wheat-beer',
      nombre: 'Wheat Beer',
      precio: 5.49,
      descripcion: 'Cerveza de trigo con toques frutales y especiados',
      imagen: 'https://images.unsplash.com/photo-1608534925754-9c5e2d6ea59d?w=400&h=500&fit=crop',
      alcohol: '5.0%',
      amargor: 'Bajo'
    },
    {
      id: 'red-ale',
      nombre: 'Red Ale',
      precio: 5.29,
      descripcion: 'Ale rojiza con cuerpo medio y notas caramelizadas',
      imagen: 'https://images.unsplash.com/photo-1612528443702-f6741f70a049?w=400&h=500&fit=crop',
      alcohol: '5.8%',
      amargor: 'Medio'
    },
    {
      id: 'belgian-tripel',
      nombre: 'Belgian Tripel',
      precio: 7.99,
      descripcion: 'Triple belga compleja con notas especiadas',
      imagen: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=500&fit=crop',
      alcohol: '8.5%',
      amargor: 'Medio'
    }
  ];

  const packs = [
    {
      id: 'pack-degustacion',
      nombre: 'Pack Degustación',
      precio: 25.00,
      descripcion: '6 cervezas variadas para descubrir nuestros sabores',
      imagen: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&h=400&fit=crop'
    },
    {
      id: 'pack-ipa',
      nombre: 'Pack IPA Lover',
      precio: 35.00,
      descripcion: '12 cervezas IPA de diferentes estilos',
      imagen: 'https://images.unsplash.com/photo-1532634993-15f421e42ec0?w=800&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="bg-amber-900 text-white p-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold hover:text-amber-200 transition">🍺 CervezaRia</Link>
          <div className="flex gap-6">
            <Link href="/productos" className="hover:text-amber-200 transition font-semibold">Productos</Link>
            <Link href="/sobre-nosotros" className="hover:text-amber-200 transition">Sobre Nosotros</Link>
            <Link href="/contacto" className="hover:text-amber-200 transition">Contacto</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-r from-amber-700 to-amber-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Nuestros Productos</h1>
          <p className="text-xl">Descubre nuestra selección de cervezas artesanales premium</p>
        </div>
      </section>

      {/* Filtros */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex gap-4 flex-wrap justify-center">
          <button className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition">Todas</button>
          <button className="px-6 py-2 bg-amber-100 text-amber-900 rounded-lg hover:bg-amber-200 transition">Rubias</button>
          <button className="px-6 py-2 bg-amber-100 text-amber-900 rounded-lg hover:bg-amber-200 transition">Negras</button>
          <button className="px-6 py-2 bg-amber-100 text-amber-900 rounded-lg hover:bg-amber-200 transition">IPAs</button>
          <button className="px-6 py-2 bg-amber-100 text-amber-900 rounded-lg hover:bg-amber-200 transition">Especiales</button>
        </div>
      </section>

      {/* Catálogo de Productos */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-amber-900 mb-8">Cervezas Individuales</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productos.map((producto) => (
            <div key={producto.id} id={producto.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
              <img 
                src={producto.imagen} 
                alt={producto.nombre}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-amber-900 mb-2">{producto.nombre}</h3>
                <p className="text-gray-600 mb-3">{producto.descripcion}</p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>Alcohol: {producto.alcohol}</span>
                  <span>Amargor: {producto.amargor}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-amber-700">${producto.precio}</span>
                  <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg transition">
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Packs */}
      <section id="packs" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-amber-900 mb-8">Packs Especiales</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {packs.map((pack) => (
            <div key={pack.id} className="relative bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1">
              <img 
                src={pack.imagen} 
                alt={pack.nombre}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-3xl font-bold text-amber-900 mb-3">{pack.nombre}</h3>
                <p className="text-gray-600 mb-6 text-lg">{pack.descripcion}</p>
                <div className="flex justify-between items-center">
                  <span className="text-4xl font-bold text-amber-700">${pack.precio}</span>
                  <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition">
                    Comprar Pack
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Suscripción */}
      <section id="suscripcion" className="bg-gradient-to-r from-orange-600 to-amber-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Suscripción Mensual</h2>
          <p className="text-xl mb-8">Recibe 12 cervezas seleccionadas cada mes con 20% de descuento</p>
          <div className="bg-white text-amber-900 inline-block rounded-lg p-8 shadow-2xl">
            <p className="text-5xl font-bold mb-2">$45/mes</p>
            <p className="text-gray-600 mb-6">En lugar de $60</p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition">
              Suscribirse Ahora
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-amber-900 mb-4">¿Necesitas ayuda para elegir?</h2>
        <p className="text-xl text-gray-700 mb-8">Nuestro equipo está aquí para ayudarte</p>
        <Link href="/contacto" className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition">
          Contactar
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
