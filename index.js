var settingsButton = document.getElementsByClassName("fa-cog");
var settingsList = document.getElementById("settingsList");

//Hide settings list when clicked elsewhere
document.addEventListener("click", function() {
    settingsList.style.display == "block" ? settingsList.style.display = "none" : null;
});

//Toggle settings list to visible and invisible
settingsButton[0].addEventListener("click", function(event) {
    event.stopPropagation();  // To stop event bubbling
    settingsList.style.display == "block" ? settingsList.style.display = "none" : settingsList.style.display = "block";;
});

//DEactive tabs function
function deactivateTabs(item) {
    document.getElementById(item).style.backgroundColor = "#FAFAFA";
}

//Activate and Deactivate Tabs based on selection
document.getElementById("inbox").addEventListener("click", function() {
    document.getElementById("inbox").style.backgroundColor = "#fff";
    deactivateTabs("currentDayCal");
    deactivateTabs("calendar");
});

document.getElementById("currentDayCal").addEventListener("click", function() {
    document.getElementById("currentDayCal").style.backgroundColor = "#fff";
    deactivateTabs("inbox");
    deactivateTabs("calendar");
});

document.getElementById("calendar").addEventListener("click", function() {
    document.getElementById("calendar").style.backgroundColor = "#fff";
    deactivateTabs("currentDayCal");
    deactivateTabs("inbox");
});


