"use client";
import React from 'react';
import Section from '@/components/section/section';
import CustomizedSlider from '@/components/sliders/customizedSlider';
import ExperienceCard from '@/components/cards/experienceCard/experienceCard';
import experience from '@/data/experiences/experiences.js';


export default function Education() {
    const [windowWidth, setWindowWidth] = React.useState({
            width: undefined,
            height: undefined
        });
    
        React.useEffect(()=>{
            function handleResize() {
                setWindowWidth({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            }
            handleResize(); // Set initial size
    
            window.addEventListener("resize", handleResize);
        }, []);

    return (
        <Section title={"Formação & Experiências"} isAnimated={true}>
            <div style={{ width: windowWidth.width < 800 ? 5/6 * windowWidth.width : "700px", margin: "0 auto" }}>
                <CustomizedSlider
                    slidesPerView={ windowWidth.width < 800 ? 1 : 2}
                    spaceBetween={20}
                    pagination={{ clickable: true, el: "s" }}
                    navigation={true}
                    autoplay={{ delay: 1000, disableOnInteraction: false }}
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