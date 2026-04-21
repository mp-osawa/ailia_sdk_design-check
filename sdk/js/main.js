/* ============================================================
   TABS — 業種別活用事例（#usecases）
   ============================================================ */
function switchTab(index) {
  document.querySelectorAll('.usecases__tab').forEach((tab, i) => {
    tab.classList.toggle('usecases__tab--active', i === index);
  });
  document.querySelectorAll('.usecases__panel').forEach((panel, i) => {
    panel.classList.toggle('usecases__panel--active', i === index);
  });
}

/* ============================================================
   ACCORDION — 採用事例（#cases）
   ============================================================ */
/*function toggleAccordion(trigger) {
  const item = trigger.closest('.accordion__item');
  item.classList.toggle('accordion__item--open');
}*/
function openLangModal() {
  document.getElementById('langModal').classList.add('is-open');
  document.body.style.overflow = 'hidden'; // 背景スクロール防止
}
function toggleAccordion(btn) {
  const item = btn.closest('.accordion__item');
  const isOpen = item.classList.contains('accordion__item--open');

  // 一度すべて閉じる
  document.querySelectorAll('.accordion__item').forEach(el => {
    el.classList.remove('accordion__item--open', 'accordion__item--active');
  });

  // クリックしたものが閉じていたら開く
  if (!isOpen) {
    item.classList.add('accordion__item--open', 'accordion__item--active');
  }
}

function closeLangModal(e) {
  // 背景クリックまたは×ボタンで閉じる
  if (!e || e.target === document.getElementById('langModal')) {
    document.getElementById('langModal').classList.remove('is-open');
    document.body.style.overflow = '';
  }
}

// ESCキーでも閉じる
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeLangModal();
});

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