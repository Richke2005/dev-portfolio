import React from "react";
import styles from "./style.js";
import Card from "../../components/cards/card.jsx";

const Profile = ({image, name, bio, style, nameStyle, bioStyle, children}) => {
    return <div style={style || styles.profile}>
            <Card
                image={image}
                title={name}
                text={bio}
                cardStyle={styles.card}
                titleStyle={nameStyle || styles.name}
                textStyle={bioStyle || styles.bio}
            >
            {children}
            </Card>
        </div>
}

export default Profile;