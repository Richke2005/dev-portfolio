import React from "react";
import RightContent from "@/components/rightContent/rightContent";
import Hero from "@/patterns/hero/hero";
import Projects from "@/patterns/projects/projects";
import About from "@/patterns/about/about";
import Technologies from "@/patterns/technologies/technologies";
import Education from "@/patterns/education/education.jsx";
import LiveMetrics from "@/patterns/liveMetrics/liveMetrics";
import Blog from "@/patterns/blog/blog";
import Contact from "@/patterns/contact/contact";

export default function Home() {
  return <>
        <RightContent>
          <Hero/>
          <About/>
          <div id="featured-projects">
            <Projects/>
          </div>
          <Education/>
          <Technologies/>
          <LiveMetrics/>
          <Blog/>
          <div id="contact">
            <Contact/>
          </div>
        </RightContent>
    </>
}
