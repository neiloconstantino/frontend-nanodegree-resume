var bio = {
    "name" : "Neil O. Constantino",
    "role" : "Software Engineer",
    "contacts" : {
        "mobile" : "(909) 720-7080",
        "email" : "neiloconstantino@gmail.com",
        "github" : "neiloconstantino",
        "location" : "Los Angeles, CA, USA"
    },
    "welcomeMessage" : "Hello World!",
    "skills" : ["HTML",  "CSS", "JavaScript", "jQuery", "Bootstrap"],
    "bioPic" : "images/me.jpg"
};

var education = {
    "schools" : [
        {
            "name" : "University of Southern California",
            "city" : "Los Angeles, CA, USA",
            "degree" : "M.S.",
            "majors" : ["Computer Science"],
            "dates" : 2018,
            "url" : "http://www.usc.edu/"
        },
        {
            "name" : "University of California, Irvine",
            "city" : "Irvine, CA, USA",
            "degree" : "B.S.",
            "majors" : ["Computer Engineering"],
            "dates" : 2008,
            "url" : "https://uci.edu/"
        },
        {
            "name" : "University of California, Los Angeles, Extension",
            "city" : "Los Angeles, CA, USA",
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
    ]
    /*TODO: Fill out additional education (e.g. Air Force Training, etc.)*/
}

var work = {
    "jobs" : [
        {
            "employer" : "United States Air Force",
            "title" : "Reservist / Captain",
            "dates" : "2014 - present",
            "description" : "TODO: fill out description"
        },
        {
            "employer" : "United States Air Force",
            "title" : "Test Manager",
            "dates" : "2013 - 2014",
            "description" : "TODO: fill out description"
        },
        {
            "employer" : "United States Air Force",
            "title" : "Lead Software Engineer",
            "dates" : "2011 - 2013",
            "description" : "TODO: fill out description"
        },
        {
            "employer" : "Raytheon",
            "title" : "Software Quality Engineer",
            "dates" : "2008 - 2010",
            "description" : "TODO: fill out description"
        },
        {
            "employer" : "Conexant",
            "title" : "Design Verification & Test Engineer",
            "dates" : "2006 - 2008",
            "description" : "TODO: fill out description"
        }
    ]
}

var projects = {
    "projets" : [ 
        {
            "title" : "Sample Project 1",
            "dates" : "2016",
            "description" : "TODO: Sample project 1 description",
            "images" : ["TODO: image 1 URL", "TODO: image 2 URL"]
        }
    ]
}


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

function displayWork() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer) 
            + HTMLworkTitle.replace("%data%", work.jobs[job].title));
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
    }
}

displayWork();