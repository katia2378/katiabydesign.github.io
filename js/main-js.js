 function navMob() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
  function hamMenu(x) {
    x.classList.toggle("change");
}



