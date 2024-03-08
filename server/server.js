const express = require("express");
const cors = require("cors");
const fs = require("fs");

const colors = require("colors");

const app = express();

app.use(express.json());

app.use(cors());

app.post("/users", (req, res) => {
  console.log("user data", req.body);

  fs.readFile("users.json", "utf8", (err, data) => {
    if (err) {
      console.log("kunde ej läsa filen", err);
      return res.status(500).send("kunde ej läsa filen 2");
    }

    const users = JSON.parse(data);

    users.push(req.body);

    fs.writeFile("users.json", JSON.stringify(users), (err) => {
      if (err) {
        console.log("kunde ej skriva till filen", err);
        return res.status(500).send("kunde ej skriva till filen 2");
      }

      res.status(201).send("användare är sparad");
    });
  });
});

app.listen(3000, () => console.log("Server is upp...".rainbow.bold.italic));
