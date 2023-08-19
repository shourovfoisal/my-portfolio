import { iconGenerator } from "@/utils";
import { AppIconType } from "@/utils/iconGenerator";
import React, { PropsWithChildren } from "react";

export type RegularCardDataType = {
	iconName: AppIconType;
	title: string;
	numberOfProjects: number;
};

type Props = React.FC<PropsWithChildren & RegularCardDataType>;

export const RegularCard: Props = ({ iconName, title, numberOfProjects }) => {
	return (
		<div className="aspect-square relative bg-BlackTan hover:bg-DarkerPastelOrange">
			<div className="absolute top-1/2 grid grid-cols-1 md:grid-cols-3 text-LightPastelOrange">
				<div className="col-span-1 md:col-span-1 pt-2 text-4xl">
					{iconGenerator(iconName, "mx-auto")}
				</div>
				<div className="col-span-1 md:col-span-2">
					<div className="w-1/2">
						<h2 className="text-3xl leading-10">{title}</h2>
						<p className="mt-6">{numberOfProjects} Projects</p>
					</div>
				</div>
			</div>
		</div>
	);
};
