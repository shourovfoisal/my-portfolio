"use client";
import React, { PropsWithChildren } from "react";
import { TransparentCard } from "@/components/common";
import { transparentCardData } from "@/data";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaArrowRight } from "react-icons/fa";

type Props = React.FC<PropsWithChildren & {}>;

export const Contact: Props = () => {
  const schema = yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().email().required(),
    message: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  function submitForm(data: any) {
    console.log(data);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="col-span-1">
        <div className="w-3/4">
          <TransparentCard {...transparentCardData.contactSection} />
        </div>
      </div>
      <div className="col-span-1">
        <h2 className="text-3xl leading-10 text-LightPastelOrange mt-6">
          Or Maybe, <span className="block">Drop Me a Message</span>
        </h2>
        <form onSubmit={handleSubmit(submitForm)} noValidate>
          <div className="mt-10">
            <label
              className="block text-lg text-LightPastelOrange"
              htmlFor="text"
            >
              Your Name
            </label>
            <input
              className="mt-1 w-full outline-none py-2 bg-transparent border-b border-b-NightBlack text-AshGray"
              id="name"
              type="text"
              {...register("name")}
            />
          </div>
          <div className="mt-10">
            <label
              className="block text-lg text-LightPastelOrange"
              htmlFor="email"
            >
              Your Email
            </label>
            <input
              className="mt-1 w-full outline-none py-2 bg-transparent border-b border-b-NightBlack text-AshGray"
              id="email"
              type="email"
              {...register("email")}
            />
          </div>
          <div className="mt-10">
            <label
              className="block text-lg text-LightPastelOrange"
              htmlFor="message"
            >
              And.. Your Message
            </label>
            <textarea
              className="mt-1 w-full outline-none py-2 bg-transparent resize-none border-b border-b-NightBlack text-AshGray"
              id="message"
              {...register("message")}
            />
          </div>
          <button className="mt-7 flex gap-3 items-center text-PastelOrange">
            <span>Submit</span>
            <span>
              <FaArrowRight />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};
