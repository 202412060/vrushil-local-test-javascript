import { Inventory } from "./inventory.js";

// Reserve the same SKU and quantity the customer bought last time.
function reorder(inventory, lastOrder) {
  const reservation = inventory.reserve(lastOrder.sku, lastOrder.quantity);
  return { ...reservation, reorderOf: lastOrder.id };
}

function demoInventory() {
  return new Inventory({ 'MUG-01': 10 });
}

export { reorder, demoInventory };
