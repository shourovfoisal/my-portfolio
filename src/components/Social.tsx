import Link from "next/link";
import React, { PropsWithChildren } from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

type Props = {};

export const Social: React.FC<PropsWithChildren<Props>> = () => {
  return (
    <ul className="social-navbar text-md flex items-center gap-7 text-white">
      <li className="bg-white dark:bg-[#1877f2] dark:text-white text-slate-400 hover:text-white hover:bg-[#1877f2] transition-all h-6 w-6 rounded-lg shadow-md">
        <Link
          className="flex justify-center items-center h-full w-full"
          target="_blank"
          href="https://www.facebook.com/shourovfoisal123/"
        >
          <FaFacebookF />
        </Link>
      </li>
      <li className="bg-white dark:bg-[#6e5494] dark:text-white text-slate-400 hover:text-white hover:bg-[#6e5494] transition-all h-6 w-6 rounded-lg shadow-md">
        <Link
          className="flex justify-center items-center h-full w-full"
          target="_blank"
          href="https://github.com/shourovfoisal"
        >
          <FaGithub />
        </Link>
      </li>
      <li className="bg-white dark:bg-[#0a66c2] dark:text-white text-slate-400 hover:text-white hover:bg-[#0a66c2] transition-all h-6 w-6 rounded-lg shadow-md">
        <Link
          className="flex justify-center items-center h-full w-full"
          target="_blank"
          href="https://www.linkedin.com/in/shourovfoisal/"
        >
          <FaLinkedinIn />
        </Link>
      </li>
      <li className="bg-white dark:bg-[#ea4335] dark:text-white text-slate-400 hover:text-white hover:bg-[#ea4335] transition-all h-6 w-6 rounded-lg shadow-md">
        <Link
          className="flex justify-center items-center h-full w-full"
          target="_blank"
          href="mailto:shourovcseruet@gmail.com"
        >
          <SiGmail />
        </Link>
      </li>
    </ul>
  );
};
