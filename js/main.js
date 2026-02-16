/**
 * main.js — Application Entry Point
 * Initializes all modules on DOMContentLoaded.
 */
(function () {
  'use strict';

  var THEME_STORAGE_KEY = 'cat011-theme';

  function initTheme() {
    var stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored) {
      document.documentElement.setAttribute('data-theme', stored);
    } else {
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }
    updateThemeIcon();
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme');
    var next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(THEME_STORAGE_KEY, next);
    updateThemeIcon();
  }

  function updateThemeIcon() {
    var btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    btn.textContent = isDark ? '\u2600' : '\u263E';
    btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  function bindThemeToggle() {
    var btn = document.querySelector('.theme-toggle');
    if (btn) {
      btn.addEventListener('click', toggleTheme);
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    bindThemeToggle();

    if (window.CAT011 && window.CAT011.i18n) {
      window.CAT011.i18n.init();
    }
    if (window.CAT011 && window.CAT011.nav) {
      window.CAT011.nav.init();
    }
  });
})();
