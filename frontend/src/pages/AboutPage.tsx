import { Link } from "react-router";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navbar */}
      <nav className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h2 className="font-bold text-xl tracking-tight text-indigo-600">STORE.CO</h2>
          <div className="flex gap-8 text-sm font-medium text-slate-600">
            <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
            <Link to="/about" className="text-indigo-600 border-b-2 border-indigo-600 transition">About</Link>
            <Link to="/products" className="hover:text-indigo-600 transition">Products</Link>
            <Link to="/contact" className="hover:text-indigo-600 transition">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-20">
        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            Tentang Kami
          </h1>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="absolute -inset-4 bg-indigo-100 rounded-2xl rotate-3 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=60" 
              alt="Our Team" 
              className="rounded-2xl shadow-lg w-full h-80 object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Kualitas Tidak Harus Rumit.
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Di <span className="font-semibold text-indigo-600">STORE.CO</span>, kami percaya bahwa setiap produk memiliki cerita. Kami hadir untuk menghadirkan koleksi yang menggabungkan kenyamanan maksimal dengan desain yang tak lekang oleh waktu.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Setiap detail produk kami dipikirkan secara mendalam, mulai dari pemilihan bahan premium hingga proses produksi yang teliti, demi memastikan kamu mendapatkan yang terbaik untuk aktivitas sehari-harimu.
            </p>
          </div>
        </div>

        {/* Vision/Values Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center">
            <div className="text-3xl mb-4">🏆</div>
            <h3 className="font-bold text-lg mb-2">Kualitas Premium</h3>
            <p className="text-sm text-slate-500">Hanya menggunakan bahan terbaik untuk daya tahan lama.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center">
            <div className="text-3xl mb-4">🎨</div>
            <h3 className="font-bold text-lg mb-2">Desain Modern</h3>
            <p className="text-sm text-slate-500">Estetika minimalis yang cocok untuk gaya hidup masa kini.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center">
            <div className="text-3xl mb-4">🌱</div>
            <h3 className="font-bold text-lg mb-2">Ramah Lingkungan</h3>
            <p className="text-sm text-slate-500">Berkomitmen pada proses produksi yang berkelanjutan.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;