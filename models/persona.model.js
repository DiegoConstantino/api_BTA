import mongoose, {Schema} from "mongoose";

const Personas = new Schema({
    nombre_animal: { type: String, maxlenght: 50, required: true },
    raza_ganado: String,
    total_ganado: Number,
    rango1: Number,
    rango2: Number,
    rango3: Number,

    createdAt:{
        type: Date, default: Date.now
    }
});

const Persona= mongoose.model('persona', Personas);

export default Persona