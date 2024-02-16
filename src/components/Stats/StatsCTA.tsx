import { transparentCardData } from "@/data";
import { AppCardTransparent } from "../common";
import { RFC } from "../common/Types";

export const StatsCTA: RFC = () => {
  return <AppCardTransparent {...transparentCardData.commitmentSection} />;
};
