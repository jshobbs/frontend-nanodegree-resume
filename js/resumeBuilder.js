//var awesomeThoughts = "I am Jeff and I am AWESOME!";
//console.log(awesomeThoughts);
//var email = "cameron@udacity.com";
//var newEmail = email.replace("udacity", "gmail");
//console.log(email);
//console.log(newEmail);
//var funThoughts = awesomeThoughts.replace("AWESOME!", "FUN");
//console.log(funThoughts);
//$("#main").append(funThoughts);
//var formattedName = "Jeff Hobbs";
//var formattedRole = "Full Stack Developer";
//formattedName = HTMLheaderName.replace("%data%", formattedName);
//formattedRole = HTMLheaderRole.replace("%data%", formattedRole);
//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);
//var stringName = "audacity";
//stringName = stringName[1].toUpperCase() + stringName.slice(2);
//console.log(stringName);
//var bio = {
//	"name" : "Jeff",
//	"role" : "Full Stack Developer",
//	"contacts" : {
//		"email" : "jshobbssocal@gmail.com",
//		"phone" : "415-555-5555"
//    },
//	"pictureurl" : "images/fry.jpg",
//	"welcomemessage" : "Thank you for visiting",
//	"skills" : ["Java, HTML5, CSS, GITS"]
//};
//$("#main").append(bio.name);
//$("#main").append(bio.role);
//$("#main").append(bio.contacts.email);
//$("#main").append(bio.contacts.phone);
//$("#main").append(bio.pictureurl);
//$("#main").append(bio.welcomemessage);
//$("#main").append(bio.skills);


//var work = {};
//	work.employer = "Gnostech";
//	work.yearsworked = 13;
//	work.position = "Software Engineer";

//var education = {};
//	education["name"] = "UCSC";

//$("#main").append(work["position"]);
//$("#main").append(education.name);

var work = {
    "jobs": [
        {
            "employer": "Gnostech",
            "title": "Software Engineer",
            "location": "San Diego, CA",
            "dates": "2001 to present",
            "description": "We miss Alan"
        },
        {
            "employer": "Pacific Bell",
            "title": "Third Level Manager",
            "location": "San Diego, CA",
            "dates": "2000 to 2001",
            "description": "Dilbert"
        },
        {
            "employer": "Geico",
            "title": "Insurance Salesperson",
            "location": "San Diego, CA",
            "dates": "1993 to 1995",
            "description": "Do not trust Karen"
        }
    ]
}
var projects = {
    "projects": [
        {
            "title": "Project 1",
            "datesWorked": "2013 to present",
            "description": "Change time",
            "images": [
                "images/197x148.gif",
                "images/197x148.gif"
            ]
        },
        {
            "title": "Project 2",
            "datesWorked": "2014 to present",
            "description": "Stopped time",
            "images": [
                "images/197x148.gif",
                "images/197x148.gif"
            ]
        },
        {
            "title": "Project 3",
            "datesWorked": "1999 to 2012",
            "description": "Did time",
            "images": [
                "images/197x148.gif",
                "images/197x148.gif"
            ]
        }       
    ]
}

var bio = {
    "name": "Jeff Hobbs",
    "role": "Full Stack Developer",
    "pictureURL" : "images/fry.jpg",
    "welcomeMessage": "Thank you for visiting",
    "contacts": {
        "mobile": "415-555-1444",
        "email": "jeff@gmail.com",
        "github": "jshobbs",
        "twitter": "@jshobbs",
        "currentLocation": "San Francisco"
    },
    "skills": [
        "Javascript",
        "Github",
        "Java",
        "CSS"
    ]
}
var education = {    
	"schools": [
        {
            "name": "San Diego State University",
            "city": "San Diego, CA",
            "degree": "BS",
            "major": [
                "Comp Sci",
                "Finance"
            ],
            "yearGraduated": 2001
        },
        {
            "name": "Keller Graduate School of Management",
            "city": "Downers Grove, IL",
            "degree": "MS",
            "major": [
                "Information Systems Management"
            ],
            "yearGraduated": 2009
        }
    ],
    "onlineCourses": [
        {
            "title": "Begining Javascript",
            "school": "Udacity",
            "date": 2015,
            "url": "www.udacity.com"
        }
    ]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var mobilePhone = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(mobilePhone);
var emailAddress = HTMLemail.replace("%data%", bio.contacts.email); 
$("#topContacts").append(emailAddress);
var github = HTMLgithub.replace("%data%", bio.contacts.github); 
$("#topContacts").append(github);
var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter); 
$("#topContacts").append(twitter);
var myLocation = HTMLlocation.replace("%data%", bio.contacts.currentLocation); 
$("#topContacts").append(myLocation);


var pictureURL = HTMLbioPic.replace("%data%", bio.pictureURL);
$("#header").append(pictureURL);

var welcomeMSG = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(welcomeMSG);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    
    for (skill in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
    }
}

var displayWork = function() {
    if (work.jobs.length > 0) {
        
        for (job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            $(".work-entry:last").append(formattedEmployerTitle);
            console.log(formattedEmployerTitle);

            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            $(".work-entry:last").append(formattedLocation);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
}

displayWork();

if (education.schools.length > 0) {
    
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedCourse = HTMLschoolName.replace("%data%", education.schools[school].name);
        formattedCourse = formattedCourse + HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedCourse);
        formattedCourse = HTMLschoolDates.replace("%data%", education.schools[school].city);
        $(".education-entry:last").append(formattedCourse);
        formattedCourse = HTMLschoolLocation.replace("%data%", education.schools[school].yearGraduated);
        $(".education-entry:last").append(formattedCourse);
    
        for (myMajor in education.schools[school].major) {
            formattedCourse = HTMLschoolMajor.replace("%data%", education.schools[school].major[myMajor]);
            console.log(formattedCourse);
            $(".education-entry:last").append(formattedCourse);
        }
    }
}

if (education.onlineCourses.length > 0) {
    $(".education-entry:last").append(HTMLonlineClasses);

    for (online in education.onlineCourses) {
        var formattedCourse = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
        formattedCourse = formattedCourse + HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
        $(".education-entry:last").append(formattedCourse);
        formattedCourse = HTMLonlineDates.replace("%data%", education.onlineCourses[online].date);
        $(".education-entry:last").append(formattedCourse);
        formattedCourse = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
        $(".education-entry:last").append(formattedCourse);
    }
}

function locationizer(work_obj) {
    var locationArray = [];

    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }

    return locationArray;
}

console.log(locationizer(work));

projects.display = function() {

    if (projects.projects.length > 0) {
        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            var formattedProject = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedProject);
            formattedProject = HTMLprojectDates.replace("%data%", projects.projects[project].datesWorked);
            $(".project-entry:last").append(formattedProject);
            formattedProject = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedProject);

            if (projects.projects[project].images.length > 0) {
                for (image in projects.projects[project].images){
                    formattedProject = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                    $(".project-entry:last").append(formattedProject);
                }
            }
        }
    }
}

projects.display();

function inName(name) {
    var myName = name.trim().split(" ");
    console.log(myName);
    myName[1] = myName[1].toUpperCase();
    myName[0] = myName[0].slice(0,1).toUpperCase() +
        myName[0].slice(1).toLowerCase();
 
    return myName[0] + " " + myName[1];
}

$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);

example2();
var example2 = function() {
    console.log("Ran the example");
}