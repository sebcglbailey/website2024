import Image from "next/image";

import csStyles from "@/app/case-studies/case-studies.module.css";
import {
  century_gothic_bold,
  montserrat_alternates_bold,
} from "@/app/ui/fonts";

const AOCS_Intro = () => {
  return (
    <p className={csStyles.intro}>
      Building integrations with big name brands, bringing application journeys
      into the native ClearScore product. The Apply on ClearScore (AoCS) team
      focussed on best practice forms and cutting-edge technology to produce
      dynamic journeys with ease.
    </p>
  );
};

const AOCS_Role = () => {
  return (
    <div className={csStyles.role}>
      <p className={century_gothic_bold.className}>2021-2022</p>
      <p>
        <span className={century_gothic_bold.className}>My role:</span> Lead
        Designer
      </p>
      <p>
        <span className={century_gothic_bold.className}>Team:</span> 1x Junior
        Content Designer, 1x Product Manager, 1x Senior Frontend Engineer, 1x
        iOS Engineer, 1x Android Engineer, 1x Senior Backend Engineer
      </p>
    </div>
  );
};

const AOCS_Overview = () => {
  return (
    <>
      <div className={csStyles.image}>
        <Image
          src="/case-studies/clearscore-aocs/aocs-mocks.png"
          alt="Two mockups of a native loan application on the ClearScore app"
          width={1523}
          height={865}
        />
        <span>
          The Apply on ClearScore journeys were designed with form best-practice
          UX and bespoke partner branding to instill trust in our partners
          whilst also hugely improving on our partners&apos; conversion metrics.
        </span>
      </div>
      <p>
        Through dedicated and thorough research, our team focussed on
        implemented form best practices in order to maximise conversion through
        complex forms. We ensured that the application journeys were user
        friendly, informative and most importantly, compliant. Some of the more
        impactful changes made were breaking the journeys down into manageable
        chunks for easier understanding and comprehension, and telling the user
        what was involved in the application upfront, and allowing them to come
        back to it at a later time.
      </p>
    </>
  );
};

const AOCS_Process = () => {
  return (
    <>
      <p>
        As part of the project, there were some existing journeys already
        implemented that needed improving. These journeys were complex and
        integrated tightly with some legacy code. In order to roll the new
        journeys out efficiently, I worked closely with the engineers to
        pinpoint areas of the journeys that could be improved separately from
        each other. From here, I prioritised the rollout into sections in order
        to gradually improve on the applications, whilst being able to track
        exactly what changes helped to improve the conversion metrics.
      </p>
      <div className={csStyles.image}>
        <Image
          src="/case-studies/clearscore-aocs/aocs-rollout.png"
          alt="Screenshots of the gradual rollout of one of the journeys"
          width={2622}
          height={1214}
        />
        <span>
          The rollout of the new Apply on ClearScore journeys was planned in
          small iterations
        </span>
      </div>
    </>
  );
};

const AOCS_Numbers = () => {
  return (
    <div className={csStyles.numbers}>
      <div className={csStyles.numberInfo}>
        <span className={montserrat_alternates_bold.className}>6</span>
        <p>Bespoke integrations</p>
      </div>
      <div className={csStyles.numberInfo}>
        <span className={montserrat_alternates_bold.className}>25%</span>
        <p>Average conversion uplift</p>
      </div>
    </div>
  );
};

export function AOCSPeek() {
  return (
    <>
      <AOCS_Role />
      <AOCS_Intro />
      <AOCS_Overview />
    </>
  );
}

export function Title() {
  return <h1>Apply on ClearScore</h1>;
}

export default function Page() {
  return (
    <>
      <AOCS_Intro />
      <AOCS_Role />
      <AOCS_Overview />
      <AOCS_Numbers />
      <AOCS_Process />
    </>
  );
}
