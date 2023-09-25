//Twitter Pixel - Tag
!(function (e, t, n, s, u, a) {
    e.twq ||
      ((s = e.twq =
        function () {
          s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments)
        }),
      (s.version = '1.1'),
      (s.queue = []),
      (u = t.createElement(n)),
      (u.async = !0),
      (u.src = 'https://static.ads-twitter.com/uwt.js'),
      (a = t.getElementsByTagName(n)[0]),
      a.parentNode.insertBefore(u, a))
  })(window, document, 'script')
  window.twq('config', 'o5i55')
  
  window.twq('event', 'tw-o5i55-oe8cz', {
    value: null, // use this to pass the value of the conversion (e.g. 5.00)
    email_address: null // use this to pass a user’s email address
  })
  
  // Google Tag
  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  gtag('js', new Date())
  
  gtag('config', 'G-KSGNHK2NH5')