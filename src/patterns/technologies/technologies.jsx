import React from 'react';
import Section from '@/components/section/section.jsx';
import Image from 'next/image';
import technologies from '@/data/technologies/technologies.js';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CustomLinearLabel from '@/components/linearProgress/customLinearLabel';

export default function Technologies() {
    return (
        <Section title={"Coding Skills"} isAnimated={false}>
          <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-start" }}>
            {technologies.map((tech, index) => (
                <div key={index} style={{ 
                    display: "flex", 
                    flexDirection: "row",
                    alignItems: "center", 
                    padding: "20px", 
                    borderRadius: "20px", 
                    backgroundColor: "var(--layer1)",
                    margin: "5px"
                 }}>
                <tech.Icon/>
                <div style={{marginLeft: "10px"}}>
                    <h3>{tech.name}</h3>
                    <div style={{ width: "200px", height: "20px", display: "flex", alignItems: "center"}}>
                        <CustomLinearLabel
                            finalvalue={tech.knowledge}
                        />
                     </div>
                </div>
            </div>
            )
            )}
          </div>
        </Section>
    );
}