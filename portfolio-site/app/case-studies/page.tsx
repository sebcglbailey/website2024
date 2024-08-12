import ContentCard from "../ui/cards/contentCard";

import { Intro, Overview } from './clearscore-design-system/page';

export default function Page() {
  return (
    <>
      <h1>Case Studies</h1>
      <main>
        <ContentCard
          href="./case-studies/clearscore-design-system"
        >
          <h2>ClearScore Design System</h2>
          <Intro />
          <Overview />
        </ContentCard>
      </main>
    </>
  )
}