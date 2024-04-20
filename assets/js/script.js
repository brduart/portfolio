const menu = document.querySelector(".menu-opener");

menu.addEventListener("click", () => {
  const openmenu = document.querySelector(".menu-hamburguer");
  openmenu.classList.toggle("open");
});
