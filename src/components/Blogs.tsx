import React, { PropsWithChildren } from "react";
import { TransparentCard } from "@/components/common";
import { transparentCardData } from "@/data";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

type Props = React.FC<PropsWithChildren & {}>;

export const Blogs: Props = () => {
	const blogPosts = [
		{
			date: "Feb 02",
			category: "Typescript",
			title: "Fundamentals of typescript",
			url: "fundamentals-of-typescript",
		},
		{
			date: "Mar 03",
			category: "Node.js",
			title: "What is Node.js really?",
			url: "what-is-node-js-really",
		},
		{
			date: "Apr 04",
			category: "React",
			title: "Context API in depth",
			url: "context-api-in-depth",
		},
	];

	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2">
				<div className="col-span-1">
					<div className="w-3/4">
						<TransparentCard {...transparentCardData.blogsSection} />
					</div>
				</div>
				<div className="col-span-1">
					{blogPosts?.map(({ date, category, title, url }, idx) => (
						<>
							<div className="flex items-center py-6" key={url}>
								<h3 className="flex-[3] text-xs text-ashGray">
									{date} . {category}
								</h3>
								<h4 className="flex-[6] text-lg text-LightPastelOrange">
									{title}
								</h4>
								<Link
									className="flex-[1] text-PastelOrange"
									href={`blog/${url}`}
								>
									<span>
										<FaArrowRight className="ml-auto" />
									</span>
								</Link>
							</div>
							{idx + 1 < blogPosts.length && <hr className="border-BlackTan" />}
						</>
					))}
				</div>
			</div>
		</>
	);
};
