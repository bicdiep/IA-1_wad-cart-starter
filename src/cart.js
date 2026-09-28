// Implement cartTotal here. See README.md for the specification.
export function cartTotal(items, options = {}) {
  if (!items || items.length === 0) {
    return 0;
  }

  let subtotal = 0;

  for (const item of items) {
    if (
      typeof item.price !== "number" ||
      Number.isNaN(item.price) ||
      item.price < 0
    ) {
      throw new RangeError("price must not be negative.");
    }

    if (
      typeof item.qty !== "number" ||
      !Number.isInteger(item.qty) ||
      item.qty <= 0
    ) {
      throw new RangeError("qty must be a positive integer.");
    }

    subtotal += item.price * item.qty;
  }

  const { vatRate = 0, freeShipFrom = Infinity, shipFee = 0 } = options || {};

  const vat = subtotal * vatRate;
  const shipping = subtotal >= freeShipFrom ? 0 : shipFee;

  return Math.round(subtotal + vat + shipping);
}
