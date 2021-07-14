let eventkey = document.getElementById("eventkey");
let eventcode = document.getElementById("eventcode");
let eventwhich = document.getElementById("eventwhich");
let key = document.getElementById("bigkey");
const splash = document.getElementById("splashtext");
const events = document.getElementById("eventpage");

document.addEventListener("keydown", (e) => {
    splash.style.display = "none";
    events.style.display = "flex";
    eventkey.textContent = e.key;
    eventcode.textContent = e.code;
    eventwhich.textContent = e.which;
    key.textContent = e.which;
})