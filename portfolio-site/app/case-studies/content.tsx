"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

import { Masonry } from "masonic";
import MasonryCard from "../ui/cards/masonryCard";

import styles from "./case-studies.module.css";

import { SlatePeek } from "@/app/ui/case-studies/clearscore-design-system";
import { EventsPeek } from "@/app/ui/case-studies/clearscore-events";
import { LeadershipPeek } from "../ui/case-studies/leadership";
import { VisionPeek } from "@/app/ui/case-studies/clearscore-vision";
import { AOCSPeek } from "@/app/ui/case-studies/clearscore-aocs";

export default function Content() {
  const pathname = usePathname();
  const HeaderTag = pathname.includes("case-studies") ? "h1" : "h2";

  const [content] = useState(() => [
    {
      href: "./case-studies/clearscore-design-system",
      title: "ClearScore Design System",
      content: <SlatePeek />,
    },
    {
      href: "./case-studies/clearscore-vision",
      title: "ClearScore Vision",
      content: <VisionPeek />,
    },
    {
      href: "./case-studies/leadership",
      title: "Leadership",
      content: <LeadershipPeek />,
    },
    {
      href: "./case-studies/clearscore-events",
      title: "ClearScore Events",
      content: <EventsPeek />,
    },
    {
      href: "./case-studies/clearscore-aocs",
      title: "Apply on ClearScore",
      content: <AOCSPeek />,
    },
  ]);

  return (
    <>
      <HeaderTag>Case Studies</HeaderTag>
      <main className={styles.contentContainer}>
        <Masonry
          items={content}
          columnGutter={16}
          render={MasonryCard}
          columnWidth={380}
          overscanBy={20}
        />
      </main>
    </>
  );
}
