import React from "react";
import styles from "./profile.module.css";
import Card from "../card/card.jsx";

const Profile = ({image, name, bio, country, city, style, nameStyle, bioStyle, children}) => {
    return <div className={styles.profile}>
            <Card
                image={image}
                title={name}
                text={`${bio}, ${city} - ${country}`}
            >
            {children}
            </Card>
        </div>
}

export default Profile;