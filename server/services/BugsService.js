import mongoose from "mongoose";
import Value from "../models/Value";
import Bug from "../models/Bug"

const _repository = mongoose.model("Bug", Bug);

class BugsService {
  async getAll() {
    return await _repository.find({});
  }
}

const bugsService = new BugsService();
export default bugsService;