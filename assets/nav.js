/**
 * WorldQuant BRAIN 培训系统 — 共享导航脚本
 */
(function () {
  'use strict';

  // ── 激活当前页面的 topbar 和 sidebar 链接 ──
  function markActive() {
    var path = location.pathname.replace(/\/$/, '');
    var page = path.split('/').pop() || 'index.html';

    document.querySelectorAll('.topbar-nav a, .sidebar-item').forEach(function (a) {
      var href = a.getAttribute('href');
      if (!href) return;
      var hpage = href.split('/').pop().split('#')[0];
      if (hpage === page || (page === '' && hpage === 'index.html')) {
        a.classList.add('active');
      }
    });
  }

  // ── 侧边栏滚动高亮当前章节 ──
  function getSidebarItemLabel(a) {
    // 取文本内容，去掉数字编号前缀（si-num span）
    var clone = a.cloneNode(true);
    var num = clone.querySelector('.si-num');
    if (num) num.remove();
    var prog = clone.querySelector('.prog-check');
    if (prog) prog.remove();
    return clone.textContent.trim();
  }

  function updateTopbarBadge(label) {
    var badge = document.querySelector('.topbar-badge');
    if (badge && label) badge.textContent = label;
  }

  function initScrollSpy() {
    var items = document.querySelectorAll('.sidebar-item[href^="#"]');
    if (!items.length) return;

    var sections = Array.from(items).map(function (a) {
      return document.querySelector(a.getAttribute('href'));
    });

    function onScroll() {
      var top = window.scrollY + 100;
      var current = 0;
      for (var i = 0; i < sections.length; i++) {
        if (sections[i] && sections[i].offsetTop <= top) current = i;
      }
      items.forEach(function (a, i) {
        a.classList.toggle('active', i === current);
      });
      updateTopbarBadge(getSidebarItemLabel(items[current]));
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── 代码块复制按钮 ──
  function initCopyButtons() {
    document.querySelectorAll('.code-block').forEach(function (block) {
      var header = block.querySelector('.code-block-header');
      var pre = block.querySelector('pre');
      if (!header || !pre) return;

      var btn = document.createElement('button');
      btn.textContent = '复制';
      btn.style.cssText = 'margin-left:auto;font-size:11px;padding:2px 10px;'
        + 'border-radius:5px;border:1px solid #30363d;background:#21262d;'
        + 'color:#8b949e;cursor:pointer;transition:all 0.15s;';
      btn.onmouseenter = function () { btn.style.color = '#e6edf3'; };
      btn.onmouseleave = function () { btn.style.color = '#8b949e'; };
      btn.onclick = function () {
        navigator.clipboard.writeText(pre.innerText).then(function () {
          btn.textContent = '已复制 ✓';
          btn.style.color = '#00d4aa';
          setTimeout(function () {
            btn.textContent = '复制';
            btn.style.color = '#8b949e';
          }, 1500);
        });
      };
      header.appendChild(btn);
    });
  }

  // ── 进度条动画 ──
  function initProgressBars() {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var fill = e.target.querySelector('.progress-bar-fill');
          if (fill) {
            var w = fill.getAttribute('data-width') || '0%';
            fill.style.transition = 'width 0.8s ease';
            fill.style.width = w;
          }
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.progress-bar').forEach(function (bar) {
      var fill = bar.querySelector('.progress-bar-fill');
      if (fill) {
        fill.setAttribute('data-width', fill.style.width || '0%');
        fill.style.width = '0%';
        observer.observe(bar);
      }
    });
  }

  // ── 全站搜索 ──
  function initSearch() {
    if (typeof SEARCH_INDEX === 'undefined') return;
    var input = document.getElementById('site-search');
    var dropdown = document.getElementById('search-dropdown');
    if (!input || !dropdown) return;

    var currentFile = location.pathname.split('/').pop() || 'index.html';
    var inTraining = location.pathname.indexOf('/training/') > -1;

    input.addEventListener('input', function () {
      var q = input.value.trim();
      if (q.length < 2) { dropdown.style.display = 'none'; return; }
      var qLower = q.toLowerCase();
      var results = SEARCH_INDEX.filter(function (item) {
        return (item.title + ' ' + item.text).toLowerCase().indexOf(qLower) > -1;
      }).slice(0, 8);

      if (!results.length) {
        dropdown.innerHTML = '<div class="search-no-result">无匹配结果</div>';
        dropdown.style.display = 'block';
        return;
      }

      dropdown.innerHTML = results.map(function (item) {
        var re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
        var title = item.title.replace(re, '<mark>$1</mark>');
        var href = buildSearchHref(item, currentFile, inTraining);
        return '<a class="search-result" href="' + href + '">'
          + '<div class="search-result-label">' + item.label + '</div>'
          + '<div class="search-result-title">' + title + '</div>'
          + '</a>';
      }).join('');
      dropdown.style.display = 'block';
    });

    document.addEventListener('click', function (e) {
      if (!e.target.closest || !e.target.closest('.search-wrap')) {
        dropdown.style.display = 'none';
      }
    });
  }

  function buildSearchHref(item, currentFile, inTraining) {
    var targetFile = item.page.split('/').pop();
    if (targetFile === currentFile) {
      return '#' + item.section;
    }
    if (inTraining) {
      return targetFile + '#' + item.section;
    }
    return item.page + '#' + item.section;
  }

  // ── 进度追踪 ──
  function initSiteProgress() {
    if (typeof PAGE_SECTIONS === 'undefined') return;

    var currentFile = location.pathname.split('/').pop().replace('.html', '') || 'index';
    var stored = JSON.parse(localStorage.getItem('brain_progress') || '{}');

    // 只有在 PAGE_SECTIONS 中的培训页面才显示勾选框
    if (!PAGE_SECTIONS[currentFile]) {
      refreshProgressRing();
      refreshHomepageProgress();
      return;
    }

    document.querySelectorAll('.sidebar-item[href^="#"]').forEach(function (a) {
      var section = a.getAttribute('href').replace('#', '');
      var check = document.createElement('span');
      var isDone = stored[currentFile] && stored[currentFile].indexOf(section) > -1;
      check.className = 'prog-check' + (isDone ? ' checked' : '');
      check.setAttribute('data-key', section);
      check.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        var s = JSON.parse(localStorage.getItem('brain_progress') || '{}');
        if (!s[currentFile]) s[currentFile] = [];
        var idx = s[currentFile].indexOf(section);
        if (idx > -1) { s[currentFile].splice(idx, 1); check.classList.remove('checked'); }
        else { s[currentFile].push(section); check.classList.add('checked'); }
        localStorage.setItem('brain_progress', JSON.stringify(s));
        refreshProgressRing();
        refreshHomepageProgress();
      };
      a.insertBefore(check, a.firstChild);
    });

    refreshProgressRing();
    refreshHomepageProgress();
  }

  function calcTotalProgress() {
    if (typeof PAGE_SECTIONS === 'undefined') return { done: 0, total: 1 };
    var stored = JSON.parse(localStorage.getItem('brain_progress') || '{}');
    var total = 0, done = 0;
    Object.keys(PAGE_SECTIONS).forEach(function (pid) {
      total += PAGE_SECTIONS[pid].length;
      if (stored[pid]) done += stored[pid].length;
    });
    return { done: done, total: total };
  }

  function refreshProgressRing() {
    var fillEl = document.querySelector('.prog-ring-fill');
    var pctEl = document.querySelector('.prog-ring-pct');
    if (!fillEl && !pctEl) return;
    var p = calcTotalProgress();
    var pct = p.total > 0 ? Math.round(p.done / p.total * 100) : 0;
    var circumference = 62.83;
    if (fillEl) fillEl.style.strokeDashoffset = circumference - (pct / 100) * circumference;
    if (pctEl) pctEl.textContent = pct + '%';
  }

  function refreshHomepageProgress() {
    if (typeof PAGE_SECTIONS === 'undefined') return;
    var stored = JSON.parse(localStorage.getItem('brain_progress') || '{}');
    document.querySelectorAll('[data-phase]').forEach(function (card) {
      var phase = card.getAttribute('data-phase');
      var sections = PAGE_SECTIONS[phase];
      if (!sections) return;
      var done = stored[phase] ? stored[phase].length : 0;
      var total = sections.length;
      var pct = total > 0 ? Math.round(done / total * 100) : 0;

      var wrap = card.querySelector('.phase-prog-wrap');
      if (!wrap) {
        wrap = document.createElement('div');
        wrap.className = 'phase-prog-wrap';
        wrap.innerHTML = '<div class="phase-prog-bar"><div class="phase-prog-fill"></div></div>'
          + '<span class="phase-prog-text"></span>';
        var meta = card.querySelector('.phase-meta');
        if (meta) meta.appendChild(wrap);
      }
      var fill = wrap.querySelector('.phase-prog-fill');
      var text = wrap.querySelector('.phase-prog-text');
      if (fill) fill.style.width = pct + '%';
      if (text) text.textContent = done + '/' + total;
    });
  }

  // ── 章节测验 ──
  function initQuiz() {
    if (typeof QUIZ_DATA === 'undefined') return;
    var pageId = location.pathname.split('/').pop().replace('.html', '');
    var questions = QUIZ_DATA[pageId];
    var btn = document.getElementById('quiz-launch');
    var scoreEl = document.getElementById('quiz-score');
    if (!btn) return;
    if (!questions || !questions.length) { btn.style.display = 'none'; return; }

    var stored = JSON.parse(localStorage.getItem('brain_quiz') || '{}');
    if (stored[pageId] && scoreEl) {
      scoreEl.textContent = '上次 ' + stored[pageId].score + ' / ' + stored[pageId].total;
    }

    btn.addEventListener('click', function () { openQuiz(pageId, questions); });
  }

  function openQuiz(pageId, questions) {
    var current = 0, score = 0;
    var overlay = document.createElement('div');
    overlay.className = 'quiz-overlay';
    document.body.appendChild(overlay);

    function renderQuestion() {
      if (current >= questions.length) { renderScoreCard(); return; }
      var q = questions[current];
      var pct = Math.round(current / questions.length * 100);

      overlay.innerHTML = '<div class="quiz-modal">'
        + '<div class="quiz-header"><span class="quiz-title">🧠 本页测验</span>'
        + '<span class="quiz-counter">' + (current + 1) + ' / ' + questions.length + '</span></div>'
        + '<div class="quiz-prog-bar"><div class="quiz-prog-fill" style="width:' + pct + '%"></div></div>'
        + '<div class="quiz-question">' + q.q + '</div>'
        + '<div class="quiz-options">'
        + q.opts.map(function (opt, i) {
            return '<button class="quiz-opt" data-i="' + i + '">' + opt + '</button>';
          }).join('')
        + '</div>'
        + '<div class="quiz-explain" id="qexplain"></div>'
        + '<div class="quiz-footer">'
        + '<button class="quiz-next-btn" id="qnext" style="display:none">下一题 →</button>'
        + '<button class="quiz-close-btn" id="qclose">关闭</button>'
        + '</div></div>';

      overlay.querySelectorAll('.quiz-opt').forEach(function (btn) {
        btn.addEventListener('click', function () {
          overlay.querySelectorAll('.quiz-opt').forEach(function (b) { b.disabled = true; });
          var idx = parseInt(btn.getAttribute('data-i'));
          var ok = idx === q.ans;
          if (ok) score++;
          overlay.querySelectorAll('.quiz-opt').forEach(function (b, i) {
            if (i === q.ans) b.classList.add('correct');
            else if (i === idx) b.classList.add('wrong');
          });
          var exp = overlay.querySelector('#qexplain');
          exp.textContent = (ok ? '✓ 正确！' : '✗ 错误。') + q.explain;
          exp.className = 'quiz-explain ' + (ok ? 'correct' : 'wrong');
          exp.style.display = 'block';
          overlay.querySelector('#qnext').style.display = 'inline-block';
        });
      });

      overlay.querySelector('#qnext').addEventListener('click', function () { current++; renderQuestion(); });
      overlay.querySelector('#qclose').addEventListener('click', function () { document.body.removeChild(overlay); });
    }

    function renderScoreCard() {
      var stored = JSON.parse(localStorage.getItem('brain_quiz') || '{}');
      stored[pageId] = { score: score, total: questions.length, date: new Date().toISOString().slice(0, 10) };
      localStorage.setItem('brain_quiz', JSON.stringify(stored));
      var scoreEl = document.getElementById('quiz-score');
      if (scoreEl) scoreEl.textContent = '上次 ' + score + ' / ' + questions.length;

      var label = score === questions.length ? '🎉 全部正确！' : score >= Math.ceil(questions.length * 0.7) ? '👍 不错！' : '继续加油！';
      overlay.innerHTML = '<div class="quiz-modal">'
        + '<div class="quiz-header"><span class="quiz-title">🧠 测验完成</span></div>'
        + '<div class="quiz-score-card">'
        + '<div class="quiz-score-big">' + score + '<span> / ' + questions.length + '</span></div>'
        + '<div class="quiz-score-label">' + label + '</div>'
        + '</div>'
        + '<div class="quiz-footer">'
        + '<button class="quiz-retry-btn" id="qretry">再来一次</button>'
        + '<button class="quiz-close-btn" id="qclose2">关闭</button>'
        + '</div></div>';

      overlay.querySelector('#qretry').addEventListener('click', function () { current = 0; score = 0; renderQuestion(); });
      overlay.querySelector('#qclose2').addEventListener('click', function () { document.body.removeChild(overlay); });
    }

    renderQuestion();
  }

  // ── 用户菜单 ──────────────────────────────────────────────────────
  function initUserMenu() {
    var right = document.querySelector('.topbar-right');
    if (!right || document.querySelector('.user-menu')) return;

    var username  = sessionStorage.getItem('brain_user') || '用户';
    var role      = sessionStorage.getItem('brain_role') || 'user';
    var wqStatus  = sessionStorage.getItem('brain_wq_status') || '';
    var initial   = username.charAt(0).toUpperCase();

    var WQ_STATUS_LABELS = {
      'consultant':             '顾问',
      'conditional_consultant': '有条件顾问',
      'user':                   '用户',
    };
    var roleLabel = role === 'admin'
      ? '管理员'
      : (WQ_STATUS_LABELS[wqStatus] || '用户');

    var wrap = document.createElement('div');
    wrap.className = 'user-menu';
    wrap.innerHTML =
      '<button class="user-menu-btn" id="user-menu-toggle" aria-expanded="false">'
      + '<div class="user-avatar">' + initial + '</div>'
      + '<span class="user-name">' + username + '</span>'
      + '<span class="user-chevron">▼</span>'
      + '</button>'
      + '<div class="user-dropdown">'
      + '<div class="user-dropdown-header">'
      + '<div class="user-dropdown-name">' + username + '</div>'
      + '<div class="user-dropdown-role">' + roleLabel + '</div>'
      + '</div>'
      + '<button class="user-dropdown-item danger" id="user-logout-btn">退出登录</button>'
      + '</div>';

    right.appendChild(wrap);

    document.getElementById('user-menu-toggle').addEventListener('click', function (e) {
      e.stopPropagation();
      wrap.classList.toggle('open');
      this.setAttribute('aria-expanded', wrap.classList.contains('open'));
    });

    document.getElementById('user-logout-btn').addEventListener('click', function () {
      if (typeof window.brainLogout === 'function') {
        window.brainLogout();
      } else {
        sessionStorage.removeItem('brain_token');
        location.href = location.pathname.indexOf('/training/') > -1
          || location.pathname.indexOf('/gm_insights/') > -1
          ? '../login.html' : 'login.html';
      }
    });

    document.addEventListener('click', function (e) {
      if (!e.target.closest || !e.target.closest('.user-menu')) {
        wrap.classList.remove('open');
      }
    });
  }

  function navInit() {
    markActive();
    initScrollSpy();
    initCopyButtons();
    initProgressBars();
    initSearch();
    initSiteProgress();
    initQuiz();
    initUserMenu();
  }

  // 暴露给 auth.js，在解密注入 DOM 后调用
  window.navInit = navInit;

  document.addEventListener('DOMContentLoaded', navInit);
})();
