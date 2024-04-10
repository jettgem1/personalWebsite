/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jett Gemmer",
  title: "Hi all, I'm Jett",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 with experience building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1Lg71-dG1m74brQJV-2C1uJGZ-zLn1akZ/edit?usp=sharing&ouid=103446062493864652776&rtpof=true&sd=true", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jettgem1",
  linkedin: "https://linkedin.com/in/jett-gemmer-391a46188",
  gmail: "jettgem1@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    // {
    //   skillName: "C",
    //   fontAwesomeClassname: "fas fa-c"
    // },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "shopify",
      fontAwesomeClassname: "fab fa-shopify"
    },
    {
      skillName: "wix",
      fontAwesomeClassname: "fab fa-wix"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Cornell University",
      logo: require("./assets/images/Cornell_University_Logo.png"),
      subHeader: "Bachelors of Arts in Computer Science",
      duration: "August 2020 - December 2023",
      desc: "",
      descBullets: [
        "President of Mediocre Melodies",
        "Dean's List recipient",
      ]
    },
    {
      schoolName: "Christian High School",
      logo: require("./assets/images/CHS.jpeg"),
      subHeader: "High School Diploma",
      duration: "September 2017 - May 2020",
      desc: "",
      descBullets: [
        "Class Valedictorian",
        "35 Act"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "JavaScript/HTML/CSS",
      progressPercentage: "90%"
    },
    {
      Stack: "React",
      progressPercentage: "70%"
    },
    {
      Stack: "Java",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Simulation Engineer",
      company: "Heat Inverse",
      companylogo: require("./assets/images/heatInverse3.png"),
      date: "June 2022 – August 2023",
      desc: "Developed a comprehensive Python simulation to analyze the net radiative cooling power of polymers with multi-layered metal and adhesive configurations. The platform supports evaluation based on absorption spectra, facilitates rapid research of various polymers, and incorporates real-world factors like temperature variances, convective heat transfer, and atmospheric humidity. The project aids in understanding metamaterial behavior in the 8 to 13 micron atmospheric window, streamlining the selection and testing of polymer combinations and advancing the innovative field of radiative sky cooling.",
      descBullets: [

      ]
    },
    {
      role: "Front-End Developer",
      company: "Lujena, inc",
      companylogo: require("./assets/images/HandH.png"),
      date: "June 2020 – August 2021",
      desc: "Transitioned and rebranded an outdated website, utilizing HTML, CSS, and JavaScript.",
      descBullets: [
        "Increased web traffic by changing above-the-fold presentation, improving navigation, creating dynamic media sections, and adding social media plugins.",
        "Edited the content of entire site to improve readability. Completely redesigned and rebranded separate site on Shopify. Implemented custom code to streamline mobile interactions."
      ]
    },
    {
      role: "Technical Resiliance Mentee",
      company: "Microsoft",
      companylogo: require("./assets/images/microsoft.jpg"),
      date: "March 2021 – May 2021",
      desc: "Worked on developing individual and collaborative strategies to help navigate challenges that can arise across both personal and academic workspaces. Contributed to individual and group training sessions with current Microsoft Employees",
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
  title: "Big Projects",
  subtitle: "PROJECTS DESIGNED AND BUILT FOR JOBS, CLUBS, AND PEERS",
  projects: [
    {
      image: require("./assets/images/hinverse2.png"),
      projectName: "Heat Inverse Website",
      projectDesc: "Utilizes Javascript, CSS, and HTML",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.heatinverse.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/pvcalc.png"),
      projectName: "Heat Inverse Calculator",
      projectDesc: "Python solar calculator",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.heatinverse.com/pvcalculator"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/hopeandher.png"),
      projectName: "Hope & Her Website",
      projectDesc: "Shopify custom layout, featuring HTML, JavaScript, and CSS",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://hopeandher.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/mm2.png"),
      projectName: "Mediocre Melodies Website",
      projectDesc: "Club website built using React.js",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://mediocremelodies.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/yay.png"),
      projectName: "Yale Entrepreneurship Society Website",
      projectDesc: "Club website built using React.js",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.yesatyale.org"
        }
      ]
    },
    {
      image: require("./assets/images/gaia.png"),
      projectName: "Gaia Competition Website",
      projectDesc: "Built using HTML, CSS, and JavaScript",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.heatinverse.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/derman.png"),
      projectName: "Derman Oil Website",
      projectDesc: "Utilizes Javascript, CSS, and HTML",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.dermanoil.com"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/chilled.png"),
      projectName: "Chilled Image Supply Website",
      projectDesc: "Utilizes CSS and HTML",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://chilledimagesupply.com"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "619-332-9075",
  email_address: "jettgem1@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
