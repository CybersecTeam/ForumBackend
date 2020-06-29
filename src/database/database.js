const mongoose = require("mongoose");

//  Connecting to mongo database
mongoose.connect(
  process.env.URL_DB,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    auth: {
      authSource: "admin"
    },
    user: process.env.DB_USER,
    pass: process.env.DB_PASSWORD
  },
  err => {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log("MongoDB is connected using ", process.env.URL_DB);
  }
);

module.exports = mongoose;
