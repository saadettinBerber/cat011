/**
 * nav.js — Sidebar Navigation Module
 * Handles active link highlighting, mobile menu toggle, and section collapse.
 */
(function () {
  'use strict';

  function highlightActiveLink() {
    var currentPath = window.location.pathname;
    var currentFile = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';

    var links = document.querySelectorAll('.sidebar__link');
    for (var i = 0; i < links.length; i++) {
      var href = links[i].getAttribute('href');
      var linkFile = href.substring(href.lastIndexOf('/') + 1);
      if (linkFile === currentFile) {
        links[i].classList.add('sidebar__link--active');
      } else {
        links[i].classList.remove('sidebar__link--active');
      }
    }
  }

  function initMobileMenu() {
    var menuToggle = document.querySelector('.menu-toggle');
    var sidebar = document.querySelector('.sidebar');

    if (!menuToggle || !sidebar) return;

    menuToggle.addEventListener('click', function () {
      sidebar.classList.toggle('sidebar--open');
    });

    document.addEventListener('click', function (e) {
      if (
        sidebar.classList.contains('sidebar--open') &&
        !sidebar.contains(e.target) &&
        !menuToggle.contains(e.target)
      ) {
        sidebar.classList.remove('sidebar--open');
      }
    });
  }

  function initCollapsibleSections() {
    var titles = document.querySelectorAll('.sidebar__section-title[data-collapsible]');
    for (var i = 0; i < titles.length; i++) {
      titles[i].style.cursor = 'pointer';
      titles[i].addEventListener('click', function () {
        var next = this.nextElementSibling;
        while (next && !next.classList.contains('sidebar__section-title')) {
          if (next.classList.contains('sidebar__link')) {
            next.style.display = next.style.display === 'none' ? 'block' : 'none';
          }
          next = next.nextElementSibling;
        }
      });
    }
  }

  function initNav() {
    highlightActiveLink();
    initMobileMenu();
    initCollapsibleSections();
  }

  window.CAT011 = window.CAT011 || {};
  window.CAT011.nav = {
    init: initNav,
    highlightActiveLink: highlightActiveLink
  };
})();
