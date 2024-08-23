import Image from "next/image";
import Link from "next/link";

import csStyles from "@/app/case-studies/case-studies.module.css";
import {
  century_gothic_bold,
  montserrat_alternates_bold,
} from "@/app/ui/fonts";
import clsx from "clsx";

export function Vision_Intro() {
  return (
    <p className={csStyles.intro}>
      Starting in 2020, the design team set out to redefine the core ClearScore
      experience in an attempt to boost not just our users&apos; understanding
      of their finances, but their whole experience of our product – and in the
      process of doing so also our core metrics such as monthly active users and
      conversion within the marketplace.
    </p>
  );
}

export function Vision_Role() {
  return (
    <div className={csStyles.role}>
      <p className={century_gothic_bold.className}>2020 - Present</p>
      <p>
        <span>My role:</span> Lead Product Designer
      </p>
      <p>
        <span>Team:</span> 1x Lead Product Designer, 1x Lead UX Designer, 1x
        Senior Product Designer
      </p>
    </div>
  );
}

export function Vision_Overview() {
  return (
    <>
      <div className={csStyles.image}>
        <Image
          src="/case-studies/clearscore-vision/wireframes.png"
          alt="Wireframe sketches of the new ClearScore core product, showcasing two new screens"
          width={1654}
          height={1020}
        />
        <span>
          The vision for the new ClearScore product has gone through many
          iterations, but started out as any good major design project should,
          with wireframes and significant user testing
        </span>
      </div>
      <p>
        My role in the ClearScore Vision project was to turn some great UX
        Research and discovery into a concept for a usable product, including
        but not limited to a complete overhaul of the Information Architecture
        of our core product experience. We noticed some clear patterns early on
        that our users would come to our product and not really know what to do
        next, despite having come to us for a reason. Because of this, we
        decided to focus our Information Architecture on the{" "}
        <Link href="https://www.productplan.com/glossary/jobs-to-be-done-framework/">
          Jobs To Be Done framework.
        </Link>
      </p>
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

export function Vision_Start() {
  return (
    <>
      <div className={csStyles.image}>
        <Image
          src="/case-studies/clearscore-vision/attitudes.png"
          alt='A diagram explaining the journey of our three core user credit attitude profiles: "Free money", "Avoider" and "Tool"'
          width={1586}
          height={678}
        />
        <span>
          The UX Research team had determined four core user credit attitude
          profiles across our userbase – &quot;New to credit&quot;, &quot;Free
          money&quot;, &quot;Avoider&quot; and &quot;Tool&quot;
        </span>
      </div>
      <p>
        I came into the project after some significant discovery had been done
        by the UX Research team, in which our 10 million users had been analysed
        in depth, and four core user profiles had been determined in respect to
        their credit attitudes. After looking through the research and gaining
        an understanding of these user profiles, I worked with two other
        designers to start designing the new experience for our next iteration
        of our core ClearScore product.
      </p>
    </>
  );
}

export function Vision_UX() {
  return (
    <>
      <div className={csStyles.image}>
        <Image
          src="/case-studies/clearscore-vision/personas.png"
          alt="A screenshot of three personas developed from the credit attitude segments outlined by the research"
          width={1400}
          height={515}
        />
        <span>
          From the credit attitude segments, we developed more in-depth personas
          to fall back on during our design phase
        </span>
      </div>
      <div className={csStyles.image}>
        <Image
          src="/case-studies/clearscore-vision/values.png"
          alt='A list of five principles, "Drives to action", "Is Job-to-be-done focused", "Enables future success of our proposition", "Has no siloed experiences" and "Doubles down on our new proposition"'
          width={1400}
          height={600}
        />
        <span>
          We also held ourselves accountable to five principles to ensure we
          were always developing the designs against an agreed scope and purpose
        </span>
      </div>
      <p>
        Due to the complexity and potential impact of the project, we spent an
        appropriate amount of time setting ourselves up for success. We went
        through multiple checkpoints with key stakeholders, where I would
        present to the C-Suite early sketches, ideas, analysis and principles.
        The personas and principles that I helped to establish were key drivers
        for a lot of the decicions that were made throughout the project, and
        are still referenced today 4 years later.
      </p>
    </>
  );
}

export function Vision_Development() {
  return (
    <>
      <div className={csStyles.image}>
        <Image
          src="/case-studies/clearscore-vision/sketches.png"
          alt="Early sketches and ideas for the new ClearScore experience"
          width={1400}
          height={830}
        />
        <span>
          Early sketches helped me to establish how the JTBD framework could be
          applied to the ClearScore product, and iterate over concepts
        </span>
      </div>
      <p>
        I spent 2-3 months exploring the concept and establishing a new
        Information Architecture for the product based on the JTBD framework.
        The idea was a simple one: change the core navigation to the main
        reasons people would be coming to the ClearScore product –{" "}
        <i>
          &apos;
          <span
            className={clsx(century_gothic_bold.className, csStyles.underline)}
          >
            Track
          </span>{" "}
          their credit profile and dark web details&apos;, &apos;
          <span
            className={clsx(century_gothic_bold.className, csStyles.underline)}
          >
            Improve
          </span>{" "}
          their current credit health&apos;
        </i>{" "}
        and{" "}
        <i>
          &apos;visit our online Marketplace to take out credit{" "}
          <span
            className={clsx(century_gothic_bold.className, csStyles.underline)}
          >
            Products.&apos;
          </span>
        </i>
        <br />
        <br />
        Following on from this JTBD focused concept affecting the top-level
        Information Architecture, further down the funnel, the user would be
        shown exactly the content they need at that point in their credit
        journey. This could be beautifully rendered and easy to understand data,
        tailored plans to help guide them through improving their credit
        profile, or a personalised list of credit products that we know are
        suitable for the user due to our data.
      </p>
      <div className={csStyles.image}>
        <Image
          src="/case-studies/clearscore-vision/IA.png"
          alt="A diagram of the proposed Information Architecture of the new ClearScore"
          width={1698}
          height={1024}
        />
        <span>
          One of the final assets of the project, a diagram explaining the
          proposed Information Architecture of the new ClearScore core product
        </span>
      </div>
    </>
  );
}

export function Vision_Arch() {
  return (
    <>
      <p>
        One core concept that came from our discovery and exploration was that
        of being able to &apos;access anything everywhere.&apos; I proposed that
        we not split our data and features into siloed experiences, but rather
        surface these anywhere within the product whenever it would be deemed
        suitable for the user. This would enable our users to view relevant data
        and use features of the product when it made most sense for them,
        surfacing suitable information at the right time.
        <br />
        <br />
        This approach was not going to be an easy one though, as our entire
        product had been built into siloed experiences across our verticals, and
        because of the iterative approach we had taken previously to build the
        product, we would need to re-architect a lot of our data products and
        APIs from the ground up, in order to be able to support this feature of
        the product. However, this meant that we had the opportunity to simplify
        a lot of our APIs at the same time too, and create a single source of
        truth for all of our user data, something that would not only create
        savings for us technically, but also improve the user experience across
        the entire product.
      </p>
      <div className={csStyles.image}>
        <Image
          src="/case-studies/clearscore-vision/concept.png"
          alt="Wireframes explaining the concept of 'access anything everywhere', showcasing the same repeated patterns and widgets on mutliple verticals or screens"
          width={1400}
          height={748}
        />
        <span>
          The concept of accessing anything everywhere through widgets and
          repeatable patterns was a huge shift in how our data and apps would
          work, and thus requiring a huge undertaking to re-architect our whole
          stack
        </span>
      </div>
    </>
  );
}

export function Vision_UI() {
  return (
    <>
      <p>
        One of the final deliveries of the project was a full working wireframe
        prototype, and UI designs for the Vision of the next iteration of
        ClearScore. I took lead on both of these and created multiple complex
        and detailed prototypes within Figma for each of our user segments to
        use in testing, and UI designs for core screens and experiences to
        showcase to leadership and the rest of the company. These vision pieces
        were used through multiple presentations, both ones that I presented,
        and others that were taken to the C-Suite and Board. Although designs
        for our verticals have changed in the 4 years since first developing
        these, there are key aspects of the ideas behind it that have made their
        way into the product and helped improve usability and experience
        significantly.
      </p>
      <div className={csStyles.image}>
        <Image
          src="/case-studies/clearscore-vision/mockups.png"
          alt="Mockups of the final designs of the initial phase of the project, showcased across three mobile devices"
          width={1920}
          height={1210}
        />
        <span>
          The final delivery of the project was a working prototype and UI
          designs outlining the vision of where the product could go
        </span>
      </div>
      <p>
        Following on from the final handover of the project, the next steps were
        to plan how to roll this massive undertaking out. Because of the sheer
        size of the project, and the unknowns that came with it, we made a
        decision to roll it out bit by bit, and only when some of the concepts
        were validated would we undertake one of the biggest parts of this,
        which would be the re-architecting of the apps.
        <br />
        <br />
        Since the project finished, we have redesigned our core Home and Report
        experiences, with some of the smaller ideas working their way into the
        Marketplace as well. The changes made over the years following the
        project have seen significant uplifts in monthly active users, Open
        Banking connections, and downstream conversion. As a core leader within
        the Design function and company, I have consistently been helping teams
        and coaching designers through the many iterations made to the product
        across the company over the years, always helping them to stay true to
        the values and concepts determined in the original project, and not
        being afraid to veer away from it when the data has shown a different
        story.
      </p>
    </>
  );
}

export function Vision_Final_Numbers() {
  return (
    <div className={csStyles.numbers}>
      <div className={csStyles.numberInfo}>
        <span className={montserrat_alternates_bold.className}>+2m</span>
        <p>MAUs</p>
      </div>
      <div className={csStyles.numberInfo}>
        <span className={montserrat_alternates_bold.className}>500k+</span>
        <p>Open Banking connections</p>
      </div>
      <div className={csStyles.numberInfo}>
        <span className={montserrat_alternates_bold.className}>2x</span>
        <p>Annual Revenue</p>
      </div>
      <div className={csStyles.numberInfo}>
        <span className={montserrat_alternates_bold.className}>£260m+</span>
        <p>ROI</p>
      </div>
    </div>
  );
}

const Vision_CH = () => {
  return (
    <>
      <div className={csStyles.image}>
        <iframe
          className={csStyles.youtube}
          src="https://www.youtube.com/embed/OmVyt3kKTG8?si=1A_iLzIctcIPCVwZ"
          title="ClearScore 2024: Credit Health & Improve "
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        <span>
          Coming in November of 2024, is the culmination of 4 years of hard work
          from across the team to bring the majority of the ideas set out in the
          ClearScore Vision project
        </span>
      </div>
    </>
  );
};

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
      <Vision_Start />
      <Vision_UX />
      <Vision_Development />
      <Vision_Arch />
      <Vision_UI />
      <Vision_Final_Numbers />
      <Vision_CH />
    </>
  );
}
