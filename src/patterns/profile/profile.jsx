import React from "react";
import Card from "../../components/cards/index.js";

const Profile = ({image, name, bio, style, nameStyle, bioStyle, children}) => {
    return <div style={style || styles.profile}>
            <Card
                image={image}
                title={name}
                text={bio}
                style={styles.card}
                titleStyle={nameStyle || styles.name}
                textStyle={bioStyle || styles.bio}
            >
            {children}
            </Card>
        </div>
}

const styles = {
    profile: {
        position: "sticky",
        marginTop: "100px",
        top: "20px",
        width: "425px",
        height: "750px",
        padding: "30px"
    },
    
    card: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgb(39, 40, 41)",
        borderRadius: "20px",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        color: "white",

    },
    name: {
        fontSize: "30px",
        color: "white",
        marginBottom: "8px"
    },
    bio: {
        fontSize: "20px",
        color: "rgb(216, 224, 226)"
    }
}

export default Profile;