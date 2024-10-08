import Image from "next/image";

import csStyles from "@/app/case-studies/case-studies.module.css";
import {
  century_gothic_bold,
  montserrat_alternates_bold,
} from "@/app/ui/fonts";

const Slate_Intro = () => {
  return (
    <p className={csStyles.intro}>
      Leading a multi-displinary team to rebuild a multi-platform, multi-brand
      Design System from the ground up.
    </p>
  );
};

const Slate_Role = () => {
  return (
    <div className={csStyles.role}>
      <p className={century_gothic_bold.className}>2024</p>
      <p>
        <span className={century_gothic_bold.className}>My role:</span> Lead
        Designer and Product Owner
      </p>
      <p>
        <span className={century_gothic_bold.className}>Team:</span> 1x Product
        Manager, 1x Engineering Manager, 2x iOS Engineers, 2x Android Engineers,
        3x Frontend Engineers, 1x Senior Test Engineer
      </p>
    </div>
  );
};

const Slate_Overview = () => {
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
        Over the course of just 9 months, our cross functional team has
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
};

const Slate_Numbers = () => {
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
        <span className={montserrat_alternates_bold.className}>9</span>
        <p>Months</p>
      </div>
    </div>
  );
};

const Slate_Tokens = () => {
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
};

const Slate_Team = () => {
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
};

const Slate_Metrics = () => {
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
};

const Slate_SDUI = () => {
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
};

const Slate_SDUINumbers = () => {
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
};

export function Slate_Learnings() {
  return (
    <>
      <h2>Learnings</h2>
      <p>
        It&apos;s been an incredible journey over the first 9 months of the new
        Design System project, building a fantastic amount over multiple
        platforms and brands, but there are also plenty of learnings to be taken
        from the project. Thankfully, this wasn&apos;t our first time, and so we
        had already learnt from our past mistakes. Importantly, we started with
        feedback early, and kept the feedback cycle going all through our build
        and onboarding stages. This feedback has helped us to stay on top of the
        most pressing issues and problems with what we were rolling out, and we
        have been able to fix those before they were in significant use.
      </p>
      <ul className={csStyles.list}>
        <p>
          Other major learnings that we have been able to execute during the
          project, have been:
        </p>
        <li>
          Start small. Focus on smaller items such as the tokens and core
          components; you get these right and the rest will follow.
        </li>
        <li>
          Release early and often. Similar to the point above, the sooner we got
          components and tokens out into the wild, before it was being used in
          core projects, helped us to fine tune some of the details early on.
        </li>
        <li>
          Align OS platforms early. Building a multi-platform design system,
          it&apos;s important to align the components across the different
          devices early, to establish a pattern of a shared language and
          capabilities of components. This however, does not include and
          platform-specific best practices of course, which are always important
          to respect.
        </li>
        <li>
          Start with layout and styling components first. This allows for quick
          usage of the system over a broad range of the product, the quickest
          way to gain alignment across your products.
        </li>
      </ul>
    </>
  );
}

export function SlatePeek() {
  return (
    <>
      <Slate_Role />
      <Slate_Intro />
      <Slate_Overview />
    </>
  );
}

export function Title() {
  return <h1>ClearScore Design System</h1>;
}

export default function Page() {
  return (
    <>
      <Slate_Intro />
      <Slate_Role />
      <Slate_Overview />
      <Slate_Numbers />
      <Slate_Tokens />
      <Slate_Team />
      <Slate_Metrics />
      <Slate_SDUI />
      <Slate_SDUINumbers />
      <Slate_Learnings />
    </>
  );
}
