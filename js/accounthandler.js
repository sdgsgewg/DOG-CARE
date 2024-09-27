function toggleLoginElements() {
    let hideElements = document.getElementsByClassName("hide-loggedin");
    let showElements = document.getElementsByClassName("show-loggedin");

    if (localStorage.isLoggedIn == "true") {
        for (let i = 0; i < hideElements.length; i++) {
            hideElements[i].style.display = "none";
        }
        for (let i = 0; i < showElements.length; i++) {
            showElements[i].style.display = "";
        }
    } else {
        for (let i = 0; i < hideElements.length; i++) {
            hideElements[i].style.display = "";
        }
        for (let i = 0; i < showElements.length; i++) {
            showElements[i].style.display = "none";
        }
    }
}

toggleLoginElements();

function loginUser() {
    localStorage.isLoggedIn = "true";
}

function logoutUser() {
    localStorage.isLoggedIn = "false";
}

function chatConsultant(index) {
    if (localStorage.isLoggedIn == "true") {
        window.location.href = `consultant.html?${index}`;
    }
    else {
        window.location.href = "login.html";
    }
}