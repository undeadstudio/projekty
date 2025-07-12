  
function initUIEnhancements() {
  if (window.__uiEnhancementsInitialized) return;
  window.__uiEnhancementsInitialized = true;

  function Marquee(selector, speed) {
    const parent = document.querySelector(selector);
    if (!parent) return;
    const content = parent.children[0];
    if (!content) return;
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
      if (i >= fullWidth / 3) i = 0;
      parent.scrollLeft = i;
      requestAnimationFrame(animate);
    }
    animate();
  }

  Marquee('.marquee', 0.2);

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

  function initFAQToggle() {
    const questions = document.querySelectorAll('.faq-question');
    const answers = document.querySelectorAll('.faq-answer');
    if (!questions.length || !answers.length) return;
    questions.forEach(button => {
      button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const isOpen = answer && answer.style.display === 'block';
        answers.forEach(a => {
          if (a) a.style.display = 'none';
        });
        if (!isOpen && answer) {
          answer.style.display = 'block';
        }
      });
    });
  }

  initFAQToggle();

    const socialLinks = [
    {
      href: "https://www.facebook.com/share/1Buv42aGZz/?mibextid=wwXIfr",
      svg: `<svg class="e-font-icon-svg e-fab-facebook" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>`
    },
    {
      href: "https://www.instagram.com/stockify24.pl",
      svg: `<svg class="e-font-icon-svg e-fab-instagram" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8z"/></svg>`
    },
    {
      href: "https://youtube.com/@stockifyhurt",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M12.932 20.459v-8.917l7.839 4.459zM30.368 8.735c-0.354-1.301-1.354-2.307-2.625-2.663l-0.027-0.006c-3.193-0.406-6.886-0.638-10.634-0.638-0.381 0-0.761 0.002-1.14 0.007l0.058-0.001c-0.322-0.004-0.701-0.007-1.082-0.007-3.748 0-7.443 0.232-11.070 0.681l0.434-0.044c-1.297 0.363-2.297 1.368-2.644 2.643l-0.006 0.026c-0.4 2.109-0.628 4.536-0.628 7.016 0 0.088 0 0.176 0.001 0.263l-0-0.014c-0 0.074-0.001 0.162-0.001 0.25 0 2.48 0.229 4.906 0.666 7.259l-0.038-0.244c0.354 1.301 1.354 2.307 2.625 2.663l0.027 0.006c3.193 0.406 6.886 0.638 10.634 0.638 0.38 0 0.76-0.002 1.14-0.007l-0.058 0.001c0.322 0.004 0.702 0.007 1.082 0.007 3.749 0 7.443-0.232 11.070-0.681l-0.434 0.044c1.298-0.362 2.298-1.368 2.646-2.643l0.006-0.026c0.399-2.109 0.627-4.536 0.627-7.015 0-0.088-0-0.176-0.001-0.263l0 0.013c0-0.074 0.001-0.162 0.001-0.25 0-2.48-0.229-4.906-0.666-7.259l0.038 0.244z"/></svg>`
    },
    {
      href: "https://www.tiktok.com/@stockify_hurt",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`
    },
    {
      href: "https://t.me/stockify24_hurt",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z" fill="#0F0F0F"/></svg>`
    }
  ];

  const container = document.querySelector(".footer-social");
  if (container) {
    socialLinks.forEach(link => {
      const a = document.createElement("a");
      a.href = link.href;
      a.target = "_blank";
      a.rel = "noreferrer";
      a.innerHTML = link.svg;
      container.appendChild(a);
    });
  }
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

const observer = new MutationObserver(() => {
  window.__uiEnhancementsInitialized = false;
  initUIEnhancements();
});

observer.observe(document.documentElement, {
  childList: true,
  subtree: true
});

document.addEventListener('DOMContentLoaded', () => {
  initUIEnhancements();
});
