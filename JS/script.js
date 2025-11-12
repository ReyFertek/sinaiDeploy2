// Função para rolar suavemente até uma seção
const scrollToSection = id => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // Inicializa o carrossel Swiper
  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 500000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Navbar com sombra ao rolar
  const nav = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("shadow-lg", window.scrollY > 50);
  });

  // Menu mobile
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Fecha o menu mobile ao clicar em um link
  document.querySelectorAll("#mobile-menu a").forEach(link => {
    link.onclick = () => {
      document.getElementById("mobile-menu").classList.add("hidden");
    };
  });
});
