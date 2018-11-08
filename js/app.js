'use strict';

window.onload = () => {

  // handle the tab change event, then give the reflect of tab pane
  (function() {
    let tabs = document.querySelector('gaia-tabs');
    let panes = document.querySelector('.panes');
    tabs.addEventListener('change', () => {
      let selectedIndex = tabs.getAttribute('selected');
      panes.querySelector('.selected').classList.remove('selected');
      panes.querySelectorAll('.pane')[selectedIndex].classList.add('selected');
    });
  })();

  // handle left and right key change the tab nav index
  window.addEventListener('keydown', (evt) => {
    let tabs = document.querySelector('gaia-tabs');
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
};
