const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { PrismaClient } = require("@prisma/client");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("ACE AutoCare Backend Running");
});

app.post("/api/bookings", async (req, res) => {
  try {

    const {
      fullName,
      phone,
      carBrand,
      service,
      date,
      message,
    } = req.body;

    const booking = await prisma.booking.create({
      data: {
        fullName,
        phone,
        carBrand,
        service,
        date: new Date(date),
        message,
      },
    });

    res.status(201).json({
      message: "Booking created successfully",
      booking,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Something went wrong",
    });

  }
});

app.get("/api/bookings", async (req, res) => {
  try {

    const bookings = await prisma.booking.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).json(bookings);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Failed to fetch bookings",
    });

  }
});

app.post("/api/signup", async (req, res) => {

  try {

    const { fullName, email, password } = req.body;

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {

      return res.status(400).json({
        message: "User already exists",
      });

    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({
      message: "Signup successful",
      user,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server error",
    });

  }

});
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});