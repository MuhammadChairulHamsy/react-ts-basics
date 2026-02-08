import { useCounter } from "../hooks/useCounter";

const Counter = () => {
  const { count, name, handleIncrement, handleDecrement } = useCounter();

  return (
    <div className="flex gap-2 m-2">
      <button
        onClick={handleIncrement}
        className="p-2 rounded-xl bg-blue-500 text-slate-100 cursor-pointer"
      >
        Tambah
      </button>
      <p>{count}</p>
      <p>{name}</p>
      <button
        onClick={handleDecrement}
        className="p-2 rounded-xl bg-red-500  text-slate-100 cursor-pointer"
      >
        Kurang
      </button>
    </div>
  );
};

export default Counter;
