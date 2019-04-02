const express = require("express");
const router = express.Router();

const drivers = [
  { name: "Valterri Bottas", Nationality: "FIN", Car: "Mercedes" },
  { name: "Lewis Hamilton", Nationality: "GBR", Car: "Mercedes" },
  { name: "Max Verstappen", Nationality: "NED", Car: "Red Bull Racing Honda" },
  { name: "Sebastian Vettel", Nationality: "GER", Car: "Ferrari" },
  { name: "Charles Leclerc", Nationality: "MON", Car: "Ferrari" },
  { name: "Kevin Magnussen", Nationality: "DEN", Car: "Haas Ferrari" },
  { name: "Nico Hulkenberg", Nationality: "GER", Car: "Renault" },
  {
    name: "Kimi Raikkonen",
    Nationality: "FIN",
    Car: "Alfa Romeo Racing Ferrari"
  },
  {
    name: "Lance Stroll",
    Nationality: "CAN",
    Car: "Racing Point BWT Mercedes"
  },
  {
    name: "Daniil Kvyat",
    Nationality: "RUS",
    Car: "Scudeira Toro Rosso Honda"
  },
  { name: "Pierre Gasly", Nationality: "FRA", Car: "Red Bull Racing Honda" },
  { name: "Lando Norris", Nationality: "GBR", Car: "Mclaren Renault" },
  {
    name: "Sergio Perez",
    Nationality: "MEX",
    Car: "Racing Point BWT Mercedes"
  },
  {
    name: "Alexander Albon",
    Nationality: "THA",
    Car: "Scudeira Toro Rosso Honda"
  },
  {
    name: "Antonio Giovanazzi",
    Nationality: "ITA",
    Car: "Alfa Romeo Racing Ferrari"
  },
  { name: "George Russell", Nationality: "GBR", Car: "Williams Mercedes" },
  { name: "Robert Kubica", Nationality: "POL", Car: "Williams Mercedes" },
  { name: "Carlos Sainz", Nationality: "SPA", Car: "Mclaren Renault" },
  { name: "Romain Grosjean", Nationality: "FRA", Car: "Haas Ferrari" },
  { name: "Daniel Ricciardo", Nationality: "AUS", Car: "Renault" }
];

router.get("/", (req, res) => {
  res.json(drivers);
});

module.exports = router;
