import image from "../../../public/images/profile.jpg";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const profile = {
    name: "Richard Carvalho",
    image: image,
    bio: "FullStack Software Developer São Paulo, Brasil",
    about: "Sou técnico em Desenvolvimento de Sistemas e atualmente curso Ciência da Computação. Amo tecnologia e estou sempre em busca de novos aprendizados e desafios que me permitam crescer tanto tecnicamente quanto como profissional. Atuo com foco em organização, dedicação e responsabilidade. Bora trocar uma idéia ?!",
    city: "São Paulo",
    country: "Brasil",
    education: [{
        institution: "Universidade Presbiteriana Mackenzie",
        degree: "Bachelor of Science in Computer Science",
        startYear: 2022,
        endYear: 2025
    }],
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
    ]
}

export default profile;