  function initUIEnhancements() {
    // Blokada wielokrotnego uruchamiania
    if (window.__uiEnhancementsInitialized) return;
    window.__uiEnhancementsInitialized = true;

    // Marquee
    function Marquee(selector, speed) {
      const parent = document.querySelector(selector);
      if (!parent) return;
      const content = parent.children[0];
      if (!content) return;

      // Zapobiegaj wielokrotnemu klonowaniu
      if (parent.dataset.marqueeInitialized) return;
      parent.dataset.marqueeInitialized = "true";

      const clone1 = content.cloneNode(true);
      const clone2 = content.cloneNode(true);
      parent.appendChild(clone1);
      parent.appendChild(clone2);

      let i = 0;
      const fullWidth = content.offsetWidth * 3;

      function animate() {
        i += speed;
        if (i >= fullWidth / 3) {
          i = 0;
        }
        parent.scrollLeft = i;
        requestAnimationFrame(animate);
      }

      animate();
    }

    Marquee('.marquee', 0.2);

    // OwlCarousel (jQuery)
    if (window.$ && typeof $.fn.owlCarousel === 'function') {
      $(".custom-main-slider").not('.owl-loaded').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 600
      });
    }

    // Side menu
    document.querySelectorAll('.side-menu-categories__list-item').forEach(li => {
      const submenu = li.querySelector('ul');
      if (submenu && submenu.querySelector('li')) {
        li.classList.add('has-submenu');
      }
    });

    document.querySelectorAll('.side-menu-categories__list-level-1 > .side-menu-categories__list-item.has-submenu > a').forEach(link => {
      if (!link.dataset.clickBound) {
        link.dataset.clickBound = "true";
        link.addEventListener('click', function (e) {
          const parentLi = this.parentElement;
          const submenu = parentLi.querySelector('.side-menu-categories__list-level-2');
          if (submenu && submenu.querySelector('li')) {
            e.preventDefault();
            parentLi.classList.toggle('open');
          }
        });
      }
    });

    document.querySelectorAll('.side-menu-categories__list-level-2 > .side-menu-categories__list-item.has-submenu > a').forEach(link => {
      if (!link.dataset.clickBound) {
        link.dataset.clickBound = "true";
        link.addEventListener('click', function (e) {
          const parentLi = this.parentElement;
          const submenu = parentLi.querySelector('.side-menu-categories__list-level-3');
          if (submenu && submenu.querySelector('li')) {
            e.preventDefault();
            parentLi.classList.toggle('open');
          }
        });
      }
    });
  }

  // MutationObserver do śledzenia zmian DOM
  const observer = new MutationObserver(() => {
    // Odpal skrypty po każdej zmianie DOM
    window.__uiEnhancementsInitialized = false;
    initUIEnhancements();
  });

  // Obserwuj <html> lub <body>
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });

  // Pierwsze uruchomienie
  document.addEventListener('DOMContentLoaded', () => {
    initUIEnhancements();
  });

