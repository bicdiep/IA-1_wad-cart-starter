# Project Rules

## Stack

- Plain JavaScript (ES modules)
- Node.js
- Node built-in test runner
- No runtime dependencies

## Commands

- Run `npm test` to run the test suite.
- Run `npm run format:check` to check formatting.
- All tests and formatting checks must pass before submitting.

## Implementation rules

- Implement `cartTotal(items, options)` in `src/cart.js`.
- Follow the specification in `README.md`.
- Return a number rounded to whole đồng.
- Use `RangeError` for invalid price or quantity cases.

## Never

- Never add runtime dependencies for `cartTotal`.
- Never change the public function signature.
- Never remove or weaken tests just to make them pass.
- Never commit code without reviewing the diff first.
