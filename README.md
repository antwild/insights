Thank you for taking the time to look over my technical test for ClearScore!

## Getting Started

Clone the repo, then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to be taken to the homepage. Here you will be greeted (as Simon Everything) and will see a button to render the Insights component. Click it!

## Assumptions:

- Assumed that any JSON that is required to run the business logic against ,such as the `courtAndInsolvencies` object within `personal.publicInfo`, will always be present in the JSON and in this case, would return an empty array if there were no results.

- I've assumed that the on/off track and impact pills could be used for other components (such as a similar card on another feature), so it's been created as it's own component.

## Notes to consider:

- As in the details of the readme, I was interested in using a component showcase framework to match what is used at ClearScore. I began to look into `Storybook` to understand how this could work, however I am not familiar with the tool. I therefore chose the option of demo through this app instead as for the interest of time, wanted to demonstrate the skills that I have, rather than ones that I would have learnt on the fly such as using `Storybook`. However, I am always interested in learning new skills and technologies and would, with more time, have been excited to dive into `Storybook` and get it up and running!

- The designs have been built with a mobile (smallest display) first approach.

- I could have used `grid-template-area` and a media query for placing the `Impact` pill, but went the way I did to display knowledge of `useEffect`. Also, wanted to create a test for the position of the `Impact` pill, which would have been trickier through using `grid-template-area`.

- The user ID for the API call and the "Hello Mr Everything" text is hardcoded on the home page. Typically, they would come from the logged in user's details in the real world for many reasons, but most importantly, security.

- I wanted to make the API call to display the insights when the "user" requested them, hence the "Get your insights" button.

- The layout of the page is based on the layout on the ClearScore careers page (24px 6%)

## Folder structure

This task has been created in Typescript, using next.js. I've also added the classnames package and react-testing-library. Notable folder structure and files for this task are as follows:

```
├── components
│    ├── InsightsCards
│    ├── ├── __tests__
│    │   │   ├── customerData.json
│    │   │   └── InsightsCards.unit.tests
│    │   ├── index.tsx
│    │   └── InsightsCards.module.css
│    └── Pill
│        ├── __tests__
│        │   └── Pill.unit.tests
│        ├── index.tsx
│        └── Pill.module.css
├── pages
│    └── index.tsx
├── public / fonts / cs-clarity
│    ├── cs-clarity-bold.ttf
│    └── cs-clarity-regular.ttf
├── styles
│    └── Home.module.css
├── types
│    ├── Accounts.ts
│    ├── CustomerData.ts
│    ├── index.ts
│    ├── NestedItems.ts
│    ├── Personal.ts
│    └── Pill.ts
├── utils
│    ├── api.tsx
│    └── insights.tsx
├── globals.css
└── insightCardData.json
```
