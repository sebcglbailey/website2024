"use client";

import { useState } from "react";
import { Masonry } from "masonic";
import MasonryCard from "../../ui/cards/masonryCard";
import styles from "./mini-apps.module.css";

function TimberCutPlannerCard() {
  return (
    <div className={styles.appCard}>
      <span className={styles.tag}>Tool</span>
      <p className={styles.description}>
        A bin-packing optimiser for timber frame cuts. Enter your panel
        dimensions and available stock lengths to get an optimal cut list that
        minimises offcut waste.
      </p>
      <ul className={styles.features}>
        <li>Multiple timber profiles with per-metre cost tracking</li>
        <li>Drag-and-drop cut and strip reordering</li>
        <li>Save and reload named panel presets</li>
      </ul>
    </div>
  );
}

export default function Content() {
  const [apps] = useState(() => [
    {
      href: "/mini-apps/timber-cut-planner",
      title: "Timber Cut Planner",
      content: <TimberCutPlannerCard />,
      isBlank: true,
    },
  ]);

  return (
    <>
      <h1>Mini Apps</h1>
      <main className={styles.contentContainer}>
        <Masonry
          items={apps}
          columnGutter={16}
          render={MasonryCard}
          columnWidth={380}
          overscanBy={20}
        />
      </main>
    </>
  );
}
