import styles from './intro.module.css';

const things = [
  "design",
  "lead",
  "code",
  "manage",
  "systemise",
  "paint",
  "snowboard",
  "prototype",
]

export default function Intro() {
  return (
    <div className={styles.introContainer}>
      <h1>Hi, I&apos;m Seb</h1>
      <div className={styles.thingsContainer}>
        <span>I...</span>
        <div className={styles.introThings}>
          {things.map(thing => {
            return (
              <span
                key={`thing-${thing}`}
                className={styles.thing}
              >
                {thing}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}