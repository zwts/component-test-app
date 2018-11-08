'use strict';

window.onload = () => {
  //....

  window.addEventListener('keydown', (evt) => {
    let tab = document.getElementById('tablist');
    let selectedIndex = tab.getAttribute('selected');
    let tablen = 4;
    let nextIndex;
    switch (evt.key) {
      case 'ArrowRight':
        nextIndex = parseInt(selectedIndex) + 1;
        if (nextIndex <= tablen - 1) {
          tab.setAttribute('selected', nextIndex);
        }
        break;
      case 'ArrowLeft':
        nextIndex = parseInt(selectedIndex) - 1;
        if (nextIndex >= 0) {
          tab.setAttribute('selected', nextIndex);
        }
        break;
    }
  });
};
