import MyClubCover from "../../../public/images/projects/myClubApp/cover.png";
import SGECover from "../../../public/images/projects/SGE/cover.png";
import SGECover2 from "../../../public/images/projects/SGE/cover2.png";
import SGECover3 from "../../../public/images/projects/SGE/cover3.png";
import SkillTechCover from "../../../public/images/projects/skillTechHub/cover.png";
import MongoCover from "../../../public/images/projects/mongoAPI/cover.png";
import FightingCarCover from "../../../public/images/projects/fightingCar/cover.png";

const projects = [
      {
        title: "My Club App",
        description: `O projeto visa facilitar a organização e a logística da comunidade de Desbravadores em uma igreja, por meio de um aplicativo móvel. A ferramenta permite o acompanhamento individual do progresso dos membros em suas classes, unidades e clube, sem substituir, mas complementando o trabalho já realizado. Além disso, a plataforma contará com uma comunidade de clubes para compartilhamento de atividades e abordagens sobre especialidades.`,
        coverImage: MyClubCover,
        projectImages: [MyClubCover],
        tags: ["React Native", "Paper", "express.js", "node.js", "MongoDB"],
        link: ""
    },
    {
        title: "Sistema de Gestão Escolar",
        description: `A Educação de Jovens e Adultos (EJA) enfrenta desafios históricos como evasão escolar, desigualdade social e escassez de recursos. Pensando nisso, este projeto visa o desenvolvimento de uma plataforma inteligente e integrada para apoiar instituições de ensino no gerenciamento escolar, detecção de riscos e comunicação ativa com os alunos, promovendo a permanência e o sucesso educacional.`,
        coverImage: SGECover,
        projectImages: [SGECover, SGECover2, SGECover3],
        tags: ["Django", "Mysql", "BootsTrap", "HTML5", "CSS", "JavaScript"],
        link: ""
    },
    {
        title: "Skilltech Hub",
        description: `A plataforma de treinamento industrial SkillTechHub é um sistema virtual de aprendizado que tem como objetivo capacitar profissionais para atuarem em ambientes industriais. Através dela, é possível simular situações reais de trabalho, proporcionando um treinamento mais eficaz e seguro para seus colaboradores. A plataforma é composta por uma interface interativa e intuitiva, que permite aos usuários vivenciarem diferentes cenários e desafios. Ela também conta com conteúdo teóricos e práticos, além de recursos audiovisuais que auxiliam no aprendizado.`,
        coverImage: SkillTechCover,
        projectImages: [SkillTechCover],
        tags: ["HTML5", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
        link: ""
    },
    {
        title: "Schemaless API",
        description: `Este projeto consiste no desenvolvimento de uma API utilizando o banco de dados MongoDB, aproveitando o modelo NoSQL schema-less que ele oferece. A API foi projetada para proporcionar flexibilidade no armazenamento de dados, permitindo alterações na estrutura sem a necessidade de redefinir esquemas rígidos. Esse modelo é ideal para lidar com dados heterogêneos ou em constante evolução.

        A API será responsável por gerenciar operações CRUD (Create, Read, Update, Delete) de maneira eficiente, com foco na escalabilidade e na simplicidade na integração com outros sistemas. Além disso, boas práticas de segurança e desempenho serão implementadas para garantir a robustez do sistema.`,
        coverImage: MongoCover,
        projectImages: [MongoCover],
        tags: ["MVC", "express.js", "MongoDB", "mongoose"],
        link: ""
    },

    {
        title: "Arduino Fighting Car",
        description: `O projeto "Arduino Fighting Car" é uma iniciativa educacional que combina mecânica, eletrônica e programação para criar um carro de combate controlado remotamente. O objetivo é desenvolver um protótipo funcional que possa ser utilizado em competições, treinamentos e demonstrações técnicas.

        Objetivos do Projeto: 
        proporcionar uma plataforma prática para o aprendizado de conceitos de mecatrônica,
        explorar novas tecnologias e métodos de controle remoto e
        participar de competições de robótica e mostrar as capacidades do protótipo.`,
        coverImage: FightingCarCover,
        projectImages: [FightingCarCover],
        tags: ["Arduino", "C++", "Electronics", "Robotics", "Mechanical"],
        link: ""
    }
]

export default projects;