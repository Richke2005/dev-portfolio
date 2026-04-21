import MyClubCover from "../../../public/images/projects/myClubApp/cover.png";
import SGECover from "../../../public/images/projects/SGE/cover.png";
import SGECover2 from "../../../public/images/projects/SGE/cover2.png";
import SGECover3 from "../../../public/images/projects/SGE/cover3.png";
import JovensCover from "../../../public/images/projects/jovensDaCentral/cover.png";
import JovensCover1 from "../../../public/images/projects/jovensDaCentral/cover1.png";
import JovensCover2 from "../../../public/images/projects/jovensDaCentral/cover2.png";
import JovensCover3 from "../../../public/images/projects/jovensDaCentral/cover3.png";
import JovensCover4 from "../../../public/images/projects/jovensDaCentral/cover4.png";
import JovensCover5 from "../../../public/images/projects/jovensDaCentral/cover5.png";
import SkillTechCover from "../../../public/images/projects/skillTechHub/cover.png";
import MongoCover from "../../../public/images/projects/mongoAPI/cover.png";
import FightingCarCover from "../../../public/images/projects/fightingCar/cover.png";

const projects = [
{
  title: "CodePulse AI",
  description: "Dashboard platform that analyzes software delivery metrics from repositories and turns engineering activity into clear AI-assisted insights for planning and decision making.",
  coverImage: MyClubCover,
  projectImages: [MyClubCover],
  tags: ["React Native", "Node.js", "MongoDB", "AI", "Dashboard"],
  liveDemo: "",
  github: "https://github.com/Richke2005",
  caseStudy: ""
},
{
  title: "Banking Core APIs",
  description: "Backend services for corporate banking flows with focus on stable integrations, migration support for legacy endpoints, and scalable microservice-friendly APIs.",
  coverImage: JovensCover,
  projectImages: [JovensCover, JovensCover1, JovensCover2, JovensCover3, JovensCover4, JovensCover5],
  tags: ["Java", "Spring", "Microservices", "APIs", "Legacy Migration"],
  liveDemo: "https://projeto-jovens.vercel.app/",
  github: "https://github.com/Richke2005",
  caseStudy: ""
},
{
  title: "EduGuard AI",
  description: "Predictive education platform designed to detect school dropout risk and automate proactive communication with students and guardians through intelligent workflows.",
  coverImage: SGECover,
  projectImages: [SGECover, SGECover2, SGECover3],
  tags: ["Python", "Django", "PostgreSQL", "AI", "Docker", "WhatsApp"],
  liveDemo: "",
  github: "https://github.com/Richke2005",
  caseStudy: ""
},
{
  title: "Skilltech Hub",
  description: "The SkillTechHub industrial training platform is a virtual learning system designed to train professionals to work in industrial environments. Through it, it is possible to simulate real work situations, providing more effective and safer training for employees. The platform features an interactive and intuitive interface that allows users to experience different scenarios and challenges. It also includes theoretical and practical content, as well as audiovisual resources that support learning.",
  coverImage: SkillTechCover,
  projectImages: [SkillTechCover],
  tags: ["HTML5", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
  liveDemo: "",
  github: "https://github.com/Richke2005",
  caseStudy: ""
},
{
  title: "Schemaless API",
  description: "This project consists of developing an API using the MongoDB database, leveraging the schema-less NoSQL model it offers. The API was designed to provide flexibility in data storage, allowing structural changes without the need to redefine rigid schemas. This model is ideal for handling heterogeneous or constantly evolving data.\n\nThe API will be responsible for efficiently managing CRUD (Create, Read, Update, Delete) operations, with a focus on scalability and ease of integration with other systems. In addition, best security and performance practices will be implemented to ensure system robustness.",
  coverImage: MongoCover,
  projectImages: [MongoCover],
  tags: ["MVC", "express.js", "MongoDB", "mongoose"],
  liveDemo: "",
  github: "https://github.com/Richke2005",
  caseStudy: ""
},
{
  title: "Arduino Fighting Car",
  description: "The \"Arduino Fighting Car\" project is an educational initiative that combines mechanics, electronics, and programming to create a remotely controlled combat car. The goal is to develop a functional prototype that can be used in competitions, training sessions, and technical demonstrations.\n\nProject Objectives:\n- provide a practical platform for learning mechatronics concepts,\n- explore new technologies and remote control methods, and\n- participate in robotics competitions and showcase the prototype’s capabilities.",
  coverImage: FightingCarCover,
  projectImages: [FightingCarCover],
  tags: ["Arduino", "C++", "Electronics", "Robotics", "Mechanical"],
  liveDemo: "",
  github: "https://github.com/Richke2005",
  caseStudy: ""
}

]

export default projects;
