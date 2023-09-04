import React, { PropsWithChildren } from "react";
import { FaCode } from "react-icons/fa";

type Props = React.FC<PropsWithChildren & {}>;

export const Footer: Props = () => {
	return (
		<div>
			<div className="flex justify-center text-6xl text-PastelOrange">
				<FaCode />
			</div>
			<p className="mt-3 text-LightPastelOrange text-center">
				Thanks for scrolling
			</p>
			<p className="mt-3 text-LightPastelOrange text-center">
				Copyright &copy;2023 Shourov Foisal
			</p>
		</div>
	);
};
