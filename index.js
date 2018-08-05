var settingsButton = document.getElementsByClassName("fa-cog");
var settingsList = document.getElementById("settingsList");
var tabDetails = document.getElementById("tabDetails");

var inboxDetails = `<span class="inboxHeading">Inbox</span>
                    <div class="taskDetails" id="addTaskPage">
                        <i class="fa fa-plus plusIcon" aria-hidden="true"></i>
                        <span id="addTask">Add Task</span>
                    </div>`;

var currentDayDetails = `<div> Today </div>`
var next7Days = `<div> Next 7 days </div>`


//Load tab details on loading of a page
document.onload = loadInboxTabDetails();

function loadInboxTabDetails() {
    document.getElementById("inbox").style.backgroundColor = "#fff";
    tabDetails.innerHTML = inboxDetails;
}

//Hide settings list when clicked elsewhere
document.addEventListener("click", function () {
    settingsList.style.display == "block" ? settingsList.style.display = "none" : null;
});

//Toggle settings list to visible and invisible
settingsButton[0].addEventListener("click", function (event) {
    event.stopPropagation();  // To stop event bubbling
    settingsList.style.display == "block" ? settingsList.style.display = "none" : settingsList.style.display = "block";;
});

//Deactive tabs function
function deactivateTabs(item) {
    document.getElementById(item).style.backgroundColor = "#FAFAFA";
}

function activateTab(item1, item2) {
    document.getElementById(item1).style.backgroundColor = "#fff";
    tabDetails.innerHTML = item2;
}

//Activate and Deactivate Tabs based on selection and also toggle tab details
document.getElementById("inbox").addEventListener("click", function () {
    deactivateTabs("currentDayCalendar");
    deactivateTabs("calendar");
    activateTab("inbox", inboxDetails);
});

document.getElementById("currentDayCalendar").addEventListener("click", function () {
    deactivateTabs("calendar");
    deactivateTabs("inbox");
    activateTab("currentDayCalendar", currentDayDetails);
});

document.getElementById("calendar").addEventListener("click", function () {
    deactivateTabs("currentDayCalendar");
    deactivateTabs("inbox");
    activateTab("calendar", next7Days);
});

document.getElementById("addTask").addEventListener("click", addTask);

function addTask() {
    let addTaskPage = document.getElementById("addTaskPage");
    addTaskPage.innerHTML = "Task should be added here";
}



