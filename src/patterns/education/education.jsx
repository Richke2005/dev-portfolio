import React from 'react';
import Section from '@/components/section/section';
import CustomizedSlider from '@/components/sliders/customizedSlider';
import ExperienceCard from '@/components/cards/experienceCard/experienceCard';
import experience from '@/data/experiences/experiences.js';


export default function Education() {
    return (
        <Section title={"Formação & Experiências"} isAnimated={false}>
            <div style={{ width: 700 }}>
                <CustomizedSlider
                    slidesPerView={1}
                    components={ experience.map((exp, index) => (
                    <ExperienceCard
                        key={index}
                        title={exp.title}
                        subTitle={exp.subTitle}
                        period={`${exp.startYear} - ${exp.endYear}`}
                        icon={exp.icon}
                    />))}
                />
            </div>
        </Section>
    );
}