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
    const { error } = registerSchema.validate(req.body, { abortEarly: false });

    if (error) {
      return res.status(400).json(error);
    }

    const { userId, favoriteImage } = req.body;
    console.log("user data", req.body);

    const data = await readFile("users.json", "utf8");

    let users = JSON.parse(data);

    let existingUser = users.findIndex((user) => user.userId === userId);

    console.log("existingUser:", existingUser);

    if (existingUser !== -1) {
      users[existingUser].favorites.push(favoriteImage);
    } else {
      users.push({
        userId,
        favorites: [favoriteImage],
      });
    }

    await writeFile("users.json", JSON.stringify(users));

    res.status(201).send("User is saved!");
  } catch (error) {
    console.log("Error when trying to save an user", error);
    res.status(500).send("Error when trying to save an user");
  }
});

app.get("/users/:userId/favorites", async (req, res) => {
  try {
    const { userId } = req.params;

    const data = await readFile("users.json", "utf8");
    const users = JSON.parse(data);
    const existingUser = users.find((user) => user.userId === userId);

    if (!existingUser) {
      return res.status(404).send("Could not find a user with that id");
    }
    res.json(existingUser.favorites);
  } catch (error) {
    console.log("Could not find any favorite images", error);
    res.status(500).send("Could not find any favorite images");
  }
});

app.delete("/users/:userId/favorites/:favoriteImage", async (req, res) => {
  try {
    const { userId, favoriteImage } = req.params;

    const data = await readFile("users.json", "utf8");
    let users = JSON.parse(data);

    const user = users.find((user) => user.userId === userId);

    if (!user) {
      return res.status(404).send("Could not find a user with that id");
    }
    const favoriteIndex = user.favorites.findIndex((image) => image === favoriteImage);




    if (favoriteIndex === -1) {
      return res.status(404).send("Could not find a favorite image");
    }

    user.favorites.splice(favoriteIndex, 1);

    await writeFile("users.json", JSON.stringify(users));

    res.status(204).send("Favorite image deleted!");
  } catch (error) {
    console.log("Could not delete the favorite image", error);
    res.status(500).send("Could not delete the favorite image");
  }
});

app.listen(3000, () => console.log("Server is upp...".rainbow.bold));
