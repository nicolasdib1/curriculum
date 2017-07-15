/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*var name = "Nicolas";
var role ="Entrepeneur";
var awesomeThoughts;
awesomeThoughts="I am nicolas and I am awesome";
var funThoughts = awesomeThoughts.replace("awesome","Fun");
console.log(awesomeThoughts);
console.log(funThoughts);

var formatttedName=HTMLheaderName.replace("%data%",name);
var formatttedRole=HTMLheaderRole.replace("%data%",role);



$("#header").prepend(formatttedRole);
$("#header").prepend(formatttedName);
*/


var bio = {
	"name" : "Nicolas",
	"role" : "Entrepeneur",
	"contacts":{
		"mobile":"+56973378510",
		"email":"ndib135@gmail.com",
		"github":"nicolasdib1",
		"twitter":"@ndib135",
		"location":"Santiago"
	},
	"welcomeMessage":"Welcome to my resume",
	"skills":["Imagination", "Analitycs"],
	"bioPic":"https://www.google.cl/search?q=nicolas+dib&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiB7NLC7PnUAhVEjpAKHU_4CQAQ_AUICigB&biw=1366&bih=662#.jpg",
	display:function(){

		$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
		$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
		
		$("#header").append(HTMLlocation.replace("%data%",bio.contacts.location));
		$("#header").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
		$("#header").append(HTMLemail.replace("%data%",bio.contacts.email));
		$("#header").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
		$("#header").append(HTMLgithub.replace("%data%",bio.contacts.github));
		
		
	}
};
bio.display();

var education ={
	"schools": [
		{
			"name": "Universidad de los Andes",
			"location": "Bogota",
			"degree": "BA",
			"majors" : ["Economics"],
			"dates" : "2010",
			"url":"www.uniandes.edu.co"
		},
		{
			"name" : "Universidad de Los Andes",
			"location" : "Bogota",
			"degree" : "Master",
			"majors" : ["Economics"],
			"dates" : "2012",
			"url":"www.uniandes.edu.co"
		},
	],
	"onLineCourses" :[
	{
		"titlle":"Progaming for begginers",
		"school" : "Udacity",
		"Dates" : "2017",
		"url":"www.udacity.com"
	}
	],
	display:function(){
		$("#education").append(HTMLschoolStart);
		for (var school in education.schools){
			var formatttedName=HTMLschoolName.replace("%data%",education.schools[school].name);
			$(".education-entry:last").append(formatttedName);

			var formattedDegree=HTMLschoolDegree.replace("%data%",education.schools[school].degree);
			$(".education-entry:last").append(formattedDegree);

			var formattedDates=HTMLschoolDates.replace("%data%",education.schools[school].dates);
			$(".education-entry:last").append(formattedDates);

			var formattedLocation=HTMLschoolLocation.replace("%data%",education.schools[school].location);
			$(".education-entry:last").append(formattedLocation);


			for (var major in education.schools[school].majors){
				var formattedMajors=HTMLschoolMajor.replace("%data%",education.schools[school].majors[major]);
				$(".education-entry:last").append(formattedMajors);
				}
		}
	}
};

education.display();

var work ={
	"jobs":[
		{
		"title":"Revenue Manager",
		"employer":"LATAM",
		"dates":"March 2016 - Now",
		"location":"New york",
		"description":"Establish the prices of air tickets in LATAM airlines"
		},
		{
		"title":"Revenue Manager",
		"employer":"LATAM",
		"dates":"March 2016 - Now",
		"location":"New york",
		"description":"Establish the prices of air tickets in LATAM airlines"
		}
	],
	
	display: function() {
		$("#workExperience").append(HTMLworkStart);

		for (var job in work.jobs)
		{
			var formatedEmployer =HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			$(".work-entry:last").append(formatedEmployer);

			var formatedWorkDates =HTMLworkDates.replace("%data%",work.jobs[job].dates);
			$(".work-entry:last").append(formatedWorkDates);

			var formatedWorkTitle =HTMLworkTitle.replace("%data%",work.jobs[job].title);
			$(".work-entry:last").append(formatedWorkTitle);			
			
			var formatedWorkLocation =HTMLworkDates.replace("%data%",work.jobs[job].location);
			$(".work-entry:last").append(formatedWorkLocation);

			var formatedWorkDescription =HTMLworkDates.replace("%data%",work.jobs[job].description);
			$(".work-entry:last").append(formatedWorkDescription);
		}
	}
};

work.display();

var img=document.createElement("img");
img.src =bio.picture;

if(bio.skills.length>0) {
	$("#header").append(HTMLskillsStart);
	for (i=0;i<=1;i++){
		var formattedSkill =HTMLskills.replace("%data%",bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
}





function inName(name) {
	name=name.trim().split(" ");
	name[1]=name[1].toUpperCase();
	name[0] =name[0].slice(0,1).toUpperCase() + name[0].slie(1).toLowerCase();
	return name[0] + " " + name[1];	

}



$("#main").append(internationalizeButton);


projects= {

	projects:[{
		"Tittle":"Sample Prject1",
		"Date":"2017",
		"Text":"Abc1 abcsd abcasd asdsdsdsasd sasdsaldasd asdlasd asdlasd asdlasd asdlas"
	}]
};

projects.display= function() {
	for (var roject in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle=HTMLprojectTitle.replace("%data%",projects.projects[project].Tittle);
		$(".project-entry:last").append(formattedTitle);

		var formatedDates=HTMLprojectTitle.replace("%data%",projects.projects[project].Date);
		$(".project-entry:last").append(formatedDates);

		var formatedText=HTMLprojectTitle.replace("%data%",projects.projects[project].Text);
		$(".project-entry:last").append(formatedText);
	}
};

projects.display();

$("#MapDiv").append(googleMap);
