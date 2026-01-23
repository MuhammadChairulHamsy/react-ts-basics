import { useRef } from "react";

const FormPage = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const inputEmailRef = useRef<HTMLInputElement>(null);

    const handleSubmit = () => {
        alert(`Fomr submitted: ${inputRef.current?.value} ${inputEmailRef.current?.value}`)
    }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <div className="flex flex-col max-w-3xs m-10 space-y-3">
        <label htmlFor="full-name">Full Name</label>
        <input ref={inputRef} id="full-name" type="text" className="border" />
        <label htmlFor="email">Full Name</label>
        <input ref={inputEmailRef} id="email" type="email" className="border" />
        <button onClick={handleSubmit} type="submit" className="border bg-blue-500 text-slate-100 font-bold">Submit</button>
      </div>
    </div>
  );
};

export default FormPage;
