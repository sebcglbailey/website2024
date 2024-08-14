import Image from "next/image";

import ContentCard from "@/app/ui/cards/contentCard";

import csStyles from "../case-studies.module.css";
import {
  century_gothic_bold,
  montserrat_alternates_bold,
} from "@/app/ui/fonts";

export function Intro() {
  return (
    <p className={csStyles.intro}>
      Leading a multi-displinary team to rebuild a multi-platform, multi-brand
      Design System from the ground up.
    </p>
  );
}

export function Role() {
  return (
    <div className={csStyles.role}>
      <p className={century_gothic_bold.className}>2024</p>
      <p>
        <span>My role:</span> Lead Designer and Product Owner
      </p>
    </div>
  );
}

export function Overview() {
  return (
    <>
      <div className={csStyles.image}>
        <Image
          src="/case-studies/clearscore-design-system/Slate_Logo.png"
          alt="ClearScore Slate Design System logo"
          width={1336}
          height={452}
        />
        <span>
          Brand new branding and company kick-off for our new Design System to
          get everyone excited about it, using it and most importantly,
          contributing into it.
        </span>
      </div>
      <p>
        Over the course of just 8 months, our cross functional team have
        delivered a multi-platform, multi-branded Design System available for
        consumption across the business with over 90 components, ranging from
        the basic Buttons, to more complex and bespoke components for our core
        ClearScore product. The components have been designed and built in
        accordance with our product refresh slated for release towards the end
        of 2024, whilst also taking into account best-in-class accessibility
        standards, and supporting multiple brands across the business.
      </p>
    </>
  );
}

export function Numbers() {
  return (
    <div className={csStyles.numbers}>
      <div className={csStyles.numberInfo}>
        <span className={montserrat_alternates_bold.className}>3</span>
        <p>Platforms</p>
      </div>
      <div className={csStyles.numberInfo}>
        <span className={montserrat_alternates_bold.className}>4</span>
        <p>Brands</p>
      </div>
      <div className={csStyles.numberInfo}>
        <span className={montserrat_alternates_bold.className}>94</span>
        <p>Components</p>
      </div>
      <div className={csStyles.numberInfo}>
        <span className={montserrat_alternates_bold.className}>8</span>
        <p>Months</p>
      </div>
    </div>
  );
}

export function Tokens() {
  return (
    <>
      <p>
        The ClearScore Slate Design System has been completely rethought from
        the ground up, taking the learnings from our hugely successful first
        Design System, and applying it across not just Design & Web, but also
        our native iOS and Android applications too. <br />
        <br />
        Slate incorporates a vast array of design tokens in order to give
        fine-control over the branding and appearance of the components for each
        of our brands, allowing full styling flexibility, whilst providing
        standard and recognisable design patterns across our products and
        websites.
      </p>
      <div className={csStyles.image}>
        <Image
          src="/case-studies/clearscore-design-system/Slate_Overview.png"
          alt="Screenshots from the ClearScore Slate Design System Figma files"
          width={2110}
          height={1365}
        />
        <span>
          The new design system utilises Design Tokens, Style Dictionary and
          Figma&#39;s native &#39;variables&#39; to easily switch between the
          different brands and themes we have built the components around.
        </span>
      </div>
    </>
  );
}

export function Team() {
  return (
    <>
      <p>
        Along with a fantastic team of engineers across all three platforms, and
        a Product Manager, I have not only delivered the designs and vision for
        the new Design System, but I have written documention, scoped delivery,
        project managed, owned and analysed the impact and cost efficiencies of
        the system, rolled it out across a company of over 400 employees,
        written component schemas, helped with the styling in CSS of various
        components, onboarded designers and engineers into contributing back
        into the system, as well as use it, and presented successes and
        demonstrations to senior stakeholders across the group business.
      </p>
      <div className={csStyles.image}>
        <Image
          src="/case-studies/clearscore-design-system/Notion_Database.png"
          alt="Screenshots from the ClearScore Slate Design System documentation databases in Notion app"
          width={2208}
          height={1288}
        />
        <span>
          Keeping track of status, impact and documentation of all components to
          ensure smooth delivery and accountability.
        </span>
      </div>
    </>
  );
}

export function Metrics() {
  return (
    <div className={csStyles.numbers}>
      <div className={csStyles.numberInfo}>
        <span className={montserrat_alternates_bold.className}>£600k+</span>
        <p>Estimated gross savings since inception</p>
      </div>
      <div className={csStyles.numberInfo}>
        <span className={montserrat_alternates_bold.className}>£1.5m+</span>
        <p>Estimated gross savings after 1 year</p>
      </div>
    </div>
  );
}

export function SDUI() {
  return (
    <>
      <p>
        Alongside our new Design System, I have played a pivotal part in leading
        a brand new initiative for Server-Driven UI. By aligning the schemas of
        our components for all platforms and building a bespoke API for creating
        UIs from one source-of-truth, we are now able to launch and release
        completely new pages and UIs in our products without the need for a
        native release.
        <br />
        <br />
        This frees up time for our client engineers to focus on building
        world-class UI and interactions, and allows our global markets to
        iterate and build new features without the need for client support –
        something which either took months before, or was actually impossible.
      </p>
      <div className={csStyles.image}>
        <Image
          src="/case-studies/clearscore-design-system/SDUI_Platform.png"
          alt="Diagram explaining how Server Driven UI improves native development and releases"
          width={1554}
          height={714}
        />
        <span>
          Creating a standardised schema for our components across platforms
          allows us to utilise a bespoke Server-Driven UI platform.
        </span>
      </div>
    </>
  );
}

export function SDUINumbers() {
  return (
    <div className={csStyles.numbers}>
      <div className={csStyles.numberInfo}>
        <span className={montserrat_alternates_bold.className}>1hr</span>
        <p>Time taken for first SDUI screen created</p>
      </div>
      <div className={csStyles.numberInfo}>
        <span className={montserrat_alternates_bold.className}>72k+</span>
        <p>Estimated hours saved with SDUI over 1 year</p>
      </div>
      <div className={csStyles.numberInfo}>
        <span className={montserrat_alternates_bold.className}>£7.5m+</span>
        <p>Estimated savings with SDUI over 1 year</p>
      </div>
    </div>
  );
}

export default function Slate() {
  return (
    <ContentCard>
      <div className={csStyles.container}>
        <div className={csStyles.info}>
          <Intro />
          <Role />
          <Overview />
          <Numbers />
          <Tokens />
          <Team />
          <Metrics />
          <SDUI />
          <SDUINumbers />
        </div>
      </div>
    </ContentCard>
  );
}
