import React from "react";
import styles from "./page.module.css";
import Profile from "../patterns/profile/profile.jsx";
import profileData from "../data/profile/profile.js";
import ButtonGroup from "../patterns/buttonGroup/buttonGroup.jsx"
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import BuildIcon from '@mui/icons-material/Build';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import Link from "next/link";
import { height } from "@mui/system";

export default function Home() {
  return <div className={styles.page}>
      <div className={styles.buttonContainer}>
        <div style={{width: "300px", height: "50px"}}>
          <ButtonGroup>
            <HomeIcon/>
            <FolderIcon/>
            <BuildIcon/>
            <WorkOutlineIcon/>
        </ButtonGroup> 
        </div>
        
      </div>
        

      <div className={styles.centralized}>
        <Profile 
          image={profileData.image}
          name={profileData.name} 
          bio={profileData.bio}
        >
        </Profile>

        <div className={styles.rightContent}>
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

          <section style={{ height: "1000px"}}>
           
          </section>
        </div>
      </div>
    </div>
}
