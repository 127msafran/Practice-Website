function clicked() {
    document.title = document.getElementById("textbox").value;
}

function increaseLocally() {
    localStorage.setItem("num", JSON.parse(document.getElementById("localButton").innerText) + 1);
    document.getElementById("localButton").innerText = JSON.parse(document.getElementById("localButton").innerText) + 1;
}

function increaseSession() {
    sessionStorage.setItem("num", document.getElementById("sessionButton").innerText);
    document.getElementById("sessionButton").innerText = JSON.parse(document.getElementById("sessionButton").innerText) + 1;
}

function loading() {
    if (localStorage.getItem("num")) {
        document.getElementById("localButton").innerText = JSON.stringify(JSON.parse(localStorage.getItem("num")));
    }
    if (sessionStorage.getItem("num")) {
        document.getElementById("sessionButton").innerText = JSON.stringify(JSON.parse(sessionStorage.getItem("num")));
    }
}