var sections = ['home', 'information', 'admin', 'comment'];
var tabs = ['pag1', 'pag2', 'pag3', 'pag4']

function show_section(section, tab) {
    sections.forEach(element => {
        var opt = document.getElementById(element);
        opt.style.display = opt.id == section ? 'block' : 'none';
    });
    tabs.forEach(element => {
        var opt = document.getElementById(element);
        opt.className = opt.id == tab ? 'nav-link active' : 'nav-link';
    });
    var opt = document.getElementById('list');
    opt.className = "navbar-toggler collapsed";
    opt.setAttribute('aria-expanded', false);
    opt = document.getElementById('navbarsExampleDefault');
    opt.className = 'navbar-collapse collapsing';
    opt.className = 'navbar-collapse collapse';
}

function theme1() {
    var element = document.getElementsByClassName('bg-yellow');
    element[0].style.backgroundColor = 'rgb(0, 0, 0)';
    element = document.getElementsByClassName('bg-wall');
    element[0].style.backgroundColor = 'rgb(243, 247, 44)';
    element = document.getElementsByClassName('bg-gray');
    element[0].style.backgroundColor = 'rgb(255, 255, 255)';
    element = document.getElementsByClassName('navbar-light');
    element[0].classList.replace('navbar-light', 'navbar-dark');
}


function theme2() {
    var element = document.getElementsByClassName('bg-yellow');
    element[0].style.backgroundColor = 'rgb(255, 255, 255)';
    element = document.getElementsByClassName('bg-wall');
    element[0].style.backgroundColor = 'rgb(243, 247, 44)';
    element = document.getElementsByClassName('bg-gray');
    element[0].style.backgroundColor = 'rgb(255, 255, 255)';
    element = document.getElementsByClassName('navbar-dark');
    element[0].classList.replace('navbar-dark', 'navbar-light');
}


function theme3() {
    var element = document.getElementsByClassName('bg-yellow');
    element[0].style.backgroundColor = 'rgb(243, 247, 44)';
    element = document.getElementsByClassName('bg-wall');
    element[0].style.backgroundColor = 'rgb(236, 236, 236)';
    element = document.getElementsByClassName('bg-gray');
    element[0].style.backgroundColor = 'rgb(255, 255, 255)';
    element = document.getElementsByClassName('navbar-dark');
    element[0].classList.replace('navbar-dark', 'navbar-light');
}