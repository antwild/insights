// API calls
const getCustomerInsights = async (customerId: string) => {
	const insights = await fetch(
		`https://api.jsonbin.io/v3/b/${customerId}?meta=false`
	)
		.then((result) => result.json())
		.then((data) => data);
	return insights;
};

export { getCustomerInsights };
