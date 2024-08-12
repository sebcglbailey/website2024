import ContentCard from "../ui/cards/contentCard";

import { education } from "../lib/education";

import cardStyles from '../ui/cards/cards.module.css';
import pageStyles from '../page.module.css';
import styles from './education.module.css';

export default function Page() {
  const educationList = education.map(school => {
    return (
      <ContentCard
        key={school.id}
        href={school.link}
        isBlank
      >
        <h3>{school.title ? school.title : null}</h3>
        <h4>{school.dates ? school.dates : null}</h4>
        {
          school.info ? 
            (
              <div className={cardStyles.info}>
                {
                  school.info.map((info, index) => {
                    return (
                      <p
                        key={`school-${index}`}
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
      <div className={styles.schoolList}>
        {educationList}
      </div>
    </main>
  )
}