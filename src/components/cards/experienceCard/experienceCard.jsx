
import React from "react";
import styles from "./experienceCard.module.css"
import Image from "next/image";

export default function ExperienceCard({ icon, title, subTitle, desc, period, cardStyle, titleStyle, textStyle, children }) {

    return(
        <div className={styles.experienceCard}>
            <div>
                <p>{period}</p> 
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", width: "100%" }}>
                {icon &&  <Image src={icon} alt={title} style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "20px" }} />}
                <div className={styles.contentCard}>
                    <h3 style={{ margin: "0" }}>{title}</h3>
                    <p style={{ margin: "0" }}>{subTitle}</p>
                    {desc && <p style={{ margin: "0" }}>{desc}</p>}
                </div>
            </div>
        </div>
    )
}