
// Ferme le menu burger au clic sur un lien ou ailleurs sur la page
document.addEventListener('DOMContentLoaded', function() {
  var menuToggle = document.getElementById('menu-toggle');
  var menuList = document.querySelector('.menu-list');

  // Ferme le menu au clic sur un lien du menu
  menuList.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      menuToggle.checked = false;
    });
  });

  // Ferme le menu au clic ailleurs sur la page
  document.addEventListener('click', function(e) {
    if (menuToggle.checked) {
      var isMenu = e.target.closest('.burger-menu');
      if (!isMenu) {
        menuToggle.checked = false;
      }
    }
  });
});
