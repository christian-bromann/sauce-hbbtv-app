/*
 * Institut für Rundfunktechnik (IRT | www.irt.de) Germany, 2014
 * Demo of simple HbbTV Application realised within the EU founded TV-Ring project.
 * contact: contact@hbbtv-developer.com
 */
var app_area;
var indicator;

function initApp() { 
    app_area = document.getElementById("app_area");
    indicator = document.getElementById("indicator");

    app_area.style.visibility = "visible";
    
    var application_manager = document.getElementById("appMan");
    var Application = application_manager.getOwnerApplication(document)
    Application.show();
    
    document.addEventListener("keydown", function (e) {
        console.log('KeyEvent:', e.keyCode);
		if(handleKeyCode(e.keyCode)) e.preventDefault();
	}, false);
}

function handleKeyCode(kc) {
    switch (kc) {
        case VK_RED:
            showApp();
            return true;
            break;
        default:
            return false;
    }
}

function showApp() {
    indicator.style.visibility = "hidden";
    app_area.style.visibility = "visible";
}