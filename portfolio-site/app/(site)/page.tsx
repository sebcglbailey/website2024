import Image from "next/image";
import clsx from "clsx";
import dynamic from "next/dynamic";

import Link from "next/link";

import Intro from "../ui/intro/intro";
// import CaseStudies from "@/app/(site)/case-studies/page";
// import Work from "@/app/(site)/work/page";
import Education from "@/app/(site)/education/page";
import SkillList from "../ui/sections/skills";

const DynamicWork = dynamic(() => import("@/app/(site)/work/page"), {
  ssr: false,
});
const DynamicCaseStudies = dynamic(() => import("@/app/(site)/case-studies/page"), {
  ssr: false,
});

import { skills } from "../lib/skills";

import { century_gothic_bold } from "../ui/fonts";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={clsx(styles.main, styles.pageContainer)}>
      <Intro />
      <div className={styles.mainIntro}>
        <p>
          A varied background in Architecture, Graphic Design, Web Development
          and over 10 years in Product Design, has helped me to become the
          enthusiastic creative technologist and versatile{" "}
          <Link
            className={century_gothic_bold.className}
            href="/case-studies/leadership"
          >
            design leader
          </Link>{" "}
          that I am today.
        </p>
        <p>
          I&apos;ve helped build ClearScore from 1 million users to over 22
          million, and the design team from 3 designers to over 40. More
          recently, I&apos;ve helped grow Prediko&apos;s revenue by more than
          5x in under two years.
        </p>
        <p>
          My focus on{" "}
          <Link
            className={century_gothic_bold.className}
            href="/case-studies/clearscore-design-system"
          >
            combining beautiful craft and technology
          </Link>{" "}
          enables me to lead my teams into pushing boundaries on both sides of
          the product lifecycle, from inception{" "}
          <Link
            className={century_gothic_bold.className}
            href="/case-studies/clearscore-vision"
          >
            all the way through to a fully functioning product
          </Link>
          . I have built products serving millions of users across the globe,
          from engaging native games and chat services, to helping millions
          tackle their financial worries, all the while mentoring, leading and
          helping other designers and engineers grow and thrive in their own
          careers. My skills and experience also help me to apply my knowledge
          outside of the usual day-to-day product design through projects such
          as{" "}
          <Link
            className={century_gothic_bold.className}
            href="/case-studies/clearscore-events"
          >
            event curation
          </Link>{" "}
          and even my own{" "}
          <Link
            className={century_gothic_bold.className}
            href="https://art.sebastianbailey.co.uk"
            target="_blank"
          >
            art business
          </Link>
          .
        </p>
        <p>
          At ClearScore, I led on their Platform initiatives through a{" "}
          <Link
            className={century_gothic_bold.className}
            href="/case-studies/clearscore-design-system"
          >
            refreshed Design System across multiple brands and platforms
          </Link>
          , a Server-Driven UI framework, and a headless CMS integration. With
          these new technologies, and other major architectural changes, we were
          able to{" "}
          <Link
            className={century_gothic_bold.className}
            href="/case-studies/clearscore-vision"
          >
            completely rebuild the core features of the ClearScore app within 9
            months
          </Link>
          , which otherwise would have taken years, and millions more in
          expenditure to build. I also helped to onboard dozens of designers and
          other staff in the usage of these tools, including being able to
          contribute to them themselves.
        </p>
        <p>
          Most recently, I have been leading on and{" "}
          <Link
            className={century_gothic_bold.className}
            href="/case-studies/prediko-replenish"
          >
            completely redesigning the experience for Prediko
          </Link>{" "}
          — a fast-growing e-commerce SaaS tool helping Shopify stores maximise
          their inventory potential. Prediko is a powerful AI-led optimisation
          and reporting tool, which shatters the traditional spreadsheet
          approach and smartly recommends restocking and transfer needs, to
          optimise spend and minimise sales lost to stockouts. The product has
          recently joined Shopify&apos;s tech partner list and has been featured
          by Shopify as a top recommended app for Inventory Management.
        </p>
      </div>
      <DynamicCaseStudies />
      <h2>Experience</h2>
      <DynamicWork />
      <h2>Skills</h2>

      {/* Skill list */}

      <SkillList title="Software" skills={skills.software} />
      <SkillList title="Leadership" skills={skills.leadership} />
      <SkillList title="Process" skills={skills.process} />
      <SkillList title="Development" skills={skills.development} />

      <h2>Education</h2>
      <Education />
    </main>
  );
}
