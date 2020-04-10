function goToAbout(){
    var aboutElem = document.getElementById("about");
    aboutElem.scrollIntoView({
        block: "start",
        behavior: "smooth"
    });
}

function goToContact(){
    var contactElem = document.getElementById("contact");
    contactElem.scrollIntoView({
        block: "start",
        behavior: "smooth"
    });
}