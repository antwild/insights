import { useState } from "react";
import classnames from "classnames";
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
		<div
			className={classnames(
				style.layoutContainer,
				!hasLoaded && style.unLoaded
			)}
		>
			{!!insights && !isLoading && <InsightsCards {...insights} />}
			{!hasLoaded && (
				<div className={style.welcome}>
					<h1>Hello, Mr Everything</h1>
					{isLoading ? (
						<h3 className={style.wait}>Please Wait...</h3>
					) : (
						<button className={style.getInsights} onClick={insightsRequest}>
							Get your insights
						</button>
					)}
				</div>
			)}
		</div>
	);
};

export default Home;
