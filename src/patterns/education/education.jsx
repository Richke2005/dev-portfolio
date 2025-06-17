import React from 'react';
import Section from '@/components/section/section';
import SliderCoverFlow from '@/components/sliders/coverFlow/sliderCoverFlow.jsx';
import ExperienceCard from '@/components/cards/experienceCard/experienceCard';
import experience from '@/data/experiences/experiences.js';

export default function Education() {
    return (
        <Section title={"Formação & Experiências"} isAnimated={true}>
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
        </Section>
    );
}