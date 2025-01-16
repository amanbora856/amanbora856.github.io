/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file
// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aman Bora",
  title: "Hi all, I'm Aman",
  subTitle:
    "A results-driven Software Developer with 3+ years of experience in delivering efficient software solutions and optimizing infrastructure costs. Expertise in Node.js, TypeScript, DevOps, and cloud technologies. Adept at working with cross-functional teams, mentoring junior developers, and deploying scalable Web3 and Web2 applications. Proven success in reducing billing costs by 92% through strategic API optimizations and enhancing system performance by 30% using agile methodologies. Strong focus on automating processes and improving operational efficiency.",
  resumeLink:
    "https://docs.google.com/document/d/1IYI83e8_o7wWPAemuaewSqBIDtStwapJeolsr46WGL0/export?format=pdf", // Set to empty to hide the button
  resumeName: "Aman's Resume.pdf",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/amanbora856",
  gitlab: "https://gitlab.com/amanbora856",
  linkedin: "www.linkedin.com/in/aman-bora-dev",
  gmail: "amanbora30172@gmail.com",
  medium: "https://medium.com/@amanbora30172",
  npm: "https://www.npmjs.com/~aman_bytemaster",
  instagram: "https://www.instagram.com/aman.bora.dev",
  twitter: "https://twitter.com/AmanBor11568380",
  discord: "https://discordapp.com/users/aman_beast",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    "⚡️ Expertise in developing and delivering solutions, leveraging traditional technologies for optimal performance.",
    "⚡️ Skilled in cost optimization strategies, reducing Google API billing by 92% and Azure egress data transfer costs by 75%.",
    "⚡️ Proficient in mentoring and upskilling teams, improving proficiency in frameworks like Express Js",
    "⚡️ Strong ability to streamline processes through automation, achieving significant reductions in manual interventions and operational overhead."
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Shell",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Mongo DB",
      fontAwesomeClassname: "fab fa-envira"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Digital Ocean",
      fontAwesomeClassname: "fab fa-digital-ocean"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "Message Queue",
      fontAwesomeClassname: "fas fa-exchange-alt"
    },
    {
      skillName: "Postman",
      fontAwesomeClassname: "fas fa-flask"
    },
    {
      skillName: "Networking",
      fontAwesomeClassname: "fas fa-project-diagram"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Rajastan Technical University",
      logo: require("./assets/images/RTU.jpg"),
      subHeader: "Bachelor of Engineering in Information & Technology",
      duration: "August 2016 - June 2020",
      desc: "Took extra courses such as  Operating System, Machine Design ...",
      descBullets: [
        "CGPA: 8.02",
        "Participated in various workshops such as AI, ML, MachineDesign, ..."
      ]
    },
    {
      schoolName: "Rani Laxmi Bai Memorial School",
      logo: require("./assets/images/rlbs.png"),
      subHeader: "InterMediate Education ",
      duration: "September 2014 - March 2016",
      desc: "Took Active Interest in the coding contests..",
      descBullets: [
        "Percentage: 79%",
        "Major: Physics, Chemistry, Mathematics and Computers"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend",
      progressPercentage: "69%"
    },
    {
      Stack: "Devops", //Insert stack or technology you have experience in
      progressPercentage: "58%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Cyber Infrastructure",
      companylogo: require("./assets/images/cisLogo.webp"),
      date: "July 2023 - Present",
      desc: "Led and developed multiple Web3 and Web2 solutions, utilizing both Blockchain and Web2 technology to achieve project goals.",
      background: false, // set it true to use image background as card background
      descBullets: [
        "Led and developed multiple Web3 and Web2 solutions, leveraging blockchain and traditional technologies to meet project objectives.",
        "Collaborated with management and product teams to define and implement comprehensive crypto strategies and roadmaps, aligning with business goals.",
        "Mentored and trained 10+ junior developers on the NestJS framework and Node.js, improving team proficiency and productivity.",
        "Optimized Google API calls, implementing efficient request strategies that resulted in a 92% reduction in billing costs while maintaining performance and functionality.",
        "Achieved a 75% reduction in Azure egress data transfer costs through strategic optimizations, significantly lowering operational expenses.",
        "Led a cross-functional team of developers to deliver a comprehensive software solution, improving system efficiency by 30%, utilizing Agile methodologies and technologies such as TypeScript, Solidity, and MongoDB.",
        "Demonstrated adaptability and a quick learning curve, consistently delivering high-quality code that met or exceeded client expectations."
      ],
      footerLink: [
        {
          name: "cisin.com",
          url: "https://www.cisin.com/"
        }
      ]
    },
    {
      role: "Blockchain Developer",
      company: "Qodequay Technologies",
      companylogo: require("./assets/images/qodequay.jpg"),
      date: "September 2022 - June 2023",
      desc: "Successfully developed an NFT marketplace for creating and selling NFTs, with integrated crypto payments using Blockchain technology.",
      background: false, // set it true to use image background as card background
      descBullets: [
        "At Qodequay, I developed innovative features using Web3 and Web2 technologies to create scalable applications.",
        "I leveraged my expertise in Object - Oriented Programming(OOP), JavaScript, ES6, and TypeScript to write maintainable code and build dynamic, responsive applications.",
        "I designed user - friendly, authenticated apps and worked on developing REST APIs, adopting new technologies to efficiently solve complex problems.",
        "I utilized real - time communication protocols like socket.io and MQTT to create interactive applications with live data and messaging features."
      ],
      footerLink: [
        {
          name: "Qodequay.com",
          url: "https://www.qodequay.com/"
        }
      ]
    },
    {
      role: "Backend Developer",
      company: "Wise Nybble Technology Private Limited",
      companylogo: require("./assets/images/wizbytes.jpg"),
      date: "May 2020 - August 2021",
      desc: "Collaborated on API development, authorization, product upload scripts, and regression testing for optimal performance.",
      background: false, // set it true to use image background as card background
      descBullets: [
        "Collaborated with the development team to build APIs that met the project’s requirements.",
        "Worked on the authorization process to ensure secure user access.",
        "Developed scripts for uploading product data efficiently.",
        "Conducted thorough regression testing to identify and resolve functionality issues.",
        "Ensured optimal performance and improved user satisfaction through testing and issue resolution."
      ],
       footerLink: [
        {
         name: "Wyse Nybble",
         //url: "https://www.qodequay.com/"
        }
       ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "PROJECTS THAT I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/oetLogo.png"),
      projectName: "Headless HUB",
      date: "July 2023 - Present",
      projectDesc:
        "Leading a team in transitioning from Monolith to microservices architecture for improved scalability. Developing design patterns for smooth project progression and collaborating on a robust cloud infrastructure.",
      footerLink: [
        //  you can add extra buttons here.
        {
          name: "OET Website",
          url: "https://www.oet.com"
        }
      ]
    },
    {
      image: require("./assets/images/oetLogo.png"),
      projectName: "OET Applications and Data Migration",
      date: "October 2023 - May 2024",
      projectDesc:
        "Heading data migration between applications using the strangler approach for a seamless shift from monolithic to microservices. Innovating migration patterns to boost data transfer efficiency.",
      footerLink: [
        //  you can add extra buttons here.
        {
          name: "OET Website",
          url: "https://www.oet.com"
        }
      ]
    },

    {
      image: require("./assets/images/edtech-min.jpg"),
      projectName: "Ed-Tech",
      date: "April 2023 - June2023",
      projectDesc:
        "I worked with the development team to create a PaaS solution for rural education districts, focusing on backend development to enhance accessibility and streamline processes.",
      footerLink: [
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nft-min.jpg"),
      projectName: "NFT Marketplace",
      date: "October 2022 - March 2023",
      projectDesc:
        "A white-labeled NFT marketplace was developed on the Ethereum blockchain, allowing users to mint, sell, and buy NFTs. The platform utilized Solidity for smart contract development, Node.js for the backend, and MongoDB for database management. This customizable, decentralized marketplace ensured secure transactions and ownership verification through blockchain technology.",
      footerLink: [
        //  you can add extra buttons here
      ]
    },
    {
      image: require("./assets/images/hp_protrain.jpg"),
      projectName: "HP Training Application",
      date: "May 2020 - August 2021",
      projectDesc:
        "I worked closely with the development team to build APIs that met the specific needs and requirements of the project. My responsibilities included collaborating on the authorization process to ensure secure user access and implementing scripts for efficiently uploading product data. Additionally, I conducted thorough regression testing to identify and address any functionality issues, ensuring optimal performance and enhancing overall user satisfaction.",
      footerLink: [
        //  you can add extra buttons here.
        {
          name: "Hp Protrain",
          url: "https://hpprotrain.com/"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Achievements And Certifications 🏆 ",
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Certified BlockChain Developer by Blockchain Council",
      subtitle: "Certification Course.",
      image: require("./assets/images/CBD.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.blockchain-council.org/certifications/certified-blockchain-developer/"
        }
      ]
    },
    {
      title: "Machine Learning and AI workshop",
      subtitle:
        "Participated on the Ai workshop that was hosted by the IIT Roorkee on March 2019",
      image: require("./assets/images/AiWorkshop.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: ""
        },
        {
          name: "Participation",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact Me ☎️",
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "amanbora30172@gmail.com"
};

export {
  achievementSection,
  bigProjects,
  contactInfo,
  educationInfo,
  greeting,
  illustration,
  openSource,
  skillsSection,
  socialMediaLinks,
  techStack,
  workExperiences
};
