import ContentCard from "../ui/cards/contentCard";

import styles from "./case-studies.module.css";

import {
  Slate_Intro,
  Slate_Overview,
} from "@/app/ui/case-studies/clearscore-design-system";
import {
  Events_Intro,
  Events_Overview,
} from "@/app/ui/case-studies/clearscore-events";

export default function Page() {
  return (
    <>
      <main className={styles.contentContainer}>
        <ContentCard href="./case-studies/clearscore-design-system">
          <h2>ClearScore Design System</h2>
          <Slate_Intro />
          <Slate_Overview />
        </ContentCard>
        <ContentCard href="./case-studies/clearscore-events">
          <h2>ClearScore Events</h2>
          <Events_Intro />
          <Events_Overview />
        </ContentCard>
      </main>
    </>
  );
}
