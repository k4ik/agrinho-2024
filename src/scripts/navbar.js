document.getElementById('nav-button').addEventListener('click', function() {
  document.getElementById('nav-list').classList.toggle('show');
});

document.querySelectorAll('.header-link').forEach(function(link) {
  link.addEventListener('click', function() {
      document.getElementById('nav-list').classList.remove('show');
  });
});

window.addEventListener('click', function(event) {
  if (!event.target.closest('.header') && document.getElementById('nav-list').classList.contains('show')) {
      document.getElementById('nav-list').classList.remove('show');
  }
});