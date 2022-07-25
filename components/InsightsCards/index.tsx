import style from "./InsightsCards.module.css";
import { customerTracker } from "../../utils/insights";
import Pill from "../Pill";

const InsightsCard = ({ title, customer }) => {
	const onTrackCheck = customerTracker(title, customer);
};

const InsightsCards = ({ customerData }) => {
	const cardTitles = [
		"Public information",
		"Credit utilisation",
		"Electoral roll",
	];

	return (
		<>
			{cardTitles.map((title) => (
				<InsightsCard key={title} title={title} customer={customerData} />
			))}
		</>
	);
};

export default InsightsCards;
