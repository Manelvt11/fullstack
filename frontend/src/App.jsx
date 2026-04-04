import { useEffect, useState } from "react";
import Input from "./components/Input";
import TarefaList from "./components/TarefaList";

const backend = import.meta.env.VITE_BACKEND;

function App() {
  const [tarefas, setTarefas] = useState([]);

  const getTarefa = async () => {
    try {
      const res = await fetch(`${backend}/api/tarefa`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      setTarefas(data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateTarefa = async (id) => {
    try {
      const res = await fetch(`${backend}/api/tarefa/${id}`, {
        method: "PATCH",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      getTarefa();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTarefa();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-lg p-6">
        
        {/* Título */}
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          📝 Todo List
        </h1>

        {/* Input */}
        <Input getTarefa={getTarefa} />

        {/* Lista */}
        <div className="mt-4">
          <TarefaList 
            tarefas={tarefas} 
            updateTarefa={updateTarefa} 
          />
        </div>

        {/* Rodapé */}
        <p className="text-gray-400 text-sm text-center mt-6">
          {tarefas.length} tarefas no total
        </p>

      </div>
    </div>
  );
}

export default App;