# Brief — cartTotal

## Goal

Implement `cartTotal(items, options)` according to the specification in `README.md`.

## Files allowed to change

- `src/cart.js`
- `test/cart.test.js`
- `package.json` and `package-lock.json` only when required for the project harness
- `AGENTS.md`
- `BRIEF.md`
- `AI-LOG.md`
- `.github/workflows/ci.yml`
- `SELF_ASSESSMENT_REPORT.md`

Do not modify unrelated files.

## Contract

`cartTotal(items, options)` must:

- Calculate the subtotal by summing `price * qty` for every item.
- Apply VAT using `vatRate`.
- Apply `shipFee` when the subtotal is below `freeShipFrom`.
- Apply free shipping when the subtotal is greater than or equal to `freeShipFrom`.
- Return the final total as a number rounded to whole đồng.
- Return `0` for an empty cart without VAT or shipping.

## Error cases

`cartTotal` must throw `RangeError` when:

- an item's price is negative (< 0);
- an item's quantity is not a positive integer.

## Constraints

- Use plain JavaScript.
- Keep the public function signature unchanged.
- Do not add runtime dependencies.
- Do not change the required behavior to make tests pass.
- Keep the implementation simple and consistent with the starter repository.
