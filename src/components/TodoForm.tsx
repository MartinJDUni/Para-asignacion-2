import React, { useContext, useState } from "react";
import { All, AllContext } from "./TodoContext"


const TodoForm: React.FC = () => {
  const { alls, addAll, updateAll } = useContext(AllContext);
  const [title, setTitle] = useState("");
  const [index, setIndex] = useState<number | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (index !== null) {
      updateAll(index, { title, active: true });
      setIndex(null);
    } else {
      addAll(title);
    }
    setTitle("");
  };

  const handleEdit = (all: All, index: number) => {
    setTitle(all.title);
    setIndex(index);
  };

  return (
    <div id="Cambiar" className="form-tarea">
      <div>
        <h2>Editar Tareas</h2>
        <ul>
          {alls.map((all, index) => (
            <li key={index}>
              {all.title} - {all.active ? "Activo" : "Inactivo"}
              <button className="btn" onClick={() => handleEdit(all, index)}>Editar</button>
            </li>
          ))}
        </ul>
      </div>
      <div id="formulario">
        <h2>Formulario Tareas</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <button className="btn" type="submit">
            {index !== null ? " Actualizar Tarea" : "Agregar Tarea"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;