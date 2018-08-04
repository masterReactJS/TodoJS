var settingsButton = document.getElementsByClassName("fa-cog");
var settingsList = document.getElementById("settingsList");

document.addEventListener("click", function() {
    //settingsList.style.display = "none";  
});

settingsButton[0].addEventListener("click", function() {
    settingsList.style.display = "block";  
});


