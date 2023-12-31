"use client";
import Link from "next/link";
import React, { useEffect, useReducer, useState } from "react";
import { usePathname } from "next/navigation";
import type { PropsWithChildren } from "react";
import { FaCode } from "react-icons/fa";
import {
	NAVIGATION_REDUCER_INITIAL_STATE,
	navigationReducer,
} from "@/reducers";
import { NAVIGATION_ACTIONS } from "@/reducers";
import { navigationData, NavigationItems } from "@/data";

type Props = React.FC<PropsWithChildren & {}>;

export const Navbar: Props = () => {
	const [navItems, setNavItems] = useState<NavigationItems[]>();

	const [state, dispatch] = useReducer(
		navigationReducer,
		NAVIGATION_REDUCER_INITIAL_STATE
	);

	const pathname = usePathname();

	useEffect(() => {
		setNavItems(navigationData);
		dispatch({ type: NAVIGATION_ACTIONS.TOGGLE_ACTIVE, payload: pathname });
	}, [pathname]);

	return (
		<div className="grid grid-cols-1 md:grid-cols-2">
			<div className="flex justify-center md:justify-start mb-4 md:mb-0 text-6xl text-PastelOrange">
				<Link href={`/`}>
					<FaCode />
				</Link>
			</div>
			<ul className="navbar flex justify-center md:justify-end items-center text-2xl gap-6">
				{navItems?.map(item => (
					<li key={item.reducerName}>
						<Link
							className={state?.[item.reducerName].activeClasses}
							href={item.link}
						>
							{item.label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
