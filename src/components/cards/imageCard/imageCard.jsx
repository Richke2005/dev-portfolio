"use client";
import React from "react";
import Image from "next/image";
import styles from "./imageCard.module.css";
import Button from "@/components/buttons/button.jsx";

const ImageCard = ({image, tags, title})=>{
    return <div onClick={()=>console.log("Hello world")} className={styles.imageCard}>
        <Image src={image} alt={title} className={styles.image}/>
        <div className={styles.cardTitle}>
            <h2>{title}</h2>
        </div>
        <div className={styles.tags}>
            {tags && tags.map(tag=>(
                <Button key={tag}
                 name="Technologie" 
                 shape="contained"
                 color="primary"
                 style={{marginLeft: "10px"}}>
                {tag}
            </Button>))}
        </div>
    </div>
}

export default ImageCard;