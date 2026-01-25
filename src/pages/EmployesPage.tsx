import { Link } from "react-router";

const EmployesPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navbar */}
      <nav className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h2 className="font-bold text-xl tracking-tight text-indigo-600">
            STORE.CO
          </h2>
          <div className="flex gap-8 text-sm font-medium text-slate-600">
            <Link to="/" className="hover:text-indigo-600 transition">
              Home
            </Link>
            <Link
              to="/about"
              className="text-indigo-600 border-b-2 border-indigo-600 transition"
            >
              About
            </Link>
            <Link to="/products" className="hover:text-indigo-600 transition">
              Products
            </Link>
            <Link to="/contact" className="hover:text-indigo-600 transition">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default EmployesPage;
