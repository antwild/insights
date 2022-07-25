This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Assumptions:

- Customer ID argument is hardcoded for the API call
- Built desktop first, as the breakpoints given are `min-width`. Breakpoints with `max-width` would have suggested mobile first.
- Assumed that there will always be a credit card, even though this is unlikely

## Extras

- Hard Searches card

## Notes before submission

- Delete unused fonts
- What do I do if there is no account of 'credit cards' for the Credit utilisation check? (see assumptions)
