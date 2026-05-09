const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { PrismaClient } = require("@prisma/client");

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
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});