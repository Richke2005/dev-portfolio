import React from 'react';
import Section from '@/components/section/section';
import profile from '@/data/profile/profile';


export default function Education() {
    return (
        <Section title={"Formação & Experiências"} isAnimated={false}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h3>Graduação Em Ciência Da Computação</h3>
                <p>Universidade Municipal São caetano Do Sul (USCS)</p>
                <p>Conclusão: Dezembro de 2027</p>
            </div>
        </Section>
    );
}