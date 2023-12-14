
document.querySelectorAll('.js-home-button')
  .forEach((button) => {
    button.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });

  document.querySelectorAll('.js-elisa-button')
  .forEach((button) => {
    button.addEventListener('click', () => {
      window.location.href = "elisaFlores.html";
    });
  });