import ContentCard from "../ui/cards/contentCard";

import { experience } from "../lib/work";

import cardStyles from '../ui/cards/cards.module.css';
import pageStyles from '../page.module.css';
import styles from './work.module.css';

export default function Page() {
  const experienceList = experience.map(job => {
    return (
      <ContentCard
        key={job.id}
        href={job.link}
        isBlank
      >
        <h3>{job.title ? job.title : null}</h3>
        <h4>{job.role ? job.role : null}</h4>
        <h4>{job.dates ? job.dates : null}</h4>
        {
          job.info ? 
            (
              <div className={cardStyles.info}>
                {
                  job.info.map((info, index) => {
                    return (
                      <p
                        key={`job-${index}`}
                      >
                        {info}
                      </p>
                    )
                  })
                }
              </div>
            ) : null
        }
      </ContentCard>
    )
  })

  return (
    <main className={pageStyles.sectionContainer}>
      <div className={styles.workList}>
        {experienceList}
      </div>
    </main>
  )
}