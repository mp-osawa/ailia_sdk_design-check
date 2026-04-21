
/* ============================================================
   HEADER — スクロールで非表示
   ============================================================ */
(function() {
  const header = document.getElementById('header');
  const subNav = document.getElementById('subNavArea');
  let lastScrollY = 0;

  window.addEventListener('scroll', function() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      // 下スクロール → 隠す
      header.classList.add('header--hidden');
      if (subNav) subNav.classList.add('subnav--hidden');
    } else {
      // 上スクロール → 表示
      header.classList.remove('header--hidden');
      if (subNav) subNav.classList.remove('subnav--hidden');
    }
    lastScrollY = currentScrollY;
  });
})();

/* ============================================================
   SCROLL FADE IN — フェードインのみ
   ============================================================ */
(function() {
  const targets = document.querySelectorAll(
    '.hero__inner, .showcase__card, .pain__col, ' +
    '.accordion__item, .comparison__table-wrap, ' +
    '.stack__core-banner, .lib-card, ' +
    '.usecases__wrap, .pricing-card, ' +
    '.trial__content, .steps, .step'
  );

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  targets.forEach(function(el) {
    el.classList.add('fade-in');
    observer.observe(el);
  });
})();