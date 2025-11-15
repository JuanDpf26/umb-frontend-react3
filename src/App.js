import React, { useEffect, useState } from "react";

export default function App() {
  const API_URL = "https://umb-web-taller.onrender.com";

  const [tareas, setTareas] = useState([]);
  const [titulo, setTitulo] = useState("");

  // Leer tareas
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setTareas(data));
  }, []);

  // Crear tarea
  function agregarTarea(e) {
    e.preventDefault();

    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ titulo }),
    }).then(() => {
      setTitulo("");
      // volver a cargar
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => setTareas(data));
    });
  }

  return (
    <div>
      <h1>Tareas</h1>

      <form onSubmit={agregarTarea}>
        <input
          type="text"
          placeholder="Nueva tarea"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>

      <ul>
        {tareas.map((t) => (
          <li key={t.id}>{t.titulo}</li>
        ))}
      </ul>
    </div>
  );
}
