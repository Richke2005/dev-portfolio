import Link from "next/link";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.gridBackground} />
      <div className={styles.content}>
        <p className={styles.kicker}>Richard Carvalho</p>
        <h1 className={styles.heroTitle}>
          Software Engineer building intelligent systems for finance, education
          and automation.
        </h1>
        <p className={styles.heroSubTitle}>
          <span className={styles.typing}>
            Back-end • AI • Scalable Systems • Real Projects
          </span>
        </p>
        <div className={styles.actions}>
          <Link href="/#featured-projects" className={styles.primaryAction}>
            View Projects
          </Link>
          <Link href="/#contact" className={styles.secondaryAction}>
            Hire Me
          </Link>
        </div>
      </div>
    </section>
  );
}
