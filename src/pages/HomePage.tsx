import { useNavigate, Link, useSearchParams } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentView = searchParams.get("view");

  const goToTerms = () => {
    navigate("?view=terms");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navbar */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h2 className="font-bold text-xl tracking-tight text-indigo-600">STORE.CO</h2>
          <div className="flex gap-8 text-sm font-medium text-slate-600">
            <Link to="/" className="text-indigo-600 border-b-2 border-indigo-600">Home</Link>
            <Link to="/about" className="hover:text-indigo-600 transition">About</Link>
            <Link to="/products" className="hover:text-indigo-600 transition">Products</Link>
            <Link to="/contact" className="hover:text-indigo-600 transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 pt-20 pb-32">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-black text-slate-950 leading-[1.1]">
              Gaya Hidup <br /> 
              <span className="text-indigo-600">Masa Kini.</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-lg leading-relaxed">
              Dapatkan koleksi produk terbaik yang menggabungkan kenyamanan dan estetika modern hanya di STORE.CO.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link 
                to="/products" 
                className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition shadow-lg shadow-indigo-200"
              >
                Belanja Sekarang
              </Link>
              <button 
                onClick={goToTerms}
                className="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 transition"
              >
                Syarat & Ketentuan
              </button>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="absolute -inset-4 bg-indigo-100 rounded-[3rem] -rotate-6 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=60" 
              alt="Featured Product" 
              className="rounded-[2.5rem] shadow-2xl object-cover w-full h-[400px] md:h-[500px]"
            />
          </div>
        </div>

        {/* Modal-like View (Logika WhatsApp Web kamu) */}
        {currentView === "terms" && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <div className="bg-white max-w-2xl w-full rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
              <div className="p-8 border-b flex justify-between items-center bg-slate-50">
                <h2 className="text-xl font-bold">Halaman Terms</h2>
                <button 
                  onClick={() => navigate("/")} 
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-50 text-red-500 transition"
                >
                  ✕
                </button>
              </div>
              <div className="p-8 space-y-4 max-h-[60vh] overflow-y-auto">
                <p className="text-slate-600">
                  Konten ini muncul karena URL berubah menjadi <code className="bg-amber-100 text-amber-700 px-1 rounded">?view=terms</code>.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="p-6 bg-slate-50 text-right">
                <button 
                  onClick={() => navigate("/")} 
                  className="px-6 py-2 bg-slate-900 text-white rounded-xl font-medium"
                >
                  Mengerti
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default HomePage;