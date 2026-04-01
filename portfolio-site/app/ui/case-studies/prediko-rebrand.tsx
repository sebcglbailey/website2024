import Image from "next/image";

import csStyles from "@/app/case-studies/case-studies.module.css";
import {
  century_gothic_bold,
  montserrat_alternates_bold,
} from "@/app/ui/fonts";

const PredikoRebrand_Intro = () => {
  return (
    <p className={csStyles.intro}>
      ...
    </p>
  );
};

const PredikoRebrand_Role = () => {
  return (
    <div className={csStyles.role}>
      <p className={century_gothic_bold.className}>2025</p>
      <p>
        <span className={century_gothic_bold.className}>My role:</span> Design Lead, Product Owner
      </p>
      <p>
        <span className={century_gothic_bold.className}>Team:</span> 1x CEO Core Stakeholder,
        1x Design Agency – 1x Creative Director, 1x Marketing Designer, 1x Frontend Engineer,
        1x Animator
      </p>
    </div>
  );
};

const PredikoRebrand_Overview = () => {
  return (
    <>
      <div className={csStyles.image}>
        <Image
          src="/case-studies/..."
          alt="..."
          width={1080}
          height={640}
        />
        <span>
          ...
        </span>
      </div>
      <p>
        ...
      </p>
    </>
  );
};

const PredikoRebrand_Numbers = () => {
  return (
    <div className={csStyles.numbers}>
      <div className={csStyles.numberInfo}>
        <span className={montserrat_alternates_bold.className}>...</span>
        <p>...</p>
      </div>
    </div>
  );
};

export function PredikoRebrandPeek() {
  return (
    <>
      <PredikoRebrand_Role />
      <PredikoRebrand_Intro />
      <PredikoRebrand_Overview />
    </>
  );
}

export function Title() {
  return <h1>Prediko Rebrand & Marketing Website</h1>;
}

export default function Page() {
  return (
    <>
      <PredikoRebrand_Intro />
      <PredikoRebrand_Role />
      <PredikoRebrand_Overview />
      <PredikoRebrand_Numbers />
    </>
  );
}
