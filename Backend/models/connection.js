import mo from 'mongoose'

const url="mongodb://localhost:27017/ecourses"

mo.connect(url);
console.log("data connected");