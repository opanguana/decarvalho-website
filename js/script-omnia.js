(function () {
  'use strict';

  var oHeader = document.querySelector('.o-header');
  var oMenuBtn = document.getElementById('oMenuBtn');
  var oNavMobile = document.getElementById('oNavMobile');
  var oNavMobileSolutionsTrigger = document.getElementById('oNavMobileSolutionsTrigger');
  var oNavMobileSolutions = document.getElementById('oNavMobileSolutions');

  var oFloatCta = document.getElementById('oFloatCta');
  var oNavCta = document.querySelector('.o-nav-cta');
  var SCROLL_HIDE_NAV_CTA = 250;

  function onScroll() {
    if (oHeader && window.scrollY > 30) {
      oHeader.classList.add('scrolled');
    } else if (oHeader) {
      oHeader.classList.remove('scrolled');
    }
    if (window.scrollY > SCROLL_HIDE_NAV_CTA) {
      oHeader && oHeader.classList.add('nav-cta-hidden');
      if (oFloatCta) {
        oFloatCta.classList.add('is-visible');
        oFloatCta.removeAttribute('aria-hidden');
        oFloatCta.removeAttribute('inert');
      }
    } else {
      oHeader && oHeader.classList.remove('nav-cta-hidden');
      if (oFloatCta) {
        oFloatCta.classList.remove('is-visible');
        oFloatCta.setAttribute('aria-hidden', 'true');
        oFloatCta.setAttribute('inert', '');
      }
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Profundidade da homepage: --dc-scroll 0–1 para CSS (auréola do hero, etc.) */
  function updateDcScroll() {
    if (!document.body.classList.contains('layout-home')) return;
    var h = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    var p = window.scrollY / h;
    document.body.style.setProperty('--dc-scroll', p.toFixed(4));
  }
  window.addEventListener('scroll', updateDcScroll, { passive: true });
  window.addEventListener('resize', updateDcScroll);
  updateDcScroll();

  if (oMenuBtn && oNavMobile) {
    function openMobileMenu() {
      oMenuBtn.setAttribute('aria-expanded', 'true');
      oNavMobile.hidden = false;
      document.body.style.overflow = 'hidden';
      if (oNavMobileSolutionsTrigger && oNavMobileSolutions) {
        oNavMobileSolutionsTrigger.setAttribute('aria-expanded', 'false');
        oNavMobileSolutions.hidden = true;
      }
      var firstLink = oNavMobile.querySelector('a');
      if (firstLink) firstLink.focus();
    }
    function closeMobileMenu() {
      oMenuBtn.setAttribute('aria-expanded', 'false');
      oNavMobile.hidden = true;
      document.body.style.overflow = '';
      oMenuBtn.focus();
    }
    oMenuBtn.addEventListener('click', function () {
      var isOpen = oMenuBtn.getAttribute('aria-expanded') === 'true';
      if (isOpen) closeMobileMenu();
      else openMobileMenu();
    });
    oNavMobile.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeMobileMenu();
      }
    });
    oNavMobile.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMobileMenu);
    });
    if (oNavMobileSolutionsTrigger && oNavMobileSolutions) {
      oNavMobileSolutionsTrigger.addEventListener('click', function () {
        var isOpen = oNavMobileSolutionsTrigger.getAttribute('aria-expanded') === 'true';
        oNavMobileSolutionsTrigger.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
        oNavMobileSolutions.hidden = isOpen;
      });
    }
  }

  var oNavDrop = document.getElementById('oNavDrop');
  var oNavTrigger = oNavDrop ? oNavDrop.querySelector('.o-nav-trigger') : null;
  var oDropSolucoes = document.getElementById('oDropSolucoes');
  if (oNavDrop && oNavTrigger) {
    function closeDropdown() {
      oNavDrop.classList.remove('open');
      oNavTrigger.setAttribute('aria-expanded', 'false');
      oNavTrigger.focus();
    }
    oNavTrigger.addEventListener('click', function (e) {
      e.preventDefault();
      var willOpen = !oNavDrop.classList.contains('open');
      oNavDrop.classList.toggle('open');
      oNavTrigger.setAttribute('aria-expanded', willOpen);
    });
    oNavTrigger.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && oNavDrop.classList.contains('open')) {
        closeDropdown();
      }
    });
    if (oDropSolucoes) {
      oDropSolucoes.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('keydown', function (e) {
          if (e.key === 'Escape') closeDropdown();
        });
      });
    }
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.o-nav-drop')) {
        oNavDrop.classList.remove('open');
        oNavTrigger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* Urgency bar — fechar e ajustar layout */
  var oUrgencyClose = document.getElementById('oUrgencyClose');
  var oUrgencyBar = document.getElementById('oUrgencyBar');
  function toggleUrgencyClass() {
    var visible = oUrgencyBar && oUrgencyBar.style.display !== 'none';
    document.body.classList.toggle('has-urgency-bar', !!visible);
  }
  if (oUrgencyClose && oUrgencyBar) {
    oUrgencyClose.addEventListener('click', function () {
      oUrgencyBar.style.display = 'none';
      toggleUrgencyClass();
      try { localStorage.setItem('oUrgencyDismissed', '1'); } catch (e) {}
    });
    if (localStorage.getItem('oUrgencyDismissed') === '1') oUrgencyBar.style.display = 'none';
    toggleUrgencyClass();
  }

  /* Exit-intent popup — fecha ao clicar no botão ou no backdrop */
  var oExitPopup = document.getElementById('oExitPopup');
  var oExitPopupClose = document.getElementById('oExitPopupClose');
  var oExitPopupBackdrop = oExitPopup ? oExitPopup.querySelector('.o-exit-popup-backdrop') : null;
  if (oExitPopup) {
    var exitShown = false;
    function showExitPopup() {
      if (exitShown) return;
      try { if (localStorage.getItem('oExitShown') === '1') return; } catch (e) {}
      exitShown = true;
      oExitPopup.setAttribute('aria-hidden', 'false');
      oExitPopup.classList.add('is-visible');
      try { localStorage.setItem('oExitShown', '1'); } catch (e) {}
    }
    function closeExitPopup() {
      oExitPopup.setAttribute('aria-hidden', 'true');
      oExitPopup.classList.remove('is-visible');
    }
    document.addEventListener('mouseout', function (e) {
      if (e.clientY < 10 && !e.relatedTarget) showExitPopup();
    });
    if (oExitPopupClose) oExitPopupClose.addEventListener('click', closeExitPopup);
    if (oExitPopupBackdrop) oExitPopupBackdrop.addEventListener('click', closeExitPopup);
  }

  var revealEls = document.querySelectorAll('.o-reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px 10% 0px', threshold: 0.06 }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* Consultorias — preview em modal (estilo apresentação); dados em consultorias-fichas.js */
  var CONSULTORIAS_FICHAS = window.CONSULTORIAS_FICHAS || [];

  var oPreview = document.getElementById('oConsultoriaPreview');
  var oPreviewBackdrop = oPreview ? oPreview.querySelector('.o-consultoria-preview-backdrop') : null;
  var oPreviewClose = oPreview ? oPreview.querySelector('.o-consultoria-preview-close') : null;
  var oPreviewTitle = document.getElementById('oConsultoriaPreviewTitle');
  var oPreviewPeriodo = document.getElementById('oConsultoriaPreviewPeriodo');
  var oPreviewCliente = document.getElementById('oConsultoriaPreviewCliente');
  var oPreviewProblema = document.getElementById('oConsultoriaPreviewProblema');
  var oPreviewEstrategia = document.getElementById('oConsultoriaPreviewEstrategia');
  var oPreviewEntregaveis = document.getElementById('oConsultoriaPreviewEntregaveis');
  var oPreviewBlockResultado = document.getElementById('oConsultoriaPreviewBlockResultado');
  var oPreviewResultado = document.getElementById('oConsultoriaPreviewResultado');
  var oPreviewHProblema = document.getElementById('oPreviewHProblema');
  var oPreviewHEstrategia = document.getElementById('oPreviewHEstrategia');
  var oPreviewHEntregaveis = document.getElementById('oPreviewHEntregaveis');
  var oPreviewHImpacto = document.getElementById('oPreviewHImpacto');
  var oPreviewDtPeriodo = document.getElementById('oPreviewDtPeriodo');
  var oPreviewDtCliente = document.getElementById('oPreviewDtCliente');

  function consultoriaPreviewLabels() {
    var en = document.documentElement.getAttribute('lang') === 'en';
    return {
      en: en,
      periodo: en ? 'Period' : 'Período',
      cliente: en ? 'Client' : 'Cliente',
      parceiro: en ? 'Institutional partner' : 'Parceiro institucional',
      clienteNota: en
        ? 'Full client name available on request (e.g. when preparing a proposal).'
        : 'Nome completo do cliente disponível sob pedido (ex.: na preparação de proposta).',
      contexto: en ? 'Context' : 'Contexto',
      atividades: en ? 'Activities' : 'Actividades',
      resultados: en ? 'Results' : 'Resultados',
      impacto: en ? 'Impact' : 'Impacto'
    };
  }

  var lastConsultoriaPreviewIndex = null;

  function openConsultoriaPreview(index) {
    var c = CONSULTORIAS_FICHAS[index];
    if (!c || !oPreview) return;
    lastConsultoriaPreviewIndex = index;
    oPreview.setAttribute('aria-hidden', 'false');
    oPreview.classList.add('is-visible');
    document.body.style.overflow = 'hidden';

    var pageLang = document.documentElement.getAttribute('lang') === 'en' ? 'en' : 'pt';
    var loc =
      typeof window.consultoriaLocalized === 'function'
        ? window.consultoriaLocalized(c, pageLang)
        : {
            titulo: c.titulo,
            periodo: c.periodo,
            cliente: c.cliente,
            clienteNomePublico: true,
            clienteNotaSobPedido: false,
            contexto: c.problema,
            atividades: c.estrategia || [],
            resultados: c.entregaveis || []
          };
    if (oPreviewTitle) oPreviewTitle.textContent = loc.titulo;
    if (oPreviewPeriodo) oPreviewPeriodo.textContent = loc.periodo;
    if (oPreviewCliente) {
      oPreviewCliente.innerHTML = '';
      var line = document.createElement('span');
      line.className = 'o-preview-cliente-line';
      line.textContent = loc.cliente;
      oPreviewCliente.appendChild(line);
    }
    if (oPreviewProblema) oPreviewProblema.textContent = loc.contexto || '';
    if (oPreviewEstrategia) {
      oPreviewEstrategia.innerHTML = '';
      (loc.atividades || []).forEach(function (item) {
        var li = document.createElement('li');
        li.textContent = item;
        oPreviewEstrategia.appendChild(li);
      });
    }
    if (oPreviewEntregaveis) {
      oPreviewEntregaveis.innerHTML = '';
      (loc.resultados || []).forEach(function (item) {
        var li = document.createElement('li');
        li.textContent = item;
        oPreviewEntregaveis.appendChild(li);
      });
    }
    var L = consultoriaPreviewLabels();
    if (oPreviewDtPeriodo) oPreviewDtPeriodo.textContent = L.periodo;
    if (oPreviewDtCliente)
      oPreviewDtCliente.textContent = loc.clienteNomePublico ? L.cliente : L.parceiro;
    if (oPreviewCliente && loc.clienteNotaSobPedido) {
      var notaEl = document.createElement('span');
      notaEl.className = 'o-preview-cliente-nota';
      notaEl.textContent = L.clienteNota;
      oPreviewCliente.appendChild(notaEl);
    }
    if (oPreviewHProblema) oPreviewHProblema.textContent = L.contexto;
    if (oPreviewHEstrategia) oPreviewHEstrategia.textContent = L.atividades;
    if (oPreviewHEntregaveis) oPreviewHEntregaveis.textContent = L.resultados;
    if (oPreviewHImpacto) oPreviewHImpacto.textContent = L.impacto;
    if (c.resultado && oPreviewResultado && oPreviewBlockResultado) {
      var rt = L.en ? (c.resultado.en || c.resultado.pt || '') : (c.resultado.pt || c.resultado.en || '');
      oPreviewResultado.textContent = rt;
      oPreviewBlockResultado.hidden = !rt;
    } else if (oPreviewBlockResultado) {
      oPreviewBlockResultado.hidden = true;
    }
  }

  function closeConsultoriaPreview() {
    if (!oPreview) return;
    lastConsultoriaPreviewIndex = null;
    oPreview.setAttribute('aria-hidden', 'true');
    oPreview.classList.remove('is-visible');
    document.body.style.overflow = '';
  }

  window.addEventListener('decarvalho:langchange', function () {
    if (!oPreview || !oPreview.classList.contains('is-visible') || lastConsultoriaPreviewIndex === null) return;
    openConsultoriaPreview(lastConsultoriaPreviewIndex);
  });

  if (oPreview) {
    if (oPreviewBackdrop) oPreviewBackdrop.addEventListener('click', closeConsultoriaPreview);
    if (oPreviewClose) oPreviewClose.addEventListener('click', closeConsultoriaPreview);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && oPreview.classList.contains('is-visible')) closeConsultoriaPreview();
    });
  }

  function renderConsultoriaTiles() {
    var grid = document.getElementById('oConsultoriasGrid');
    if (!grid || !CONSULTORIAS_FICHAS.length) return;
    var en = document.documentElement.getAttribute('lang') === 'en';
    var btnText = en ? 'View details' : 'Ver detalhes';
    var sorted = typeof window.getConsultoriasPublicoDestaque === 'function'
      ? window.getConsultoriasPublicoDestaque(CONSULTORIAS_FICHAS)
      : CONSULTORIAS_FICHAS.map(function (item, index) { return { item: item, index: index }; });
    var top = sorted.slice(0, 4);
    grid.innerHTML = '';
    top.forEach(function (entry) {
      var c = entry.item;
      var loc =
        typeof window.consultoriaLocalized === 'function'
          ? window.consultoriaLocalized(c, en ? 'en' : 'pt')
          : c;
      var article = document.createElement('article');
      article.className = 'o-consultoria-tile';
      article.setAttribute('data-consultoria', String(entry.index));
      var cliente = document.createElement('span');
      cliente.className = 'o-consultorias-destaque-cliente';
      cliente.textContent = loc.cliente || '';
      var title = document.createElement('h3');
      title.className = 'o-consultoria-tile-title';
      title.textContent = loc.titulo || '';
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'o-consultoria-tile-btn';
      btn.setAttribute('aria-label', btnText);
      btn.setAttribute('data-i18n', 'home.consTileBtn');
      btn.textContent = btnText;
      article.appendChild(cliente);
      article.appendChild(title);
      article.appendChild(btn);
      grid.appendChild(article);
    });
  }

  var grid = document.getElementById('oConsultoriasGrid');
  if (grid) {
    renderConsultoriaTiles();
    grid.addEventListener('click', function (e) {
      var tile = e.target.closest('.o-consultoria-tile');
      if (!tile) return;
      var idx = tile.getAttribute('data-consultoria');
      if (idx !== null && idx !== '') openConsultoriaPreview(parseInt(idx, 10));
    });
    window.addEventListener('decarvalho:langchange', function () {
      renderConsultoriaTiles();
    });
  }
})();
