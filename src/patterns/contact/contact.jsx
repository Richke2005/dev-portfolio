import React from 'react';
import Section from '@/components/section/section';
import ContacForm from '@/components/forms/contactForm';


export default function Contact() {
    return (
      <Section title={"Vamos Criar Algo Incrível"} isAnimated={false}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <ContacForm
            placeholder="Digite seu nome"
          />
        </div>
        </Section>
    )
}