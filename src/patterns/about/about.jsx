import React from 'react';
import Section from '@/components/section/section.jsx';
import profileData from '@/data/profile/profile.js';

export default function About() {
    return (
        <Section title={"Custom Digital Solutions, with Passion for Technology"}>
            {profileData.about}
        </Section>
    );
}