function controller(file){

pushLeft.close();
$("#MainContent").load(file);
//we have to change dynamically the text of the header(this one must be included in index.html)
if(file=="views/home.html") document.getElementById("header-text").innerHTML="Welcome!";
if(file=="views/services.html") document.getElementById("header-text").innerHTML="Services";
if(file=="views/contact.html") document.getElementById("header-text").innerHTML="Contact";
if(file=="views/find.html") document.getElementById("header-text").innerHTML="Where To find Us";
}
