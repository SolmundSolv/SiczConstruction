import mongoose from "mongoose";
const Schema = mongoose.Schema;

const galeriaSchema = new Schema(
    {
        obraz: {
            type: String,
            require: true,
        },
        converted: {
            type: String,
        },
        opis: {
            type: String,
            require: true,
        },
    },
    { timestamps: true }
);
export const Galeria = mongoose.model("Galeria", galeriaSchema);
