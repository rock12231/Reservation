var div1 = document.getElementById("signin");
var div2 = document.getElementById("signup");
var div3 = document.getElementById("search");
var div4 = document.getElementById("list");
var div5 = document.getElementById("booking");
var div6 = document.getElementById("pay");
var div7 = document.getElementById("ticket");
div1.style.display = "block";

function showSignIn() {    
    if (div1.style.display === "block") {
        div1.style.display = "none";
        div3.style.display = "block";
        var id = document.getElementById("inemail").value;
        var pass = document.getElementById("inpassword").value;
        document.getElementById("profile").innerHTML = id;
    }   

}

function showSignUp() {
    if (div3.style.display === "block") {
        div3.style.display = "none";
        div4.style.display = "block";
    }

}

function Search() {
    if (div3.style.display === "block") {
        div3.style.display = "none";
        div4.style.display = "block";
    }

}

function book() {
    if (div4.style.display === "block") {
        div4.style.display = "none";
        div5.style.display = "block";
    }   
   
}

function bookNow() {
    if (div5.style.display === "block") {
        div5.style.display = "none";
        div6.style.display = "block";
    }

}

function pay() {
    if (div6.style.display === "block") {
        div6.style.display = "none";
        div7.style.display = "block";
    }

}


function print() {
    if (div6.style.display === "block") {
        div6.style.display = "none";
        div7.style.display = "block";
    }

}


// var city = document.getElementById("city").value;
// console.log(city);
// document.getElementById("printcity").innerHTML = city;