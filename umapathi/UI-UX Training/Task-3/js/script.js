const responsiveNav = () => {
  if (document.getElementById('navbar').className == 'menu') {
    document.getElementById('navbar').className = 'responsive_menu'
  } else {
    document.getElementById('navbar').className = 'menu'
  }
}
if (innerWidth >= 993) {
  document.getElementById('icon-link').style.display = 'none'
} else if (innerWidth <= 992) {
  document.getElementById('icon-link').style.display = 'block'
}
