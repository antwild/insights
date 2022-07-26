import { useState } from "react";
import style from "../styles/Home.module.css";
import { getCustomerInsights } from "../utils/api";
import type { NextPage } from "next";
import type { CustomerDataProps } from "../types";
import InsightsCards from "../components/InsightsCards";

const Home: NextPage = () => {
	const [insights, setInsights] = useState<CustomerDataProps>();
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
			{!!insights && !isLoading && (
				<div className={style.results}>
					<InsightsCards {...insights} />
				</div>
			)}
			{!hasLoaded && (
				<button onClick={insightsRequest} disabled={isLoading}>
					Get insights here
				</button>
			)}
			{isLoading && <h3>Please Wait...</h3>}
		</div>
	);
};

export default Home;
