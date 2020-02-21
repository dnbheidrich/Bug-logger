import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;


const Note = new Schema({
  content: String,
  bug: { type: ObjectId, ref: "Bug", required: true },
  reportedBy: String, //The provided name for who made the note
}, { timestamps: true, toJSON: { virtuals: true } })

export default Note;
