/**
 * Elementos interactivos — homepage (tabs, carrossel, marquee, copiar URL)
 * Acessível: teclado, ARIA, respeita prefers-reduced-motion no autoplay
 */
(function () {
  'use strict';

  function lang() {
    return document.documentElement.lang === 'en' ? 'en' : 'pt';
  }

  var MSG = {
    pt: {
      marqueePause: 'Pausar animação dos logótipos',
      marqueePlay: 'Retomar animação dos logótipos',
      copyUrl: 'Copiar link desta página',
      copied: 'Link copiado',
      copyFail: 'Não foi possível copiar',
      tsPrev: 'Testemunho anterior',
      tsNext: 'Testemunho seguinte',
      tsDot: 'Ir para o testemunho',
      tsLive: 'Testemunho {n} de {t}'
    },
    en: {
      marqueePause: 'Pause partner logos animation',
      marqueePlay: 'Resume partner logos animation',
      copyUrl: 'Copy page link',
      copied: 'Link copied',
      copyFail: 'Could not copy',
      tsPrev: 'Previous testimonial',
      tsNext: 'Next testimonial',
      tsDot: 'Go to testimonial',
      tsLive: 'Testimonial {n} of {t}'
    }
  };

  function t(key, vars) {
    var L = MSG[lang()] || MSG.pt;
    var s = L[key] || MSG.pt[key] || key;
    if (vars) {
      Object.keys(vars).forEach(function (k) {
        s = s.replace('{' + k + '}', vars[k]);
      });
    }
    return s;
  }

  /* ----- Pathfinder (tabs) ----- */
  function initPathfinder() {
    var tablist = document.getElementById('oPathfinderTablist');
    if (!tablist) return;
    var tabs = tablist.querySelectorAll('[role="tab"]');
    var panels = document.querySelectorAll('#oPathfinderPanels [role="tabpanel"]');
    if (!tabs.length || !panels.length) return;

    function activate(index) {
      tabs.forEach(function (tab, i) {
        var on = i === index;
        tab.setAttribute('aria-selected', on ? 'true' : 'false');
        tab.tabIndex = on ? 0 : -1;
        tab.classList.toggle('is-active', on);
      });
      panels.forEach(function (panel, i) {
        var on = i === index;
        panel.classList.toggle('is-active', on);
        if (on) panel.removeAttribute('hidden');
        else panel.setAttribute('hidden', '');
      });
    }

    var current = 0;
    tablist.setAttribute('aria-label', lang() === 'en' ? 'Visitor type or need' : 'Tipo de visitante ou necessidade');

    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () {
        current = i;
        activate(i);
      });
      tab.addEventListener('keydown', function (e) {
        var next = current;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          next = (current + 1) % tabs.length;
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          next = (current - 1 + tabs.length) % tabs.length;
        } else if (e.key === 'Home') {
          e.preventDefault();
          next = 0;
        } else if (e.key === 'End') {
          e.preventDefault();
          next = tabs.length - 1;
        } else {
          return;
        }
        current = next;
        activate(next);
        tabs[next].focus();
      });
    });
    activate(0);
  }

  /* ----- Testemunhos — carrossel ----- */
  function initTestimonialSlider() {
    var root = document.getElementById('oTestimonialsSlider');
    if (!root) return;
    var track = document.getElementById('oTestimonialsTrack');
    var prev = document.getElementById('oTsPrev');
    var next = document.getElementById('oTsNext');
    var dots = document.getElementById('oTsDots');
    var live = document.getElementById('oTsLive');
    if (!track || !prev || !next) return;

    var slides = track.querySelectorAll('.o-testimonial-slide');
    var n = slides.length;
    if (n < 1) return;

    var i = 0;
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var autoplayTimer = null;
    var AUTOPLAY_MS = 7000;

    function updateAria() {
      prev.disabled = n <= 1;
      next.disabled = n <= 1;
      if (live) {
        live.textContent = t('tsLive', { n: String(i + 1), t: String(n) });
      }
      if (dots) {
        dots.querySelectorAll('button').forEach(function (btn, j) {
          var sel = j === i;
          btn.setAttribute('aria-selected', sel ? 'true' : 'false');
          btn.tabIndex = sel ? 0 : -1;
        });
      }
    }

    function applyTransform() {
      /* % relativo à largura do track: cada slide ocupa 100/n % do track */
      track.style.transform = 'translateX(-' + ((100 / n) * i) + '%)';
    }

    function go(delta) {
      i = (i + delta + n) % n;
      applyTransform();
      updateAria();
    }

    function goTo(index) {
      i = Math.max(0, Math.min(n - 1, index));
      applyTransform();
      updateAria();
    }

    function startAutoplay() {
      stopAutoplay();
      if (reducedMotion || n <= 1) return;
      autoplayTimer = window.setInterval(function () {
        go(1);
      }, AUTOPLAY_MS);
    }

    function stopAutoplay() {
      if (autoplayTimer) {
        window.clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    }

    prev.addEventListener('click', function () {
      stopAutoplay();
      go(-1);
      startAutoplay();
    });
    next.addEventListener('click', function () {
      stopAutoplay();
      go(1);
      startAutoplay();
    });

    if (dots) {
      dots.querySelectorAll('button').forEach(function (btn, j) {
        btn.addEventListener('click', function () {
          stopAutoplay();
          goTo(j);
          startAutoplay();
        });
      });
    }

    root.addEventListener('mouseenter', stopAutoplay);
    root.addEventListener('mouseleave', startAutoplay);
    root.addEventListener('focusin', stopAutoplay);
    root.addEventListener('focusout', function (e) {
      if (!root.contains(e.relatedTarget)) startAutoplay();
    });

    prev.setAttribute('aria-label', t('tsPrev'));
    next.setAttribute('aria-label', t('tsNext'));
    if (dots) {
      dots.querySelectorAll('button').forEach(function (btn, j) {
        btn.setAttribute('aria-label', t('tsDot') + ' ' + (j + 1));
      });
    }

    goTo(0);
    startAutoplay();

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stopAutoplay();
      else startAutoplay();
    });
  }

  /* ----- Copiar URL ----- */
  function initCopyUrl() {
    var btn = document.getElementById('oCopyPageUrl');
    if (!btn) return;
    btn.setAttribute('aria-label', t('copyUrl'));
    btn.addEventListener('click', function () {
      var url = window.location.href.split('#')[0];
      function ok() {
        btn.classList.add('is-done');
        btn.textContent = t('copied');
        window.setTimeout(function () {
          btn.classList.remove('is-done');
          btn.textContent = lang() === 'en' ? 'Copy link' : 'Copiar link';
        }, 2000);
      }
      function fail() {
        btn.textContent = t('copyFail');
        window.setTimeout(function () {
          btn.textContent = lang() === 'en' ? 'Copy link' : 'Copiar link';
        }, 2000);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(ok).catch(fail);
      } else {
        var ta = document.createElement('textarea');
        ta.value = url;
        ta.setAttribute('aria-hidden', 'true');
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand('copy');
          ok();
        } catch (e) {
          fail();
        }
        document.body.removeChild(ta);
      }
    });
  }

  function run() {
    initPathfinder();
    initTestimonialSlider();
    initCopyUrl();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
