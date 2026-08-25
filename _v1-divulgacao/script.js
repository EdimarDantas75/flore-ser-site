/* ============================================================
   Flore-Ser · interações do site de divulgação
   Nav · reveal no scroll · desenho SVG · count-up
   ============================================================ */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Tema claro/escuro ----------
     A restauracao acontece na IIFE do <head>; aqui fica so a alternancia.
     Atributo: data-theme no <html>. Chave: FLORESER_TEMA ("claro"|"escuro"). */
  var raiz = document.documentElement;
  var btnTema = document.getElementById('themeToggle');
  var metaTema = document.querySelector('meta[name="theme-color"]');

  function temaAtual() {
    return raiz.getAttribute('data-theme') === 'dark' ? 'escuro' : 'claro';
  }
  /* Cromo = tudo que apenas REFLETE o tema (barra do navegador e rotulo do
     botao). Fica separado de aplicarTema porque no boot precisamos sincronizar
     o reflexo SEM gravar preferencia: chamar aplicarTema aqui converteria um
     visitante sem preferencia salva em visitante com "claro" gravado e mataria
     o padrao implicito. */
  function pintarCromo() {
    var escuro = temaAtual() === 'escuro';
    if (metaTema) metaTema.setAttribute('content', escuro ? '#171209' : '#38512F');
    if (!btnTema) return;
    var rotulo = escuro ? 'Ativar tema claro' : 'Ativar tema escuro';
    btnTema.setAttribute('aria-pressed', escuro ? 'true' : 'false');
    btnTema.setAttribute('aria-label', rotulo);
    btnTema.setAttribute('title', rotulo);
  }
  function aplicarTema(valor) {
    if (valor === 'escuro') raiz.setAttribute('data-theme', 'dark');
    else raiz.removeAttribute('data-theme');
    try { localStorage.setItem('FLORESER_TEMA', valor); }
    catch (err) { /* armazenamento bloqueado: o tema vale so nesta visita */ }
    pintarCromo();
  }
  pintarCromo();
  if (btnTema) {
    btnTema.addEventListener('click', function () {
      if (!reduceMotion) {
        raiz.classList.add('trocando-tema');
        void raiz.offsetWidth;                       // reflow: a transicao entra
        window.setTimeout(function () { raiz.classList.remove('trocando-tema'); }, 320);
      }
      aplicarTema(temaAtual() === 'escuro' ? 'claro' : 'escuro');
    });
  }

  /* ---------- NAV: encolher ao rolar ---------- */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (window.scrollY > 24) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- NAV: menu mobile ---------- */
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  var veu = document.getElementById('navVeu');
  var relogioVeu = null;

  function openMenu() {
    links.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Fechar menu');
    if (veu) {
      if (relogioVeu) { window.clearTimeout(relogioVeu); relogioVeu = null; }
      veu.hidden = false;
      void veu.offsetWidth;               // reflow forcado: sem ele o fade nao roda
      veu.classList.add('open');
    }
    document.body.style.overflow = 'hidden';
  }
  function closeMenu(devolverFoco) {
    if (!links.classList.contains('open')) return;
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
    if (veu) {
      veu.classList.remove('open');
      relogioVeu = window.setTimeout(function () {
        if (!links.classList.contains('open')) veu.hidden = true;
      }, 260);
    }
    document.body.style.overflow = '';
    if (devolverFoco) toggle.focus();
  }
  toggle.addEventListener('click', function () {
    if (links.classList.contains('open')) closeMenu(false);
    else openMenu();
  });
  if (veu) veu.addEventListener('click', function () { closeMenu(true); });
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') closeMenu(false);
  });
  // teclado completo: Enter ja e nativo no link; o Espaco nao e, e precisa
  // do preventDefault para nao rolar a pagina
  links.addEventListener('keydown', function (e) {
    if (e.target.tagName !== 'A') return;
    if (e.key === ' ' || e.key === 'Spacebar' || e.key === 'Space') {
      e.preventDefault();
      e.target.click();
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu(true);
  });
  // ao voltar para o desktop a gaveta nao pode ficar presa aberta
  window.addEventListener('resize', function () {
    if (window.innerWidth > 960) closeMenu(false);
  });

  /* ---------- Preparar desenho das ilustrações ---------- */
  // define stroke-dasharray/offset conforme o comprimento real de cada traço
  document.querySelectorAll('.draw').forEach(function (path) {
    try {
      var len = Math.ceil(path.getTotalLength());
      path.style.setProperty('--len', len);
    } catch (err) { /* elementos sem getTotalLength */ }
  });

  /* ---------- Reveal no scroll ---------- */
  var revealTargets = document.querySelectorAll('.rv, .rexist-line');
  // cascata: --i e a posicao entre os IRMAOS .rv, nao o :nth-child cru, que
  // contava qualquer irmao e desalinhava o atraso
  Array.prototype.forEach.call(document.querySelectorAll('.rv'), function (el) {
    var pai = el.parentNode;
    if (!pai) return;
    var irmaos = Array.prototype.filter.call(pai.children, function (n) {
      return n.classList && n.classList.contains('rv');
    });
    var i = irmaos.indexOf(el);
    if (i > 0) el.style.setProperty('--i', Math.min(i, 5));
  });
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealTargets.forEach(function (el) { el.classList.add('in'); });
  } else {
    var revealObs = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });
    revealTargets.forEach(function (el) { revealObs.observe(el); });
  }

  /* ---------- Count-up dos números ---------- */
  function formatNumber(n) {
    return Math.round(n).toLocaleString('pt-BR');
  }
  function runCount(el) {
    var target = parseInt(el.getAttribute('data-count'), 10) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
    if (reduceMotion) { el.textContent = formatNumber(target) + suffix; return; }
    var dur = 1500, start = null;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      el.textContent = formatNumber(target * eased) + (p === 1 ? suffix : '');
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var counters = document.querySelectorAll('.count');
  if (!('IntersectionObserver' in window)) {
    counters.forEach(runCount);
  } else {
    var countObs = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          runCount(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { countObs.observe(el); });
  }

  /* ---------- Scrollspy: item de nav ativo ---------- */
  var navAnchors = Array.prototype.slice.call(
    document.querySelectorAll('.nav-links a[href^="#"]:not(.nav-cta)')
  );
  var sectionMap = {};
  navAnchors.forEach(function (a) {
    var id = a.getAttribute('href').slice(1);
    var sec = document.getElementById(id);
    if (sec) sectionMap[id] = a;
  });
  function marcarAtual(alvo) {
    navAnchors.forEach(function (a) {
      a.classList.remove('active');
      a.removeAttribute('aria-current');
    });
    if (alvo) {
      alvo.classList.add('active');
      // "true" e nao "page": a navegacao aponta para SECOES do mesmo
      // documento, nao para outra pagina
      alvo.setAttribute('aria-current', 'true');
    }
  }
  // marcar no ato da ativacao, e nao so quando a rolagem chega la: quem navega
  // pelo teclado precisa do aria-current no momento em que aperta Enter
  navAnchors.forEach(function (a) {
    a.addEventListener('click', function () { marcarAtual(a); });
  });
  if ('IntersectionObserver' in window) {
    var spyObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) marcarAtual(sectionMap[entry.target.id]);
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(sectionMap).forEach(function (id) {
      spyObs.observe(document.getElementById(id));
    });
  }

  /* ---------- Galeria: filtros por tema + ampliação ---------- */
  var grid = document.getElementById('galeriaGrid');
  if (grid) {
    var fotos = Array.prototype.slice.call(grid.querySelectorAll('.foto'));
    var vazio = document.getElementById('galVazio');

    document.querySelectorAll('.gal-chip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        document.querySelectorAll('.gal-chip').forEach(function (c) {
          c.classList.remove('on');
          c.setAttribute('aria-pressed', 'false');
        });
        chip.classList.add('on');
        chip.setAttribute('aria-pressed', 'true');
        var tema = chip.getAttribute('data-tema'), visiveis = 0;
        fotos.forEach(function (f) {
          var ok = tema === 'todos' || f.getAttribute('data-tema') === tema;
          f.style.display = ok ? '' : 'none';
          if (ok) visiveis++;
        });
        if (vazio) vazio.hidden = visiveis > 0;
      });
    });

    var lb = document.getElementById('lightbox'),
        lbImg = document.getElementById('lbImg'),
        lbCap = document.getElementById('lbCap'),
        atual = 0, ultimoFoco = null;

    function visiveisAgora() {
      return fotos.filter(function (f) { return f.style.display !== 'none'; });
    }
    /* o vídeo da galeria é .foto (entra no filtro por tema), mas não tem
       .foto-btn: toca no lugar, então fica fora da roda do lightbox */
    function ampliaveisAgora() {
      return visiveisAgora().filter(function (f) { return f.querySelector('.foto-btn'); });
    }
    /* o lightbox roda sobre uma LISTA ATIVA de itens {src, alt, cap}: a
       galeria monta a sua com as figuras visíveis no filtro, e o destaque
       Última ação monta a dele com todas as fotos do encontro */
    var listaAtiva = [];
    function itemDeFigura(f) {
      var btn = f.querySelector('.foto-btn');
      return { src: btn.getAttribute('data-full'),
               alt: btn.querySelector('img').alt,
               cap: f.querySelector('figcaption').textContent };
    }
    function abrir(i) {
      if (!listaAtiva.length) return;
      atual = (i + listaAtiva.length) % listaAtiva.length;
      var it = listaAtiva[atual];
      lbImg.src = it.src;
      lbImg.alt = it.alt;
      lbCap.textContent = it.cap;
      lb.hidden = false;
      document.body.style.overflow = 'hidden';
      document.getElementById('lbFechar').focus();
    }
    function fechar() {
      lb.hidden = true; lbImg.src = '';
      document.body.style.overflow = '';
      if (ultimoFoco) ultimoFoco.focus();
    }
    fotos.forEach(function (f) {
      var btn = f.querySelector('.foto-btn');
      if (!btn) return;
      btn.addEventListener('click', function () {
        ultimoFoco = this;
        var lista = ampliaveisAgora();
        listaAtiva = lista.map(itemDeFigura);
        abrir(lista.indexOf(f));
      });
    });

    /* destaque Última ação: qualquer imagem abre o carrossel com TODAS as
       fotos do encontro (a página segue mostrando só as quatro escolhidas).
       A lista nasce das figuras clube-jb-* da própria galeria, então as
       legendas nunca divergem. */
    var fotosEncontro = fotos.filter(function (f) {
      var b = f.querySelector('.foto-btn');
      return b && b.getAttribute('data-full').indexOf('clube-jb-') >= 0;
    });
    document.querySelectorAll('.ua-foto-btn').forEach(function (b) {
      b.addEventListener('click', function () {
        if (!fotosEncontro.length) return;
        ultimoFoco = b;
        listaAtiva = fotosEncontro.map(itemDeFigura);
        var i = 0;
        fotosEncontro.forEach(function (f, k) {
          var arq = f.querySelector('.foto-btn').getAttribute('data-full').split('/').pop();
          if (arq === b.getAttribute('data-foto')) i = k;
        });
        abrir(i);
      });
    });
    document.getElementById('lbFechar').addEventListener('click', fechar);
    document.getElementById('lbPrev').addEventListener('click', function () { abrir(atual - 1); });
    document.getElementById('lbNext').addEventListener('click', function () { abrir(atual + 1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) fechar(); });
    document.addEventListener('keydown', function (e) {
      if (lb.hidden) return;
      if (e.key === 'Escape') fechar();
      else if (e.key === 'ArrowLeft') abrir(atual - 1);
      else if (e.key === 'ArrowRight') abrir(atual + 1);
    });
  }
})();


/* ===== mapa dos espaços: referência direta aos dados do painel (data/seed/cidades.json) ===== */
(function(){
  var el=document.getElementById('mapaSite');
  if(!el || typeof L==='undefined') return;
  var ESRI='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
  var VIAS='https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}';
  var NOMES='https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}';
  var map=L.map(el,{scrollWheelZoom:false}).setView([-16.68,-49.25],11);
  L.tileLayer(ESRI,{maxZoom:19,attribution:'Esri World Imagery'}).addTo(map);
  L.tileLayer(VIAS,{maxZoom:19}).addTo(map);
  L.tileLayer(NOMES,{maxZoom:19}).addTo(map);
  fetch('data/seed/cidades.json').then(function(r){return r.json();}).then(function(cs){
    var pts=[];
    cs.forEach(function(c){
      if(c.lat==null||c.lon==null) return;
      var pil=/Biblioteca Central|Humanidades 2/.test(c.nome||'');
      var cor=pil?'#D89B34':(c.status==='realizado'?'#3f9b2f':'#a99e86');
      L.circleMarker([c.lat,c.lon],{radius:7,color:'#2A2418',weight:1.4,fillColor:cor,fillOpacity:.95})
        .bindPopup('<b>'+(c.nome||'')+'</b>'+(pil?'<br>Espaço-piloto':(c.status==='realizado'?'<br>Com atividade':'')))
        .addTo(map);
      pts.push([c.lat,c.lon]);
    });
    if(pts.length) map.fitBounds(pts,{padding:[28,28],maxZoom:13});
  }).catch(function(){ el.innerHTML='<div style="padding:20px;font-family:var(--mono);font-size:12px;color:var(--texto-2)">Veja o mapa completo no painel.</div>'; });
})();


/* ===== movimento reduzido: parar o SMIL do emblema =========================
   O emblema dos pássaros anima por <animate>/<animateTransform>, e SMIL não
   enxerga prefers-reduced-motion: aquela media query é de CSS. Quem pedia
   menos movimento no sistema continuava vendo as asas baterem sem parar.
   pauseAnimations() é do próprio elemento <svg> e congela a linha do tempo
   dele; percorremos todos porque cada <use> vive num <svg> com timeline
   própria, e a do sprite não comanda as das cópias.
   Reage à troca em tempo real: quem liga a preferência com a página aberta
   vê o movimento parar, e quem desliga vê voltar. */
(function(){
  if(!window.matchMedia) return;
  var mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  function aplicar(){
    var svgs = document.querySelectorAll('svg');
    for(var i=0;i<svgs.length;i++){
      try{ mq.matches ? svgs[i].pauseAnimations() : svgs[i].unpauseAnimations(); }
      catch(e){ /* nem todo SVG expõe a API; seguir sem barulho */ }
    }
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', aplicar);
  else aplicar();
  if(mq.addEventListener) mq.addEventListener('change', aplicar);
  else if(mq.addListener) mq.addListener(aplicar);
})();
