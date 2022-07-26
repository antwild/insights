// Business logic helpers for Insights
import type { CustomerDataProps } from "../types";

// Calculates on or off track for Electoral roll card
const elecRollTrack = (personalData: CustomerDataProps["personal"]): boolean =>
	personalData.electoralRoll[0].current;

// Calculates on or off track for Credit utilisation card
const creditUtilTrack = (
	accountsData: CustomerDataProps["accounts"]
): boolean | null => {
	const creditCards = accountsData.find(
		(account) => account.accountCategory === "credit_cards"
	);
	if (!creditCards) return null;

	const { overview } = creditCards;
	const percentageDiff =
		(100 * overview.balance.amount) / overview.limit.amount;

	return percentageDiff < 50 ? true : false;
};

// Calculates on or off track for Public information card
const publicInfoTrack = (
	personalData: CustomerDataProps["personal"]
): boolean =>
	personalData.publicInfo.courtAndInsolvencies.length === 0 ? true : false;

// Uses the appropriate function based on which card is being rendered
const customerTracker = (
	heading: string,
	accounts: CustomerDataProps["accounts"],
	personal: CustomerDataProps["personal"]
): boolean | null => {
	switch (heading) {
		case "Public information":
			return publicInfoTrack(personal);
		case "Credit utilisation":
			return creditUtilTrack(accounts);
		case "Electoral roll":
			return elecRollTrack(personal);
		default:
			return null;
	}
};

export { customerTracker };
