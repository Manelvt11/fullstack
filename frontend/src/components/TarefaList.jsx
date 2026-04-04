const TarefaList = ({ tarefas, updateTarefa, deleteTarefa }) => {
  return (
    <div className="flex flex-col gap-3 mt-6">
      
      {tarefas.length === 0 && (
        <p className="text-gray-400 text-center">
          Nenhuma tarefa ainda 👀
        </p>
      )}

      {tarefas.map((t) => {
        return (
          <div
            key={t.id}
            className="flex items-center justify-between bg-gray-700 p-3 rounded-xl 
                       hover:bg-gray-600 transition duration-200"
          >
            {/* Conteúdo */}
            <div className="flex flex-col">
              <span
                className={`text-sm ${
                  t.isComplete
                    ? "line-through text-gray-400"
                    : "text-white"
                }`}
              >
                {t.content}
              </span>

              <span
                className={`text-xs mt-1 ${
                  t.isComplete
                    ? "text-blue-400"
                    : "text-red-400"
                }`}
              >
                {t.isComplete ? "✔ Concluída" : "⏳ Em andamento"}
              </span>
            </div>

            {/* Botões */}
            <div className="flex gap-2">
              
              {/* Finalizar */}
              <button
                onClick={() => updateTarefa(t.id)}
                disabled={t.isComplete}
                className={`px-3 py-1 rounded-lg text-sm text-white transition duration-200 active:scale-95 ${
                  t.isComplete
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-green-500 hover:bg-green-600"
                }`}
              >
                ✔
              </button>

              {/* Deletar */}
              <button
                onClick={() => {
                  if (confirm("Tem certeza que deseja deletar essa tarefa?")) {
                    deleteTarefa(t.id);
                  }
                }}
                className="bg-red-500 px-3 py-1 rounded-lg text-sm text-white
                           hover:bg-red-600 transition duration-200 
                           active:scale-95"
              >
                🗑
              </button>

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TarefaList;