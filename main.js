const year1 = ["C. Naturales", "C. Sociales", "Ciudadania", "Ingles", "Lengua", "Matematica", "Musica", "Plastica", "Teatro", "Ed. Fisica"];
const year2 = ["Biologia", "Ciudadania", "Fisicoquimica", "Geografia", "Historia", "Ingles", "Lengua", "Matematica", "Musica", "Plastica", "Teatro", "Ed. Fisica"];
const year3 = ["Biologia", "Ciudadania", "Fisicoquimica", "Geografia", "Historia", "Ingles", "Literatura", "Matematica", "Musica", "Plastica", "Ed. Fisica"];

const year41 = ["Biologia", "Fisica", "Geografia", "Historia", "Ingles", "Literatura", "Matematica", "NCTIX", "SIC", "Sado", "TEO", "Ed. Fisica"];
const year42 = ["Biologia", "Fisica", "Geografia", "Historia", "Ingles", "Literatura", "Matematica", "NCTIX", "Psicologia", "Sado", "Ed. Fisica"];
const year43 = ["Biologia", "Fisica", "Geografia", "Historia", "Ingles", "Literatura", "Matematica", "NCTIX", "Quimica", "Sado", "Ed. Fisica"];

const year51 = ["Derecho", "Micro y Macro", "Geografía", "GEO", "Historia", "Ingles", "Química", "Literatura", "Matematica", "Pol. y Ciudadanía", "SIC", "Ed. Fisica"];
const year52 = ["Com. y Soc.", "Econom. Politica", "Geografía", "Historia", "Ingles", "Química", "Literatura", "Matematica", "Pol. y Ciudadanía", "Sociología", "Ed. Fisica"];
const year53 = ["Arte", "Biología", "C. de la tierra", "Fisica", "Química", "Geografía", "Historia", "Ingles", "Literatura", "Matematica", "Pol. y ciudadanía", "Ed. Fisica"];

const year61 = ["Arte", "Econom. Política", "Filosofía", "Inglés", "Literatura", "Matemática", "Proy. Organiz.", "Trabajo y Ciudadanía", "Ed. Fisica"];
const year62 = ["Arte",  "Filosofía", "Geografía", "Historia", "Inglés", "Literatura", "Matemática", "Proy. de Invest.", "Trabajo y Ciudadanía","Ed. Fisica"];
const year63 = ["Amb. y Soc.", "Biología", "Filos. e Histor.", "Física", "Inglés", "Literatura", "Matemática", "Química", "Trabajo y Ciudadanía", "Ed. Fisica"];

const year1pages = [6,10,12,10,2,5,5,1,9,8];
const year2pages = [5,2,2,3,3,3,7,4,1,18,9,11];
const year3pages = [3,1,9,3,3,4,1,2,1,11,14];
const year41pages = [0,2,0,3,6,2,4,2,7,0,2];
const year42pages = [3,2,25,3,0,1,2,2,6];
const year43pages = [0,0,25,0,10,1,2,0,9];
const year51pages = [0,2,6,3,13,0,10,1,4,17,2,7];
const year52pages = [0,3,26,0,10,1,1,5,53,8,7];
const year53pages = [4,0,25,2,4,2,10,2,35,7];
const year61pages = [16,1,4,5,1,5,3,5,2];
const year62pages = [0,4,6,0,5,3,6,0,0,2];
const year63pages = [0,4,5,0,5,1,0,6,5,2];



let i;
let page = 0;
let currentOrientation = 0;
let maxPages = 1;
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

function subjectSelected(_subject){
	currentSubject = _subject;
	page = 0;
	setupContainers();
	getMaxPageCount();
	updatePageImage();
}

function setupButtons(subjects){
	i = 0;
	page = 0;
	console.log(currentYear+"°"+currentOrientation+" accesed. Subjects count: "+subjects.length);
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
	getMaxPageCount();
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
	updatePageImage();
}	
	
function updatePageImage(){
	document.getElementById("page-number").innerText = (page+1)+"/"+maxPages;
	document.getElementById("image").src = "years/"+currentYear+currentOrientation+"/"+currentSubject+"/"+(page+1)+".png";
}

function getMaxPageCount(){
	switch (currentYear+String(currentOrientation)){
		case "10":
			maxPages = year1pages[currentSubject-1];
			break;
		case "20":
			maxPages = year2pages[currentSubject-1];
			break;
		case "30":
			maxPages = year3pages[currentSubject-1];
			break;
			
		case "41":
			maxPages = year41pages[currentSubject-1];
			break;
		case "42":
			maxPages = year42pages[currentSubject-1];
			break;
		case "43":
			maxPages = year43pages[currentSubject-1];
			break;
		
		case "51":
			maxPages = year51pages[currentSubject-1];
			break;
		case "52":
			maxPages = year52pages[currentSubject-1];
			break;
		case "53":
			maxPages = year53pages[currentSubject-1];
			break;
		
		case "61":
			maxPages = year61pages[currentSubject-1];
			break;
		case "62":
			maxPages = year62pages[currentSubject-1];
			break;
		case "63":
			maxPages = year63pages[currentSubject-1];
			break;
	}
	console.log(maxPages+" max pages");
}


setupContainers();