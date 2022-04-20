const express = require("express");
const router = express.Router();
const { connection } = require("../connection/database.js");
router.get("/", (req, res) => {
  const sql = "SELECT * FROM phases";

  connection.query(sql, (err, result) => {
    if (err) throw err;

    res.json(result);
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM phases WHERE id = ${id}`;

  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

router.post("/", (req, res) => {
  const sql = "INSERT INTO phases SET ?";
  const phase = {
    date: req.body.date,
    start: req.body.start,
    end: req.body.end,
    hours: req.body.hours,
    quality: req.body.quality,
  };

  connection.query(sql, phase, (err) => {
    if (err) throw err;
    res.json({ message: "Sleep fase created" });
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { date, start, end, hours, quality } = req.body;
  const sql = `UPDATE phases SET date = '${date}', start = '${start}', end = '${end}', hours = '${hours}', quality = '${quality}' WHERE id = ${id}`;

  connection.query(sql, (err) => {
    if (err) throw err;
    res.json({ message: "Test updated" });
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM phases WHERE id = ${id}`;

  connection.query(sql, (err) => {
    if (err) throw err;
    res.json({ message: "Sleep phase deleted" });
  });
});

module.exports = router;
