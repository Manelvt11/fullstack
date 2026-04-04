import { useState } from "react";

const backend = import.meta.env.VITE_BACKEND;

const Input = ({ getTarefa }) => {
  const [tarefa, setTarefa] = useState("");

  const postTarefa = async () => {
    if (!tarefa.trim()) return; // evita tarefa vazia

    try {
    const res = await fetch(`${backend}/api/tarefa`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: tarefa }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      setTarefa("");
      getTarefa();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex gap-2">
      
      <input
        onChange={(e) => setTarefa(e.target.value)}
        value={tarefa}
        type="text"
        placeholder="Digite uma tarefa..."
        className="flex-1 p-3 rounded-xl bg-gray-700 text-white border border-gray-600 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   placeholder-gray-400"
      />

      <button
        onClick={postTarefa}
        className="bg-blue-500 px-4 rounded-xl text-white font-medium
                   hover:bg-blue-600 transition duration-200 
                   active:scale-95"
      >
        +
      </button>

    </div>
  );
};

export default Input;