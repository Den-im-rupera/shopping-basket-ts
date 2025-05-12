# Shopping Basket Calculator

This is a scalable TypeScript program that calculates the total cost of a shopping basket, dynamically supporting price, currency and discount logic.

# Project Layout
shopping-basket/
│
├── src/                      # Source code
│   ├── models/               # TypeScript types and interfaces
│   │   └── item.ts
│   │   └── currency.ts
│   │
│   ├── offers/               # Offer implementations
│   │   └── BuyOneGetOneFree.ts
│   │   └── ThreeForTwo.ts
│   │
│   ├── utils/                # Utility logic
│   │   └── calculator.ts
│   │   └── formatPrice.ts
│   │
│   └── index.ts              # Entry point (if applicable)
│
├── tests/                    # Jest test files
│   ├── models/
│   ├── offers/
│   └── utils/
│
├── .gitignore
├── jest.config.js           # Jest configuration
├── package.json
├── tsconfig.json            # TypeScript configuration
└── README.md

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
