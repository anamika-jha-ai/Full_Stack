const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chat.js');

// ================= MIDDLEWARE =================
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// ================= DATABASE CONNECTION =================
main()
  .then(() => {
    console.log("MongoDB connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// ================= ROUTES =================

// Home route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Index route – show all chats
app.get('/chats', async (req, res) => {
  let chats = await Chat.find();
  res.render('index.ejs', { chats });
});

// New route – form to create chat
app.get('/chats/new', (req, res) => {
  res.render('new.ejs');
});

// Create route – save chat to DB
app.post('/chats', async (req, res) => {
  let { from, to, message } = req.body;

  let newChat = new Chat({
    from,
    to,
    message,
    createdAt: new Date()
  });

  await newChat.save();
  console.log("Chat saved successfully");

  res.redirect('/chats');
});

// ================= SERVER =================
app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
