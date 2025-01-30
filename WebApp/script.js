function scrollToAbout() {
    document.getElementById('about').style.display = 'block';
    window.scrollTo({ top: document.getElementById('about').offsetTop, behavior: 'smooth' });
}

function openApp(appName) {
    let password = prompt("Enter the password:");
    if (password === "1234") {  // Change this for real authentication
        window.open(`app.html?name=${appName}`, "_blank");
    } else {
        alert("Incorrect password!");
    }
}
