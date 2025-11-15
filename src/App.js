const API_URL = "https://umb-web-taller.onrender.com";

useEffect(() => {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => setTareas(data));
}, []);

function agregarTarea() {
  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ titulo: nuevaTarea }),
  });
}
