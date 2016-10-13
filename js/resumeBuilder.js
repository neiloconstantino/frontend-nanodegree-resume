var bio = {
    "name": "Neil Constantino",
    "role": "Software Engineer",
    "contacts": {
        "mobile": "(909) 720-7080",
        "email": "neiloconstantino@gmail.com",
        "github": "neiloconstantino",
        "location": "Los Angeles, CA, USA"
    },
    "welcomeMessage": "Hello World!",
    "skills": ["Bootstrap", "CSS", "HTML", "JavaScript", "jQuery"],
    "bioPic": "images/me.jpg",
    "display": function() {
        var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
        var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

        $("#header").prepend(formattedHeaderName, formattedHeaderRole);
        $("#header").append(formattedWelcomeMsg, formattedBioPic);
        $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
        $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

        if (typeof bio.skills != "undefined" && bio.skills !== null && bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

            bio.skills.forEach(function(skill) {
                var formattedSkill = HTMLskills.replace("%data%", skill);

                $("#skills").append(formattedSkill);
            });
        }
    }
};

var education = {
    "schools": [{
        "name": "University of Southern California",
        "location": "Los Angeles, CA, USA",
        "degree": "M.S.",
        "majors": ["Computer Science"],
        "dates": "2018",
        "url": "https://www.cs.usc.edu/academics/masters"
    }, {
        "name": "University of California, Los Angeles",
        "location": "Los Angeles, CA, USA",
        "degree": "Certificate",
        "majors": ["Real Estate w/ Concentration in Investments"],
        "dates": "2016",
        "url": "https://www.uclaextension.edu/public/category/courseCategoryCertificateProfile.do?method=load&certificateId=1061591"
    }, {
        "name": "University of California, Irvine",
        "location": "Irvine, CA, USA",
        "degree": "B.S.",
        "majors": ["Computer Engineering"],
        "dates": "2008",
        "url": "http://plaza.eng.uci.edu/degree-program/computer"
    }],
    "onlineCourses": [{
        "title": "Front End Web Developer",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/"
    }],
    "display": function() {
        if (typeof education.schools != "undefined" && education.schools !== null && education.schools.length > 0) {
            education.schools.forEach(function(school) {
                var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
                var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
                var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
                var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);

                $("#education").append(HTMLschoolStart);
                $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree, formattedSchoolDates,
                    formattedSchoolLocation, formattedSchoolMajor);
                $(".education-entry:last").children("a").attr("target", "_blank");
            });
        }

        if (typeof education.onlineCourses != "undefined" && education.onlineCourses !== null && education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            education.onlineCourses.forEach(function(course) {
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", course.url).replace("#", course.url);

                $("#education").append(HTMLschoolStart);
                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool, formattedOnlineDates, formattedOnlineURL);
            });
        }
    }
};

var work = {
    "jobs": [{
        "employer": "United States Air Force",
        "title": "Reservist / Captain",
        "location": "Los Angeles, CA, USA",
        "dates": "2014 - present",
        "description": "",
        "url": "https://www.airforce.com/"
    }, {
        "employer": "United States Air Force",
        "title": "Test Manager",
        "location": "Los Angeles AFB, CA, USA",
        "dates": "2013 - 2014",
        "description": "Test Manager for Air Force Space Command (AFSPC) Space and Missile Systems Center (SMC) Range and Network Systems Directorate.  Led test and evaluation program for $10B ground network providing command & control (C2) for 170+ satellites.  Managed 80+ Department of Defense (DoD) and contractor system engineers for Air Force Satellite Control Network (AFSCN) developmental and operational test across 40+ sites.  Oversaw developmental testing for $61M satellite command and control scheduling software upgrade (i.e. Electronic Schedule Dissemination 3.0 System), verified 670+ project requirements.  Tested and fielded 2 tracking station upgrades supporting government and war fighter operations of 7200+ satellite contacts per year.  Contributed to $2B source selection for space lift launch and test range system support contract.",
        "url": "https://www.airforce.com/"
    }, {
        "employer": "United States Air Force",
        "title": "Lead Software Engineer",
        "location": "Los Angeles AFB, CA, USA",
        "dates": "2011 - 2013",
        "description": "Lead Software Engineer for Air Force Space Command (AFSPC) Space and Missile Systems (SMC) Military Satellite Communications (MILSATCOM) Systems Directorate.  Led 30 member software acquisition management team for $41B MILSATCOM portfolio across 5 satellite programs.  Established policy, authored management plans, chaired software engineering forum, standardized metrics reporting.  Managed development and training of web based strategic planning tool for commander, used to track work breakdown structure and performance of 85 organization level goals and used to allocate 900+ employee resources.  Oversaw testing of web based MILSATCOM asset synchronization tool, verified/validated 730+ project requirements.  Staffed responsibility agreement between Air Force and NSA for $175M MILSATCOM cryptography upgrade project.  Implemented software engineering workforce training program in collaboration with Air Force Institute of Technology (AFIT).",
        "url": "https://www.airforce.com/"
    }, {
        "employer": "Raytheon",
        "title": "Software Quality Engineer",
        "location": "Fullerton, CA, USA",
        "dates": "2008 - 2010",
        "description": "Ensured compliance to ISO 9001/AS9100/CMMI5 industry standards across 9 projects using six sigma methodologies.  Reviewed software test plans/procedures, operationally tested airspace command and control software used by US and allied countries.  Certified 7,000+ ground radar system components worth $1B achieving 100% product compliance to customer.  Conducted 30+ internal and supplier audits, implemented 50+ corrective actions for product/process improvements.",
        "url": "http://www.raytheon.com/"
    }, {
        "employer": "Conexant",
        "title": "Design Verification & Test Engineer",
        "location": "Newport Beach, CA, USA",
        "dates": "2006 - 2008",
        "description": "Designed test bench environments to conduct characterization, verification, and validation of semiconductor devices.  Authored test plans and developed automated test programs using LabVIEW reducing text execution times by 90%.",
        "url": "http://www.conexant.com/"
    }],
    "display": function() {
        if (typeof work.jobs != "undefined" && work.jobs !== null && work.jobs.length > 0) {
            work.jobs.forEach(function(job) {
                $("#workExperience").append(HTMLworkStart);
                var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer).replace("#", job.url);
                var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
                var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
                var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
                var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);

                $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle,
                    formattedWorkDates, formattedWorkLocation, formattedWorkDescription);
                $(".work-entry:last").children("a").attr("target", "_blank");
            });
        }
    }
};

var projects = {
    "projects": [{
        "title": "Air Force Satellite Control Network",
        "dates": "2013 - 2014",
        "description": "TODO: Air Force Satellite Control Network description",
        "images": ["images/afscn.png", "images/afscn2.jpg", "images/afscn3.jpg"]
    }, {
        "title": "MILSATCOM",
        "dates": "2011 - 2013",
        "description": "TODO: Sample project 1 description",
        "images": ["images/milsatcom.png"]
    }],
    "display": function() {
        if (typeof projects.projects != "undefined" && projects.projects !== null && projects.projects.length > 0) {
            projects.projects.forEach(function(project) {
                var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
                var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
                var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);

                $("#projects").append(HTMLprojectStart);
                $(".project-entry:last").append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription);

                if (typeof project.images != "undefined" && project.images !== null && project.images.length > 0) {
                    project.images.forEach(function(image) {
                        var formattedProjectImage = HTMLprojectImage.replace("%data%", image);

                        $(".project-entry:last").append(formattedProjectImage);
                    });
                }
            });
        }
    }
};

//Call display functions
bio.display();
work.display();
projects.display();
education.display();

$("#main").append(internationalizeButton);

/* Function that takes a string of two names and returns an internationalized version */
function inName(name) {
    name = name.trim().split(" ");
    name[0] = name[0][0].toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    name = name.join(" ");

    return name;
}

$("#mapDiv").append(googleMap);