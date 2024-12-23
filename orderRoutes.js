const express = require('express');
const router = express.Router();
const orderService = require('./orderService');

router.post('/orders', (req, res) => {
  try {
    const { productName, quantity, pricePerUnit } = req.body;
    const order = orderService.placeOrder(productName, quantity, pricePerUnit);
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/orders/:id', (req, res) => {
  try {
    const order = orderService.getOrderSummary(req.params.id);
    res.json(order);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.get('/revenue', (req, res) => {
  const totalRevenue = orderService.calculateTotalRevenue();
  res.json({ totalRevenue });
});

module.exports = router;

