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
- Built mobile first, as the breakpoints given are `min-width`, as I assume the web app would be viewed mostly on mobile (could be wrong!).
- Assumed that there will always be a credit card, even though this is unlikely

## Extras

- Hard Searches card

## Notes before submission

- XL when there are 6 cards
- What do I do if there is no account of 'credit cards' for the Credit utilisation check? (see assumptions)
- Look for and remove any props that are strings inside of curly braces eg, `impact={"medium"}`
- Look out for components or functions that just return and make sure they don't have curly braces
- Layout of the page is based on their layout on the careers page (24px 6%)
- Check what types are and aren't required
- Remove margin-top on `Please wait` when loading
