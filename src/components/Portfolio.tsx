import { PropsWithChildren } from "react";
import { TransparentCard } from "@/components/common";
import { transparentCardData } from "@/data";
import { ImageCard } from "@/components/common";
import website_1 from "@/../public/images/website_1.png";

type Props = React.FC<PropsWithChildren & {}>;

export const Portfolio: Props = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
			<div className="col-span-1">
				<div className="flex flex-col gap-10 lg:gap-20">
					<TransparentCard {...transparentCardData.portfolioSection} />
					<ImageCard image={website_1} />
				</div>
			</div>
			<div className="col-span-1">
				<div className="ml-auto flex flex-col gap-10 lg:gap-20">
					<ImageCard image={website_1} />
					<ImageCard image={website_1} />
				</div>
			</div>
		</div>
	);
};
