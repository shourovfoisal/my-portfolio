import { mono } from "@/fonts";
import Link from "next/link";
import React, { PropsWithChildren } from "react";
import { FaArrowRight } from "react-icons/fa";

export type CardDataType = {
  context?: string;
  title: string;
  titleNextLine: string;
  description?: string;
  linkText?: string;
  linkUrl?: string;
};

type Props = React.FC<PropsWithChildren & CardDataType>;

export const TransparentCard: Props = ({
  context,
  title,
  titleNextLine,
  description,
  linkText,
  linkUrl,
}) => {
  return (
    <div>
      {context && (
        <h3
          className={
            mono.className + " text-textLightPrimary dark:text-AshGray"
          }
        >
          &mdash; {context}
        </h3>
      )}
      <h2 className="text-3xl leading-10 text-textLightPrimary dark:text-LightPastelOrange mt-6">
        {title} <span className="block">{titleNextLine}</span>
      </h2>
      {description && (
        <h4 className="text-textLightPrimary dark:text-AshGray mt-5 text-sm leading-6">
          {description}
        </h4>
      )}
      {linkText && linkUrl && (
        <Link
          className="mt-10 flex gap-3 items-center text-textLightPrimary dark:text-PastelOrange"
          href={linkUrl}
        >
          <span className="underline">{linkText}</span>
          <span>
            <FaArrowRight />
          </span>
        </Link>
      )}
    </div>
  );
};
