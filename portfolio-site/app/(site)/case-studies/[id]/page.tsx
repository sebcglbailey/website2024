import dynamic from "next/dynamic";
import { Suspense } from "react";

import ContentCard from "@/app/ui/cards/contentCard";

import csStyles from "../case-studies.module.css";

export default function Slate({ params }: { params: { id: string } }) {
  const id = params.id;
  const Page = dynamic(() => import(`@/app/ui/case-studies/${id}`), {
    suspense: true,
  });
  const Title = dynamic(
    () => import(`@/app/ui/case-studies/${id}`).then((res) => res.Title),
    {
      suspense: true,
    }
  );
  return (
    <>
      {Title && <Title />}
      <ContentCard>
        <div className={csStyles.container}>
          <div className={csStyles.info}>
            <Suspense fallback={<div>Loading...</div>}>
              <Page />
            </Suspense>
          </div>
        </div>
      </ContentCard>
    </>
  );
}
