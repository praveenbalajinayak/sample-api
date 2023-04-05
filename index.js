const usersRoutes = require('./routes/users.js')
const express = require('express');
const { parse } = require('pg-protocol');
const app = express();


const bodyParser = require('body-parser');
app.use(bodyParser.json())


const PORT = 5433;

app.use(bodyParser.json());

app.use("/users", usersRoutes);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));
