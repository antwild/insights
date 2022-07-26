import type { AddressProps, FinancialProps } from "./NestedItems";

export type AccountsProps = {
	accountCategory: "credit_cards" | "current_accounts";
	accountNumber: string;
	address: AddressProps;
	contentKey: string;
	displayName: string;
	key: string;
	name: string;
	overview: {
		lastUpdated: string;
		utilization: number;
		balance: FinancialProps;
		frequency: string;
		limit: FinancialProps;
		accountOpened: string;
	};
	paymentHistory: {
		month: number;
		paymentStatus: string;
		year: number;
	}[];
	status: string;
	supplierName: string;
};
