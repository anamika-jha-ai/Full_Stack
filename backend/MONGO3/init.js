const mongoose = require('mongoose');
const Chat = require('./models/chat.js');

main().then(() => { console.log("connection sucessful") })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

Chat.insertMany([
    {
        from: "Alice",
        to: "Bob",
        message: "Hello, Bob!",
        createdAt: new Date(),
    },
    {
        from: "anamika",
        to: "sneha",
        message: "Hi, sneha How are you?",
        createdAt: new Date(),
    }
]);