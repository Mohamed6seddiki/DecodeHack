const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));

let cards = [];

app.post("/api/cards", (req, res) => {
  const { location, description, imageBase64, date } = req.body;
  const newCard = { id: Date.now(), location, description, imageBase64, date };
  cards.push(newCard);
  res.json({ success: true });
});

app.get("/api/cards", (req, res) => {
  res.json(cards);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
