import Link from 'next/link';

export default function Productos() {
  const hananPacha = [
    {
      id: 'cacao-imperial',
      nombre: 'Cacao Imperial',
      precio: 18.90,
      descripcion: 'Stout con cacao amazónico de Satipo y notas de café salvaje',
      imagen: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&h=500&fit=crop',
      alcohol: '6.5%',
      amargor: 'Medio',
      ingredientes: 'Cacao amazónico, café salvaje'
    },
    {
      id: 'aguaje-ale',
      nombre: 'Aguaje Ale',
      precio: 17.90,
      descripcion: 'Ale rubia con aguaje y frutas amazónicas',
      imagen: 'https://images.unsplash.com/photo-1608534925754-9c5e2d6ea59d?w=400&h=500&fit=crop',
      alcohol: '5.2%',
      amargor: 'Bajo',
      ingredientes: 'Aguaje, frutas tropicales'
    },
    {
      id: 'sacha-inchi',
      nombre: 'Sacha Inchi Porter',
      precio: 19.90,
      descripcion: 'Porter oscura con toques de sacha inchi tostado',
      imagen: 'https://images.unsplash.com/photo-1618885472179-5e474019f2a9?w=400&h=500&fit=crop',
      alcohol: '6.0%',
      amargor: 'Medio',
      ingredientes: 'Sacha inchi, hierbas amazónicas'
    }
  ];

  const kayPacha = [
    {
      id: 'chicha-dorada',
      nombre: 'Chicha Dorada',
      precio: 16.90,
      descripcion: 'Ale con maíz morado cusqueño y especias andinas',
      imagen: 'https://images.unsplash.com/photo-1612528443702-f6741f70a049?w=400&h=500&fit=crop',
      alcohol: '5.5%',
      amargor: 'Bajo',
      ingredientes: 'Maíz morado, canela, clavo'
    },
    {
      id: 'quinua-real',
      nombre: 'Quinua Real',
      precio: 17.90,
      descripcion: 'Cerveza de quinua con granos andinos ancestrales',
      imagen: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=500&fit=crop',
      alcohol: '5.8%',
      amargor: 'Medio',
      ingredientes: 'Quinua roja, kiwicha'
    },
    {
      id: 'inca-amber',
      nombre: 'Inca Amber',
      precio: 18.90,
      descripcion: 'Amber ale con muña y hierbas de las alturas',
      imagen: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=500&fit=crop',
      alcohol: '6.2%',
      amargor: 'Medio',
      ingredientes: 'Muña, hierbas andinas'
    }
  ];

  const ukhuPacha = [
    {
      id: 'pacifico-ipa',
      nombre: 'Pacífico IPA',
      precio: 19.90,
      descripcion: 'IPA con ají amarillo y cilantro costeño',
      imagen: 'https://images.unsplash.com/photo-1600788907416-456578634209?w=400&h=500&fit=crop',
      alcohol: '6.8%',
      amargor: 'Alto',
      ingredientes: 'Ají amarillo, cilantro'
    },
    {
      id: 'limeña-lager',
      nombre: 'Limeña Lager',
      precio: 15.90,
      descripcion: 'Lager refrescante con maíz blanco de la costa',
      imagen: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&h=500&fit=crop',
      alcohol: '4.8%',
      amargor: 'Bajo',
      ingredientes: 'Maíz blanco, limón sutil'
    },
    {
      id: 'chalaco-wheat',
      nombre: 'Chalaco Wheat',
      precio: 16.90,
      descripcion: 'Cerveza de trigo con notas cítricas del norte',
      imagen: 'https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?w=400&h=500&fit=crop',
      alcohol: '5.0%',
      amargor: 'Bajo',
      ingredientes: 'Trigo, cítricos norteños'
    }
  ];

  const packs = [
    {
      id: 'pack-tres-mundos',
      nombre: 'Pack Tres Mundos',
      precio: 140.00,
      descripcion: '3 cervezas de cada línea (Hanan, Kay y Ukhu Pacha)',
      imagen: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&h=400&fit=crop'
    },
    {
      id: 'pack-selva',
      nombre: 'Pack Hanan Pacha Completo',
      precio: 95.00,
      descripcion: '6 cervezas de la línea selva amazónica',
      imagen: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="bg-amber-900 text-white p-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold hover:text-amber-200 transition">🍺 Pumawari</Link>
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
          <p className="text-xl">Tres líneas inspiradas en la cosmovisión andina</p>
        </div>
      </section>

      {/* Línea Hanan Pacha */}
      <section id="hanan-pacha" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-2">Hanan Pacha</h2>
          <p className="text-xl text-gray-700">El Mundo de Arriba - Ingredientes de la Selva Amazónica</p>
          <p className="text-gray-600 mt-2">Cacao, aguaje, sacha inchi y hierbas de la Amazonía peruana</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {hananPacha.map((producto) => (
            <div key={producto.id} id={producto.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 border-t-4 border-green-600">
              <img 
                src={producto.imagen} 
                alt={producto.nombre}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-green-600 font-bold">HANAN PACHA</span>
                <h3 className="text-2xl font-bold text-amber-900 mb-2">{producto.nombre}</h3>
                <p className="text-gray-600 mb-2">{producto.descripcion}</p>
                <p className="text-sm text-green-700 mb-3 italic">{producto.ingredientes}</p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>Alcohol: {producto.alcohol}</span>
                  <span>Amargor: {producto.amargor}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-amber-700">S/ {producto.precio}</span>
                  <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg transition">
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t-4 border-amber-200"></div>

      {/* Línea Kay Pacha */}
      <section id="kay-pacha" className="container mx-auto px-4 py-16 bg-orange-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-orange-800 mb-2">Kay Pacha</h2>
          <p className="text-xl text-gray-700">El Mundo del Medio - Ingredientes de la Sierra Andina</p>
          <p className="text-gray-600 mt-2">Quinua, maíz morado, muña y granos ancestrales de los Andes</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {kayPacha.map((producto) => (
            <div key={producto.id} id={producto.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 border-t-4 border-orange-600">
              <img 
                src={producto.imagen} 
                alt={producto.nombre}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-orange-600 font-bold">KAY PACHA</span>
                <h3 className="text-2xl font-bold text-amber-900 mb-2">{producto.nombre}</h3>
                <p className="text-gray-600 mb-2">{producto.descripcion}</p>
                <p className="text-sm text-orange-700 mb-3 italic">{producto.ingredientes}</p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>Alcohol: {producto.alcohol}</span>
                  <span>Amargor: {producto.amargor}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-amber-700">S/ {producto.precio}</span>
                  <button className="bg-orange-700 hover:bg-orange-800 text-white px-6 py-2 rounded-lg transition">
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t-4 border-amber-200"></div>

      {/* Línea Ukhu Pacha */}
      <section id="ukhu-pacha" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800 mb-2">Ukhu Pacha</h2>
          <p className="text-xl text-gray-700">El Mundo de Abajo - Ingredientes de la Costa Peruana</p>
          <p className="text-gray-600 mt-2">Ají amarillo, maíz blanco, cilantro y cítricos costeños</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {ukhuPacha.map((producto) => (
            <div key={producto.id} id={producto.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 border-t-4 border-blue-600">
              <img 
                src={producto.imagen} 
                alt={producto.nombre}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-blue-600 font-bold">UKHU PACHA</span>
                <h3 className="text-2xl font-bold text-amber-900 mb-2">{producto.nombre}</h3>
                <p className="text-gray-600 mb-2">{producto.descripcion}</p>
                <p className="text-sm text-blue-700 mb-3 italic">{producto.ingredientes}</p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>Alcohol: {producto.alcohol}</span>
                  <span>Amargor: {producto.amargor}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-amber-700">S/ {producto.precio}</span>
                  <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition">
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Packs */}
      <section id="packs" className="container mx-auto px-4 py-16 bg-amber-100">
        <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Packs Especiales</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                  <span className="text-4xl font-bold text-amber-700">S/ {pack.precio}</span>
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
          <h2 className="text-4xl font-bold mb-4">Club Pumawari</h2>
          <p className="text-xl mb-8">Recibe 12 cervezas seleccionadas cada mes de nuestras tres líneas con 20% de descuento</p>
          <div className="bg-white text-amber-900 inline-block rounded-lg p-8 shadow-2xl">
            <p className="text-5xl font-bold mb-2">S/ 160/mes</p>
            <p className="text-gray-600 mb-6">En lugar de S/ 200</p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition">
              Unirse al Club
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
