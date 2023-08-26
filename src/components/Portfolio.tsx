import { PropsWithChildren } from "react";
import { TransparentCard } from "@/components/common";
import { transparentCardData } from "@/data";

type Props = React.FC<PropsWithChildren & {}>;

export const Portfolio: Props = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2">
			<div className="col-span-1">
				<TransparentCard {...transparentCardData.portfolioSection} />
			</div>
			<div className="col-span-1 flex items-center"></div>
		</div>
	);
};
