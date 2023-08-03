const menuIcon = document.getElementById("menuIcon");
const menuModal = document.getElementById("menuModal");

menuIcon.addEventListener("click", createModal);

function createModal() {
  menuModal.innerHTML = "";
  const modalContent = document.createElement("div");
  modalContent.className = "menu__content";
  modalContent.innerHTML = `
  <img src="./assets/images/icon-menu-close.svg" alt="menu-icon" class="menu__content__cross-icon">
  <a href="#" class="menu__content__link">Home</a>
  <a href="#" class="menu__content__link">New</a>
  <a href="#" class="menu__content__link">Popular</a>
  <a href="#" class="menu__content__link">Trending</a>
  <a href="#" class="menu__content__link">Categories</a>
  `;
  menuModal.append(modalContent);
  menuModal.classList.add("enable");

  const cerrarMenu = document.querySelector(".menu__content__cross-icon");
  cerrarMenu.addEventListener("click", () => {
    menuModal.classList.remove("enable");
    modalContent.style.display = "none";
  });
}
