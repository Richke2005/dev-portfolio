import React from "react";
import styles from "./page.module.css";
import Profile from "@/patterns/profile/profile.js"
import profileData from "@/data/profile/profile";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import Button from '@mui/material/Button';


export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.centralized}>
        <Profile 
          image={profileData.image}
          name={profileData.name} 
          bio={profileData.bio}
        >
          <Stack direction="row" spacing={2}>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete" disabled color="primary">
              <DeleteIcon />
            </IconButton>
            <IconButton color="secondary" aria-label="add an alarm">
              <AlarmIcon />
            </IconButton>
          </Stack>
          <Button 
          variant="contained" 
          color="secondary">Let's talk</Button>
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
  );
}
