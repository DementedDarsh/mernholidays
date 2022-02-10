const express = require("express");
const Holiday = require("../models/holidaysModel");
const router = express.Router();

// GET Seed holidays
router.get("/seed", async (req, res) => {
  const seedHolidays = [
    {
      name: "Deepavali",
      celebrated: true,
      description:
        "Diwali is a festival of lights and one of the major festivals celebrated by Hindus, Jains, and Sikhs.",
      tags: ["festival", "celebration"],
    },
    {
      name: "Chinese New Year",
      celebrated: true,
      description:
        "Chinese New Year, also known as the Lunar New Year, is the festival that celebrates the beginning of a new year on the traditional lunisolar and solar Chinese calendar.",
      tags: ["oranges", "celebration"],
    },
    {
      name: "Hari Raya Puasa",
      celebrated: true,
      description:
        "Eid al-Fitr, is the earlier of the two official holidays celebrated within Islam. The religious holiday is celebrated by Muslims worldwide because it marks the end of the month-long dawn-to-sunset fasting of Ramadan.",
      tags: ["religious", "end of fast"],
    },
    {
      name: "St. Patrick's day",
      celebrated: false,
      description:
        "Saint Patrick's Day, or the Feast of Saint Patrick, is a cultural and religious celebration held on 17 March, the traditional death date of Saint Patrick, the foremost patron saint of Ireland.",
      tags: ["irish", "green"],
    },
  ];
  try {
      await Holiday.deleteMany({})
    const createdHolidays = await Holiday.create(seedHolidays);
    res
      .status(200)
      .json({ status: "ok", message: "Seeded Data", data: createdHolidays });
  } catch (error) {
    console.log(error);
  }
});
// GET All Holidays

// POST Create New Holiday

// GET Individual Holiday

// PUT Edit holiday

// DELETE delete holiday

module.exports = router;
