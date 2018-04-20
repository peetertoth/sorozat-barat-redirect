// ==UserScript==
// @name         sorozat-barat redirect
// @namespace    peetftp.ddns.net
// @version      0.6
// @description  try to take over the world!
// @author       kyle
// @match        http://adf.ly/*/https://www.sorozat-barat.club/video/redirect/*
// @match        http://queuecosm.bid/*/https://www.sorozat-barat.club/video/redirect/*
// @match        http://threadsphere.bid/*/https://www.sorozat-barat.club/video/redirect/*
// @match        http://threadsphere.bid/*
// @match        http://restorecosm.bid/*/
// @grant        none
// @updateURL    https://raw.githubusercontent.com/peetertoth/sorozat-barat-redirect/master/sorozat-barat-redirect.user.js
// @downloadURL  https://raw.githubusercontent.com/peetertoth/sorozat-barat-redirect/master/sorozat-barat-redirect.user.js
// ==/UserScript==

(function() {
    'use strict';
    let link = window.location.href;
    let beginingOfNewLink = 'http://www.filmorias.com/ugras-a-videohoz/';
    let searchValue = '/redirect/';
    let index = link.indexOf(searchValue);
    let endOfNewLink = link.slice(index + searchValue.length);
    let newLink = beginingOfNewLink + endOfNewLink;

    setTimeout(function() { window.location.href = newLink; }, 500);

})();