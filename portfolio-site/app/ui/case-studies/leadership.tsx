import Image from "next/image";
import Link from "next/link";

import csStyles from "@/app/case-studies/case-studies.module.css";
import {
  century_gothic_bold,
  montserrat_alternates_bold,
} from "@/app/ui/fonts";
import clsx from "clsx";

const Leadership_Intro = () => {
  return (
    <p className={csStyles.intro}>
      My leadership position enables me to help other designers grow their
      skillsets and build world-class products. I have an arsenal of tools and
      experience to help guide designers, and other individuals through their
      careers and to help them think about their own impact and progression.
    </p>
  );
};

export function Leadership_Role() {
  return (
    <div className={csStyles.role}>
      <p className={century_gothic_bold.className}>2018 - Present</p>
      <p>
        <span className={century_gothic_bold.className}>My role:</span> Design
        Leader
      </p>
      <p>
        <span className={century_gothic_bold.className}>Positions held:</span>{" "}
        Design Manager, Lead Designer, International Design Lead, Product Owner
      </p>
    </div>
  );
}

const Leadership_Overview = () => {
  return (
    <div className={csStyles.image}>
      <Image
        src="/case-studies/leadership/whiteboarding.webp"
        alt="Seb taking part in a whiteboarding session with two other designers"
        width={1440}
        height={634}
      />
    </div>
  );
};

const Leadership_Sourcing = () => {
  return (
    <>
      <h2>Sourcing and Hiring</h2>
      <p>
        Throughout the past 6 years, I have had the opportunity to not only lead
        my own teams, but help build out the ClearScore Design team as a whole
        from 3 designers to 50. I have played a pivotal role in sourcing and
        onboarding designers across the globe from juniors to Heads of Design.
      </p>
      <p>
        To help build the fantastic design team at ClearScore, I have taken part
        and led on countless screening, technical and behavioural interviews to
        ensure we have been hiring the best talent. To help me do this, I always
        do my homework on a potential employee, ensuring that not only do we
        only focus our own efforts on the best candidates, but also so we do not
        waste anyone elses time if they aren&apos;t a good fit for the business.
        I have helped to establish a rigid interview process across the
        business, being a core member of the interviewing team for all roles,
        not just in design. Every interview that I take part in will have a bank
        of tried and tested questions that I can fall back on, but I much prefer
        to treat each individual interview as a conversation, to help the
        candidate feel at ease and to help them put their best foot forwards, as
        well as giving them an opportunity to understand what it might be like
        to work on my teams.
      </p>
      <p>
        To build a great team I also believe strongly that a diverse team is
        also needed, and so I place less emphasis on whether or not a candidate
        would fit in well with the existing team, but more on what they could
        bring to the table. A varied mindset within a design team is crucial to
        building fantastic products that solve problems for all users, not just
        a subset.
      </p>
    </>
  );
};

const Leadership_Values = () => {
  return (
    <>
      <p>
        To ensure I always hire the best people for my teams, I will always come
        back to these core values.
      </p>
      <div className={csStyles.numbers}>
        <div className={csStyles.numberInfo}>
          <span className={montserrat_alternates_bold.className}>Diverse</span>
          <p>Team members</p>
        </div>
        <div className={csStyles.numberInfo}>
          <span className={montserrat_alternates_bold.className}>Strong</span>
          <p>Techical skills</p>
        </div>
        <div className={csStyles.numberInfo}>
          <span className={montserrat_alternates_bold.className}>Mindful</span>
          <p>Ethical and envrionmental considerations</p>
        </div>
      </div>
    </>
  );
};

const Leadership_Management = () => {
  return (
    <>
      <h2>Management & Mentoring</h2>
      <p>
        My experience in management has allowed me to take designers through
        promotions and impactful design delivery, as well as unfortunately
        needing to deal with underperformance within the team. I always aim to
        help my reports see their own value and focus on what they enjoy and
        excel at in order to have the highest impact they can have. Through
        regular 1-1s and personalised regular workshops with the individual, I
        will aim to help them understand their strengths and weaknesses, and set
        up personal objectives to ensure they are not only delivering on their
        work but also working on themselves.
      </p>
      <div className={csStyles.image}>
        <Image
          src="/case-studies/leadership/Report_Workshop.png"
          alt="Personal workshops including a career timeline, self-evaluation matrix, and a today canvas."
          width={1920}
          height={1212}
        />
        <span>
          To help my direct reports, I&apos;ll take them through various
          workshops including a timeline of their career, a self-evaluation
          matrix, and a today canvas to figure out what they enjoy.
        </span>
      </div>
    </>
  );
};

const Leadership_Strategy = () => {
  return (
    <>
      <h2>Strategy</h2>
      <p>
        Throughout my experience, I have had opportunities to work on both short
        and long-term, and smaller and larger project strategies, as well as
        setting strategy for the wider design team.
      </p>
      <h3>Defining a vision & building products</h3>
      <p>
        To build successful products,{" "}
        <Link
          href="/case-studies/clearscore-vision"
          className={century_gothic_bold.className}
        >
          a great vision
        </Link>{" "}
        and communicating that to the team is key. To do this, I&apos;ll ensure
        that myself and my team spend a decent amount of time on discovery and
        in the concept stage. Research on competitors, what problems a user is
        facing, and testing early prototypes are all tools to help define a
        fantastic vision. But, there&apos;s no use creating a world-class design
        if you cannot then turn that into delivering a world-class product. To
        help get buy-in on a project and solution, I will build out inspiring
        high-fidelity prototypes and create a story around a project. I will
        ensure that everyone involved is fully invested and up to date with the
        vision and principles behind a project. Not only this, but involving the
        team that are going to build a project early-on helps them to feel
        invested in the solution itself, as it more often than not comes from
        the individuals.
      </p>
      <h3>Prioritisation</h3>
      <p>
        Being able to define a great vision, and build a great product is only
        possible when the right things are prioritised. Agile teams can build
        impactful products by prioritising each phase of a project effectively,
        helping the to plan each stage and change if needed. By building MVPs
        and iterating on those, my teams have been able{" "}
        <Link
          href="/case-studies/clearscore-design-system"
          className={century_gothic_bold.className}
        >
          deliver impactful products in record time
        </Link>
        . To prioritise effectively, I will help my teams to focus on what is
        possible first, and also to figure out what will make the biggest impact
        with the users. I&apos;ll help the design team work with engineers to
        figure out what aspects of a design are easily achievable, vs what will
        take a little longer, and this will then in turn help to establish a
        timeline and iterations of a product&apos; delivery.
      </p>
      <h3>Building a high-performing team</h3>
      <p>
        During my time as International Lead at ClearScore, I had the opptunity
        to work with each of our market&apos;s General Managers to understand
        their requirements and help them to understand the impact that dedicated
        design resrouce could have on their KPIs. Up to that point, there was
        minimal design support for the International teams. I worked with the
        historic data that we had at hand from both our UK team and
        International teams to show the GMs how much extra revenue good design
        work could bring them. After establishing a long-term timeline for the
        work needed in these markets, I then worked closely with the hiring team
        to source and interview local designers from each of the different hubs.
      </p>
    </>
  );
};

const Leadership_Learnings = () => {
  return (
    <>
      <h2>Learnings</h2>
      <p>
        Through the years I have spent as a leader in design, I have learnt that
        the most important part to any design team is it&apos;s people and the
        culture within it. A team that work and play together is one that is
        close and willing to challenge each other, as well as work hard at the
        problems that they are invested in. I choose team members based on their
        proven experience, but I find more importantly, their attitude. A team
        that cares about the product they are working on, and the people they
        are working with will show up, and dedicate themselves to building the
        best product they can for the problem they are trying to solve.
      </p>
    </>
  );
};

const Leadership_Headshot = () => {
  return (
    <div className={clsx(csStyles.image, csStyles.smallImage)}>
      <Image
        src="/case-studies/leadership/headshot.png"
        alt="Professional headshot of Sebastian Bailey"
        width={375}
        height={460}
      />
      <span>
        I am available for my next leadership opportunity to help build and lead
        your design team.
      </span>
    </div>
  );
};

export function LeadershipPeek() {
  return (
    <>
      <Leadership_Role />
      <Leadership_Intro />
      <Leadership_Overview />
    </>
  );
}

export function Title() {
  return <h1>Leadership</h1>;
}

export default function Page() {
  return (
    <>
      <Leadership_Intro />
      <Leadership_Role />
      <Leadership_Overview />
      <Leadership_Sourcing />
      <Leadership_Values />
      <Leadership_Management />
      <Leadership_Strategy />
      <Leadership_Learnings />
      <Leadership_Headshot />
    </>
  );
}
