import React, {  useContext, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  function tambah() {
    setCount(count + 1);
  }
  function kurang() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }
  return (
    <>
      <div className="bg-slate-400  h-40 m-5 py-7 px-3 rounded-2xl dark:bg-slate-900">
        <h1 className="text-center font-bold text-2xl text-white">{count}</h1>
        <div className="flex justify-center">
          <button
            onClick={kurang}
            className="bg-red-700 m-2 px-3 py-2 rounded-md text-white"
          >
            kurang
          </button>
          <button
            onClick={reset}
            className="bg-indigo-700 m-2 px-3 py-2 rounded-md text-white"
          >
            Reset
          </button>
          <button
            onClick={tambah}
            className="bg-green-800 m-2 px-3 py-2 rounded-md text-white"
          >
            Tambah
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter