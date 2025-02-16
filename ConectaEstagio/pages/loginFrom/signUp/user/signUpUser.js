const user = {
  id: "",
  firstName: "",
  lastName: "",
  contact: {
    phone: "9xx-xxx-xxx",
    email: "xxxxx@gmail.com",
  },
  gps: "Ex: Luanda, Ilha de luanda",
  description: "Olá tudo bem? seja bem-vindo ao meu perfil.",
  conection: {
    await: [],
    accept: [],
    declined: [],
  },
  career: {
    title: "Não definido",
    skills: [],
  },
  post: [],
  following: [],
  view: [],
  message: [],
  notification: [],
  lang: [],
  password: "",
  entity: "user",
};

const pathHomePage = '../../signIn/index.html';

let regexNames = /^[a-zA-Z]+$/;
let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let regexPassword = /^.{8,}$/;

const inputFirstName = document.querySelector("#input-firstName");
let stateFirstName = false;

const inputLastName = document.querySelector("#input-lastName");
let stateLastName = false;

const inputEmail = document.querySelector("#input-email");
let stateEmail = false;

const inputPassword = document.querySelector("#input-password");
let statePassword = false;

function ValidateData() {
  stateFirstName = regexNames.test(inputFirstName.value.trim());
  stateLastName = regexNames.test(inputLastName.value.trim());
  stateEmail = regexEmail.test(inputEmail.value.trim());
  statePassword = regexPassword.test(inputPassword.value.trim());

  if (stateFirstName && stateLastName && stateEmail && statePassword)
    return true;

  return false;
}

function Error() {
  if (!stateFirstName) {
    inputFirstName.style.borderColor = "#ea1d2c";
  } else {
    inputFirstName.style.borderColor = null;
  }

  if (!stateEmail) {
    inputEmail.style.borderColor = "#ea1d2c";
  } else {
    inputEmail.style.borderColor = null;
  }

  if (!stateLastName) {
    inputLastName.style.borderColor = "#ea1d2c";
  } else {
    inputLastName.style.borderColor = null;
  }

  if (!statePassword) {
    inputPassword.style.borderColor = "#ea1d2c";
  } else {
    inputPassword.style.borderColor = null;
  }
}

function Sucess() {
  setInterval(() => {
    inputFirstName.style.borderColor = "#008000";
    inputLastName.style.borderColor = "#008000";
    inputEmail.style.borderColor = "#008000";
    inputPassword.style.borderColor = "#008000";
  }, 2000);

  window.location.href = pathHomePage;
}

function CreateAccount() {
  if (!ValidateData()) return Error();

  const workLinkBD = JSON.parse(localStorage.getItem("workLinkBD")) || {
    users: [],
    recruits: [],
    entreprises: [],
    apiNif: [
      { code: 7130141737, state: false },
      { code: 8810916596, state: false },
      { code: 1774242494, state: false },
      { code: 6224666031, state: false },
      { code: 9583208893, state: false },
      { code: 5470943329, state: false },
      { code: 4153099148, state: false },
      { code: 9990054489, state: false },
      { code: 9137447457, state: false },
      { code: 2253711446, state: false },
      { code: 948616005, state: false },
      { code: 7809693692, state: false },
      { code: 6489257187, state: false },
      { code: 3659665865, state: false },
      { code: 3771388061, state: false },
      { code: 4982948613, state: false },
      { code: 7787052207, state: false },
      { code: 9323701068, state: false },
      { code: 5694787168, state: false },
      { code: 1848488227, state: false },
      { code: 631901839, state: false },
      { code: 9297947666, state: false },
      { code: 3622023624, state: false },
      { code: 5916211781, state: false },
      { code: 4120835823, state: false },
      { code: 218042114, state: false },
      { code: 6588864048, state: false },
      { code: 8137777435, state: false },
      { code: 6598423496, state: false },
      { code: 9679446888, state: false },
      { code: 4475273106, state: false },
      { code: 1485069558, state: false },
      { code: 40861766, state: false },
      { code: 3368900349, state: false },
      { code: 244027753, state: false },
      { code: 5155454669, state: false },
      { code: 2579937911, state: false },
      { code: 4060155926, state: false },
      { code: 1005295795, state: false },
      { code: 9198328951, state: false },
      { code: 5752065635, state: false },
      { code: 7333117441, state: false },
      { code: 123456789, state: false },
      { code: 4206671526, state: false },
      { code: 7953999821, state: false },
      { code: 3324378678, state: false },
      { code: 6461367886, state: false },
      { code: 2783022780, state: false },
      { code: 2441707685, state: false },
      { code: 7442626688, state: false },
      { code: 915978660, state: false },
      { code: 4683809122, state: false },
      { code: 1432171185, state: false },
      { code: 5597023796, state: false },
      { code: 4525025897, state: false },
      { code: 8707329195, state: false },
      { code: 5858071114, state: false },
      { code: 6396318561, state: false },
      { code: 1342486239, state: false },
      { code: 8263016130, state: false },
      { code: 8887770261, state: false },
      { code: 2435375518, state: false },
      { code: 948939589, state: false },
      { code: 5869395504, state: false },
      { code: 7117576927, state: false },
      { code: 891101615, state: false },
      { code: 5505742039, state: false },
      { code: 2226718232, state: false },
      { code: 3921081803, state: false },
      { code: 7905524480, state: false },
      { code: 2992232901, state: false },
    ],
    careers: [
      {
        id: 6438684,
        title: "Programador Front-end",
        skills: [
          "Html",
          "Css",
          "JavaScript",
          "ReactJS",
          "NextJs",
          "VueJs",
          "React-Native",
          "Sass/Less",
          "Angular",
          "TypeScript",
          "Responsive Design",
          "Webpack",
          "Redux",
          "GraphQL",
          "Jest",
          "Gulp",
          "Bootstrap",
          "Tailwind CSS",
          "Material-UI",
          "D3.js",
          "Canvas",
          "Animation Libraries (e.g., GSAP)",
          "Version Control (e.g., Git)",
          "Accessibility Standards (e.g., WCAG)",
          "Internationalization (i18n)",
          "SEO Fundamentals",
          "Progressive Web Apps (PWA)",
          "User Experience (UX) Design Principles",
          "UI/UX Prototyping",
        ],
      },
      {
        id: 9731528,
        title: "Programador Back-end",
        skills: [
          "NodeJs",
          "C#",
          "Python",
          "Ruby",
          "Java",
          "PHP",
          "Express.js",
          "Django",
          "Flask",
          "ASP.NET",
          "Spring Boot",
          "Laravel",
          "SQL",
          "NoSQL",
          "RESTful APIs",
          "Microservices Architecture",
          "Message Queue Systems (e.g., RabbitMQ, Kafka)",
          "Authentication and Authorization (e.g., OAuth, JWT)",
          "Containerization (e.g., Docker)",
          "CI/CD Pipelines",
          "Serverless Computing",
          "Load Balancing",
          "Performance Optimization",
          "Database Management",
          "Security Best Practices",
          "Scalability Strategies",
          "Testing (Unit, Integration, End-to-End)",
        ],
      },
      {
        id: 8203158,
        title: "Professor",
        skills: [
          "Matemática",
          "Física",
          "Química",
          "Biologia",
          "História",
          "Geografia",
          "Língua Portuguesa",
          "Inglês",
          "Espanhol",
          "Filosofia",
          "Sociologia",
          "Educação Física",
          "Artes",
          "Música",
          "Informática",
          "Programação",
          "Robótica",
          "Estatística",
          "Cálculo",
          "Álgebra",
          "Geometria",
          "Trigonometria",
          "Literatura",
          "Redação",
          "Cinema",
          "Teatro",
          "Pintura",
          "Escultura",
          "Design Gráfico",
          "Engenharia de Software",
        ],
      },
      {
        id: 835682,
        title: "Designer UI/UX",
        skills: [
          "Adobe Photoshop",
          "Adobe Illustrator",
          "Adobe XD",
          "Figma",
          "Sketch",
          "InVision",
          "User Research",
          "Wireframing",
          "Prototyping",
          "Typography",
          "Color Theory",
          "Visual Design Principles",
          "Interaction Design",
          "Mobile App Design",
          "Web Design",
          "Responsive Design",
          "Design Systems",
          "Usability Testing",
          "User Flows",
          "Information Architecture",
          "Motion Design",
          "Design Thinking",
          "Brand Identity",
          "Illustration",
          "Icon Design",
          "Animation",
          "AR/VR Design",
          "Video Editing",
          "Front-end Development Basics",
        ],
      },
      {
        id: 5840256,
        title: "Engenheiro de Dados",
        skills: [
          "SQL",
          "NoSQL",
          "Python",
          "R",
          "Java",
          "Scala",
          "Apache Hadoop",
          "Apache Spark",
          "Apache Kafka",
          "Apache Flink",
          "Amazon Web Services (AWS)",
          "Microsoft Azure",
          "Google Cloud Platform (GCP)",
          "Big Data Technologies",
          "Data Warehousing",
          "ETL Processes",
          "Data Modeling",
          "Machine Learning",
          "Data Mining",
          "Predictive Analytics",
          "Statistical Analysis",
          "Data Visualization",
          "Dashboarding Tools (e.g., Tableau, Power BI)",
          "Database Administration",
          "Distributed Computing",
          "Streaming Data Processing",
          "Data Governance",
          "Data Quality Assurance",
        ],
      },
      {
        id: 3259918,
        title: "Engenheiro Civil",
        skills: [
          "AutoCAD",
          "Revit",
          "SketchUp",
          "Civil 3D",
          "Structural Analysis",
          "Construction Management",
          "Building Codes",
          "Project Planning",
          "Cost Estimation",
          "Geotechnical Engineering",
          "Environmental Engineering",
          "Hydraulic Engineering",
          "Transportation Engineering",
          "Surveying",
          "Land Development",
          "Construction Materials",
          "Site Inspection",
          "Risk Management",
          "Quality Control",
          "Contracts Administration",
          "Sustainability Principles",
          "CAD Drafting",
          "BIM Management",
          "Engineering Mathematics",
          "Finite Element Analysis",
          "Reinforced Concrete Design",
          "Steel Structure Design",
          "Foundation Design",
        ],
      },
      {
        id: 7129382,
        title: "Médico",
        skills: [
          "Medicina Interna",
          "Pediatria",
          "Ginecologia",
          "Obstetrícia",
          "Cirurgia Geral",
          "Ortopedia",
          "Cardiologia",
          "Neurologia",
          "Psiquiatria",
          "Dermatologia",
          "Oftalmologia",
          "Otorrinolaringologia",
          "Radiologia",
          "Anestesiologia",
          "Urologia",
          "Endocrinologia",
          "Nefrologia",
          "Pneumologia",
          "Gastroenterologia",
          "Hematologia",
          "Oncologia",
          "Infectologia",
          "Reumatologia",
          "Gerontologia",
          "Imunologia",
          "Medicina de Emergência",
          "Medicina Esportiva",
          "Medicina Legal",
          "Medicina de Família",
          "Medicina Preventiva",
        ],
      },
    ],
    online: null,
  };

  user.id = Math.floor(Math.random() * 1e15);
  user.firstName = inputFirstName.value.trim();
  user.lastName = inputLastName.value.trim();
  user.contact.email = inputEmail.value.trim();
  user.password = inputPassword.value.trim();

  if (workLinkBD.users.length === 0) {
    workLinkBD.users.push(user);
    workLinkBD.online = user;
    localStorage.setItem("workLinkBD", JSON.stringify(workLinkBD));
    Sucess();
  } else {
    let verifyIfContactExistInDataBase = workLinkBD.users.some(
      (user) => user.contact.email == inputEmail.value.trim()
    );

    if (!verifyIfContactExistInDataBase) {
      workLinkBD.users.push(user);
      workLinkBD.online = user;
      localStorage.setItem("workLinkBD", JSON.stringify(workLinkBD));
      Sucess();
    } else {
      inputEmail.style.borderColor = "#ea1d2c";
    }
  }
}
