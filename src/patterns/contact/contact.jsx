import React from 'react';
import Section from '@/components/section/section';

export default function Contact() {
    return (
      <Section title={"Bora Criar Algo Fora Da Caixa"} isAnimated={false}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h3>Entre em Contato</h3>
          <p>Você pode me encontrar nas seguintes plataformas:</p>
          <ul>
            <li>Email: richardke18@gmail.com</li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/richardke18/" target="_blank" rel="noopener noreferrer">Richard Ke</a></li>
            </ul>
        </div>
        </Section>
    )
}