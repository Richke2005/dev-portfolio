"use client";
import React from "react";
import Image from "next/image";
import styles from "./imageCard.module.css";
import Button from "@/components/buttons/button.jsx";
import CustomizedDialogs from "@/components/dialogs/customizedDialog";
import CustomizedSlider from "@/components/sliders/customizedSlider";

const ImageCard = ({title, description, tags, coverImage, projectImages, size })=>{
    const [open, setOpen] = React.useState(false);
    const defaultSize = size || "big";

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    return <React.Fragment>
     <div onClick={handleClickOpen} className={`${styles.imageCard} ${styles[defaultSize]}`}>
        <Image src={coverImage} alt={title} className={styles.image}/>
        <div className={styles.cardTitle}>
            <h2>{title}</h2>
        </div>
        <div className={styles.tags}>
            {tags && tags.map(tag=>(
              <div key={tag} style={{marginLeft: "10px", marginBottom: "10px"}}>
                <Button key={`Button: ${tag}`}
                  name="Technologie" 
                  shape="contained"
                  color="primary"
                  >
                {tag}
                </Button>
              </div>
               ))}
        </div>
    </div>
      <CustomizedDialogs 
        title={title}
        description={description}
        open={open} 
        onClose={handleClose}>
        <CustomizedSlider
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={20}
         images={projectImages}/>
     </CustomizedDialogs>
    </React.Fragment>
}

export default ImageCard;