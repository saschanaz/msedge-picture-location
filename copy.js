"use strict";
const id = 'msedge-picture-location';

function copyPictureLocation(info) {
  writeToClipboard(info.srcUrl);
};

function writeToClipboard(text) {
  document.addEventListener("copy", ev => {
    ev.stopImmediatePropagation();
    ev.preventDefault();
    ev.clipboardData.setData("text/plain", text);
  }, { once: true });

  document.execCommand("copy");
}

browser.runtime.onInstalled.addListener(() => {
  browser.contextMenus.create({
    id,
    title: 'Copy picture location',
    contexts: ['image']
  })
});

browser.contextMenus.onClicked.addListener(info => {
  if (info.menuItemId === id) {
    copyPictureLocation(info);
  }
});
