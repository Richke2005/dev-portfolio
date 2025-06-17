import React from 'react';
import Section from '@/components/section/section.jsx';
import profileData from '@/data/profile/profile.js';

export default function About() {
    return (
        <Section title={" Soluções Digitais Sob Medida, com Paixão por Tecnologia"}>
            {profileData.about}
        </Section>
    );
}