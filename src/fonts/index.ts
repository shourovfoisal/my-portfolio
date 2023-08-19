import { Poppins, PT_Mono } from "next/font/google";

export const poppins = Poppins({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	fallback: ["sans-serif"],
});

export const mono = PT_Mono({
	weight: ["400"],
	subsets: ["latin"],
	fallback: ["sans-serif"],
});
