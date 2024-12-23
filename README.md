# Order Management System

## Overview

This is a backend application that simulates an Order Management System with dynamic discount logic. The system provides RESTful APIs for managing orders and calculating revenue. It's built using Node.js and Express.js, with an in-memory database for storing order data.

Key features:
- Place new orders
- Retrieve order summaries
- Calculate total revenue
- Apply dynamic discounts based on order amount and quantity

## Setup and Usage

### Prerequisites

- Node.js (v14 or later)
- npm (usually comes with Node.js)
 

1. Place an Order
Method: POST
URL: http://localhost:3000/api/orders
Headers: Content-Type: application/json

Body (raw, JSON):

{
  "productName": "Laptop",
  "quantity": 6,
  "pricePerUnit": 2000
}


2. Get Order Summary
Method: GET
URL: http://localhost:3000/api/orders/{orderId}
Replace {orderId} with the id from the order placed earlier.


3. Calculate Total Revenue
Method: GET
URL: http://localhost:3000/api/revenue


Extra Test Cases for Discounts:


No Discount:

{
  "productName": "Book",
  "quantity": 2,
  "pricePerUnit": 500
}


10% Discount (total > 10,000):

{
  "productName": "Smartphone",
  "quantity": 3,
  "pricePerUnit": 4000
}


Both Discounts (total > 10,000, quantity > 5):

{
  "productName": "Tablet",
  "quantity": 7,
  "pricePerUnit": 1500
}


Steps:

Place an order and note the id.
Use the id to test the Order Summary.
Check Total Revenue anytime to see the updated revenue.