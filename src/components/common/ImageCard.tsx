import Image from "next/image";
import React, { PropsWithChildren } from "react";

export type ImageCardDataType = { image: any };

type Props = React.FC<PropsWithChildren & ImageCardDataType>;

export const ImageCard: Props = ({ image }) => {
	return (
		<div className="w-full bg-NightBlack flex flex-col gap-16 md:gap-6 xl:gap-16 aspect-[1/1.2] overflow-hidden cursor-pointer">
			<div className="flex justify-between items-center text-LightPastelOrange p-10 pb-0 md:p-5 md:pb-0 lg:p-10 lg:pb-0">
				<h2 className="text-3xl md:text-2xl xl:text-3xl">Movies Zone</h2>
				<h3 className="text-sm md:text-xs xl:text-sm flex gap-2">
					<span>Movies,</span>
					<span>Audiences</span>
				</h3>
			</div>
			<div>
				<Image src={image} alt="Website 1" />
			</div>
		</div>
	);
};
