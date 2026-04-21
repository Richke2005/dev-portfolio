import React from "react";
import styles from "./card.module.css";
import Image from "next/image";

const Card = ({image, title, text, cardStyle, titleStyle, textStyle, children}) =>{
    return <div className={cardStyle || styles.card}>
            {image && <Image src={image} alt={title} className={styles.image}/>}
            <h2 className={titleStyle || styles.title} style={titleStyle}>
            {title}
            </h2>

            <p className={textStyle || styles.text}>
            {text}
            </p>
            
            {children && <div className={styles.children}>{children}</div>}       
    </div>
}

export default Card;