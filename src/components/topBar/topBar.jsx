"use client";
import React from "react"
import styles from "./topBar.module.css";
import Button from "@/components/buttons/button.jsx";
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import BuildIcon from '@mui/icons-material/Build';
import SchoolIcon from '@mui/icons-material/School';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EmailIcon from '@mui/icons-material/Email';

export default function TopBar() {
    const[mySectionsPos, setSections] = React.useState([]);
    const [windowWidth, setWindowWidth] = React.useState({
        width: undefined,
        height: undefined
    });

    React.useEffect(()=>{
        function handleResize() {
            setWindowWidth({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        window.addEventListener("resize", handleResize);

        const downToElements = Array.from(document.getElementsByTagName("section"));
        setSections(downToElements.map((section)=> section.offsetTop));
        return () => window.removeEventListener("resize", handleResize);
    },[windowWidth]);

    function downToPos(y){
        window.scrollTo({top: y, behavior: "smooth"})
    }

    return<div className={styles.topBarContainer}>
            <div style={{height: "50px"}}>
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
                        name="Projetos" 
                        onClick={()=>downToPos(mySectionsPos[1])}>
                    <FolderIcon />
                    </Button>
                </li>

                <li className={styles.icon}>
                    <Button 
                        color="primary" 
                        shape="transparent" 
                        name="Skills"
                        onClick={()=>downToPos(mySectionsPos[2])}>
                    <BuildIcon />
                    </Button>
                    
                </li>

                <li className={styles.icon}>
                    <Button 
                        color="primary"
                        shape="transparent" 
                        name="Formação"
                        onClick={()=>downToPos(mySectionsPos[3])}>
                    <SchoolIcon />
                    </Button>
                </li>

                <li className={styles.icon}>
                    <Button 
                        color="primary"
                        shape="transparent" 
                        name="Blog"
                        >
                    <NewspaperIcon />
                    </Button>
                </li>

                <li className={styles.icon}>
                    <Button 
                        color="primary"
                        shape="transparent" 
                        name="Contato"
                        onClick={()=>downToPos(mySectionsPos[4])}>
                    <EmailIcon />
                    </Button>
                </li>
            </ul>
        </div>
      </div>
}