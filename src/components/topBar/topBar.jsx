import React from "react"
import styles from "./topBar.module.css";
import LinkButton from "../buttons/linkButton";
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import BuildIcon from '@mui/icons-material/Build';
import SchoolIcon from '@mui/icons-material/School';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EmailIcon from '@mui/icons-material/Email';

export default function TopBar() {
    return<div className={styles.topBarContainer}>
            <div style={{height: "50px"}}>
            <ul className={styles.topBar}>
                <li className={styles.icon}>
                    <LinkButton 
                        href="/"
                        color="primary" 
                        shape="transparent" 
                        name="Home"  
                        isActive={false}>
                    <HomeIcon />
                    </LinkButton>
                </li>

                <li className={styles.icon}>
                    <LinkButton 
                    href="/projects"
                        color="primary" 
                        shape="transparent" 
                        name="Projetos">
                    <FolderIcon />
                    </LinkButton>
                </li>

                <li className={styles.icon}>
                    <LinkButton 
                    href="/skills"
                        color="primary" 
                        shape="transparent" 
                        name="Skills">
                    <BuildIcon />
                    </LinkButton>
                    
                </li>

                <li className={styles.icon}>
                    <LinkButton 
                        href="/education"
                        color="primary"
                        shape="transparent" 
                        name="Formação">
                    <SchoolIcon />
                    </LinkButton>
                </li>

                <li className={styles.icon}>
                    <LinkButton 
                        href="/blog"
                        color="primary"
                        shape="transparent" 
                        name="Blog"
                        >
                    <NewspaperIcon />
                    </LinkButton>
                </li>

                <li className={styles.icon}>
                    <LinkButton 
                        href="/contact"
                        color="primary"
                        shape="transparent" 
                        name="Contato">
                    <EmailIcon />
                    </LinkButton>
                </li>
            </ul>
        </div>
      </div>
}