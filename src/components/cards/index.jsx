import React from "react";
import Image from "next/image";

const Card = ({image, title, text, style, titleStyle, textStyle, children}) =>{
    return <div style={style || styles.card}>
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

const styles =  {
    card: {
        display: "flex",
        backgroundColor: "white",
        flexDirection: "column",
        padding: "20px",
        borderRadius: "20px",
        textAlign: "center",
        width: "300px",
        margin: "16px auto"
    },

    image: {
        borderRadius: "20px",
        width: "100%",
        maxHeight: "300px",
        objectFit: "cover",
        marginBottom: "20px"
    },

    title:{
        fontSize: "24px",
        marginBottom: "8px",
        color: "black"
    },

    text: {
        fontSize: "16px",
        color: "gray",
        marginBottom: "16px"
    }
}
export default Card;