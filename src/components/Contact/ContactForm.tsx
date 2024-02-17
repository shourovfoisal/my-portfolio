"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa";
import * as yup from "yup";
import { RFC } from "../common/Types";

export const ContactForm: RFC = () => {
  const schema = yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().email().required(),
    message: yup.string().required(),
  });

  type ContactFormData = yup.InferType<typeof schema>;

  const { register, handleSubmit } = useForm<ContactFormData>({
    resolver: yupResolver(schema),
  });

  function submitForm(data: ContactFormData) {
    console.log("📢[ContactForm.tsx:22]: data: ", data);
  }

  return (
    <form onSubmit={handleSubmit(submitForm)} noValidate>
      <div className="mt-10">
        <label
          className="block text-lg text-textLightPrimary dark:text-LightPastelOrange"
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
          className="block text-lg text-textLightPrimary dark:text-LightPastelOrange"
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
          className="block text-lg text-textLightPrimary dark:text-LightPastelOrange"
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
      <button className="mt-7 flex gap-3 items-center text-textLightPrimary dark:text-PastelOrange">
        <span>Submit</span>
        <span>
          <FaArrowRight />
        </span>
      </button>
    </form>
  );
};
