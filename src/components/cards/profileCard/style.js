const styles = {
    profile: {
        position: "sticky",
        marginTop: "50px",
        top: "20px",
        width: "425px",
        height: "750px",
        padding: "30px",
    },
    
    card: {
        width: "100%",
        height: "100%",
        backgroundColor: "var(--layer1)",
        borderRadius: "20px",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        color: "var(--foreground)",

    },
    name: {
        fontSize: "30px",
        color: "var(--foreground)",
        marginBottom: "8px"
    },
    bio: {
        fontSize: "20px",
        color: "var(--foreground)",
    }
}

export default styles;