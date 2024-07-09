"use strict"
// ------light and dark-mdoe-------
function dark() {
    var dark = document.body;
    dark.classList.toggle('dark-mode')
}

//-------------- sidebar__toggle-----------------
function showside() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}
function close_sidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'none'
}