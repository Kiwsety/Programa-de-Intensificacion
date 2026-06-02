const year1 = ["Matematica","Lengua","C. Naturales","C. Sociales","Ciudadania","Artistica","Ed. Fisica"];
const year2 = ["Matematica","Lengua","Fisicoquimica","Biologia","Geografia","Historia","Ciudadania","Artistica","Ed. Fisica"];
const year3 = ["Matematica","Lengua","Fisicoquimica","Biologia","Geografia","Historia","Ciudadania","Artistica","Ed. Fisica"]
const year4 = ["Matematica","Lengua","Fisicoquimica","Biologia","Geografia","Historia"]
const year5 = ["Matematica","Lengua"]
const year6 = ["Matematica","Lengua","Fisicoquimica"]



let i;
let page = 0;
let maxPages = 3;

function yearSelected(year) {
	switch (year) {
		case 1:
			setupButtons(year1);
			break;
		case 2:
			setupButtons(year2)
			break;
		case 3:
			setupButtons(year3);
			break;
		case 4:
			setupButtons(year4)
			break;
		case 5:
			setupButtons(year5);
			break;
		case 6:
			setupButtons(year6)
			break;
	}
}


function setupButtons(subjects){
	i = 0;
	page = 0;
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
