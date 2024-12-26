const express = require('express');
const { processCommand } = require('../services/commandProcessor');
const router = express.Router();

router.post('/', (req, res) => {
  const { command } = req.body;
  const response = processCommand(command);
  res.json(response);
});

module.exports = router;
