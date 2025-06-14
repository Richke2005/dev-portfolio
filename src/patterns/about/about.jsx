import React from 'react';
import Section from '@/components/section/section.jsx';
import profileData from '@/data/profile/profile.js';

export default function About() {
    return (
        <Section title={" Trasformando Ideias Em Soluções Digitais"}>
            {profileData.about}
        </Section>
    );
}