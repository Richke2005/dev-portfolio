import React from "react";
import styles from "./profile.module.css";
import Card from "../../components/cards/card/card.jsx";
import cardStyle from "./style.js";

//TODO: Refactor this component to use the new Card component with another style
//The problem is that the style js and css are been used at the same time, so we need to refactor the css to use the new style.js
const Profile = ({image, name, bio, style, nameStyle, bioStyle, children}) => {
    return <div className={styles.profile} style={style}>
            <Card
                image={image}
                title={name}
                text={bio}
                cardStyle={cardStyle.card}
                titleStyle={cardStyle.name}
                textStyle={cardStyle.bio}
            >
            {children}
            </Card>
        </div>
}

export default Profile;