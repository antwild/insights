import { render, screen } from "@testing-library/react";
import Pill from "../";

const renderPill = (props?: any) => {
	render(<Pill impact="High" isOnTrack fullWidth {...props} />);
};

describe("Pill", () => {
	it("Should render Pill when it has been given the correct props", () => {
		renderPill();
		expect(screen.queryByTestId("pill")).toBeInTheDocument;
	});

	it("Should render the pill with the impact style when impact is truthy", () => {
		renderPill();
		expect(screen.queryByTestId("pill")).toHaveClass("impact");
	});

	it("Should render the pill without both of the onTrack or offTrack styles when impact is truthy", () => {
		renderPill();
		expect(screen.queryByTestId("pill")).not.toHaveClass("onTrack");
		expect(screen.queryByTestId("pill")).not.toHaveClass("offTrack");
	});

	it("Should render the pill with the onTrack style when isOnTrack is true and impact is falsy or not given", () => {
		renderPill({ impact: null });
		expect(screen.queryByTestId("pill")).toHaveClass("onTrack");
	});

	it("Should render the pill with the offTrack style when isOnTrack is false and impact is falsy or not given", () => {
		renderPill({ impact: null, isOnTrack: false });
		expect(screen.queryByTestId("pill")).toHaveClass("offTrack");
	});

	it("Should render the pill with the fullWidth style when fullWidth is true", () => {
		renderPill();
		expect(screen.queryByTestId("pill")).toHaveClass("fullWidth");
	});

	it("Should render the pill without the fullWidth style when fullWidth is false", () => {
		renderPill({ fullWidth: false });
		expect(screen.queryByTestId("pill")).not.toHaveClass("fullWidth");
	});

	it("Should display the value of the impact prop followed by the word 'Impact' when impact is truthy", () => {
		renderPill();
		expect(screen.queryByTestId("pill")).toHaveTextContent("High Impact");
	});

	it("Should display the text 'On Track' when impact is falsy and isOnTrack is true", () => {
		renderPill({ impact: null });
		expect(screen.queryByTestId("pill")).toHaveTextContent("On Track");
	});

	it("Should display the text 'Off Track' when impact is falsy and isOnTrack is false", () => {
		renderPill({ impact: null, isOnTrack: false });
		expect(screen.queryByTestId("pill")).toHaveTextContent("Off Track");
	});
});
