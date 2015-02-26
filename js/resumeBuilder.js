//var name="Sudhakar Kakileti";
//var role="Java Developer";

//var formattedName = HTMLheaderName.replace("%data%",name);
//var formattedRole = HTMLheaderRole.replace("%data%",role);


//$("#header").append(HTMLheaderName.replace("%data%",name));
//$("#header").prepend(HTMLheaderRole.replace("%data%",role));
//var skills = [];

var bio = {
 "name" : "Sudhakar Kakileti",
 "role" :" Java Application Developer ",
 "conDetails" :{
  "email":"sudhakarkakileti@gmail.com",
  "mobile":"416 271 2576",
  "github":"sudkak",
  "twitter": "@skakileti",
  "location":"Toronto"
 },
 "picURL" : "images/sud.jpg",
 "welmsg" : " Welcome to view my Resume",
 "skills" : ["java","C","javascript"]
 
};


$("#header").append(HTMLheaderName.replace("%data%",bio.name));
$("#header").append(HTMLheaderRole.replace("%data%",bio.role));
$("#header").append(HTMLWelcomeMsg.replace("%data%",bio.welmsg));
$("#header").append(HTMLbioPic.replace("%data%",bio.picURL));
$("#header").append(HTMLskills.replace("%data%",bio.skills));
$("#header").append(HTMLmobile.replace("%data%",bio.conDetails.mobile));
$("#header").append(HTMLemail.replace("%data%",bio.conDetails.email));
$("#header").append(HTMLtwitter.replace("%data%",bio.conDetails.twitter));
$("#header").append(HTMLgithub.replace("%data%",bio.conDetails.github));
$("#header").append(HTMLlocation.replace("%data%",bio.conDetails.location));


//creating work object using the dot notation
var work = {
};
work.currentJobPos = "Application Dev " ;
work.currentEmployer = "Rogers";
work.experince = "8 years ";

$("#header").append(HTMLworkTitle.replace("%data%",work.currentJobPos));
$("#header").append(HTMLworkEmployer.replace("%data%",work.currentEmployer));
$("#header").append(HTMLworkDates.replace("%data%",work.experience));

/*var school = {
"schools":[
{
"name":"BVC EC " ,
"city":"AMP"
}
{
"name":"SVC",
"city":"HYD"
}
]

} */


