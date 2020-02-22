import mongoose from "mongoose";
import Note from "../models/Note"

const _repository = mongoose.model("Note", Note);

class NotesService {
  async getAll() {
    return await _repository.find({});
  }
  async findNotesByBugId(id) {
    return await _repository.find({ bug: id })
  }
  async findById(id) {
    return await _repository.findById(id);
  }
  async create(body) {
    return await _repository.create(body);
  }
  // {closed: true}
  async update(id, update) {
    return await _repository.findByIdAndUpdate(id, update, { new: true })

  }
  async delete(id) {
    return await _repository.findByIdAndDelete(id);

  }
}

const notesService = new NotesService();
export default notesService;
