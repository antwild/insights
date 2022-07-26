import type { AccountsProps } from "./Accounts";
import type { PersonalProps } from "./Personal";

export type CustomerDataProps = {
	accounts: AccountsProps[];
	personal: PersonalProps;
};
