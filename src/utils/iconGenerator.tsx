import React from "react";
import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";

const icons = {
	FaReact: <FaReact />,
	TbBrandNextjs: <TbBrandNextjs />,
	FaNodeJs: <FaNodeJs />,
};

export type AppIconType = keyof typeof icons;

export const iconGenerator = (
	iconName: AppIconType,
	classes: string = ""
): React.ReactNode => {
	const icon = icons[iconName];
	if (icon) {
		return React.cloneElement(icon, {
			className: classes,
		});
	} else {
		return null;
	}
};
