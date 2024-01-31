const express = require("express");
const mongoose = require("mongoose");
const { Exercise } = require("./models/exercise");
const { Food } = require("./models/food")
const { User } = require("./models/user");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();
const cors = require("cors");


mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err.message);
  });

// defining the Express app
const app = express();

app.use(cors());
app.use(express.json());

// Authorization generation endpoint
app.post("/auth", async (req, res) => {
  try {
    console.log("arrived");
  console.log(req.body);
  const user = await User.findOne({ username: req.body.username });
  console.log(user);
  if (!user) {
    return res.sendStatus(403);
  }
  //do not store password in plain text in production
  if (req.body.password !== user.password) {
    console.log("wrong password");
    return res.sendStatus(403);
  }
  //generate the token using the uuid library
  user.token = uuidv4();
  await user.save();
  res.send({ token: user.token });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ error: 'Internal server error' });

  }
});

// Authorization middleware
app.use(async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const user = await User.findOne({ token: authHeader });
  if (user) {
    next();
  } else {
    res.sendStatus(403);
  }
});

// defining CRUD operations
app.get("/", async (req, res) => {
  res.send(await Exercise.find());
});

app.get("/food", async (req, res) => {
  res.send(await Food.find());
});

app.get("/", async (req, res) => {
  res.send(await User.find());
});

app.post("/", async (req, res) => {
  const newExercise = req.body;
  const exercise = new Exercise(newExercise);
  await exercise.save();
  res.send({ message: "New exercise inserted." });
});

app.post("/food", async (req, res) => {
  const newFood = req.body;
  const food = new Food(newFood);
  await food.save();
  res.send({ message: "New food inserted." });
});


app.delete("/:id", async (req, res) => {
  await Exercise.findByIdAndDelete(req.params.id);
  res.send({ message: "Exercise removed." });
});

app.delete("/food/:id", async (req, res) => {
  await Food.findByIdAndDelete(req.params.id);
  res.send({ message: "Food removed." });
});

app.put("/:id", async (req, res) => {
  await Exercise.findByIdAndUpdate(req.params.id, req.body);
  res.send({ message: "Exercise updated." });
});

app.put("/food/:id", async (req, res) => {
  await Food.findByIdAndUpdate(req.params.id, req.body);
  res.send({ message: "Food updated." });
});

app.listen(3001, () => {
  console.log("listening on port 3001");
});