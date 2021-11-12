window.open=setBGC();
function setBGC() {
	var hour = t.getHours();
	switch(hour){
		case 10:document.getElementById("bgc").style.background = "#0000ff";
			break;
		case 11:document.getElementById("bgc").style.background = "#00ff00";
			break;
		case 12:document.getElementById("bgc").style.background = "#800000";
			break;
		case 13:document.getElementById("bgc").style.background = "#00ffff";
			break;
		case 14:document.getElementById("bgc").style.background = "#000080";
			break;
		case 15:document.getElementById("bgc").style.background = "#008000";
			break;
		case 16:document.getElementById("bgc").style.background = "#800000";
			break;
		case 17:document.getElementById("bgc").style.background = "#00ffff";
			break;
		case 18:document.getElementById("bgc").style.background = "#ffff00";
			break;
		default :document.getElementById("bgc").style.background = "#888888";
	}
}