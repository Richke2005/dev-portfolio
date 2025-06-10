import React from "react";
import PropTypes from 'prop-types';
import styles from "./buttonGroup.module.css"
import { Icon } from "@mui/material";
import Button from "../../components/button/button.jsx";

export default function ButtonGroup({children}){
    return <ul className={styles.box}>
        {children.map((child, i) => (
            <li key={i} className={styles.icon}><Button>{child}</Button></li>
        ))}
    </ul>
}


ButtonGroup.PropTypes = {
    icons: PropTypes.arrayOf(Icon).isRequired
}