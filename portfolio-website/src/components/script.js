
export const toggleMenu = () => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
  
    if (menu && icon) {  // Ensure elements exist before toggling
      menu.classList.toggle("open");
      icon.classList.toggle("open");
    }
  };
