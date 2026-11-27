import { Inventory } from "./inventory.js";

// Reserve stock and tell the warehouse; retry up to 3 times if anything fails.
async function reserveAndNotify(inventory, warehouse, sku, quantity) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const reservation = inventory.reserve(sku, quantity);
      await warehouse.notify(reservation);
      return reservation;
    } catch (err) {
      if (attempt === 3) {
        throw err;
      }
    }
  }
}

function newInventory(stock) {
  return new Inventory(stock);
}

export { reserveAndNotify, newInventory };
