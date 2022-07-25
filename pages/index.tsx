import { useState } from "react";
import type { NextPage } from "next";
import style from "../styles/Home.module.css";
import { getCustomerInsights } from "../utils/api";
import InsightsCards from "../components/InsightsCards";

const Home: NextPage = () => {
	const [insights, setInsights] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [hasLoaded, setHasLoaded] = useState(false);

	const insightsRequest = async () => {
		setIsLoading(true);
		setInsights(await getCustomerInsights("6107fbe9f14b8b153e05e714"));
		setIsLoading(false);
		setHasLoaded(true);
	};

	return (
		<div className={style.layoutContainer}>
			{isLoading && <h3>Please Wait...</h3>}
			{insights && insights.accounts[0].name && !isLoading && (
				<div className={style.results}>
					<InsightsCards customerData={insights} />
				</div>
			)}
			{!hasLoaded && (
				<button onClick={insightsRequest} disabled={isLoading}>
					Get insights here
				</button>
			)}
		</div>
	);
};

export default Home;
