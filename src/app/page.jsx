import React from "react";
import styles from "./page.module.css";
import Profile from "../patterns/profile/profile.jsx";
import profileData from "../data/profile/profile.js";
import TopBar from "@/patterns/topBar/topBar";
import Button from "@/components/buttons/button.jsx";
import LinkGroup from "@/patterns/socialLinks/linkGroup.jsx";
import Section from "@/components/section/section.jsx";
import ImageCard from "@/components/cards/imageCard/imageCard.jsx";
import image from "../../public/images/appImage.png";
const tags = ["React Native", "express.js", "MongoDB"]


export default function Home() {
  return <div className={styles.page}>
      <TopBar />
        
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
          <Section title={" Trasformando Ideias Em Soluções Digitais"}>
            {profileData.about}
          </Section>
          <Section title={"Projetos Recentes"} isAnimated={true}>
            <ImageCard
            title={"Pathfinders App"}
             coverImage={image} 
             projectImages={[image, image, image]}
             
             tags={tags}/>

            <ImageCard
            title={"Pathfinders App"}
             coverImage={image} 
             projectImages={[image, image, image]}
             
             tags={tags}/>
          </Section>
          <div style={{height: 1000}}></div>
        </div>
      </div>
    </div>
}
