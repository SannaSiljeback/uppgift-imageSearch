const express = require('express');
const cors = require('cors');

const colors = require('colors');

const app = express();

app.use(express.json());

app.use(cors());

app.post("/users", (req, res) => {
    console.log(req.body);
});

app.listen(3000, () => console.log("Server is upp...".rainbow.bold.italic));