// Stock levels per SKU. Every reservation goes through reserve().
class Inventory {
  constructor(initialStock) {
    this.stock = new Map(Object.entries(initialStock));
  }

  // Reserve units of a SKU. Each call takes the units again; calling it twice reserves twice.
  reserve(sku, quantity) {
    if (!Number.isInteger(quantity) || quantity <= 0) {
      throw new Error(`quantity must be a positive whole number, got ${quantity}`);
    }
    const available = this.stock.get(sku);
    if (available === undefined) {
      throw new Error(`unknown SKU ${sku}`);
    }
    if (available < quantity) {
      throw new Error(`only ${available} of ${sku} left, cannot reserve ${quantity}`);
    }
    this.stock.set(sku, available - quantity);
    return { sku, quantity };
  }

  release(sku, quantity) {
    this.stock.set(sku, (this.stock.get(sku) ?? 0) + quantity);
  }
}

export { Inventory };
