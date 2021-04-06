var sections = ['home', 'information', 'admin', 'comment'];

function show_section(section) {
    sections.forEach(element => {
        var opt = document.getElementById(element);
        opt.style.display = opt.id == section ? 'block' : 'none';
    });
}