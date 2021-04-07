"use strict";

var _this = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.addEventListener('DOMContentLoaded', function () {
  /*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
  !function (e, t) {
    "use strict";

    "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return t(e);
    } : t(e);
  }("undefined" != typeof window ? window : _this, function (C, e) {
    "use strict";

    var t = [],
        E = C.document,
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.concat,
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function m(e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
        x = function x(e) {
      return null != e && e === e.window;
    },
        c = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };

    function b(e, t, n) {
      var r,
          i,
          o = (n = n || E).createElement("script");
      if (o.text = e, t) for (r in c) {
        (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
      }
      n.head.appendChild(o).parentNode.removeChild(o);
    }

    function w(e) {
      return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? n[o.call(e)] || "object" : _typeof(e);
    }

    var f = "3.4.1",
        k = function k(e, t) {
      return new k.fn.init(e, t);
    },
        p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function d(e) {
      var t = !!e && "length" in e && e.length,
          n = w(e);
      return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
    }

    k.fn = k.prototype = {
      jquery: f,
      constructor: k,
      length: 0,
      toArray: function toArray() {
        return s.call(this);
      },
      get: function get(e) {
        return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
      },
      pushStack: function pushStack(e) {
        var t = k.merge(this.constructor(), e);
        return t.prevObject = this, t;
      },
      each: function each(e) {
        return k.each(this, e);
      },
      map: function map(n) {
        return this.pushStack(k.map(this, function (e, t) {
          return n.call(e, t, e);
        }));
      },
      slice: function slice() {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function first() {
        return this.eq(0);
      },
      last: function last() {
        return this.eq(-1);
      },
      eq: function eq(e) {
        var t = this.length,
            n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function end() {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice
    }, k.extend = k.fn.extend = function () {
      var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;

      for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
        if (null != (e = arguments[s])) for (t in e) {
          r = e[t], "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}, i = !1, a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        }
      }

      return a;
    }, k.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function error(e) {
        throw new Error(e);
      },
      noop: function noop() {},
      isPlainObject: function isPlainObject(e) {
        var t, n;
        return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l);
      },
      isEmptyObject: function isEmptyObject(e) {
        var t;

        for (t in e) {
          return !1;
        }

        return !0;
      },
      globalEval: function globalEval(e, t) {
        b(e, {
          nonce: t && t.nonce
        });
      },
      each: function each(e, t) {
        var n,
            r = 0;

        if (d(e)) {
          for (n = e.length; r < n; r++) {
            if (!1 === t.call(e[r], r, e[r])) break;
          }
        } else for (r in e) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }

        return e;
      },
      trim: function trim(e) {
        return null == e ? "" : (e + "").replace(p, "");
      },
      makeArray: function makeArray(e, t) {
        var n = t || [];
        return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
      },
      inArray: function inArray(e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function merge(e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
          e[i++] = t[r];
        }

        return e.length = i, e;
      },
      grep: function grep(e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) {
          !t(e[i], i) !== a && r.push(e[i]);
        }

        return r;
      },
      map: function map(e, t, n) {
        var r,
            i,
            o = 0,
            a = [];
        if (d(e)) for (r = e.length; o < r; o++) {
          null != (i = t(e[o], o, n)) && a.push(i);
        } else for (o in e) {
          null != (i = t(e[o], o, n)) && a.push(i);
        }
        return g.apply([], a);
      },
      guid: 1,
      support: y
    }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
      n["[object " + t + "]"] = t.toLowerCase();
    });

    var h = function (n) {
      var e,
          d,
          b,
          o,
          i,
          h,
          f,
          g,
          w,
          u,
          l,
          T,
          C,
          a,
          E,
          v,
          s,
          c,
          y,
          k = "sizzle" + 1 * new Date(),
          m = n.document,
          S = 0,
          r = 0,
          p = ue(),
          x = ue(),
          N = ue(),
          A = ue(),
          D = function D(e, t) {
        return e === t && (l = !0), 0;
      },
          j = {}.hasOwnProperty,
          t = [],
          q = t.pop,
          L = t.push,
          H = t.push,
          O = t.slice,
          P = function P(e, t) {
        for (var n = 0, r = e.length; n < r; n++) {
          if (e[n] === t) return n;
        }

        return -1;
      },
          R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          M = "[\\x20\\t\\r\\n\\f]",
          I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
          W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
          $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
          F = new RegExp(M + "+", "g"),
          B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
          _ = new RegExp("^" + M + "*," + M + "*"),
          z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
          U = new RegExp(M + "|>"),
          X = new RegExp($),
          V = new RegExp("^" + I + "$"),
          G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + $),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
      },
          Y = /HTML$/i,
          Q = /^(?:input|select|textarea|button)$/i,
          J = /^h\d$/i,
          K = /^[^{]+\{\s*\[native \w/,
          Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          ee = /[+~]/,
          te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
          ne = function ne(e, t, n) {
        var r = "0x" + t - 65536;
        return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
      },
          re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          ie = function ie(e, t) {
        return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
      },
          oe = function oe() {
        T();
      },
          ae = be(function (e) {
        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
      }, {
        dir: "parentNode",
        next: "legend"
      });

      try {
        H.apply(t = O.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType;
      } catch (e) {
        H = {
          apply: t.length ? function (e, t) {
            L.apply(e, O.call(t));
          } : function (e, t) {
            var n = e.length,
                r = 0;

            while (e[n++] = t[r++]) {
              ;
            }

            e.length = n - 1;
          }
        };
      }

      function se(t, e, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l,
            c,
            f = e && e.ownerDocument,
            p = e ? e.nodeType : 9;
        if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;

        if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e), e = e || C, E)) {
          if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
          }

          if (d.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
            if (c = t, f = e, 1 === p && U.test(t)) {
              (s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = k), o = (l = h(t)).length;

              while (o--) {
                l[o] = "#" + s + " " + xe(l[o]);
              }

              c = l.join(","), f = ee.test(t) && ye(e.parentNode) || e;
            }

            try {
              return H.apply(n, f.querySelectorAll(c)), n;
            } catch (e) {
              A(t, !0);
            } finally {
              s === k && e.removeAttribute("id");
            }
          }
        }

        return g(t.replace(B, "$1"), e, n, r);
      }

      function ue() {
        var r = [];
        return function e(t, n) {
          return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
        };
      }

      function le(e) {
        return e[k] = !0, e;
      }

      function ce(e) {
        var t = C.createElement("fieldset");

        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null;
        }
      }

      function fe(e, t) {
        var n = e.split("|"),
            r = n.length;

        while (r--) {
          b.attrHandle[n[r]] = t;
        }
      }

      function pe(e, t) {
        var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
        if (r) return r;
        if (n) while (n = n.nextSibling) {
          if (n === t) return -1;
        }
        return e ? 1 : -1;
      }

      function de(t) {
        return function (e) {
          return "input" === e.nodeName.toLowerCase() && e.type === t;
        };
      }

      function he(n) {
        return function (e) {
          var t = e.nodeName.toLowerCase();
          return ("input" === t || "button" === t) && e.type === n;
        };
      }

      function ge(t) {
        return function (e) {
          return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
        };
      }

      function ve(a) {
        return le(function (o) {
          return o = +o, le(function (e, t) {
            var n,
                r = a([], e.length, o),
                i = r.length;

            while (i--) {
              e[n = r[i]] && (e[n] = !(t[n] = e[n]));
            }
          });
        });
      }

      function ye(e) {
        return e && "undefined" != typeof e.getElementsByTagName && e;
      }

      for (e in d = se.support = {}, i = se.isXML = function (e) {
        var t = e.namespaceURI,
            n = (e.ownerDocument || e).documentElement;
        return !Y.test(t || n && n.nodeName || "HTML");
      }, T = se.setDocument = function (e) {
        var t,
            n,
            r = e ? e.ownerDocument || e : m;
        return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.attributes = ce(function (e) {
          return e.className = "i", !e.getAttribute("className");
        }), d.getElementsByTagName = ce(function (e) {
          return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
        }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
          return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length;
        }), d.getById ? (b.filter.ID = function (e) {
          var t = e.replace(te, ne);
          return function (e) {
            return e.getAttribute("id") === t;
          };
        }, b.find.ID = function (e, t) {
          if ("undefined" != typeof t.getElementById && E) {
            var n = t.getElementById(e);
            return n ? [n] : [];
          }
        }) : (b.filter.ID = function (e) {
          var n = e.replace(te, ne);
          return function (e) {
            var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
            return t && t.value === n;
          };
        }, b.find.ID = function (e, t) {
          if ("undefined" != typeof t.getElementById && E) {
            var n,
                r,
                i,
                o = t.getElementById(e);

            if (o) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
              i = t.getElementsByName(e), r = 0;

              while (o = i[r++]) {
                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
              }
            }

            return [];
          }
        }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
          return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
        } : function (e, t) {
          var n,
              r = [],
              i = 0,
              o = t.getElementsByTagName(e);

          if ("*" === e) {
            while (n = o[i++]) {
              1 === n.nodeType && r.push(n);
            }

            return r;
          }

          return o;
        }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
          if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
        }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
          a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]");
        }), ce(function (e) {
          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
          var t = C.createElement("input");
          t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
        })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
          d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", $);
        }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
          var n = 9 === e.nodeType ? e.documentElement : e,
              r = t && t.parentNode;
          return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
        } : function (e, t) {
          if (t) while (t = t.parentNode) {
            if (t === e) return !0;
          }
          return !1;
        }, D = t ? function (e, t) {
          if (e === t) return l = !0, 0;
          var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
          return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
        } : function (e, t) {
          if (e === t) return l = !0, 0;
          var n,
              r = 0,
              i = e.parentNode,
              o = t.parentNode,
              a = [e],
              s = [t];
          if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
          if (i === o) return pe(e, t);
          n = e;

          while (n = n.parentNode) {
            a.unshift(n);
          }

          n = t;

          while (n = n.parentNode) {
            s.unshift(n);
          }

          while (a[r] === s[r]) {
            r++;
          }

          return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0;
        }), C;
      }, se.matches = function (e, t) {
        return se(e, null, null, t);
      }, se.matchesSelector = function (e, t) {
        if ((e.ownerDocument || e) !== C && T(e), d.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
          var n = c.call(e, t);
          if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
        } catch (e) {
          A(t, !0);
        }
        return 0 < se(t, C, null, [e]).length;
      }, se.contains = function (e, t) {
        return (e.ownerDocument || e) !== C && T(e), y(e, t);
      }, se.attr = function (e, t) {
        (e.ownerDocument || e) !== C && T(e);
        var n = b.attrHandle[t.toLowerCase()],
            r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
        return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
      }, se.escape = function (e) {
        return (e + "").replace(re, ie);
      }, se.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }, se.uniqueSort = function (e) {
        var t,
            n = [],
            r = 0,
            i = 0;

        if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
          while (t = e[i++]) {
            t === e[i] && (r = n.push(i));
          }

          while (r--) {
            e.splice(n[r], 1);
          }
        }

        return u = null, e;
      }, o = se.getText = function (e) {
        var t,
            n = "",
            r = 0,
            i = e.nodeType;

        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;

            for (e = e.firstChild; e; e = e.nextSibling) {
              n += o(e);
            }
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while (t = e[r++]) {
          n += o(t);
        }

        return n;
      }, (b = se.selectors = {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function ATTR(e) {
            return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
          },
          CHILD: function CHILD(e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
          },
          PSEUDO: function PSEUDO(e) {
            var t,
                n = !e[6] && e[2];
            return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
          }
        },
        filter: {
          TAG: function TAG(e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e ? function () {
              return !0;
            } : function (e) {
              return e.nodeName && e.nodeName.toLowerCase() === t;
            };
          },
          CLASS: function CLASS(e) {
            var t = p[e + " "];
            return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function (e) {
              return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
            });
          },
          ATTR: function ATTR(n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function CHILD(h, e, t, g, v) {
            var y = "nth" !== h.slice(0, 3),
                m = "last" !== h.slice(-4),
                x = "of-type" === e;
            return 1 === g && 0 === v ? function (e) {
              return !!e.parentNode;
            } : function (e, t, n) {
              var r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l = y !== m ? "nextSibling" : "previousSibling",
                  c = e.parentNode,
                  f = x && e.nodeName.toLowerCase(),
                  p = !n && !x,
                  d = !1;

              if (c) {
                if (y) {
                  while (l) {
                    a = e;

                    while (a = a[l]) {
                      if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                    }

                    u = l = "only" === h && !u && "nextSibling";
                  }

                  return !0;
                }

                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                  d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s];

                  while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                    if (1 === a.nodeType && ++d && a === e) {
                      i[h] = [S, s, d];
                      break;
                    }
                  }
                } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                  if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]), a === e)) break;
                }

                return (d -= v) === g || d % g == 0 && 0 <= d / g;
              }
            };
          },
          PSEUDO: function PSEUDO(e, o) {
            var t,
                a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
            return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
              var n,
                  r = a(e, o),
                  i = r.length;

              while (i--) {
                e[n = P(e, r[i])] = !(t[n] = r[i]);
              }
            }) : function (e) {
              return a(e, 0, t);
            }) : a;
          }
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
                i = [],
                s = f(e.replace(B, "$1"));
            return s[k] ? le(function (e, t, n, r) {
              var i,
                  o = s(e, null, r, []),
                  a = e.length;

              while (a--) {
                (i = o[a]) && (e[a] = !(t[a] = i));
              }
            }) : function (e, t, n) {
              return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
            };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return t = t.replace(te, ne), function (e) {
              return -1 < (e.textContent || o(e)).indexOf(t);
            };
          }),
          lang: le(function (n) {
            return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
              var t;

              do {
                if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
              } while ((e = e.parentNode) && 1 === e.nodeType);

              return !1;
            };
          }),
          target: function target(e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function root(e) {
            return e === a;
          },
          focus: function focus(e) {
            return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function checked(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected;
          },
          selected: function selected(e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
          },
          empty: function empty(e) {
            for (e = e.firstChild; e; e = e.nextSibling) {
              if (e.nodeType < 6) return !1;
            }

            return !0;
          },
          parent: function parent(e) {
            return !b.pseudos.empty(e);
          },
          header: function header(e) {
            return J.test(e.nodeName);
          },
          input: function input(e) {
            return Q.test(e.nodeName);
          },
          button: function button(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t;
          },
          text: function text(e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) {
              e.push(n);
            }

            return e;
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) {
              e.push(n);
            }

            return e;
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) {
              e.push(r);
            }

            return e;
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t;) {
              e.push(r);
            }

            return e;
          })
        }
      }).pseudos.nth = b.pseudos.eq, {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) {
        b.pseudos[e] = de(e);
      }

      for (e in {
        submit: !0,
        reset: !0
      }) {
        b.pseudos[e] = he(e);
      }

      function me() {}

      function xe(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) {
          r += e[t].value;
        }

        return r;
      }

      function be(s, e, t) {
        var u = e.dir,
            l = e.next,
            c = l || u,
            f = t && "parentNode" === c,
            p = r++;
        return e.first ? function (e, t, n) {
          while (e = e[u]) {
            if (1 === e.nodeType || f) return s(e, t, n);
          }

          return !1;
        } : function (e, t, n) {
          var r,
              i,
              o,
              a = [S, p];

          if (n) {
            while (e = e[u]) {
              if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            }
          } else while (e = e[u]) {
            if (1 === e.nodeType || f) if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
              if ((r = i[c]) && r[0] === S && r[1] === p) return a[2] = r[2];
              if ((i[c] = a)[2] = s(e, t, n)) return !0;
            }
          }

          return !1;
        };
      }

      function we(i) {
        return 1 < i.length ? function (e, t, n) {
          var r = i.length;

          while (r--) {
            if (!i[r](e, t, n)) return !1;
          }

          return !0;
        } : i[0];
      }

      function Te(e, t, n, r, i) {
        for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
          (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
        }

        return a;
      }

      function Ce(d, h, g, v, y, e) {
        return v && !v[k] && (v = Ce(v)), y && !y[k] && (y = Ce(y, e)), le(function (e, t, n, r) {
          var i,
              o,
              a,
              s = [],
              u = [],
              l = t.length,
              c = e || function (e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) {
              se(e, t[r], n);
            }

            return n;
          }(h || "*", n.nodeType ? [n] : n, []),
              f = !d || !e && h ? c : Te(c, s, d, n, r),
              p = g ? y || (e ? d : l || v) ? [] : t : f;

          if (g && g(f, p, n, r), v) {
            i = Te(p, u), v(i, [], n, r), o = i.length;

            while (o--) {
              (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
            }
          }

          if (e) {
            if (y || d) {
              if (y) {
                i = [], o = p.length;

                while (o--) {
                  (a = p[o]) && i.push(f[o] = a);
                }

                y(null, p = [], i, r);
              }

              o = p.length;

              while (o--) {
                (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
              }
            }
          } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p);
        });
      }

      function Ee(e) {
        for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
          return e === i;
        }, a, !0), l = be(function (e) {
          return -1 < P(i, e);
        }, a, !0), c = [function (e, t, n) {
          var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
          return i = null, r;
        }]; s < r; s++) {
          if (t = b.relative[e[s].type]) c = [be(we(c), t)];else {
            if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
              for (n = ++s; n < r; n++) {
                if (b.relative[e[n].type]) break;
              }

              return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                value: " " === e[s - 2].type ? "*" : ""
              })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
            }

            c.push(t);
          }
        }

        return we(c);
      }

      return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function (e, t) {
        var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = x[e + " "];
        if (l) return t ? 0 : l.slice(0);
        a = e, s = [], u = b.preFilter;

        while (a) {
          for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
            value: n,
            type: r[0].replace(B, " ")
          }), a = a.slice(n.length)), b.filter) {
            !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
              value: n,
              type: o,
              matches: r
            }), a = a.slice(n.length));
          }

          if (!n) break;
        }

        return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
      }, f = se.compile = function (e, t) {
        var n,
            v,
            y,
            m,
            x,
            r,
            i = [],
            o = [],
            a = N[e + " "];

        if (!a) {
          t || (t = h(e)), n = t.length;

          while (n--) {
            (a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
          }

          (a = N(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function r(e, t, n, _r, i) {
            var o,
                a,
                s,
                u = 0,
                l = "0",
                c = e && [],
                f = [],
                p = w,
                d = e || x && b.find.TAG("*", i),
                h = S += null == p ? 1 : Math.random() || .1,
                g = d.length;

            for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
              if (x && o) {
                a = 0, t || o.ownerDocument === C || (T(o), n = !E);

                while (s = v[a++]) {
                  if (s(o, t || C, n)) {
                    _r.push(o);

                    break;
                  }
                }

                i && (S = h);
              }

              m && ((o = !s && o) && u--, e && c.push(o));
            }

            if (u += l, m && l !== u) {
              a = 0;

              while (s = y[a++]) {
                s(c, f, t, n);
              }

              if (e) {
                if (0 < u) while (l--) {
                  c[l] || f[l] || (f[l] = q.call(_r));
                }
                f = Te(f);
              }

              H.apply(_r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(_r);
            }

            return i && (S = h, w = p), c;
          }, m ? le(r) : r))).selector = e;
        }

        return a;
      }, g = se.select = function (e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && h(e = l.selector || e);

        if (n = n || [], 1 === c.length) {
          if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
            if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
            l && (t = t.parentNode), e = e.slice(o.shift().value.length);
          }

          i = G.needsContext.test(e) ? 0 : o.length;

          while (i--) {
            if (a = o[i], b.relative[s = a.type]) break;

            if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
              if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
              break;
            }
          }
        }

        return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
      }, d.sortStable = k.split("").sort(D).join("") === k, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
      }), ce(function (e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
      }) || fe("type|href|height|width", function (e, t, n) {
        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
      }), d.attributes && ce(function (e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
      }) || fe("value", function (e, t, n) {
        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
      }), ce(function (e) {
        return null == e.getAttribute("disabled");
      }) || fe(R, function (e, t, n) {
        var r;
        if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
      }), se;
    }(C);

    k.find = h, k.expr = h.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = h.uniqueSort, k.text = h.getText, k.isXMLDoc = h.isXML, k.contains = h.contains, k.escapeSelector = h.escape;

    var T = function T(e, t, n) {
      var r = [],
          i = void 0 !== n;

      while ((e = e[t]) && 9 !== e.nodeType) {
        if (1 === e.nodeType) {
          if (i && k(e).is(n)) break;
          r.push(e);
        }
      }

      return r;
    },
        S = function S(e, t) {
      for (var n = []; e; e = e.nextSibling) {
        1 === e.nodeType && e !== t && n.push(e);
      }

      return n;
    },
        N = k.expr.match.needsContext;

    function A(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }

    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) {
      return m(n) ? k.grep(e, function (e, t) {
        return !!n.call(e, t, e) !== r;
      }) : n.nodeType ? k.grep(e, function (e) {
        return e === n !== r;
      }) : "string" != typeof n ? k.grep(e, function (e) {
        return -1 < i.call(n, e) !== r;
      }) : k.filter(n, e, r);
    }

    k.filter = function (e, t, n) {
      var r = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function (e) {
        return 1 === e.nodeType;
      }));
    }, k.fn.extend({
      find: function find(e) {
        var t,
            n,
            r = this.length,
            i = this;
        if ("string" != typeof e) return this.pushStack(k(e).filter(function () {
          for (t = 0; t < r; t++) {
            if (k.contains(i[t], this)) return !0;
          }
        }));

        for (n = this.pushStack([]), t = 0; t < r; t++) {
          k.find(e, i[t], n);
        }

        return 1 < r ? k.uniqueSort(n) : n;
      },
      filter: function filter(e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function not(e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function is(e) {
        return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1).length;
      }
    });
    var q,
        L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (k.fn.init = function (e, t, n) {
      var r, i;
      if (!e) return this;

      if (n = n || q, "string" == typeof e) {
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

        if (r[1]) {
          if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), D.test(r[1]) && k.isPlainObject(t)) for (r in t) {
            m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          }
          return this;
        }

        return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
      }

      return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this);
    }).prototype = k.fn, q = k(E);
    var H = /^(?:parents|prev(?:Until|All))/,
        O = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };

    function P(e, t) {
      while ((e = e[t]) && 1 !== e.nodeType) {
        ;
      }

      return e;
    }

    k.fn.extend({
      has: function has(e) {
        var t = k(e, this),
            n = t.length;
        return this.filter(function () {
          for (var e = 0; e < n; e++) {
            if (k.contains(this, t[e])) return !0;
          }
        });
      },
      closest: function closest(e, t) {
        var n,
            r = 0,
            i = this.length,
            o = [],
            a = "string" != typeof e && k(e);
        if (!N.test(e)) for (; r < i; r++) {
          for (n = this[r]; n && n !== t; n = n.parentNode) {
            if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
              o.push(n);
              break;
            }
          }
        }
        return this.pushStack(1 < o.length ? k.uniqueSort(o) : o);
      },
      index: function index(e) {
        return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add: function add(e, t) {
        return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
      },
      addBack: function addBack(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
      }
    }), k.each({
      parent: function parent(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null;
      },
      parents: function parents(e) {
        return T(e, "parentNode");
      },
      parentsUntil: function parentsUntil(e, t, n) {
        return T(e, "parentNode", n);
      },
      next: function next(e) {
        return P(e, "nextSibling");
      },
      prev: function prev(e) {
        return P(e, "previousSibling");
      },
      nextAll: function nextAll(e) {
        return T(e, "nextSibling");
      },
      prevAll: function prevAll(e) {
        return T(e, "previousSibling");
      },
      nextUntil: function nextUntil(e, t, n) {
        return T(e, "nextSibling", n);
      },
      prevUntil: function prevUntil(e, t, n) {
        return T(e, "previousSibling", n);
      },
      siblings: function siblings(e) {
        return S((e.parentNode || {}).firstChild, e);
      },
      children: function children(e) {
        return S(e.firstChild);
      },
      contents: function contents(e) {
        return "undefined" != typeof e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), k.merge([], e.childNodes));
      }
    }, function (r, i) {
      k.fn[r] = function (e, t) {
        var n = k.map(this, i, e);
        return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n);
      };
    });
    var R = /[^\x20\t\r\n\f]+/g;

    function M(e) {
      return e;
    }

    function I(e) {
      throw e;
    }

    function W(e, t, n, r) {
      var i;

      try {
        e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
      } catch (e) {
        n.apply(void 0, [e]);
      }
    }

    k.Callbacks = function (r) {
      var e, n;
      r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(R) || [], function (e, t) {
        n[t] = !0;
      }), n) : k.extend({}, r);

      var i,
          t,
          o,
          a,
          s = [],
          u = [],
          l = -1,
          c = function c() {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();

          while (++l < s.length) {
            !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
          }
        }

        r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
      },
          f = {
        add: function add() {
          return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
            k.each(e, function (e, t) {
              m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
            });
          }(arguments), t && !i && c()), this;
        },
        remove: function remove() {
          return k.each(arguments, function (e, t) {
            var n;

            while (-1 < (n = k.inArray(t, s, n))) {
              s.splice(n, 1), n <= l && l--;
            }
          }), this;
        },
        has: function has(e) {
          return e ? -1 < k.inArray(e, s) : 0 < s.length;
        },
        empty: function empty() {
          return s && (s = []), this;
        },
        disable: function disable() {
          return a = u = [], s = t = "", this;
        },
        disabled: function disabled() {
          return !s;
        },
        lock: function lock() {
          return a = u = [], t || i || (s = t = ""), this;
        },
        locked: function locked() {
          return !!a;
        },
        fireWith: function fireWith(e, t) {
          return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
        },
        fire: function fire() {
          return f.fireWith(this, arguments), this;
        },
        fired: function fired() {
          return !!o;
        }
      };

      return f;
    }, k.extend({
      Deferred: function Deferred(e) {
        var o = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]],
            i = "pending",
            a = {
          state: function state() {
            return i;
          },
          always: function always() {
            return s.done(arguments).fail(arguments), this;
          },
          "catch": function _catch(e) {
            return a.then(null, e);
          },
          pipe: function pipe() {
            var i = arguments;
            return k.Deferred(function (r) {
              k.each(o, function (e, t) {
                var n = m(i[t[4]]) && i[t[4]];
                s[t[1]](function () {
                  var e = n && n.apply(this, arguments);
                  e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
                });
              }), i = null;
            }).promise();
          },
          then: function then(t, n, r) {
            var u = 0;

            function l(i, o, a, s) {
              return function () {
                var n = this,
                    r = arguments,
                    e = function e() {
                  var e, t;

                  if (!(i < u)) {
                    if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                    t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++, t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                  }
                },
                    t = s ? e : function () {
                  try {
                    e();
                  } catch (e) {
                    k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== I && (n = void 0, r = [e]), o.rejectWith(n, r));
                  }
                };

                i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t));
              };
            }

            return k.Deferred(function (e) {
              o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : M)), o[2][3].add(l(0, e, m(n) ? n : I));
            }).promise();
          },
          promise: function promise(e) {
            return null != e ? k.extend(e, a) : a;
          }
        },
            s = {};
        return k.each(o, function (e, t) {
          var n = t[2],
              r = t[5];
          a[t[1]] = n.add, r && n.add(function () {
            i = r;
          }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
            return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
          }, s[t[0] + "With"] = n.fireWith;
        }), a.promise(s), e && e.call(s, s), s;
      },
      when: function when(e) {
        var n = arguments.length,
            t = n,
            r = Array(t),
            i = s.call(arguments),
            o = k.Deferred(),
            a = function a(t) {
          return function (e) {
            r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
          };
        };

        if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();

        while (t--) {
          W(i[t], a(t), o.reject);
        }

        return o.promise();
      }
    });
    var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    k.Deferred.exceptionHook = function (e, t) {
      C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }, k.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    };
    var F = k.Deferred();

    function B() {
      E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), k.ready();
    }

    k.fn.ready = function (e) {
      return F.then(e)["catch"](function (e) {
        k.readyException(e);
      }), this;
    }, k.extend({
      isReady: !1,
      readyWait: 1,
      ready: function ready(e) {
        (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [k]);
      }
    }), k.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));

    var _ = function _(e, t, n, r, i, o, a) {
      var s = 0,
          u = e.length,
          l = null == n;
      if ("object" === w(n)) for (s in i = !0, n) {
        _(e, t, s, n[s], !0, o, a);
      } else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
        return l.call(k(e), n);
      })), t)) for (; s < u; s++) {
        t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      }
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
        z = /^-ms-/,
        U = /-([a-z])/g;

    function X(e, t) {
      return t.toUpperCase();
    }

    function V(e) {
      return e.replace(z, "ms-").replace(U, X);
    }

    var G = function G(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };

    function Y() {
      this.expando = k.expando + Y.uid++;
    }

    Y.uid = 1, Y.prototype = {
      cache: function cache(e) {
        var t = e[this.expando];
        return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))), t;
      },
      set: function set(e, t, n) {
        var r,
            i = this.cache(e);
        if ("string" == typeof t) i[V(t)] = n;else for (r in t) {
          i[V(r)] = t[r];
        }
        return i;
      },
      get: function get(e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
      },
      access: function access(e, t, n) {
        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function remove(e, t) {
        var n,
            r = e[this.expando];

        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length;

            while (n--) {
              delete r[t[n]];
            }
          }

          (void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
        }
      },
      hasData: function hasData(e) {
        var t = e[this.expando];
        return void 0 !== t && !k.isEmptyObject(t);
      }
    };
    var Q = new Y(),
        J = new Y(),
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function ee(e, t, n) {
      var r, i;
      if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
        try {
          n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i);
        } catch (e) {}

        J.set(e, t, n);
      } else n = void 0;
      return n;
    }

    k.extend({
      hasData: function hasData(e) {
        return J.hasData(e) || Q.hasData(e);
      },
      data: function data(e, t, n) {
        return J.access(e, t, n);
      },
      removeData: function removeData(e, t) {
        J.remove(e, t);
      },
      _data: function _data(e, t, n) {
        return Q.access(e, t, n);
      },
      _removeData: function _removeData(e, t) {
        Q.remove(e, t);
      }
    }), k.fn.extend({
      data: function data(n, e) {
        var t,
            r,
            i,
            o = this[0],
            a = o && o.attributes;

        if (void 0 === n) {
          if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
            t = a.length;

            while (t--) {
              a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), ee(o, r, i[r]));
            }

            Q.set(o, "hasDataAttrs", !0);
          }

          return i;
        }

        return "object" == _typeof(n) ? this.each(function () {
          J.set(this, n);
        }) : _(this, function (e) {
          var t;
          if (o && void 0 === e) return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
          this.each(function () {
            J.set(this, n, e);
          });
        }, null, e, 1 < arguments.length, null, !0);
      },
      removeData: function removeData(e) {
        return this.each(function () {
          J.remove(this, e);
        });
      }
    }), k.extend({
      queue: function queue(e, t, n) {
        var r;
        if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)), r || [];
      },
      dequeue: function dequeue(e, t) {
        t = t || "fx";

        var n = k.queue(e, t),
            r = n.length,
            i = n.shift(),
            o = k._queueHooks(e, t);

        "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
          k.dequeue(e, t);
        }, o)), !r && o && o.empty.fire();
      },
      _queueHooks: function _queueHooks(e, t) {
        var n = t + "queueHooks";
        return Q.get(e, n) || Q.access(e, n, {
          empty: k.Callbacks("once memory").add(function () {
            Q.remove(e, [t + "queue", n]);
          })
        });
      }
    }), k.fn.extend({
      queue: function queue(t, n) {
        var e = 2;
        return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function () {
          var e = k.queue(this, t, n);
          k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t);
        });
      },
      dequeue: function dequeue(e) {
        return this.each(function () {
          k.dequeue(this, e);
        });
      },
      clearQueue: function clearQueue(e) {
        return this.queue(e || "fx", []);
      },
      promise: function promise(e, t) {
        var n,
            r = 1,
            i = k.Deferred(),
            o = this,
            a = this.length,
            s = function s() {
          --r || i.resolveWith(o, [o]);
        };

        "string" != typeof e && (t = e, e = void 0), e = e || "fx";

        while (a--) {
          (n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
        }

        return s(), i.promise(t);
      }
    });

    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        re = ["Top", "Right", "Bottom", "Left"],
        ie = E.documentElement,
        oe = function oe(e) {
      return k.contains(e.ownerDocument, e);
    },
        ae = {
      composed: !0
    };

    ie.getRootNode && (oe = function oe(e) {
      return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument;
    });

    var se = function se(e, t) {
      return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display");
    },
        ue = function ue(e, t, n, r) {
      var i,
          o,
          a = {};

      for (o in t) {
        a[o] = e.style[o], e.style[o] = t[o];
      }

      for (o in i = n.apply(e, r || []), t) {
        e.style[o] = a[o];
      }

      return i;
    };

    function le(e, t, n, r) {
      var i,
          o,
          a = 20,
          s = r ? function () {
        return r.cur();
      } : function () {
        return k.css(e, t, "");
      },
          u = s(),
          l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
          c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t));

      if (c && c[3] !== l) {
        u /= 2, l = l || c[3], c = +u || 1;

        while (a--) {
          k.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
        }

        c *= 2, k.style(e, t, c + l), n = n || [];
      }

      return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
    }

    var ce = {};

    function fe(e, t) {
      for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) {
        (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Q.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)), u = k.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ce[s] = u)))) : "none" !== n && (l[c] = "none", Q.set(r, "display", n)));
      }

      for (c = 0; c < f; c++) {
        null != l[c] && (e[c].style.display = l[c]);
      }

      return e;
    }

    k.fn.extend({
      show: function show() {
        return fe(this, !0);
      },
      hide: function hide() {
        return fe(this);
      },
      toggle: function toggle(e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
          se(this) ? k(this).show() : k(this).hide();
        });
      }
    });
    var pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };

    function ve(e, t) {
      var n;
      return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? k.merge([e], n) : n;
    }

    function ye(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
      }
    }

    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
    var me,
        xe,
        be = /<|&#?\w+;/;

    function we(e, t, n, r, i) {
      for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
        if ((o = e[d]) || 0 === o) if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o);else if (be.test(o)) {
          a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0];

          while (c--) {
            a = a.lastChild;
          }

          k.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
        } else p.push(t.createTextNode(o));
      }

      f.textContent = "", d = 0;

      while (o = p[d++]) {
        if (r && -1 < k.inArray(o, r)) i && i.push(o);else if (l = oe(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
          c = 0;

          while (o = a[c++]) {
            he.test(o.type || "") && n.push(o);
          }
        }
      }

      return f;
    }

    me = E.createDocumentFragment().appendChild(E.createElement("div")), (xe = E.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), me.appendChild(xe), y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
    var Te = /^key/,
        Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ee = /^([^.]*)(?:\.(.+)|)/;

    function ke() {
      return !0;
    }

    function Se() {
      return !1;
    }

    function Ne(e, t) {
      return e === function () {
        try {
          return E.activeElement;
        } catch (e) {}
      }() == ("focus" === t);
    }

    function Ae(e, t, n, r, i, o) {
      var a, s;

      if ("object" == _typeof(t)) {
        for (s in "string" != typeof n && (r = r || n, n = void 0), t) {
          Ae(e, s, n, r, t[s], o);
        }

        return e;
      }

      if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se;else if (!i) return e;
      return 1 === o && (a = i, (i = function i(e) {
        return k().off(e), a.apply(this, arguments);
      }).guid = a.guid || (a.guid = k.guid++)), e.each(function () {
        k.event.add(this, t, i, r, n);
      });
    }

    function De(e, i, o) {
      o ? (Q.set(e, i, !1), k.event.add(e, i, {
        namespace: !1,
        handler: function handler(e) {
          var t,
              n,
              r = Q.get(this, i);

          if (1 & e.isTrigger && this[i]) {
            if (r.length) (k.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Q.set(this, i, r), t = o(this, i), this[i](), r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value;
          } else r.length && (Q.set(this, i, {
            value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this)
          }), e.stopImmediatePropagation());
        }
      })) : void 0 === Q.get(e, i) && k.event.add(e, i, ke);
    }

    k.event = {
      global: {},
      add: function add(t, e, n, r, i) {
        var o,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            v = Q.get(t);

        if (v) {
          n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(ie, i), n.guid || (n.guid = k.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function (e) {
            return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0;
          }), l = (e = (e || "").match(R) || [""]).length;

          while (l--) {
            d = g = (s = Ee.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({
              type: d,
              origType: g,
              data: r,
              handler: n,
              guid: n.guid,
              selector: i,
              needsContext: i && k.expr.match.needsContext.test(i),
              namespace: h.join(".")
            }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = !0);
          }
        }
      },
      remove: function remove(e, t, n, r, i) {
        var o,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            v = Q.hasData(e) && Q.get(e);

        if (v && (u = v.events)) {
          l = (t = (t || "").match(R) || [""]).length;

          while (l--) {
            if (d = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
              f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;

              while (o--) {
                c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
              }

              a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle), delete u[d]);
            } else for (d in u) {
              k.event.remove(e, d + t[l], n, r, !0);
            }
          }

          k.isEmptyObject(u) && Q.remove(e, "handle events");
        }
      },
      dispatch: function dispatch(e) {
        var t,
            n,
            r,
            i,
            o,
            a,
            s = k.event.fix(e),
            u = new Array(arguments.length),
            l = (Q.get(this, "events") || {})[s.type] || [],
            c = k.event.special[s.type] || {};

        for (u[0] = s, t = 1; t < arguments.length; t++) {
          u[t] = arguments[t];
        }

        if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
          a = k.event.handlers.call(this, s, l), t = 0;

          while ((i = a[t++]) && !s.isPropagationStopped()) {
            s.currentTarget = i.elem, n = 0;

            while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped()) {
              s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
            }
          }

          return c.postDispatch && c.postDispatch.call(this, s), s.result;
        }
      },
      handlers: function handlers(e, t) {
        var n,
            r,
            i,
            o,
            a,
            s = [],
            u = t.delegateCount,
            l = e.target;
        if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) {
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++) {
              void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length), a[i] && o.push(r);
            }

            o.length && s.push({
              elem: l,
              handlers: o
            });
          }
        }
        return l = this, u < t.length && s.push({
          elem: l,
          handlers: t.slice(u)
        }), s;
      },
      addProp: function addProp(t, e) {
        Object.defineProperty(k.Event.prototype, t, {
          enumerable: !0,
          configurable: !0,
          get: m(e) ? function () {
            if (this.originalEvent) return e(this.originalEvent);
          } : function () {
            if (this.originalEvent) return this.originalEvent[t];
          },
          set: function set(e) {
            Object.defineProperty(this, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: e
            });
          }
        });
      },
      fix: function fix(e) {
        return e[k.expando] ? e : new k.Event(e);
      },
      special: {
        load: {
          noBubble: !0
        },
        click: {
          setup: function setup(e) {
            var t = this || e;
            return pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke), !1;
          },
          trigger: function trigger(e) {
            var t = this || e;
            return pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0;
          },
          _default: function _default(e) {
            var t = e.target;
            return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a");
          }
        },
        beforeunload: {
          postDispatch: function postDispatch(e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
          }
        }
      }
    }, k.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }, k.Event = function (e, t) {
      if (!(this instanceof k.Event)) return new k.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0;
    }, k.Event.prototype = {
      constructor: k.Event,
      isDefaultPrevented: Se,
      isPropagationStopped: Se,
      isImmediatePropagationStopped: Se,
      isSimulated: !1,
      preventDefault: function preventDefault() {
        var e = this.originalEvent;
        this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function stopPropagation() {
        var e = this.originalEvent;
        this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function stopImmediatePropagation() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
      }
    }, k.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      "char": !0,
      code: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function which(e) {
        var t = e.button;
        return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
      }
    }, k.event.addProp), k.each({
      focus: "focusin",
      blur: "focusout"
    }, function (e, t) {
      k.event.special[e] = {
        setup: function setup() {
          return De(this, e, Ne), !1;
        },
        trigger: function trigger() {
          return De(this, e), !0;
        },
        delegateType: t
      };
    }), k.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function (e, i) {
      k.event.special[e] = {
        delegateType: i,
        bindType: i,
        handle: function handle(e) {
          var t,
              n = e.relatedTarget,
              r = e.handleObj;
          return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
        }
      };
    }), k.fn.extend({
      on: function on(e, t, n, r) {
        return Ae(this, e, t, n, r);
      },
      one: function one(e, t, n, r) {
        return Ae(this, e, t, n, r, 1);
      },
      off: function off(e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

        if ("object" == _typeof(e)) {
          for (i in e) {
            this.off(i, t, e[i]);
          }

          return this;
        }

        return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function () {
          k.event.remove(this, e, n, t);
        });
      }
    });
    var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        qe = /<script|<style|<link/i,
        Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
        He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Oe(e, t) {
      return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e;
    }

    function Pe(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }

    function Re(e) {
      return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
    }

    function Me(e, t) {
      var n, r, i, o, a, s, u, l;

      if (1 === t.nodeType) {
        if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events)) for (i in delete a.handle, a.events = {}, l) {
          for (n = 0, r = l[i].length; n < r; n++) {
            k.event.add(t, i, l[i][n]);
          }
        }
        J.hasData(e) && (s = J.access(e), u = k.extend({}, s), J.set(t, u));
      }
    }

    function Ie(n, r, i, o) {
      r = g.apply([], r);
      var e,
          t,
          a,
          s,
          u,
          l,
          c = 0,
          f = n.length,
          p = f - 1,
          d = r[0],
          h = m(d);
      if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d)) return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o);
      });

      if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
        for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++) {
          u = e, c !== p && (u = k.clone(u, !0, !0), s && k.merge(a, ve(u, "script"))), i.call(n[c], u, c);
        }

        if (s) for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++) {
          u = a[c], he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {
            nonce: u.nonce || u.getAttribute("nonce")
          }) : b(u.textContent.replace(He, ""), u, l));
        }
      }

      return n;
    }

    function We(e, t, n) {
      for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
        n || 1 !== r.nodeType || k.cleanData(ve(r)), r.parentNode && (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
      }

      return e;
    }

    k.extend({
      htmlPrefilter: function htmlPrefilter(e) {
        return e.replace(je, "<$1></$2>");
      },
      clone: function clone(e, t, n) {
        var r,
            i,
            o,
            a,
            s,
            u,
            l,
            c = e.cloneNode(!0),
            f = oe(e);
        if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) {
          s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
        }
        if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) {
          Me(o[r], a[r]);
        } else Me(e, c);
        return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
      },
      cleanData: function cleanData(e) {
        for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++) {
          if (G(n)) {
            if (t = n[Q.expando]) {
              if (t.events) for (r in t.events) {
                i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
              }
              n[Q.expando] = void 0;
            }

            n[J.expando] && (n[J.expando] = void 0);
          }
        }
      }
    }), k.fn.extend({
      detach: function detach(e) {
        return We(this, e, !0);
      },
      remove: function remove(e) {
        return We(this, e);
      },
      text: function text(e) {
        return _(this, function (e) {
          return void 0 === e ? k.text(this) : this.empty().each(function () {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
          });
        }, null, e, arguments.length);
      },
      append: function append() {
        return Ie(this, arguments, function (e) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e);
        });
      },
      prepend: function prepend() {
        return Ie(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = Oe(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function before() {
        return Ie(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function after() {
        return Ie(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function empty() {
        for (var e, t = 0; null != (e = this[t]); t++) {
          1 === e.nodeType && (k.cleanData(ve(e, !1)), e.textContent = "");
        }

        return this;
      },
      clone: function clone(e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function () {
          return k.clone(this, e, t);
        });
      },
      html: function html(e) {
        return _(this, function (e) {
          var t = this[0] || {},
              n = 0,
              r = this.length;
          if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

          if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = k.htmlPrefilter(e);

            try {
              for (; n < r; n++) {
                1 === (t = this[n] || {}).nodeType && (k.cleanData(ve(t, !1)), t.innerHTML = e);
              }

              t = 0;
            } catch (e) {}
          }

          t && this.empty().append(e);
        }, null, e, arguments.length);
      },
      replaceWith: function replaceWith() {
        var n = [];
        return Ie(this, arguments, function (e) {
          var t = this.parentNode;
          k.inArray(this, n) < 0 && (k.cleanData(ve(this)), t && t.replaceChild(e, this));
        }, n);
      }
    }), k.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function (e, a) {
      k.fn[e] = function (e) {
        for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) {
          t = o === i ? this : this.clone(!0), k(r[o])[a](t), u.apply(n, t.get());
        }

        return this.pushStack(n);
      };
    });

    var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        Fe = function Fe(e) {
      var t = e.ownerDocument.defaultView;
      return t && t.opener || (t = C), t.getComputedStyle(e);
    },
        Be = new RegExp(re.join("|"), "i");

    function _e(e, t, n) {
      var r,
          i,
          o,
          a,
          s = e.style;
      return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)), !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
    }

    function ze(e, t) {
      return {
        get: function get() {
          if (!e()) return (this.get = t).apply(this, arguments);
          delete this.get;
        }
      };
    }

    !function () {
      function e() {
        if (u) {
          s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(s).appendChild(u);
          var e = C.getComputedStyle(u);
          n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", i = 12 === t(u.offsetWidth / 3), ie.removeChild(s), u = null;
        }
      }

      function t(e) {
        return Math.round(parseFloat(e));
      }

      var n,
          r,
          i,
          o,
          a,
          s = E.createElement("div"),
          u = E.createElement("div");
      u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(y, {
        boxSizingReliable: function boxSizingReliable() {
          return e(), r;
        },
        pixelBoxStyles: function pixelBoxStyles() {
          return e(), o;
        },
        pixelPosition: function pixelPosition() {
          return e(), n;
        },
        reliableMarginLeft: function reliableMarginLeft() {
          return e(), a;
        },
        scrollboxSize: function scrollboxSize() {
          return e(), i;
        }
      }));
    }();
    var Ue = ["Webkit", "Moz", "ms"],
        Xe = E.createElement("div").style,
        Ve = {};

    function Ge(e) {
      var t = k.cssProps[e] || Ve[e];
      return t || (e in Xe ? e : Ve[e] = function (e) {
        var t = e[0].toUpperCase() + e.slice(1),
            n = Ue.length;

        while (n--) {
          if ((e = Ue[n] + t) in Xe) return e;
        }
      }(e) || e);
    }

    var Ye = /^(none|table(?!-c[ea]).+)/,
        Qe = /^--/,
        Je = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
        Ke = {
      letterSpacing: "0",
      fontWeight: "400"
    };

    function Ze(e, t, n) {
      var r = ne.exec(t);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }

    function et(e, t, n, r, i, o) {
      var a = "width" === t ? 1 : 0,
          s = 0,
          u = 0;
      if (n === (r ? "border" : "content")) return 0;

      for (; a < 4; a += 2) {
        "margin" === n && (u += k.css(e, n + re[a], !0, i)), r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)), "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i), "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i));
      }

      return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
    }

    function tt(e, t, n) {
      var r = Fe(e),
          i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r),
          o = i,
          a = _e(e, t, r),
          s = "offset" + t[0].toUpperCase() + t.slice(1);

      if ($e.test(a)) {
        if (!n) return a;
        a = "auto";
      }

      return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
    }

    function nt(e, t, n, r, i) {
      return new nt.prototype.init(e, t, n, r, i);
    }

    k.extend({
      cssHooks: {
        opacity: {
          get: function get(e, t) {
            if (t) {
              var n = _e(e, "opacity");

              return "" === n ? "1" : n;
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {},
      style: function style(e, t, n, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var i,
              o,
              a,
              s = V(t),
              u = Qe.test(t),
              l = e.style;
          if (u || (t = Ge(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
          "string" === (o = _typeof(n)) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
        }
      },
      css: function css(e, t, n, r) {
        var i,
            o,
            a,
            s = V(t);
        return Qe.test(t) || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = _e(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
      }
    }), k.each(["height", "width"], function (e, u) {
      k.cssHooks[u] = {
        get: function get(e, t, n) {
          if (t) return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function () {
            return tt(e, u, n);
          });
        },
        set: function set(e, t, n) {
          var r,
              i = Fe(e),
              o = !y.scrollboxSize() && "absolute" === i.position,
              a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i),
              s = n ? et(e, u, n, a, i) : 0;
          return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - .5)), s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = k.css(e, u)), Ze(0, t, s);
        }
      };
    }), k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function (e, t) {
      if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
        marginLeft: 0
      }, function () {
        return e.getBoundingClientRect().left;
      })) + "px";
    }), k.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function (i, o) {
      k.cssHooks[i + o] = {
        expand: function expand(e) {
          for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) {
            n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
          }

          return n;
        }
      }, "margin" !== i && (k.cssHooks[i + o].set = Ze);
    }), k.fn.extend({
      css: function css(e, t) {
        return _(this, function (e, t, n) {
          var r,
              i,
              o = {},
              a = 0;

          if (Array.isArray(t)) {
            for (r = Fe(e), i = t.length; a < i; a++) {
              o[t[a]] = k.css(e, t[a], !1, r);
            }

            return o;
          }

          return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
        }, e, t, 1 < arguments.length);
      }
    }), ((k.Tween = nt).prototype = {
      constructor: nt,
      init: function init(e, t, n, r, i, o) {
        this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px");
      },
      cur: function cur() {
        var e = nt.propHooks[this.prop];
        return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
      },
      run: function run(e) {
        var t,
            n = nt.propHooks[this.prop];
        return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this;
      }
    }).init.prototype = nt.prototype, (nt.propHooks = {
      _default: {
        get: function get(e) {
          var t;
          return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
        },
        set: function set(e) {
          k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit);
        }
      }
    }).scrollTop = nt.propHooks.scrollLeft = {
      set: function set(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      }
    }, k.easing = {
      linear: function linear(e) {
        return e;
      },
      swing: function swing(e) {
        return .5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing"
    }, k.fx = nt.prototype.init, k.fx.step = {};
    var rt,
        it,
        ot,
        at,
        st = /^(?:toggle|show|hide)$/,
        ut = /queueHooks$/;

    function lt() {
      it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval), k.fx.tick());
    }

    function ct() {
      return C.setTimeout(function () {
        rt = void 0;
      }), rt = Date.now();
    }

    function ft(e, t) {
      var n,
          r = 0,
          i = {
        height: e
      };

      for (t = t ? 1 : 0; r < 4; r += 2 - t) {
        i["margin" + (n = re[r])] = i["padding" + n] = e;
      }

      return t && (i.opacity = i.width = e), i;
    }

    function pt(e, t, n) {
      for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
        if (r = i[o].call(n, t, e)) return r;
      }
    }

    function dt(o, e, t) {
      var n,
          a,
          r = 0,
          i = dt.prefilters.length,
          s = k.Deferred().always(function () {
        delete u.elem;
      }),
          u = function u() {
        if (a) return !1;

        for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) {
          l.tweens[r].run(n);
        }

        return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
      },
          l = s.promise({
        elem: o,
        props: k.extend({}, e),
        opts: k.extend(!0, {
          specialEasing: {},
          easing: k.easing._default
        }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: rt || ct(),
        duration: t.duration,
        tweens: [],
        createTween: function createTween(e, t) {
          var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
          return l.tweens.push(n), n;
        },
        stop: function stop(e) {
          var t = 0,
              n = e ? l.tweens.length : 0;
          if (a) return this;

          for (a = !0; t < n; t++) {
            l.tweens[t].run(1);
          }

          return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
        }
      }),
          c = l.props;

      for (!function (e, t) {
        var n, r, i, o, a;

        for (n in e) {
          if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) {
            (n in e) || (e[n] = o[n], t[n] = i);
          } else t[r] = i;
        }
      }(c, l.opts.specialEasing); r < i; r++) {
        if (n = dt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
      }

      return k.map(c, pt, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, {
        elem: o,
        anim: l,
        queue: l.opts.queue
      })), l;
    }

    k.Animation = k.extend(dt, {
      tweeners: {
        "*": [function (e, t) {
          var n = this.createTween(e, t);
          return le(n.elem, e, ne.exec(t), n), n;
        }]
      },
      tweener: function tweener(e, t) {
        m(e) ? (t = e, e = ["*"]) : e = e.match(R);

        for (var n, r = 0, i = e.length; r < i; r++) {
          n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t);
        }
      },
      prefilters: [function (e, t, n) {
        var r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && se(e),
            v = Q.get(e, "fxshow");

        for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
          a.unqueued || s();
        }), a.unqueued++, p.always(function () {
          p.always(function () {
            a.unqueued--, k.queue(e, "fx").length || a.empty.fire();
          });
        })), t) {
          if (i = t[r], st.test(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }

            d[r] = v && v[r] || k.style(e, r);
          }
        }

        if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Q.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = k.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function () {
          h.display = l;
        }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
          h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
        })), u = !1, d) {
          u || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", {
            display: l
          }), o && (v.hidden = !g), g && fe([e], !0), p.done(function () {
            for (r in g || fe([e]), Q.remove(e, "fxshow"), d) {
              k.style(e, r, d[r]);
            }
          })), u = pt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
        }
      }],
      prefilter: function prefilter(e, t) {
        t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
      }
    }), k.speed = function (e, t, n) {
      var r = e && "object" == _typeof(e) ? k.extend({}, e) : {
        complete: n || !n && t || m(e) && e,
        duration: e,
        easing: n && t || t && !m(t) && t
      };
      return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
        m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue);
      }, r;
    }, k.fn.extend({
      fadeTo: function fadeTo(e, t, n, r) {
        return this.filter(se).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, n, r);
      },
      animate: function animate(t, e, n, r) {
        var i = k.isEmptyObject(t),
            o = k.speed(e, n, r),
            a = function a() {
          var e = dt(this, k.extend({}, t), o);
          (i || Q.get(this, "finish")) && e.stop(!0);
        };

        return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
      },
      stop: function stop(i, e, o) {
        var a = function a(e) {
          var t = e.stop;
          delete e.stop, t(o);
        };

        return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function () {
          var e = !0,
              t = null != i && i + "queueHooks",
              n = k.timers,
              r = Q.get(this);
          if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) {
            r[t] && r[t].stop && ut.test(t) && a(r[t]);
          }

          for (t = n.length; t--;) {
            n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
          }

          !e && o || k.dequeue(this, i);
        });
      },
      finish: function finish(a) {
        return !1 !== a && (a = a || "fx"), this.each(function () {
          var e,
              t = Q.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = k.timers,
              o = n ? n.length : 0;

          for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) {
            i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
          }

          for (e = 0; e < o; e++) {
            n[e] && n[e].finish && n[e].finish.call(this);
          }

          delete t.finish;
        });
      }
    }), k.each(["toggle", "show", "hide"], function (e, r) {
      var i = k.fn[r];

      k.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n);
      };
    }), k.each({
      slideDown: ft("show"),
      slideUp: ft("hide"),
      slideToggle: ft("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function (e, r) {
      k.fn[e] = function (e, t, n) {
        return this.animate(r, e, t, n);
      };
    }), k.timers = [], k.fx.tick = function () {
      var e,
          t = 0,
          n = k.timers;

      for (rt = Date.now(); t < n.length; t++) {
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      }

      n.length || k.fx.stop(), rt = void 0;
    }, k.fx.timer = function (e) {
      k.timers.push(e), k.fx.start();
    }, k.fx.interval = 13, k.fx.start = function () {
      it || (it = !0, lt());
    }, k.fx.stop = function () {
      it = null;
    }, k.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, k.fn.delay = function (r, e) {
      return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
        var n = C.setTimeout(e, r);

        t.stop = function () {
          C.clearTimeout(n);
        };
      });
    }, ot = E.createElement("input"), at = E.createElement("select").appendChild(E.createElement("option")), ot.type = "checkbox", y.checkOn = "" !== ot.value, y.optSelected = at.selected, (ot = E.createElement("input")).value = "t", ot.type = "radio", y.radioValue = "t" === ot.value;
    var ht,
        gt = k.expr.attrHandle;
    k.fn.extend({
      attr: function attr(e, t) {
        return _(this, k.attr, e, t, 1 < arguments.length);
      },
      removeAttr: function removeAttr(e) {
        return this.each(function () {
          k.removeAttr(this, e);
        });
      }
    }), k.extend({
      attr: function attr(e, t, n) {
        var r,
            i,
            o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r);
      },
      attrHooks: {
        type: {
          set: function set(e, t) {
            if (!y.radioValue && "radio" === t && A(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          }
        }
      },
      removeAttr: function removeAttr(e, t) {
        var n,
            r = 0,
            i = t && t.match(R);
        if (i && 1 === e.nodeType) while (n = i[r++]) {
          e.removeAttribute(n);
        }
      }
    }), ht = {
      set: function set(e, t, n) {
        return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
      }
    }, k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = gt[t] || k.find.attr;

      gt[t] = function (e, t, n) {
        var r,
            i,
            o = t.toLowerCase();
        return n || (i = gt[o], gt[o] = r, r = null != a(e, t, n) ? o : null, gt[o] = i), r;
      };
    });
    var vt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;

    function mt(e) {
      return (e.match(R) || []).join(" ");
    }

    function xt(e) {
      return e.getAttribute && e.getAttribute("class") || "";
    }

    function bt(e) {
      return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || [];
    }

    k.fn.extend({
      prop: function prop(e, t) {
        return _(this, k.prop, e, t, 1 < arguments.length);
      },
      removeProp: function removeProp(e) {
        return this.each(function () {
          delete this[k.propFix[e] || e];
        });
      }
    }), k.extend({
      prop: function prop(e, t, n) {
        var r,
            i,
            o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
      },
      propHooks: {
        tabIndex: {
          get: function get(e) {
            var t = k.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
          }
        }
      },
      propFix: {
        "for": "htmlFor",
        "class": "className"
      }
    }), y.optSelected || (k.propHooks.selected = {
      get: function get(e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null;
      },
      set: function set(e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
      }
    }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      k.propFix[this.toLowerCase()] = this;
    }), k.fn.extend({
      addClass: function addClass(t) {
        var e,
            n,
            r,
            i,
            o,
            a,
            s,
            u = 0;
        if (m(t)) return this.each(function (e) {
          k(this).addClass(t.call(this, e, xt(this)));
        });
        if ((e = bt(t)).length) while (n = this[u++]) {
          if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
            a = 0;

            while (o = e[a++]) {
              r.indexOf(" " + o + " ") < 0 && (r += o + " ");
            }

            i !== (s = mt(r)) && n.setAttribute("class", s);
          }
        }
        return this;
      },
      removeClass: function removeClass(t) {
        var e,
            n,
            r,
            i,
            o,
            a,
            s,
            u = 0;
        if (m(t)) return this.each(function (e) {
          k(this).removeClass(t.call(this, e, xt(this)));
        });
        if (!arguments.length) return this.attr("class", "");
        if ((e = bt(t)).length) while (n = this[u++]) {
          if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
            a = 0;

            while (o = e[a++]) {
              while (-1 < r.indexOf(" " + o + " ")) {
                r = r.replace(" " + o + " ", " ");
              }
            }

            i !== (s = mt(r)) && n.setAttribute("class", s);
          }
        }
        return this;
      },
      toggleClass: function toggleClass(i, t) {
        var o = _typeof(i),
            a = "string" === o || Array.isArray(i);

        return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
          k(this).toggleClass(i.call(this, e, xt(this), t), t);
        }) : this.each(function () {
          var e, t, n, r;

          if (a) {
            t = 0, n = k(this), r = bt(i);

            while (e = r[t++]) {
              n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
            }
          } else void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""));
        });
      },
      hasClass: function hasClass(e) {
        var t,
            n,
            r = 0;
        t = " " + e + " ";

        while (n = this[r++]) {
          if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t)) return !0;
        }

        return !1;
      }
    });
    var wt = /\r/g;
    k.fn.extend({
      val: function val(n) {
        var r,
            e,
            i,
            t = this[0];
        return arguments.length ? (i = m(n), this.each(function (e) {
          var t;
          1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function (e) {
            return null == e ? "" : e + "";
          })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
        })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0;
      }
    }), k.extend({
      valHooks: {
        option: {
          get: function get(e) {
            var t = k.find.attr(e, "value");
            return null != t ? t : mt(k.text(e));
          }
        },
        select: {
          get: function get(e) {
            var t,
                n,
                r,
                i = e.options,
                o = e.selectedIndex,
                a = "select-one" === e.type,
                s = a ? null : [],
                u = a ? o + 1 : i.length;

            for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
              if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                if (t = k(n).val(), a) return t;
                s.push(t);
              }
            }

            return s;
          },
          set: function set(e, t) {
            var n,
                r,
                i = e.options,
                o = k.makeArray(t),
                a = i.length;

            while (a--) {
              ((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
            }

            return n || (e.selectedIndex = -1), o;
          }
        }
      }
    }), k.each(["radio", "checkbox"], function () {
      k.valHooks[this] = {
        set: function set(e, t) {
          if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t);
        }
      }, y.checkOn || (k.valHooks[this].get = function (e) {
        return null === e.getAttribute("value") ? "on" : e.value;
      });
    }), y.focusin = "onfocusin" in C;

    var Tt = /^(?:focusinfocus|focusoutblur)$/,
        Ct = function Ct(e) {
      e.stopPropagation();
    };

    k.extend(k.event, {
      trigger: function trigger(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l,
            c,
            f,
            p = [n || E],
            d = v.call(e, "type") ? e.type : e,
            h = v.call(e, "namespace") ? e.namespace.split(".") : [];

        if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[k.expando] ? e : new k.Event(d, "object" == _typeof(e) && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
          if (!r && !c.noBubble && !x(n)) {
            for (s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) {
              p.push(o), a = o;
            }

            a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
          }

          i = 0;

          while ((o = p[i++]) && !e.isPropagationStopped()) {
            f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
          }

          return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), k.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Ct), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Ct), k.event.triggered = void 0, a && (n[u] = a)), e.result;
        }
      },
      simulate: function simulate(e, t, n) {
        var r = k.extend(new k.Event(), n, {
          type: e,
          isSimulated: !0
        });
        k.event.trigger(r, null, t);
      }
    }), k.fn.extend({
      trigger: function trigger(e, t) {
        return this.each(function () {
          k.event.trigger(e, t, this);
        });
      },
      triggerHandler: function triggerHandler(e, t) {
        var n = this[0];
        if (n) return k.event.trigger(e, t, n, !0);
      }
    }), y.focusin || k.each({
      focus: "focusin",
      blur: "focusout"
    }, function (n, r) {
      var i = function i(e) {
        k.event.simulate(r, e.target, k.event.fix(e));
      };

      k.event.special[r] = {
        setup: function setup() {
          var e = this.ownerDocument || this,
              t = Q.access(e, r);
          t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1);
        },
        teardown: function teardown() {
          var e = this.ownerDocument || this,
              t = Q.access(e, r) - 1;
          t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0), Q.remove(e, r));
        }
      };
    });
    var Et = C.location,
        kt = Date.now(),
        St = /\?/;

    k.parseXML = function (e) {
      var t;
      if (!e || "string" != typeof e) return null;

      try {
        t = new C.DOMParser().parseFromString(e, "text/xml");
      } catch (e) {
        t = void 0;
      }

      return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t;
    };

    var Nt = /\[\]$/,
        At = /\r?\n/g,
        Dt = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;

    function qt(n, e, r, i) {
      var t;
      if (Array.isArray(e)) k.each(e, function (e, t) {
        r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, r, i);
      });else if (r || "object" !== w(e)) i(n, e);else for (t in e) {
        qt(n + "[" + t + "]", e[t], r, i);
      }
    }

    k.param = function (e, t) {
      var n,
          r = [],
          i = function i(e, t) {
        var n = m(t) ? t() : t;
        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };

      if (null == e) return "";
      if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function () {
        i(this.name, this.value);
      });else for (n in e) {
        qt(n, e[n], t, i);
      }
      return r.join("&");
    }, k.fn.extend({
      serialize: function serialize() {
        return k.param(this.serializeArray());
      },
      serializeArray: function serializeArray() {
        return this.map(function () {
          var e = k.prop(this, "elements");
          return e ? k.makeArray(e) : this;
        }).filter(function () {
          var e = this.type;
          return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e));
        }).map(function (e, t) {
          var n = k(this).val();
          return null == n ? null : Array.isArray(n) ? k.map(n, function (e) {
            return {
              name: t.name,
              value: e.replace(At, "\r\n")
            };
          }) : {
            name: t.name,
            value: n.replace(At, "\r\n")
          };
        }).get();
      }
    });
    var Lt = /%20/g,
        Ht = /#.*$/,
        Ot = /([?&])_=[^&]*/,
        Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Rt = /^(?:GET|HEAD)$/,
        Mt = /^\/\//,
        It = {},
        Wt = {},
        $t = "*/".concat("*"),
        Ft = E.createElement("a");

    function Bt(o) {
      return function (e, t) {
        "string" != typeof e && (t = e, e = "*");
        var n,
            r = 0,
            i = e.toLowerCase().match(R) || [];
        if (m(t)) while (n = i[r++]) {
          "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
        }
      };
    }

    function _t(t, i, o, a) {
      var s = {},
          u = t === Wt;

      function l(e) {
        var r;
        return s[e] = !0, k.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
        }), r;
      }

      return l(i.dataTypes[0]) || !s["*"] && l("*");
    }

    function zt(e, t) {
      var n,
          r,
          i = k.ajaxSettings.flatOptions || {};

      for (n in t) {
        void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
      }

      return r && k.extend(!0, e, r), e;
    }

    Ft.href = Et.href, k.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Et.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": $t,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": k.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function ajaxSetup(e, t) {
        return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e);
      },
      ajaxPrefilter: Bt(It),
      ajaxTransport: Bt(Wt),
      ajax: function ajax(e, t) {
        "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
        var c,
            f,
            p,
            n,
            d,
            r,
            h,
            g,
            i,
            o,
            v = k.ajaxSetup({}, t),
            y = v.context || v,
            m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event,
            x = k.Deferred(),
            b = k.Callbacks("once memory"),
            w = v.statusCode || {},
            a = {},
            s = {},
            u = "canceled",
            T = {
          readyState: 0,
          getResponseHeader: function getResponseHeader(e) {
            var t;

            if (h) {
              if (!n) {
                n = {};

                while (t = Pt.exec(p)) {
                  n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                }
              }

              t = n[e.toLowerCase() + " "];
            }

            return null == t ? null : t.join(", ");
          },
          getAllResponseHeaders: function getAllResponseHeaders() {
            return h ? p : null;
          },
          setRequestHeader: function setRequestHeader(e, t) {
            return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
          },
          overrideMimeType: function overrideMimeType(e) {
            return null == h && (v.mimeType = e), this;
          },
          statusCode: function statusCode(e) {
            var t;
            if (e) if (h) T.always(e[T.status]);else for (t in e) {
              w[t] = [w[t], e[t]];
            }
            return this;
          },
          abort: function abort(e) {
            var t = e || u;
            return c && c.abort(t), l(0, t), this;
          }
        };

        if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""], null == v.crossDomain) {
          r = E.createElement("a");

          try {
            r.href = v.url, r.href = r.href, v.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host;
          } catch (e) {
            v.crossDomain = !0;
          }
        }

        if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)), _t(It, v, t, T), h) return T;

        for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Rt.test(v.type), f = v.url.replace(Ht, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Ot, "$1"), o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o), v.url = f + o), v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]), v.headers) {
          T.setRequestHeader(i, v.headers[i]);
        }

        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();

        if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = _t(Wt, v, t, T)) {
          if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
          v.async && 0 < v.timeout && (d = C.setTimeout(function () {
            T.abort("timeout");
          }, v.timeout));

          try {
            h = !1, c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");

        function l(e, t, n, r) {
          var i,
              o,
              a,
              s,
              u,
              l = t;
          h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
            var r,
                i,
                o,
                a,
                s = e.contents,
                u = e.dataTypes;

            while ("*" === u[0]) {
              u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            }

            if (r) for (i in s) {
              if (s[i] && s[i].test(r)) {
                u.unshift(i);
                break;
              }
            }
            if (u[0] in n) o = u[0];else {
              for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                  o = i;
                  break;
                }

                a || (a = i);
              }

              o = o || a;
            }
            if (o) return o !== u[0] && u.unshift(o), n[o];
          }(v, T, n)), s = function (e, t, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
            if (c[1]) for (a in e.converters) {
              l[a.toLowerCase()] = e.converters[a];
            }
            o = c.shift();

            while (o) {
              if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
                if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
                  if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                    break;
                  }
                }
                if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
                  t = a(t);
                } catch (e) {
                  return {
                    state: "parsererror",
                    error: a ? e : "No conversion from " + u + " to " + o
                  };
                }
              }
            }

            return {
              state: "success",
              data: t
            };
          }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --k.active || k.event.trigger("ajaxStop")));
        }

        return T;
      },
      getJSON: function getJSON(e, t, n) {
        return k.get(e, t, n, "json");
      },
      getScript: function getScript(e, t) {
        return k.get(e, void 0, t, "script");
      }
    }), k.each(["get", "post"], function (e, i) {
      k[i] = function (e, t, n, r) {
        return m(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({
          url: e,
          type: i,
          dataType: r,
          data: t,
          success: n
        }, k.isPlainObject(e) && e));
      };
    }), k._evalUrl = function (e, t) {
      return k.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: {
          "text script": function textScript() {}
        },
        dataFilter: function dataFilter(e) {
          k.globalEval(e, t);
        }
      });
    }, k.fn.extend({
      wrapAll: function wrapAll(e) {
        var t;
        return this[0] && (m(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          var e = this;

          while (e.firstElementChild) {
            e = e.firstElementChild;
          }

          return e;
        }).append(this)), this;
      },
      wrapInner: function wrapInner(n) {
        return m(n) ? this.each(function (e) {
          k(this).wrapInner(n.call(this, e));
        }) : this.each(function () {
          var e = k(this),
              t = e.contents();
          t.length ? t.wrapAll(n) : e.append(n);
        });
      },
      wrap: function wrap(t) {
        var n = m(t);
        return this.each(function (e) {
          k(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function unwrap(e) {
        return this.parent(e).not("body").each(function () {
          k(this).replaceWith(this.childNodes);
        }), this;
      }
    }), k.expr.pseudos.hidden = function (e) {
      return !k.expr.pseudos.visible(e);
    }, k.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, k.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    };
    var Ut = {
      0: 200,
      1223: 204
    },
        Xt = k.ajaxSettings.xhr();
    y.cors = !!Xt && "withCredentials" in Xt, y.ajax = Xt = !!Xt, k.ajaxTransport(function (i) {
      var _o, a;

      if (y.cors || Xt && !i.crossDomain) return {
        send: function send(e, t) {
          var n,
              r = i.xhr();
          if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) {
            r[n] = i.xhrFields[n];
          }

          for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) {
            r.setRequestHeader(n, e[n]);
          }

          _o = function o(e) {
            return function () {
              _o && (_o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                binary: r.response
              } : {
                text: r.responseText
              }, r.getAllResponseHeaders()));
            };
          }, r.onload = _o(), a = r.onerror = r.ontimeout = _o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
            4 === r.readyState && C.setTimeout(function () {
              _o && a();
            });
          }, _o = _o("abort");

          try {
            r.send(i.hasContent && i.data || null);
          } catch (e) {
            if (_o) throw e;
          }
        },
        abort: function abort() {
          _o && _o();
        }
      };
    }), k.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }), k.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function textScript(e) {
          return k.globalEval(e), e;
        }
      }
    }), k.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), k.ajaxTransport("script", function (n) {
      var r, _i;

      if (n.crossDomain || n.scriptAttrs) return {
        send: function send(e, t) {
          r = k("<script>").attr(n.scriptAttrs || {}).prop({
            charset: n.scriptCharset,
            src: n.url
          }).on("load error", _i = function i(e) {
            r.remove(), _i = null, e && t("error" === e.type ? 404 : 200, e.type);
          }), E.head.appendChild(r[0]);
        },
        abort: function abort() {
          _i && _i();
        }
      };
    });
    var Vt,
        Gt = [],
        Yt = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function jsonpCallback() {
        var e = Gt.pop() || k.expando + "_" + kt++;
        return this[e] = !0, e;
      }
    }), k.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
          i,
          o,
          a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
      if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
        return o || k.error(r + " was not called"), o[0];
      }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
        o = arguments;
      }, n.always(function () {
        void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
      }), "script";
    }), y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), k.parseHTML = function (e, t, n) {
      return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes)));
      var r, i, o;
    }, k.fn.load = function (e, t, n) {
      var r,
          i,
          o,
          a = this,
          s = e.indexOf(" ");
      return -1 < s && (r = mt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), 0 < a.length && k.ajax({
        url: e,
        type: i || "GET",
        dataType: "html",
        data: t
      }).done(function (e) {
        o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e);
      }).always(n && function (e, t) {
        a.each(function () {
          n.apply(this, o || [e.responseText, t, e]);
        });
      }), this;
    }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
      k.fn[t] = function (e) {
        return this.on(t, e);
      };
    }), k.expr.pseudos.animated = function (t) {
      return k.grep(k.timers, function (e) {
        return t === e.elem;
      }).length;
    }, k.offset = {
      setOffset: function setOffset(e, t, n) {
        var r,
            i,
            o,
            a,
            s,
            u,
            l = k.css(e, "position"),
            c = k(e),
            f = {};
        "static" === l && (e.style.position = "relative"), s = c.offset(), o = k.css(e, "top"), u = k.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
      }
    }, k.fn.extend({
      offset: function offset(t) {
        if (arguments.length) return void 0 === t ? this : this.each(function (e) {
          k.offset.setOffset(this, t, e);
        });
        var e,
            n,
            r = this[0];
        return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
          top: e.top + n.pageYOffset,
          left: e.left + n.pageXOffset
        }) : {
          top: 0,
          left: 0
        } : void 0;
      },
      position: function position() {
        if (this[0]) {
          var e,
              t,
              n,
              r = this[0],
              i = {
            top: 0,
            left: 0
          };
          if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();else {
            t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;

            while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position")) {
              e = e.parentNode;
            }

            e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(e, "borderLeftWidth", !0));
          }
          return {
            top: t.top - i.top - k.css(r, "marginTop", !0),
            left: t.left - i.left - k.css(r, "marginLeft", !0)
          };
        }
      },
      offsetParent: function offsetParent() {
        return this.map(function () {
          var e = this.offsetParent;

          while (e && "static" === k.css(e, "position")) {
            e = e.offsetParent;
          }

          return e || ie;
        });
      }
    }), k.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function (t, i) {
      var o = "pageYOffset" === i;

      k.fn[t] = function (e) {
        return _(this, function (e, t, n) {
          var r;
          if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
          r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
        }, t, e, arguments.length);
      };
    }), k.each(["top", "left"], function (e, n) {
      k.cssHooks[n] = ze(y.pixelPosition, function (e, t) {
        if (t) return t = _e(e, n), $e.test(t) ? k(e).position()[n] + "px" : t;
      });
    }), k.each({
      Height: "height",
      Width: "width"
    }, function (a, s) {
      k.each({
        padding: "inner" + a,
        content: s,
        "": "outer" + a
      }, function (r, o) {
        k.fn[o] = function (e, t) {
          var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
          return _(this, function (e, t, n) {
            var r;
            return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i);
          }, s, n ? e : void 0, n);
        };
      });
    }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
      k.fn[n] = function (e, t) {
        return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
      };
    }), k.fn.extend({
      hover: function hover(e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      }
    }), k.fn.extend({
      bind: function bind(e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function unbind(e, t) {
        return this.off(e, null, t);
      },
      delegate: function delegate(e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function undelegate(e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
      }
    }), k.proxy = function (e, t) {
      var n, r, i;
      if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function i() {
        return e.apply(t || this, r.concat(s.call(arguments)));
      }).guid = e.guid = e.guid || k.guid++, i;
    }, k.holdReady = function (e) {
      e ? k.readyWait++ : k.ready(!0);
    }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = A, k.isFunction = m, k.isWindow = x, k.camelCase = V, k.type = w, k.now = Date.now, k.isNumeric = function (e) {
      var t = k.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
      return k;
    });
    var Qt = C.jQuery,
        Jt = C.$;
    return k.noConflict = function (e) {
      return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k;
    }, e || (C.jQuery = C.$ = k), k;
  }); // Загрузка шрифтов

  var head = window.document.getElementsByTagName('head')[0];

  function includeCSS(aFile, aRel, as) {
    var style = window.document.createElement('link');
    style.href = aFile;
    style.rel = aRel || 'stylesheet';

    if (aFile === 'https://fonts.gstatic.com') {
      style.rel = aRel || 'preconnect';
    }

    head.appendChild(style);
  }

  includeCSS('https://fonts.gstatic.com');
  includeCSS('https://fonts.googleapis.com/css2?family=Rubik:wght@500;700&display=swap');
  includeCSS('https://fonts.gstatic.com');
  includeCSS('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400&display=swap'); // ==========
  // // Ленивая загрузка
  // const images = document.querySelectorAll('img');
  // const options = {
  // 	root : null,
  // 	rootMargin : '0px',
  // 	threshold : 0.1
  // }
  // function handleImg(myImg, observer) {
  // 	myImg.forEach(myImgSingle => {
  // 		// console.log(myImgSingle.intersectionRatio);
  // 		if (myImgSingle.intersectionRatio > 0) {
  // 			loadImage(myImgSingle.target);
  // 		}
  // 	})
  // }
  // function loadImage(image) {
  // 	image.src = image.getAttribute('data-src');
  // }
  // const observer = new IntersectionObserver(handleImg, options);
  // images.forEach(img => {
  // 	observer.observe(img);
  // });
  // ==========

  var animItems = Array.prototype.slice.call(document.querySelectorAll('._anim-items'));

  if (animItems.length > 0) {
    var animOnScroll = function animOnScroll() {
      for (var index = 0; index < animItems.length; index++) {
        var animItem = animItems[index];
        var animItemHeight = animItem.offsetHeight;
        var animItemOffset = offset(animItem).top;
        var animStart = 4;
        var animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
          animItem.classList.add('_active');
        } else {
          if (!animItem.classList.contains('_anim-no-hide')) {
            animItem.classList.remove('_active');
          }
        }
      }
    };

    var offset = function offset(el) {
      var rect = el.getBoundingClientRect();
      var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
      };
    };

    window.addEventListener('scroll', animOnScroll);
    setTimeout(function () {
      animOnScroll();
    }, 300);
  }

  !function (t, e) {
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).IMask = {});
  }(_this, function (t) {
    "use strict";

    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function n(t) {
      var e = {
        exports: {}
      };
      return t(e, e.exports), e.exports;
    }

    var u = function u(t) {
      return t && t.Math == Math && t;
    },
        r = u("object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) && globalThis) || u("object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window) || u("object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self) || u("object" == _typeof(e) && e) || function () {
      return this;
    }() || Function("return this")(),
        i = function i(t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    },
        a = !i(function () {
      return 7 != Object.defineProperty({}, 1, {
        get: function get() {
          return 7;
        }
      })[1];
    }),
        s = {}.propertyIsEnumerable,
        o = Object.getOwnPropertyDescriptor,
        l = {
      f: o && !s.call({
        1: 2
      }, 1) ? function (t) {
        var e = o(this, t);
        return !!e && e.enumerable;
      } : s
    },
        h = function h(t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e
      };
    },
        c = {}.toString,
        f = "".split,
        p = i(function () {
      return !Object("z").propertyIsEnumerable(0);
    }) ? function (t) {
      return "String" == function (t) {
        return c.call(t).slice(8, -1);
      }(t) ? f.call(t, "") : Object(t);
    } : Object,
        d = function d(t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    },
        v = function v(t) {
      return p(d(t));
    },
        k = function k(t) {
      return "object" == _typeof(t) ? null !== t : "function" == typeof t;
    },
        g = function g(t, e) {
      if (!k(t)) return t;
      var n, u;
      if (e && "function" == typeof (n = t.toString) && !k(u = n.call(t))) return u;
      if ("function" == typeof (n = t.valueOf) && !k(u = n.call(t))) return u;
      if (!e && "function" == typeof (n = t.toString) && !k(u = n.call(t))) return u;
      throw TypeError("Can't convert object to primitive value");
    },
        y = {}.hasOwnProperty,
        m = function m(t, e) {
      return y.call(t, e);
    },
        _ = r.document,
        A = k(_) && k(_.createElement),
        b = !a && !i(function () {
      return 7 != Object.defineProperty((t = "div", A ? _.createElement(t) : {}), "a", {
        get: function get() {
          return 7;
        }
      }).a;
      var t;
    }),
        E = Object.getOwnPropertyDescriptor,
        C = {
      f: a ? E : function (t, e) {
        if (t = v(t), e = g(e, !0), b) try {
          return E(t, e);
        } catch (t) {}
        if (m(t, e)) return h(!l.f.call(t, e), t[e]);
      }
    },
        F = function F(t) {
      if (!k(t)) throw TypeError(String(t) + " is not an object");
      return t;
    },
        S = Object.defineProperty,
        D = {
      f: a ? S : function (t, e, n) {
        if (F(t), e = g(e, !0), F(n), b) try {
          return S(t, e, n);
        } catch (t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
        return "value" in n && (t[e] = n.value), t;
      }
    },
        B = a ? function (t, e, n) {
      return D.f(t, e, h(1, n));
    } : function (t, e, n) {
      return t[e] = n, t;
    },
        w = function w(t, e) {
      try {
        B(r, t, e);
      } catch (n) {
        r[t] = e;
      }

      return e;
    },
        O = r["__core-js_shared__"] || w("__core-js_shared__", {}),
        M = Function.toString;

    "function" != typeof O.inspectSource && (O.inspectSource = function (t) {
      return M.call(t);
    });
    var T,
        x,
        P,
        I,
        R = O.inspectSource,
        j = r.WeakMap,
        V = "function" == typeof j && /native code/.test(R(j)),
        N = n(function (t) {
      (t.exports = function (t, e) {
        return O[t] || (O[t] = void 0 !== e ? e : {});
      })("versions", []).push({
        version: "3.8.3",
        mode: "global",
        copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
      });
    }),
        L = 0,
        H = Math.random(),
        U = N("keys"),
        G = {},
        z = r.WeakMap;

    if (V) {
      var Y = O.state || (O.state = new z()),
          Z = Y.get,
          K = Y.has,
          q = Y.set;
      T = function T(t, e) {
        return e.facade = t, q.call(Y, t, e), e;
      }, x = function x(t) {
        return Z.call(Y, t) || {};
      }, P = function P(t) {
        return K.call(Y, t);
      };
    } else {
      var W = U[I = "state"] || (U[I] = function (t) {
        return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++L + H).toString(36);
      }(I));

      G[W] = !0, T = function T(t, e) {
        return e.facade = t, B(t, W, e), e;
      }, x = function x(t) {
        return m(t, W) ? t[W] : {};
      }, P = function P(t) {
        return m(t, W);
      };
    }

    var $ = {
      set: T,
      get: x,
      has: P,
      enforce: function enforce(t) {
        return P(t) ? x(t) : T(t, {});
      },
      getterFor: function getterFor(t) {
        return function (e) {
          var n;
          if (!k(e) || (n = x(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
          return n;
        };
      }
    },
        X = n(function (t) {
      var e = $.get,
          n = $.enforce,
          u = String(String).split("String");
      (t.exports = function (t, e, i, a) {
        var s,
            o = !!a && !!a.unsafe,
            l = !!a && !!a.enumerable,
            h = !!a && !!a.noTargetGet;
        "function" == typeof i && ("string" != typeof e || m(i, "name") || B(i, "name", e), (s = n(i)).source || (s.source = u.join("string" == typeof e ? e : ""))), t !== r ? (o ? !h && t[e] && (l = !0) : delete t[e], l ? t[e] = i : B(t, e, i)) : l ? t[e] = i : w(e, i);
      })(Function.prototype, "toString", function () {
        return "function" == typeof this && e(this).source || R(this);
      });
    }),
        J = r,
        Q = function Q(t) {
      return "function" == typeof t ? t : void 0;
    },
        tt = function tt(t, e) {
      return arguments.length < 2 ? Q(J[t]) || Q(r[t]) : J[t] && J[t][e] || r[t] && r[t][e];
    },
        et = Math.ceil,
        nt = Math.floor,
        ut = function ut(t) {
      return isNaN(t = +t) ? 0 : (t > 0 ? nt : et)(t);
    },
        rt = Math.min,
        it = function it(t) {
      return t > 0 ? rt(ut(t), 9007199254740991) : 0;
    },
        at = Math.max,
        st = Math.min,
        ot = function ot(t) {
      return function (e, n, u) {
        var r,
            i = v(e),
            a = it(i.length),
            s = function (t, e) {
          var n = ut(t);
          return n < 0 ? at(n + e, 0) : st(n, e);
        }(u, a);

        if (t && n != n) {
          for (; a > s;) {
            if ((r = i[s++]) != r) return !0;
          }
        } else for (; a > s; s++) {
          if ((t || s in i) && i[s] === n) return t || s || 0;
        }

        return !t && -1;
      };
    },
        lt = {
      includes: ot(!0),
      indexOf: ot(!1)
    }.indexOf,
        ht = function ht(t, e) {
      var n,
          u = v(t),
          r = 0,
          i = [];

      for (n in u) {
        !m(G, n) && m(u, n) && i.push(n);
      }

      for (; e.length > r;) {
        m(u, n = e[r++]) && (~lt(i, n) || i.push(n));
      }

      return i;
    },
        ct = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        ft = ct.concat("length", "prototype"),
        pt = {
      f: Object.getOwnPropertyNames || function (t) {
        return ht(t, ft);
      }
    },
        dt = {
      f: Object.getOwnPropertySymbols
    },
        vt = tt("Reflect", "ownKeys") || function (t) {
      var e = pt.f(F(t)),
          n = dt.f;
      return n ? e.concat(n(t)) : e;
    },
        kt = function kt(t, e) {
      for (var n = vt(e), u = D.f, r = C.f, i = 0; i < n.length; i++) {
        var a = n[i];
        m(t, a) || u(t, a, r(e, a));
      }
    },
        gt = /#|\.prototype\./,
        yt = function yt(t, e) {
      var n = _t[mt(t)];

      return n == bt || n != At && ("function" == typeof e ? i(e) : !!e);
    },
        mt = yt.normalize = function (t) {
      return String(t).replace(gt, ".").toLowerCase();
    },
        _t = yt.data = {},
        At = yt.NATIVE = "N",
        bt = yt.POLYFILL = "P",
        Et = yt,
        Ct = C.f,
        Ft = function Ft(t, e) {
      var n,
          u,
          i,
          a,
          s,
          o = t.target,
          l = t.global,
          h = t.stat;
      if (n = l ? r : h ? r[o] || w(o, {}) : (r[o] || {}).prototype) for (u in e) {
        if (a = e[u], i = t.noTargetGet ? (s = Ct(n, u)) && s.value : n[u], !Et(l ? u : o + (h ? "." : "#") + u, t.forced) && void 0 !== i) {
          if (_typeof(a) == _typeof(i)) continue;
          kt(a, i);
        }

        (t.sham || i && i.sham) && B(a, "sham", !0), X(n, u, a, t);
      }
    },
        St = Object.keys || function (t) {
      return ht(t, ct);
    },
        Dt = Object.assign,
        Bt = Object.defineProperty,
        wt = !Dt || i(function () {
      if (a && 1 !== Dt({
        b: 1
      }, Dt(Bt({}, "a", {
        enumerable: !0,
        get: function get() {
          Bt(this, "b", {
            value: 3,
            enumerable: !1
          });
        }
      }), {
        b: 2
      })).b) return !0;
      var t = {},
          e = {},
          n = Symbol();
      return t[n] = 7, "abcdefghijklmnopqrst".split("").forEach(function (t) {
        e[t] = t;
      }), 7 != Dt({}, t)[n] || "abcdefghijklmnopqrst" != St(Dt({}, e)).join("");
    }) ? function (t, e) {
      for (var n = Object(d(t)), u = arguments.length, r = 1, i = dt.f, s = l.f; u > r;) {
        for (var o, h = p(arguments[r++]), c = i ? St(h).concat(i(h)) : St(h), f = c.length, v = 0; f > v;) {
          o = c[v++], a && !s.call(h, o) || (n[o] = h[o]);
        }
      }

      return n;
    } : Dt;

    Ft({
      target: "Object",
      stat: !0,
      forced: Object.assign !== wt
    }, {
      assign: wt
    });

    var Ot = "".repeat || function (t) {
      var e = String(d(this)),
          n = "",
          u = ut(t);
      if (u < 0 || u == 1 / 0) throw RangeError("Wrong number of repetitions");

      for (; u > 0; (u >>>= 1) && (e += e)) {
        1 & u && (n += e);
      }

      return n;
    },
        Mt = Math.ceil,
        Tt = function Tt(t) {
      return function (e, n, u) {
        var r,
            i,
            a = String(d(e)),
            s = a.length,
            o = void 0 === u ? " " : String(u),
            l = it(n);
        return l <= s || "" == o ? a : (r = l - s, (i = Ot.call(o, Mt(r / o.length))).length > r && (i = i.slice(0, r)), t ? a + i : i + a);
      };
    },
        xt = {
      start: Tt(!1),
      end: Tt(!0)
    },
        Pt = tt("navigator", "userAgent") || "",
        It = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(Pt),
        Rt = xt.end;

    Ft({
      target: "String",
      proto: !0,
      forced: It
    }, {
      padEnd: function padEnd(t) {
        return Rt(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    var jt = xt.start;

    function Vt(t) {
      return (Vt = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(t);
    }

    function Nt(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    function Lt(t, e) {
      for (var n = 0; n < e.length; n++) {
        var u = e[n];
        u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(t, u.key, u);
      }
    }

    function Ht(t, e, n) {
      return e && Lt(t.prototype, e), n && Lt(t, n), t;
    }

    function Ut(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && zt(t, e);
    }

    function Gt(t) {
      return (Gt = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
    }

    function zt(t, e) {
      return (zt = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      })(t, e);
    }

    function Yt(t, e) {
      if (null == t) return {};

      var n,
          u,
          r = function (t, e) {
        if (null == t) return {};
        var n,
            u,
            r = {},
            i = Object.keys(t);

        for (u = 0; u < i.length; u++) {
          n = i[u], e.indexOf(n) >= 0 || (r[n] = t[n]);
        }

        return r;
      }(t, e);

      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);

        for (u = 0; u < i.length; u++) {
          n = i[u], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
        }
      }

      return r;
    }

    function Zt(t, e) {
      return !e || "object" != _typeof(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }(t) : e;
    }

    function Kt(t) {
      var e = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }();

      return function () {
        var n,
            u = Gt(t);

        if (e) {
          var r = Gt(this).constructor;
          n = Reflect.construct(u, arguments, r);
        } else n = u.apply(this, arguments);

        return Zt(this, n);
      };
    }

    function qt(t, e) {
      for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Gt(t));) {
        ;
      }

      return t;
    }

    function Wt(t, e, n) {
      return (Wt = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
        var u = qt(t, e);

        if (u) {
          var r = Object.getOwnPropertyDescriptor(u, e);
          return r.get ? r.get.call(n) : r.value;
        }
      })(t, e, n || t);
    }

    function $t(t, e, n, u) {
      return ($t = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function (t, e, n, u) {
        var r,
            i = qt(t, e);

        if (i) {
          if ((r = Object.getOwnPropertyDescriptor(i, e)).set) return r.set.call(u, n), !0;
          if (!r.writable) return !1;
        }

        if (r = Object.getOwnPropertyDescriptor(u, e)) {
          if (!r.writable) return !1;
          r.value = n, Object.defineProperty(u, e, r);
        } else !function (t, e, n) {
          e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[e] = n;
        }(u, e, n);

        return !0;
      })(t, e, n, u);
    }

    function Xt(t, e, n, u, r) {
      if (!$t(t, e, n, u || t) && r) throw new Error("failed to set property");
      return n;
    }

    function Jt(t, e) {
      return function (t) {
        if (Array.isArray(t)) return t;
      }(t) || function (t, e) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
        var n = [],
            u = !0,
            r = !1,
            i = void 0;

        try {
          for (var a, s = t[Symbol.iterator](); !(u = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); u = !0) {
            ;
          }
        } catch (t) {
          r = !0, i = t;
        } finally {
          try {
            u || null == s["return"] || s["return"]();
          } finally {
            if (r) throw i;
          }
        }

        return n;
      }(t, e) || function (t, e) {
        if (!t) return;
        if ("string" == typeof t) return Qt(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === n && t.constructor && (n = t.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(t);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Qt(t, e);
      }(t, e) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function Qt(t, e) {
      (null == e || e > t.length) && (e = t.length);

      for (var n = 0, u = new Array(e); n < e; n++) {
        u[n] = t[n];
      }

      return u;
    }

    function te(t) {
      return "string" == typeof t || t instanceof String;
    }

    Ft({
      target: "String",
      proto: !0,
      forced: It
    }, {
      padStart: function padStart(t) {
        return jt(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    }), Ft({
      target: "String",
      proto: !0
    }, {
      repeat: Ot
    }), Ft({
      global: !0
    }, {
      globalThis: r
    });
    var ee = {
      NONE: "NONE",
      LEFT: "LEFT",
      FORCE_LEFT: "FORCE_LEFT",
      RIGHT: "RIGHT",
      FORCE_RIGHT: "FORCE_RIGHT"
    };

    function ne(t) {
      return t.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
    }

    var ue = function () {
      function t(e, n, u, r) {
        for (Nt(this, t), this.value = e, this.cursorPos = n, this.oldValue = u, this.oldSelection = r; this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos);) {
          --this.oldSelection.start;
        }
      }

      return Ht(t, [{
        key: "startChangePos",
        get: function get() {
          return Math.min(this.cursorPos, this.oldSelection.start);
        }
      }, {
        key: "insertedCount",
        get: function get() {
          return this.cursorPos - this.startChangePos;
        }
      }, {
        key: "inserted",
        get: function get() {
          return this.value.substr(this.startChangePos, this.insertedCount);
        }
      }, {
        key: "removedCount",
        get: function get() {
          return Math.max(this.oldSelection.end - this.startChangePos || this.oldValue.length - this.value.length, 0);
        }
      }, {
        key: "removed",
        get: function get() {
          return this.oldValue.substr(this.startChangePos, this.removedCount);
        }
      }, {
        key: "head",
        get: function get() {
          return this.value.substring(0, this.startChangePos);
        }
      }, {
        key: "tail",
        get: function get() {
          return this.value.substring(this.startChangePos + this.insertedCount);
        }
      }, {
        key: "removeDirection",
        get: function get() {
          return !this.removedCount || this.insertedCount ? ee.NONE : this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos ? ee.RIGHT : ee.LEFT;
        }
      }]), t;
    }(),
        re = function () {
      function t(e) {
        Nt(this, t), Object.assign(this, {
          inserted: "",
          rawInserted: "",
          skip: !1,
          tailShift: 0
        }, e);
      }

      return Ht(t, [{
        key: "aggregate",
        value: function value(t) {
          return this.rawInserted += t.rawInserted, this.skip = this.skip || t.skip, this.inserted += t.inserted, this.tailShift += t.tailShift, this;
        }
      }, {
        key: "offset",
        get: function get() {
          return this.tailShift + this.inserted.length;
        }
      }]), t;
    }(),
        ie = function () {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            u = arguments.length > 2 ? arguments[2] : void 0;
        Nt(this, t), this.value = e, this.from = n, this.stop = u;
      }

      return Ht(t, [{
        key: "toString",
        value: function value() {
          return this.value;
        }
      }, {
        key: "extend",
        value: function value(t) {
          this.value += String(t);
        }
      }, {
        key: "appendTo",
        value: function value(t) {
          return t.append(this.toString(), {
            tail: !0
          }).aggregate(t._appendPlaceholder());
        }
      }, {
        key: "state",
        get: function get() {
          return {
            value: this.value,
            from: this.from,
            stop: this.stop
          };
        },
        set: function set(t) {
          Object.assign(this, t);
        }
      }, {
        key: "shiftBefore",
        value: function value(t) {
          if (this.from >= t || !this.value.length) return "";
          var e = this.value[0];
          return this.value = this.value.slice(1), e;
        }
      }]), t;
    }();

    function ae(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return new ae.InputMask(t, e);
    }

    var se = function () {
      function t(e) {
        Nt(this, t), this._value = "", this._update(Object.assign({}, t.DEFAULTS, e)), this.isInitialized = !0;
      }

      return Ht(t, [{
        key: "updateOptions",
        value: function value(t) {
          Object.keys(t).length && this.withValueRefresh(this._update.bind(this, t));
        }
      }, {
        key: "_update",
        value: function value(t) {
          Object.assign(this, t);
        }
      }, {
        key: "state",
        get: function get() {
          return {
            _value: this.value
          };
        },
        set: function set(t) {
          this._value = t._value;
        }
      }, {
        key: "reset",
        value: function value() {
          this._value = "";
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        },
        set: function set(t) {
          this.resolve(t);
        }
      }, {
        key: "resolve",
        value: function value(t) {
          return this.reset(), this.append(t, {
            input: !0
          }, ""), this.doCommit(), this.value;
        }
      }, {
        key: "unmaskedValue",
        get: function get() {
          return this.value;
        },
        set: function set(t) {
          this.reset(), this.append(t, {}, ""), this.doCommit();
        }
      }, {
        key: "typedValue",
        get: function get() {
          return this.doParse(this.value);
        },
        set: function set(t) {
          this.value = this.doFormat(t);
        }
      }, {
        key: "rawInputValue",
        get: function get() {
          return this.extractInput(0, this.value.length, {
            raw: !0
          });
        },
        set: function set(t) {
          this.reset(), this.append(t, {
            raw: !0
          }, ""), this.doCommit();
        }
      }, {
        key: "isComplete",
        get: function get() {
          return !0;
        }
      }, {
        key: "nearestInputPos",
        value: function value(t, e) {
          return t;
        }
      }, {
        key: "extractInput",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
          return this.value.slice(t, e);
        }
      }, {
        key: "extractTail",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
          return new ie(this.extractInput(t, e), t);
        }
      }, {
        key: "appendTail",
        value: function value(t) {
          return te(t) && (t = new ie(String(t))), t.appendTo(this);
        }
      }, {
        key: "_appendCharRaw",
        value: function value(t) {
          return t ? (this._value += t, new re({
            inserted: t,
            rawInserted: t
          })) : new re();
        }
      }, {
        key: "_appendChar",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = arguments.length > 2 ? arguments[2] : void 0,
              u = this.state,
              r = this._appendCharRaw(this.doPrepare(t, e), e);

          if (r.inserted) {
            var i,
                a = !1 !== this.doValidate(e);

            if (a && null != n) {
              var s = this.state;
              this.overwrite && (i = n.state, n.shiftBefore(this.value.length));
              var o = this.appendTail(n);
              (a = o.rawInserted === n.toString()) && o.inserted && (this.state = s);
            }

            a || (r = new re(), this.state = u, n && i && (n.state = i));
          }

          return r;
        }
      }, {
        key: "_appendPlaceholder",
        value: function value() {
          return new re();
        }
      }, {
        key: "append",
        value: function value(t, e, n) {
          if (!te(t)) throw new Error("value should be string");
          var u = new re(),
              r = te(n) ? new ie(String(n)) : n;
          e && e.tail && (e._beforeTailState = this.state);

          for (var i = 0; i < t.length; ++i) {
            u.aggregate(this._appendChar(t[i], e, r));
          }

          return null != r && (u.tailShift += this.appendTail(r).tailShift), u;
        }
      }, {
        key: "remove",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
          return this._value = this.value.slice(0, t) + this.value.slice(e), new re();
        }
      }, {
        key: "withValueRefresh",
        value: function value(t) {
          if (this._refreshing || !this.isInitialized) return t();
          this._refreshing = !0;
          var e = this.rawInputValue,
              n = this.value,
              u = t();
          return this.rawInputValue = e, this.value && this.value !== n && 0 === n.indexOf(this.value) && this.append(n.slice(this.value.length), {}, ""), delete this._refreshing, u;
        }
      }, {
        key: "runIsolated",
        value: function value(t) {
          if (this._isolated || !this.isInitialized) return t(this);
          this._isolated = !0;
          var e = this.state,
              n = t(this);
          return this.state = e, delete this._isolated, n;
        }
      }, {
        key: "doPrepare",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.prepare ? this.prepare(t, this, e) : t;
        }
      }, {
        key: "doValidate",
        value: function value(t) {
          return (!this.validate || this.validate(this.value, this, t)) && (!this.parent || this.parent.doValidate(t));
        }
      }, {
        key: "doCommit",
        value: function value() {
          this.commit && this.commit(this.value, this);
        }
      }, {
        key: "doFormat",
        value: function value(t) {
          return this.format ? this.format(t, this) : t;
        }
      }, {
        key: "doParse",
        value: function value(t) {
          return this.parse ? this.parse(t, this) : t;
        }
      }, {
        key: "splice",
        value: function value(t, e, n, u) {
          var r = t + e,
              i = this.extractTail(r),
              a = this.nearestInputPos(t, u);
          return new re({
            tailShift: a - t
          }).aggregate(this.remove(a)).aggregate(this.append(n, {
            input: !0
          }, i));
        }
      }]), t;
    }();

    function oe(t) {
      if (null == t) throw new Error("mask property should be defined");
      return t instanceof RegExp ? ae.MaskedRegExp : te(t) ? ae.MaskedPattern : t instanceof Date || t === Date ? ae.MaskedDate : t instanceof Number || "number" == typeof t || t === Number ? ae.MaskedNumber : Array.isArray(t) || t === Array ? ae.MaskedDynamic : ae.Masked && t.prototype instanceof ae.Masked ? t : t instanceof Function ? ae.MaskedFunction : t instanceof ae.Masked ? t.constructor : (console.warn("Mask not found for mask", t), ae.Masked);
    }

    function le(t) {
      if (ae.Masked && t instanceof ae.Masked) return t;
      var e = (t = Object.assign({}, t)).mask;
      if (ae.Masked && e instanceof ae.Masked) return e;
      var n = oe(e);
      if (!n) throw new Error("Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.");
      return new n(t);
    }

    se.DEFAULTS = {
      format: function format(t) {
        return t;
      },
      parse: function parse(t) {
        return t;
      }
    }, ae.Masked = se, ae.createMask = le;

    var he = {
      0: /\d/,
      a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
      "*": /./
    },
        ce = function () {
      function t(e) {
        Nt(this, t);
        var n = e.mask,
            u = Yt(e, ["mask"]);
        this.masked = le({
          mask: n
        }), Object.assign(this, u);
      }

      return Ht(t, [{
        key: "reset",
        value: function value() {
          this._isFilled = !1, this.masked.reset();
        }
      }, {
        key: "remove",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
          return 0 === t && e >= 1 ? (this._isFilled = !1, this.masked.remove(t, e)) : new re();
        }
      }, {
        key: "value",
        get: function get() {
          return this.masked.value || (this._isFilled && !this.isOptional ? this.placeholderChar : "");
        }
      }, {
        key: "unmaskedValue",
        get: function get() {
          return this.masked.unmaskedValue;
        }
      }, {
        key: "isComplete",
        get: function get() {
          return Boolean(this.masked.value) || this.isOptional;
        }
      }, {
        key: "_appendChar",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this._isFilled) return new re();

          var n = this.masked.state,
              u = this.masked._appendChar(t, e);

          return u.inserted && !1 === this.doValidate(e) && (u.inserted = u.rawInserted = "", this.masked.state = n), u.inserted || this.isOptional || this.lazy || e.input || (u.inserted = this.placeholderChar), u.skip = !u.inserted && !this.isOptional, this._isFilled = Boolean(u.inserted), u;
        }
      }, {
        key: "append",
        value: function value() {
          var t;
          return (t = this.masked).append.apply(t, arguments);
        }
      }, {
        key: "_appendPlaceholder",
        value: function value() {
          var t = new re();
          return this._isFilled || this.isOptional ? t : (this._isFilled = !0, t.inserted = this.placeholderChar, t);
        }
      }, {
        key: "extractTail",
        value: function value() {
          var t;
          return (t = this.masked).extractTail.apply(t, arguments);
        }
      }, {
        key: "appendTail",
        value: function value() {
          var t;
          return (t = this.masked).appendTail.apply(t, arguments);
        }
      }, {
        key: "extractInput",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
              n = arguments.length > 2 ? arguments[2] : void 0;
          return this.masked.extractInput(t, e, n);
        }
      }, {
        key: "nearestInputPos",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ee.NONE,
              n = this.value.length,
              u = Math.min(Math.max(t, 0), n);

          switch (e) {
            case ee.LEFT:
            case ee.FORCE_LEFT:
              return this.isComplete ? u : 0;

            case ee.RIGHT:
            case ee.FORCE_RIGHT:
              return this.isComplete ? u : n;

            case ee.NONE:
            default:
              return u;
          }
        }
      }, {
        key: "doValidate",
        value: function value() {
          var t, e;
          return (t = this.masked).doValidate.apply(t, arguments) && (!this.parent || (e = this.parent).doValidate.apply(e, arguments));
        }
      }, {
        key: "doCommit",
        value: function value() {
          this.masked.doCommit();
        }
      }, {
        key: "state",
        get: function get() {
          return {
            masked: this.masked.state,
            _isFilled: this._isFilled
          };
        },
        set: function set(t) {
          this.masked.state = t.masked, this._isFilled = t._isFilled;
        }
      }]), t;
    }(),
        fe = function () {
      function t(e) {
        Nt(this, t), Object.assign(this, e), this._value = "";
      }

      return Ht(t, [{
        key: "value",
        get: function get() {
          return this._value;
        }
      }, {
        key: "unmaskedValue",
        get: function get() {
          return this.isUnmasking ? this.value : "";
        }
      }, {
        key: "reset",
        value: function value() {
          this._isRawInput = !1, this._value = "";
        }
      }, {
        key: "remove",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._value.length;
          return this._value = this._value.slice(0, t) + this._value.slice(e), this._value || (this._isRawInput = !1), new re();
        }
      }, {
        key: "nearestInputPos",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ee.NONE,
              n = this._value.length;

          switch (e) {
            case ee.LEFT:
            case ee.FORCE_LEFT:
              return 0;

            case ee.NONE:
            case ee.RIGHT:
            case ee.FORCE_RIGHT:
            default:
              return n;
          }
        }
      }, {
        key: "extractInput",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._value.length;
          return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).raw && this._isRawInput && this._value.slice(t, e) || "";
        }
      }, {
        key: "isComplete",
        get: function get() {
          return !0;
        }
      }, {
        key: "_appendChar",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = new re();
          if (this._value) return n;
          var u = this["char"] === t[0] && (this.isUnmasking || e.input || e.raw) && !e.tail;
          return u && (n.rawInserted = this["char"]), this._value = n.inserted = this["char"], this._isRawInput = u && (e.raw || e.input), n;
        }
      }, {
        key: "_appendPlaceholder",
        value: function value() {
          var t = new re();
          return this._value ? t : (this._value = t.inserted = this["char"], t);
        }
      }, {
        key: "extractTail",
        value: function value() {
          return arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length, new ie("");
        }
      }, {
        key: "appendTail",
        value: function value(t) {
          return te(t) && (t = new ie(String(t))), t.appendTo(this);
        }
      }, {
        key: "append",
        value: function value(t, e, n) {
          var u = this._appendChar(t, e);

          return null != n && (u.tailShift += this.appendTail(n).tailShift), u;
        }
      }, {
        key: "doCommit",
        value: function value() {}
      }, {
        key: "state",
        get: function get() {
          return {
            _value: this._value,
            _isRawInput: this._isRawInput
          };
        },
        set: function set(t) {
          Object.assign(this, t);
        }
      }]), t;
    }(),
        pe = function () {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        Nt(this, t), this.chunks = e, this.from = n;
      }

      return Ht(t, [{
        key: "toString",
        value: function value() {
          return this.chunks.map(String).join("");
        }
      }, {
        key: "extend",
        value: function value(e) {
          if (String(e)) {
            te(e) && (e = new ie(String(e)));
            var n = this.chunks[this.chunks.length - 1],
                u = n && (n.stop === e.stop || null == e.stop) && e.from === n.from + n.toString().length;
            if (e instanceof ie) u ? n.extend(e.toString()) : this.chunks.push(e);else if (e instanceof t) {
              if (null == e.stop) for (var r; e.chunks.length && null == e.chunks[0].stop;) {
                (r = e.chunks.shift()).from += e.from, this.extend(r);
              }
              e.toString() && (e.stop = e.blockIndex, this.chunks.push(e));
            }
          }
        }
      }, {
        key: "appendTo",
        value: function value(e) {
          if (!(e instanceof ae.MaskedPattern)) return new ie(this.toString()).appendTo(e);

          for (var n = new re(), u = 0; u < this.chunks.length && !n.skip; ++u) {
            var r = this.chunks[u],
                i = e._mapPosToBlock(e.value.length),
                a = r.stop,
                s = void 0;

            if (null != a && (!i || i.index <= a) && ((r instanceof t || e._stops.indexOf(a) >= 0) && n.aggregate(e._appendPlaceholder(a)), s = r instanceof t && e._blocks[a]), s) {
              var o = s.appendTail(r);
              o.skip = !1, n.aggregate(o), e._value += o.inserted;
              var l = r.toString().slice(o.rawInserted.length);
              l && n.aggregate(e.append(l, {
                tail: !0
              }));
            } else n.aggregate(e.append(r.toString(), {
              tail: !0
            }));
          }

          return n;
        }
      }, {
        key: "state",
        get: function get() {
          return {
            chunks: this.chunks.map(function (t) {
              return t.state;
            }),
            from: this.from,
            stop: this.stop,
            blockIndex: this.blockIndex
          };
        },
        set: function set(e) {
          var n = e.chunks,
              u = Yt(e, ["chunks"]);
          Object.assign(this, u), this.chunks = n.map(function (e) {
            var n = "chunks" in e ? new t() : new ie();
            return n.state = e, n;
          });
        }
      }, {
        key: "shiftBefore",
        value: function value(t) {
          if (this.from >= t || !this.chunks.length) return "";

          for (var e = t - this.from, n = 0; n < this.chunks.length;) {
            var u = this.chunks[n],
                r = u.shiftBefore(e);

            if (u.toString()) {
              if (!r) break;
              ++n;
            } else this.chunks.splice(n, 1);

            if (r) return r;
          }

          return "";
        }
      }]), t;
    }(),
        de = function (t) {
      Ut(n, se);
      var e = Kt(n);

      function n() {
        return Nt(this, n), e.apply(this, arguments);
      }

      return Ht(n, [{
        key: "_update",
        value: function value(t) {
          t.mask && (t.validate = function (e) {
            return e.search(t.mask) >= 0;
          }), Wt(Gt(n.prototype), "_update", this).call(this, t);
        }
      }]), n;
    }();

    ae.MaskedRegExp = de;

    var ve = function (t) {
      Ut(n, se);
      var e = Kt(n);

      function n() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return Nt(this, n), t.definitions = Object.assign({}, he, t.definitions), e.call(this, Object.assign({}, n.DEFAULTS, t));
      }

      return Ht(n, [{
        key: "_update",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          t.definitions = Object.assign({}, this.definitions, t.definitions), Wt(Gt(n.prototype), "_update", this).call(this, t), this._rebuildMask();
        }
      }, {
        key: "_rebuildMask",
        value: function value() {
          var t = this,
              e = this.definitions;
          this._blocks = [], this._stops = [], this._maskedBlocks = {};
          var u = this.mask;
          if (u && e) for (var r = !1, i = !1, a = 0; a < u.length; ++a) {
            if (this.blocks) if ("continue" === function () {
              var e = u.slice(a),
                  n = Object.keys(t.blocks).filter(function (t) {
                return 0 === e.indexOf(t);
              });
              n.sort(function (t, e) {
                return e.length - t.length;
              });
              var r = n[0];

              if (r) {
                var i = le(Object.assign({
                  parent: t,
                  lazy: t.lazy,
                  placeholderChar: t.placeholderChar,
                  overwrite: t.overwrite
                }, t.blocks[r]));
                return i && (t._blocks.push(i), t._maskedBlocks[r] || (t._maskedBlocks[r] = []), t._maskedBlocks[r].push(t._blocks.length - 1)), a += r.length - 1, "continue";
              }
            }()) continue;
            var s = u[a],
                o = (s in e);
            if (s !== n.STOP_CHAR) {
              if ("{" !== s && "}" !== s) {
                if ("[" !== s && "]" !== s) {
                  if (s === n.ESCAPE_CHAR) {
                    if (!(s = u[++a])) break;
                    o = !1;
                  }

                  var l = o ? new ce({
                    parent: this,
                    lazy: this.lazy,
                    placeholderChar: this.placeholderChar,
                    mask: e[s],
                    isOptional: i
                  }) : new fe({
                    "char": s,
                    isUnmasking: r
                  });

                  this._blocks.push(l);
                } else i = !i;
              } else r = !r;
            } else this._stops.push(this._blocks.length);
          }
        }
      }, {
        key: "state",
        get: function get() {
          return Object.assign({}, Wt(Gt(n.prototype), "state", this), {
            _blocks: this._blocks.map(function (t) {
              return t.state;
            })
          });
        },
        set: function set(t) {
          var e = t._blocks,
              u = Yt(t, ["_blocks"]);
          this._blocks.forEach(function (t, n) {
            return t.state = e[n];
          }), Xt(Gt(n.prototype), "state", u, this, !0);
        }
      }, {
        key: "reset",
        value: function value() {
          Wt(Gt(n.prototype), "reset", this).call(this), this._blocks.forEach(function (t) {
            return t.reset();
          });
        }
      }, {
        key: "isComplete",
        get: function get() {
          return this._blocks.every(function (t) {
            return t.isComplete;
          });
        }
      }, {
        key: "doCommit",
        value: function value() {
          this._blocks.forEach(function (t) {
            return t.doCommit();
          }), Wt(Gt(n.prototype), "doCommit", this).call(this);
        }
      }, {
        key: "unmaskedValue",
        get: function get() {
          return this._blocks.reduce(function (t, e) {
            return t + e.unmaskedValue;
          }, "");
        },
        set: function set(t) {
          Xt(Gt(n.prototype), "unmaskedValue", t, this, !0);
        }
      }, {
        key: "value",
        get: function get() {
          return this._blocks.reduce(function (t, e) {
            return t + e.value;
          }, "");
        },
        set: function set(t) {
          Xt(Gt(n.prototype), "value", t, this, !0);
        }
      }, {
        key: "appendTail",
        value: function value(t) {
          return Wt(Gt(n.prototype), "appendTail", this).call(this, t).aggregate(this._appendPlaceholder());
        }
      }, {
        key: "_appendCharRaw",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = this._mapPosToBlock(this.value.length),
              u = new re();

          if (!n) return u;

          for (var r = n.index;; ++r) {
            var i = this._blocks[r];
            if (!i) break;

            var a = i._appendChar(t, e),
                s = a.skip;

            if (u.aggregate(a), s || a.rawInserted) break;
          }

          return u;
        }
      }, {
        key: "extractTail",
        value: function value() {
          var t = this,
              e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
              u = new pe();
          return e === n ? u : (this._forEachBlocksInRange(e, n, function (e, n, r, i) {
            var a = e.extractTail(r, i);
            a.stop = t._findStopBefore(n), a.from = t._blockStartPos(n), a instanceof pe && (a.blockIndex = n), u.extend(a);
          }), u);
        }
      }, {
        key: "extractInput",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          if (t === e) return "";
          var u = "";
          return this._forEachBlocksInRange(t, e, function (t, e, r, i) {
            u += t.extractInput(r, i, n);
          }), u;
        }
      }, {
        key: "_findStopBefore",
        value: function value(t) {
          for (var e, n = 0; n < this._stops.length; ++n) {
            var u = this._stops[n];
            if (!(u <= t)) break;
            e = u;
          }

          return e;
        }
      }, {
        key: "_appendPlaceholder",
        value: function value(t) {
          var e = this,
              n = new re();
          if (this.lazy && null == t) return n;

          var u = this._mapPosToBlock(this.value.length);

          if (!u) return n;
          var r = u.index,
              i = null != t ? t : this._blocks.length;
          return this._blocks.slice(r, i).forEach(function (u) {
            if (!u.lazy || null != t) {
              var r = null != u._blocks ? [u._blocks.length] : [],
                  i = u._appendPlaceholder.apply(u, r);

              e._value += i.inserted, n.aggregate(i);
            }
          }), n;
        }
      }, {
        key: "_mapPosToBlock",
        value: function value(t) {
          for (var e = "", n = 0; n < this._blocks.length; ++n) {
            var u = this._blocks[n],
                r = e.length;
            if (t <= (e += u.value).length) return {
              index: n,
              offset: t - r
            };
          }
        }
      }, {
        key: "_blockStartPos",
        value: function value(t) {
          return this._blocks.slice(0, t).reduce(function (t, e) {
            return t + e.value.length;
          }, 0);
        }
      }, {
        key: "_forEachBlocksInRange",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
              n = arguments.length > 2 ? arguments[2] : void 0,
              u = this._mapPosToBlock(t);

          if (u) {
            var r = this._mapPosToBlock(e),
                i = r && u.index === r.index,
                a = u.offset,
                s = r && i ? r.offset : this._blocks[u.index].value.length;

            if (n(this._blocks[u.index], u.index, a, s), r && !i) {
              for (var o = u.index + 1; o < r.index; ++o) {
                n(this._blocks[o], o, 0, this._blocks[o].value.length);
              }

              n(this._blocks[r.index], r.index, 0, r.offset);
            }
          }
        }
      }, {
        key: "remove",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
              u = Wt(Gt(n.prototype), "remove", this).call(this, t, e);
          return this._forEachBlocksInRange(t, e, function (t, e, n, r) {
            u.aggregate(t.remove(n, r));
          }), u;
        }
      }, {
        key: "nearestInputPos",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ee.NONE,
              n = this._mapPosToBlock(t) || {
            index: 0,
            offset: 0
          },
              u = n.offset,
              r = n.index,
              i = this._blocks[r];
          if (!i) return t;
          var a = u;
          0 !== a && a < i.value.length && (a = i.nearestInputPos(u, function (t) {
            switch (t) {
              case ee.LEFT:
                return ee.FORCE_LEFT;

              case ee.RIGHT:
                return ee.FORCE_RIGHT;

              default:
                return t;
            }
          }(e)));
          var s = a === i.value.length;
          if (!(0 === a) && !s) return this._blockStartPos(r) + a;
          var o = s ? r + 1 : r;

          if (e === ee.NONE) {
            if (o > 0) {
              var l = o - 1,
                  h = this._blocks[l],
                  c = h.nearestInputPos(0, ee.NONE);
              if (!h.value.length || c !== h.value.length) return this._blockStartPos(o);
            }

            for (var f = o; f < this._blocks.length; ++f) {
              var p = this._blocks[f],
                  d = p.nearestInputPos(0, ee.NONE);
              if (!p.value.length || d !== p.value.length) return this._blockStartPos(f) + d;
            }

            for (var v = o - 1; v >= 0; --v) {
              var k = this._blocks[v],
                  g = k.nearestInputPos(0, ee.NONE);
              if (!k.value.length || g !== k.value.length) return this._blockStartPos(v) + k.value.length;
            }

            return t;
          }

          if (e === ee.LEFT || e === ee.FORCE_LEFT) {
            for (var y, m = o; m < this._blocks.length; ++m) {
              if (this._blocks[m].value) {
                y = m;
                break;
              }
            }

            if (null != y) {
              var _ = this._blocks[y],
                  A = _.nearestInputPos(0, ee.RIGHT);

              if (0 === A && _.unmaskedValue.length) return this._blockStartPos(y) + A;
            }

            for (var b, E = -1, C = o - 1; C >= 0; --C) {
              var F = this._blocks[C],
                  S = F.nearestInputPos(F.value.length, ee.FORCE_LEFT);

              if (F.value && 0 === S || (b = C), 0 !== S) {
                if (S !== F.value.length) return this._blockStartPos(C) + S;
                E = C;
                break;
              }
            }

            if (e === ee.LEFT) for (var D = E + 1; D <= Math.min(o, this._blocks.length - 1); ++D) {
              var B = this._blocks[D],
                  w = B.nearestInputPos(0, ee.NONE),
                  O = this._blockStartPos(D) + w;
              if (O > t) break;
              if (w !== B.value.length) return O;
            }
            if (E >= 0) return this._blockStartPos(E) + this._blocks[E].value.length;
            if (e === ee.FORCE_LEFT || this.lazy && !this.extractInput() && !function (t) {
              if (!t) return !1;
              var e = t.value;
              return !e || t.nearestInputPos(0, ee.NONE) !== e.length;
            }(this._blocks[o])) return 0;
            if (null != b) return this._blockStartPos(b);

            for (var M = o; M < this._blocks.length; ++M) {
              var T = this._blocks[M],
                  x = T.nearestInputPos(0, ee.NONE);
              if (!T.value.length || x !== T.value.length) return this._blockStartPos(M) + x;
            }

            return 0;
          }

          if (e === ee.RIGHT || e === ee.FORCE_RIGHT) {
            for (var P, I, R = o; R < this._blocks.length; ++R) {
              var j = this._blocks[R],
                  V = j.nearestInputPos(0, ee.NONE);

              if (V !== j.value.length) {
                I = this._blockStartPos(R) + V, P = R;
                break;
              }
            }

            if (null != P && null != I) {
              for (var N = P; N < this._blocks.length; ++N) {
                var L = this._blocks[N],
                    H = L.nearestInputPos(0, ee.FORCE_RIGHT);
                if (H !== L.value.length) return this._blockStartPos(N) + H;
              }

              return e === ee.FORCE_RIGHT ? this.value.length : I;
            }

            for (var U = Math.min(o, this._blocks.length - 1); U >= 0; --U) {
              var G = this._blocks[U],
                  z = G.nearestInputPos(G.value.length, ee.LEFT);

              if (0 !== z) {
                var Y = this._blockStartPos(U) + z;
                if (Y >= t) return Y;
                break;
              }
            }
          }

          return t;
        }
      }, {
        key: "maskedBlock",
        value: function value(t) {
          return this.maskedBlocks(t)[0];
        }
      }, {
        key: "maskedBlocks",
        value: function value(t) {
          var e = this,
              n = this._maskedBlocks[t];
          return n ? n.map(function (t) {
            return e._blocks[t];
          }) : [];
        }
      }]), n;
    }();

    ve.DEFAULTS = {
      lazy: !0,
      placeholderChar: "_"
    }, ve.STOP_CHAR = "`", ve.ESCAPE_CHAR = "\\", ve.InputDefinition = ce, ve.FixedDefinition = fe, ae.MaskedPattern = ve;

    var ke = function (t) {
      Ut(n, ve);
      var e = Kt(n);

      function n() {
        return Nt(this, n), e.apply(this, arguments);
      }

      return Ht(n, [{
        key: "_matchFrom",
        get: function get() {
          return this.maxLength - String(this.from).length;
        }
      }, {
        key: "_update",
        value: function value(t) {
          t = Object.assign({
            to: this.to || 0,
            from: this.from || 0
          }, t);
          var e = String(t.to).length;
          null != t.maxLength && (e = Math.max(e, t.maxLength)), t.maxLength = e;

          for (var u = String(t.from).padStart(e, "0"), r = String(t.to).padStart(e, "0"), i = 0; i < r.length && r[i] === u[i];) {
            ++i;
          }

          t.mask = r.slice(0, i).replace(/0/g, "\\0") + "0".repeat(e - i), Wt(Gt(n.prototype), "_update", this).call(this, t);
        }
      }, {
        key: "isComplete",
        get: function get() {
          return Wt(Gt(n.prototype), "isComplete", this) && Boolean(this.value);
        }
      }, {
        key: "boundaries",
        value: function value(t) {
          var e = "",
              n = "",
              u = Jt(t.match(/^(\D*)(\d*)(\D*)/) || [], 3),
              r = u[1],
              i = u[2];
          return i && (e = "0".repeat(r.length) + i, n = "9".repeat(r.length) + i), [e = e.padEnd(this.maxLength, "0"), n = n.padEnd(this.maxLength, "9")];
        }
      }, {
        key: "doPrepare",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (t = Wt(Gt(n.prototype), "doPrepare", this).call(this, t, e).replace(/\D/g, ""), !this.autofix) return t;

          for (var u = String(this.from).padStart(this.maxLength, "0"), r = String(this.to).padStart(this.maxLength, "0"), i = this.value, a = "", s = 0; s < t.length; ++s) {
            var o = i + a + t[s],
                l = Jt(this.boundaries(o), 2),
                h = l[0],
                c = l[1];
            Number(c) < this.from ? a += u[o.length - 1] : Number(h) > this.to ? a += r[o.length - 1] : a += t[s];
          }

          return a;
        }
      }, {
        key: "doValidate",
        value: function value() {
          var t,
              e = this.value;
          if (-1 === e.search(/[^0]/) && e.length <= this._matchFrom) return !0;

          for (var u = Jt(this.boundaries(e), 2), r = u[0], i = u[1], a = arguments.length, s = new Array(a), o = 0; o < a; o++) {
            s[o] = arguments[o];
          }

          return this.from <= Number(i) && Number(r) <= this.to && (t = Wt(Gt(n.prototype), "doValidate", this)).call.apply(t, [this].concat(s));
        }
      }]), n;
    }();

    ae.MaskedRange = ke;

    var ge = function (t) {
      Ut(n, ve);
      var e = Kt(n);

      function n(t) {
        return Nt(this, n), e.call(this, Object.assign({}, n.DEFAULTS, t));
      }

      return Ht(n, [{
        key: "_update",
        value: function value(t) {
          t.mask === Date && delete t.mask, t.pattern && (t.mask = t.pattern);
          var e = t.blocks;
          t.blocks = Object.assign({}, n.GET_DEFAULT_BLOCKS()), t.min && (t.blocks.Y.from = t.min.getFullYear()), t.max && (t.blocks.Y.to = t.max.getFullYear()), t.min && t.max && t.blocks.Y.from === t.blocks.Y.to && (t.blocks.m.from = t.min.getMonth() + 1, t.blocks.m.to = t.max.getMonth() + 1, t.blocks.m.from === t.blocks.m.to && (t.blocks.d.from = t.min.getDate(), t.blocks.d.to = t.max.getDate())), Object.assign(t.blocks, e), Object.keys(t.blocks).forEach(function (e) {
            var n = t.blocks[e];
            "autofix" in n || (n.autofix = t.autofix);
          }), Wt(Gt(n.prototype), "_update", this).call(this, t);
        }
      }, {
        key: "doValidate",
        value: function value() {
          for (var t, e = this.date, u = arguments.length, r = new Array(u), i = 0; i < u; i++) {
            r[i] = arguments[i];
          }

          return (t = Wt(Gt(n.prototype), "doValidate", this)).call.apply(t, [this].concat(r)) && (!this.isComplete || this.isDateExist(this.value) && null != e && (null == this.min || this.min <= e) && (null == this.max || e <= this.max));
        }
      }, {
        key: "isDateExist",
        value: function value(t) {
          return this.format(this.parse(t, this), this).indexOf(t) >= 0;
        }
      }, {
        key: "date",
        get: function get() {
          return this.typedValue;
        },
        set: function set(t) {
          this.typedValue = t;
        }
      }, {
        key: "typedValue",
        get: function get() {
          return this.isComplete ? Wt(Gt(n.prototype), "typedValue", this) : null;
        },
        set: function set(t) {
          Xt(Gt(n.prototype), "typedValue", t, this, !0);
        }
      }]), n;
    }();

    ge.DEFAULTS = {
      pattern: "d{.}`m{.}`Y",
      format: function format(t) {
        return [String(t.getDate()).padStart(2, "0"), String(t.getMonth() + 1).padStart(2, "0"), t.getFullYear()].join(".");
      },
      parse: function parse(t) {
        var e = Jt(t.split("."), 3),
            n = e[0],
            u = e[1],
            r = e[2];
        return new Date(r, u - 1, n);
      }
    }, ge.GET_DEFAULT_BLOCKS = function () {
      return {
        d: {
          mask: ke,
          from: 1,
          to: 31,
          maxLength: 2
        },
        m: {
          mask: ke,
          from: 1,
          to: 12,
          maxLength: 2
        },
        Y: {
          mask: ke,
          from: 1900,
          to: 9999
        }
      };
    }, ae.MaskedDate = ge;

    var ye = function () {
      function t() {
        Nt(this, t);
      }

      return Ht(t, [{
        key: "selectionStart",
        get: function get() {
          var t;

          try {
            t = this._unsafeSelectionStart;
          } catch (t) {}

          return null != t ? t : this.value.length;
        }
      }, {
        key: "selectionEnd",
        get: function get() {
          var t;

          try {
            t = this._unsafeSelectionEnd;
          } catch (t) {}

          return null != t ? t : this.value.length;
        }
      }, {
        key: "select",
        value: function value(t, e) {
          if (null != t && null != e && (t !== this.selectionStart || e !== this.selectionEnd)) try {
            this._unsafeSelect(t, e);
          } catch (t) {}
        }
      }, {
        key: "_unsafeSelect",
        value: function value(t, e) {}
      }, {
        key: "isActive",
        get: function get() {
          return !1;
        }
      }, {
        key: "bindEvents",
        value: function value(t) {}
      }, {
        key: "unbindEvents",
        value: function value() {}
      }]), t;
    }();

    ae.MaskElement = ye;

    var me = function (t) {
      Ut(n, ye);
      var e = Kt(n);

      function n(t) {
        var u;
        return Nt(this, n), (u = e.call(this)).input = t, u._handlers = {}, u;
      }

      return Ht(n, [{
        key: "rootElement",
        get: function get() {
          return this.input.getRootNode ? this.input.getRootNode() : document;
        }
      }, {
        key: "isActive",
        get: function get() {
          return this.input === this.rootElement.activeElement;
        }
      }, {
        key: "_unsafeSelectionStart",
        get: function get() {
          return this.input.selectionStart;
        }
      }, {
        key: "_unsafeSelectionEnd",
        get: function get() {
          return this.input.selectionEnd;
        }
      }, {
        key: "_unsafeSelect",
        value: function value(t, e) {
          this.input.setSelectionRange(t, e);
        }
      }, {
        key: "value",
        get: function get() {
          return this.input.value;
        },
        set: function set(t) {
          this.input.value = t;
        }
      }, {
        key: "bindEvents",
        value: function value(t) {
          var e = this;
          Object.keys(t).forEach(function (u) {
            return e._toggleEventHandler(n.EVENTS_MAP[u], t[u]);
          });
        }
      }, {
        key: "unbindEvents",
        value: function value() {
          var t = this;
          Object.keys(this._handlers).forEach(function (e) {
            return t._toggleEventHandler(e);
          });
        }
      }, {
        key: "_toggleEventHandler",
        value: function value(t, e) {
          this._handlers[t] && (this.input.removeEventListener(t, this._handlers[t]), delete this._handlers[t]), e && (this.input.addEventListener(t, e), this._handlers[t] = e);
        }
      }]), n;
    }();

    me.EVENTS_MAP = {
      selectionChange: "keydown",
      input: "input",
      drop: "drop",
      click: "click",
      focus: "focus",
      commit: "blur"
    }, ae.HTMLMaskElement = me;

    var _e = function (t) {
      Ut(n, me);
      var e = Kt(n);

      function n() {
        return Nt(this, n), e.apply(this, arguments);
      }

      return Ht(n, [{
        key: "_unsafeSelectionStart",
        get: function get() {
          var t = this.rootElement,
              e = t.getSelection && t.getSelection();
          return e && e.anchorOffset;
        }
      }, {
        key: "_unsafeSelectionEnd",
        get: function get() {
          var t = this.rootElement,
              e = t.getSelection && t.getSelection();
          return e && this._unsafeSelectionStart + String(e).length;
        }
      }, {
        key: "_unsafeSelect",
        value: function value(t, e) {
          if (this.rootElement.createRange) {
            var n = this.rootElement.createRange();
            n.setStart(this.input.firstChild || this.input, t), n.setEnd(this.input.lastChild || this.input, e);
            var u = this.rootElement,
                r = u.getSelection && u.getSelection();
            r && (r.removeAllRanges(), r.addRange(n));
          }
        }
      }, {
        key: "value",
        get: function get() {
          return this.input.textContent;
        },
        set: function set(t) {
          this.input.textContent = t;
        }
      }]), n;
    }();

    ae.HTMLContenteditableMaskElement = _e;

    var Ae = function () {
      function t(e, n) {
        Nt(this, t), this.el = e instanceof ye ? e : e.isContentEditable && "INPUT" !== e.tagName && "TEXTAREA" !== e.tagName ? new _e(e) : new me(e), this.masked = le(n), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
      }

      return Ht(t, [{
        key: "mask",
        get: function get() {
          return this.masked.mask;
        },
        set: function set(t) {
          if (!this.maskEquals(t)) if (t instanceof ae.Masked || this.masked.constructor !== oe(t)) {
            var e = le({
              mask: t
            });
            e.unmaskedValue = this.masked.unmaskedValue, this.masked = e;
          } else this.masked.updateOptions({
            mask: t
          });
        }
      }, {
        key: "maskEquals",
        value: function value(t) {
          return null == t || t === this.masked.mask || t === Date && this.masked instanceof ge;
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        },
        set: function set(t) {
          this.masked.value = t, this.updateControl(), this.alignCursor();
        }
      }, {
        key: "unmaskedValue",
        get: function get() {
          return this._unmaskedValue;
        },
        set: function set(t) {
          this.masked.unmaskedValue = t, this.updateControl(), this.alignCursor();
        }
      }, {
        key: "typedValue",
        get: function get() {
          return this.masked.typedValue;
        },
        set: function set(t) {
          this.masked.typedValue = t, this.updateControl(), this.alignCursor();
        }
      }, {
        key: "_bindEvents",
        value: function value() {
          this.el.bindEvents({
            selectionChange: this._saveSelection,
            input: this._onInput,
            drop: this._onDrop,
            click: this._onClick,
            focus: this._onFocus,
            commit: this._onChange
          });
        }
      }, {
        key: "_unbindEvents",
        value: function value() {
          this.el && this.el.unbindEvents();
        }
      }, {
        key: "_fireEvent",
        value: function value(t) {
          for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), u = 1; u < e; u++) {
            n[u - 1] = arguments[u];
          }

          var r = this._listeners[t];
          r && r.forEach(function (t) {
            return t.apply(void 0, n);
          });
        }
      }, {
        key: "selectionStart",
        get: function get() {
          return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
        }
      }, {
        key: "cursorPos",
        get: function get() {
          return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
        },
        set: function set(t) {
          this.el && this.el.isActive && (this.el.select(t, t), this._saveSelection());
        }
      }, {
        key: "_saveSelection",
        value: function value() {
          this.value !== this.el.value && console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."), this._selection = {
            start: this.selectionStart,
            end: this.cursorPos
          };
        }
      }, {
        key: "updateValue",
        value: function value() {
          this.masked.value = this.el.value, this._value = this.masked.value;
        }
      }, {
        key: "updateControl",
        value: function value() {
          var t = this.masked.unmaskedValue,
              e = this.masked.value,
              n = this.unmaskedValue !== t || this.value !== e;
          this._unmaskedValue = t, this._value = e, this.el.value !== e && (this.el.value = e), n && this._fireChangeEvents();
        }
      }, {
        key: "updateOptions",
        value: function value(t) {
          var e = t.mask,
              n = Yt(t, ["mask"]),
              u = !this.maskEquals(e),
              r = !function t(e, n) {
            if (n === e) return !0;
            var u,
                r = Array.isArray(n),
                i = Array.isArray(e);

            if (r && i) {
              if (n.length != e.length) return !1;

              for (u = 0; u < n.length; u++) {
                if (!t(n[u], e[u])) return !1;
              }

              return !0;
            }

            if (r != i) return !1;

            if (n && e && "object" === Vt(n) && "object" === Vt(e)) {
              var a = n instanceof Date,
                  s = e instanceof Date;
              if (a && s) return n.getTime() == e.getTime();
              if (a != s) return !1;
              var o = n instanceof RegExp,
                  l = e instanceof RegExp;
              if (o && l) return n.toString() == e.toString();
              if (o != l) return !1;
              var h = Object.keys(n);

              for (u = 0; u < h.length; u++) {
                if (!Object.prototype.hasOwnProperty.call(e, h[u])) return !1;
              }

              for (u = 0; u < h.length; u++) {
                if (!t(e[h[u]], n[h[u]])) return !1;
              }

              return !0;
            }

            return !(!n || !e || "function" != typeof n || "function" != typeof e) && n.toString() === e.toString();
          }(this.masked, n);
          u && (this.mask = e), r && this.masked.updateOptions(n), (u || r) && this.updateControl();
        }
      }, {
        key: "updateCursor",
        value: function value(t) {
          null != t && (this.cursorPos = t, this._delayUpdateCursor(t));
        }
      }, {
        key: "_delayUpdateCursor",
        value: function value(t) {
          var e = this;
          this._abortUpdateCursor(), this._changingCursorPos = t, this._cursorChanging = setTimeout(function () {
            e.el && (e.cursorPos = e._changingCursorPos, e._abortUpdateCursor());
          }, 10);
        }
      }, {
        key: "_fireChangeEvents",
        value: function value() {
          this._fireEvent("accept", this._inputEvent), this.masked.isComplete && this._fireEvent("complete", this._inputEvent);
        }
      }, {
        key: "_abortUpdateCursor",
        value: function value() {
          this._cursorChanging && (clearTimeout(this._cursorChanging), delete this._cursorChanging);
        }
      }, {
        key: "alignCursor",
        value: function value() {
          this.cursorPos = this.masked.nearestInputPos(this.cursorPos, ee.LEFT);
        }
      }, {
        key: "alignCursorFriendly",
        value: function value() {
          this.selectionStart === this.cursorPos && this.alignCursor();
        }
      }, {
        key: "on",
        value: function value(t, e) {
          return this._listeners[t] || (this._listeners[t] = []), this._listeners[t].push(e), this;
        }
      }, {
        key: "off",
        value: function value(t, e) {
          if (!this._listeners[t]) return this;
          if (!e) return delete this._listeners[t], this;

          var n = this._listeners[t].indexOf(e);

          return n >= 0 && this._listeners[t].splice(n, 1), this;
        }
      }, {
        key: "_onInput",
        value: function value(t) {
          if (this._inputEvent = t, this._abortUpdateCursor(), !this._selection) return this.updateValue();
          var e = new ue(this.el.value, this.cursorPos, this.value, this._selection),
              n = this.masked.rawInputValue,
              u = this.masked.splice(e.startChangePos, e.removed.length, e.inserted, e.removeDirection).offset,
              r = n === this.masked.rawInputValue ? e.removeDirection : ee.NONE,
              i = this.masked.nearestInputPos(e.startChangePos + u, r);
          this.updateControl(), this.updateCursor(i), delete this._inputEvent;
        }
      }, {
        key: "_onChange",
        value: function value() {
          this.value !== this.el.value && this.updateValue(), this.masked.doCommit(), this.updateControl(), this._saveSelection();
        }
      }, {
        key: "_onDrop",
        value: function value(t) {
          t.preventDefault(), t.stopPropagation();
        }
      }, {
        key: "_onFocus",
        value: function value(t) {
          this.alignCursorFriendly();
        }
      }, {
        key: "_onClick",
        value: function value(t) {
          this.alignCursorFriendly();
        }
      }, {
        key: "destroy",
        value: function value() {
          this._unbindEvents(), this._listeners.length = 0, delete this.el;
        }
      }]), t;
    }();

    ae.InputMask = Ae;

    var be = function (t) {
      Ut(n, ve);
      var e = Kt(n);

      function n() {
        return Nt(this, n), e.apply(this, arguments);
      }

      return Ht(n, [{
        key: "_update",
        value: function value(t) {
          t["enum"] && (t.mask = "*".repeat(t["enum"][0].length)), Wt(Gt(n.prototype), "_update", this).call(this, t);
        }
      }, {
        key: "doValidate",
        value: function value() {
          for (var t, e = this, u = arguments.length, r = new Array(u), i = 0; i < u; i++) {
            r[i] = arguments[i];
          }

          return this["enum"].some(function (t) {
            return t.indexOf(e.unmaskedValue) >= 0;
          }) && (t = Wt(Gt(n.prototype), "doValidate", this)).call.apply(t, [this].concat(r));
        }
      }]), n;
    }();

    ae.MaskedEnum = be;

    var Ee = function (t) {
      Ut(n, se);
      var e = Kt(n);

      function n(t) {
        return Nt(this, n), e.call(this, Object.assign({}, n.DEFAULTS, t));
      }

      return Ht(n, [{
        key: "_update",
        value: function value(t) {
          Wt(Gt(n.prototype), "_update", this).call(this, t), this._updateRegExps();
        }
      }, {
        key: "_updateRegExps",
        value: function value() {
          var t = "^" + (this.allowNegative ? "[+|\\-]?" : ""),
              e = (this.scale ? "(" + ne(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
          this._numberRegExpInput = new RegExp(t + "(0|([1-9]+\\d*))?" + e), this._numberRegExp = new RegExp(t + "\\d*" + e), this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(ne).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(ne(this.thousandsSeparator), "g");
        }
      }, {
        key: "_removeThousandsSeparators",
        value: function value(t) {
          return t.replace(this._thousandsSeparatorRegExp, "");
        }
      }, {
        key: "_insertThousandsSeparators",
        value: function value(t) {
          var e = t.split(this.radix);
          return e[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator), e.join(this.radix);
        }
      }, {
        key: "doPrepare",
        value: function value(t) {
          for (var e, u = arguments.length, r = new Array(u > 1 ? u - 1 : 0), i = 1; i < u; i++) {
            r[i - 1] = arguments[i];
          }

          return (e = Wt(Gt(n.prototype), "doPrepare", this)).call.apply(e, [this, this._removeThousandsSeparators(t.replace(this._mapToRadixRegExp, this.radix))].concat(r));
        }
      }, {
        key: "_separatorsCount",
        value: function value(t) {
          for (var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = 0, u = 0; u < t; ++u) {
            this._value.indexOf(this.thousandsSeparator, u) === u && (++n, e && (t += this.thousandsSeparator.length));
          }

          return n;
        }
      }, {
        key: "_separatorsCountFromSlice",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._value;
          return this._separatorsCount(this._removeThousandsSeparators(t).length, !0);
        }
      }, {
        key: "extractInput",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
              u = arguments.length > 2 ? arguments[2] : void 0,
              r = Jt(this._adjustRangeWithSeparators(t, e), 2);
          return t = r[0], e = r[1], this._removeThousandsSeparators(Wt(Gt(n.prototype), "extractInput", this).call(this, t, e, u));
        }
      }, {
        key: "_appendCharRaw",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (!this.thousandsSeparator) return Wt(Gt(n.prototype), "_appendCharRaw", this).call(this, t, e);

          var u = e.tail && e._beforeTailState ? e._beforeTailState._value : this._value,
              r = this._separatorsCountFromSlice(u);

          this._value = this._removeThousandsSeparators(this.value);
          var i = Wt(Gt(n.prototype), "_appendCharRaw", this).call(this, t, e);
          this._value = this._insertThousandsSeparators(this._value);

          var a = e.tail && e._beforeTailState ? e._beforeTailState._value : this._value,
              s = this._separatorsCountFromSlice(a);

          return i.tailShift += (s - r) * this.thousandsSeparator.length, i.skip = !i.rawInserted && t === this.thousandsSeparator, i;
        }
      }, {
        key: "_findSeparatorAround",
        value: function value(t) {
          if (this.thousandsSeparator) {
            var e = t - this.thousandsSeparator.length + 1,
                n = this.value.indexOf(this.thousandsSeparator, e);
            if (n <= t) return n;
          }

          return -1;
        }
      }, {
        key: "_adjustRangeWithSeparators",
        value: function value(t, e) {
          var n = this._findSeparatorAround(t);

          n >= 0 && (t = n);

          var u = this._findSeparatorAround(e);

          return u >= 0 && (e = u + this.thousandsSeparator.length), [t, e];
        }
      }, {
        key: "remove",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
              n = Jt(this._adjustRangeWithSeparators(t, e), 2);
          t = n[0], e = n[1];

          var u = this.value.slice(0, t),
              r = this.value.slice(e),
              i = this._separatorsCount(u.length);

          this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(u + r));

          var a = this._separatorsCountFromSlice(u);

          return new re({
            tailShift: (a - i) * this.thousandsSeparator.length
          });
        }
      }, {
        key: "nearestInputPos",
        value: function value(t, e) {
          if (!this.thousandsSeparator) return t;

          switch (e) {
            case ee.NONE:
            case ee.LEFT:
            case ee.FORCE_LEFT:
              var n = this._findSeparatorAround(t - 1);

              if (n >= 0) {
                var u = n + this.thousandsSeparator.length;
                if (t < u || this.value.length <= u || e === ee.FORCE_LEFT) return n;
              }

              break;

            case ee.RIGHT:
            case ee.FORCE_RIGHT:
              var r = this._findSeparatorAround(t);

              if (r >= 0) return r + this.thousandsSeparator.length;
          }

          return t;
        }
      }, {
        key: "doValidate",
        value: function value(t) {
          var e = (t.input ? this._numberRegExpInput : this._numberRegExp).test(this._removeThousandsSeparators(this.value));

          if (e) {
            var u = this.number;
            e = e && !isNaN(u) && (null == this.min || this.min >= 0 || this.min <= this.number) && (null == this.max || this.max <= 0 || this.number <= this.max);
          }

          return e && Wt(Gt(n.prototype), "doValidate", this).call(this, t);
        }
      }, {
        key: "doCommit",
        value: function value() {
          if (this.value) {
            var t = this.number,
                e = t;
            null != this.min && (e = Math.max(e, this.min)), null != this.max && (e = Math.min(e, this.max)), e !== t && (this.unmaskedValue = String(e));
            var u = this.value;
            this.normalizeZeros && (u = this._normalizeZeros(u)), this.padFractionalZeros && (u = this._padFractionalZeros(u)), this._value = u;
          }

          Wt(Gt(n.prototype), "doCommit", this).call(this);
        }
      }, {
        key: "_normalizeZeros",
        value: function value(t) {
          var e = this._removeThousandsSeparators(t).split(this.radix);

          return e[0] = e[0].replace(/^(\D*)(0*)(\d*)/, function (t, e, n, u) {
            return e + u;
          }), t.length && !/\d$/.test(e[0]) && (e[0] = e[0] + "0"), e.length > 1 && (e[1] = e[1].replace(/0*$/, ""), e[1].length || (e.length = 1)), this._insertThousandsSeparators(e.join(this.radix));
        }
      }, {
        key: "_padFractionalZeros",
        value: function value(t) {
          if (!t) return t;
          var e = t.split(this.radix);
          return e.length < 2 && e.push(""), e[1] = e[1].padEnd(this.scale, "0"), e.join(this.radix);
        }
      }, {
        key: "unmaskedValue",
        get: function get() {
          return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, ".");
        },
        set: function set(t) {
          Xt(Gt(n.prototype), "unmaskedValue", t.replace(".", this.radix), this, !0);
        }
      }, {
        key: "typedValue",
        get: function get() {
          return Number(this.unmaskedValue);
        },
        set: function set(t) {
          Xt(Gt(n.prototype), "unmaskedValue", String(t), this, !0);
        }
      }, {
        key: "number",
        get: function get() {
          return this.typedValue;
        },
        set: function set(t) {
          this.typedValue = t;
        }
      }, {
        key: "allowNegative",
        get: function get() {
          return this.signed || null != this.min && this.min < 0 || null != this.max && this.max < 0;
        }
      }]), n;
    }();

    Ee.DEFAULTS = {
      radix: ",",
      thousandsSeparator: "",
      mapToRadix: ["."],
      scale: 2,
      signed: !1,
      normalizeZeros: !0,
      padFractionalZeros: !1
    }, ae.MaskedNumber = Ee;

    var Ce = function (t) {
      Ut(n, se);
      var e = Kt(n);

      function n() {
        return Nt(this, n), e.apply(this, arguments);
      }

      return Ht(n, [{
        key: "_update",
        value: function value(t) {
          t.mask && (t.validate = t.mask), Wt(Gt(n.prototype), "_update", this).call(this, t);
        }
      }]), n;
    }();

    ae.MaskedFunction = Ce;

    var Fe = function (t) {
      Ut(n, se);
      var e = Kt(n);

      function n(t) {
        var u;
        return Nt(this, n), (u = e.call(this, Object.assign({}, n.DEFAULTS, t))).currentMask = null, u;
      }

      return Ht(n, [{
        key: "_update",
        value: function value(t) {
          Wt(Gt(n.prototype), "_update", this).call(this, t), "mask" in t && (this.compiledMasks = Array.isArray(t.mask) ? t.mask.map(function (t) {
            return le(t);
          }) : []);
        }
      }, {
        key: "_appendCharRaw",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = this._applyDispatch(t, e);

          return this.currentMask && n.aggregate(this.currentMask._appendChar(t, e)), n;
        }
      }, {
        key: "_applyDispatch",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = e.tail && null != e._beforeTailState ? e._beforeTailState._value : this.value,
              u = this.rawInputValue,
              r = e.tail && null != e._beforeTailState ? e._beforeTailState._rawInputValue : u,
              i = u.slice(r.length),
              a = this.currentMask,
              s = new re(),
              o = a && a.state;
          if (this.currentMask = this.doDispatch(t, Object.assign({}, e)), this.currentMask) if (this.currentMask !== a) {
            if (this.currentMask.reset(), r) {
              var l = this.currentMask.append(r, {
                raw: !0
              });
              s.tailShift = l.inserted.length - n.length;
            }

            i && (s.tailShift += this.currentMask.append(i, {
              raw: !0,
              tail: !0
            }).tailShift);
          } else this.currentMask.state = o;
          return s;
        }
      }, {
        key: "_appendPlaceholder",
        value: function value() {
          var t = this._applyDispatch.apply(this, arguments);

          return this.currentMask && t.aggregate(this.currentMask._appendPlaceholder()), t;
        }
      }, {
        key: "doDispatch",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.dispatch(t, this, e);
        }
      }, {
        key: "doValidate",
        value: function value() {
          for (var t, e, u = arguments.length, r = new Array(u), i = 0; i < u; i++) {
            r[i] = arguments[i];
          }

          return (t = Wt(Gt(n.prototype), "doValidate", this)).call.apply(t, [this].concat(r)) && (!this.currentMask || (e = this.currentMask).doValidate.apply(e, r));
        }
      }, {
        key: "reset",
        value: function value() {
          this.currentMask && this.currentMask.reset(), this.compiledMasks.forEach(function (t) {
            return t.reset();
          });
        }
      }, {
        key: "value",
        get: function get() {
          return this.currentMask ? this.currentMask.value : "";
        },
        set: function set(t) {
          Xt(Gt(n.prototype), "value", t, this, !0);
        }
      }, {
        key: "unmaskedValue",
        get: function get() {
          return this.currentMask ? this.currentMask.unmaskedValue : "";
        },
        set: function set(t) {
          Xt(Gt(n.prototype), "unmaskedValue", t, this, !0);
        }
      }, {
        key: "typedValue",
        get: function get() {
          return this.currentMask ? this.currentMask.typedValue : "";
        },
        set: function set(t) {
          var e = String(t);
          this.currentMask && (this.currentMask.typedValue = t, e = this.currentMask.unmaskedValue), this.unmaskedValue = e;
        }
      }, {
        key: "isComplete",
        get: function get() {
          return !!this.currentMask && this.currentMask.isComplete;
        }
      }, {
        key: "remove",
        value: function value() {
          var t,
              e = new re();
          this.currentMask && e.aggregate((t = this.currentMask).remove.apply(t, arguments)).aggregate(this._applyDispatch());
          return e;
        }
      }, {
        key: "state",
        get: function get() {
          return Object.assign({}, Wt(Gt(n.prototype), "state", this), {
            _rawInputValue: this.rawInputValue,
            compiledMasks: this.compiledMasks.map(function (t) {
              return t.state;
            }),
            currentMaskRef: this.currentMask,
            currentMask: this.currentMask && this.currentMask.state
          });
        },
        set: function set(t) {
          var e = t.compiledMasks,
              u = t.currentMaskRef,
              r = t.currentMask,
              i = Yt(t, ["compiledMasks", "currentMaskRef", "currentMask"]);
          this.compiledMasks.forEach(function (t, n) {
            return t.state = e[n];
          }), null != u && (this.currentMask = u, this.currentMask.state = r), Xt(Gt(n.prototype), "state", i, this, !0);
        }
      }, {
        key: "extractInput",
        value: function value() {
          var t;
          return this.currentMask ? (t = this.currentMask).extractInput.apply(t, arguments) : "";
        }
      }, {
        key: "extractTail",
        value: function value() {
          for (var t, e, u = arguments.length, r = new Array(u), i = 0; i < u; i++) {
            r[i] = arguments[i];
          }

          return this.currentMask ? (t = this.currentMask).extractTail.apply(t, r) : (e = Wt(Gt(n.prototype), "extractTail", this)).call.apply(e, [this].concat(r));
        }
      }, {
        key: "doCommit",
        value: function value() {
          this.currentMask && this.currentMask.doCommit(), Wt(Gt(n.prototype), "doCommit", this).call(this);
        }
      }, {
        key: "nearestInputPos",
        value: function value() {
          for (var t, e, u = arguments.length, r = new Array(u), i = 0; i < u; i++) {
            r[i] = arguments[i];
          }

          return this.currentMask ? (t = this.currentMask).nearestInputPos.apply(t, r) : (e = Wt(Gt(n.prototype), "nearestInputPos", this)).call.apply(e, [this].concat(r));
        }
      }, {
        key: "overwrite",
        get: function get() {
          return this.currentMask ? this.currentMask.overwrite : Wt(Gt(n.prototype), "overwrite", this);
        },
        set: function set(t) {
          console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
        }
      }]), n;
    }();

    Fe.DEFAULTS = {
      dispatch: function dispatch(t, e, n) {
        if (e.compiledMasks.length) {
          var u = e.rawInputValue,
              r = e.compiledMasks.map(function (e, r) {
            return e.reset(), e.append(u, {
              raw: !0
            }), e.append(t, n), {
              weight: e.rawInputValue.length,
              index: r
            };
          });
          return r.sort(function (t, e) {
            return e.weight - t.weight;
          }), e.compiledMasks[r[0].index];
        }
      }
    }, ae.MaskedDynamic = Fe;
    var Se = {
      MASKED: "value",
      UNMASKED: "unmaskedValue",
      TYPED: "typedValue"
    };

    function De(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Se.MASKED,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Se.MASKED,
          u = le(t);
      return function (t) {
        return u.runIsolated(function (u) {
          return u[e] = t, u[n];
        });
      };
    }

    function Be(t) {
      for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), u = 1; u < e; u++) {
        n[u - 1] = arguments[u];
      }

      return De.apply(void 0, n)(t);
    }

    ae.PIPE_TYPE = Se, ae.createPipe = De, ae.pipe = Be;

    try {
      globalThis.IMask = ae;
    } catch (t) {}

    t.HTMLContenteditableMaskElement = _e, t.HTMLMaskElement = me, t.InputMask = Ae, t.MaskElement = ye, t.Masked = se, t.MaskedDate = ge, t.MaskedDynamic = Fe, t.MaskedEnum = be, t.MaskedFunction = Ce, t.MaskedNumber = Ee, t.MaskedPattern = ve, t.MaskedRange = ke, t.MaskedRegExp = de, t.PIPE_TYPE = Se, t.createMask = le, t.createPipe = De, t["default"] = ae, t.pipe = Be, Object.defineProperty(t, "__esModule", {
      value: !0
    });
  });
  var mainForm1 = document.querySelector('.main-form1');
  var inputName1 = document.querySelector('.inp-name1');
  var inputPhone1 = document.querySelector('.inp-phone1');
  var mainForm2 = document.querySelector('.main-form2');
  var inputName2 = document.querySelector('.inp-name2');
  var inputPhone2 = document.querySelector('.inp-phone2');
  var mainForm3 = document.querySelector('.main-form3');
  var inputName3 = document.querySelector('.inp-name3');
  var inputPhone3 = document.querySelector('.inp-phone3'); // const inputMail = document.querySelector('#input-mail');
  // const inputPassword1 = document.querySelector('#input-password1');
  // const inputPassword2 = document.querySelector('#input-password2');
  // Проверка поля

  function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
      if (input.value.trim() === '') {
        showError(input, 'Ошибка');
      } else {
        showSuccess(input);
      }
    });
  } // Проверка длины


  function checkLength(input, min, max) {
    if (input.value.length < min) {
      showError(input, 'Коротко');
    } else if (input.value.length > max) {
      showError(input, 'Много');
    } else {
      showSuccess(input);
    }
  } // Показать ошибку


  function showError(input, message) {
    var formControl = input.parentElement.parentElement;
    formControl.className = 'input-container error';
    var small = formControl.querySelector('small');
    small.innerText = message;
  } // Показать успех


  function showSuccess(input) {
    var formControl = input.parentElement.parentElement;
    formControl.className = 'input-container success';
  } // Проверка почты
  // function checkEmail(input) {
  // 	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // 	if (re.test(input.value)) {
  // 		showSuccess(input);
  // 	} else {
  // 		showError(input, 'Недопустимо')
  // 	}
  // }
  // Проверка пароля
  // function checkPasswordsMatch(input1, input2) {
  // 	if (input1.value !== input2.value) {
  // 		showError(input2, 'Не совпадает')
  // 	}
  // }


  mainForm1.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([inputName1, inputPhone1]);
    checkLength(inputName1, 2, 20);
    checkLength(inputPhone1, 16, 20); // checkEmail(inputMail);
    // checkPasswordsMatch(inputPassword1, inputPassword2);
  });
  mainForm2.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([inputName2, inputPhone2]);
    checkLength(inputName2, 2, 20);
    checkLength(inputPhone2, 16, 20);
  });
  mainForm3.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([inputName3, inputPhone3]);
    checkLength(inputName3, 2, 20);
    checkLength(inputPhone3, 16, 20);
  });
  !function (e, t) {
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define("Siema", [], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.Siema = t() : e.Siema = t();
  }("undefined" != typeof self ? self : _this, function () {
    return function (e) {
      function t(r) {
        if (i[r]) return i[r].exports;
        var n = i[r] = {
          i: r,
          l: !1,
          exports: {}
        };
        return e[r].call(n.exports, n, n.exports, t), n.l = !0, n.exports;
      }

      var i = {};
      return t.m = e, t.c = i, t.d = function (e, i, r) {
        t.o(e, i) || Object.defineProperty(e, i, {
          configurable: !1,
          enumerable: !0,
          get: r
        });
      }, t.n = function (e) {
        var i = e && e.__esModule ? function () {
          return e["default"];
        } : function () {
          return e;
        };
        return t.d(i, "a", i), i;
      }, t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }, t.p = "", t(t.s = 0);
    }([function (e, t, i) {
      "use strict";

      function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      Object.defineProperty(t, "__esModule", {
        value: !0
      });

      var n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      },
          s = function () {
        function e(e, t) {
          for (var i = 0; i < t.length; i++) {
            var r = t[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }

        return function (t, i, r) {
          return i && e(t.prototype, i), r && e(t, r), t;
        };
      }(),
          l = function () {
        function e(t) {
          var i = this;
          if (r(this, e), this.config = e.mergeSettings(t), this.selector = "string" == typeof this.config.selector ? document.querySelector(this.config.selector) : this.config.selector, null === this.selector) throw new Error("Something wrong with your selector 😭");
          this.resolveSlidesNumber(), this.selectorWidth = this.selector.offsetWidth, this.innerElements = [].slice.call(this.selector.children), this.currentSlide = this.config.loop ? this.config.startIndex % this.innerElements.length : Math.max(0, Math.min(this.config.startIndex, this.innerElements.length - this.perPage)), this.transformProperty = e.webkitOrNot(), ["resizeHandler", "touchstartHandler", "touchendHandler", "touchmoveHandler", "mousedownHandler", "mouseupHandler", "mouseleaveHandler", "mousemoveHandler", "clickHandler"].forEach(function (e) {
            i[e] = i[e].bind(i);
          }), this.init();
        }

        return s(e, [{
          key: "attachEvents",
          value: function value() {
            window.addEventListener("resize", this.resizeHandler), this.config.draggable && (this.pointerDown = !1, this.drag = {
              startX: 0,
              endX: 0,
              startY: 0,
              letItGo: null,
              preventClick: !1
            }, this.selector.addEventListener("touchstart", this.touchstartHandler), this.selector.addEventListener("touchend", this.touchendHandler), this.selector.addEventListener("touchmove", this.touchmoveHandler), this.selector.addEventListener("mousedown", this.mousedownHandler), this.selector.addEventListener("mouseup", this.mouseupHandler), this.selector.addEventListener("mouseleave", this.mouseleaveHandler), this.selector.addEventListener("mousemove", this.mousemoveHandler), this.selector.addEventListener("click", this.clickHandler));
          }
        }, {
          key: "detachEvents",
          value: function value() {
            window.removeEventListener("resize", this.resizeHandler), this.selector.removeEventListener("touchstart", this.touchstartHandler), this.selector.removeEventListener("touchend", this.touchendHandler), this.selector.removeEventListener("touchmove", this.touchmoveHandler), this.selector.removeEventListener("mousedown", this.mousedownHandler), this.selector.removeEventListener("mouseup", this.mouseupHandler), this.selector.removeEventListener("mouseleave", this.mouseleaveHandler), this.selector.removeEventListener("mousemove", this.mousemoveHandler), this.selector.removeEventListener("click", this.clickHandler);
          }
        }, {
          key: "init",
          value: function value() {
            this.attachEvents(), this.selector.style.overflow = "hidden", this.selector.style.direction = this.config.rtl ? "rtl" : "ltr", this.buildSliderFrame(), this.config.onInit.call(this);
          }
        }, {
          key: "buildSliderFrame",
          value: function value() {
            var e = this.selectorWidth / this.perPage,
                t = this.config.loop ? this.innerElements.length + 2 * this.perPage : this.innerElements.length;
            this.sliderFrame = document.createElement("div"), this.sliderFrame.style.width = e * t + "px", this.enableTransition(), this.config.draggable && (this.selector.style.cursor = "-webkit-grab");
            var i = document.createDocumentFragment();
            if (this.config.loop) for (var r = this.innerElements.length - this.perPage; r < this.innerElements.length; r++) {
              var n = this.buildSliderFrameItem(this.innerElements[r].cloneNode(!0));
              i.appendChild(n);
            }

            for (var s = 0; s < this.innerElements.length; s++) {
              var l = this.buildSliderFrameItem(this.innerElements[s]);
              i.appendChild(l);
            }

            if (this.config.loop) for (var o = 0; o < this.perPage; o++) {
              var a = this.buildSliderFrameItem(this.innerElements[o].cloneNode(!0));
              i.appendChild(a);
            }
            this.sliderFrame.appendChild(i), this.selector.innerHTML = "", this.selector.appendChild(this.sliderFrame), this.slideToCurrent();
          }
        }, {
          key: "buildSliderFrameItem",
          value: function value(e) {
            var t = document.createElement("div");
            return t.style.cssFloat = this.config.rtl ? "right" : "left", t.style["float"] = this.config.rtl ? "right" : "left", t.style.width = (this.config.loop ? 100 / (this.innerElements.length + 2 * this.perPage) : 100 / this.innerElements.length) + "%", t.appendChild(e), t;
          }
        }, {
          key: "resolveSlidesNumber",
          value: function value() {
            if ("number" == typeof this.config.perPage) this.perPage = this.config.perPage;else if ("object" === n(this.config.perPage)) {
              this.perPage = 1;

              for (var e in this.config.perPage) {
                window.innerWidth >= e && (this.perPage = this.config.perPage[e]);
              }
            }
          }
        }, {
          key: "prev",
          value: function value() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                t = arguments[1];

            if (!(this.innerElements.length <= this.perPage)) {
              var i = this.currentSlide;

              if (this.config.loop) {
                if (this.currentSlide - e < 0) {
                  this.disableTransition();
                  var r = this.currentSlide + this.innerElements.length,
                      n = this.perPage,
                      s = r + n,
                      l = (this.config.rtl ? 1 : -1) * s * (this.selectorWidth / this.perPage),
                      o = this.config.draggable ? this.drag.endX - this.drag.startX : 0;
                  this.sliderFrame.style[this.transformProperty] = "translate3d(" + (l + o) + "px, 0, 0)", this.currentSlide = r - e;
                } else this.currentSlide = this.currentSlide - e;
              } else this.currentSlide = Math.max(this.currentSlide - e, 0);

              i !== this.currentSlide && (this.slideToCurrent(this.config.loop), this.config.onChange.call(this), t && t.call(this));
            }
          }
        }, {
          key: "next",
          value: function value() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                t = arguments[1];

            if (!(this.innerElements.length <= this.perPage)) {
              var i = this.currentSlide;

              if (this.config.loop) {
                if (this.currentSlide + e > this.innerElements.length - this.perPage) {
                  this.disableTransition();
                  var r = this.currentSlide - this.innerElements.length,
                      n = this.perPage,
                      s = r + n,
                      l = (this.config.rtl ? 1 : -1) * s * (this.selectorWidth / this.perPage),
                      o = this.config.draggable ? this.drag.endX - this.drag.startX : 0;
                  this.sliderFrame.style[this.transformProperty] = "translate3d(" + (l + o) + "px, 0, 0)", this.currentSlide = r + e;
                } else this.currentSlide = this.currentSlide + e;
              } else this.currentSlide = Math.min(this.currentSlide + e, this.innerElements.length - this.perPage);

              i !== this.currentSlide && (this.slideToCurrent(this.config.loop), this.config.onChange.call(this), t && t.call(this));
            }
          }
        }, {
          key: "disableTransition",
          value: function value() {
            this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing;
          }
        }, {
          key: "enableTransition",
          value: function value() {
            this.sliderFrame.style.webkitTransition = "all " + this.config.duration + "ms " + this.config.easing, this.sliderFrame.style.transition = "all " + this.config.duration + "ms " + this.config.easing;
          }
        }, {
          key: "goTo",
          value: function value(e, t) {
            if (!(this.innerElements.length <= this.perPage)) {
              var i = this.currentSlide;
              this.currentSlide = this.config.loop ? e % this.innerElements.length : Math.min(Math.max(e, 0), this.innerElements.length - this.perPage), i !== this.currentSlide && (this.slideToCurrent(), this.config.onChange.call(this), t && t.call(this));
            }
          }
        }, {
          key: "slideToCurrent",
          value: function value(e) {
            var t = this,
                i = this.config.loop ? this.currentSlide + this.perPage : this.currentSlide,
                r = (this.config.rtl ? 1 : -1) * i * (this.selectorWidth / this.perPage);
            e ? requestAnimationFrame(function () {
              requestAnimationFrame(function () {
                t.enableTransition(), t.sliderFrame.style[t.transformProperty] = "translate3d(" + r + "px, 0, 0)";
              });
            }) : this.sliderFrame.style[this.transformProperty] = "translate3d(" + r + "px, 0, 0)";
          }
        }, {
          key: "updateAfterDrag",
          value: function value() {
            var e = (this.config.rtl ? -1 : 1) * (this.drag.endX - this.drag.startX),
                t = Math.abs(e),
                i = this.config.multipleDrag ? Math.ceil(t / (this.selectorWidth / this.perPage)) : 1,
                r = e > 0 && this.currentSlide - i < 0,
                n = e < 0 && this.currentSlide + i > this.innerElements.length - this.perPage;
            e > 0 && t > this.config.threshold && this.innerElements.length > this.perPage ? this.prev(i) : e < 0 && t > this.config.threshold && this.innerElements.length > this.perPage && this.next(i), this.slideToCurrent(r || n);
          }
        }, {
          key: "resizeHandler",
          value: function value() {
            this.resolveSlidesNumber(), this.currentSlide + this.perPage > this.innerElements.length && (this.currentSlide = this.innerElements.length <= this.perPage ? 0 : this.innerElements.length - this.perPage), this.selectorWidth = this.selector.offsetWidth, this.buildSliderFrame();
          }
        }, {
          key: "clearDrag",
          value: function value() {
            this.drag = {
              startX: 0,
              endX: 0,
              startY: 0,
              letItGo: null,
              preventClick: this.drag.preventClick
            };
          }
        }, {
          key: "touchstartHandler",
          value: function value(e) {
            -1 !== ["TEXTAREA", "OPTION", "INPUT", "SELECT"].indexOf(e.target.nodeName) || (e.stopPropagation(), this.pointerDown = !0, this.drag.startX = e.touches[0].pageX, this.drag.startY = e.touches[0].pageY);
          }
        }, {
          key: "touchendHandler",
          value: function value(e) {
            e.stopPropagation(), this.pointerDown = !1, this.enableTransition(), this.drag.endX && this.updateAfterDrag(), this.clearDrag();
          }
        }, {
          key: "touchmoveHandler",
          value: function value(e) {
            if (e.stopPropagation(), null === this.drag.letItGo && (this.drag.letItGo = Math.abs(this.drag.startY - e.touches[0].pageY) < Math.abs(this.drag.startX - e.touches[0].pageX)), this.pointerDown && this.drag.letItGo) {
              e.preventDefault(), this.drag.endX = e.touches[0].pageX, this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing;
              var t = this.config.loop ? this.currentSlide + this.perPage : this.currentSlide,
                  i = t * (this.selectorWidth / this.perPage),
                  r = this.drag.endX - this.drag.startX,
                  n = this.config.rtl ? i + r : i - r;
              this.sliderFrame.style[this.transformProperty] = "translate3d(" + (this.config.rtl ? 1 : -1) * n + "px, 0, 0)";
            }
          }
        }, {
          key: "mousedownHandler",
          value: function value(e) {
            -1 !== ["TEXTAREA", "OPTION", "INPUT", "SELECT"].indexOf(e.target.nodeName) || (e.preventDefault(), e.stopPropagation(), this.pointerDown = !0, this.drag.startX = e.pageX);
          }
        }, {
          key: "mouseupHandler",
          value: function value(e) {
            e.stopPropagation(), this.pointerDown = !1, this.selector.style.cursor = "-webkit-grab", this.enableTransition(), this.drag.endX && this.updateAfterDrag(), this.clearDrag();
          }
        }, {
          key: "mousemoveHandler",
          value: function value(e) {
            if (e.preventDefault(), this.pointerDown) {
              "A" === e.target.nodeName && (this.drag.preventClick = !0), this.drag.endX = e.pageX, this.selector.style.cursor = "-webkit-grabbing", this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing;
              var t = this.config.loop ? this.currentSlide + this.perPage : this.currentSlide,
                  i = t * (this.selectorWidth / this.perPage),
                  r = this.drag.endX - this.drag.startX,
                  n = this.config.rtl ? i + r : i - r;
              this.sliderFrame.style[this.transformProperty] = "translate3d(" + (this.config.rtl ? 1 : -1) * n + "px, 0, 0)";
            }
          }
        }, {
          key: "mouseleaveHandler",
          value: function value(e) {
            this.pointerDown && (this.pointerDown = !1, this.selector.style.cursor = "-webkit-grab", this.drag.endX = e.pageX, this.drag.preventClick = !1, this.enableTransition(), this.updateAfterDrag(), this.clearDrag());
          }
        }, {
          key: "clickHandler",
          value: function value(e) {
            this.drag.preventClick && e.preventDefault(), this.drag.preventClick = !1;
          }
        }, {
          key: "remove",
          value: function value(e, t) {
            if (e < 0 || e >= this.innerElements.length) throw new Error("Item to remove doesn't exist 😭");
            var i = e < this.currentSlide,
                r = this.currentSlide + this.perPage - 1 === e;
            (i || r) && this.currentSlide--, this.innerElements.splice(e, 1), this.buildSliderFrame(), t && t.call(this);
          }
        }, {
          key: "insert",
          value: function value(e, t, i) {
            if (t < 0 || t > this.innerElements.length + 1) throw new Error("Unable to inset it at this index 😭");
            if (-1 !== this.innerElements.indexOf(e)) throw new Error("The same item in a carousel? Really? Nope 😭");
            var r = t <= this.currentSlide > 0 && this.innerElements.length;
            this.currentSlide = r ? this.currentSlide + 1 : this.currentSlide, this.innerElements.splice(t, 0, e), this.buildSliderFrame(), i && i.call(this);
          }
        }, {
          key: "prepend",
          value: function value(e, t) {
            this.insert(e, 0), t && t.call(this);
          }
        }, {
          key: "append",
          value: function value(e, t) {
            this.insert(e, this.innerElements.length + 1), t && t.call(this);
          }
        }, {
          key: "destroy",
          value: function value() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = arguments[1];

            if (this.detachEvents(), this.selector.style.cursor = "auto", e) {
              for (var i = document.createDocumentFragment(), r = 0; r < this.innerElements.length; r++) {
                i.appendChild(this.innerElements[r]);
              }

              this.selector.innerHTML = "", this.selector.appendChild(i), this.selector.removeAttribute("style");
            }

            t && t.call(this);
          }
        }], [{
          key: "mergeSettings",
          value: function value(e) {
            var t = {
              selector: ".siema",
              duration: 200,
              easing: "ease-out",
              perPage: 1,
              startIndex: 0,
              draggable: !0,
              multipleDrag: !0,
              threshold: 20,
              loop: !1,
              rtl: !1,
              onInit: function onInit() {},
              onChange: function onChange() {}
            },
                i = e;

            for (var r in i) {
              t[r] = i[r];
            }

            return t;
          }
        }, {
          key: "webkitOrNot",
          value: function value() {
            return "string" == typeof document.documentElement.style.transform ? "transform" : "WebkitTransform";
          }
        }]), e;
      }();

      t["default"] = l, e.exports = t["default"];
    }]);
  }); // let inputsPhone = Array.prototype.slice.call(document.querySelectorAll('.inp-phone'));
  // inputsPhone.forEach((e) => {
  // 	const phoneMask = IMask( e, { mask: '+{7}(000)000-00-00' })
  // })

  var phoneMask = IMask(document.querySelector('.inp-phone1'), {
    mask: '+{7}(000)000-00-00'
  });
  var phoneMask2 = IMask(document.querySelector('.inp-phone2'), {
    mask: '+{7}(000)000-00-00'
  });
  var phoneMask3 = IMask(document.querySelector('.inp-phone3'), {
    mask: '+{7}(000)000-00-00'
  }); // CUSTOM SELECT

  var x, i, j, l, ll, selElmnt, a, b, c;
  /* Look for any elements with the class "custom-select": */

  x = document.getElementsByClassName("custom-select");
  l = x.length;

  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */

    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */

    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");

    for (j = 1; j < ll; j++) {
      /* For each option in the original select element,
      create a new DIV that will act as an option item: */
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;

        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;

            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }

            this.setAttribute("class", "same-as-selected");
            break;
          }
        }

        h.click();
      });
      b.appendChild(c);
    }

    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
      /* When the select box is clicked, close any other select boxes,
      and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }

  function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x,
        y,
        i,
        xl,
        yl,
        arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;

    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i);
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }

    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  /* If the user clicks anywhere outside the select box,
  then close all select boxes: */


  document.addEventListener("click", closeAllSelect); // ==========
  // модальные окна

  var modals = function modals() {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
      var triggers = Array.prototype.slice.call(document.querySelectorAll(triggerSelector));
      var modal = document.querySelector(modalSelector);
      var btnsclose = Array.prototype.slice.call(document.querySelectorAll(closeSelector));
      btnsclose.forEach(function (item) {
        item.addEventListener('click', closeModal);
      });
      triggers.forEach(function (item) {
        item.addEventListener('click', openModal);
      });
      modal.addEventListener('click', function (e) {
        if (e.target === modal) {
          closeModal();
        }
      });
      document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {
          closeModal();
        }

        ;
      }, false);

      function openModal() {
        modal.classList.add('modal--show');
        document.body.style.overflow = 'hidden'; // clearInterval(openTimer);
      }

      function closeModal() {
        modal.classList.remove('modal--show');
        document.body.style.overflow = '';
      }

      ;
      var burgerCallBtn = document.querySelector('.burger__call-btn');
      var politicsClose = document.querySelector('.politics-close');
      var politicsModal = document.querySelector('.politics-modal');
      burgerCallBtn.addEventListener('click', function () {
        closeNav(); // closeNav лежит в файле burger-menu.js
      });
      politicsClose.addEventListener('click', function () {
        politicsModal.classList.remove('modal--show'); // politicsModal.classList.remove('animate__animated', 'animate__fadeIn');
      }); // var contentBtn = document.querySelector('.content-btn');
      // contentBtn.addEventListener('click', function() {
      // 	var contentM = document.querySelector('.content__modal');
      // 	contentM.classList.remove('modal--show');
      // 	document.body.style.overflow = '';
      // 	// contentM.classList.remove('animate__animated', 'animate__fadeIn');
      // });
      // function showModalByScroll() {
      // 	if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      // 		if (modal.classList.contains('form__modal')) {
      // 			openModal();
      // 			window.removeEventListener('scroll', showModalByScroll);
      // 		}
      // 	}
      // }
      // window.addEventListener('scroll', showModalByScroll);
      // function openTimer() {
      // 	setTimeout(openModal, 2000);
      // }
      // if (modal.classList.contains('form__modal')) {
      // 	openTimer();
      // }
    }

    bindModal('.phone__link', '.application-form', '.modal-close');
    bindModal('.burger__call-btn', '.application-form', '.modal-close');
    bindModal('.btn-signup', '.application-form', '.modal-close');
    bindModal('.consultation-btn', '.application-form', '.modal-close');
    bindModal('.card', '.content-modal', '.modal-close');
    bindModal('.btn-politics', '.politics-modal', '.politics-close');
  }; // ==========
  // Бургер меню


  var body = document.querySelector('body');
  var overlay = document.querySelector('.overlay');
  var navIcon = document.querySelector('.menu-btn');
  var burgerNav = document.querySelector('.burger-menu__block');
  var burgerItems = Array.prototype.slice.call(document.querySelectorAll('.burger-menu__items span'));
  var closeBurger = document.querySelector('.close-burger');
  navIcon.addEventListener('click', function () {
    this.classList.add('open');
    overlay.classList.add('show');
    burgerNav.classList.add('show');
    body.classList.add('overflow-hidden');
  });

  function closeNav() {
    navIcon.classList.remove('open');
    overlay.classList.remove('show');
    burgerNav.classList.remove('show');
    body.classList.remove('overflow-hidden');
  }

  overlay.addEventListener('click', closeNav);
  closeBurger.addEventListener('click', closeNav);
  burgerItems.forEach(function (item) {
    item.addEventListener('click', closeNav);
  }); // ==========
  // Шапка при скроле

  window.onscroll = function () {
    myFunction();
  };

  var header = document.querySelector(".header");
  var headerWrap = document.querySelector('.header-wrap');
  var sticky = header.offsetTop;
  var section = document.querySelector('.first-screen');
  var content = document.querySelector('.banner__container');

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("header--fixed");
      header.classList.add('animate__animated', 'animate__fadeIn');
      content.style.paddingTop = "77px";
    } else {
      header.classList.remove("header--fixed");
      content.style.paddingTop = "";
      header.classList.remove('animate__animated', 'animate__fadeIn');
    }
  }

  ; // ==========
  // Кнопка вверх

  var scrolled;
  var timer;

  document.querySelector('.btn-up').onclick = function () {
    scrolled = window.pageYOffset;
    scrollToTop();
  };

  function scrollToTop() {
    if (scrolled > 0) {
      window.scrollTo(0, scrolled);
      scrolled = scrolled - 100;
      timer = setTimeout(scrollToTop, 20);
    } else {
      clearTimeout(timer);
      window.scrollTo(0, 0);
    }
  }

  ; // ==========
  // Якори для меню

  function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, distance, duration);
      window.scroll(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  } // Это кнопки меню, которые скролят до нужного блока


  var mainAnchor = document.querySelector('.main-anchor');
  var block2Anchor = Array.prototype.slice.call(document.querySelectorAll('.aboutus-anchor'));
  var block3Anchor = Array.prototype.slice.call(document.querySelectorAll('.projects-anchor'));
  var block4Anchor = Array.prototype.slice.call(document.querySelectorAll('.skill-anchor'));
  var block5Anchor = Array.prototype.slice.call(document.querySelectorAll('.review-anchor'));
  var block6Anchor = Array.prototype.slice.call(document.querySelectorAll('.steps-anchor'));
  var block7Anchor = Array.prototype.slice.call(document.querySelectorAll('.final-anchor'));
  mainAnchor.addEventListener('click', function () {
    // Тут вставляешь название блока куда скролить
    smoothScroll('#first-screen', 1000);
  });
  block2Anchor.forEach(function (i) {
    i.addEventListener('click', function () {
      // Тут вставляешь название блока куда скролить
      smoothScroll('#aboutus', 1000);
    });
  });
  block3Anchor.forEach(function (i) {
    i.addEventListener('click', function () {
      // Тут вставляешь название блока куда скролить
      smoothScroll('#projects', 1000);
    });
  });
  block4Anchor.forEach(function (i) {
    i.addEventListener('click', function () {
      // Тут вставляешь название блока куда скролить
      smoothScroll('#skill', 1000);
    });
  });
  block5Anchor.forEach(function (i) {
    i.addEventListener('click', function () {
      // Тут вставляешь название блока куда скролить
      smoothScroll('#review', 1000);
    });
  });
  block6Anchor.forEach(function (i) {
    i.addEventListener('click', function () {
      // Тут вставляешь название блока куда скролить
      smoothScroll('#steps', 1000);
    });
  });
  block7Anchor.forEach(function (i) {
    i.addEventListener('click', function () {
      // Тут вставляешь название блока куда скролить
      smoothScroll('#final', 1000);
    });
  }); // // ==========
  // Слайдер отзывов

  var mySiema = new Siema({
    perPage: {
      768: 1,
      1024: 2
    },
    duration: 200,
    easing: 'ease-out',
    loop: true
  });
  var prev = document.querySelector('.prev');
  var next = document.querySelector('.next');
  prev.addEventListener('click', function () {
    return mySiema.prev();
  });
  next.addEventListener('click', function () {
    return mySiema.next();
  }); // ==========
  // Слайдер карточка домов

  var imgs = Array.prototype.slice.call(document.querySelectorAll('.min-img')); // const imgBtns = [ ... imgs];

  var imgId = 1;
  imgs.forEach(function (imgItem) {
    imgItem.addEventListener('click', function (event) {
      event.preventDefault();
      imgId = imgItem.dataset.id;
      slideImage();
    });
  });

  function slideImage() {
    var displayWidth = document.querySelector('.main-img img:first-child').clientWidth;
    document.querySelector('.main-img').style.transform = "translateX(".concat(-(imgId - 1) * displayWidth, "px)");
  }

  window.addEventListener('resize', slideImage); // ==========
  // Табы проектов

  var filter = function filter() {
    var projectsMenu = document.querySelector('.projects-menu');
    var projectType = Array.prototype.slice.call(projectsMenu.querySelectorAll('.tab-btn'));
    var typeAll = projectsMenu.querySelector('.all');
    var typeWild = projectsMenu.querySelector('.wild');
    var typeCarcass = projectsMenu.querySelector('.carcass');
    var typeGlue = projectsMenu.querySelector('.glue');
    var projectsCards = document.querySelector('.projects__cards');
    var cardAll = Array.prototype.slice.call(projectsCards.querySelectorAll('.all'));
    var cardWild = Array.prototype.slice.call(projectsCards.querySelectorAll('.wild'));
    var cardCarcass = Array.prototype.slice.call(projectsCards.querySelectorAll('.carcass'));
    var cardGlue = Array.prototype.slice.call(projectsCards.querySelectorAll('.glue'));

    var typeFilter = function typeFilter(markType) {
      cardAll.forEach(function (mark) {
        mark.style.display = 'none';
      });

      if (markType) {
        markType.forEach(function (mark) {
          mark.style.display = 'flex';
          mark.classList.add('animate__animated', 'animate__fadeIn');
        });
      }
    };

    typeAll.addEventListener('click', function () {
      typeFilter(cardAll);
    });
    typeWild.addEventListener('click', function () {
      typeFilter(cardWild);
    });
    typeCarcass.addEventListener('click', function () {
      typeFilter(cardCarcass);
    });
    typeGlue.addEventListener('click', function () {
      typeFilter(cardGlue);
    });
    projectsMenu.addEventListener('click', function (e) {
      var target = e.target;

      if (target && target.className === 'tab-btn') {
        projectType.forEach(function (btn) {
          return btn.classList.remove('active');
        });
        target.classList.add('active');
      }
    });
  }; // ==========


  var homeBtn = document.querySelector('.home');
  var summerBtn = document.querySelector('.summer');
  var saunaBtn = document.querySelector('.sauna');
  var pergolaBtn = document.querySelector('.pergola');
  var kidsBtn = document.querySelector('.kids');
  var homeBlock = document.querySelector('.home-container');
  var summerBlock = document.querySelector('.summer-container');
  var saunaBlock = document.querySelector('.sauna-container');
  var pergolaBlock = document.querySelector('.pergola-container');
  var kidsBlock = document.querySelector('.kids-container'); // var text = document.querySelector('.skill-title h3');
  // var info = document.querySelector('.skill-text p');
  // var pic = document.querySelector('.skill-img img');

  homeBtn.addEventListener('click', function () {
    if (!homeBlock.classList.contains('show-block')) {
      homeBlock.classList.add('show-block');
      summerBlock.classList.remove('show-block');
      saunaBlock.classList.remove('show-block');
      pergolaBlock.classList.remove('show-block');
      kidsBlock.classList.remove('show-block');
    }
  });
  summerBtn.addEventListener('click', function () {
    if (!summerBlock.classList.contains('show-block')) {
      summerBlock.classList.add('show-block');
      homeBlock.classList.remove('show-block');
      saunaBlock.classList.remove('show-block');
      pergolaBlock.classList.remove('show-block');
      kidsBlock.classList.remove('show-block');
    }
  });
  saunaBtn.addEventListener('click', function () {
    if (!saunaBlock.classList.contains('show-block')) {
      saunaBlock.classList.add('show-block');
      summerBlock.classList.remove('show-block');
      homeBlock.classList.remove('show-block');
      pergolaBlock.classList.remove('show-block');
      kidsBlock.classList.remove('show-block');
    }
  });
  pergolaBtn.addEventListener('click', function () {
    if (!pergolaBlock.classList.contains('show-block')) {
      pergolaBlock.classList.add('show-block');
      homeBlock.classList.remove('show-block');
      summerBlock.classList.remove('show-block');
      saunaBlock.classList.remove('show-block');
      kidsBlock.classList.remove('show-block');
    }
  });
  kidsBtn.addEventListener('click', function () {
    if (!kidsBlock.classList.contains('show-block')) {
      kidsBlock.classList.add('show-block');
      homeBlock.classList.remove('show-block');
      summerBlock.classList.remove('show-block');
      saunaBlock.classList.remove('show-block');
      pergolaBlock.classList.remove('show-block');
    }
  }); // home.addEventListener('click', function() {
  // 	text.innerHTML="Дома для жилья";
  // 	info.innerHTML="Какой уютный современный дом сможет обойтись без тепла камина? HomeSrub предлагает установить профессиональные чугунные камины-топки на дровах с отделкой в ​​выбранном Вами стиле.";
  // 	pic.src="./img/building-info/home-1x.jpg";
  // 	pic.srcset="./img/building-info/home-2x.jpg 2x";
  // 	pic.alt="Домик";
  // });
  // summer.addEventListener('click', function() {
  // 	text.innerHTML="Летний домик";
  // 	info.innerHTML="Кинетический момент влияет на составляющие гироскопического момента больше, чем гироскопический стабилизатоор, сводя задачу к квадратурам. Гироскопический маятник, в соответствии с модифицированным.";
  // 	pic.src="./img/building-info/summer-1x.jpg";
  // 	pic.srcset="./img/building-info/summer-2x.jpg 2x";
  // 	pic.alt="Летний";
  // });
  // pergola.addEventListener('click', function() {
  // 	text.innerHTML="Пергола";
  // 	info.innerHTML="Традиционный канал конкурентоспособен. А вот по мнению аналитиков стимулирование коммьюнити отражает поведенческий таргетинг, учитывая современные тенденции.";
  // 	pic.src="./img/building-info/pergola-1x.jpg";
  // 	pic.srcset="./img/building-info/pergola-2x.jpg 2x";
  // 	pic.alt="Пергола";
  // });
  // sauna.addEventListener('click', function() {
  // 	text.innerHTML="Сауна";
  // 	info.innerHTML="Легко проверить, что поле направлений определяет расходящийся ряд. Открытое множество естественно раскручивает экспериментальный лист Мёбиуса, что несомненно приведет нас к истине.";
  // 	pic.src="./img/building-info/sauna-1x.jpg";
  // 	pic.srcset="./img/building-info/sauna-2x.jpg 2x";
  // 	pic.alt="Сауна";
  // });
  // kids.addEventListener('click', function() {
  // 	text.innerHTML="Детская площадка";
  // 	info.innerHTML="По сути, лемма реально порождает минимум. Длина вектора ускоряет положительный критерий интегрируемости, явно демонстрируя всю чушь вышесказанного. Полином обоснован необходимостью.";
  // 	pic.src="./img/building-info/kids-1x.jpg";
  // 	pic.srcset="./img/building-info/kids-2x.jpg 2x";
  // 	pic.alt="Детская площадка";
  // });

  var skillContainer = document.querySelectorAll('.skill__type');
  var skillBtns = document.getElementsByClassName('skill-item');

  for (var i = 0; i < skillBtns.length; i++) {
    skillBtns[i].addEventListener("click", function () {
      var active = document.getElementsByClassName("skill--active");
      active[0].className = active[0].className.replace(" skill--active", "");
      this.className += " skill--active";
    });
  } // // Кнопки Подробнее
  // let moreText1 = document.querySelector('.more-text1');
  // let moreBtn1 = document.querySelector('.more-btn1');
  // let moreText2 = document.querySelector('.more-text2');
  // let moreBtn2 = document.querySelector('.more-btn2');
  // let moreText3 = document.querySelector('.more-text3');
  // let moreBtn3 = document.querySelector('.more-btn3');
  // let moreText4 = document.querySelector('.more-text4');
  // let moreBtn4 = document.querySelector('.more-btn4');
  // moreBtn1.addEventListener('click', function() {
  // 	if (!moreText1.classList.contains('actReview')) {
  // 		moreText1.classList.add('actReview');
  // 		moreBtn1.textContent = 'Скрыть';
  // 	} else {
  // 		moreText1.classList.remove('actReview');
  // 		moreBtn1.textContent = 'Подробнее';
  // 	}
  // });
  // moreBtn2.addEventListener('click', function() {
  // 	if (!moreText2.classList.contains('actReview')) {
  // 		moreText2.classList.add('actReview');
  // 		moreBtn2.textContent = 'Скрыть';
  // 	} else {
  // 		moreText2.classList.remove('actReview');
  // 		moreBtn2.textContent = 'Подробнее';
  // 	}
  // });
  // moreBtn3.addEventListener('click', function() {
  // 	if (!moreText3.classList.contains('actReview')) {
  // 		moreText3.classList.add('actReview');
  // 		moreBtn3.textContent = 'Скрыть';
  // 	} else {
  // 		moreText3.classList.remove('actReview');
  // 		moreBtn3.textContent = 'Подробнее';
  // 	}
  // });
  // moreBtn4.addEventListener('click', function() {
  // 	if (!moreText4.classList.contains('actReview')) {
  // 		moreText4.classList.add('actReview');
  // 		moreBtn4.textContent = 'Скрыть';
  // 	} else {
  // 		moreText4.classList.remove('actReview');
  // 		moreBtn4.textContent = 'Подробнее';
  // 	}
  // });
  // ==========
  // // Задержка загрузки yaMaps
  // var YaMapsShown = false; 
  // document.addEventListener('scroll', () => { 
  // 	if (!YaMapsShown) {
  // 	let scrollTop = document.documentElement.scrollTop;    
  // 	if (scrollTop >= 2000) {
  // 		showYaMaps();
  // 		YaMapsShown = true;
  // 	}
  // 	}
  // });
  // function showYaMaps(){
  // 	var script   = document.createElement("script");
  // 	script.type  = "text/javascript";
  // 	script.src   = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9b6066007d2a10adcbdac165fce87a97b3b6229e2ce4402bf66155f39a195930&amp;width=100%25&amp;height=588&amp;lang=ru_RU&amp;scroll=false";
  // 	document.getElementById("YaMaps").appendChild(script);
  // }
  // ==========


  modals();
  filter();
});