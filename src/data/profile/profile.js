import image from "../../../public/images/profile/profile.jpg";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';


const profile = {
    name: "Richard Carvalho",
    image: image,
    bio: "FullStack Software Developer",
    about: `Desenvolver vai muito além de escrever código — é entender pessoas, resolver problemas e criar soluções que fazem sentido. Sou técnico em Desenvolvimento de Sistemas, estudo Ciência da Computação e estou sempre em busca de novos aprendizados. Quer tirar sua ideia do papel? Fica à vontade pra me chamar!`,
    city: "São Paulo",
    country: "Brasil",
    resumeLink: "https://drive.google.com/file/d/1BOu2-eApo8O292FQfzR-stF4KhcJg1qG/view?usp=sharing",
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