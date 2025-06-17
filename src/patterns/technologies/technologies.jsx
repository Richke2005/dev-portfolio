import React from 'react';
import Section from '@/components/section/section.jsx';
import TechnologieCard from '@/components/cards/technologieCard/technologieCard';
import technologies from '@/data/technologies/technologies.js';


export default function Technologies() {
    return (
        <Section title={"Coding Skills"} isAnimated={true}>
          <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between"}}>
            {technologies.map((tech, index) => (
                <TechnologieCard 
                key={index} 
                {...tech}/>
            ))}
          </div>
        </Section>
    );
}