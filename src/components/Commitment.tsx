import React, { PropsWithChildren } from "react";
import { TransparentCard } from "@/components/common";
import { transparentCardData } from "@/data";

type Props = React.FC<PropsWithChildren & {}>;

export const Commitment: Props = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3">
			<div className="col-span-1">
				<TransparentCard {...transparentCardData.commitmentSection} />
			</div>
			<div className="col-span-2"></div>
		</div>
	);
};
