document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('[data-include]').forEach(function(el) {
    const file = '/Publishing/_includes/' + el.dataset.include + '.html';
    fetch(file)
      .then(res => res.text())
      .then(html => el.innerHTML = html);
  });
});