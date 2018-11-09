'use strict';
var App = {
  panesNavigator: {
    'one': null,
    'two': null,
    'three': null,
    'four': null
  },

  init: function() {
    let tabs = document.querySelector('gaia-tabs');
    let panes = document.querySelector('.panes');

    // handle the tab change event, then give the reflect of tab pane
    tabs.addEventListener('change', () => {
      let selectedIndex = tabs.getAttribute('selected');
      panes.querySelector('.selected').classList.remove('selected');
      let selectPane = panes.querySelectorAll('.pane')[selectedIndex];
      selectPane.classList.add('selected');

      // emit panes change event internal, self define
      let name = selectPane.dataset.name;
      let evt = new CustomEvent('panesChange', {
        detail: {
          name: name
        }
      });
      window.dispatchEvent(evt);
    });

    // handle left and right key change the tab nav index
    window.addEventListener('keydown', (evt) => {
      let selectedIndex = tabs.getAttribute('selected');
      let tablen = 4;
      let nextIndex;
      switch (evt.key) {
        case 'ArrowRight':
          nextIndex = parseInt(selectedIndex) + 1;
          if (nextIndex <= tablen - 1) {
            tabs.setAttribute('selected', nextIndex);
          }
          break;
        case 'ArrowLeft':
          nextIndex = parseInt(selectedIndex) - 1;
          if (nextIndex >= 0) {
            tabs.setAttribute('selected', nextIndex);
          }
          break;
      }
    });

    // handle panes change events
    window.addEventListener('panesChange', (evt) => {
      let paneName = evt.detail.name;
      let container = document.querySelector('.pane-' + paneName);
      // only do the first page list navigation
      if (paneName === 'one') {
        this.initNavigation(container, paneName);
      }
    });

    // When focus to <input> element, should let it's parent li node high light
    let inputElements = document.querySelectorAll('input');
    [].forEach.call(inputElements, (input) => {
      input.addEventListener('focus', () => {
        input.parentNode.classList.add('focus');
      });
      input.addEventListener('blur', () => {
        input.parentNode.classList.remove('focus');
      });
    });
  },

  initNavigation: function(container, paneName) {
    if (!this.panesNavigator[paneName]) {
      this.panesNavigator[paneName] = new SimpleNavigationHelper('.focusable',
        container.querySelector('.nav-container'));
    }

    container.querySelector('.nav-container').focus();
  }
};

window.onload = () => {
  let firstPane = document.querySelector('.pane-one');
  App.init();
  App.initNavigation(firstPane, 'one');
};
