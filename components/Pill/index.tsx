import classnames from "classnames";
import style from "./Pill.module.css";
import type { PillProps } from "../../types";

const Pill = ({ isOnTrack, impact, fullWidth }: PillProps): JSX.Element => {
	const onTrackLanguage = isOnTrack ? "On Track" : "Off Track";

	return (
		<div
			className={classnames(
				style.container,
				impact ? style.impact : isOnTrack ? style.onTrack : style.offTrack,
				fullWidth && style.fullWidth
			)}
			data-testid="pill"
		>
			{impact ? `${impact} Impact` : onTrackLanguage}
		</div>
	);
};

export default Pill;
