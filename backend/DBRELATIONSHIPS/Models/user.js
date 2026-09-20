const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationshipsDB");
}

const userSchema = new Schema({
  username: String,
  address: {
    location: String,
    city: String,
    country: String
  }
});

const User = mongoose.model("User", userSchema);

const addUser = async () => {
  const user1 = new User({
    username: "john_doe",
    address: {
      location: "456 Side St",
      city: "Los Angeles",
      country: "USA"
    }
  });

  const result = await user1.save();
  console.log("User added:", result);
};

addUser();
