import ContentCard from "../ui/cards/contentCard";

import styles from "./case-studies.module.css";

import {
  Intro as DSIntro,
  Overview as DSOverview,
} from "./clearscore-design-system/page";
import {
  Intro as EvIntro,
  Overview as EvOverview,
} from "./clearscore-events/page";

export default function Page() {
  return (
    <>
      <h1>Case Studies</h1>
      <main className={styles.contentContainer}>
        <ContentCard href="./case-studies/clearscore-design-system">
          <h2>ClearScore Design System</h2>
          <DSIntro />
          <DSOverview />
        </ContentCard>
        <ContentCard href="./case-studies/clearscore-events">
          <h2>ClearScore Events</h2>
          <EvIntro />
          <EvOverview />
        </ContentCard>
      </main>
    </>
  );
}
