let cool = document.getElementById('cool');
let github = document.getElementById('github');
let linkedin = document.getElementById('linkedin');
let img = document.getElementById('img');

function deleteImgTag() {
  return (img.innerHTML = ``);
}

function animationFunction() {
  return (document.getElementById('cool').style.animation =
    'mynewmove 1s 1000');
}

github.addEventListener('mouseover', function() {
  return (img.innerHTML = `<img src="img/github-logo.png" alt="github">`);
});

github.addEventListener('mouseout', deleteImgTag);

linkedin.addEventListener('mouseover', function() {
  return (img.innerHTML = `<img src="img/linkedin-logo.png" alt="linkedin">`);
});

linkedin.addEventListener('mouseout', deleteImgTag);
