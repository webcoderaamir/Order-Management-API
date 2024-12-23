const orders = [];

function generateOrderId() {
  return Math.random().toString(36).substr(2, 9);
}

function calculateDiscount(totalAmount, quantity) {
  let discount = 0;
  if (totalAmount > 10000) {
    discount += totalAmount * 0.1;
  }
  if (quantity > 5) {
    discount += 500;
  }
  return discount;
}

function placeOrder(productName, quantity, pricePerUnit) {
  if (quantity <= 0 || pricePerUnit <= 0) {
    throw new Error('Invalid quantity or price');
  }

  const totalAmount = quantity * pricePerUnit;
  const discount = calculateDiscount(totalAmount, quantity);
  const finalAmount = totalAmount - discount;

  const order = {
    id: generateOrderId(),
    productName,
    quantity,
    pricePerUnit,
    totalAmount,
    discount,
    finalAmount,
    timestamp: new Date()
  };

  orders.push(order);
  return order;
}

function getOrderSummary(orderId) {
  const order = orders.find(o => o.id === orderId);
  if (!order) {
    throw new Error('Order not found');
  }
  return order;
}

function calculateTotalRevenue() {
  return orders.reduce((total, order) => total + order.finalAmount, 0);
}

module.exports = {
  placeOrder,
  getOrderSummary,
  calculateTotalRevenue
};

