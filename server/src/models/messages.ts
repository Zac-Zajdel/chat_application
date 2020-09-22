import { model, Schema } from "mongoose";

const messageSchema: Schema = new Schema(
  {
    content: {
      type: String,
      required: true
    },
    likes: {
      type: Number
    },
    dislikes: {
      type: Number
    },
    emojis:[{
      id: String,
      user: String
    }]
  },
  { timestamps: true }
);

export default model("Message", messageSchema);