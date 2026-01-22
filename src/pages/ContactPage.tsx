import { Link } from "react-router";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logika pengiriman pesan bisa diletakkan di sini
    alert(`Terima kasih ${formData.name}, pesan Anda telah terkirim!`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navbar */}
      <nav className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h2 className="font-bold text-xl tracking-tight text-indigo-600">STORE.CO</h2>
          <div className="flex gap-8 text-sm font-medium text-slate-600">
            <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
            <Link to="/about" className="hover:text-indigo-600 transition">About</Link>
            <Link to="/products" className="hover:text-indigo-600 transition">Products</Link>
            <Link to="/contact" className="text-indigo-600 border-b-2 border-indigo-600 transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Hubungi Kami</h1>
          <p className="text-slate-500 mt-3 text-lg">
            Punya pertanyaan atau ingin bekerja sama? Kirimkan pesan kepada kami.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-5">
            
            {/* Informasi Kontak (Sidebar) */}
            <div className="md:col-span-2 bg-indigo-600 p-10 text-white">
              <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
              <div className="space-y-6 text-indigo-100">
                <p className="flex items-center gap-4">
                  <span className="bg-indigo-500 p-2 rounded-lg">📍</span> 
                  Jakarta, Indonesia
                </p>
                <p className="flex items-center gap-4">
                  <span className="bg-indigo-500 p-2 rounded-lg">📧</span> 
                  support@store.co
                </p>
                <p className="flex items-center gap-4">
                  <span className="bg-indigo-500 p-2 rounded-lg">📞</span> 
                  +62 812 3456 789
                </p>
              </div>
            </div>

            {/* Formulir Kontak */}
            <form onSubmit={handleSubmit} className="md:col-span-3 p-10 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition shadow-sm"
                  placeholder="Masukkan nama Anda"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Alamat Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition shadow-sm"
                  placeholder="nama@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Pesan</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition shadow-sm resize-none"
                  placeholder="Apa yang bisa kami bantu?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-all transform active:scale-[0.98] shadow-lg shadow-indigo-200"
              >
                Kirim Pesan
              </button>
            </form>

          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;