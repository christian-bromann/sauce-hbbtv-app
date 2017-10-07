/*
 * Institut für Rundfunktechnik (IRT | www.irt.de) Germany, 2014
 * Demo of simple HbbTV Application realised within the EU founded TV-Ring project.
 * contact: contact@hbbtv-developer.com
 */
var app_area;
var indicator;
var openedPage = 0
var appShown = false

function initApp() {
    console.log('Initialize Application');
    app_area = document.getElementById("app_area");
    indicator = document.getElementById("indicator");

    indicator.style.visibility = "visible";
    
    var application_manager = document.getElementById("appMan");
    var Application = application_manager.getOwnerApplication(document)
    Application.show();
    console.log('Application shown');

    var myKeyset = Application.privateData.keyset;
    myKeyset.setValue(0x11);

    document.addEventListener("keydown", keyEventHandler, false);
    setTimeout(hideIndicator, 5000);
}

function keyEventHandler (e) {
    console.log('KeyEvent:', e.keyCode);
    if(handleKeyCode(e.keyCode)) e.preventDefault();
}

function navigate (dir) {
    if (!appShown) {
        return;
    }

    var pages = document.querySelectorAll('.page');
    var current = document.querySelector('.page.opened');
    var nav = document.querySelectorAll('#nav li')
    var currentNav = document.querySelector('#nav li.selected');
    
    if (dir === 'down') {
        openedPage += 1;
    } else {
        openedPage -= 1;
        
        if (openedPage < 0) {
            openedPage = pages.length - 1;
        }
    }

    openedPage = openedPage % pages.length
    current.className = current.className.replace('opened', '');
    currentNav.className = currentNav.className.replace('selected', '');
    pages[openedPage].className += ' opened'
    nav[openedPage].className += ' selected'
}

function handleKeyCode(kc) {
    switch (kc) {
        case VK_RED:
            showApp();
            return true;
            break;
        case VK_DOWN:
            navigate('down');
            return true;
            break;
        case VK_UP:
            navigate('up');
            return true;
            break;
        default:
            return false;
    }
}

function hideIndicator() {
    indicator.style.visibility = "hidden";
}

function showApp() {
    if (!appShown) {
        hideIndicator();
        app_area.style.visibility = "visible";
    } else {
        indicator.style.visibility = "visible";
        app_area.style.visibility = "hidden";
        openedPage = 1;
        navigate('up');
        setTimeout(hideIndicator, 5000);
    }

    appShown = !appShown;
}