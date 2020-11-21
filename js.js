let react = document.getElementById('react');
let bg = document.getElementById('bg');
let text = document.getElementById('title');

window.addEventListener('scroll', function() {
  var value = window.scrollY;

  react.style.left = value * 1 + 'px';
  bg.style.top = value * 0.4 + 'px';
  text.style.top = value * 1 + 'px';
});

function burger() {
  const x = document.getElementById('myUrls');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}
