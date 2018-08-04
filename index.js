var settingsButton = document.getElementsByClassName("fa-cog");
var settingsList = document.getElementById("settingsList");

document.addEventListener("click", function() {
    settingsList.style.display == "block" ? settingsList.style.display = "none" : null;
});

settingsButton[0].addEventListener("click", function(event) {
    event.stopPropagation();
    settingsList.style.display == "block" ? settingsList.style.display = "none" : settingsList.style.display = "block";;
});


