import { useParams, useNavigate } from "react-router";
// Import data dari file di atas
import { PRODUCT_DATA } from "../data/products";

const ProductDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Cari produk yang ID-nya sama dengan slug di URL
  const product = PRODUCT_DATA.find((item) => item.slug === slug);

  // Jika produk tidak ditemukan
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Produk Tidak Ditemukan</h1>
        <button onClick={() => navigate("/products")} className="mt-4 text-indigo-600 underline">
          Kembali ke Katalog
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* Kolom Gambar */}
        <div className="md:w-1/2 bg-slate-100 p-8">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain hover:scale-105 transition duration-500"
          />
        </div>

        {/* Kolom Info */}
        <div className="md:w-1/2 p-10 flex flex-col">
          <button 
            onClick={() => navigate(-1)} 
            className="text-slate-400 text-sm mb-6 hover:text-indigo-600 flex items-center gap-2"
          >
            ← Kembali
          </button>
          
          <h1 className="text-4xl font-extrabold text-slate-900">{product.name}</h1>
          <p className="text-2xl font-bold text-indigo-600 mt-4">{product.price}</p>
          
          <div className="mt-8 border-t pt-8">
            <h3 className="font-bold text-slate-800 mb-2">Deskripsi Produk</h3>
            <p className="text-slate-500 leading-relaxed">{product.desc}</p>
          </div>

          <div className="mt-auto pt-10">
            <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-indigo-600 transition shadow-lg">
              Tambah ke Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;