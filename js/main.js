function getAge(stringDob) {
    var dob = new Date(stringDob);
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getFullYear();
    var age = Math.abs(year-1970);
    return age;
}

function spook() {
    mainBox = document.getElementById("main-box");
    mainBox.style.transform = "translate(-75%,-50%)";
    mainBox.style.opacity = 0;

    skeleton = document.getElementById("skeleton");
    skeleton.style.transform = "translate(-50%,-50%)";
    skeleton.style.opacity = 1;
    skeleton.style.zIndex = 1;
}

function unspook() {
    mainBox = document.getElementById("main-box");
    mainBox.style.transform = "translate(-50%,-50%)";
    mainBox.style.opacity = 1;

    skeleton = document.getElementById("skeleton");
    skeleton.style.transform = "translate(-25%,-50%)";
    skeleton.style.opacity = 0;
    skeleton.style.zIndex = -1;
}

// change the age span to whatever it should be
window.addEventListener("load", () => document.getElementById("age").textContent = getAge("02/21/2000"));