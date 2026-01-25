// import { Header } from "./components/Header";
// import { ProfileCard } from "./components/ProfileCard";
// import Counter from "./components/Counter";
// import ButtonLike from "./components/ButtonLike";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import TermsPage from "./pages/TermsPage";
import NotFound from "./pages/NotFound";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FormPage from "./pages/FormPage";
import RHFPage from "./pages/RHFPage";
import EmployesPage from "./pages/EmployesPage";

// uncotrolled/input
  // const inputRef = useRef<HTMLInputElement>(null);
  // const inputEmailRef = useRef<HTMLInputElement>(null);

// type Identity = {
//   id: number;
//   name: string;
//   age: number;
//   hobby: string;
//   job: string;
// };

// const identitys: Identity[] = [
//   {
//     id: 1,
//     name: "Hamsy",
//     age: 23,
//     hobby: "Ngoding",
//     job: "Programmer",
//   },
//   {
//     id: 2,
//     name: "Fanny",
//     age: 25,
//     hobby: "Terbang",
//     job: "Asssasin",
//   },
// ];

function App() {
  return (
    <>
      <Routes>
        {/* Page */}
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />        
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/employes" element={<EmployesPage />} />


        {/* Form */}
        <Route path="/form" element={<FormPage />} />
        <Route path="/rhf" element={<RHFPage />} />



        {/* Dynamic Route */}
        <Route path="/products/:slug" element={<ProductDetailPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
