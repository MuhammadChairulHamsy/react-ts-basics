import { useState, type ChangeEventHandler } from "react";

interface ButtonProps {
  title: string;
  className?: string;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`bg-indigo-600 text-white font-bold px-6 py-2.5 rounded-lg hover:bg-indigo-700 transition-all transform active:scale-95 shadow-md shadow-indigo-100 disabled:opacity-50 flex items-center gap-2 ${props.className}`}
    >
      {props.title}
    </button>
  );
};

const LearnStatePropsInput = () => {
  const [inputText, setInputText] = useState<string>("");

  const handleInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputText(event.target.value);
  };
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <div className="max-w-80 mx-auto px-6 py-12">
        <div className="space-y-5">
          <label htmlFor="name">Username</label>
          <input
            id="name"
            onChange={handleInput}
            value={inputText}
            type="text"
            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
          />
          <h1>{inputText}</h1>

          <Button onClick={() => alert("click")} title="Click Me!" />
        </div>
      </div>
    </main>
  );
};
export default LearnStatePropsInput;
