// ==UserScript==
// @name        Re: IB_READER
// @namespace   
// @match       *://www.imiaobige.com/novel/*
// @grant       none
// @version     1.0
// @author      Dirvoid
// @run-at      start
// @description 03/09/2020 14:59:57
// ==/UserScript==

(function() {
  'use strict';

  const url = window.location.href
  let newurl = url.replace("novel", "read").replace(".html", "")
  setTimeout(() => {
    window.location.href = newurl
  }, 3000)
}())
