import React from "react";
import styles from "./style.js";
import Image from "next/image";

const Card = ({image, title, text, cardStyle, titleStyle, textStyle, children}) =>{
    return <div style={cardStyle || styles.card}>
            {image && <Image src={image} alt={title} style={styles.image}/>}
            <h2 style={titleStyle || styles.title}>
            {title}
            </h2>

            <p style={textStyle || styles.text}>
            {text}
            </p>
            
            {children && <div style={{marginTop: "16px"}}>{children}</div>}       
    </div>
}

export default Card;