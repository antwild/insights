const elecRollTrack = (personalData) => personalData.electoralRoll[0].current;

const creditUtilTrack = (accountsData) => {
	const creditCards = accountsData.find(
		(account) => account.accountCategory === "credit_cards"
	);
	const { overview } = creditCards;
	const percentageDiff =
		(100 * overview.balance.amount) / overview.limit.amount;

	return percentageDiff < 50 ? true : false;
};

const publicInfoTrack = (personalData) =>
	personalData.publicInfo.courtAndInsolvencies?.length === 0 ? true : false;

const customerTracker = (title, data) => {
	const { accounts, personal } = data;

	switch (title) {
		case "Public information":
			return publicInfoTrack(personal);
		case "Credit utilisation":
			return creditUtilTrack(accounts);
		case "Electoral roll":
			return elecRollTrack(personal);
		default:
			null;
	}
};

export { customerTracker };
