import Image from "next/image";

import ContentCard from "@/app/ui/cards/contentCard";

import csStyles from "../case-studies.module.css";
import {
  century_gothic_bold,
  montserrat_alternates_bold,
} from "@/app/ui/fonts";

import {
  Slate_Intro,
  Slate_Role,
  Slate_Overview,
  Slate_Numbers,
  Slate_Tokens,
  Slate_Team,
  Slate_Metrics,
  Slate_SDUI,
  Slate_SDUINumbers,
} from "@/app/ui/case-studies/clearscore-design-system";

export default function Slate() {
  return (
    <ContentCard>
      <div className={csStyles.container}>
        <div className={csStyles.info}>
          <Slate_Intro />
          <Slate_Role />
          <Slate_Overview />
          <Slate_Numbers />
          <Slate_Tokens />
          <Slate_Team />
          <Slate_Metrics />
          <Slate_SDUI />
          <Slate_SDUINumbers />
        </div>
      </div>
    </ContentCard>
  );
}
