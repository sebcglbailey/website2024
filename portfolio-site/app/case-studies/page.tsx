"use client";

import ContentCard from "../ui/cards/contentCard";
import { usePathname } from "next/navigation";

import styles from "./case-studies.module.css";

import { SlatePeek } from "@/app/ui/case-studies/clearscore-design-system";
import { EventsPeek } from "@/app/ui/case-studies/clearscore-events";
import { VisionPeek } from "@/app/ui/case-studies/clearscore-vision";

export default function Page() {
  const pathname = usePathname();
  const HeaderTag = pathname.includes("case-studies") ? "h1" : "h2";
  return (
    <>
      <HeaderTag>Case Studies</HeaderTag>
      <main className={styles.contentContainer}>
        <ContentCard href="./case-studies/clearscore-design-system">
          <h2>ClearScore Design System</h2>
          <SlatePeek />
        </ContentCard>
        <ContentCard href="./case-studies/clearscore-vision">
          <h2>ClearScore Vision</h2>
          <VisionPeek />
        </ContentCard>
        <ContentCard href="./case-studies/clearscore-events">
          <h2>ClearScore Events</h2>
          <EventsPeek />
        </ContentCard>
      </main>
    </>
  );
}
