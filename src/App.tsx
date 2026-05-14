import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl mb-4">Contador Simples</h1>
      <div className="flex items-center justify-center space-x-4 bg-white p-4 rounded-2xl shadow-lg">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <span className="text-2xl font-bold">{count}</span>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
