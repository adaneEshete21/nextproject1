import mongoose from "mongoose";
import AutoIncrement from "mongoose-sequence"; // Import the plugin

const Schema = new mongoose.Schema(
  {
    serviceName: { type: String, required: true },
    serviceNumber: { type: Number }, // Auto-incremented field
    serviceDescription: { type: String, required: true },
    servicePrice: { type: Number, required: true },
    serviceDuration: { type: Number, required: true },
    serviceImage: { type: String, required: true },
    serviceCategory: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Apply the auto-increment plugin to the schema
Schema.plugin(AutoIncrement, { inc_field: "serviceNumber" });

const ServiceDetail = mongoose.model("ServiceDetail", Schema);
export default ServiceDetail;
