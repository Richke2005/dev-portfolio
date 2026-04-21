"use client";
import React from "react";
import Section from "@/components/section/section.jsx";
import ImageCard from "@/components/cards/imageCard/imageCard.jsx";
import projects from "@/data/projects/projects.js";

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
            handleResize(); // Set initial size
  
          window.addEventListener("resize", handleResize);
        
        }, []);

    return<Section title={"Featured Projects"} isAnimated={true}>
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
                    liveDemo={project.liveDemo}
                    github={project.github}
                    caseStudy={project.caseStudy}
                    size={"big"}/>
            } else{
            return <ImageCard
            key={index}
                    title={project.title}
                    description={project.description}
                    coverImage={project.coverImage} 
                    projectImages={project.projectImages}
                    tags={project.tags}
                    liveDemo={project.liveDemo}
                    github={project.github}
                    caseStudy={project.caseStudy}
                    size={"medium"}/>
            }
        })}
    </div>
    </Section>
}
