const express = require("express");
const cors = require("cors");
const { readFile, writeFile } = require("fs").promises;

const colors = require("colors");

const app = express();

app.use(express.json());

app.use(cors());

app.post("/users", async (req, res) => {
  try {
    console.log("user data", req.body);

    const data = await readFile("users.json", "utf8");

    const users = JSON.parse(data);

    users.push(req.body);

    await writeFile("users.json", JSON.stringify(users));

    res.status(201).send("användare är sparad");
  } catch (error) {
    console.log("fel vid sparande av användare", error);
    res.status(500).send("fel vid sparande av användare 2");
  }
});

app.listen(3000, () => console.log("Server is upp...".rainbow.bold.italic));
