# Shopping Basket Calculator

This is a scalable TypeScript program that calculates the total cost of a shopping basket, dynamically supporting price, currency and discount logic.

<pre> ## 📁 Project Layout ```text shopping-basket/ ├── src/ │ ├── models/ # TypeScript types and interfaces │ ├── offers/ # Offer strategy implementations │ ├── utils/ # Utility functions │ └── index.ts # (Optional) entry point ├── tests/ # Unit tests (mirrors src structure) ├── package.json # Project metadata and dependencies ├── tsconfig.json # TypeScript compiler config ├── jest.config.js # Jest test config ├── .gitignore # Files to ignore in Git └── README.md # Project documentation ``` </pre>

| Folder / File    | Purpose                                                                              |
| ---------------- | ------------------------------------------------------------------------------------ |
| `src/models/`    | Central place for shared types/interfaces like `Item`, `Offer`, or `Currency`.       |
| `src/offers/`    | Contains offer logic classes or functions (e.g., `BuyOneGetOneFree`, `ThreeForTwo`). |
| `src/utils/`     | Reusable functions like `calculateBasketTotal` or `formatPrice`.                     |
| `tests/`         | Mirrors the `src/` structure, containing unit tests.                                 |
| `jest.config.js` | Jest test runner config.                                                             |
| `tsconfig.json`  | TypeScript compiler settings.                                                        |
| `package.json`   | Project metadata, dependencies, and scripts.                                         |
| `.gitignore`     | Files to exclude from version control.                                               |
| `README.md`      | Documentation for your project.                                                      |


## Features

- Dynamically add items and offers
- Built-in support for:
  - No offer
  - Buy One Get One Free
  - Three for Two

## Usage

```bash
npm install
npm start
