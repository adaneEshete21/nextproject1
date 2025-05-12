import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  role: { type: String, default: 'user' },
  phone: { type: String, required: true },
  provider: { type: String, default: 'credentials' },
}, { timestamps: true });

// If model already exists, use it, otherwise create it
export default mongoose.models.User || mongoose.model('User', userSchema);