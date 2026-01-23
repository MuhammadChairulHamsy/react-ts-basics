import { useSearchParams, Link, useNavigate } from "react-router";
import { PRODUCT_DATA } from "../data/products";


const ProductPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const sort = searchParams.get("sort");
  const name = searchParams.get("name");

  const handleSortChange = (newSort: string) => {
    searchParams.set("sort", newSort);
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <nav className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h2 className="font-bold text-xl tracking-tight text-indigo-600">
            STORE.CO
          </h2>
          <div className="flex gap-8 text-sm font-medium text-slate-600">
            <Link to="/" className="hover:text-indigo-600 transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-indigo-600 transition">
              About
            </Link>
            <Link
              to="/products"
              className="text-indigo-600 border-b-2 border-indigo-600"
            >
              Products
            </Link>
            <Link to="/contact" className="hover:text-indigo-600 transition">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <header className="mb-12 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Koleksi Produk
          </h1>
          <p className="text-slate-500 mt-2">
            Temukan produk terbaik dengan harga bersaing.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-indigo-600 rounded-full"></span>
                Filter & Sort
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold uppercase text-slate-400">
                    Pencarian
                  </label>
                  <p className="text-sm font-semibold text-slate-700">
                    {name ?? "Semua Produk"}
                  </p>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase text-slate-400 mb-2 block">
                    Urutan Harga
                  </label>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => handleSortChange("asc")}
                      className={`px-4 py-2 text-sm font-medium rounded-lg border transition ${sort === "asc" ? "bg-indigo-600 text-white" : "bg-white"}`}
                    >
                      Termurah (Asc)
                    </button>
                    <button
                      onClick={() => handleSortChange("desc")}
                      className={`px-4 py-2 text-sm font-medium rounded-lg border transition ${sort === "desc" ? "bg-indigo-600 text-white" : "bg-white"}`}
                    >
                      Termahal (Desc)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRODUCT_DATA.map((product) => (
              <div
                key={product.slug}
                className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition duration-300"
              >
                <div className="relative aspect-square overflow-hidden bg-slate-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-slate-800">
                    {product.name}
                  </h3>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold text-indigo-600">
                      {product.price}
                    </span>
                    <button
                      onClick={() => navigate(`/products/${product.slug}`)} 
                      className="p-2 bg-slate-900 text-white rounded-lg hover:bg-indigo-600 transition text-sm px-4 cursor-pointer"
                    >
                      Detail Product
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
