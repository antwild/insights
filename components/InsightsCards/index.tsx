import { useState, useEffect } from "react";
import style from "./InsightsCards.module.css";
import insightCardsData from "../../insightCardsData.json";
import { customerTracker } from "../../utils/insights";
import Pill from "../Pill";

const InsightsCard = ({ heading, body, impact, customerData }) => {
	const [isSmallerViewport, setIsSmallerViewport] = useState<boolean>();

	useEffect(() => {
		const handleResize = () => {
			window.innerWidth < 1024
				? setIsSmallerViewport(true)
				: setIsSmallerViewport(false);
		};

		handleResize();

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const onTrackCheck = customerTracker(heading, customerData);

	return (
		<div className={style.cardContainer}>
			<div className={style.pills}>
				<Pill isOnTrack={onTrackCheck} />
				{!isSmallerViewport && <Pill impact={impact} />}
			</div>
			<div>
				<h3 className={style.insightHeader}>{heading}</h3>
				<p className={style.insightDescription}>{body}</p>
			</div>
			{isSmallerViewport && <Pill impact={impact} fullWidth />}
		</div>
	);
};

const InsightsCards = ({ customerData }) => (
	<div className={style.insights}>
		<h1 className={style.heading}>Insights</h1>
		<div className={style.insightsCards}>
			{insightCardsData.map((card) => (
				<InsightsCard
					key={card.heading}
					{...card}
					customerData={customerData}
				/>
			))}
		</div>
	</div>
);

export default InsightsCards;
