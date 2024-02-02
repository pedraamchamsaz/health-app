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

// register new user
app.post("/", async (req, res) => {
  try {
    const userData = req.body;
    const newUser = new User(userData);
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
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
app.get("/exercise", async (req, res) => {
  try {
    console.log("Function being called")
  res.send(await Exercise.find());
  } catch (error) {
    console.log(error)
  }
});

app.get("/food", async (req, res) => {
  try {
    res.send(await Food.find());
  } catch (error) {
    console.log(error)
  }
});

app.get("/user/:id", async (req, res) => {
  console.log("Function being called")
  // it is called id here but its actually the token


  console.log(req.params.id)
  try {
    res.send(await User.find({
      token: req.params.id
    }));
  } catch (error) {
    console.log(error)
  }
});

app.post("/exercise", async (req, res) => {
  try {
    const newExercise = req.body;
    const exercise = new Exercise(newExercise);
    await exercise.save();
    res.send({ message: "New exercise inserted." });
  } catch (error) {
    console.log(error)
  }
});

app.post("/food", async (req, res) => {
  try {
    const newFood = req.body;
  const food = new Food(newFood);
  await food.save();
  res.send({ message: "New food inserted." });
  } catch (error) {
    console.log(error)
  }
});


app.delete("/exercise/:id", async (req, res) => {
  try {
    await Exercise.findByIdAndDelete(req.params.id);
  res.send({ message: "Exercise removed." });
  } catch (error) {
    console.log(error)
  }
});

app.delete("/food/:id", async (req, res) => {
  try {
    await Food.findByIdAndDelete(req.params.id);
  res.send({ message: "Food removed." });
  } catch (error) {
    console.log(error)
  }
});

app.put("/exercise/:id", async (req, res) => {
  try {
    await Exercise.findByIdAndUpdate(req.params.id, req.body);
  res.send({ message: "Exercise updated." });
  } catch (error) {
    console.log(error) 
  }
});

app.put("/food/:id", async (req, res) => {
  try{
    await Food.findByIdAndUpdate(req.params.id, req.body);
  res.send({ message: "Food updated." });
  } catch (error) {
    console.log(error)
  }
});

app.listen(3001, () => {
  console.log("listening on port 3001");
});