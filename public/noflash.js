/* eslint-disable */

// Insert this script in your index.html right after the <body> tag.
// This will help to prevent a flash if dark mode is the default.

;(function () {
  window.$crisp=[];
  window.CRISP_WEBSITE_ID="f90b6919-21d2-43bd-8803-11f0750e5c57";
  d=document;
  s=d.createElement("script");
  s.src="https://client.crisp.chat/l.js";
  s.async=1;
  d.getElementsByTagName("head")[0].appendChild(s);
  (function prepareFrame() {
      var ifrm = document.createElement("iframe");
      ifrm.setAttribute("src", "https://nehafa3.substack.com/embed");
      ifrm.style.width = "640px";
      ifrm.style.height = "320px";
      ifrm.style.border="1px solid #EEE";
      ifrm.style.background="white";
      document.body.appendChild(ifrm);
  })();
  //<iframe style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>
  // Change these if you use something different in your hook.
  var storageKey = 'darkMode'
  var classNameDark = 'dark-mode'
  var classNameLight = 'light-mode'

  function setClassOnDocumentBody(darkMode) {
    document.body.classList.add(darkMode ? classNameDark : classNameLight)
    document.body.classList.remove(darkMode ? classNameLight : classNameDark)
  }

  var preferDarkQuery = '(prefers-color-scheme: dark)'
  var mql = window.matchMedia(preferDarkQuery)
  var supportsColorSchemeQuery = mql.media === preferDarkQuery
  var localStorageTheme = null
  try {
    localStorageTheme = localStorage.getItem(storageKey)
  } catch (err) {}
  var localStorageExists = localStorageTheme !== null
  if (localStorageExists) {
    localStorageTheme = JSON.parse(localStorageTheme)
  }

  // Determine the source of truth
  if (localStorageExists) {
    // source of truth from localStorage
    setClassOnDocumentBody(localStorageTheme)
  } else if (supportsColorSchemeQuery) {
    // source of truth from system
    setClassOnDocumentBody(mql.matches)
    localStorage.setItem(storageKey, mql.matches)
  } else {
    // source of truth from document.body
    var isDarkMode = document.body.classList.contains(classNameDark)
    localStorage.setItem(storageKey, JSON.stringify(isDarkMode))
  }
})()
