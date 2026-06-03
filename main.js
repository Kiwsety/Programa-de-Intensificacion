const year1 = ["Matematica","Lengua","C. Naturales","C. Sociales","Ciudadania","Artistica","Ed. Fisica"];
const year2 = ["Matematica","Lengua","Fisicoquimica","Biologia","Geografia","Historia","Ciudadania","Artistica","Ed. Fisica"];
const year3 = ["Matematica","Lengua","Fisicoquimica","Biologia","Geografia","Historia","Ciudadania","Artistica","Ed. Fisica"];
const year41 = ["Matematica","Lengua","Fisicoquimica","Biologia","Geografia","Historia"];
const year42 = ["Matematica","Lengua"];
const year43 = ["Matematica","Lengua","Fisicoquimica"];
const year51 = ["Matematica","Lengua","C. Naturales","C. Sociales","Ciudadania","Artistica","Ed. Fisica"];
const year52 = ["Matematica"];
const year53 = ["Matematica","Lengua","Fisicoquimica","Biologia","Geografia","Historia","Ciudadania","Artistica","Ed. Fisica"];
const year61 = ["Matematica","Lengua","Fisicoquimica","Biologia","Geografia","Historia"];
const year62 = ["Matematica","Lengua","SIC"];
const year63 = ["Matematica","Lengua","Fisicoquimica","GEO"];



let i;
let page = 0;
let currentOrientation = 0;
let maxPages = 3;
let currentYear = 0;
let currentSubject = 0;

function yearSelected(year) {
	currentYear = year;
	currentOrientation = 0;
	currentSubject = 0;
	switch (year) {
		case 1:
			setupButtons(year1);
			break;
		case 2:
			setupButtons(year2);
			break;
		case 3:
			setupButtons(year3);
			break;
	}
	setupContainers();
}

function orientationSelected(_orientation) {
	currentOrientation = _orientation;
	currentSubject = 0;
	switch (_orientation) {
		case 1:
			switch (currentYear) {
				case 4:
					setupButtons(year41);
					break;
				case 5:
					setupButtons(year51);
					break;
				case 6:
					setupButtons(year61);
					break;
			}
			break;
		case 2:
			switch (currentYear) {
				case 4:
					setupButtons(year42);
					break;
				case 5:
					setupButtons(year52);
					break;
				case 6:
					setupButtons(year62);
					break;
			}
			break;
		case 3:
			switch (currentYear) {
				case 4:
					setupButtons(year43);
					break;
				case 5:
					setupButtons(year53);
					break;
				case 6:
					setupButtons(year63);
					break;
			}
			break;
	}
	setupContainers();
}

function subjectSeleceted(_subject){
	currentSubject = _subject
}

function setupButtons(subjects){
	i = 0;
	page = 0;
	console.log(currentYear+"°"+currentOrientation+" accesed");
	for (;i < 14;i++) {
		console.log("subject-button"+(i+1)+" accesed");
		console.log(subjects.length >= i+1);
		if (subjects.length >= i+1) {
			document.getElementById("subject-button"+(i+1)).innerText = subjects[i];
			document.getElementById("subject-button"+(i+1)).disabled = false;
		}
		else {
			console.log("must be hidden");
			document.getElementById("subject-button"+(i+1)).disabled = true;
		}
	}
	document.getElementById("page-number").innerText = (page+1)+"/"+maxPages;
}

function setupContainers() {
	let result
	if (currentSubject == 0) {
		if (currentOrientation == 0 && currentYear > 3){
			if (currentYear == 0){
				result = "1000";
			}
			else {
				result = "0100";
			}
		}
		else if (currentYear != 0){
			result = "0010";
		}
		else {
			result = "1000";
		}
	}
	else {
		result = "0001";
	}
	console.log("year"+currentYear+" orientation"+currentOrientation+" subject"+currentSubject);
	numToVisibility("years",result[0])
	numToVisibility("orientation",result[1])
	numToVisibility("subjects",result[2])
	numToVisibility("image-container",result[3])
}

function numToVisibility(who,num){
	if (num == 1) {
		document.getElementById(who).hidden = false;
	}
	else {
		document.getElementById(who).hidden = true;
	}
}

function backPressed() {	
	if (currentSubject > 0) {
		currentSubject = 0;
	}
	else {
		if (currentOrientation > 0){
			currentOrientation = 0;
		}
		else {
			if (currentYear > 0){
				currentYear = 0;
			}
		}
	}
		setupContainers();
}

function changePage(side){
	if (side == 1) {
		page += 1;
		if (page >= maxPages) {
			page = 0;
		}
	}
	else {
		page -= 1;
		if (page < 0) {
			page = maxPages-1;
		}
	}
	document.getElementById("page-number").innerText = (page+1)+"/"+maxPages;
	updatePageImage();
}	
	
function updatePageImage(){
	document.getElementById("image").src = "years/"+currentYear+currentOrientation+"/"+currentSubject+"/"+page+".png";
}