import { CardDataType } from "@/components/common/TransparentCard";

export const transparentCardData: { [key: string]: CardDataType } = {
  welcomeSection: {
    context: "Introduction",
    title: "React Developer",
    titleNextLine: "From Bangladesh",
    description:
      "I love to develop web applications with the MERN stack. I build complex apps that are incredibly fast, resilient and secure. I am highly skilled in React, NextJS and ExpressJS.",
    linkText: "My Story",
    linkUrl: "/story",
  },
  commitmentSection: {
    context: "Contact",
    title: "Any Type of Query",
    titleNextLine: "& Discussion",
    description:
      "It takes days of communication and understanding to make successful apps. So lets communicate and start your dream project instantly!",
    linkText: "hi@devshourov.com",
    linkUrl: "mailto:hi@devshourov.com",
  },
  portfolioSection: {
    context: "Portfolio",
    title: "Selected Projects",
    titleNextLine: "From the Previous Ones",
    description: "Handpicked projects that represent my work quality.",
    linkText: "Explore More",
    linkUrl: "/works",
  },
  blogsSection: {
    context: "Blog",
    title: "What's New?",
    titleNextLine: "My Blog and News",
  },
  contactSection: {
    title: "Got a Project?",
    titleNextLine: "Let's Talk",
    description: "Just send me an email and I will reach you within no time!",
    linkText: "hi@devshourov.com",
    linkUrl: "mailto:hi@devshourov.com",
  },
};
