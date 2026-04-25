(function () {
  'use strict';

  // ── 配置 ──────────────────────────────────────────────────────────
  var API = 'https://brainauth.shop';
  var LOGIN_PAGE = '/login.html';

  // ── Token 工具 ────────────────────────────────────────────────────
  function getToken() { return sessionStorage.getItem('brain_token'); }
  function setToken(t) { sessionStorage.setItem('brain_token', t); }
  function clearToken() {
    sessionStorage.removeItem('brain_token');
    sessionStorage.removeItem('brain_key');
  }

  // ── 内容密钥缓存 ──────────────────────────────────────────────────
  function getKey() { return sessionStorage.getItem('brain_key'); }
  function setKey(k) { sessionStorage.setItem('brain_key', k); }

  // ── 跳转到登录页 ──────────────────────────────────────────────────
  function toLogin() {
    var here = location.pathname + location.search;
    var loginUrl = (location.pathname.indexOf('/training/') > -1 || location.pathname.indexOf('/gm_insights/') > -1)
      ? '../login.html' : '/login.html';
    location.href = loginUrl + '?next=' + encodeURIComponent(here);
  }

  // ── 解密页面内容 ──────────────────────────────────────────────────
  function decryptPage(key) {
    var wrapper = document.getElementById('content-wrapper');
    var cipher  = document.getElementById('encrypted-content');
    if (!wrapper || !cipher) return;
    try {
      var dec = CryptoJS.AES.decrypt(cipher.textContent.trim(), key);
      var html = dec.toString(CryptoJS.enc.Utf8);
      if (!html) throw new Error('decrypt failed');
      wrapper.innerHTML = html;
      var mc = document.getElementById('main-content');
      if (mc) mc.style.display = 'block';
      // 解密注入 DOM 后重新初始化 nav.js（sidebar 激活、滚动监听等）
      if (typeof window.navInit === 'function') window.navInit();
    } catch (e) {
      document.body.innerHTML = '<p style="color:red;padding:40px">内容解密失败，请重新登录</p>';
      clearToken();
      setTimeout(toLogin, 2000);
    }
  }

  // ── 主流程：校验身份并解密 ────────────────────────────────────────
  function init() {
    // 登录页和管理页跳过鉴权
    var path = location.pathname;
    if (path.endsWith('login.html') || path.endsWith('admin.html')) return;

    var token = getToken();
    if (!token) { toLogin(); return; }

    var cachedKey = getKey();
    if (cachedKey) { decryptPage(cachedKey); return; }

    var page = path.split('/').pop() || 'index.html';
    fetch(API + '/api/key?page=' + encodeURIComponent(page), {
      headers: { 'Authorization': 'Bearer ' + token }
    })
    .then(function (r) {
      if (r.status === 401 || r.status === 403) { clearToken(); toLogin(); return null; }
      return r.json();
    })
    .then(function (data) {
      if (!data) return;
      setKey(data.key);
      decryptPage(data.key);
    })
    .catch(function () {
      document.body.innerHTML = '<p style="color:#f85149;padding:40px">无法连接到认证服务器，请稍后重试</p>';
    });
  }

  // ── 全局退出登录 ──────────────────────────────────────────────────
  window.brainLogout = function () {
    clearToken();
    location.href = location.pathname.indexOf('/training/') > -1 ? '../login.html' : '/login.html';
  };

  document.addEventListener('DOMContentLoaded', init);
})();
