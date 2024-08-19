import Image from "next/image";

import csStyles from "@/app/case-studies/case-studies.module.css";
import {
  century_gothic_bold,
  montserrat_alternates_bold,
} from "@/app/ui/fonts";

export function Vision_Intro() {
  return <p className={csStyles.intro}></p>;
}

export function Vision_Role() {
  return (
    <div className={csStyles.role}>
      <p className={century_gothic_bold.className}>2020 - Present</p>
      <p>
        <span>My role:</span> Lead Designer
      </p>
    </div>
  );
}

export function Vision_Overview() {
  return (
    <>
      <div className={csStyles.image}>
        {/* <Image
          src="/case-studies/clearscore-vision/BTTU_Meditation.png"
          alt="Large industrial room with an LED screen at the end and a few dozen staff scattered around the room practicing meditation"
          width={1920}
          height={1280}
        /> */}
        <span></span>
      </div>
      <p></p>
    </>
  );
}

export function Vision_Numbers() {
  return (
    <div className={csStyles.numbers}>
      <div className={csStyles.numberInfo}>
        <span className={montserrat_alternates_bold.className}>4</span>
        <p>Years</p>
      </div>
      <div className={csStyles.numberInfo}>
        <span className={montserrat_alternates_bold.className}>£20m+</span>
        <p>Investment</p>
      </div>
      <div className={csStyles.numberInfo}>
        <span className={montserrat_alternates_bold.className}>1</span>
        <p>Big idea</p>
      </div>
    </div>
  );
}

export function VisionPeek() {
  return (
    <>
      <Vision_Intro />
      <Vision_Overview />
    </>
  );
}

export function Title() {
  return <h1>ClearScore Vision</h1>;
}

export default function Page() {
  return (
    <>
      <Vision_Intro />
      <Vision_Role />
      <Vision_Overview />
      <Vision_Numbers />
    </>
  );
}
