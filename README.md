Thank you for taking the time to look over my technical test!

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to be taken to the homepage. Here you will be greeted (as Simon Everything)

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Assumptions:

- Customer ID argument is hardcoded for the API call
- Built mobile first, as the breakpoints given are `min-width`, as I assume the web app would be viewed mostly on mobile (could be wrong!).
- Assumed that there will always be a credit card, even though this is unlikely
- Pills could be used for other components, so it's created as it's own component

## Notes to consider:

- Could also have used `grid-template-area` and a media query for placing the `Impact` pill, but went this way to display knowledge of `useEffect`. Also, wanted to create a test for the position of the `Impact` pill.
- The user ID for the API call and 'Mr Everything' is hardcoded on the home page, but would typically come from the logged in user's details in the real world.

## Extras

- Hard Searches card

## Notes before submission

- Comment the business logic functions
- Error handling the API call
- XL when there are 6 cards
- What do I do if there is no account of 'credit cards' for the Credit utilisation check? (see assumptions)

- Layout of the page is based on their layout on the careers page (24px 6%)
