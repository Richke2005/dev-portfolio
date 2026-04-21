import React from "react";
import Section from "@/components/section/section";
import styles from "./liveMetrics.module.css";

const metrics = [
  "12+ Projects delivered",
  "4+ Core stacks mastered",
  "1000+ Study hours",
  "Active deployments",
  "Building daily"
];

export default function LiveMetrics() {
  return (
    <Section title={"Live Metrics"} isAnimated={true}>
      <div className={styles.metricsGrid}>
        {metrics.map((metric, index) => (
          <div key={`${metric}-${index}`} className={styles.metricCard}>
            {metric}
          </div>
        ))}
      </div>
    </Section>
  );
}
