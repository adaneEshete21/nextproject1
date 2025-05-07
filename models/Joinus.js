import mongoose from "mongoose";
const joinusSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        description: { type: String, required: true },
    },
    { timestamps: true }
    );
// If model already exists, use it, otherwise create it
export default mongoose.models.Joinus || mongoose.model("Joinus", joinusSchema);