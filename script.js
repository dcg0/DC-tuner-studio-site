const backgrounds = document.querySelectorAll('.background');
let activeBackground = 0;

setInterval(() => {
  backgrounds[activeBackground].classList.remove('is-active');
  activeBackground = (activeBackground + 1) % backgrounds.length;
  backgrounds[activeBackground].classList.add('is-active');
}, 9000);

document.querySelectorAll('a[download]').forEach((link) => {
  link.addEventListener('click', () => {
    link.classList.add('download-started');
    window.setTimeout(() => link.classList.remove('download-started'), 800);
  });
});
