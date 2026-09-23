const mongoose = require('mongoose');


// mongoose.connect('mongodb://127.0.0.1:27017/test') ;


main()
.then(() => {
  console.log("Connected to MongoDB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model('User', userSchema);
// const Employee = mongoose.model('Employee', userSchema);

// const user1 = new User ({
//   name: "Anamika Jha",
//   email: "anamika.jha.cse@gmail.com",
//   age: 19,
// });

// const user2 = new User({
//   name: "Sneha Mondal",
//    email: "snehaMondal2005@gmail.com",
//    age: 20,
// });

// user1.save();
// user2.save();

// User.insertMany([
//   {name: "Snehendu Jana", email: "snehendujana@gmail.com", age:22},
//   {name: "Soaham Behra", email: "SoahamBehra@gmail.com", age: 22},
// ]).then((res) => {
//   console.log(res);
// });


User.find({ age: {$gt:20}})
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
});