import Image from "next/image";

import ContentCard from "@/app/ui/cards/contentCard";

import csStyles from "../case-studies.module.css";
import {
  century_gothic_bold,
  montserrat_alternates_bold,
} from "@/app/ui/fonts";

import {
  Events_Intro,
  Events_Role,
  Events_Overview,
  Events_Numbers,
  Events_Demos,
  Events_Metrics,
  Events_Assets,
} from "@/app/ui/case-studies/clearscore-events";

export default function Slate() {
  return (
    <ContentCard>
      <div className={csStyles.container}>
        <div className={csStyles.info}>
          <Events_Intro />
          <Events_Role />
          <Events_Overview />
          <Events_Numbers />
          <Events_Demos />
          <Events_Metrics />
          <Events_Assets />
        </div>
      </div>
    </ContentCard>
  );
}
