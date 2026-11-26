import { Plus, Trash } from "lucide-react";
import { useState } from "react";

type Todo = {
  id: number;
  text: string;
};

// function handleAdd() {
//   return (
//     <div className="flex justify-between gap-100 border-b border-[#625d5d] py-2">
//       <div className="flex gap-3 items-center justify-center">
//         <input type="checkbox" className="cursor-pointer" />
//         <p>I am here</p>
//       </div>
//       <button className="bg-[#F2F4F5] hover:bg-[#ECECEC] p-2 rounded-full cursor-pointer">
//         <Trash color="red" />
//       </button>
//     </div>
//   );
// }

export default function MainLayout() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  function handlePlus() {
    if (!input.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: input,
    };
    setTodos((prev) => [...prev, newTodo]);
    setInput("");
  }

  function handleDelete(id: number) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <div className="flex items-center w-200 h-15 bg-white rounded-full px-5 shadow-[0px_3px_12px_rgba(0,0,0,0.2)]">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Add todo..."
          className="flex h-full outline-none border-none bg-transparent text-2xl px-8"
        />
        <button
          onClick={handlePlus}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-[#269E9A] text-white hover:bg-[#208985] transition-colors ml-90"
        >
          <Plus size={27} strokeWidth={3} />
        </button>
      </div>

      <div className="mt-6">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between gap-100 items-center border-b border-[#625d5d] py-2"
          >
            <div className="flex gap-3 items-center">
              <input type="checkbox" className="cursor-pointer" />
              <p>{todo.text}</p>
            </div>
            <button
              onClick={() => handleDelete(todo.id)}
              className="bg-[#F2F4F5] hover:bg-[#ECECEC] p-2 rounded-full cursor-pointer"
            >
              <Trash color="red" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
