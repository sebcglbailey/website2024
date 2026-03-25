import Image from "next/image";

import csStyles from "@/app/case-studies/case-studies.module.css";
import {
  century_gothic_bold,
  montserrat_alternates_bold,
} from "@/app/ui/fonts";

const Replenish_Intro = () =>
  <p className={csStyles.intro}>
    Rebuilding the core feature for Prediko to establish itself as a
    market leader in Inventory Management and Replenishment.
  </p>;

const Replenish_Role = () =>
  <div className={csStyles.role}>
    <p className={century_gothic_bold.className}>2025</p>
    <p>
      <span className={century_gothic_bold.className}>My role:</span> Design Lead
    </p>
    <p>
      <span className={century_gothic_bold.className}>Team:</span> 1x CEO Product Owner,
      1x CTO Architect, 1x Backend Engineer, 2x Frontend Engineer
    </p>
  </div>;

const Replenish_Overview = () =>
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
      I led the end-to-end redesign of Prediko&apos;s core planning and replenishment experience,
      and in doing so, helped establish how the company approaches product design more broadly.
    </p>
    <p>
      Prior to this project, product changes were largely reactive — driven by individual customer
      requests or founder intuition, with little structured process behind them. Part of my remit
      was to change that. I introduced a research-led approach to product development, bringing
      customers and the sales team into a more active role in shaping the direction of the product,
      and establishing a full design process for significant changes rather than building from
      instinct alone.
    </p>
    <p>
      As the sole designer, I was responsible for setting the product vision for this area,
      running discovery and validation with customers, facilitating alignment across founders
      and engineering, and guiding the feature from early concept through to MVP release and
      future iterations. The work also had a lasting impact on Prediko&apos;s long-term roadmap
      — shifting the product&apos;s strategic focus toward helping customers understand and trust
      the system&apos;s reasoning, rather than relying on blind automation or routinely overriding
      its recommendations.
    </p>
  </>;

const Replenish_Goal = () =>
  <>
    <h3>The opportunity</h3>
    <p>
      Prediko&apos;s ambition was to become the default inventory planning and replenishment platform
      for Shopify merchants. This project focused on rebuilding the product&apos;s most critical workflow
      — the journey that turns demand forecasts into confident purchasing decisions — and transforming
      it from a technically capable but under-adopted tool into a core, habit-forming part of how
      customers run their operations.
    </p>
  </>

const Replenish_Problem = () =>
  <>
    <h3>The problem</h3>
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
      When I joined, Prediko had early traction on the Shopify App Store and a growing base of merchants,
      but it was struggling to achieve strong product–market fit around its most important promise:
      helping brands plan inventory and reorder with confidence.
    </p>
    <p>
      The forecasting technology was robust, but the experience around it failed to drive the right
      behaviour. Planning existed, but it was not embedded into users&apos; operational rhythm, and the
      product did not clearly communicate why it should be trusted or mattered, and how it should be used
      to make better purchasing decisions.
    </p>
    <div>
      <p>
        This manifested in a number of observable issues:
      </p>
      <ul className={csStyles.list}>
        <li>
          Customers frequently placed purchase orders using outdated plans – in turn leading to potentially
          unnecessarily costly orders being placed
        </li>
        <li>There was a weak behavioural link between “planning” and “ordering”</li>
        <li>Long-term supply risk and cash-flow implications were difficult to see</li>
        <li>
          The journey did not create a clear mental model of how Prediko&apos;s plan generation and order
          recommendations should guide decisions
        </li>
      </ul>
    </div>
    <p>
      As a result, Prediko&apos;s key differentiator — intelligent, data-driven replenishment — was not yet
      experienced as a strategic advantage, but as a helpful, and sometimes optional, tool.
    </p>
  </>;

const Replenish_Numbers = () =>
  <>
    <div>
      <p>
        We defined success around a small number of behavioural and business outcomes:
      </p>
      <ul className={csStyles.list}>
        <li>Increase the proportion of users who create or update a plan before placing orders</li>
        <li>Improve confidence and trust in automated recommendations</li>
        <li>Make future stock risk and supply needs visible at a glance</li>
        <li>Drive measurable improvements in customers stock metrics, i.e. stockouts, overstock and ROI</li>
      </ul>
      <span className={csStyles.caption}>
        Note: this last outcome would be a difficult one to track ourselves, but we had a good track
        record of our core customers providing us with case study data that we could lean on in the future.
      </span>
    </div>
    <p>
      The core metrics we wanted to track and improve as part of this feature and related improvements were:
    </p>
    <div className={csStyles.numbers}>
      <div className={csStyles.numberInfo}>
        <span className={montserrat_alternates_bold.className}>10%</span>
        <p>of users edited their plan before placing an order</p>
      </div>
      <div className={csStyles.numberInfo}>
        <span className={montserrat_alternates_bold.className}>38%</span>
        <p>of users completed more than one core action</p>
      </div>
      <div className={csStyles.numberInfo}>
        <span className={montserrat_alternates_bold.className}>12%</span>
        <p>of customers had updated their plan in the past 30 days</p>
      </div>
    </div>
  </>

const Replenish_Process = () =>
  <>

    <h3>Discovery & Insight</h3>
    <p>
      Given the complexity of inventory management and the risk of disrupting established workflows,
      the project began with an intensive discovery phase. I immersed myself in the domain by joining
      onboarding and support calls, reviewing historical feature decisions with the founders, and
      mapping how different types of merchants planned stock across seasons, suppliers, and cash
      constraints.
    </p>
    <p>
      A consistent pattern emerged: while merchants intellectually understood the value of planning,
      they were stuck in their traditional methods of looking at the plan once a month or quarter.
      We found from our own analysis that trends and recent sales had a larger effect on the
      generated plan than customers were aware about, and therefore their own planning on our system
      was not adequate for accurate recommendations. The customers that planned manually, were
      unaware of recent changes in trends affecting the projections, and those that used Prediko&apos;s
      own planning model were unaware of the link between planning and ordering — manually changing their
      reorder numbers based off their own thoughts - potentially leading to even larger discrepancies.
    </p>
    <p>
      This reframed the challenge. The issue was not simply that users were skipping a step in the flow,
      but that the product did not yet provide the perspective required to make planning feel indispensable.
    </p>

    <h3>Design Strategy</h3>
    <p>
      To align the team and explore solutions, I facilitated a condensed design sprint with founders,
      engineers, and customer-facing roles. Rather than starting with interface ideas, we focused on
      redefining what “replenishment” should mean in the context of Prediko: not a single transactional
      action, but an ongoing system for managing future supply, risk, and cash flow.
    </p>
    <div>
      <p>
        From this, I set three strategic principles for the redesign:
      </p>
      <ol className={csStyles.list}>
        <li><span className={century_gothic_bold.className}>Insight before action</span> – users must understand their future supply position before being asked to commit to orders.</li>
        <li><span className={century_gothic_bold.className}>Progressive commitment</span> – planning should guide, not block, purchasing.</li>
        <li><span className={century_gothic_bold.className}>Trust through transparency</span> – recommendations must be explainable, not just computed.</li>
      </ol>
    </div>
    <p>
      With these principles as a foundation, two early design decisions shaped how they translated into the product itself.
    </p>
    <p>
      The first was to build a guided journey through the planning process, rather than presenting
      merchants with an open-ended tool. Research made clear that users understood planning
      intellectually, but lacked a mental model for how their inputs connected to Prediko&apos;s
      recommendations. A more directed flow — one that surfaced the relationship between an
      up-to-date plan and the quality of order suggestions — gave merchants the context they
      needed to trust and act on the system.
    </p>
    <p>
      The second was to focus attention on a limited number of products rather than the full
      catalogue. Most merchants had too many SKUs to plan for consistently, and attempting to
      do so led to paralysis or avoidance. The more realistic and effective behaviour was to
      fix the outliers — products that were off-track — and confirm a handful of key items.
      Designing around this reality, rather than an idealised end-state, made the experience
      feel achievable and built the habit of regular engagement over time.
    </p>
  </>

const Replenish_Test = () =>
  <>
    <h3>Prototyping & Validation</h3>
    <p>
      Early concepts explored a more structured, sequential journey that encouraged users to plan
      before ordering. In testing with a small group of core customers, this approach initially
      increased understanding of the data and confidence in the recommendations, but also revealed
      tension around forced process and reduced flexibility.
    </p>
    <p>
      The breakthrough came when we shifted focus from controlling the sequence of actions to improving
      the quality of insight. By introducing a longer-term view of supply and recommended orders over
      time, users were able to reason about risk, cash, and seasonality in a way that made planning
      feel naturally necessary, rather than administratively required.
    </p>
    <div>
      <p>
        Testing the revised approach showed that:
      </p>
      <ul className={csStyles.list}>
        <li>Users better understood why the system was recommending certain quantities</li>
        <li>Confidence in future ordering decisions increased</li>
        <li>The perceived need for a rigid, gated flow reduced significantly</li>
        <li>Planning became something users wanted to engage with, not something they had to complete</li>
      </ul>
    </div>
  </>

const Replenish_Build = () =>
  <>
    <h3>Build</h3>
    <div className={csStyles.image}>
      <Image
        src="/case-studies/..."
        alt="..."
        width={1080}
        height={640}
      />
      <span>
        Final designs for the Plan & Replenish journey
      </span>
    </div>
    <p>
      Working closely with the CTO and engineering team, we scoped an MVP that delivered the new
      mental model while respecting architectural and delivery constraints. The focus was on
      maximising learning and behavioural change rather than shipping a fully realised end-state.
    </p>
    <p>Throughout the build, I stayed tightly involved in prioritisation, design–engineering
      trade-offs, and instrumentation, ensuring that the experience reflected the intended
      strategy and that we had the analytics in place to measure whether the new journey was
      genuinely changing behaviour.
    </p>
    <div>
      <p>
        The build came with three meaningful constraints, each of which shaped how the design was
        delivered.
      </p>
      <ol className={csStyles.list}>
        <li>
          The frontend codebase was relatively rigid — existing component libraries and technology choices
          limited how far the interface could deviate from established patterns. I worked closely with the
          frontend team to scope changes carefully, and used the opportunity to introduce incremental
          improvements that standardised the experience and improved cohesion without requiring a full
          rebuild.
        </li>
        <li>
          On the backend side, the recommendation engine itself was largely unchanged. Rather than
          pushing to rebuild the underlying logic — which was already technically strong — I focused on
          surfacing what the system already knew more clearly to the user. I did advocate for targeted
          infrastructure changes to support better filtering and improved query speed, which helped the
          experience feel more responsive without requiring deep architectural work.
        </li>
        <li>
          Redesigning the core feature also created downstream implications for onboarding and marketing
          assets. We prioritised in-product onboarding first, shipping updated flows in parallel with the
          feature release, and updated website and external assets incrementally over time as the new
          experience became established.
        </li>
      </ol>
    </div>
  </>

const Replenish_Numbers_2 = () =>
  <>
    <p>
      Following launch, the new Plan & Replenish experience demonstrated clear shifts in both
      usage and perception:
    </p>
    <div className={csStyles.numbers}>
      <div className={csStyles.numberInfo}>
        <span className={montserrat_alternates_bold.className}>19%</span>
        <p>of users now edit their plan before placing an order — <span className={montserrat_alternates_bold.className}>up from 10%</span></p>
      </div>
      <div className={csStyles.numberInfo}>
        <span className={montserrat_alternates_bold.className}>68%</span>
        <p>of users now complete more than one core planning action — <span className={montserrat_alternates_bold.className}>up from 38%</span></p>
      </div>
      <div className={csStyles.numberInfo}>
        <span className={montserrat_alternates_bold.className}>27%</span>
        <p>of customers updated their plan in the past 30 days — <span className={montserrat_alternates_bold.className}>up from 12%</span></p>
      </div>
    </div>
    <p>
      Qualitative feedback highlighted improved clarity, stronger trust in recommendations, and
      reduced reliance on external spreadsheets.
    </p>
    <p>
      During the same period, Prediko grew from 
      <span className={montserrat_alternates_bold.className}> 200 to over 500 customers </span> 
      and from <span className={montserrat_alternates_bold.className}>$400k to $1.5m</span> ARR. 
      Churn and conversion rates remained stable throughout — a meaningful signal that the
      product improvements held up as the business scaled beyond the high-touch early-adopter phase,
      where customers could no longer rely on founder support to fill gaps in the experience.
    </p>
  </>;


const Replenish_Learnings = () =>
  <>
    <div>
      <p>
        Key takeaways from the project:
      </p>
      <ul className={csStyles.list}>
        <li>
          Behaviour change follows clarity, not enforcement. Users adopt new workflows when the
          value is self-evident.
        </li>
        <li>
          Long-term visibility is foundational in planning tools; without it, even accurate
          forecasts struggle to earn trust.
        </li>
        <li>
          Validating the framing of a problem is as important as validating the usability of a
          solution.
        </li>
        <li>
          Designing AI-assisted decision tools requires explaining uncertainty and trade-offs,
          not just presenting outputs.
        </li>
      </ul>
    </div>
    <p>
      If I were to approach this again, I would invest even earlier in concept-level testing
      of mental models and success criteria before committing to detailed journey design.
    </p>
  </>

export function ReplenishPeek() {
  return (
    <>
      <Replenish_Role />
      <Replenish_Intro />
      <Replenish_Overview />
    </>
  );
}

export function Title() {
  return <h1>Making inventory planning indispensable: Prediko&apos;s core replenishment redesign</h1>;
}

export default function Page() {
  return (
    <>
      <Replenish_Intro />
      <Replenish_Role />
      <Replenish_Overview />
      <Replenish_Goal />
      <Replenish_Problem />
      <Replenish_Numbers />
      <Replenish_Process />
      <Replenish_Test />
      <Replenish_Build />
      <Replenish_Numbers_2 />
      <Replenish_Learnings />
    </>
  );
}
