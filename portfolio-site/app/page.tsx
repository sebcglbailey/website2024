import Image from "next/image";
import clsx from "clsx";

import Intro from "./ui/intro/intro";
import CaseStudies from "@/app/case-studies/page";
import Work from "@/app/work/page";
import Education from "@/app/education/page";
import SkillList from "./ui/sections/skills";

import { skills } from "./lib/skills";

import { mainIntro } from "./lib/intro";

import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={clsx(styles.main, styles.pageContainer)}>
      <Intro />
      <div className={styles.mainIntro}>
        {mainIntro.map((line, index) => {
          return <p key={`intro-line-${index}`}>{line}</p>;
        })}
      </div>
      <h2>Case Studies</h2>
      <CaseStudies />
      <h2>Work</h2>
      <Work />
      <h2>Skills</h2>

      {/* Skill list */}

      <SkillList title="Software" skills={skills.software} />
      <SkillList title="Process" skills={skills.process} />
      <SkillList title="Development" skills={skills.development} />

      <h2>Education</h2>
      <Education />
    </main>
  );
}
