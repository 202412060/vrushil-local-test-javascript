// Prices are integer cents everywhere in this service.
const UNIT_PRICE_CENTS = {
  "MUG-01": 1250,
  "TEE-01": 2400,
  "CAP-01": 1800,
};

function unitPriceCents(sku) {
  const price = UNIT_PRICE_CENTS[sku];
  if (price === undefined) {
    throw new Error(`no price for ${sku}`);
  }
  return price;
}

// Total for one cart line, in cents.
function lineTotalCents(sku, quantity) {
  return unitPriceCents(sku) * quantity;
}

export { unitPriceCents, lineTotalCents };
