import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const handleIncrement = () => {
    alert("Tambah");
    setCount((prevCount) => prevCount + 1);
    setName("Hamsy");
  };
  const handleDecrement = () => {
    alert("Kurang");
    setCount((prev) => {
      const nextValue = prev - 1;

      if (nextValue <= 0) {
        setName("");
      }
      return nextValue;
    });
  };

  return {
    count,
    name,
    handleIncrement,
    handleDecrement,
  };
};

