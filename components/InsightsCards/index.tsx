import { useState, useEffect } from "react";
import style from "./InsightsCards.module.css";
import _insightCardData from "../../insightCardData.json";
import { customerTracker } from "../../utils/insights";
import type { CustomerDataProps, PillProps } from "../../types";
import Pill from "../Pill";

type CardProps = {
	heading: string;
	body: string;
	impact: PillProps["impact"];
};

const InsightsCard = ({
	heading,
	body,
	impact,
	accounts,
	personal,
}: CustomerDataProps & CardProps): JSX.Element | null => {
	const [isSmallerViewport, setIsSmallerViewport] = useState<boolean>();

	// Monitors the size of the viewport for positioning the 'Impact' pill
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

	// Applies business logic to calculate if on/off track
	const onTrackCheck = customerTracker(heading, accounts, personal);

	if (onTrackCheck === null) return null;

	return (
		<div className={style.cardContainer} data-testid="insightsCard">
			<div className={style.pills} data-testid="upperPills">
				<Pill isOnTrack={onTrackCheck} />
				{!isSmallerViewport && <Pill impact={impact} />}
			</div>
			<div>
				<h3 className={style.insightHeader} data-testid="insightsHeader">
					{heading}
				</h3>
				<p
					className={style.insightDescription}
					data-testid="insightsDescription"
				>
					{body}
				</p>
			</div>
			{isSmallerViewport && <Pill impact={impact} fullWidth />}
		</div>
	);
};

const InsightsCards = ({
	accounts,
	personal,
}: CustomerDataProps): JSX.Element => {
	const insightCardData = _insightCardData as CardProps[];

	return (
		<div className={style.insights} data-testid="insightsCards">
			<h1 className={style.heading}>Insights</h1>
			<div className={style.insightsCards}>
				{insightCardData.map((card) => (
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
