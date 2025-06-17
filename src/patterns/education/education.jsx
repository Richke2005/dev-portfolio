"use client";
import React from 'react';
import Section from '@/components/section/section';
import CustomizedSlider from '@/components/sliders/customizedSlider';
import ExperienceCard from '@/components/cards/experienceCard/experienceCard';
import experience from '@/data/experiences/experiences.js';


export default function Education() {

    return (
        <Section title={"Formação & Experiências"} isAnimated={true}>
            <div style={{ width: "100%", display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center" }}>
               {experience.map((exp, index) => (
                    <ExperienceCard
                        key={index}
                        icon={exp.icon}
                        title={exp.title}
                        subTitle={exp.subTitle}
                        period={`${exp.startYear} - ${exp.endYear}`}

                    />))
                }
            </div>
        </Section>
    );
}