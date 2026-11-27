import { lineTotalCents } from "./pricing.js";

function formatCents(cents) {
  return `$${(cents / 100).toFixed(2)}`;
}

// One printable line per cart item.
function invoiceLines(cart) {
  return cart.lines.map((line) => `${line.sku} x${line.quantity}: ${formatCents(lineTotalCents(line.sku, line.quantity))}`);
}

export { formatCents, invoiceLines };
