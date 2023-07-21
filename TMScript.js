// ==UserScript==
// @name         rPlaceOhio (106, 150)
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Ohioans vs. r/Place
// @author       rPlaceOhio
// @match        https://garlic-bread.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==


const overlay = "https://github.com/rPlaceOhio/rPlaceOhio/blob/main/images/overlay.png?raw=true" + Math.floor(Date.now() / 10000);
console.log("[PLACE] Placing overlay for Steins;Place:", overlay);

if (window.top !== window.self) {
    const overlay_img = document.createElement("img");
    overlay_img.src = overlay;
    overlay_img.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 1000px;height: 1000px;";

    window.addEventListener('load', () => {
        const canvas = document.getElementsByTagName('garlic-bread-embed')[0]
            .shadowRoot.children[0]
            .getElementsByTagName('garlic-bread-share-container')[0]
            .getElementsByTagName('garlic-bread-camera')[0]
            .getElementsByTagName('garlic-bread-canvas')[0]
            .shadowRoot.children[0];

        console.log("[PLACE] Placing on canvas:", canvas);
        canvas.appendChild(overlay_img);
    }, false);
}
