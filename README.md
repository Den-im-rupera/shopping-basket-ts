# Shopping Basket Calculator

This is a scalable TypeScript program that calculates the total cost of a shopping basket, dynamically supporting price, currency and discount logic.

## 📁 Project Layout

```text
shopping-basket/
├── node_modules/
├── src/
|   ├── config/
|   |   └── currencies.ts
|   |   └── inventory.ts
│   ├── models/
│   │   └── Currency.ts     
│   │   └── ItemConfig.ts
│   │   └── Offer.ts           
│   ├── offers/               
│   │   └── BuyOneGetOneFree.ts
│   │   └── NoOffer.ts
│   │   └── ThreeForTwo.ts
│   ├── utils/                
│   │   └── calculator.ts
│   │   └── formatPrice.ts
│   └── index.ts              
├── tests/                                # Unit tests
│   └── utils/
│   │   └── BuyOneGetOneFree.test.ts
│   │   └── ThreeForTwo.test.ts                    
│   └── utils/
│   │   └── calculator.test.ts
│   │   └── formatPrice.test.ts
├── package.json              
├── tsconfig.json             
├── jest.config.js            
├── .gitignore                
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
