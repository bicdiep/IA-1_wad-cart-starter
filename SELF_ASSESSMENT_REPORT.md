# SELF-ASSESSMENT REPORT

Submitted by: 24120247 — Dương Thị Bích Diệp

Total self-assessed score: 90 / 100

| Criterion | Max | Self-assessment | Evidence |
|---|---:|---:|---|
| Behaviour | 30 | 30 | `src/cart.js`; `test/cart.test.js`; `npm test`. The implementation handles the worked example with result `467400`, returns `0` for an empty cart, provides free shipping when the threshold is reached, throws `RangeError` for negative prices, and throws `RangeError` when quantity is not a positive integer. |
| Tests | 20 | 20 | `test/cart.test.js`; contains 5 tests covering the worked example, empty cart, free shipping, negative price, and non-integer quantity. `npm test` runs successfully with 5 tests passing and 0 tests failing. |
| Harness | 20 | 17 | `AGENT.md`; `package.json`; `.github/workflows/ci.yml`; `npm test`; `npm run format:check`. `AGENT.md` contains the stack, commands, and multiple "Never" rules. The local gates for testing and formatting have been successfully verified. A GitHub Actions workflow has been created to run `npm test` and `npm run format:check` on push or pull request, but the repository has not yet been pushed and the CI workflow has not yet been verified on GitHub. |
| Brief | 15 | 13 | `BRIEF.md`; the brief describes the files that may be modified, the `cartTotal` contract, error cases, and the requirement of having no runtime dependencies. |
| AI-LOG.md | 15 | 10 | `AI-LOG.md`; records the use of Antigravity — Gemini 3.6 Flash (Medium) and ChatGPT, including the tasks given to the AI, what was kept, changed, rejected, and what was checked or completed by hand. |

## What I did not manage

At the time of this self-assessment, I have not yet completed the verification that the GitHub Actions CI workflow runs successfully after pushing the repository to GitHub. The `.github/workflows/ci.yml` workflow has been created, and the corresponding gates have been verified locally using `npm test` and `npm run format:check`.

The Brief and AI-LOG were also completed after part of the implementation process rather than being recorded immediately after each task involving AI assistance.

## What I would do differently

I would update the AI-LOG immediately after each task involving AI assistance instead of compiling it after completing the work. This would make the descriptions of changes, rejected suggestions, and manually completed work more accurate and detailed.

I would also set up and verify CI earlier in the development process so that any test or formatting issues could be detected before completing the project.

## Summary

I completed the `cartTotal` implementation, the required tests, the project rules file, the formatting gate, and the GitHub Actions workflow. The remaining step is to push the repository to GitHub and verify that the CI workflow runs successfully.