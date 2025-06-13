"use client";
import React from "react";
import Image from "next/image";
import styles from "./imageCard.module.css";
import Button from "@/components/buttons/button.jsx";
import CustomizedDialogs from "@/components/dialogs/customizedDialog";
import CustomizedSlider from "@/components/sliders/customizedSlider";

const ImageCard = ({coverImage, projectImages, tags, title})=>{
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    return <React.Fragment>
     <div onClick={handleClickOpen} className={styles.imageCard}>
        <Image src={coverImage} alt={title} className={styles.image}/>
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
      <CustomizedDialogs 
        title={title}
        description={`This project showcases the use of ${tags.join(", ")} technologies.`}
        open={open} 
        onClose={handleClose}>
        <CustomizedSlider
         images={projectImages}/>
     </CustomizedDialogs>
    </React.Fragment>
}

export default ImageCard;