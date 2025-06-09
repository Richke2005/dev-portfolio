import React from "react";
import styles from "./page.module.css";
import Profile from "@/patterns/profile/profile.js";
import profileData from "@/data/profile/profile";



export default function Home() {
  return <div className={styles.page}>
      <div className={styles.centralized}>
        <Profile 
          image={profileData.image}
          name={profileData.name} 
          bio={profileData.bio}
        >
        </Profile>
        
        <div className={styles.pageContent}>
          <section className="presentation">
          <h2 style={{color: "white", fontSize: "50px"}}>
            Trasformando Ideias Em Soluções <strong style={{color: "purple"}}>Digitais</strong>
          </h2>
          <p>
            Sou técnico em Desenvolvimento de Sistemas e atualmente curso Ciência da Computação. Amo tecnologia e estou sempre em busca de novos aprendizados e desafios que me permitam crescer tanto tecnicamente quanto como profissional.
            Atuo com foco em organização, dedicação e responsabilidade.
            Bora trocar uma idéia ?!
          </p>
          </section>
        </div>
      </div>
    </div>
}
