import styles from "./sections.module.css";

import clsx from "clsx";

export default function SkillList({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  const getSkillClass = (skill: string) => {
    switch (skill) {
      case "Figma":
        return styles.fig;
        break;
      case "Sketch":
        return styles.sk;
        break;
      case "Framer":
        return styles.fr;
        break;
      case "Notion":
        return styles.no;
        break;
      case "Abstract":
        return styles.abs;
        break;
      case "Zeplin":
        return styles.zep;
        break;
      case "Photoshop":
        return styles.ph;
        break;
      case "Illustrator":
        return styles.ai;
        break;
      case "InDesign":
        return styles.indd;
        break;
      case "After Effects":
        return styles.ae;
        break;
      case "Adobe XD":
        return styles.xd;
        break;
      case "Powerpoint":
        return styles.ppt;
        break;
      case "Keynote":
        return styles.key;
        break;
      case "Excel":
        return styles.xl;
        break;
      default:
        return null;
    }
  };

  const skillList = skills.map((skill) => {
    return (
      <div key={skill} className={clsx(styles.skill, getSkillClass(skill))}>
        {skill}
      </div>
    );
  });

  return (
    <div className={styles.skillContainer}>
      <h3>{title}</h3>
      <div className={styles.skillList}>{skillList}</div>
    </div>
  );
}
