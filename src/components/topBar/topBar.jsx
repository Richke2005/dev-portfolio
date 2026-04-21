"use client";

import React, { useEffect, useState } from "react"
import styles from "./topBar.module.css";
import LinkButton from "../buttons/linkButton";
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import BuildIcon from '@mui/icons-material/Build';
import SchoolIcon from '@mui/icons-material/School';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EmailIcon from '@mui/icons-material/Email';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function TopBar() {
    const [isLightTheme, setIsLightTheme] = useState(false);

    useEffect(() => {
        const shouldUseLightTheme = document.documentElement.getAttribute("data-theme") === "light";
        setIsLightTheme(shouldUseLightTheme);
    }, []);

    function handleThemeChange() {
        const nextIsLightTheme = !isLightTheme;
        setIsLightTheme(nextIsLightTheme);
        const nextTheme = nextIsLightTheme ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", nextTheme);
        window.localStorage.setItem("theme", nextTheme);
    }

    return<div className={styles.topBarContainer}>
            <div style={{ width: "40%", height: "50px"}}>
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
                        name="Projects">
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
                        name="Education">
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
                        name="Contact">
                    <EmailIcon />
                    </LinkButton>
                </li> 

                <li className={styles.icon}>
                    <button
                        className={styles.themeToggle}
                        onClick={handleThemeChange}
                        type="button"
                        aria-label={`Switch to ${isLightTheme ? "dark" : "light"} theme`}
                        title={`Switch to ${isLightTheme ? "dark" : "light"} theme`}
                    >
                        {isLightTheme ? <DarkModeIcon /> : <LightModeIcon />}
                    </button>
                </li>
            </ul>
        </div>
      </div>
}
