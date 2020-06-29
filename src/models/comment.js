const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let commentSchema = new Schema({
  content: {
    type: String
  },
  creator: {
      type: String
  },
  dateCreated: {
    type: Date,
    default: Date.now,
    required: true
  }
});


module.exports = mongoose.model("Comment", commentSchema);
