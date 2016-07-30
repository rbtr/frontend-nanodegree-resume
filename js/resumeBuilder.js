var placeholder = "%data%";

var bio = {
    "name": "Evan Baker",
    "role": "Developer",
    "contacts": {
        "mobile": "555-555-5555",
        "email": "ebaker8@u.rochester.edu",
        "github": "rbtr",
        "stackoverflow": "athingunique",
        "location": "Wilmington, DE"
    },
    "welcomeMessage": "Check out my projects!",
    "skills": [
        "Web Developer",
        "Designer",
        "Engineer",
        "Team Leader"
    ],
    "biopic": "images/bio.png",
    addContacts: function (target) {
        $(target).append(HTMLmobile.replace(placeholder, this.contacts.mobile));
        $(target).append(HTMLemail.replace(placeholder, this.contacts.email));
        $(target).append(HTMLgithub.replace(placeholder, this.contacts.github));
        $(target).append(HTMLlocation.replace(placeholder, this.contacts.location));
    },
    addBottomContacts: function () {
        this.addContacts("#footerContacts");
    },
    addTopContacts: function () {
        this.addContacts("#topContacts");
    },
    addSkill: function (skill) {
        $("#skills").append(HTMLskills.replace(placeholder, skill));
    },
    display: function () {
        $("#header").prepend(HTMLheaderRole.replace(placeholder, this.role));
        $("#header").prepend(HTMLheaderName.replace(placeholder, this.name));
        $("#header").append(HTMLbioPic.replace(placeholder, this.biopic));
        $("#header").append(HTMLwelcomeMsg.replace(placeholder, this.welcomeMessage));
        if (this.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var i = 0; i < this.skills.length; i++) {
                this.addSkill(this.skills[i]);
            }
        }
        this.addTopContacts();
        this.addBottomContacts();
    }
};

var education = {
    "schools": [
        {
            "name": "University of Rochester",
            "location": "Rochester, NY",
            "dates": "2015",
            "degree": "BS",
            "url": "http://rochester.edu",
            "majors": [
                "Mechanical Engineering"
            ]
        }
    ],
    "onlineCourses": [
        {
            "title": "Front End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "Jul 2016 - Ongoing",
            "url": "http://udacity.com"
        },
        {
            "title": "Intro to Data Analysis",
            "school": "Udacity",
            "dates": "Jan 2016 - Feb 2016",
            "url": "https://classroom.udacity.com/courses/ud170/"
        },
        {
            "title": "Intro to Machine Learning",
            "school": "Udacity",
            "dates": "Jan 2016 - March 2016",
            "url": "https://classroom.udacity.com/courses/ud120/"
        }
    ],
    addOnline: function (online) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(
            HTMLonlineTitle.replace(placeholder, online.title) +
            HTMLonlineSchool.replace(placeholder, online.school)
        );
        $(".education-entry:last").append(HTMLonlineDates.replace(placeholder, online.dates));
        $(".education-entry:last").append(HTMLonlineURL.replace(placeholder, online.url));
    },
    addSchool: function (school) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(
            HTMLschoolName.replace(placeholder, school.name) + HTMLschoolDegree.replace(placeholder, school.degree));
        $(".education-entry:last").append(HTMLschoolDates.replace(placeholder, school.dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace(placeholder, school.location));
        $(".education-entry:last").append(HTMLschoolMajor.replace(placeholder, school.majors.join(", ")));
    },
    display: function () {
        for (var i = 0; i < this.schools.length; i++) {
            this.addSchool(this.schools[i]);
        }

        if (this.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (var i = 0; i < this.onlineCourses.length; i++) {
                this.addOnline(this.onlineCourses[i]);
            }
        }
    }
};

var work = {
    "jobs": [
        {
            "employer": "New Hudson Façades",
            "title": "Mechanical Engineer",
            "location": "Linwood, PA",
            "dates": "Jun 2015 - Current",
            "description": "Design and support fabrication of custom, unitized, performance curtainwall systems for the Hudson Yards project in NYC."
        },
        {
            "employer": "University of Rochester IT",
            "title": "HelpDesk Lead and Training Specialist, ResNet Tech",
            "location": "Rochester, NY",
            "dates": "Aug 2011 - May 2015",
            "description": "Supported the computers and networks for over 5000 students and faculty at the University of Rochester. Worked up to the position of HelpDesk Lead and, hired new staff at the beginning of the school year, and designed a training and evaluation program to track staff performance."
        }
    ],
    addJob: function (job) {
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(
            HTMLworkEmployer.replace(placeholder, job.employer) + HTMLworkTitle.replace(placeholder, job.title)
        );
        $(".work-entry:last").append(HTMLworkLocation.replace(placeholder, job.location));
        $(".work-entry:last").append(HTMLworkDates.replace(placeholder, job.dates));
        $(".work-entry:last").append(HTMLworkDescription.replace(placeholder, job.description));
    },
    display: function () {
        for (var i = 0; i < this.jobs.length; i++) {
            this.addJob(this.jobs[i]);
        }
    }
};

var projects = {
    "projects": [
        {
            "title": "Curtainwall for 55 Hudson Yards, Manhattan",
            "dates": "Jun 2015 - Ongoing",
            "description": "Designed and supported the fabrication of a custom unitized curtainwall system for 55 Hudson Yards in Manhattan. Was involved in all phases of the design, manufacture, and install of the exterior cladding/facade of the building.",
            "images": [
                "images/55-terrace.png",
                "images/55-quarter.png"
            ]
        },
        {
            "title": "JavaScript Resume",
            "dates": "Ongoing",
            "description": "Creating an online resume with HTML, CSS and JavaScript.",
            "images": [
                ""
            ]
        },
        {
            "title": "Autodesk Inventor Add-Ins",
            "dates": "Dec 2015 - Current",
            "description": "Created several full-fledged Add-Ins for Autodesk Inventor using the Inventor API. Add-Ins are written in C# and are in use by the engineering and design teams at New Hudson Facades. Add-Ins performed such tasks as: property validation and correction, batch 3D model generation, custom hole pattern creation, and more.",
            "images": [
                ""
            ]
        }
    ],
    addProject: function (project) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace(placeholder, project.title));
        $(".project-entry:last").append(HTMLprojectDates.replace(placeholder, project.dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace(placeholder, project.description));
        if (project.images.length > 0) {
            for (var i = 0; i < project.images.length; i++) {
                $(".project-entry:last").append(HTMLprojectImage.replace(placeholder, project.images[i]));
            }
        }
    },
    display: function () {
        for (var i = 0; i < this.projects.length; i++) {
            this.addProject(this.projects[i]);
        }
    }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
