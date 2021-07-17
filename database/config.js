const mongoose = require("mongoose");

const dbConection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log("Base de datos en linea");
  } catch (error) {
    console.log(error);
    throw new Error("ERROR a la hora denectarse a la base de datos");
  }
};

module.exports = {
  dbConection,
};
