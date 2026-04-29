// Level 08 — Nested object access and extraction
// TODO: Given a nested object, assign 5 depth-1 and 5 depth-2 properties to descriptive variables.
// Depth-1 properties
const orderId = order.id;
const orderStatus = order.status;
const orderDate = order.placedAt;
const isGiftOrder = order.isGift;
const shippingType = order.shippingMethod;

// Depth-2 (and deeper) properties
const customerName = order.customer.name;
const customerEmail = order.customer.contact.email;
const customerCity = order.customer.address.city;
const orderSubtotal = order.totals.subtotal;
const orderTotal = order.totals.total;

// Export one of the variables as the default
export default customerName;

const order = {
  id: 1023,
  status: "processing",
  placedAt: "May 4, 2026",
  isGift: false,
  shippingMethod: "ground",
  customer: {
    name: "Ava Morales",
    contact: {
      email: "ava.morales@example.com",
      phone: "555-0123",
    },
    address: {
      street: "123 Main St",
      city: "Springfield",
      state: "IL",
    },
  },
  items: [
    { id: "p1", name: "T-shirt", qty: 2, price: 19.99 },
    { id: "p2", name: "Coffee Mug", qty: 1, price: 9.5 },
    { id: "p3", name: "Sticker Pack", qty: 3, price: 2.5 },
  ],
  totals: {
    subtotal: 74.97,
    tax: 6.0,
    total: 80.97,
  },
};

const id = order.id;
