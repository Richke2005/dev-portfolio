import React from "react";
import styles from "./page.module.css";
import Profile from "../patterns/profile/profile.jsx";
import profileData from "../data/profile/profile.js";
import Button from "@/components/buttons/button.jsx";
import LinkGroup from "@/patterns/socialLinks/linkGroup";
import TopBar from "@/patterns/topBar/topBar";


export default function Home() {
  return <div className={styles.page}>
      <div className={styles.buttonContainer}>
        <div style={{width: "300px", height: "50px"}}>
          <TopBar />
        </div>
      </div>
        
      <div className={styles.centralized}>
        <Profile 
          image={profileData.image}
          name={profileData.name} 
          bio={profileData.bio}
        >
          <div style={{ padding: "5px", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div>
              <LinkGroup links={profileData.socialMedias} />
            </div>

            <div style={{marginTop: "70px"}}>
              <Button 
                color="primary" 
                shape="contained" 
                href={profileData.resumeLink} 
                name="Currículo"
              >
                Baixar Currículo
              </Button>
            </div>
          </div>
        </Profile>

        <div className={styles.rightContent}>
          <section className="presentation">
          <h2 style={{color: "white", fontSize: "50px"}}>
            Trasformando Ideias Em Soluções <strong style={{color: "var(--primary"}}>Digitais</strong>
          </h2>
          <p>
            Sou técnico em Desenvolvimento de Sistemas e atualmente curso Ciência da Computação. Amo tecnologia e estou sempre em busca de novos aprendizados e desafios que me permitam crescer tanto tecnicamente quanto como profissional.
            Atuo com foco em organização, dedicação e responsabilidade.
            Bora trocar uma idéia ?!
          </p>

          </section>

          <section style={{ height: "1000px"}}>
           
          </section>
        </div>
      </div>
    </div>
}
