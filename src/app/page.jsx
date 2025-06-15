import React from "react";
import styles from "./page.module.css";
import Profile from "../components/cards/profileCard/profile.jsx";
import TopBar from "@/components/topBar/topBar.jsx";
import Button from "@/components/buttons/button.jsx";
import LinkGroup from "@/components/buttonGroup/socialLinks/linkGroup.jsx";
import profileData from "../data/profile/profile.js";
import Projects from "@/patterns/projects/projects";
import About from "@/patterns/about/about";
import Technologies from "@/patterns/technologies/technologies";
import Education from "@/patterns/education/education.jsx";
import Contact from "@/patterns/contact/contact";


export default function Home() {
  return <div className={styles.page}>
      <div className={styles.centralized}>
        <Profile 
          image={profileData.image}
          name={profileData.name} 
          bio={profileData.bio}
        >
          {//Todo try to modularize this component to use the new Card component
          }
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
          <About/>
          <Projects/>
          <Technologies/>
          <Education/>
          <Contact/>
        </div>
      </div>
    </div>
}
