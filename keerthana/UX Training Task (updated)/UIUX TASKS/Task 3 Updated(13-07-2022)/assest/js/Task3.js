const hamburger = () => {
    if (document.getElementById("nav-menu").className == 'nav-list') {
        document.getElementById("nav-menu").className = 'responsive-menu'

    } else {
        document.getElementById("nav-menu").className = 'nav-list'
    }
}