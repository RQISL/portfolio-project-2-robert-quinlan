// For index.html javascript
function entergame() {
    let enterName = document.getElementById('#username').value;
    let displayname = document.getElementById('#displayName').style.display = 'block';
    displayname.innerHTML = localStorage.getItem("enterName");
}
//console.log(displayname, "show name");