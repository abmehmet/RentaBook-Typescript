(() => {
  "use strict";
  var e = {
      525: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e) {
            return --e;
          });
      },
      995: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e) {
            return ++e;
          });
      },
      607: function (e, t, r) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var u = n(r(525)),
          o = n(r(995)),
          i = document.querySelector("#increment"),
          c = document.querySelector("#decrement"),
          a = document.querySelector("#count-value");
        i.addEventListener("click", function () {
          var e = parseFloat(a.innerText),
            t = o.default(e);
          a.innerText = t.toString();
        }),
          c.addEventListener("click", function () {
            var e = parseFloat(a.innerText),
              t = u.default(e);
            a.innerText = t.toString();
          });
      },
    },
    t = {};
  !(function r(n) {
    var u = t[n];
    if (void 0 !== u) return u.exports;
    var o = (t[n] = { exports: {} });
    return e[n].call(o.exports, o, o.exports, r), o.exports;
  })(607);
})();
