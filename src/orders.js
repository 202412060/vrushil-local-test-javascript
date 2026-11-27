import { lineTotalCents } from "./pricing.js";

// Reserve stock for every cart line and return the order total in cents.
function placeOrder(inventory, cart) {
  const reserved = [];
  try {
    for (const line of cart.lines) {
      reserved.push(inventory.reserve(line.sku, line.quantity));
    }
  } catch (err) {
    for (const r of reserved) {
      inventory.release(r.sku, r.quantity);
    }
    throw err;
  }
  const totalCents = cart.lines.reduce((sum, line) => sum + lineTotalCents(line.sku, line.quantity), 0);
  return { totalCents, lines: reserved.length };
}

// Free shipping from $50.
function shippingCents(cart) {
  const subtotal = cart.lines.reduce((sum, line) => sum + lineTotalCents(line.sku, line.quantity), 0);
  return subtotal >= 5000 ? 0 : 499;
}

export { placeOrder, shippingCents };
