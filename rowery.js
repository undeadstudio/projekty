document.addEventListener('DOMContentLoaded', function () {
    function Marquee(selector, speed) {
      const parent = document.querySelector(selector);
      const content = parent.children[0];

      const clone1 = content.cloneNode(true);
      const clone2 = content.cloneNode(true);
      parent.appendChild(clone1);
      parent.appendChild(clone2);

      let i = 0;
      let fullWidth = content.offsetWidth * 3;

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
  });

  $(document).ready(function(){
    $(".custom-main-slider").owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      nav: false,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 600
    });
  });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.side-menu-categories__list-level-1 > .side-menu-categories__list-item > a').forEach(link => {
      link.addEventListener('click', function(e) {
        const parentLi = this.parentElement;
        const submenu = parentLi.querySelector('.side-menu-categories__list-level-2');
        if (submenu) {
          e.preventDefault();
          parentLi.classList.toggle('open');
        }
      });
    });

    document.querySelectorAll('.side-menu-categories__list-level-2 > .side-menu-categories__list-item > a').forEach(link => {
      link.addEventListener('click', function(e) {
        const parentLi = this.parentElement;
        const submenu = parentLi.querySelector('.side-menu-categories__list-level-3');
        if (submenu) {
          e.preventDefault();
          parentLi.classList.toggle('open');
        }
      });
    });
  });
