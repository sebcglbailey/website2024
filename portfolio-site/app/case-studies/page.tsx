import ContentCard from "../ui/cards/contentCard";

import styles from "./case-studies.module.css";

import { SlatePeek } from "@/app/ui/case-studies/clearscore-design-system";
import { EventsPeek } from "@/app/ui/case-studies/clearscore-events";
import { VisionPeek } from "@/app/ui/case-studies/clearscore-vision";

export default function Page() {
  return (
    <>
      <h1>Case Studies</h1>
      <main className={styles.contentContainer}>
        <ContentCard href="./case-studies/clearscore-design-system">
          <h2>ClearScore Design System</h2>
          <SlatePeek />
        </ContentCard>
        <ContentCard href="./case-studies/clearscore-events">
          <h2>ClearScore Events</h2>
          <EventsPeek />
        </ContentCard>
        <ContentCard href="./case-studies/clearscore-vision">
          <h2>ClearScore Vision</h2>
          <VisionPeek />
        </ContentCard>
      </main>
    </>
  );
}
