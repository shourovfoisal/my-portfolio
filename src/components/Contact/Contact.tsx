import { AppCardTransparent } from "@/components/common";
import { transparentCardData } from "@/data";
import { RFC } from "../common/Types";
import { ContactForm } from "./ContactForm";

export const Contact: RFC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10">
      <div className="col-span-1">
        <div className="w-3/4">
          <AppCardTransparent {...transparentCardData.contactSection} />
        </div>
      </div>

      <div className="col-span-1">
        <h2 className="text-3xl leading-10 text-textLightPrimary dark:text-LightPastelOrange">
          Or Maybe, <span className="block">Drop Me a Message</span>
        </h2>
        <ContactForm />
      </div>
    </div>
  );
};
