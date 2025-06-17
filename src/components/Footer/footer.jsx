export default function Footer() {
    return (
        <footer style={{ textAlign: "center", padding: "100px" }}>
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} <strong style={{color: "var(--primary)"}}>Richard Carvalho.</strong> All rights reserved,</p>
        <p style={{ margin: 0 }}>Made with ❤️ using React and Next.js</p>
        </footer>
    );
}