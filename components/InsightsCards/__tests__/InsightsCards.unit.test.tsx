import { render, screen, within } from "@testing-library/react";
import customerData from "./customerData.json";
import insightCardData from "../../../insightCardData.json";
import InsightsCards from "../";

const renderInsightsCards = (props?: any) => {
	render(<InsightsCards {...customerData} {...props} />);
};

describe("InsightsCards", () => {
	it("Should render InsightsCards when it has been given the correct props", () => {
		renderInsightsCards();
		expect(screen.queryByTestId("insightsCards")).toBeInTheDocument;
	});

	it("Should render the correct number of cards", () => {
		renderInsightsCards();
		const renderedCards = screen.queryAllByTestId("insightsCard");
		expect(renderedCards.length).toBe(insightCardData.length);
	});

	it("Should render the correct header for each card", () => {
		renderInsightsCards();
		const renderedHeaders = screen.queryAllByTestId("insightsHeader");

		for (const header in renderedHeaders) {
			expect(renderedHeaders[header].textContent).toBe(
				insightCardData[header].heading
			);
		}
	});

	it("Should render the correct description for each card", () => {
		renderInsightsCards();
		const renderedDescriptions = screen.queryAllByTestId("insightsDescription");

		for (const desc in renderedDescriptions) {
			expect(renderedDescriptions[desc].textContent).toBe(
				insightCardData[desc].body
			);
		}
	});

	it("Should render one pill at the top of the card when the viewport is under 1024px", () => {
		window.innerWidth = 1000;
		renderInsightsCards();
		const upperPillContainer = screen.queryAllByTestId("upperPills")[0];
		const allRenderedPills = screen.queryAllByTestId("pill").length;
		const upperPillCount =
			within(upperPillContainer).queryAllByTestId("pill").length;

		// Two pills rendered per card
		expect(allRenderedPills).toBe(insightCardData.length * 2);
		// One pill at the top of a card
		expect(upperPillCount).toBe(1);
	});

	it("Should render two pills at the top of the card when the viewport is 1024px or over", () => {
		window.innerWidth = 2000;
		renderInsightsCards();
		const upperPillContainer = screen.queryAllByTestId("upperPills")[0];
		const allRenderedPills = screen.queryAllByTestId("pill").length;
		const upperPillCount =
			within(upperPillContainer).queryAllByTestId("pill").length;

		// Two pills rendered per card
		expect(allRenderedPills).toBe(insightCardData.length * 2);
		// Two pills at the top of a card
		expect(upperPillCount).toBe(2);
	});
});
