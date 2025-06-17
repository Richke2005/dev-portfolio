import React from "react";
import RightContent from "@/components/rightContent/rightContent";
import Projects from "@/patterns/projects/projects";
import About from "@/patterns/about/about";
import Technologies from "@/patterns/technologies/technologies";
import Education from "@/patterns/education/education.jsx";
import Contact from "@/patterns/contact/contact";

export default function Home() {
  return <>
        <RightContent>
          <About/>
          <Projects/>
          <Technologies/>
          <Education/>
          <Contact/>
        </RightContent>
    </>
}
