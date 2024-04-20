import mongoose from "mongoose";

const ConstructModel = new mongoose.Schema({
  address: {
    type: String,
    required: "Enter your address",
  },

  numberOfFloors: {
    type: Number,
    required: "Enter your numberOfFloors",
  },
  startDate: {
    type: Date,
  },
  architectName: {
    type: String,
  },
  buildingType: {
    type: String,
  },
  constructionStatus: {
    type: String,
  },
  amenities: {
    type: String,
  },
  totalCost: {
    type: Number,
  },
});

export default mongoose.model("manages", ConstructModel);
