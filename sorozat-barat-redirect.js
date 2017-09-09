// ==UserScript==
// @name         sorozat-barat redirect
// @namespace    peetftp.ddns.net
// @version      0.1
// @description  try to take over the world!
// @author       kyle
// @match        http://adf.ly/*/https://www.sorozat-barat.club/video/redirect/*
// @grant        none
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