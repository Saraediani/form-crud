import mongoose from "mongoose";

const connectDb = async (url) => {
  return await mongoose
    .connect("mongodb://localhost:27017/form")
    .then(() => {
      console.log("Database connection Success.");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export default connectDb;