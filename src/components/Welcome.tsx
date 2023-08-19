import Link from "next/link";
import React from "react";
import type { PropsWithChildren } from "react";
import { FaFacebook, FaGithubAlt, FaLinkedin } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import { TransparentCard } from "@/components/common";
import { transparentCardData } from "@/data";

type Props = React.FC<PropsWithChildren & {}>;

export const Welcome: Props = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3">
			<div className="col-span-2">
				<h1 className="text-8xl font-semibold text-LightPastelOrange">
					Shourov <span className="block">Foisal.</span>
				</h1>
				<hr className="w-14 ml-1 mt-4 border-t-8 border-t-PastelOrange" />
				<ul className="social-navbar ml-1 mt-32 text-xl flex items-center gap-5 text-LightPastelOrange">
					<li>
						<Link
							target="_blank"
							href={`https://www.facebook.com/shourovfoisal123/`}
						>
							<FaFacebook />
						</Link>
					</li>
					<li>
						<Link target="_blank" href={`https://github.com/shourovfoisal`}>
							<FaGithubAlt />
						</Link>
					</li>
					<li>
						<Link
							target="_blank"
							href={`https://www.linkedin.com/in/shourovfoisal/`}
						>
							<FaLinkedin />
						</Link>
					</li>
					<li>
						<Link target="_blank" href={`mailto:shourovcseruet@gmail.com`}>
							<HiMail />
						</Link>
					</li>
				</ul>
			</div>
			<div className="col-span-1 flex items-center">
				<TransparentCard {...transparentCardData.welcomeSection} />
			</div>
		</div>
	);
};
