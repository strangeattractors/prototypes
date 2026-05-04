// Casual password gate for shared prototype demos.
// Not crypto-secure — anyone reading source sees the password.
// Uses sessionStorage so password is asked once per browser session.
(function () {
  var KEY = "ys_proto_auth";
  var EXPECTED = "digitalextension";
  if (sessionStorage.getItem(KEY) === EXPECTED) return;
  // Hide page contents until authed
  document.documentElement.style.visibility = "hidden";
  function ask() {
    var p = window.prompt("Password to view this prototype:");
    if (p === null) {
      // user canceled
      document.documentElement.innerHTML =
        '<body style="font-family:-apple-system,sans-serif;padding:60px;text-align:center;color:#6B6560"><h2>Access cancelled</h2><p>Reload the page to try again.</p></body>';
      return;
    }
    if (p === EXPECTED) {
      sessionStorage.setItem(KEY, EXPECTED);
      document.documentElement.style.visibility = "";
    } else {
      ask();
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ask);
  } else {
    ask();
  }
})();
