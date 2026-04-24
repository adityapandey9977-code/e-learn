import mo from 'mongoose'

console.log("MONGO_URI:", process.env.MONGO_URI);
mo.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected ");
  })
  .catch((err) => {
    console.log("MongoDB Error ", err);
    process.exit(1); // IMPORTANT: crash if DB fails
  });