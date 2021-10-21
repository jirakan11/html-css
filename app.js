function open_modal() {
    $("#modal").css("display","flex")
}
function close_modal() {
    $("#modal").css("display","none") 
}

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-nav-toggle');
let navbtn = document.getElementById('js-nav-btn');
navBarToggle.addEventListener("click", function() {
    mainNav.classList.toggle('active');
    navbtn.classList.toggle('active');
});

