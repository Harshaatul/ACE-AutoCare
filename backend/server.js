const authMiddleware = require("./middleware/authMiddleware");
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



/* =========================
   CREATE BOOKING
========================= */

app.post(
  "/api/bookings",
  authMiddleware,
  async (req, res) => {

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
          status: "Pending",
          userId: req.user.userId,
          
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

  }
);



/* =========================
   GET USER BOOKINGS
========================= */

app.get(
  "/api/bookings",
  authMiddleware,
  async (req, res) => {

    try {

      const bookings = await prisma.booking.findMany({

        where: {
          userId: req.user.userId,
        },

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

  }
);



/* =========================
   SIGNUP
========================= */

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



/* =========================
   LOGIN
========================= */

app.post("/api/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {

      return res.status(400).json({
        message: "Invalid email or password",
      });

    }

    const isPasswordValid = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordValid) {

      return res.status(400).json({
        message: "Invalid email or password",
      });

    }

    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
      },
      "secretkey",
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server error",
    });

  }

});



/* =========================
   SERVER
========================= */

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});