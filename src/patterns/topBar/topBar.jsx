"use client";
import React from "react"
import styles from "./topBar.module.css";
import Button from "@/components/buttons/button.jsx";
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import BuildIcon from '@mui/icons-material/Build';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

export default function TopBar() {
    const[mySectionsPos, setSections] = React.useState([]);

    React.useEffect(()=>{
        const downToElements = Array.from(document.getElementsByTagName("section"));
        setSections(downToElements.map((section)=> section.offsetTop));
    },[]);

    function downToPos(y){
        window.scrollTo({top: y, behavior: "smooth"})
    }

    return<div className={styles.buttonContainer}>
            <div style={{width: "300px", height: "50px"}}>
            <ul className={styles.topBar}>
                <li className={styles.icon}>
                    <Button 
                        color="primary" 
                        shape="transparent" 
                        name="Home"  
                        isActive={false}>
                    <HomeIcon />
                    </Button>
                </li>
                <li className={styles.icon}>
                    <Button 
                        color="primary" 
                        shape="transparent" 
                        name="Projects" 
                        onClick={()=>downToPos(mySectionsPos[1])}>
                    <FolderIcon />
                    </Button>
                </li>
                <li className={styles.icon}>
                    <Button color="primary" shape="transparent" name="Skills">
                    <BuildIcon />
                    </Button>
                </li>
                <li className={styles.icon}>
                    <Button color="primary" shape="transparent" name="Contact">
                    <WorkOutlineIcon />
                    </Button>
                </li>
            </ul>
        </div>
      </div>
}