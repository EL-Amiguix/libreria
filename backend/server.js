import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import librosRoutes from "./routes/libros.js";

const app = express();

// Middleware: permite que el backend entienda JSON y acepte peticiones de otros orígenes
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/libreria")
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch(err => console.error("❌ Error en la conexión a MongoDB:", err));

// Definimos la ruta principal para libros
app.use("/api/libros", librosRoutes);

// Configuración del puerto
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
