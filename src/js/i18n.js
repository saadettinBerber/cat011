/**
 * i18n.js — Language Toggle Module
 * Handles EN/TR switching without page reload.
 * Uses data-lang attribute on <html> and data-i18n-en / data-i18n-tr on content elements.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'cat011-lang';
  var DEFAULT_LANG = 'en';
  var SUPPORTED_LANGS = ['en', 'tr'];

  function getCurrentLang() {
    var stored = localStorage.getItem(STORAGE_KEY);
    return SUPPORTED_LANGS.indexOf(stored) !== -1 ? stored : DEFAULT_LANG;
  }

  function setLang(lang) {
    if (SUPPORTED_LANGS.indexOf(lang) === -1) return;
    document.documentElement.setAttribute('data-lang', lang);
    localStorage.setItem(STORAGE_KEY, lang);
    updateToggleButtons(lang);
  }

  function updateToggleButtons(activeLang) {
    var buttons = document.querySelectorAll('.lang-toggle__btn');
    for (var i = 0; i < buttons.length; i++) {
      var btnLang = buttons[i].getAttribute('data-lang-btn');
      if (btnLang === activeLang) {
        buttons[i].classList.add('lang-toggle__btn--active');
      } else {
        buttons[i].classList.remove('lang-toggle__btn--active');
      }
    }
  }

  function initI18n() {
    var lang = getCurrentLang();
    setLang(lang);

    var buttons = document.querySelectorAll('.lang-toggle__btn');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function () {
        var targetLang = this.getAttribute('data-lang-btn');
        setLang(targetLang);
      });
    }
  }

  // Expose to global namespace
  window.CAT011 = window.CAT011 || {};
  window.CAT011.i18n = {
    init: initI18n,
    setLang: setLang,
    getCurrentLang: getCurrentLang
  };
})();
