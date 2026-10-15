import { faker } from "@faker-js/faker";
import mysql from "mysql2/promise";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import methodOverride from "method-override";

// Fix for __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));


const connection = await mysql.createPool({
  host: "localhost",
  user: "root",
  password: "13042006@Aa",
  database: "sigma_app",
});


function createRandomUser() {
  const id = faker.string.uuid();
  const username = faker.person.firstName();
  const email = faker.internet.email();
  const password = faker.internet.password();

  return [id, username, email, password];  // ← VERY IMPORTANT
}


//Inserting new data

// let q = "INSERT INTO users (id, username, email, password) VALUES ?";
// let data =[];
// for (let i= 1 ;  i<=10; i++){
//   data.push(createRandomUser());  
// }

// try {
//   const [result] = await connection.query(q, [data]);
//   console.log(result);
// } catch (err) {
//   console.error(err);
// }

//connection.end();


//home route
app.get("/", async (req, res) => {
  let q = 'SELECT count(*) FROM users';

  try {
    const [result] = await connection.query(q);
    console.log(result);
    let count = result[0]['count(*)'];
    res.render("home.ejs", { count });
  } catch (err) {
    console.error(err);
    res.send("some error in Db");
  }
});

//show route
app.get("/users", async (req, res) => {
  let q = 'SELECT * FROM users';
  try {
    const [users] = await connection.query(q);
    //console.log(result);
    res.render("showusers.ejs", { users });

  } catch (err) {
    console.error(err);
    res.send("some error in Db");
  }
});


//edit route
app.get("/user/:id/edit", async (req, res) => {
  const { id } = req.params;
  let q = "SELECT * FROM users WHERE id = ?";
  try {
    const [users] = await connection.query(q, [id]);
    console.log(users);
    let user = users[0];
    res.render("edit.ejs", { user });

  } catch (err) {
    console.error(err);
    res.send("some error in Db");
  }
});


app.patch("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { password: formPass, username: newUsername } = req.body;

    // 1) Get existing user
    const [rows] = await connection.query(
      "SELECT * FROM users WHERE id = ?",
      [id]
    );

    const user = rows[0];
    if (!user) {
      return res.send("User not found");
    }

    // 2) Check password
    if (formPass !== user.password) {
      return res.send("WRONG password");
    }

    // 3) Update username
    await connection.query(
      "UPDATE users SET username = ? WHERE id = ?",
      [newUsername, id]
    );

    // 4) Redirect back to list
    res.redirect("/users");
  } catch (err) {
    console.error(err);
    res.send("some error in Db");
  }
});




app.listen("8080", () => {
  console.log("server is listenng to port 8080");
});