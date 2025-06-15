"use client";
import React from "react";
import Section from "@/components/section/section.jsx";
import ImageCard from "@/components/cards/imageCard/imageCard.jsx";
import projects from "@/data/projects/projects.js";
const tags = ["React Native", "express.js", "MongoDB"]



export default function Projects() {
      const [windowWidth, setWindowWidth] = React.useState({
          width: undefined,
          height: undefined
      });
  
      React.useEffect(()=>{
          function handleResize() {
              setWindowWidth({
                  width: window.innerWidth,
                  height: window.innerHeight
              });
          }
  
          window.addEventListener("resize", handleResize);
        
        }, []);

    return<Section title={"Projetos Recentes"} isAnimated={true}>
    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap"}}>
        {projects.map((project, index) => {
            if(index === 0  || index % 3 === 0 || windowWidth.width < 800){
            return <ImageCard
            key={index}
                    title={project.title}
                    description={project.description}
                    coverImage={project.coverImage} 
                    projectImages={project.projectImages}
                    tags={project.tags}
                    size={"big"}/>
            } else{
            return <ImageCard
            key={index}
                    title={project.title}
                    description={project.description}
                    coverImage={project.coverImage} 
                    projectImages={project.projectImages}
                    tags={project.tags}
                    size={"medium"}/>
            }
        })}
    </div>
    </Section>
}