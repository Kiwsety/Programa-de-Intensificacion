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
	setupContainers();
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
}

function orientationSelected(_orientation) {
	currentOrientation = _orientation;
	currentSubject = 0;
	setupContainers();
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
}

function subjectSeleceted(_subject){
	currentSubject = _subject
}

function setupButtons(subjects){
	i = 0;
	page = 0;
	console.log(currentYear+"°"+currentOrientation+" accesed");
	for (;i < 8;i++) {
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

function setupContainers() { //for single orientation
	if (currentYear <= 3) {
		if (currentSubject == 0){
			document.getElementById("subjects").disabled = false;
		}
		else {
			document.getElementById("subjects").disabled = true;
			if (currentSubject == 0){
				document.getElementById("image-container").disabled = false;
			}
			else {
				document.getElementById("image-container").disabled = true;
			}
		}

	}
	else if (currentYear > 3) { //for orientable years
		document.getElementById("orientation").disabled = false;
		
		if (currentOrientation == 0){
			document.getElementById("subjects").disabled = false;
		}
		else {
			document.getElementById("subjects").disabled = true;
			
			if (currentSubject == 0){
				document.getElementById("image-container").disabled = true;
			}
			else {
				document.getElementById("image-container").disabled = false;
			}
		}
	}
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
}	
	
	//page change script functionality later