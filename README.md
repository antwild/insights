### The Component

We're hoping to improve our user's experience by implementing an attractive "Insights" feature in the report section. These will be used to highlight certain aspects of a user's report, both in terms of what is going well and what can be improved.

Please implement this feature, consuming a subset of a credit report JSON payload in order to conditionally display the on/off track tokens. The component consists of a header, with either a horizontally scrollable list or grid of cards underneath, depending on the current viewport size. Each card is identical but for the pills & text therein.

![image](https://user-images.githubusercontent.com/21218317/76093511-fb1fae00-5fb8-11ea-98eb-2effebc28477.png)

## Getting Started

Clone the repo, then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to be taken to the homepage. Here you will be greeted (as Simon Everything) and will see a button to render the Insights component. Click it!

### Business Logic

The following describes the logic for determining whether or not a particular user is on or off track depending upon their credit report JSON.

**Public information**

Under the `personal` property, then `publicInfo` , if the list `courtAndInsolvencies` has any elements then this insight is "OFF TRACK"

**Credit utilisation**

Under the `accounts` property, if there is an object with the `accountCategory` of `credit_cards` where `overview.balance.amount` is 50% or more of `overview.limit.amount` then this insight is "OFF TRACK".

**Electoral roll**

Under the `personal` property, there is an array called `electoralRoll`, if there is an entry with a `true` value on the `current` property, then this insight is "ON TRACK"

### The Designs

**Small**

![image](https://user-images.githubusercontent.com/21218317/76093511-fb1fae00-5fb8-11ea-98eb-2effebc28477.png)

**Medium**

![image](https://user-images.githubusercontent.com/21218317/76093517-fce97180-5fb8-11ea-8516-9925ff68bbac.png)

**Large**

![image](https://user-images.githubusercontent.com/21218317/76093524-feb33500-5fb8-11ea-8aaa-79ff22b37e7b.png)

**Extra large**

![image](https://user-images.githubusercontent.com/21218317/76093528-01158f00-5fb9-11ea-9b92-cea5910a0e38.png)

> The width of the card is dependent on the screen, and on small and medium screens 2 cards are full visible, with only small amount of the third visible.
>
> The height of the card is dependent on the copy, but all cards should be the same height.

## Folder structure

This task has been created in Typescript and CSS, using next.js. I've also added the classnames package, the cs-clarity font and react-testing-library. Notable folder structure and files for this task are as follows:

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
