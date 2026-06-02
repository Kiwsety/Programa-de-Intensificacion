const year1 = ["Matematica","Lengua","C. Naturales","C. Sociales","Ciudadania","Artistica","Ed. Fisica"]
const year2 = ["Matematica","Lengua","Fisicoquimica","Biologia","Geografia","Historia","Ciudadania","Artistica","Ed. Fisica"]

let i

function yearSelected(year) {
	switch (year) {
		case 1:
			setupButtons(year1);
			break;
		
		case 2:
			setupButtons(year2)
			break;
	}
}


function setupButtons(subjects){
	i = 0
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
}