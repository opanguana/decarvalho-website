/**
 * Frontend Enhancements — Vanilla JavaScript
 * Scroll suave e extras. Contadores animados: ver setupCountUp em script.js
 * (evita dois IntersectionObservers no mesmo elemento = +0 / valores trocados).
 */
(function () {
  'use strict';

  /** Scroll suave para âncoras (fallback se não houver nativo) */
  function initSmoothScroll() {
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      var href = a.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        a.addEventListener('click', function (e) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSmoothScroll);
  } else {
    initSmoothScroll();
  }
})();
