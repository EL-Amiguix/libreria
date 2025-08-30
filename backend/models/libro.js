// Importamos mongoose para definir el esquema del libro
import mongoose from "mongoose";

// Definimos el esquema de un libro
const libroSchema = new mongoose.Schema({
  titulo: { type: String, required: true }, // El título del libro es obligatorio
  autor: { type: String, required: true },  // El autor del libro también es obligatorio
  anio: { type: Number, required: true }    // El año debe ser un número obligatorio
});

// Creamos el modelo a partir del esquema
export default mongoose.model("Libro", libroSchema);
