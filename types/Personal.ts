import type { AddressProps, FinancialProps } from "./NestedItems";

export type ElectoralRollProps = {
	address: AddressProps;
	contextKey: string;
	current: boolean;
	endDateString: string;
	name: string;
	startDateString: string;
	supplied: string;
};

export type PublicInfoProps = {
	courtAndInsolvencies: {
		name: string;
		dob: string;
		courtName: string;
		contextKey: string;
		dischargeDate: string;
		caseReference: string;
		amount: FinancialProps;
		address: AddressProps;
		type: {
			code: string;
			details: {
				catDesc: string;
			};
		};
		startDate: string;
	}[];
};

export type PersonalProps = {
	electoralRoll: ElectoralRollProps[];
	publicInfo: PublicInfoProps;
};
