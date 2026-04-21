import React from 'react';
import Section from '@/components/section/section';
import SliderCoverFlow from '@/components/sliders/coverFlow/sliderCoverFlow.jsx';
import ExperienceCard from '@/components/cards/experienceCard/experienceCard';
import experience from '@/data/experiences/experiences.js';
import styles from './education.module.css';

const milestones = [
    { year: "2023", title: "Started programming" },
    { year: "2024", title: "Computer Science journey" },
    { year: "2025", title: "Production systems and banking projects" },
    { year: "2026", title: "AI + scalable architecture focus" }
];

export default function Education() {
    return (
        <Section title={"Experience Timeline"} isAnimated={true}>
            <div style={{position: "relative", width: "100%"}}>
                <SliderCoverFlow slidesPerView={2} components={experience.map((exp, index) => (
                <ExperienceCard
                    key={index}
                    icon={exp.icon}
                    title={exp.title}
                    subTitle={exp.subTitle}
                    period={`${exp.startYear} - ${exp.endYear}`}
                />))}/>
            </div>
            <div className={styles.timeline}>
                {milestones.map((milestone) => (
                    <div key={milestone.year} className={styles.timelineItem}>
                        <strong>{milestone.year}</strong>
                        <p>{milestone.title}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
