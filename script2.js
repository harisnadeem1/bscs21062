const portfolioData = {
    personalInfo: {
        name: "Muhammad Haris Nadeem",
        institution: "Information Technology University",
        cvLink: "https://drive.google.com/file/d/1uycM4m6tvF7VzW7siU4JFOwZtq8dbz38/view",
        linkedin: "https://www.linkedin.com/in/muhammad-haris-nadeem-cs/",
        instagram: "https://www.instagram.com/",
        imageUrl: "media/image.jpg",
        rightsReserved: "All rights reserved by Muhammad Haris Nadeem",
    },
    skills: {
        hardSkills: ["Python", "JavaScript", "HTML", "CSS", "C++", "C#", "C", "Liquid"],
        softSkills: ["Problem Solving", "Time Management", "Team Collaboration", "Adaptability", "Communication"]
    },

   
    
    projects: [
        {
            title: "Car Showroom System",
            date: "19th September 2022",
            duration: "2 Months",
            imageUrl: "media/car.png",
            link: "https://github.com/harisnadeem1/car-showroom-system"
        },
        {
            title: "Noise Removal System",
            date: "10th April 2023",
            duration: "1 Month",
            imageUrl: "media/speech.png",
            link: "https://github.com/harisnadeem1/speech-noise-remover"
        },
        {
            title: "Subway Surfers Game",
            date: "15th December 2023",
            duration: "1 Month",
            imageUrl: "media/subway.jpg",
            link: "https://drive.google.com/file/d/17lczPeCSmCF4zcOOop72v2CRFUfemPea/view"
        },
        {
            title: "Shogi Game",
            date: "15th December 2021",
            duration: "2 Months",
            imageUrl: "media/shogi.png",
            link: "https://github.com/harisnadeem1/shogi-game-using-C_plus_plus"
        }
    ],
    awards: [
        {
            title: "Best Web Developer Award",
            date: "January 2022",
            organization: "Web Developers Association"
        }
    ],
    certifications: [
        {
            title: "Certified Shopify Developer",
            date: "March 2023",
            organization: "Enomads"
        }
    ],
    trainings: [
        {
            title: "Cloud Computing",
            date: "August 2022",
            organization: "Corvit"
        }
    ],
    shortCourses: [
        {
            title: "Introduction to Data Science",
            date: "February 2022",
            institution: "DataCamp"
        },
        {
            title: "HTML CSS and JAVASCRIPT",
            date: "September 2021",
            institution: "Udemy"
        },
        {
            title: "Python for Everybody",
            date: "November 2021",
            institution: "Coursera"
        }
    ],
    degrees: [
        {
            title: "Bachelor of Science in Computer Science",
            date: "2021 - 2025",
            institution: "Information Technology University"
        },
        {
            title: "FSC Pre Engineering",
            date: "2019 - 2021",
            institution: "Government College Township"
        },
        {
            title: "Matric",
            date: "2017 - 2019",
            institution: "Divisional Public School"
        }
    ]
};


document.querySelector('.logo').innerHTML = `${portfolioData.personalInfo.name}`;
document.querySelector('.profile-details h1').textContent = portfolioData.personalInfo.name;
document.querySelector('.profile-details p').textContent = `Student at ${portfolioData.personalInfo.institution}`;
document.querySelector('.profile-image img').src = portfolioData.personalInfo.imageUrl;
document.querySelector('.profile-buttons a').href = portfolioData.personalInfo.cvLink;
document.querySelector('.social-links a:nth-child(1)').href = portfolioData.personalInfo.linkedin;
document.querySelector('.social-links a:nth-child(2)').href = portfolioData.personalInfo.instagram;
document.querySelector('.footer p').textContent = `© 2024 ${portfolioData.personalInfo.rightsReserved}`;

const hardSkillsList = portfolioData.skills.hardSkills.map(skill => `<li>${skill}</li>`).join('');
const softSkillsList = portfolioData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('');
document.querySelector('.hard-skills ul').innerHTML = hardSkillsList;
document.querySelector('.soft-skills ul').innerHTML = softSkillsList;

const projectsHTML = portfolioData.projects.map(project => `
    <a href="${project.link}" target="_blank" class="project-link">
        <div class="project">
            <div class="project-details">
                <h3>${project.title}</h3>
                <h4>${project.date}</h4>
                <h4>${project.duration}</h4>
            </div>
            <div class="project-img">
                <img src="${project.imageUrl}" alt="${project.title}">
            </div>
        </div>
    </a>
`).join('');
document.querySelector('.projects-container').innerHTML = projectsHTML;

const awardsHTML = portfolioData.awards.map(award => `
    <li>
        <h3>${award.title}</h3>
        <p>Date: ${award.date}</p>
        <p>Organization: ${award.organization}</p>
    </li>
`).join('');
document.querySelector('.awards-list').innerHTML = awardsHTML;

const certificationsHTML = portfolioData.certifications.map(cert => `
    <li>
        <h3>${cert.title}</h3>
        <p>Date: ${cert.date}</p>
        <p>Organization: ${cert.organization}</p>
    </li>
`).join('');
document.querySelector('.certifications-list').innerHTML = certificationsHTML;

const trainingsHTML = portfolioData.trainings.map(training => `
    <li>
        <h3>${training.title}</h3>
        <p>Date: ${training.date}</p>
        <p>Organization: ${training.organization}</p>
    </li>
`).join('');
document.querySelector('.trainings-list').innerHTML = trainingsHTML;

const shortCoursesHTML = portfolioData.shortCourses.map(course => `
    <li>
        <h3>${course.title}</h3>
        <p>Date: ${course.date}</p>
        <p>Institution: ${course.institution}</p>
    </li>
`).join('');
document.querySelector('.short-courses-list').innerHTML = shortCoursesHTML;

const degreesHTML = portfolioData.degrees.map(degree => `
    <li>
        <h3>${degree.title}</h3>
        <p>${degree.date}</p>
        <p>${degree.institution}</p>
    </li>
`).join('');
document.querySelector('.degrees-list').innerHTML = degreesHTML;
