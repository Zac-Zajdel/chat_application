import { model, Schema } from "mongoose";

const userSchema: Schema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
      trim: true
    },
    last_name: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    group: {
      type: Number
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
    birthdate: {
      type: Date,
      required: true
    },
    gender: {
      type: String
    },
    address: {
      type: String,
      trim: true
    },
    phone: {
      type: String,
      unique: true
    },
    country: {
      type: String
    },
    state: {
      type: String
    }
  },
  { timestamps: true }
);

export default model("User", userSchema);