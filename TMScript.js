// ==UserScript==
// @name         rPlaceOhio (410, 273)
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the canvas!
// @author       oralekin
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
  window.addEventListener('load', () => {
    const i = document.createElement("img");
    Object.assign(i.style, { position: "absolute", left: 0, top: 0, imageRendering: "pixelated", width: "2000px", height: "1000px" });
    const src = "https://raw.githubusercontent.com/rPlaceOhio/rPlaceOhio.github.io/main/images/rPlaceOhio%20BlockO%20Overlay.png?";
    const upd = () => i.src = src + performance.now();
    upd();
    console.log(i);
    setInterval(upd, 30 * 1000);
    document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(i);
  }, false);
}
