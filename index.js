var settingsButton = document.getElementsByClassName("fa-cog");
var settingsList = document.getElementById("settingsList");
var tabDetails = document.getElementById("tabDetails");

var inboxDetails = `<span class="inboxHeading">Inbox</span>
                    <div class="taskDetails" id="addTaskPage">
                        <i class="fa fa-plus plusIcon" aria-hidden="true"></i>
                        <span id="addTask">Add Task</span>
                    </div>`;

var addTaskArea = `<div class="container">
                        <input type="text" class="taskName" placeholder="e.g. Conference on Wednesday as 15:00"/>
                        <input placeholder="Schedule" class="schedule" type="text" onfocus="(this.type='date')">
                   </div>
                   <div class="buttonContainer">
                        <input type="button" value="Add Task" class="addTask" onclick="addTaskButton()"/>
                        <input type="button" value="Cancel" class="cancel"/>
                   </div>`

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

document.getElementById("tabDetails").addEventListener("click", addTasks);

function addTasks(event) {
    if (event.target === document.getElementById("addTask")) {
        let addTaskPage = document.getElementById("addTaskPage");
        addTaskPage.innerHTML = addTaskArea;
    }
}

function getDiffBetweenDates(date1, date2) {
    var duration = moment.duration(date2.diff(date1));
    return duration.asDays() + 1;
}

function addTaskButton() {
    //fetching taskName and schedule from ui
    let taskNode = document.getElementsByClassName("taskName")[0];
    let taskName = taskNode.value;
    let dateNode = document.getElementsByClassName("schedule")[0];
    let schedule = dateNode.value;
    let addTaskPage = document.getElementById("addTaskPage");

    //check whether ul is added or not
    if (addTaskPage.getElementsByTagName("ul").length == 0) {
        var createULList = document.createElement("ul");
        createULList.style.marginLeft = "20px";
        addTaskPage.insertBefore(createULList, addTaskPage.childNodes[0]);
    }

    //creating list items
    let createLIList = document.createElement("li");
    createLIList.id = '_' + Math.random().toString(36).substr(2, 9);
    createLIList.addEventListener("click", function () {
        clickOnTask(createLIList.id)
    })
    let textNode = document.createTextNode(taskName);
    let divNode = document.createElement("div");
    var scheduleNode;
    createLIList.appendChild(divNode);
    let createSpanNode1 = document.createElement("span");
    createSpanNode1.appendChild(textNode);
    let createSpanNode2 = document.createElement("span");

    //check the difference between the dates
    switch (Math.floor(getDiffBetweenDates(moment(new Date()), moment(schedule)))) {
        case 1:
            scheduleNode = document.createTextNode("Tomorrow");
            break;
        case -1:
            scheduleNode = document.createTextNode("Task overdue by 1 day");
            break;
        default:
            scheduleNode = document.createTextNode(moment(schedule).format("DD MMM"));
            break;
    }
    createSpanNode2.appendChild(scheduleNode);

    //styling list items
    createSpanNode1.style.fontSize = "14px";
    createSpanNode2.style.color = "grey";
    createSpanNode2.style.fontSize = "12px";
    divNode.appendChild(createSpanNode1);
    divNode.appendChild(createSpanNode2);

    //positioning list items
    divNode.style.display = "flex";
    divNode.style.justifyContent = "space-between";

    //styling list 
    createLIList.style.listStyleType = "circle";
    createLIList.style.content = "•";
    createLIList.style.fontSize = "100%";
    createLIList.style.marginBottom = "15px";
    createLIList.style.marginRight = "15px";

    //appending li to ul and ul to dom
    addTaskPage.getElementsByTagName("ul")[0].appendChild(createLIList);

    //clear the text after submit
    taskNode.value = "";
    dateNode.value = "";
}

function clickOnTask(id) {
    document.getElementById(id).remove();
}


