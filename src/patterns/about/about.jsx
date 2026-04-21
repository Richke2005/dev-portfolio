import React from 'react';
import Section from '@/components/section/section.jsx';
import profileData from '@/data/profile/profile.js';

export default function About() {
    return (
        <Section title={"Real Experience"} isAnimated={true}>
            <p style={{ color: "var(--subtext)", marginBottom: "16px" }}>
                Worked with systems for finance • education • automation • web platforms
            </p>
            <p>{profileData.about}</p>
            <ul style={{ marginTop: "16px", marginLeft: "18px", color: "var(--subtext)", lineHeight: 1.8 }}>
                <li>Banking systems and corporate APIs (Bradesco ecosystem)</li>
                <li>Microservices and legacy modernization</li>
                <li>Production-ready integrations and automation workflows</li>
                <li>Backend-first mindset with scalable architecture</li>
            </ul>
        </Section>
    );
}
