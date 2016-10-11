var bio = {
    "name" : "Neil Constantino",
    "role" : "Software Engineer",
    "contacts" : {
        "mobile" : "(909) 720-7080",
        "email" : "neiloconstantino@gmail.com",
        "github" : "neiloconstantino",
        "location" : "Los Angeles, CA, USA"
    },
    "welcomeMessage" : "Hello World!",
    "skills" : ["Bootstrap", "CSS", "HTML", "JavaScript", "jQuery"],
    "bioPic" : "images/me.jpg",
    "display" : function() {
        $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
        $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
        $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));

        $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

        if (typeof bio.skills != "undefined" && bio.skills != null && bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

            for (var i = 0; i < bio.skills.length; i++){
                $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
            }
        }
    }
};

var education = {
    "schools" : [
        {
            "name" : "University of Southern California",
            "location" : "Los Angeles, CA, USA",
            "degree" : "M.S.",
            "majors" : ["Computer Science"],
            "dates" : 2018,
            "url" : "http://www.usc.edu/"
        },
        {
            "name" : "University of California, Irvine",
            "location" : "Irvine, CA, USA",
            "degree" : "B.S.",
            "majors" : ["Computer Engineering"],
            "dates" : 2008,
            "url" : "https://uci.edu/"
        },
        {
            "name" : "University of California, Los Angeles, Extension",
            "location" : "Los Angeles, CA, USA",
            "degree" : "Certificate in",
            "majors" : ["Real Estate w/ Concentration in Investments"],
            "dates" : 2016,
            "url" : "https://www.uclaextension.edu/"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Front End Web Developer",
            "school" : "Udacity",
            "dates" : 2016,
            "url" : "https://www.udacity.com/"
        }
    ],
    
    /*TODO: Fill out additional education (e.g. Air Force Training, etc.)*/
}

var work = {
    "jobs" : [
        {
            "employer" : "United States Air Force",
            "title" : "Reservist / Captain",
            "location" : "Los Angeles, CA, USA",
            "dates" : "2014 - present",
            "description" : "TODO: fill out description"
        },
        {
            "employer" : "United States Air Force",
            "title" : "Test Manager",
            "location" : "Los Angeles AFB, CA, USA",
            "dates" : "2013 - 2014",
            "description" : "TODO: fill out description"
        },
        {
            "employer" : "United States Air Force",
            "title" : "Lead Software Engineer",
            "location" : "Los Angeles AFB, CA, USA",
            "dates" : "2011 - 2013",
            "description" : "TODO: fill out description"
        },
        {
            "employer" : "Raytheon",
            "title" : "Software Quality Engineer",
            "location" : "Fullerton, CA, USA",
            "dates" : "2008 - 2010",
            "description" : "TODO: fill out description"
        },
        {
            "employer" : "Conexant",
            "title" : "Design Verification & Test Engineer",
            "location" : "Newport Beach, CA, USA",
            "dates" : "2006 - 2008",
            "description" : "TODO: fill out description"
        }
    ],
    "display" : function() {
        for (var job = 0; job < work.jobs.length; job++) {
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer) 
                + HTMLworkTitle.replace("%data%", work.jobs[job].title));
            $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
            $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
        }
    }
}

var projects = {
    "projects" : [ 
        {
            "title" : "Air Force Satellite Control Network",
            "dates" : "2013 - 2014",
            "description" : "TODO: Air Force Satellite Control Network description",
            "images" : ["images/afscn.png", "images/afscn2.jpg", "images/afscn3.jpg"]
        },
        {
            "title" : "MILSATCOM",
            "dates" : "2011 - 2013",
            "description" : "TODO: Sample project 1 description",
            "images" : ["images/milsatcom.png"]
        }
    ],
    "display" : function () {
        for (var i=0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));

            if (projects.projects[i].images.length > 0) {
                for (var j=0; j < projects.projects[i].images.length; j++) {
                    $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
                }
            }
        }
    }
}



//Call display functions
bio.display();
education.display();
work.display();
projects.display();


$("#main").append(internationalizeButton);

/* Function that takes a string of two names and returns an internationalized version */
function inName(name){
    name = name.trim().split(" ");
    name[0] = name[0][0].toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    name = name.join(" ");

    return name;
}

$("#mapDiv").append(googleMap);