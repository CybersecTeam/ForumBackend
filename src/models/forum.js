const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

let Schema = mongoose.Schema;

let forumSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ],
  creator: {
      type: String,
      required: true
  },
  dateCreated: {
    type: Date,
    default: Date.now,
    required: true
  }
});

forumSchema.plugin(uniqueValidator, {
  message: "{PATH} must be unique"
});

module.exports = mongoose.model("Forum", forumSchema);
