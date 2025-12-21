import Profile from "../../../public/images/profile/profile.jpg";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';


const profile = {
    name: "Richard Carvalho",
    image: Profile,
    bio: "Software Engineer",
    about: `Developing goes far beyond writing code — it's about understanding people, solving problems, and creating solutions that make sense. I'm a Systems Development technician, studying Computer Science, and always seeking new knowledge. Want to bring your idea to life? Feel free to reach out!`,
    city: "São Paulo",
    country: "Brazil",
    resumeLink: "https://drive.google.com/file/d/1yrwXKZ2yIsPWuIjtTOhKreqzfRoIvPr2/view?usp=sharing",
    socialMedias: [
        {
            name: "Instagram",
            url:"https://www.instagram.com/richke2005/", 
            icon: InstagramIcon
        }, 
        {
            name: "LinkedIn",
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