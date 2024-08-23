"use client";

import { useState } from "react";
import { Masonry } from "masonic";

import MasonryCard from "../ui/cards/masonryCard";

import { experience } from "../lib/work";

import cardStyles from "../ui/cards/cards.module.css";
import styles from "./work.module.css";

export default function Page() {
  const [content] = useState(() =>
    experience.map((job) => {
      return {
        id: job.id,
        isBlank: true,
        href: job.link,
        title: job.title,
        content: (
          <>
            {job.role ? <h4>{job.role}</h4> : null}
            {job.dates ? <h4>{job.dates}</h4> : null}
            {job.info ? (
              <div className={cardStyles.info}>
                {job.info.map((info, index) => {
                  return <p key={`job-${index}`}>{info}</p>;
                })}
              </div>
            ) : null}
          </>
        ),
      };
    })
  );

  return (
    <main className={styles.workList}>
      <Masonry
        items={content}
        columnGutter={16}
        render={MasonryCard}
        columnWidth={380}
        overscanBy={5}
      />
    </main>
  );
}
