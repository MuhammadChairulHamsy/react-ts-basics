import { useState } from "react";

type RegisterFormSchema = {
  name: string;
  email: string;
  password: string;
  age: number;
};

const FormPage = () => {
  // controlled/input
  const [inputName, seInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputAge, setInputAge] = useState("");

  // Error Message
  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [ageErrorMessage, setAgeErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const fullNameValidation = inputName.length < 3;
    const emailValidation = !inputEmail.includes("@") || inputEmail.length < 5;
    const passwordValidation = inputPassword.length < 8;
    const ageValidation = Number(inputAge) < 18;

    let isValid = true;

    if (fullNameValidation) {
      setUsernameErrorMessage("Username minimal 3 karakter");
      isValid = false;
    }

    if (emailValidation) {
      setEmailErrorMessage("Email harus mengandung @ dan minimal 5 karakter");
      isValid = false;
    }

    if (passwordValidation) {
      setPasswordErrorMessage("Password minimal 8 karakter");
      isValid = false;
    }

    if (ageValidation) {
      setAgeErrorMessage("Minimal usia adalah 18 tahun.");
      isValid = false;
    }

    if (isValid) {
      const data: RegisterFormSchema = {
        name: inputName,
        email: inputEmail,
        password: inputPassword,
        age: Number(inputAge),
      };
      console.log("Data Terkirim:", data);
      alert("Registrasi Berhasil!");

      // 1. RESET INPUT (Ini yang bikin teks di kolom jadi kosong lagi)
      seInputName("");
      setInputEmail("");
      setInputPassword("");
      setInputAge("");

      // 2. RESET ERROR (Agar pesan merah hilang)
      setUsernameErrorMessage("");
      setEmailErrorMessage("");
      setPasswordErrorMessage("");
      setAgeErrorMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-10">
      <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <h1 className="text-2xl font-bold mb-6">Register Form</h1>

        <div className="flex flex-col mb-5">
          <h1>Full Name: {inputName}</h1>
          <h1>Email: {inputEmail}</h1>
          <h1>Password: {inputPassword}</h1>
          <h1>Age: {inputAge}</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="full-name" className="font-medium text-sm">
              Full Name
            </label>
            <input
              id="full-name"
              onChange={(e) => seInputName(e.target.value)}
              value={inputName}
              type="text"
              className="border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <span className="text-xs text-red-500 mt-1">
              {usernameErrorMessage}
            </span>
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="font-medium text-sm">
              Email
            </label>
            <input
              id="email"
              onChange={(e) => setInputEmail(e.target.value)}
              value={inputEmail}
              type="text"
              className="border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <span className="text-xs text-red-500 mt-1">
              {emailErrorMessage}
            </span>
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="font-medium text-sm">
              Password
            </label>
            <input
              id="password"
              onChange={(e) => setInputPassword(e.target.value)}
              value={inputPassword}
              type="password"
              className="border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <span className="text-xs text-red-500 mt-1">
              {passwordErrorMessage}
            </span>
          </div>

          <div className="flex flex-col">
            <label htmlFor="age" className="font-medium text-sm">
              Age
            </label>
            <input
              id="age"
              onChange={(e) => setInputAge(e.target.value)}
              value={inputAge}
              type="number"
              className="border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <span className="text-xs text-red-500 mt-1">{ageErrorMessage}</span>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
