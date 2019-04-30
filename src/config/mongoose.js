const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://fatanaminullah:kamucantikxx1@cluster0-ldhqc.mongodb.net/jc8reactmongoose?retryWrites=true", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});
