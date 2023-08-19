export type NavigationItems = {
	label: string;
	link: string;
	reducerName: string;
};

export const navigationData: NavigationItems[] = [
	{ label: "Services", link: "/services", reducerName: "services" },
	{ label: "Works", link: "/works", reducerName: "works" },
	{ label: "Blog", link: "/blog", reducerName: "blog" },
];
