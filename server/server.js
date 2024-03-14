const express = require("express");
const cors = require("cors");
const { readFile, writeFile } = require("fs").promises;

const colors = require("colors");

const { registerSchema } = require("./schemas/user.schema");
const { validate } = require("./validate");


const app = express();

app.use(express.json());

app.use(cors());

app.post("/users", validate(registerSchema), async (req, res) => {
  try {
    const { error } = registerSchema.validate(req.body, {abortEarly: false});

    if (error) {
      return res.status(400).json(error);
    };

    const { userId, favoriteImage } = req.body;
    console.log("user data", req.body);

    const data = await readFile("users.json", "utf8");

    let users = JSON.parse(data);

    let existingUser = users.findIndex((user) => user.userId === userId);

    console.log("existingUser:", existingUser);

    if (existingUser !== -1) {
      console.log("lägger bara till en till bild");
      users[existingUser].favorites.push(favoriteImage);
    } else {
      console.log("lägger till ny användare med bilder");
      users.push({
        userId,
        favorites: [favoriteImage],
      });
    }

    await writeFile("users.json", JSON.stringify(users));

    res.status(201).send("användare är sparad");
  } catch (error) {
    console.log("fel vid sparande av användare", error);
    res.status(500).send("fel vid sparande av användare 2");
  }
});

app.get("/users/:userId/favorites", async (req, res) => {
  try {
    const { userId } = req.params;

    const data = await readFile("users.json", "utf8");
    const users = JSON.parse(data);
    const existingUser = users.find((user) => user.userId === userId);

    if (!existingUser) {
      return res.status(404).send("hittade ej användare");
    }
    res.json(existingUser.favorites);
  } catch (error) {
    console.log("kunde ej hitta favoritbilder", error);
    res.status(500).send("hittade ej favoritbilder 2");
  }
});

app.listen(3000, () => console.log("Server is upp...".rainbow.bold.italic));
