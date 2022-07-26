import { useState, useEffect } from "react";
import style from "./InsightsCards.module.css";
import _insightCardsData from "../../insightCardsData.json";
import { customerTracker } from "../../utils/insights";
import type { CustomerDataProps, PillProps } from "../../types";
import Pill from "../Pill";

type CardProps = {
	heading: string;
	body: string;
	impact: PillProps["impact"];
};

type InsightsCardProps = CustomerDataProps & CardProps;

const InsightsCard = ({
	heading,
	body,
	impact,
	accounts,
	personal,
}: InsightsCardProps): JSX.Element | null => {
	const [isSmallerViewport, setIsSmallerViewport] = useState<boolean>();

	// Monitors the size of the viewport for positioning the Impact pill
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

	// Applies business logic to calculate if on track
	const onTrackCheck = customerTracker(heading, accounts, personal);
	if (onTrackCheck === null) return null;

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

const InsightsCards = ({
	accounts,
	personal,
}: CustomerDataProps): JSX.Element => {
	const insightCardsData = _insightCardsData as CardProps[];

	return (
		<div className={style.insights}>
			<h1 className={style.heading}>Insights</h1>
			<div className={style.insightsCards}>
				{insightCardsData.map((card) => (
					<InsightsCard
						key={card.heading}
						{...card}
						accounts={accounts}
						personal={personal}
					/>
				))}
			</div>
		</div>
	);
};

export default InsightsCards;
