import React from "react"
import styles from "./topBar.module.css";
import Button from "@/components/buttons/button.jsx";
import Link from "next/link";
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import BuildIcon from '@mui/icons-material/Build';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

export default function TopBar() {
    return<ul className={styles.topBar}>
        <li className={styles.icon}>
        <Link href={"/"}>
            <Button color="primary" shape="transparent" name="Home" isActive={true}>
            <HomeIcon />
            </Button>
        </Link>
        </li>
        <li className={styles.icon}>
        <Link href={"/projects"}>
            <Button color="primary" shape="transparent" name="Projects">
            <FolderIcon />
            </Button>
        </Link>
        </li>
        <li className={styles.icon}>
        <Link href={"/skills"}>
            <Button color="primary" shape="transparent" name="Skills">
            <BuildIcon />
            </Button>
        </Link>
        </li>
        <li className={styles.icon}>
        <Link href={"/contact"}>
            <Button color="primary" shape="transparent" name="Contact">
            <WorkOutlineIcon />
            </Button>
        </Link>
        </li>
    </ul>
}