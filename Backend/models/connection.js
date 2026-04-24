import mo from 'mongoose'

const url="mongodb://localhost:27017/ecourses"

mo.connect(process.env.MONGO_URI);
console.log("data connected");