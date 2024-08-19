import Image from "next/image";

import csStyles from "@/app/case-studies/case-studies.module.css";
import {
  century_gothic_bold,
  montserrat_alternates_bold,
} from "@/app/ui/fonts";

const Events_Intro = () => {
  return (
    <p className={csStyles.intro}>
      Every year in July, ClearScore hosts a spectacular event over two or three
      days for their partners and staff to celebrate all the new technology and
      features, host incredible speakers, as well as bring everyone together for
      a time of learning and relaxation.
    </p>
  );
};

const Events_Role = () => {
  return (
    <div className={csStyles.role}>
      <p className={century_gothic_bold.className}>2017 - 2022</p>
      <p>
        <span>My role:</span> Lead Designer and Event Planner
      </p>
    </div>
  );
};

const Events_Overview = () => {
  return (
    <>
      <div className={csStyles.image}>
        <Image
          src="/case-studies/clearscore-events/BTTU_Meditation.png"
          alt="Large industrial room with an LED screen at the end and a few dozen staff scattered around the room practicing meditation"
          width={1920}
          height={1280}
        />
        <span>
          ClearScore staff enjoy a moment of relaxation and meditation in the
          jaw-dropping Press Halls of Printworks London.
        </span>
      </div>
      <p>
        Since 2017 I have had a pivotal role in the success of the events
        ClearScore have hosted, with each year growing both in size and
        attendees, but also grandeur and budget. I have mainly led on the design
        and branding of the events, while additionally taking on more of the
        planning and budget management as well as organisation in later years.
        The 2022 event was a high point for me, with all 500 staff in attendance
        with a good 100 of those from across the globe, and another 500 partners
        in the incredible space that is Printworks London. We hosted a 1-day
        partner event and seminar, and a 2-day staff wellbeing and learning
        festival, culminating in a party in the infamous Press Halls.
      </p>
    </>
  );
};

const Events_Numbers = () => {
  return (
    <div className={csStyles.numbers}>
      <div className={csStyles.numberInfo}>
        <span className={montserrat_alternates_bold.className}>3</span>
        <p>Days</p>
      </div>
      <div className={csStyles.numberInfo}>
        <span className={montserrat_alternates_bold.className}>1</span>
        <p>World-class venue</p>
      </div>
      <div className={csStyles.numberInfo}>
        <span className={montserrat_alternates_bold.className}>500</span>
        <p>Partners</p>
      </div>
      <div className={csStyles.numberInfo}>
        <span className={montserrat_alternates_bold.className}>500</span>
        <p>Staff</p>
      </div>
    </div>
  );
};

const Events_Demos = () => {
  return (
    <>
      <p>
        During the events, we would gather a range of people from around the
        company to demonstrate and share their work with our partners, ensuring
        we were covering all aspects of the business with a lens of how partners
        can work with us to improve their own businesses. We would cover
        technology advancements, APIs and Blockchain technology, new features
        and products that the partners could integrate or sell their own
        products through. The purpose of the demos was not only to sell our
        business and products to our partners, but also to demonstrate the
        quality of the staff throughout the company, by getting them to demo
        their own areas and talk to the partners directly. This was always seen
        by our partners as one of the incredible reasons for coming to these
        events year after year – to hear directly from the people building these
        products.
        <br />
        <br />I led on the organisation, design and planning of bringing
        together all teams from across the business to demonstrate their work. I
        would closely collaborate with all of the areas, working with them to
        pinpoint a business-critical message to share, as well as produce
        multiple assets for print and digital displays. This would mean
        simultaneously having a deep understanding of all areas of the business,
        whilst also managing the teams to produce the data and core assets
        needed in order to effectively deliver their message.
      </p>
      <div className={csStyles.image}>
        <Image
          src="/case-studies/clearscore-events/BTTU_Demos.png"
          alt="Industrial room filled with plants, posters, screens and people chatting"
          width={1920}
          height={1280}
        />
        <span>
          The demo stands have always been a highlight of the events, but take a
          lot of organisation and planning to ensure everyone has a high
          quality, and consistent message to land with the partners.
        </span>
      </div>
      <div className={csStyles.image}>
        <Image
          src="/case-studies/clearscore-events/DD_Posters.png"
          alt="Industrial room filled with plants, posters, screens and people chatting"
          width={2373}
          height={1843}
        />
        <span>
          My role as design lead for the events has seen me work closely with
          event agencies to narrow down a brief, and present whole new branding
          for the event every year, and the application of this brand across all
          assets.
        </span>
      </div>
    </>
  );
};

const Events_Metrics = () => {
  return (
    <>
      <p>
        The purpose of running these events every year has been to cement the
        relationships between ClearScore and it&#39;s partners, introducing them
        to new technologies and ways of working with the company. Although the
        investment into these events is clear, it&#39;s much harder to define
        the ROI, but the relationships and contracts that come from these events
        are strong and certainly help ClearScore to cement itself as a first
        choice for a lot of the partners, ultimately leading to £millions in
        contracts and revenue.
        <br />
        <br />
        Playing a key part in the budget planning has also helped me to save{" "}
        <b>tens of thousands of £s</b> by finding alternative providers,
        prioritising and cutting certain aspects out of the agenda, or careful
        planning and problem solving.
      </p>
      <div className={csStyles.numbers}>
        <div className={csStyles.numberInfo}>
          <span className={montserrat_alternates_bold.className}>3</span>
          <p>Venues</p>
        </div>
        <div className={csStyles.numberInfo}>
          <span className={montserrat_alternates_bold.className}>5</span>
          <p>Events</p>
        </div>
        <div className={csStyles.numberInfo}>
          <span className={montserrat_alternates_bold.className}>6</span>
          <p>Years</p>
        </div>
        <div className={csStyles.numberInfo}>
          <span className={montserrat_alternates_bold.className}>3,000+</span>
          <p>Attendees</p>
        </div>
        <div className={csStyles.numberInfo}>
          <span className={montserrat_alternates_bold.className}>
            £millions
          </span>
          <p>Attributed contracts & revenue</p>
        </div>
      </div>
    </>
  );
};

const Events_Assets = () => {
  return (
    <>
      <div className={csStyles.image}>
        <iframe
          className={csStyles.youtube}
          src="https://www.youtube.com/embed/rytyveyEMg0?si=Q0BVBUVRUnhl1GvL"
          title="ClearScore One:You Summer Event"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // referrerpolicy="strict-origin-when-cross-origin"
          // allowfullscreen
        />
        <span>
          Involving the community, and having interesting and powerful speakers
          and agendas has always been a priority to spark thought and
          introspection in everyone that attends our events.
        </span>
      </div>
      <div className={csStyles.image}>
        <Image
          src="/case-studies/clearscore-events/BTTU_Team.png"
          alt="ClearScore team infront of a large LED screen, celebrating another successful year"
          width={1920}
          height={1280}
        />
        <span>
          Not only would I lead on the design, plan the event, fine-tune the
          budget, but I would also compère and help keep the events running
          smooth on the day with technical, administrative and design support
          throughout the day.
        </span>
      </div>
    </>
  );
};

export function EventsPeek() {
  return (
    <>
      <Events_Intro />
      <Events_Overview />
    </>
  );
}

export function Title() {
  return <h1>ClearScore Events</h1>;
}

export default function Page() {
  return (
    <>
      <Events_Intro />
      <Events_Role />
      <Events_Overview />
      <Events_Numbers />
      <Events_Demos />
      <Events_Metrics />
      <Events_Assets />
    </>
  );
}
