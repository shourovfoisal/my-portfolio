import React, { PropsWithChildren } from "react";
import { TransparentCard } from ".";
import { data } from "@/data/transparentCard";

type Props = React.FC<PropsWithChildren & {}>;

export const Commitment: Props = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3">
			<div className="col-span-1">
				<TransparentCard {...data.commitmentSection} />
			</div>
			<div className="col-span-2"></div>
		</div>
	);
};
