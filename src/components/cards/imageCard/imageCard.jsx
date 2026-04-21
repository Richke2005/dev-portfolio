"use client";
import React from "react";
import Image from "next/image";
import styles from "./imageCard.module.css";
import Button from "@/components/buttons/button.jsx";
import CustomizedDialogs from "@/components/dialogs/customizedDialog.jsx";
import CustomizedSlider from "@/components/sliders/normalSlider/normalSlider.jsx";
import Link from "next/link";

const ImageCard = ({title, description, tags, coverImage, projectImages, size, liveDemo, github, caseStudy })=>{
    const [open, setOpen] = React.useState(false);
    const defaultSize = size || "big";
    const projectLinks = [
      { label: "Live Demo", href: liveDemo },
      { label: "GitHub", href: github },
      { label: "Case Study", href: caseStudy }
    ].filter((projectLink) => typeof projectLink.href === "string" && projectLink.href.trim().length > 0);

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
        {projectLinks.length > 0 && (
          <div className={styles.cardActions}>
            {projectLinks.map((projectLink) => (
              <Link
                key={`${title}-${projectLink.label}`}
                href={projectLink.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
              >
                {projectLink.label}
              </Link>
            ))}
          </div>
        )}
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
