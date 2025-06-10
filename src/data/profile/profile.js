import image from "../../../public/images/profile.jpg";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const profile = {
    name: "Richard Carvalho",
    image: image,
    bio: "FullStack Software Developer São Paulo, Brasil",
    socialMedias: [
        {
            name: "Instagram",
            url:"https://www.instagram.com/richke2005/", 
            icon: InstagramIcon
        }, 
        {
            name: "Linkedin",
            url:"https://www.linkedin.com/in/richard-anjos/", 
            icon: LinkedInIcon
        },
        {
            name: "GitHub",
            url:"https://github.com/Richke2005",
            icon: GitHubIcon
        },
        {
            name: "Email",
            url:"mailto:richardke18@gmail.com",
            icon: EmailIcon
        }
    ],
    city: "São Paulo",
    country: "Brasil",
    skills: [
        "JavaScript",
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Git",
        "GitHub"
    ],
}

export default profile;