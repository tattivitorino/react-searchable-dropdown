import * as _ from "react";
import j, { useLayoutEffect as or, createElement as Xt, useRef as cn, useCallback as Ie, useEffect as un, useState as rt, useDeferredValue as Ai, useMemo as Rt, useId as ki } from "react";
import * as rr from "react-dom";
import Hi from "react-dom";
var ir = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Vn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var On = { exports: {} }, It = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mo;
function Di() {
  if (mo) return It;
  mo = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(o, r, i) {
    var s = null;
    if (i !== void 0 && (s = "" + i), r.key !== void 0 && (s = "" + r.key), "key" in r) {
      i = {};
      for (var l in r)
        l !== "key" && (i[l] = r[l]);
    } else i = r;
    return r = i.ref, {
      $$typeof: e,
      type: o,
      key: s,
      ref: r !== void 0 ? r : null,
      props: i
    };
  }
  return It.Fragment = t, It.jsx = n, It.jsxs = n, It;
}
var Ct = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var go;
function Mi() {
  return go || (go = 1, process.env.NODE_ENV !== "production" && function() {
    function e(v) {
      if (v == null) return null;
      if (typeof v == "function")
        return v.$$typeof === O ? null : v.displayName || v.name || null;
      if (typeof v == "string") return v;
      switch (v) {
        case x:
          return "Fragment";
        case m:
          return "Profiler";
        case p:
          return "StrictMode";
        case A:
          return "Suspense";
        case g:
          return "SuspenseList";
        case H:
          return "Activity";
      }
      if (typeof v == "object")
        switch (typeof v.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), v.$$typeof) {
          case y:
            return "Portal";
          case I:
            return v.displayName || "Context";
          case w:
            return (v._context.displayName || "Context") + ".Consumer";
          case T:
            var W = v.render;
            return v = v.displayName, v || (v = W.displayName || W.name || "", v = v !== "" ? "ForwardRef(" + v + ")" : "ForwardRef"), v;
          case S:
            return W = v.displayName || null, W !== null ? W : e(v.type) || "Memo";
          case R:
            W = v._payload, v = v._init;
            try {
              return e(v(W));
            } catch {
            }
        }
      return null;
    }
    function t(v) {
      return "" + v;
    }
    function n(v) {
      try {
        t(v);
        var W = !1;
      } catch {
        W = !0;
      }
      if (W) {
        W = console;
        var Y = W.error, X = typeof Symbol == "function" && Symbol.toStringTag && v[Symbol.toStringTag] || v.constructor.name || "Object";
        return Y.call(
          W,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          X
        ), t(v);
      }
    }
    function o(v) {
      if (v === x) return "<>";
      if (typeof v == "object" && v !== null && v.$$typeof === R)
        return "<...>";
      try {
        var W = e(v);
        return W ? "<" + W + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var v = P.A;
      return v === null ? null : v.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function s(v) {
      if (N.call(v, "key")) {
        var W = Object.getOwnPropertyDescriptor(v, "key").get;
        if (W && W.isReactWarning) return !1;
      }
      return v.key !== void 0;
    }
    function l(v, W) {
      function Y() {
        V || (V = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          W
        ));
      }
      Y.isReactWarning = !0, Object.defineProperty(v, "key", {
        get: Y,
        configurable: !0
      });
    }
    function a() {
      var v = e(this.type);
      return U[v] || (U[v] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), v = this.props.ref, v !== void 0 ? v : null;
    }
    function c(v, W, Y, X, we, de) {
      var re = Y.ref;
      return v = {
        $$typeof: b,
        type: v,
        key: W,
        props: Y,
        _owner: X
      }, (re !== void 0 ? re : null) !== null ? Object.defineProperty(v, "ref", {
        enumerable: !1,
        get: a
      }) : Object.defineProperty(v, "ref", { enumerable: !1, value: null }), v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(v, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(v, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: we
      }), Object.defineProperty(v, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: de
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    }
    function u(v, W, Y, X, we, de) {
      var re = W.children;
      if (re !== void 0)
        if (X)
          if (z(re)) {
            for (X = 0; X < re.length; X++)
              h(re[X]);
            Object.freeze && Object.freeze(re);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(re);
      if (N.call(W, "key")) {
        re = e(v);
        var D = Object.keys(W).filter(function(te) {
          return te !== "key";
        });
        X = 0 < D.length ? "{key: someKey, " + D.join(": ..., ") + ": ...}" : "{key: someKey}", ne[re + X] || (D = 0 < D.length ? "{" + D.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          X,
          re,
          D,
          re
        ), ne[re + X] = !0);
      }
      if (re = null, Y !== void 0 && (n(Y), re = "" + Y), s(W) && (n(W.key), re = "" + W.key), "key" in W) {
        Y = {};
        for (var C in W)
          C !== "key" && (Y[C] = W[C]);
      } else Y = W;
      return re && l(
        Y,
        typeof v == "function" ? v.displayName || v.name || "Unknown" : v
      ), c(
        v,
        re,
        Y,
        r(),
        we,
        de
      );
    }
    function h(v) {
      d(v) ? v._store && (v._store.validated = 1) : typeof v == "object" && v !== null && v.$$typeof === R && (v._payload.status === "fulfilled" ? d(v._payload.value) && v._payload.value._store && (v._payload.value._store.validated = 1) : v._store && (v._store.validated = 1));
    }
    function d(v) {
      return typeof v == "object" && v !== null && v.$$typeof === b;
    }
    var f = j, b = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), I = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), H = Symbol.for("react.activity"), O = Symbol.for("react.client.reference"), P = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, z = Array.isArray, $ = console.createTask ? console.createTask : function() {
      return null;
    };
    f = {
      react_stack_bottom_frame: function(v) {
        return v();
      }
    };
    var V, U = {}, F = f.react_stack_bottom_frame.bind(
      f,
      i
    )(), q = $(o(i)), ne = {};
    Ct.Fragment = x, Ct.jsx = function(v, W, Y) {
      var X = 1e4 > P.recentlyCreatedOwnerStacks++;
      return u(
        v,
        W,
        Y,
        !1,
        X ? Error("react-stack-top-frame") : F,
        X ? $(o(v)) : q
      );
    }, Ct.jsxs = function(v, W, Y) {
      var X = 1e4 > P.recentlyCreatedOwnerStacks++;
      return u(
        v,
        W,
        Y,
        !0,
        X ? Error("react-stack-top-frame") : F,
        X ? $(o(v)) : q
      );
    };
  }()), Ct;
}
process.env.NODE_ENV === "production" ? On.exports = Di() : On.exports = Mi();
var M = On.exports;
function fn() {
  return typeof window < "u";
}
function wt(e) {
  return Un(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function De(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ve(e) {
  var t;
  return (t = (Un(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Un(e) {
  return fn() ? e instanceof Node || e instanceof De(e).Node : !1;
}
function Re(e) {
  return fn() ? e instanceof Element || e instanceof De(e).Element : !1;
}
function Ye(e) {
  return fn() ? e instanceof HTMLElement || e instanceof De(e).HTMLElement : !1;
}
function An(e) {
  return !fn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof De(e).ShadowRoot;
}
function Bt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = je(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && r !== "inline" && r !== "contents";
}
function zi(e) {
  return /^(table|td|th)$/.test(wt(e));
}
function dn(e) {
  try {
    if (e.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return e.matches(":modal");
  } catch {
    return !1;
  }
}
const Li = /transform|translate|scale|rotate|perspective|filter/, Ni = /paint|layout|strict|content/, ot = (e) => !!e && e !== "none";
let wn;
function $n(e) {
  const t = Re(e) ? je(e) : e;
  return ot(t.transform) || ot(t.translate) || ot(t.scale) || ot(t.rotate) || ot(t.perspective) || !Gn() && (ot(t.backdropFilter) || ot(t.filter)) || Li.test(t.willChange || "") || Ni.test(t.contain || "");
}
function Pi(e) {
  let t = Ke(e);
  for (; Ye(t) && !vt(t); ) {
    if ($n(t))
      return t;
    if (dn(t))
      return null;
    t = Ke(t);
  }
  return null;
}
function Gn() {
  return wn == null && (wn = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), wn;
}
function vt(e) {
  return /^(html|body|#document)$/.test(wt(e));
}
function je(e) {
  return De(e).getComputedStyle(e);
}
function hn(e) {
  return Re(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ke(e) {
  if (wt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    An(e) && e.host || // Fallback.
    Ve(e)
  );
  return An(t) ? t.host : t;
}
function sr(e) {
  const t = Ke(e);
  return vt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ye(t) && Bt(t) ? t : sr(t);
}
function At(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = sr(e), i = r === ((o = e.ownerDocument) == null ? void 0 : o.body), s = De(r);
  if (i) {
    const l = kn(s);
    return t.concat(s, s.visualViewport || [], Bt(r) ? r : [], l && n ? At(l) : []);
  } else
    return t.concat(r, At(r, [], n));
}
function kn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
const xt = Math.min, ke = Math.max, qt = Math.round, Gt = Math.floor, We = (e) => ({
  x: e,
  y: e
}), ji = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function vo(e, t, n) {
  return ke(e, xt(t, n));
}
function Ft(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ze(e) {
  return e.split("-")[0];
}
function _t(e) {
  return e.split("-")[1];
}
function lr(e) {
  return e === "x" ? "y" : "x";
}
function ar(e) {
  return e === "y" ? "height" : "width";
}
function Ge(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function cr(e) {
  return lr(Ge(e));
}
function Bi(e, t, n) {
  n === void 0 && (n = !1);
  const o = _t(e), r = cr(e), i = ar(r);
  let s = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = en(s)), [s, en(s)];
}
function Fi(e) {
  const t = en(e);
  return [Hn(e), t, Hn(t)];
}
function Hn(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const xo = ["left", "right"], wo = ["right", "left"], _i = ["top", "bottom"], Wi = ["bottom", "top"];
function Vi(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? wo : xo : t ? xo : wo;
    case "left":
    case "right":
      return t ? _i : Wi;
    default:
      return [];
  }
}
function Ui(e, t, n, o) {
  const r = _t(e);
  let i = Vi(Ze(e), n === "start", o);
  return r && (i = i.map((s) => s + "-" + r), t && (i = i.concat(i.map(Hn)))), i;
}
function en(e) {
  const t = Ze(e);
  return ji[t] + e.slice(t.length);
}
function $i(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Gi(e) {
  return typeof e != "number" ? $i(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function tn(e) {
  const {
    x: t,
    y: n,
    width: o,
    height: r
  } = e;
  return {
    width: o,
    height: r,
    top: n,
    left: t,
    right: t + o,
    bottom: n + r,
    x: t,
    y: n
  };
}
/*!
* tabbable 6.4.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var Qi = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], Dn = /* @__PURE__ */ Qi.join(","), ur = typeof Element > "u", kt = ur ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, nn = !ur && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e == null ? void 0 : e.ownerDocument;
}, on = function(t, n) {
  var o;
  n === void 0 && (n = !0);
  var r = t == null || (o = t.getAttribute) === null || o === void 0 ? void 0 : o.call(t, "inert"), i = r === "" || r === "true", s = i || n && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : on(t.parentNode));
  return s;
}, Yi = function(t) {
  var n, o = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return o === "" || o === "true";
}, Xi = function(t, n, o) {
  if (on(t))
    return [];
  var r = Array.prototype.slice.apply(t.querySelectorAll(Dn));
  return n && kt.call(t, Dn) && r.unshift(t), r = r.filter(o), r;
}, Mn = function(t, n, o) {
  for (var r = [], i = Array.from(t); i.length; ) {
    var s = i.shift();
    if (!on(s, !1))
      if (s.tagName === "SLOT") {
        var l = s.assignedElements(), a = l.length ? l : s.children, c = Mn(a, !0, o);
        o.flatten ? r.push.apply(r, c) : r.push({
          scopeParent: s,
          candidates: c
        });
      } else {
        var u = kt.call(s, Dn);
        u && o.filter(s) && (n || !t.includes(s)) && r.push(s);
        var h = s.shadowRoot || // check for an undisclosed shadow
        typeof o.getShadowRoot == "function" && o.getShadowRoot(s), d = !on(h, !1) && (!o.shadowRootFilter || o.shadowRootFilter(s));
        if (h && d) {
          var f = Mn(h === !0 ? s.children : h.children, !0, o);
          o.flatten ? r.push.apply(r, f) : r.push({
            scopeParent: s,
            candidates: f
          });
        } else
          i.unshift.apply(i, s.children);
      }
  }
  return r;
}, fr = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, dr = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Yi(t)) && !fr(t) ? 0 : t.tabIndex;
}, Ki = function(t, n) {
  var o = dr(t);
  return o < 0 && n && !fr(t) ? 0 : o;
}, Zi = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, hr = function(t) {
  return t.tagName === "INPUT";
}, Ji = function(t) {
  return hr(t) && t.type === "hidden";
}, qi = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(o) {
    return o.tagName === "SUMMARY";
  });
  return n;
}, es = function(t, n) {
  for (var o = 0; o < t.length; o++)
    if (t[o].checked && t[o].form === n)
      return t[o];
}, ts = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || nn(t), o = function(l) {
    return n.querySelectorAll('input[type="radio"][name="' + l + '"]');
  }, r;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    r = o(window.CSS.escape(t.name));
  else
    try {
      r = o(t.name);
    } catch (s) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", s.message), !1;
    }
  var i = es(r, t.form);
  return !i || i === t;
}, ns = function(t) {
  return hr(t) && t.type === "radio";
}, os = function(t) {
  return ns(t) && !ts(t);
}, rs = function(t) {
  var n, o = t && nn(t), r = (n = o) === null || n === void 0 ? void 0 : n.host, i = !1;
  if (o && o !== t) {
    var s, l, a;
    for (i = !!((s = r) !== null && s !== void 0 && (l = s.ownerDocument) !== null && l !== void 0 && l.contains(r) || t != null && (a = t.ownerDocument) !== null && a !== void 0 && a.contains(t)); !i && r; ) {
      var c, u, h;
      o = nn(r), r = (c = o) === null || c === void 0 ? void 0 : c.host, i = !!((u = r) !== null && u !== void 0 && (h = u.ownerDocument) !== null && h !== void 0 && h.contains(r));
    }
  }
  return i;
}, bo = function(t) {
  var n = t.getBoundingClientRect(), o = n.width, r = n.height;
  return o === 0 && r === 0;
}, is = function(t, n) {
  var o = n.displayCheck, r = n.getShadowRoot;
  if (o === "full-native" && "checkVisibility" in t) {
    var i = t.checkVisibility({
      // Checking opacity might be desirable for some use cases, but natively,
      // opacity zero elements _are_ focusable and tabbable.
      checkOpacity: !1,
      opacityProperty: !1,
      contentVisibilityAuto: !0,
      visibilityProperty: !0,
      // This is an alias for `visibilityProperty`. Contemporary browsers
      // support both. However, this alias has wider browser support (Chrome
      // >= 105 and Firefox >= 106, vs. Chrome >= 121 and Firefox >= 122), so
      // we include it anyway.
      checkVisibilityCSS: !0
    });
    return !i;
  }
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  var s = kt.call(t, "details>summary:first-of-type"), l = s ? t.parentElement : t;
  if (kt.call(l, "details:not([open]) *"))
    return !0;
  if (!o || o === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  o === "full-native" || o === "legacy-full") {
    if (typeof r == "function") {
      for (var a = t; t; ) {
        var c = t.parentElement, u = nn(t);
        if (c && !c.shadowRoot && r(c) === !0)
          return bo(t);
        t.assignedSlot ? t = t.assignedSlot : !c && u !== t.ownerDocument ? t = u.host : t = c;
      }
      t = a;
    }
    if (rs(t))
      return !t.getClientRects().length;
    if (o !== "legacy-full")
      return !0;
  } else if (o === "non-zero-area")
    return bo(t);
  return !1;
}, ss = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var o = 0; o < n.children.length; o++) {
          var r = n.children.item(o);
          if (r.tagName === "LEGEND")
            return kt.call(n, "fieldset[disabled] *") ? !0 : !r.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, ls = function(t, n) {
  return !(n.disabled || Ji(n) || is(n, t) || // For a details element with a summary, the summary element gets the focus
  qi(n) || ss(n));
}, yo = function(t, n) {
  return !(os(n) || dr(n) < 0 || !ls(t, n));
}, as = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, pr = function(t) {
  var n = [], o = [];
  return t.forEach(function(r, i) {
    var s = !!r.scopeParent, l = s ? r.scopeParent : r, a = Ki(l, s), c = s ? pr(r.candidates) : l;
    a === 0 ? s ? n.push.apply(n, c) : n.push(l) : o.push({
      documentOrder: i,
      tabIndex: a,
      item: r,
      isScope: s,
      content: c
    });
  }), o.sort(Zi).reduce(function(r, i) {
    return i.isScope ? r.push.apply(r, i.content) : r.push(i.content), r;
  }, []).concat(n);
}, mr = function(t, n) {
  n = n || {};
  var o;
  return n.getShadowRoot ? o = Mn([t], n.includeContainer, {
    filter: yo.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: as
  }) : o = Xi(t, n.includeContainer, yo.bind(null, n)), pr(o);
};
function cs() {
  return /apple/i.test(navigator.vendor);
}
function us(e) {
  let t = e.activeElement;
  for (; ((n = t) == null || (n = n.shadowRoot) == null ? void 0 : n.activeElement) != null; ) {
    var n;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function fs(e, t) {
  if (!e || !t)
    return !1;
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && An(n)) {
    let o = t;
    for (; o; ) {
      if (e === o)
        return !0;
      o = o.parentNode || o.host;
    }
  }
  return !1;
}
function Qn(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
var ds = typeof document < "u", hs = function() {
}, lt = ds ? or : hs;
const ps = {
  ..._
}, ms = ps.useInsertionEffect, gs = ms || ((e) => e());
function vs(e) {
  const t = _.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return gs(() => {
    t.current = e;
  }), _.useCallback(function() {
    for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
      o[r] = arguments[r];
    return t.current == null ? void 0 : t.current(...o);
  }, []);
}
const gr = () => ({
  getShadowRoot: !0,
  displayCheck: (
    // JSDOM does not support the `tabbable` library. To solve this we can
    // check if `ResizeObserver` is a real function (not polyfilled), which
    // determines if the current environment is JSDOM-like.
    typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
  )
});
function vr(e, t) {
  const n = mr(e, gr()), o = n.length;
  if (o === 0) return;
  const r = us(Qn(e)), i = n.indexOf(r), s = i === -1 ? t === 1 ? 0 : o - 1 : i + t;
  return n[s];
}
function xs(e) {
  return vr(Qn(e).body, 1) || e;
}
function ws(e) {
  return vr(Qn(e).body, -1) || e;
}
function bn(e, t) {
  const n = t || e.currentTarget, o = e.relatedTarget;
  return !o || !fs(n, o);
}
function bs(e) {
  mr(e, gr()).forEach((n) => {
    n.dataset.tabindex = n.getAttribute("tabindex") || "", n.setAttribute("tabindex", "-1");
  });
}
function So(e) {
  e.querySelectorAll("[data-tabindex]").forEach((n) => {
    const o = n.dataset.tabindex;
    delete n.dataset.tabindex, o ? n.setAttribute("tabindex", o) : n.removeAttribute("tabindex");
  });
}
function Io(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const i = Ge(t), s = cr(t), l = ar(s), a = Ze(t), c = i === "y", u = o.x + o.width / 2 - r.width / 2, h = o.y + o.height / 2 - r.height / 2, d = o[l] / 2 - r[l] / 2;
  let f;
  switch (a) {
    case "top":
      f = {
        x: u,
        y: o.y - r.height
      };
      break;
    case "bottom":
      f = {
        x: u,
        y: o.y + o.height
      };
      break;
    case "right":
      f = {
        x: o.x + o.width,
        y: h
      };
      break;
    case "left":
      f = {
        x: o.x - r.width,
        y: h
      };
      break;
    default:
      f = {
        x: o.x,
        y: o.y
      };
  }
  switch (_t(t)) {
    case "start":
      f[s] -= d * (n && c ? -1 : 1);
      break;
    case "end":
      f[s] += d * (n && c ? -1 : 1);
      break;
  }
  return f;
}
async function ys(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: i,
    rects: s,
    elements: l,
    strategy: a
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: h = "floating",
    altBoundary: d = !1,
    padding: f = 0
  } = Ft(t, e), b = Gi(f), x = l[d ? h === "floating" ? "reference" : "floating" : h], p = tn(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null || n ? x : x.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: a
  })), m = h === "floating" ? {
    x: o,
    y: r,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, w = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating)), I = await (i.isElement == null ? void 0 : i.isElement(w)) ? await (i.getScale == null ? void 0 : i.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, T = tn(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: m,
    offsetParent: w,
    strategy: a
  }) : m);
  return {
    top: (p.top - T.top + b.top) / I.y,
    bottom: (T.bottom - p.bottom + b.bottom) / I.y,
    left: (p.left - T.left + b.left) / I.x,
    right: (T.right - p.right + b.right) / I.x
  };
}
const Ss = 50, Is = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: i = [],
    platform: s
  } = n, l = s.detectOverflow ? s : {
    ...s,
    detectOverflow: ys
  }, a = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: u,
    y: h
  } = Io(c, o, a), d = o, f = 0;
  const b = {};
  for (let y = 0; y < i.length; y++) {
    const x = i[y];
    if (!x)
      continue;
    const {
      name: p,
      fn: m
    } = x, {
      x: w,
      y: I,
      data: T,
      reset: A
    } = await m({
      x: u,
      y: h,
      initialPlacement: o,
      placement: d,
      strategy: r,
      middlewareData: b,
      rects: c,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = w ?? u, h = I ?? h, b[p] = {
      ...b[p],
      ...T
    }, A && f < Ss && (f++, typeof A == "object" && (A.placement && (d = A.placement), A.rects && (c = A.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : A.rects), {
      x: u,
      y: h
    } = Io(c, d, a)), y = -1);
  }
  return {
    x: u,
    y: h,
    placement: d,
    strategy: r,
    middlewareData: b
  };
}, Cs = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        middlewareData: i,
        rects: s,
        initialPlacement: l,
        platform: a,
        elements: c
      } = t, {
        mainAxis: u = !0,
        crossAxis: h = !0,
        fallbackPlacements: d,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: y = !0,
        ...x
      } = Ft(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const p = Ze(r), m = Ge(l), w = Ze(l) === l, I = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), T = d || (w || !y ? [en(l)] : Fi(l)), A = b !== "none";
      !d && A && T.push(...Ui(l, y, b, I));
      const g = [l, ...T], S = await a.detectOverflow(t, x), R = [];
      let H = ((o = i.flip) == null ? void 0 : o.overflows) || [];
      if (u && R.push(S[p]), h) {
        const z = Bi(r, s, I);
        R.push(S[z[0]], S[z[1]]);
      }
      if (H = [...H, {
        placement: r,
        overflows: R
      }], !R.every((z) => z <= 0)) {
        var O, P;
        const z = (((O = i.flip) == null ? void 0 : O.index) || 0) + 1, $ = g[z];
        if ($ && (!(h === "alignment" ? m !== Ge($) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        H.every((F) => Ge(F.placement) === m ? F.overflows[0] > 0 : !0)))
          return {
            data: {
              index: z,
              overflows: H
            },
            reset: {
              placement: $
            }
          };
        let V = (P = H.filter((U) => U.overflows[0] <= 0).sort((U, F) => U.overflows[1] - F.overflows[1])[0]) == null ? void 0 : P.placement;
        if (!V)
          switch (f) {
            case "bestFit": {
              var N;
              const U = (N = H.filter((F) => {
                if (A) {
                  const q = Ge(F.placement);
                  return q === m || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  q === "y";
                }
                return !0;
              }).map((F) => [F.placement, F.overflows.filter((q) => q > 0).reduce((q, ne) => q + ne, 0)]).sort((F, q) => F[1] - q[1])[0]) == null ? void 0 : N[0];
              U && (V = U);
              break;
            }
            case "initialPlacement":
              V = l;
              break;
          }
        if (r !== V)
          return {
            reset: {
              placement: V
            }
          };
      }
      return {};
    }
  };
}, Ts = /* @__PURE__ */ new Set(["left", "top"]);
async function Rs(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, i = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), s = Ze(n), l = _t(n), a = Ge(n) === "y", c = Ts.has(s) ? -1 : 1, u = i && a ? -1 : 1, h = Ft(t, e);
  let {
    mainAxis: d,
    crossAxis: f,
    alignmentAxis: b
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: h.mainAxis || 0,
    crossAxis: h.crossAxis || 0,
    alignmentAxis: h.alignmentAxis
  };
  return l && typeof b == "number" && (f = l === "end" ? b * -1 : b), a ? {
    x: f * u,
    y: d * c
  } : {
    x: d * c,
    y: f * u
  };
}
const Es = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: r,
        y: i,
        placement: s,
        middlewareData: l
      } = t, a = await Rs(t, e);
      return s === ((n = l.offset) == null ? void 0 : n.placement) && (o = l.arrow) != null && o.alignmentOffset ? {} : {
        x: r + a.x,
        y: i + a.y,
        data: {
          ...a,
          placement: s
        }
      };
    }
  };
}, Os = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        platform: i
      } = t, {
        mainAxis: s = !0,
        crossAxis: l = !1,
        limiter: a = {
          fn: (p) => {
            let {
              x: m,
              y: w
            } = p;
            return {
              x: m,
              y: w
            };
          }
        },
        ...c
      } = Ft(e, t), u = {
        x: n,
        y: o
      }, h = await i.detectOverflow(t, c), d = Ge(Ze(r)), f = lr(d);
      let b = u[f], y = u[d];
      if (s) {
        const p = f === "y" ? "top" : "left", m = f === "y" ? "bottom" : "right", w = b + h[p], I = b - h[m];
        b = vo(w, b, I);
      }
      if (l) {
        const p = d === "y" ? "top" : "left", m = d === "y" ? "bottom" : "right", w = y + h[p], I = y - h[m];
        y = vo(w, y, I);
      }
      const x = a.fn({
        ...t,
        [f]: b,
        [d]: y
      });
      return {
        ...x,
        data: {
          x: x.x - n,
          y: x.y - o,
          enabled: {
            [f]: s,
            [d]: l
          }
        }
      };
    }
  };
}, As = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        rects: i,
        platform: s,
        elements: l
      } = t, {
        apply: a = () => {
        },
        ...c
      } = Ft(e, t), u = await s.detectOverflow(t, c), h = Ze(r), d = _t(r), f = Ge(r) === "y", {
        width: b,
        height: y
      } = i.floating;
      let x, p;
      h === "top" || h === "bottom" ? (x = h, p = d === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (p = h, x = d === "end" ? "top" : "bottom");
      const m = y - u.top - u.bottom, w = b - u.left - u.right, I = xt(y - u[x], m), T = xt(b - u[p], w), A = !t.middlewareData.shift;
      let g = I, S = T;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (S = w), (o = t.middlewareData.shift) != null && o.enabled.y && (g = m), A && !d) {
        const H = ke(u.left, 0), O = ke(u.right, 0), P = ke(u.top, 0), N = ke(u.bottom, 0);
        f ? S = b - 2 * (H !== 0 || O !== 0 ? H + O : ke(u.left, u.right)) : g = y - 2 * (P !== 0 || N !== 0 ? P + N : ke(u.top, u.bottom));
      }
      await a({
        ...t,
        availableWidth: S,
        availableHeight: g
      });
      const R = await s.getDimensions(l.floating);
      return b !== R.width || y !== R.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function xr(e) {
  const t = je(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = Ye(e), i = r ? e.offsetWidth : n, s = r ? e.offsetHeight : o, l = qt(n) !== i || qt(o) !== s;
  return l && (n = i, o = s), {
    width: n,
    height: o,
    $: l
  };
}
function Yn(e) {
  return Re(e) ? e : e.contextElement;
}
function pt(e) {
  const t = Yn(e);
  if (!Ye(t))
    return We(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: i
  } = xr(t);
  let s = (i ? qt(n.width) : n.width) / o, l = (i ? qt(n.height) : n.height) / r;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: s,
    y: l
  };
}
const ks = /* @__PURE__ */ We(0);
function wr(e) {
  const t = De(e);
  return !Gn() || !t.visualViewport ? ks : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Hs(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== De(e) ? !1 : t;
}
function at(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), i = Yn(e);
  let s = We(1);
  t && (o ? Re(o) && (s = pt(o)) : s = pt(e));
  const l = Hs(i, n, o) ? wr(i) : We(0);
  let a = (r.left + l.x) / s.x, c = (r.top + l.y) / s.y, u = r.width / s.x, h = r.height / s.y;
  if (i) {
    const d = De(i), f = o && Re(o) ? De(o) : o;
    let b = d, y = kn(b);
    for (; y && o && f !== b; ) {
      const x = pt(y), p = y.getBoundingClientRect(), m = je(y), w = p.left + (y.clientLeft + parseFloat(m.paddingLeft)) * x.x, I = p.top + (y.clientTop + parseFloat(m.paddingTop)) * x.y;
      a *= x.x, c *= x.y, u *= x.x, h *= x.y, a += w, c += I, b = De(y), y = kn(b);
    }
  }
  return tn({
    width: u,
    height: h,
    x: a,
    y: c
  });
}
function pn(e, t) {
  const n = hn(e).scrollLeft;
  return t ? t.left + n : at(Ve(e)).left + n;
}
function br(e, t) {
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - pn(e, n), r = n.top + t.scrollTop;
  return {
    x: o,
    y: r
  };
}
function Ds(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const i = r === "fixed", s = Ve(o), l = t ? dn(t.floating) : !1;
  if (o === s || l && i)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = We(1);
  const u = We(0), h = Ye(o);
  if ((h || !h && !i) && ((wt(o) !== "body" || Bt(s)) && (a = hn(o)), h)) {
    const f = at(o);
    c = pt(o), u.x = f.x + o.clientLeft, u.y = f.y + o.clientTop;
  }
  const d = s && !h && !i ? br(s, a) : We(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - a.scrollLeft * c.x + u.x + d.x,
    y: n.y * c.y - a.scrollTop * c.y + u.y + d.y
  };
}
function Ms(e) {
  return Array.from(e.getClientRects());
}
function zs(e) {
  const t = Ve(e), n = hn(e), o = e.ownerDocument.body, r = ke(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), i = ke(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + pn(e);
  const l = -n.scrollTop;
  return je(o).direction === "rtl" && (s += ke(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: i,
    x: s,
    y: l
  };
}
const Co = 25;
function Ls(e, t) {
  const n = De(e), o = Ve(e), r = n.visualViewport;
  let i = o.clientWidth, s = o.clientHeight, l = 0, a = 0;
  if (r) {
    i = r.width, s = r.height;
    const u = Gn();
    (!u || u && t === "fixed") && (l = r.offsetLeft, a = r.offsetTop);
  }
  const c = pn(o);
  if (c <= 0) {
    const u = o.ownerDocument, h = u.body, d = getComputedStyle(h), f = u.compatMode === "CSS1Compat" && parseFloat(d.marginLeft) + parseFloat(d.marginRight) || 0, b = Math.abs(o.clientWidth - h.clientWidth - f);
    b <= Co && (i -= b);
  } else c <= Co && (i += c);
  return {
    width: i,
    height: s,
    x: l,
    y: a
  };
}
function Ns(e, t) {
  const n = at(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, i = Ye(e) ? pt(e) : We(1), s = e.clientWidth * i.x, l = e.clientHeight * i.y, a = r * i.x, c = o * i.y;
  return {
    width: s,
    height: l,
    x: a,
    y: c
  };
}
function To(e, t, n) {
  let o;
  if (t === "viewport")
    o = Ls(e, n);
  else if (t === "document")
    o = zs(Ve(e));
  else if (Re(t))
    o = Ns(t, n);
  else {
    const r = wr(e);
    o = {
      x: t.x - r.x,
      y: t.y - r.y,
      width: t.width,
      height: t.height
    };
  }
  return tn(o);
}
function yr(e, t) {
  const n = Ke(e);
  return n === t || !Re(n) || vt(n) ? !1 : je(n).position === "fixed" || yr(n, t);
}
function Ps(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = At(e, [], !1).filter((l) => Re(l) && wt(l) !== "body"), r = null;
  const i = je(e).position === "fixed";
  let s = i ? Ke(e) : e;
  for (; Re(s) && !vt(s); ) {
    const l = je(s), a = $n(s);
    !a && l.position === "fixed" && (r = null), (i ? !a && !r : !a && l.position === "static" && !!r && (r.position === "absolute" || r.position === "fixed") || Bt(s) && !a && yr(e, s)) ? o = o.filter((u) => u !== s) : r = l, s = Ke(s);
  }
  return t.set(e, o), o;
}
function js(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const s = [...n === "clippingAncestors" ? dn(t) ? [] : Ps(t, this._c) : [].concat(n), o], l = To(t, s[0], r);
  let a = l.top, c = l.right, u = l.bottom, h = l.left;
  for (let d = 1; d < s.length; d++) {
    const f = To(t, s[d], r);
    a = ke(f.top, a), c = xt(f.right, c), u = xt(f.bottom, u), h = ke(f.left, h);
  }
  return {
    width: c - h,
    height: u - a,
    x: h,
    y: a
  };
}
function Bs(e) {
  const {
    width: t,
    height: n
  } = xr(e);
  return {
    width: t,
    height: n
  };
}
function Fs(e, t, n) {
  const o = Ye(t), r = Ve(t), i = n === "fixed", s = at(e, !0, i, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = We(0);
  function c() {
    a.x = pn(r);
  }
  if (o || !o && !i)
    if ((wt(t) !== "body" || Bt(r)) && (l = hn(t)), o) {
      const f = at(t, !0, i, t);
      a.x = f.x + t.clientLeft, a.y = f.y + t.clientTop;
    } else r && c();
  i && !o && r && c();
  const u = r && !o && !i ? br(r, l) : We(0), h = s.left + l.scrollLeft - a.x - u.x, d = s.top + l.scrollTop - a.y - u.y;
  return {
    x: h,
    y: d,
    width: s.width,
    height: s.height
  };
}
function yn(e) {
  return je(e).position === "static";
}
function Ro(e, t) {
  if (!Ye(e) || je(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ve(e) === n && (n = n.ownerDocument.body), n;
}
function Sr(e, t) {
  const n = De(e);
  if (dn(e))
    return n;
  if (!Ye(e)) {
    let r = Ke(e);
    for (; r && !vt(r); ) {
      if (Re(r) && !yn(r))
        return r;
      r = Ke(r);
    }
    return n;
  }
  let o = Ro(e, t);
  for (; o && zi(o) && yn(o); )
    o = Ro(o, t);
  return o && vt(o) && yn(o) && !$n(o) ? n : o || Pi(e) || n;
}
const _s = async function(e) {
  const t = this.getOffsetParent || Sr, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: Fs(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Ws(e) {
  return je(e).direction === "rtl";
}
const Vs = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ds,
  getDocumentElement: Ve,
  getClippingRect: js,
  getOffsetParent: Sr,
  getElementRects: _s,
  getClientRects: Ms,
  getDimensions: Bs,
  getScale: pt,
  isElement: Re,
  isRTL: Ws
};
function Ir(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Us(e, t) {
  let n = null, o;
  const r = Ve(e);
  function i() {
    var l;
    clearTimeout(o), (l = n) == null || l.disconnect(), n = null;
  }
  function s(l, a) {
    l === void 0 && (l = !1), a === void 0 && (a = 1), i();
    const c = e.getBoundingClientRect(), {
      left: u,
      top: h,
      width: d,
      height: f
    } = c;
    if (l || t(), !d || !f)
      return;
    const b = Gt(h), y = Gt(r.clientWidth - (u + d)), x = Gt(r.clientHeight - (h + f)), p = Gt(u), w = {
      rootMargin: -b + "px " + -y + "px " + -x + "px " + -p + "px",
      threshold: ke(0, xt(1, a)) || 1
    };
    let I = !0;
    function T(A) {
      const g = A[0].intersectionRatio;
      if (g !== a) {
        if (!I)
          return s();
        g ? s(!1, g) : o = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      g === 1 && !Ir(c, e.getBoundingClientRect()) && s(), I = !1;
    }
    try {
      n = new IntersectionObserver(T, {
        ...w,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(T, w);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function $s(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = o, c = Yn(e), u = r || i ? [...c ? At(c) : [], ...t ? At(t) : []] : [];
  u.forEach((p) => {
    r && p.addEventListener("scroll", n, {
      passive: !0
    }), i && p.addEventListener("resize", n);
  });
  const h = c && l ? Us(c, n) : null;
  let d = -1, f = null;
  s && (f = new ResizeObserver((p) => {
    let [m] = p;
    m && m.target === c && f && t && (f.unobserve(t), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var w;
      (w = f) == null || w.observe(t);
    })), n();
  }), c && !a && f.observe(c), t && f.observe(t));
  let b, y = a ? at(e) : null;
  a && x();
  function x() {
    const p = at(e);
    y && !Ir(y, p) && n(), y = p, b = requestAnimationFrame(x);
  }
  return n(), () => {
    var p;
    u.forEach((m) => {
      r && m.removeEventListener("scroll", n), i && m.removeEventListener("resize", n);
    }), h == null || h(), (p = f) == null || p.disconnect(), f = null, a && cancelAnimationFrame(b);
  };
}
const Gs = Es, Qs = Os, Ys = Cs, Xs = As, Ks = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: Vs,
    ...n
  }, i = {
    ...r.platform,
    _c: o
  };
  return Is(e, t, {
    ...r,
    platform: i
  });
};
var Zs = typeof document < "u", Js = function() {
}, Kt = Zs ? or : Js;
function rn(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, o, r;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (o = n; o-- !== 0; )
        if (!rn(e[o], t[o]))
          return !1;
      return !0;
    }
    if (r = Object.keys(e), n = r.length, n !== Object.keys(t).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(t, r[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const i = r[o];
      if (!(i === "_owner" && e.$$typeof) && !rn(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Cr(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Eo(e, t) {
  const n = Cr(e);
  return Math.round(t * n) / n;
}
function Sn(e) {
  const t = _.useRef(e);
  return Kt(() => {
    t.current = e;
  }), t;
}
function qs(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: r,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: l = !0,
    whileElementsMounted: a,
    open: c
  } = e, [u, h] = _.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [d, f] = _.useState(o);
  rn(d, o) || f(o);
  const [b, y] = _.useState(null), [x, p] = _.useState(null), m = _.useCallback((F) => {
    F !== A.current && (A.current = F, y(F));
  }, []), w = _.useCallback((F) => {
    F !== g.current && (g.current = F, p(F));
  }, []), I = i || b, T = s || x, A = _.useRef(null), g = _.useRef(null), S = _.useRef(u), R = a != null, H = Sn(a), O = Sn(r), P = Sn(c), N = _.useCallback(() => {
    if (!A.current || !g.current)
      return;
    const F = {
      placement: t,
      strategy: n,
      middleware: d
    };
    O.current && (F.platform = O.current), Ks(A.current, g.current, F).then((q) => {
      const ne = {
        ...q,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: P.current !== !1
      };
      z.current && !rn(S.current, ne) && (S.current = ne, rr.flushSync(() => {
        h(ne);
      }));
    });
  }, [d, t, n, O, P]);
  Kt(() => {
    c === !1 && S.current.isPositioned && (S.current.isPositioned = !1, h((F) => ({
      ...F,
      isPositioned: !1
    })));
  }, [c]);
  const z = _.useRef(!1);
  Kt(() => (z.current = !0, () => {
    z.current = !1;
  }), []), Kt(() => {
    if (I && (A.current = I), T && (g.current = T), I && T) {
      if (H.current)
        return H.current(I, T, N);
      N();
    }
  }, [I, T, N, H, R]);
  const $ = _.useMemo(() => ({
    reference: A,
    floating: g,
    setReference: m,
    setFloating: w
  }), [m, w]), V = _.useMemo(() => ({
    reference: I,
    floating: T
  }), [I, T]), U = _.useMemo(() => {
    const F = {
      position: n,
      left: 0,
      top: 0
    };
    if (!V.floating)
      return F;
    const q = Eo(V.floating, u.x), ne = Eo(V.floating, u.y);
    return l ? {
      ...F,
      transform: "translate(" + q + "px, " + ne + "px)",
      ...Cr(V.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: q,
      top: ne
    };
  }, [n, l, V.floating, u.x, u.y]);
  return _.useMemo(() => ({
    ...u,
    update: N,
    refs: $,
    elements: V,
    floatingStyles: U
  }), [u, N, $, V, U]);
}
const el = (e, t) => {
  const n = Gs(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, tl = (e, t) => {
  const n = Qs(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, nl = (e, t) => {
  const n = Ys(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, ol = (e, t) => {
  const n = Xs(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, rl = {
  ..._
};
let Oo = !1, il = 0;
const Ao = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + il++
);
function sl() {
  const [e, t] = _.useState(() => Oo ? Ao() : void 0);
  return lt(() => {
    e == null && t(Ao());
  }, []), _.useEffect(() => {
    Oo = !0;
  }, []), e;
}
const ll = rl.useId, Tr = ll || sl;
let zn;
process.env.NODE_ENV !== "production" && (zn = /* @__PURE__ */ new Set());
function al() {
  for (var e, t = arguments.length, n = new Array(t), o = 0; o < t; o++)
    n[o] = arguments[o];
  const r = "Floating UI: " + n.join(" ");
  if (!((e = zn) != null && e.has(r))) {
    var i;
    (i = zn) == null || i.add(r), console.error(r);
  }
}
function cl() {
  const e = /* @__PURE__ */ new Map();
  return {
    emit(t, n) {
      var o;
      (o = e.get(t)) == null || o.forEach((r) => r(n));
    },
    on(t, n) {
      e.has(t) || e.set(t, /* @__PURE__ */ new Set()), e.get(t).add(n);
    },
    off(t, n) {
      var o;
      (o = e.get(t)) == null || o.delete(n);
    }
  };
}
const ul = /* @__PURE__ */ _.createContext(null), fl = /* @__PURE__ */ _.createContext(null), dl = () => {
  var e;
  return ((e = _.useContext(ul)) == null ? void 0 : e.id) || null;
}, hl = () => _.useContext(fl);
function Rr(e) {
  return "data-floating-ui-" + e;
}
const pl = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "fixed",
  whiteSpace: "nowrap",
  width: "1px",
  top: 0,
  left: 0
}, ko = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const [o, r] = _.useState();
  lt(() => {
    cs() && r("button");
  }, []);
  const i = {
    ref: n,
    tabIndex: 0,
    // Role is only for VoiceOver
    role: o,
    "aria-hidden": o ? void 0 : !0,
    [Rr("focus-guard")]: "",
    style: pl
  };
  return /* @__PURE__ */ M.jsx("span", {
    ...t,
    ...i
  });
}), ml = {
  clipPath: "inset(50%)",
  position: "fixed",
  top: 0,
  left: 0
}, Er = /* @__PURE__ */ _.createContext(null), Ho = /* @__PURE__ */ Rr("portal");
function gl(e) {
  e === void 0 && (e = {});
  const {
    id: t,
    root: n
  } = e, o = Tr(), r = vl(), [i, s] = _.useState(null), l = _.useRef(null);
  return lt(() => () => {
    i == null || i.remove(), queueMicrotask(() => {
      l.current = null;
    });
  }, [i]), lt(() => {
    if (!o || l.current) return;
    const a = t ? document.getElementById(t) : null;
    if (!a) return;
    const c = document.createElement("div");
    c.id = o, c.setAttribute(Ho, ""), a.appendChild(c), l.current = c, s(c);
  }, [t, o]), lt(() => {
    if (n === null || !o || l.current) return;
    let a = n || (r == null ? void 0 : r.portalNode);
    a && !Un(a) && (a = a.current), a = a || document.body;
    let c = null;
    t && (c = document.createElement("div"), c.id = t, a.appendChild(c));
    const u = document.createElement("div");
    u.id = o, u.setAttribute(Ho, ""), a = c || a, a.appendChild(u), l.current = u, s(u);
  }, [t, n, o, r]), i;
}
function Or(e) {
  const {
    children: t,
    id: n,
    root: o,
    preserveTabOrder: r = !0
  } = e, i = gl({
    id: n,
    root: o
  }), [s, l] = _.useState(null), a = _.useRef(null), c = _.useRef(null), u = _.useRef(null), h = _.useRef(null), d = s == null ? void 0 : s.modal, f = s == null ? void 0 : s.open, b = (
    // The FocusManager and therefore floating element are currently open/
    // rendered.
    !!s && // Guards are only for non-modal focus management.
    !s.modal && // Don't render if unmount is transitioning.
    s.open && r && !!(o || i)
  );
  return _.useEffect(() => {
    if (!i || !r || d)
      return;
    function y(x) {
      i && bn(x) && (x.type === "focusin" ? So : bs)(i);
    }
    return i.addEventListener("focusin", y, !0), i.addEventListener("focusout", y, !0), () => {
      i.removeEventListener("focusin", y, !0), i.removeEventListener("focusout", y, !0);
    };
  }, [i, r, d]), _.useEffect(() => {
    i && (f || So(i));
  }, [f, i]), /* @__PURE__ */ M.jsxs(Er.Provider, {
    value: _.useMemo(() => ({
      preserveTabOrder: r,
      beforeOutsideRef: a,
      afterOutsideRef: c,
      beforeInsideRef: u,
      afterInsideRef: h,
      portalNode: i,
      setFocusManagerState: l
    }), [r, i]),
    children: [b && i && /* @__PURE__ */ M.jsx(ko, {
      "data-type": "outside",
      ref: a,
      onFocus: (y) => {
        if (bn(y, i)) {
          var x;
          (x = u.current) == null || x.focus();
        } else {
          const p = s ? s.domReference : null, m = ws(p);
          m == null || m.focus();
        }
      }
    }), b && i && /* @__PURE__ */ M.jsx("span", {
      "aria-owns": i.id,
      style: ml
    }), i && /* @__PURE__ */ rr.createPortal(t, i), b && i && /* @__PURE__ */ M.jsx(ko, {
      "data-type": "outside",
      ref: c,
      onFocus: (y) => {
        if (bn(y, i)) {
          var x;
          (x = h.current) == null || x.focus();
        } else {
          const p = s ? s.domReference : null, m = xs(p);
          m == null || m.focus(), s != null && s.closeOnFocusOut && (s == null || s.onOpenChange(!1, y.nativeEvent, "focus-out"));
        }
      }
    })]
  });
}
const vl = () => _.useContext(Er);
function xl(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: o
  } = e, r = Tr(), i = _.useRef({}), [s] = _.useState(() => cl()), l = dl() != null;
  if (process.env.NODE_ENV !== "production") {
    const f = o.reference;
    f && !Re(f) && al("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [a, c] = _.useState(o.reference), u = vs((f, b, y) => {
    i.current.openEvent = f ? b : void 0, s.emit("openchange", {
      open: f,
      event: b,
      reason: y,
      nested: l
    }), n == null || n(f, b, y);
  }), h = _.useMemo(() => ({
    setPositionReference: c
  }), []), d = _.useMemo(() => ({
    reference: a || o.reference || null,
    floating: o.floating || null,
    domReference: o.reference
  }), [a, o.reference, o.floating]);
  return _.useMemo(() => ({
    dataRef: i,
    open: t,
    onOpenChange: u,
    elements: d,
    events: s,
    floatingId: r,
    refs: h
  }), [t, u, d, s, r, h]);
}
function wl(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = xl({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), o = e.rootContext || n, r = o.elements, [i, s] = _.useState(null), [l, a] = _.useState(null), u = (r == null ? void 0 : r.domReference) || i, h = _.useRef(null), d = hl();
  lt(() => {
    u && (h.current = u);
  }, [u]);
  const f = qs({
    ...e,
    elements: {
      ...r,
      ...l && {
        reference: l
      }
    }
  }), b = _.useCallback((w) => {
    const I = Re(w) ? {
      getBoundingClientRect: () => w.getBoundingClientRect(),
      getClientRects: () => w.getClientRects(),
      contextElement: w
    } : w;
    a(I), f.refs.setReference(I);
  }, [f.refs]), y = _.useCallback((w) => {
    (Re(w) || w === null) && (h.current = w, s(w)), (Re(f.refs.reference.current) || f.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    w !== null && !Re(w)) && f.refs.setReference(w);
  }, [f.refs]), x = _.useMemo(() => ({
    ...f.refs,
    setReference: y,
    setPositionReference: b,
    domReference: h
  }), [f.refs, y, b]), p = _.useMemo(() => ({
    ...f.elements,
    domReference: u
  }), [f.elements, u]), m = _.useMemo(() => ({
    ...f,
    ...o,
    refs: x,
    elements: p,
    nodeId: t
  }), [f, x, p, t, o]);
  return lt(() => {
    o.dataRef.current.floatingContext = m;
    const w = d == null ? void 0 : d.nodesRef.current.find((I) => I.id === t);
    w && (w.context = m);
  }), _.useMemo(() => ({
    ...f,
    context: m,
    refs: x,
    elements: p
  }), [f, x, p, m]);
}
const mn = 0, qe = 1, bt = 2, Ar = 4;
function Do(e) {
  return () => e;
}
function bl(e) {
  e();
}
function kr(e, t) {
  return (n) => e(t(n));
}
function Mo(e, t) {
  return () => e(t);
}
function yl(e, t) {
  return (n) => e(t, n);
}
function Xn(e) {
  return e !== void 0;
}
function Sl(...e) {
  return () => {
    e.map(bl);
  };
}
function yt() {
}
function gn(e, t) {
  return t(e), e;
}
function Il(e, t) {
  return t(e);
}
function me(...e) {
  return e;
}
function le(e, t) {
  return e(qe, t);
}
function J(e, t) {
  e(mn, t);
}
function Kn(e) {
  e(bt);
}
function xe(e) {
  return e(Ar);
}
function B(e, t) {
  return le(e, yl(t, mn));
}
function Pe(e, t) {
  const n = e(qe, (o) => {
    n(), t(o);
  });
  return n;
}
function zo(e) {
  let t, n;
  return (o) => (r) => {
    t = r, n && clearTimeout(n), n = setTimeout(() => {
      o(t);
    }, e);
  };
}
function Hr(e, t) {
  return e === t;
}
function pe(e = Hr) {
  let t;
  return (n) => (o) => {
    e(t, o) || (t = o, n(o));
  };
}
function Q(e) {
  return (t) => (n) => {
    e(n) && t(n);
  };
}
function L(e) {
  return (t) => kr(t, e);
}
function Fe(e) {
  return (t) => () => {
    t(e);
  };
}
function E(e, ...t) {
  const n = Cl(...t);
  return (o, r) => {
    switch (o) {
      case bt:
        Kn(e);
        return;
      case qe:
        return le(e, n(r));
    }
  };
}
function _e(e, t) {
  return (n) => (o) => {
    n(t = e(t, o));
  };
}
function ct(e) {
  return (t) => (n) => {
    e > 0 ? e-- : t(n);
  };
}
function Qe(e) {
  let t = null, n;
  return (o) => (r) => {
    t = r, !n && (n = setTimeout(() => {
      n = void 0, o(t);
    }, e));
  };
}
function ee(...e) {
  const t = new Array(e.length);
  let n = 0, o = null;
  const r = 2 ** e.length - 1;
  return e.forEach((i, s) => {
    const l = 2 ** s;
    le(i, (a) => {
      const c = n;
      n |= l, t[s] = a, c !== r && n === r && o && (o(), o = null);
    });
  }), (i) => (s) => {
    const l = () => {
      i([s].concat(t));
    };
    n === r ? l() : o = l;
  };
}
function Cl(...e) {
  return (t) => e.reduceRight(Il, t);
}
function Tl(e) {
  let t, n;
  const o = () => t == null ? void 0 : t();
  return function(r, i) {
    switch (r) {
      case qe:
        return i ? n === i ? void 0 : (o(), n = i, t = le(e, i), t) : (o(), yt);
      case bt:
        o(), n = null;
        return;
    }
  };
}
function k(e) {
  let t = e;
  const n = oe();
  return (o, r) => {
    switch (o) {
      case mn:
        t = r;
        break;
      case qe: {
        r(t);
        break;
      }
      case Ar:
        return t;
    }
    return n(o, r);
  };
}
function Ee(e, t) {
  return gn(k(t), (n) => B(e, n));
}
function oe() {
  const e = [];
  return (t, n) => {
    switch (t) {
      case mn:
        e.slice().forEach((o) => {
          o(n);
        });
        return;
      case bt:
        e.splice(0, e.length);
        return;
      case qe:
        return e.push(n), () => {
          const o = e.indexOf(n);
          o > -1 && e.splice(o, 1);
        };
    }
  };
}
function Me(e) {
  return gn(oe(), (t) => B(e, t));
}
function ie(e, t = [], { singleton: n } = { singleton: !0 }) {
  return {
    constructor: e,
    dependencies: t,
    id: Rl(),
    singleton: n
  };
}
const Rl = () => Symbol();
function El(e) {
  const t = /* @__PURE__ */ new Map(), n = ({ constructor: o, dependencies: r, id: i, singleton: s }) => {
    if (s && t.has(i))
      return t.get(i);
    const l = o(r.map((a) => n(a)));
    return s && t.set(i, l), l;
  };
  return n(e);
}
function ye(...e) {
  const t = oe(), n = new Array(e.length);
  let o = 0;
  const r = 2 ** e.length - 1;
  return e.forEach((i, s) => {
    const l = 2 ** s;
    le(i, (a) => {
      n[s] = a, o |= l, o === r && J(t, n);
    });
  }), function(i, s) {
    switch (i) {
      case bt: {
        Kn(t);
        return;
      }
      case qe:
        return o === r && s(n), le(t, s);
    }
  };
}
function G(e, t = Hr) {
  return E(e, pe(t));
}
function Ln(...e) {
  return function(t, n) {
    switch (t) {
      case bt:
        return;
      case qe:
        return Sl(...e.map((o) => le(o, n)));
    }
  };
}
const Ce = {
  /** Detailed debugging information including item measurements */
  DEBUG: 0,
  /** General informational messages */
  INFO: 1,
  /** Warning messages for potential issues */
  WARN: 2,
  /** Error messages for failures (default level) */
  ERROR: 3
}, Ol = {
  [Ce.DEBUG]: "debug",
  [Ce.ERROR]: "error",
  [Ce.INFO]: "log",
  [Ce.WARN]: "warn"
}, Al = () => typeof globalThis > "u" ? window : globalThis, et = ie(
  () => {
    const e = k(Ce.ERROR);
    return {
      log: k((t, n, o = Ce.INFO) => {
        const r = Al().VIRTUOSO_LOG_LEVEL ?? xe(e);
        o >= r && console[Ol[o]](
          "%creact-virtuoso: %c%s %o",
          "color: #0253b3; font-weight: bold",
          "color: initial",
          t,
          n
        );
      }),
      logLevel: e
    };
  },
  [],
  { singleton: !0 }
), Nn = /* @__PURE__ */ new WeakMap();
function Dr(e) {
  return "self" in e ? e.document.documentElement : e;
}
function kl(e) {
  const t = Dr(e), n = Nn.get(t);
  if (n !== void 0)
    return n;
  const o = t.ownerDocument.defaultView.getComputedStyle(t).direction === "rtl";
  return Nn.set(t, o), o;
}
function Lo(e) {
  Nn.delete(Dr(e));
}
function Mr(e, t) {
  return kl(e) ? -t : t;
}
const it = Mr;
function No(e, t) {
  return Mr(e, t);
}
function ut(e, t, n) {
  return Zn(e, t, n).callbackRef;
}
function Zn(e, t, n) {
  const o = j.useRef(null);
  let r = (s) => {
  };
  const i = j.useMemo(() => typeof ResizeObserver < "u" ? new ResizeObserver((s) => {
    const l = () => {
      const a = s[0].target;
      a.offsetParent !== null && e(a);
    };
    n ? l() : requestAnimationFrame(l);
  }) : null, [e, n]);
  return r = (s) => {
    s && t ? (i == null || i.observe(s), o.current = s) : (o.current && (i == null || i.unobserve(o.current)), o.current = null);
  }, { callbackRef: r, ref: o };
}
function Hl(e, t, n, o, r, i, s, l, a) {
  const c = j.useCallback(
    (u) => {
      const h = Dl(u.children, t, l ? "offsetWidth" : "offsetHeight", r);
      let d = u.parentElement;
      for (; d.dataset.virtuosoScroller === void 0; )
        d = d.parentElement;
      const f = d.lastElementChild.dataset.viewportType === "window";
      let b;
      f && (b = d.ownerDocument.defaultView);
      const y = s ? l ? s.scrollWidth : s.scrollHeight : f ? l ? b.document.documentElement.scrollWidth : b.document.documentElement.scrollHeight : l ? d.scrollWidth : d.scrollHeight, x = s ? l ? s.offsetWidth : s.offsetHeight : f ? l ? b.innerWidth : b.innerHeight : l ? d.offsetWidth : d.offsetHeight, p = s ? l ? it(s, s.scrollLeft) : s.scrollTop : f ? l ? it(b, b.scrollX || b.document.documentElement.scrollLeft) : b.scrollY || b.document.documentElement.scrollTop : l ? it(d, d.scrollLeft) : d.scrollTop;
      o({
        scrollHeight: y,
        scrollTop: Math.max(p, 0),
        viewportHeight: x
      }), i == null || i(
        l ? Po("column-gap", getComputedStyle(u).columnGap, r) : Po("row-gap", getComputedStyle(u).rowGap, r)
      ), h !== null && e(h);
    },
    [e, t, r, i, s, o, l]
  );
  return Zn(c, n, a);
}
function Dl(e, t, n, o) {
  const r = e.length;
  if (r === 0)
    return null;
  const i = [];
  for (let s = 0; s < r; s++) {
    const l = e.item(s);
    if (l.dataset.index === void 0)
      continue;
    const a = parseInt(l.dataset.index), c = parseFloat(l.dataset.knownSize), u = t(l, n);
    if (u === 0 && o("Zero-sized element, this should not happen", { child: l }, Ce.ERROR), u === c)
      continue;
    const h = i[i.length - 1];
    i.length === 0 || h.size !== u || h.endIndex !== a - 1 ? i.push({ endIndex: a, size: u, startIndex: a }) : i[i.length - 1].endIndex++;
  }
  return i;
}
function Po(e, t, n) {
  return t !== "normal" && (t == null ? void 0 : t.endsWith("px")) !== !0 && n(`${e} was not resolved to pixel value correctly`, t, Ce.WARN), t === "normal" ? 0 : parseInt(t ?? "0", 10);
}
function zr(e, t, n) {
  const o = j.useRef(null), r = j.useCallback(
    (a) => {
      if (!(a != null && a.offsetParent))
        return;
      const c = a.getBoundingClientRect(), u = c.width;
      let h, d;
      if (t) {
        const f = t.getBoundingClientRect(), b = c.top - f.top;
        d = f.height - Math.max(0, b), h = b + t.scrollTop;
      } else {
        const f = s.current.ownerDocument.defaultView;
        d = f.innerHeight - Math.max(0, c.top), h = c.top + f.scrollY;
      }
      o.current = {
        listHeight: c.height,
        offsetTop: h,
        visibleHeight: d,
        visibleWidth: u
      }, e(o.current);
    },
    // oxlint-disable-next-line exhaustive-deps
    [e, t]
  ), { callbackRef: i, ref: s } = Zn(r, !0, n), l = j.useCallback(() => {
    r(s.current);
  }, [r, s]);
  return j.useEffect(() => {
    var c;
    if (t) {
      t.addEventListener("scroll", l);
      const u = new ResizeObserver(() => {
        requestAnimationFrame(l);
      });
      return u.observe(t), () => {
        t.removeEventListener("scroll", l), u.unobserve(t);
      };
    }
    const a = (c = s.current) == null ? void 0 : c.ownerDocument.defaultView;
    return a == null || a.addEventListener("scroll", l), a == null || a.addEventListener("resize", l), () => {
      a == null || a.removeEventListener("scroll", l), a == null || a.removeEventListener("resize", l);
    };
  }, [l, t, s]), i;
}
const Ae = ie(
  () => {
    const e = oe(), t = oe(), n = k(0), o = oe(), r = k(0), i = oe(), s = oe(), l = k(0), a = k(0), c = k(0), u = k(0), h = oe(), d = oe(), f = k(!1), b = k(!1), y = k(!1);
    return B(
      E(
        e,
        L(({ scrollTop: x }) => x)
      ),
      t
    ), B(
      E(
        e,
        L(({ scrollHeight: x }) => x)
      ),
      s
    ), B(t, r), {
      deviation: n,
      fixedFooterHeight: c,
      fixedHeaderHeight: a,
      footerHeight: u,
      headerHeight: l,
      horizontalDirection: b,
      scrollBy: d,
      // input
      scrollContainerState: e,
      scrollHeight: s,
      scrollingInProgress: f,
      // signals
      scrollTo: h,
      scrollTop: t,
      skipAnimationFrameInResizeObserver: y,
      smoothScrollTargetReached: o,
      // state
      statefulScrollTop: r,
      viewportHeight: i
    };
  },
  [],
  { singleton: !0 }
), Ht = { lvl: 0 };
function Lr(e, t) {
  const n = e.length;
  if (n === 0)
    return [];
  let { index: o, value: r } = t(e[0]);
  const i = [];
  for (let s = 1; s < n; s++) {
    const { index: l, value: a } = t(e[s]);
    i.push({ end: l - 1, start: o, value: r }), o = l, r = a;
  }
  return i.push({ end: 1 / 0, start: o, value: r }), i;
}
function ce(e) {
  return e === Ht;
}
function Dt(e, t) {
  if (!ce(e))
    return t === e.k ? e.v : t < e.k ? Dt(e.l, t) : Dt(e.r, t);
}
function Be(e, t, n = "k") {
  if (ce(e))
    return [-1 / 0, void 0];
  if (Number(e[n]) === t)
    return [e.k, e.v];
  if (Number(e[n]) < t) {
    const o = Be(e.r, t, n);
    return o[0] === -1 / 0 ? [e.k, e.v] : o;
  }
  return Be(e.l, t, n);
}
function He(e, t, n) {
  return ce(e) ? jr(t, n, 1) : t === e.k ? Se(e, { k: t, v: n }) : t < e.k ? jo(Se(e, { l: He(e.l, t, n) })) : jo(Se(e, { r: He(e.r, t, n) }));
}
function mt() {
  return Ht;
}
function gt(e, t, n) {
  if (ce(e))
    return [];
  const o = Be(e, t)[0];
  return Ml(jn(e, o, n));
}
function Pn(e, t) {
  if (ce(e))
    return Ht;
  const { k: n, l: o, r } = e;
  if (t === n) {
    if (ce(o))
      return r;
    if (ce(r))
      return o;
    const [i, s] = Pr(o);
    return Zt(Se(e, { k: i, l: Nr(o), v: s }));
  }
  return t < n ? Zt(Se(e, { l: Pn(o, t) })) : Zt(Se(e, { r: Pn(r, t) }));
}
function st(e) {
  return ce(e) ? [] : [...st(e.l), { k: e.k, v: e.v }, ...st(e.r)];
}
function jn(e, t, n) {
  if (ce(e))
    return [];
  const { k: o, l: r, r: i, v: s } = e;
  let l = [];
  return o > t && (l = l.concat(jn(r, t, n))), o >= t && o <= n && l.push({ k: o, v: s }), o <= n && (l = l.concat(jn(i, t, n))), l;
}
function Zt(e) {
  const { l: t, lvl: n, r: o } = e;
  if (o.lvl >= n - 1 && t.lvl >= n - 1)
    return e;
  if (n > o.lvl + 1) {
    if (In(t))
      return Br(Se(e, { lvl: n - 1 }));
    if (!ce(t) && !ce(t.r))
      return Se(t.r, {
        l: Se(t, { r: t.r.l }),
        lvl: n,
        r: Se(e, {
          l: t.r.r,
          lvl: n - 1
        })
      });
    throw new Error("Unexpected empty nodes");
  }
  if (In(e))
    return Bn(Se(e, { lvl: n - 1 }));
  if (!ce(o) && !ce(o.l)) {
    const r = o.l, i = In(r) ? o.lvl - 1 : o.lvl;
    return Se(r, {
      l: Se(e, {
        lvl: n - 1,
        r: r.l
      }),
      lvl: r.lvl + 1,
      r: Bn(Se(o, { l: r.r, lvl: i }))
    });
  }
  throw new Error("Unexpected empty nodes");
}
function Se(e, t) {
  return jr(
    t.k !== void 0 ? t.k : e.k,
    t.v !== void 0 ? t.v : e.v,
    t.lvl !== void 0 ? t.lvl : e.lvl,
    t.l !== void 0 ? t.l : e.l,
    t.r !== void 0 ? t.r : e.r
  );
}
function Nr(e) {
  return ce(e.r) ? e.l : Zt(Se(e, { r: Nr(e.r) }));
}
function In(e) {
  return ce(e) || e.lvl > e.r.lvl;
}
function Pr(e) {
  return ce(e.r) ? [e.k, e.v] : Pr(e.r);
}
function jr(e, t, n, o = Ht, r = Ht) {
  return { k: e, l: o, lvl: n, r, v: t };
}
function jo(e) {
  return Bn(Br(e));
}
function Br(e) {
  const { l: t } = e;
  return !ce(t) && t.lvl === e.lvl ? Se(t, { r: Se(e, { l: t.r }) }) : e;
}
function Bn(e) {
  const { lvl: t, r: n } = e;
  return !ce(n) && !ce(n.r) && n.lvl === t && n.r.lvl === t ? Se(n, { l: Se(e, { r: n.l }), lvl: t + 1 }) : e;
}
function Ml(e) {
  return Lr(e, ({ k: t, v: n }) => ({ index: t, value: n }));
}
function Fr(e, t) {
  return !!(e && e.startIndex === t.startIndex && e.endIndex === t.endIndex);
}
function Mt(e, t) {
  return !!(e && e[0] === t[0] && e[1] === t[1]);
}
const Jn = ie(
  () => ({ recalcInProgress: k(!1) }),
  [],
  { singleton: !0 }
);
function _r(e, t, n) {
  return e[sn(e, t, n)];
}
function sn(e, t, n, o = 0) {
  let r = e.length - 1;
  for (; o <= r; ) {
    const i = Math.floor((o + r) / 2), s = e[i], l = n(s, t);
    if (l === 0)
      return i;
    if (l === -1) {
      if (r - o < 2)
        return i - 1;
      r = i - 1;
    } else {
      if (r === o)
        return i;
      o = i + 1;
    }
  }
  throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`);
}
function zl(e, t, n, o) {
  const r = sn(e, t, o), i = sn(e, n, o, r);
  return e.slice(r, i + 1);
}
function Je(e, t) {
  return Math.round(e.getBoundingClientRect()[t]);
}
function vn(e) {
  return !ce(e.groupOffsetTree);
}
function qn({ index: e }, t) {
  return t === e ? 0 : t < e ? -1 : 1;
}
function Ll() {
  return {
    groupIndices: [],
    groupOffsetTree: mt(),
    lastIndex: 0,
    lastOffset: 0,
    lastSize: 0,
    offsetTree: [],
    sizeTree: mt()
  };
}
function Nl(e, t) {
  let n = ce(e) ? 0 : 1 / 0;
  for (const o of t) {
    const { endIndex: r, size: i, startIndex: s } = o;
    if (n = Math.min(n, s), ce(e)) {
      e = He(e, 0, i);
      continue;
    }
    const l = gt(e, s - 1, r + 1);
    if (l.some(Vl(o)))
      continue;
    let a = !1, c = !1;
    for (const { end: u, start: h, value: d } of l)
      a ? (r >= h || i === d) && (e = Pn(e, h)) : (c = d !== i, a = !0), u > r && r >= h && d !== i && (e = He(e, r + 1, d));
    c && (e = He(e, s, i));
  }
  return [e, n];
}
function Pl(e) {
  return typeof e.groupIndex < "u";
}
function jl({ offset: e }, t) {
  return t === e ? 0 : t < e ? -1 : 1;
}
function zt(e, t, n) {
  if (t.length === 0)
    return 0;
  const { index: o, offset: r, size: i } = _r(t, e, qn), s = e - o, l = i * s + (s - 1) * n + r;
  return l > 0 ? l + n : l;
}
function Wr(e, t) {
  if (!vn(t))
    return e;
  let n = 0;
  for (; t.groupIndices[n] <= e + n; )
    n++;
  return e + n;
}
function Vr(e, t, n) {
  if (Pl(e))
    return t.groupIndices[e.groupIndex] + 1;
  const o = e.index === "LAST" ? n : e.index;
  let r = Wr(o, t);
  return r = Math.max(0, r, Math.min(n, r)), r;
}
function Bl(e, t, n, o = 0) {
  return o > 0 && (t = Math.max(t, _r(e, o, qn).offset)), Lr(zl(e, t, n, jl), Wl);
}
function Fl(e, [t, n, o, r]) {
  t.length > 0 && o("received item sizes", t, Ce.DEBUG);
  const i = e.sizeTree;
  let s = i, l = 0;
  if (n.length > 0 && ce(i) && t.length === 2) {
    const d = t[0].size, f = t[1].size;
    s = n.reduce((b, y) => He(He(b, y, d), y + 1, f), s);
  } else
    [s, l] = Nl(s, t);
  if (s === i)
    return e;
  const { lastIndex: a, lastOffset: c, lastSize: u, offsetTree: h } = Fn(e.offsetTree, l, s, r);
  return {
    groupIndices: n,
    groupOffsetTree: n.reduce((d, f) => He(d, f, zt(f, h, r)), mt()),
    lastIndex: a,
    lastOffset: c,
    lastSize: u,
    offsetTree: h,
    sizeTree: s
  };
}
function _l(e) {
  return st(e).map(({ k: t, v: n }, o, r) => {
    const i = r[o + 1];
    return { endIndex: i !== void 0 ? i.k - 1 : 1 / 0, size: n, startIndex: t };
  });
}
function Bo(e, t) {
  let n = 0, o = 0;
  for (; n < e; )
    n += t[o + 1] - t[o] - 1, o++;
  return o - (n === e ? 0 : 1);
}
function Fn(e, t, n, o) {
  let r = e, i = 0, s = 0, l = 0, a = 0;
  if (t !== 0) {
    a = sn(r, t - 1, qn), l = r[a].offset;
    const c = Be(n, t - 1);
    i = c[0], s = c[1], r.length && r[a].size === Be(n, t)[1] && (a -= 1), r = r.slice(0, a + 1);
  } else
    r = [];
  for (const { start: c, value: u } of gt(n, t, 1 / 0)) {
    const h = c - i, d = h * s + l + h * o;
    r.push({
      index: c,
      offset: d,
      size: u
    }), i = c, l = d, s = u;
  }
  return {
    lastIndex: i,
    lastOffset: l,
    lastSize: s,
    offsetTree: r
  };
}
function Wl(e) {
  return { index: e.index, value: e };
}
function Vl(e) {
  const { endIndex: t, size: n, startIndex: o } = e;
  return (r) => r.start === o && (r.end === t || r.end === 1 / 0) && r.value === n;
}
const Ul = {
  offsetHeight: "height",
  offsetWidth: "width"
}, Ue = ie(
  ([{ log: e }, { recalcInProgress: t }]) => {
    const n = oe(), o = oe(), r = Ee(o, 0), i = oe(), s = oe(), l = k(0), a = k([]), c = k(void 0), u = k(void 0), h = k(void 0), d = k(void 0), f = k((g, S) => Je(g, Ul[S])), b = k(void 0), y = k(0), x = Ll(), p = Ee(
      E(n, ee(a, e, y), _e(Fl, x), pe()),
      x
    ), m = Ee(
      E(
        a,
        pe(),
        _e((g, S) => ({ current: S, prev: g.current }), {
          current: [],
          prev: []
        }),
        L(({ prev: g }) => g)
      ),
      []
    );
    B(
      E(
        a,
        Q((g) => g.length > 0),
        ee(p, y),
        L(([g, S, R]) => {
          const H = g.reduce((O, P, N) => He(O, P, zt(P, S.offsetTree, R) || N), mt());
          return {
            ...S,
            groupIndices: g,
            groupOffsetTree: H
          };
        })
      ),
      p
    ), B(
      E(
        o,
        ee(p),
        Q(([g, { lastIndex: S }]) => g < S),
        L(([g, { lastIndex: S, lastSize: R }]) => [
          {
            endIndex: S,
            size: R,
            startIndex: g
          }
        ])
      ),
      n
    ), B(c, u);
    const w = Ee(
      E(
        c,
        L((g) => g === void 0)
      ),
      !0
    );
    B(
      E(
        u,
        Q((g) => g !== void 0 && ce(xe(p).sizeTree)),
        L((g) => {
          const S = xe(h), R = xe(a).length > 0;
          return S !== void 0 && S !== 0 ? R ? [
            { endIndex: 0, size: S, startIndex: 0 },
            { endIndex: 1, size: g, startIndex: 1 }
          ] : [] : [{ endIndex: 0, size: g, startIndex: 0 }];
        })
      ),
      n
    ), B(
      E(
        d,
        Q((g) => g !== void 0 && g.length > 0 && ce(xe(p).sizeTree)),
        L((g) => {
          const S = [];
          let R = g[0], H = 0;
          for (let O = 1; O < g.length; O++) {
            const P = g[O];
            P !== R && (S.push({
              endIndex: O - 1,
              size: R,
              startIndex: H
            }), R = P, H = O);
          }
          return S.push({
            endIndex: g.length - 1,
            size: R,
            startIndex: H
          }), S;
        })
      ),
      n
    ), B(
      E(
        a,
        ee(h, u),
        Q(([, g, S]) => g !== void 0 && S !== void 0),
        L(([g, S, R]) => {
          const H = [];
          for (let O = 0; O < g.length; O++) {
            const P = g[O], N = g[O + 1];
            H.push({
              startIndex: P,
              endIndex: P,
              size: S
            }), N !== void 0 && H.push({
              startIndex: P + 1,
              endIndex: N - 1,
              size: R
            });
          }
          return H;
        })
      ),
      n
    );
    const I = Me(
      E(
        n,
        ee(p),
        _e(
          ({ sizes: g }, [S, R]) => ({
            changed: R !== g,
            sizes: R
          }),
          { changed: !1, sizes: x }
        ),
        L((g) => g.changed)
      )
    );
    le(
      E(
        l,
        _e(
          (g, S) => ({ diff: g.prev - S, prev: S }),
          { diff: 0, prev: 0 }
        ),
        L((g) => g.diff)
      ),
      (g) => {
        const { groupIndices: S } = xe(p);
        if (g > 0)
          J(t, !0), J(i, g + Bo(g, S));
        else if (g < 0) {
          const R = xe(m);
          R.length > 0 && (g -= Bo(-g, R)), J(s, g);
        }
      }
    ), le(E(l, ee(e)), ([g, S]) => {
      g < 0 && S(
        "`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",
        { firstItemIndex: l },
        Ce.ERROR
      );
    });
    const T = Me(i);
    B(
      E(
        i,
        ee(p),
        L(([g, S]) => {
          const R = S.groupIndices.length > 0, H = [], O = S.lastSize;
          if (R) {
            const P = Dt(S.sizeTree, 0);
            let N = 0, z = 0;
            for (; N < g; ) {
              const V = S.groupIndices[z], U = S.groupIndices.length === z + 1 ? 1 / 0 : S.groupIndices[z + 1] - V - 1;
              H.push({
                endIndex: V,
                size: P,
                startIndex: V
              }), H.push({
                endIndex: V + 1 + U - 1,
                size: O,
                startIndex: V + 1
              }), z++, N += U + 1;
            }
            const $ = st(S.sizeTree);
            return N !== g && $.shift(), $.reduce(
              (V, { k: U, v: F }) => {
                let q = V.ranges;
                return V.prevSize !== 0 && (q = [
                  ...V.ranges,
                  {
                    endIndex: U + g - 1,
                    size: V.prevSize,
                    startIndex: V.prevIndex
                  }
                ]), {
                  prevIndex: U + g,
                  prevSize: F,
                  ranges: q
                };
              },
              {
                prevIndex: g,
                prevSize: 0,
                ranges: H
              }
            ).ranges;
          }
          return st(S.sizeTree).reduce(
            (P, { k: N, v: z }) => ({
              prevIndex: N + g,
              prevSize: z,
              ranges: [...P.ranges, { endIndex: N + g - 1, size: P.prevSize, startIndex: P.prevIndex }]
            }),
            {
              prevIndex: 0,
              prevSize: O,
              ranges: []
            }
          ).ranges;
        })
      ),
      n
    );
    const A = Me(
      E(
        s,
        ee(p, y),
        L(([g, { offsetTree: S }, R]) => {
          const H = -g;
          return zt(H, S, R);
        })
      )
    );
    return B(
      E(
        s,
        ee(p, y),
        L(([g, S, R]) => {
          if (S.groupIndices.length > 0) {
            if (ce(S.sizeTree))
              return S;
            let O = mt();
            const P = xe(m);
            let N = 0, z = 0, $ = 0;
            for (; N < -g; ) {
              $ = P[z];
              const V = P[z + 1] - $ - 1;
              z++, N += V + 1;
            }
            if (O = st(S.sizeTree).reduce((V, { k: U, v: F }) => He(V, Math.max(0, U + g), F), O), N !== -g) {
              const V = Dt(S.sizeTree, $);
              O = He(O, 0, V);
              const U = Be(S.sizeTree, -g + 1)[1];
              O = He(O, 1, U);
            }
            return {
              ...S,
              sizeTree: O,
              ...Fn(S.offsetTree, 0, O, R)
            };
          }
          const H = st(S.sizeTree).reduce((O, { k: P, v: N }) => He(O, Math.max(0, P + g), N), mt());
          return {
            ...S,
            sizeTree: H,
            ...Fn(S.offsetTree, 0, H, R)
          };
        })
      ),
      p
    ), {
      beforeUnshiftWith: T,
      // input
      data: b,
      defaultItemSize: u,
      firstItemIndex: l,
      fixedItemSize: c,
      fixedGroupSize: h,
      gap: y,
      groupIndices: a,
      heightEstimates: d,
      itemSize: f,
      listRefresh: I,
      shiftWith: s,
      shiftWithOffset: A,
      sizeRanges: n,
      // output
      sizes: p,
      statefulTotalCount: r,
      totalCount: o,
      trackItemSizes: w,
      unshiftWith: i
    };
  },
  me(et, Jn),
  { singleton: !0 }
);
function $l(e) {
  return e.reduce(
    (t, n) => (t.groupIndices.push(t.totalCount), t.totalCount += n + 1, t),
    {
      groupIndices: [],
      totalCount: 0
    }
  );
}
const Ur = ie(
  ([{ groupIndices: e, sizes: t, totalCount: n }, { headerHeight: o, scrollTop: r }]) => {
    const i = oe(), s = oe(), l = Me(E(i, L($l)));
    return B(
      E(
        l,
        L((a) => a.totalCount)
      ),
      n
    ), B(
      E(
        l,
        L((a) => a.groupIndices)
      ),
      e
    ), B(
      E(
        ye(r, t, o),
        Q(([a, c]) => vn(c)),
        L(([a, c, u]) => Be(c.groupOffsetTree, Math.max(a - u, 0), "v")[0]),
        pe(),
        L((a) => [a])
      ),
      s
    ), { groupCounts: i, topItemsIndexes: s };
  },
  me(Ue, Ae)
), tt = ie(
  ([{ log: e }]) => {
    const t = k(!1), n = Me(
      E(
        t,
        Q((o) => o),
        pe()
      )
    );
    return le(t, (o) => {
      o && xe(e)("props updated", {}, Ce.DEBUG);
    }), { didMount: n, propsReady: t };
  },
  me(et),
  { singleton: !0 }
), Gl = typeof document < "u" && "scrollBehavior" in document.documentElement.style;
function $r(e) {
  const t = typeof e == "number" ? { index: e } : e;
  return t.align || (t.align = "start"), (!t.behavior || !Gl) && (t.behavior = "auto"), t.offset === void 0 && (t.offset = 0), t;
}
const Wt = ie(
  ([
    { gap: e, listRefresh: t, sizes: n, totalCount: o },
    {
      fixedFooterHeight: r,
      fixedHeaderHeight: i,
      footerHeight: s,
      headerHeight: l,
      scrollingInProgress: a,
      scrollTo: c,
      smoothScrollTargetReached: u,
      viewportHeight: h
    },
    { log: d }
  ]) => {
    const f = oe(), b = oe(), y = k(0);
    let x = null, p = null, m = null;
    function w() {
      x !== null && (x(), x = null), m !== null && (m(), m = null), p && (clearTimeout(p), p = null), J(a, !1);
    }
    return B(
      E(
        f,
        ee(n, h, o, y, l, s, d),
        ee(e, i, r),
        L(
          ([
            [I, T, A, g, S, R, H, O],
            P,
            N,
            z
          ]) => {
            const $ = $r(I), { align: V, behavior: U, offset: F } = $, q = g - 1, ne = Vr($, T, q);
            let v = zt(ne, T.offsetTree, P) + R;
            V === "end" ? (v += N + Be(T.sizeTree, ne)[1] - A + z, ne === q && (v += H)) : V === "center" ? v += (N + Be(T.sizeTree, ne)[1] - A + z) / 2 : v -= S, F !== void 0 && F !== 0 && (v += F);
            const W = (Y) => {
              w(), Y ? (O("retrying to scroll to", { location: I }, Ce.DEBUG), J(f, I)) : (J(b, !0), O("list did not change, scroll successful", {}, Ce.DEBUG));
            };
            if (w(), U === "smooth") {
              let Y = !1;
              m = le(t, (X) => {
                Y = Y || X;
              }), x = Pe(u, () => {
                W(Y);
              });
            } else
              x = Pe(E(t, Ql(150)), W);
            return p = setTimeout(() => {
              w();
            }, 1200), J(a, !0), O("scrolling from index to", { behavior: U, index: ne, top: v }, Ce.DEBUG), { behavior: U, top: v };
          }
        )
      ),
      c
    ), {
      scrollTargetReached: b,
      scrollToIndex: f,
      topListHeight: y
    };
  },
  me(Ue, Ae, et),
  { singleton: !0 }
);
function Ql(e) {
  return (t) => {
    const n = setTimeout(() => {
      t(!1);
    }, e);
    return (o) => {
      o && (t(!0), clearTimeout(n));
    };
  };
}
function eo(e, t) {
  e === 0 ? t() : requestAnimationFrame(() => {
    eo(e - 1, t);
  });
}
function to(e, t) {
  const n = t - 1;
  return typeof e == "number" ? e : e.index === "LAST" ? n : e.index;
}
const Vt = ie(
  ([{ defaultItemSize: e, listRefresh: t, sizes: n }, { scrollTop: o }, { scrollTargetReached: r, scrollToIndex: i }, { didMount: s }]) => {
    const l = k(!0), a = k(0), c = k(!0);
    return B(
      E(
        s,
        ee(a),
        Q(([u, h]) => h !== 0),
        Fe(!1)
      ),
      l
    ), B(
      E(
        s,
        ee(a),
        Q(([u, h]) => h !== 0),
        Fe(!1)
      ),
      c
    ), le(
      E(
        ye(t, s),
        ee(l, n, e, c),
        Q(([[, u], h, { sizeTree: d }, f, b]) => u && (!ce(d) || Xn(f)) && !h && !b),
        ee(a)
      ),
      ([, u]) => {
        Pe(r, () => {
          J(c, !0);
        }), eo(4, () => {
          Pe(o, () => {
            J(l, !0);
          }), J(i, u);
        });
      }
    ), {
      initialItemFinalLocationReached: c,
      initialTopMostItemIndex: a,
      scrolledToInitialItem: l
    };
  },
  me(Ue, Ae, Wt, tt),
  { singleton: !0 }
);
function Gr(e, t) {
  return Math.abs(e - t) < 1.01;
}
const Lt = "up", Et = "down", Yl = "none", Xl = {
  atBottom: !1,
  notAtBottomBecause: "NOT_SHOWING_LAST_ITEM",
  state: {
    offsetBottom: 0,
    scrollHeight: 0,
    scrollTop: 0,
    viewportHeight: 0
  }
}, Kl = 0, Ut = ie(([{ footerHeight: e, headerHeight: t, scrollBy: n, scrollContainerState: o, scrollTop: r, viewportHeight: i }]) => {
  const s = k(!1), l = k(!0), a = oe(), c = oe(), u = k(4), h = k(Kl), d = Ee(
    E(
      Ln(E(G(r), ct(1), Fe(!0)), E(G(r), ct(1), Fe(!1), zo(100))),
      pe()
    ),
    !1
  ), f = Ee(
    E(Ln(E(n, Fe(!0)), E(n, Fe(!1), zo(200))), pe()),
    !1
  );
  B(
    E(
      ye(G(r), G(h)),
      L(([m, w]) => m <= w),
      pe()
    ),
    l
  ), B(E(l, Qe(50)), c);
  const b = Me(
    E(
      ye(o, G(i), G(t), G(e), G(u)),
      _e((m, [{ scrollHeight: w, scrollTop: I }, T, A, g, S]) => {
        const R = I + T - w > -S, H = {
          scrollHeight: w,
          scrollTop: I,
          viewportHeight: T
        };
        if (R) {
          let P, N;
          return I > m.state.scrollTop ? (P = "SCROLLED_DOWN", N = m.state.scrollTop - I) : (P = "SIZE_DECREASED", N = m.state.scrollTop - I || m.scrollTopDelta), {
            atBottom: !0,
            atBottomBecause: P,
            scrollTopDelta: N,
            state: H
          };
        }
        let O;
        return H.scrollHeight > m.state.scrollHeight ? O = "SIZE_INCREASED" : T < m.state.viewportHeight ? O = "VIEWPORT_HEIGHT_DECREASING" : I < m.state.scrollTop ? O = "SCROLLING_UPWARDS" : O = "NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM", {
          atBottom: !1,
          notAtBottomBecause: O,
          state: H
        };
      }, Xl),
      pe((m, w) => m !== void 0 && m.atBottom === w.atBottom)
    )
  ), y = Ee(
    E(
      o,
      _e(
        (m, { scrollHeight: w, scrollTop: I, viewportHeight: T }) => {
          if (!Gr(m.scrollHeight, w)) {
            const A = w - (I + T) < 1;
            return m.scrollTop !== I && A ? {
              changed: !0,
              jump: m.scrollTop - I,
              scrollHeight: w,
              scrollTop: I
            } : {
              changed: !0,
              jump: 0,
              scrollHeight: w,
              scrollTop: I
            };
          }
          return {
            changed: !1,
            jump: 0,
            scrollHeight: w,
            scrollTop: I
          };
        },
        { changed: !1, jump: 0, scrollHeight: 0, scrollTop: 0 }
      ),
      Q((m) => m.changed),
      L((m) => m.jump)
    ),
    0
  );
  B(
    E(
      b,
      L((m) => m.atBottom)
    ),
    s
  ), B(E(s, Qe(50)), a);
  const x = k(Et);
  B(
    E(
      o,
      L(({ scrollTop: m }) => m),
      pe(),
      _e(
        (m, w) => xe(f) ? { direction: m.direction, prevScrollTop: w } : { direction: w < m.prevScrollTop ? Lt : Et, prevScrollTop: w },
        { direction: Et, prevScrollTop: 0 }
      ),
      L((m) => m.direction)
    ),
    x
  ), B(E(o, Qe(50), Fe(Yl)), x);
  const p = k(0);
  return B(
    E(
      d,
      Q((m) => !m),
      Fe(0)
    ),
    p
  ), B(
    E(
      r,
      Qe(100),
      ee(d),
      Q(([m, w]) => w),
      _e(([m, w], [I]) => [w, I], [0, 0]),
      L(([m, w]) => w - m)
    ),
    p
  ), {
    atBottomState: b,
    atBottomStateChange: a,
    atBottomThreshold: u,
    atTopStateChange: c,
    atTopThreshold: h,
    isAtBottom: s,
    isAtTop: l,
    isScrolling: d,
    lastJumpDueToItemResize: y,
    scrollDirection: x,
    scrollVelocity: p
  };
}, me(Ae)), Nt = "top", Pt = "bottom", Fo = "none";
function _o(e, t, n) {
  return typeof e == "number" ? n === Lt && t === Nt || n === Et && t === Pt ? e : 0 : n === Lt ? t === Nt ? e.main : e.reverse : t === Pt ? e.main : e.reverse;
}
function Wo(e, t) {
  return typeof e == "number" ? e : e[t] ?? 0;
}
const no = ie(
  ([{ deviation: e, fixedHeaderHeight: t, headerHeight: n, scrollTop: o, viewportHeight: r }]) => {
    const i = oe(), s = k(0), l = k(0), a = k(0), c = Ee(
      E(
        ye(
          G(o),
          G(r),
          G(n),
          G(i, Mt),
          G(a),
          G(s),
          G(t),
          G(e),
          G(l)
        ),
        L(
          ([
            u,
            h,
            d,
            [f, b],
            y,
            x,
            p,
            m,
            w
          ]) => {
            const I = u - m, T = x + p, A = Math.max(d - I, 0);
            let g = Fo;
            const S = Wo(w, Nt), R = Wo(w, Pt);
            return f -= m, f += d + p, b += d + p, b -= m, f > u + T - S && (g = Lt), b < u - A + h + R && (g = Et), g !== Fo ? [
              Math.max(I - d - _o(y, Nt, g) - S, 0),
              I - A - p + h + _o(y, Pt, g) + R
            ] : null;
          }
        ),
        Q((u) => u !== null),
        pe(Mt)
      ),
      [0, 0]
    );
    return {
      increaseViewportBy: l,
      // input
      listBoundary: i,
      overscan: a,
      topListHeight: s,
      // output
      visibleRange: c
    };
  },
  me(Ae),
  { singleton: !0 }
);
function Zl(e, t, n) {
  if (vn(t)) {
    const o = Wr(e, t);
    return [
      { index: Be(t.groupOffsetTree, o)[0], offset: 0, size: 0 },
      { data: n == null ? void 0 : n[0], index: o, offset: 0, size: 0 }
    ];
  }
  return [{ data: n == null ? void 0 : n[0], index: e, offset: 0, size: 0 }];
}
const Cn = {
  bottom: 0,
  firstItemIndex: 0,
  items: [],
  offsetBottom: 0,
  offsetTop: 0,
  top: 0,
  topItems: [],
  topListHeight: 0,
  totalCount: 0
};
function Jt(e, t, n, o, r, i) {
  const { lastIndex: s, lastOffset: l, lastSize: a } = r;
  let c = 0, u = 0;
  if (e.length > 0) {
    c = e[0].offset;
    const y = e[e.length - 1];
    u = y.offset + y.size;
  }
  const h = n - s, d = l + h * a + (h - 1) * o, f = c, b = d - u;
  return {
    bottom: u,
    firstItemIndex: i,
    items: Vo(e, r, i),
    offsetBottom: b,
    offsetTop: c,
    top: f,
    topItems: Vo(t, r, i),
    topListHeight: t.reduce((y, x) => x.size + y, 0),
    totalCount: n
  };
}
function Qr(e, t, n, o, r, i) {
  let s = 0;
  if (n.groupIndices.length > 0)
    for (const u of n.groupIndices) {
      if (u - s >= e)
        break;
      s++;
    }
  const l = e + s, a = to(t, l), c = Array.from({ length: l }).map((u, h) => ({
    data: i[h + a],
    index: h + a,
    offset: 0,
    size: 0
  }));
  return Jt(c, [], l, r, n, o);
}
function Vo(e, t, n) {
  if (e.length === 0)
    return [];
  if (!vn(t))
    return e.map((c) => ({ ...c, index: c.index + n, originalIndex: c.index }));
  const o = e[0].index, r = e[e.length - 1].index, i = [], s = gt(t.groupOffsetTree, o, r);
  let l, a = 0;
  for (const c of e) {
    (!l || l.end < c.index) && (l = s.shift(), a = t.groupIndices.indexOf(l.start));
    let u;
    c.index === l.start ? u = {
      index: a,
      type: "group"
    } : u = {
      groupIndex: a,
      index: c.index - (a + 1) + n
    }, i.push({
      ...u,
      data: c.data,
      offset: c.offset,
      originalIndex: c.index,
      size: c.size
    });
  }
  return i;
}
function Uo(e, t) {
  return e === void 0 ? 0 : typeof e == "number" ? e : e[t] ?? 0;
}
const ft = ie(
  ([
    { data: e, firstItemIndex: t, gap: n, sizes: o, totalCount: r },
    i,
    { listBoundary: s, topListHeight: l, visibleRange: a },
    { initialTopMostItemIndex: c, scrolledToInitialItem: u },
    { topListHeight: h },
    d,
    { didMount: f },
    { recalcInProgress: b }
  ]) => {
    const y = k([]), x = k(0), p = oe(), m = k(0);
    B(i.topItemsIndexes, y);
    const w = Ee(
      E(
        ye(
          f,
          b,
          G(a, Mt),
          G(r),
          G(o),
          G(c),
          u,
          G(y),
          G(t),
          G(n),
          G(m),
          e
        ),
        Q(([g, S, , R, , , , , , , , H]) => {
          const O = H !== void 0 && H.length !== R;
          return g && !S && !O;
        }),
        L(
          ([
            ,
            ,
            [g, S],
            R,
            H,
            O,
            P,
            N,
            z,
            $,
            V,
            U
          ]) => {
            var C, te;
            const F = H, { offsetTree: q, sizeTree: ne } = F, v = xe(x);
            if (R === 0)
              return { ...Cn, totalCount: R };
            if (g === 0 && S === 0)
              return v === 0 ? { ...Cn, totalCount: R } : Qr(v, O, H, z, $, U || []);
            if (ce(ne))
              return v > 0 ? null : Jt(
                Zl(to(O, R), F, U),
                [],
                R,
                $,
                F,
                z
              );
            const W = [];
            if (N.length > 0) {
              const se = N[0], ue = N[N.length - 1];
              let be = 0;
              for (const ge of gt(ne, se, ue)) {
                const ae = ge.value, K = Math.max(ge.start, se), ve = Math.min(ge.end, ue);
                for (let fe = K; fe <= ve; fe++)
                  W.push({ data: U == null ? void 0 : U[fe], index: fe, offset: be, size: ae }), be += ae;
              }
            }
            if (!P)
              return Jt([], W, R, $, F, z);
            const Y = N.length > 0 ? N[N.length - 1] + 1 : 0, X = Bl(q, g, S, Y);
            if (X.length === 0)
              return null;
            const we = R - 1, de = gn([], (se) => {
              for (const ue of X) {
                const be = ue.value;
                let ge = be.offset, ae = ue.start;
                const K = be.size;
                if (be.offset < g) {
                  ae += Math.floor((g - be.offset + $) / (K + $));
                  const fe = ae - ue.start;
                  ge += fe * K + fe * $;
                }
                ae < Y && (ge += (Y - ae) * K, ae = Y);
                const ve = Math.min(ue.end, we);
                for (let fe = ae; fe <= ve && !(ge >= S); fe++)
                  se.push({ data: U == null ? void 0 : U[fe], index: fe, offset: ge, size: K }), ge += K + $;
              }
            }), re = Uo(V, Nt), D = Uo(V, Pt);
            if (de.length > 0 && (re > 0 || D > 0)) {
              const se = de[0], ue = de[de.length - 1];
              if (re > 0 && se.index > Y) {
                const be = Math.min(re, se.index - Y), ge = [];
                let ae = se.offset;
                for (let K = se.index - 1; K >= se.index - be; K--) {
                  const ve = ((C = gt(ne, K, K)[0]) == null ? void 0 : C.value) ?? se.size;
                  ae -= ve + $, ge.unshift({ data: U == null ? void 0 : U[K], index: K, offset: ae, size: ve });
                }
                de.unshift(...ge);
              }
              if (D > 0 && ue.index < we) {
                const be = Math.min(D, we - ue.index);
                let ge = ue.offset + ue.size + $;
                for (let ae = ue.index + 1; ae <= ue.index + be; ae++) {
                  const K = ((te = gt(ne, ae, ae)[0]) == null ? void 0 : te.value) ?? ue.size;
                  de.push({ data: U == null ? void 0 : U[ae], index: ae, offset: ge, size: K }), ge += K + $;
                }
              }
            }
            return Jt(de, W, R, $, F, z);
          }
        ),
        //@ts-expect-error filter needs to be fixed
        Q((g) => g !== null),
        pe()
      ),
      Cn
    );
    B(
      E(
        e,
        Q(Xn),
        L((g) => g == null ? void 0 : g.length)
      ),
      r
    ), B(
      E(
        w,
        L((g) => g.topListHeight)
      ),
      h
    ), B(h, l), B(
      E(
        w,
        L((g) => [g.top, g.bottom])
      ),
      s
    ), B(
      E(
        w,
        L((g) => g.items)
      ),
      p
    );
    const I = Me(
      E(
        w,
        Q(({ items: g }) => g.length > 0),
        ee(r, e),
        Q(([{ items: g }, S]) => g[g.length - 1].originalIndex === S - 1),
        L(([, g, S]) => [g - 1, S]),
        pe(Mt),
        L(([g]) => g)
      )
    ), T = Me(
      E(
        w,
        Qe(200),
        Q(({ items: g, topItems: S }) => g.length > 0 && g[0].originalIndex === S.length),
        L(({ items: g }) => g[0].index),
        pe()
      )
    ), A = Me(
      E(
        w,
        Q(({ items: g }) => g.length > 0),
        L(({ items: g }) => {
          let S = 0, R = g.length - 1;
          for (; g[S].type === "group" && S < R; )
            S++;
          for (; g[R].type === "group" && R > S; )
            R--;
          return {
            endIndex: g[R].index,
            startIndex: g[S].index
          };
        }),
        pe(Fr)
      )
    );
    return {
      endReached: I,
      initialItemCount: x,
      itemsRendered: p,
      listState: w,
      minOverscanItemCount: m,
      rangeChanged: A,
      startReached: T,
      topItemsIndexes: y,
      ...d
    };
  },
  me(
    Ue,
    Ur,
    no,
    Vt,
    Wt,
    Ut,
    tt,
    Jn
  ),
  { singleton: !0 }
), Yr = ie(
  ([{ fixedFooterHeight: e, fixedHeaderHeight: t, footerHeight: n, headerHeight: o }, { listState: r }]) => {
    const i = oe(), s = Ee(
      E(
        ye(n, e, o, t, r),
        L(([l, a, c, u, h]) => l + a + c + u + h.offsetBottom + h.bottom)
      ),
      0
    );
    return B(G(s), i), { totalListHeight: s, totalListHeightChanged: i };
  },
  me(Ae, ft),
  { singleton: !0 }
), Jl = ie(
  ([{ viewportHeight: e }, { totalListHeight: t }]) => {
    const n = k(!1), o = Ee(
      E(
        ye(n, e, t),
        Q(([r]) => r),
        L(([, r, i]) => Math.max(0, r - i)),
        Qe(0),
        pe()
      ),
      0
    );
    return { alignToBottom: n, paddingTopAddition: o };
  },
  me(Ae, Yr),
  { singleton: !0 }
), Xr = ie(() => ({
  context: k(null)
})), ql = ({
  itemBottom: e,
  itemTop: t,
  locationParams: { align: n, behavior: o, ...r },
  viewportBottom: i,
  viewportTop: s
}) => t < s ? { ...r, align: n ?? "start", ...o !== void 0 ? { behavior: o } : {} } : e > i ? { ...r, align: n ?? "end", ...o !== void 0 ? { behavior: o } : {} } : null, Kr = ie(
  ([
    { gap: e, sizes: t, totalCount: n },
    { fixedFooterHeight: o, fixedHeaderHeight: r, headerHeight: i, scrollingInProgress: s, scrollTop: l, viewportHeight: a },
    { scrollToIndex: c }
  ]) => {
    const u = oe();
    return B(
      E(
        u,
        ee(t, a, n, i, r, o, l),
        ee(e),
        L(([[h, d, f, b, y, x, p, m], w]) => {
          const { calculateViewLocation: I = ql, done: T, ...A } = h, g = Vr(h, d, b - 1), S = zt(g, d.offsetTree, w) + y + x, R = S + Be(d.sizeTree, g)[1], H = m + x, O = m + f - p, P = I({
            itemBottom: R,
            itemTop: S,
            locationParams: A,
            viewportBottom: O,
            viewportTop: H
          });
          return P !== null ? T && Pe(
            E(
              s,
              Q((N) => !N),
              // skips the initial publish of false, and the cleanup call.
              // but if scrollingInProgress is true, we skip the initial publish.
              ct(xe(s) ? 1 : 2)
            ),
            T
          ) : T == null || T(), P;
        }),
        Q((h) => h !== null)
      ),
      c
    ), {
      scrollIntoView: u
    };
  },
  me(Ue, Ae, Wt, ft, et),
  { singleton: !0 }
);
function $o(e) {
  return e === !1 ? !1 : e === "smooth" ? "smooth" : "auto";
}
const ea = (e, t) => typeof e == "function" ? $o(e(t)) : t && $o(e), ta = ie(
  ([
    { listRefresh: e, totalCount: t, fixedItemSize: n, data: o },
    { atBottomState: r, isAtBottom: i },
    { scrollToIndex: s },
    { scrolledToInitialItem: l },
    { didMount: a, propsReady: c },
    { log: u },
    { scrollingInProgress: h },
    { context: d },
    { scrollIntoView: f }
  ]) => {
    const b = k(!1), y = oe();
    let x = null;
    function p(T) {
      J(s, {
        align: "end",
        behavior: T,
        index: "LAST"
      });
    }
    le(
      E(
        ye(E(G(t), ct(1)), a),
        ee(G(b), i, l, h),
        L(([[T, A], g, S, R, H]) => {
          let O = A && R, P = "auto";
          return O && (P = ea(g, S || H), O = O && P !== !1), { followOutputBehavior: P, shouldFollow: O, totalCount: T };
        }),
        Q(({ shouldFollow: T }) => T)
      ),
      ({ followOutputBehavior: T, totalCount: A }) => {
        x !== null && (x(), x = null), xe(n) !== void 0 ? requestAnimationFrame(() => {
          xe(u)("following output to ", { totalCount: A }, Ce.DEBUG), p(T);
        }) : x = Pe(e, () => {
          xe(u)("following output to ", { totalCount: A }, Ce.DEBUG), p(T), x = null;
        });
      }
    );
    function m(T) {
      const A = Pe(r, (g) => {
        T && !g.atBottom && g.notAtBottomBecause === "SIZE_INCREASED" && x === null && (xe(u)("scrolling to bottom due to increased size", {}, Ce.DEBUG), p("auto"));
      });
      setTimeout(A, 100);
    }
    le(
      E(
        ye(G(b), t, c),
        Q(([T, , A]) => T !== !1 && A),
        _e(
          ({ value: T }, [, A]) => ({ refreshed: T === A, value: A }),
          { refreshed: !1, value: 0 }
        ),
        Q(({ refreshed: T }) => T),
        ee(b, t)
      ),
      ([, T]) => {
        xe(l) && m(T !== !1);
      }
    ), le(y, () => {
      m(xe(b) !== !1);
    }), le(ye(G(b), r), ([T, A]) => {
      T !== !1 && !A.atBottom && A.notAtBottomBecause === "VIEWPORT_HEIGHT_DECREASING" && p("auto");
    });
    const w = k(null), I = oe();
    return B(
      Ln(
        E(
          G(o),
          L((T) => (T == null ? void 0 : T.length) ?? 0)
        ),
        E(G(t))
      ),
      I
    ), le(
      E(
        ye(E(I, ct(1)), a),
        ee(G(w), l, h, d),
        L(([[T, A], g, S, R, H]) => A && S && (g == null ? void 0 : g({ context: H, totalCount: T, scrollingInProgress: R }))),
        Q((T) => !!T),
        Qe(0)
      ),
      (T) => {
        x !== null && (x(), x = null), xe(n) !== void 0 ? requestAnimationFrame(() => {
          xe(u)("scrolling into view", {}), J(f, T);
        }) : x = Pe(e, () => {
          xe(u)("scrolling into view", {}), J(f, T), x = null;
        });
      }
    ), { autoscrollToBottom: y, followOutput: b, scrollIntoViewOnChange: w };
  },
  me(
    Ue,
    Ut,
    Wt,
    Vt,
    tt,
    et,
    Ae,
    Xr,
    Kr
  )
), na = ie(
  ([{ data: e, firstItemIndex: t, gap: n, sizes: o }, { initialTopMostItemIndex: r }, { initialItemCount: i, listState: s }, { didMount: l }]) => (B(
    E(
      l,
      ee(i),
      Q(([, a]) => a !== 0),
      ee(r, o, t, n, e),
      L(([[, a], c, u, h, d, f = []]) => Qr(a, c, u, h, d, f))
    ),
    s
  ), {}),
  me(Ue, Vt, ft, tt),
  { singleton: !0 }
), oa = ie(
  ([{ didMount: e }, { scrollTo: t }, { listState: n }]) => {
    const o = k(0);
    return le(
      E(
        e,
        ee(o),
        Q(([, r]) => r !== 0),
        L(([, r]) => ({ top: r }))
      ),
      (r) => {
        Pe(
          E(
            n,
            ct(1),
            Q((i) => i.items.length > 1)
          ),
          () => {
            requestAnimationFrame(() => {
              J(t, r);
            });
          }
        );
      }
    ), {
      initialScrollTop: o
    };
  },
  me(tt, Ae, ft),
  { singleton: !0 }
), Zr = ie(
  ([{ scrollVelocity: e }]) => {
    const t = k(!1), n = oe(), o = k(!1);
    return B(
      E(
        e,
        ee(o, t, n),
        Q(([r, i]) => i !== !1 && i !== void 0),
        L(([r, i, s, l]) => {
          const { enter: a, exit: c } = i;
          if (s) {
            if (c(r, l))
              return !1;
          } else if (a(r, l))
            return !0;
          return s;
        }),
        pe()
      ),
      t
    ), le(
      E(ye(t, e, n), ee(o)),
      ([[r, i, s], l]) => {
        r && l !== !1 && l !== void 0 && l.change && l.change(i, s);
      }
    ), { isSeeking: t, scrollSeekConfiguration: o, scrollSeekRangeChanged: n, scrollVelocity: e };
  },
  me(Ut),
  { singleton: !0 }
), oo = ie(([{ scrollContainerState: e, scrollTo: t }]) => {
  const n = oe(), o = oe(), r = oe(), i = k(!1), s = k(void 0);
  return B(
    E(
      ye(n, o),
      L(([{ scrollTop: l, viewportHeight: a }, { offsetTop: c, listHeight: u }]) => ({
        scrollHeight: u,
        scrollTop: Math.max(0, l - c),
        viewportHeight: a
      }))
    ),
    e
  ), B(
    E(
      t,
      ee(o),
      L(([l, { offsetTop: a }]) => ({
        ...l,
        top: l.top + a
      }))
    ),
    r
  ), {
    customScrollParent: s,
    // config
    useWindowScroll: i,
    // input
    windowScrollContainerState: n,
    // signals
    windowScrollTo: r,
    windowViewportRect: o
  };
}, me(Ae)), ra = ie(
  ([
    { sizeRanges: e, sizes: t },
    { headerHeight: n, scrollTop: o },
    { initialTopMostItemIndex: r },
    { didMount: i },
    { useWindowScroll: s, windowScrollContainerState: l, windowViewportRect: a }
  ]) => {
    const c = oe(), u = k(void 0), h = k(null), d = k(null);
    return B(l, h), B(a, d), le(
      E(
        c,
        ee(t, o, s, h, d, n)
      ),
      ([f, b, y, x, p, m, w]) => {
        const I = _l(b.sizeTree);
        x && p !== null && m !== null && (y = p.scrollTop - m.offsetTop), y -= w, f({ ranges: I, scrollTop: y });
      }
    ), B(E(u, Q(Xn), L(ia)), r), B(
      E(
        i,
        ee(u),
        Q(([, f]) => f !== void 0),
        pe(),
        L(([, f]) => f.ranges)
      ),
      e
    ), {
      getState: c,
      restoreStateFrom: u
    };
  },
  me(Ue, Ae, Vt, tt, oo)
);
function ia(e) {
  return { align: "start", index: 0, offset: e.scrollTop };
}
const sa = ie(([{ topItemsIndexes: e }]) => {
  const t = k(0);
  return B(
    E(
      t,
      Q((n) => n >= 0),
      L((n) => Array.from({ length: n }).map((o, r) => r))
    ),
    e
  ), { topItemCount: t };
}, me(ft));
function Jr(e) {
  let t = !1, n;
  return () => (t || (t = !0, n = e()), n);
}
const la = Jr(() => /iP(ad|od|hone)/i.test(navigator.userAgent) && /WebKit/i.test(navigator.userAgent)), aa = ie(
  ([
    { deviation: e, scrollBy: t, scrollingInProgress: n, scrollTop: o },
    { isAtBottom: r, isScrolling: i, lastJumpDueToItemResize: s, scrollDirection: l },
    { listState: a },
    { beforeUnshiftWith: c, gap: u, shiftWithOffset: h, sizes: d },
    { log: f },
    { recalcInProgress: b }
  ]) => {
    const y = Me(
      E(
        a,
        ee(s),
        _e(
          ([, p, m, w], [{ bottom: I, items: T, offsetBottom: A, totalCount: g }, S]) => {
            const R = I + A;
            let H = 0;
            return m === g && p.length > 0 && T.length > 0 && (T[0].originalIndex === 0 && p[0].originalIndex === 0 || (H = R - w, H !== 0 && (H += S))), [H, T, g, R];
          },
          [0, [], 0, 0]
        ),
        Q(([p]) => p !== 0),
        ee(o, l, n, r, f, b),
        Q(([, p, m, w, , , I]) => !I && !w && p !== 0 && m === Lt),
        L(([[p], , , , , m]) => (m("Upward scrolling compensation", { amount: p }, Ce.DEBUG), p))
      )
    );
    function x(p) {
      p > 0 ? (J(t, { behavior: "auto", top: -p }), J(e, 0)) : (J(e, 0), J(t, { behavior: "auto", top: -p }));
    }
    return le(E(y, ee(e, i)), ([p, m, w]) => {
      w && la() ? J(e, m - p) : x(-p);
    }), le(
      E(
        ye(Ee(i, !1), e, b),
        Q(([p, m, w]) => !p && !w && m !== 0),
        L(([p, m]) => m),
        Qe(1)
      ),
      x
    ), B(
      E(
        h,
        L((p) => ({ top: -p }))
      ),
      t
    ), le(
      E(
        c,
        ee(d, u),
        L(([p, { groupIndices: m, lastSize: w, sizeTree: I }, T]) => {
          function A(O) {
            return O * (w + T);
          }
          if (m.length === 0)
            return A(p);
          let g = 0;
          const S = Dt(I, 0);
          let R = 0, H = 0;
          for (; R < p; ) {
            R++, g += S;
            let O = m.length === H + 1 ? 1 / 0 : m[H + 1] - m[H] - 1;
            R + O > p && (g -= S, O = p - R + 1), R += O, g += A(O), H++;
          }
          return g;
        })
      ),
      (p) => {
        J(e, p), requestAnimationFrame(() => {
          J(t, { top: p }), requestAnimationFrame(() => {
            J(e, 0), J(b, !1);
          });
        });
      }
    ), { deviation: e };
  },
  me(Ae, Ut, ft, Ue, et, Jn)
), ca = ie(
  ([
    e,
    t,
    n,
    o,
    r,
    i,
    s,
    l,
    a,
    c,
    u
  ]) => ({
    ...e,
    ...t,
    ...n,
    ...o,
    ...r,
    ...i,
    ...s,
    ...l,
    ...a,
    ...c,
    ...u
  }),
  me(
    no,
    na,
    tt,
    Zr,
    Yr,
    oa,
    Jl,
    oo,
    Kr,
    et,
    Xr
  )
), qr = ie(
  ([
    {
      data: e,
      defaultItemSize: t,
      firstItemIndex: n,
      fixedItemSize: o,
      fixedGroupSize: r,
      gap: i,
      groupIndices: s,
      heightEstimates: l,
      itemSize: a,
      sizeRanges: c,
      sizes: u,
      statefulTotalCount: h,
      totalCount: d,
      trackItemSizes: f
    },
    { initialItemFinalLocationReached: b, initialTopMostItemIndex: y, scrolledToInitialItem: x },
    p,
    m,
    w,
    I,
    { scrollToIndex: T },
    A,
    { topItemCount: g },
    { groupCounts: S },
    R
  ]) => {
    const { listState: H, minOverscanItemCount: O, topItemsIndexes: P, rangeChanged: N, ...z } = I;
    return B(N, R.scrollSeekRangeChanged), B(
      E(
        R.windowViewportRect,
        L(($) => $.visibleHeight)
      ),
      p.viewportHeight
    ), {
      data: e,
      defaultItemHeight: t,
      firstItemIndex: n,
      fixedItemHeight: o,
      fixedGroupHeight: r,
      gap: i,
      groupCounts: S,
      heightEstimates: l,
      initialItemFinalLocationReached: b,
      initialTopMostItemIndex: y,
      scrolledToInitialItem: x,
      sizeRanges: c,
      topItemCount: g,
      topItemsIndexes: P,
      // input
      totalCount: d,
      ...w,
      groupIndices: s,
      itemSize: a,
      listState: H,
      minOverscanItemCount: O,
      scrollToIndex: T,
      // output
      statefulTotalCount: h,
      trackItemSizes: f,
      // exported from stateFlagsSystem
      rangeChanged: N,
      ...z,
      // the bag of IO from featureGroup1System
      ...R,
      ...p,
      sizes: u,
      ...m
    };
  },
  me(
    Ue,
    Vt,
    Ae,
    ra,
    ta,
    ft,
    Wt,
    aa,
    sa,
    Ur,
    ca
  )
);
function ua(e, t) {
  const n = {}, o = {};
  let r = 0;
  const i = e.length;
  for (; r < i; )
    o[e[r]] = 1, r += 1;
  for (const s in t)
    Object.hasOwn(o, s) || (n[s] = t[s]);
  return n;
}
const Qt = typeof document < "u" ? j.useLayoutEffect : j.useEffect;
function ei(e, t, n) {
  const o = Object.keys(t.required || {}), r = Object.keys(t.optional || {}), i = Object.keys(t.methods || {}), s = Object.keys(t.events || {}), l = j.createContext({});
  function a(x, p) {
    x.propsReady !== void 0 && J(x.propsReady, !1);
    for (const m of o) {
      const w = x[t.required[m]];
      J(w, p[m]);
    }
    for (const m of r)
      if (m in p) {
        const w = x[t.optional[m]];
        J(w, p[m]);
      }
    x.propsReady !== void 0 && J(x.propsReady, !0);
  }
  function c(x) {
    return i.reduce((p, m) => (p[m] = (w) => {
      const I = x[t.methods[m]];
      J(I, w);
    }, p), {});
  }
  function u(x) {
    return s.reduce((p, m) => (p[m] = Tl(x[t.events[m]]), p), {});
  }
  const h = j.forwardRef(function(x, p) {
    const { children: m, ...w } = x, [I] = j.useState(() => gn(El(e), (g) => {
      a(g, w);
    })), [T] = j.useState(Mo(u, I));
    Qt(() => {
      for (const g of s)
        g in w && le(T[g], w[g]);
      return () => {
        Object.values(T).map(Kn);
      };
    }, [w, T, I]), Qt(() => {
      a(I, w);
    }), j.useImperativeHandle(p, Do(c(I)));
    const A = n;
    return /* @__PURE__ */ M.jsx(l.Provider, { value: I, children: n !== void 0 ? /* @__PURE__ */ M.jsx(A, { ...ua([...o, ...r, ...s], w), children: m }) : m });
  }), d = (x) => {
    const p = j.useContext(l);
    return j.useCallback(
      (m) => {
        J(p[x], m);
      },
      [p, x]
    );
  }, f = (x) => {
    const p = j.useContext(l)[x], m = j.useCallback(
      (w) => le(p, w),
      [p]
    );
    return j.useSyncExternalStore(
      m,
      () => xe(p),
      () => xe(p)
    );
  }, b = (x) => {
    const p = j.useContext(l)[x], [m, w] = j.useState(Mo(xe, p));
    return Qt(
      () => le(p, (I) => {
        I !== m && w(Do(I));
      }),
      [p, m]
    ), m;
  }, y = parseInt(j.version) >= 18 ? f : b;
  return {
    Component: h,
    useEmitter: (x, p) => {
      const m = j.useContext(l)[x];
      Qt(() => le(m, p), [p, m]);
    },
    useEmitterValue: y,
    usePublisher: d
  };
}
const ti = j.createContext(void 0), ni = j.createContext(void 0), Tn = "-webkit-sticky", Go = "sticky", ro = Jr(() => {
  if (typeof document > "u")
    return Go;
  const e = document.createElement("div");
  return e.style.position = Tn, e.style.position === Tn ? Tn : Go;
}), oi = typeof document < "u" ? j.useLayoutEffect : j.useEffect;
function Rn(e) {
  return "self" in e;
}
function fa(e) {
  return "body" in e;
}
function ri(e, t, n, o = yt, r, i) {
  const s = j.useRef(null), l = j.useRef(null), a = j.useRef(null), c = j.useCallback(
    (d) => {
      let f, b, y;
      const x = d.target;
      if (fa(x) || Rn(x)) {
        const m = Rn(x) ? x : x.defaultView;
        y = i === !0 ? it(m, m.scrollX) : m.scrollY, f = i === !0 ? m.document.documentElement.scrollWidth : m.document.documentElement.scrollHeight, b = i === !0 ? m.innerWidth : m.innerHeight;
      } else
        y = i === !0 ? it(x, x.scrollLeft) : x.scrollTop, f = i === !0 ? x.scrollWidth : x.scrollHeight, b = i === !0 ? x.offsetWidth : x.offsetHeight;
      const p = () => {
        e({
          scrollHeight: f,
          scrollTop: Math.max(y, 0),
          viewportHeight: b
        });
      };
      d.suppressFlushSync === !0 ? p() : Hi.flushSync(p), l.current !== null && (y === l.current || y <= 0 || y === f - b) && (l.current = null, t(!0), a.current && (clearTimeout(a.current), a.current = null));
    },
    [e, t, i]
  );
  j.useEffect(() => {
    const d = r || s.current;
    return Lo(d), o(r || s.current), c({ suppressFlushSync: !0, target: d }), d.addEventListener("scroll", c, { passive: !0 }), () => {
      Lo(d), o(null), d.removeEventListener("scroll", c);
    };
  }, [s, c, n, o, r]);
  function u(d) {
    const f = s.current;
    if (!f || (i === !0 ? "offsetWidth" in f && f.offsetWidth === 0 : "offsetHeight" in f && f.offsetHeight === 0))
      return;
    const b = d.behavior === "smooth";
    let y, x, p;
    Rn(f) ? (x = Math.max(
      Je(f.document.documentElement, i === !0 ? "width" : "height"),
      i === !0 ? f.document.documentElement.scrollWidth : f.document.documentElement.scrollHeight
    ), y = i === !0 ? f.innerWidth : f.innerHeight, p = i === !0 ? it(f, f.scrollX) : f.scrollY) : (x = f[i === !0 ? "scrollWidth" : "scrollHeight"], y = Je(f, i === !0 ? "width" : "height"), p = i === !0 ? it(f, f.scrollLeft) : f.scrollTop);
    const m = x - y;
    if (d.top === void 0) {
      f.scrollTo(d);
      return;
    }
    const w = Math.ceil(Math.max(Math.min(m, d.top), 0));
    if (d.top = w, Gr(y, x) || w === p) {
      e({ scrollHeight: x, scrollTop: p, viewportHeight: y }), b && t(!0);
      return;
    }
    b ? (l.current = w, a.current && clearTimeout(a.current), a.current = setTimeout(() => {
      a.current = null, l.current = null, t(!0);
    }, 1e3)) : l.current = null, i === !0 && (d = {
      ...d.behavior !== void 0 ? { behavior: d.behavior } : {},
      left: No(f, w)
    }), f.scrollTo(d);
  }
  function h(d) {
    i === !0 && (d = {
      ...d.behavior !== void 0 ? { behavior: d.behavior } : {},
      ...d.top !== void 0 ? { left: No(s.current, d.top) } : {}
    }), s.current.scrollBy(d);
  }
  return { scrollByCallback: h, scrollerRef: s, scrollToCallback: u };
}
function io(e) {
  return e;
}
const da = /* @__PURE__ */ ie(() => {
  const e = k((l) => `Item ${l}`), t = k((l) => `Group ${l}`), n = k({}), o = k(io), r = k("div"), i = k(yt), s = (l, a = null) => Ee(
    E(
      n,
      L((c) => c[l]),
      pe()
    ),
    a
  );
  return {
    components: n,
    computeItemKey: o,
    EmptyPlaceholder: s("EmptyPlaceholder"),
    FooterComponent: s("Footer"),
    GroupComponent: s("Group", "div"),
    groupContent: t,
    HeaderComponent: s("Header"),
    HeaderFooterTag: r,
    ItemComponent: s("Item", "div"),
    itemContent: e,
    ListComponent: s("List", "div"),
    ScrollerComponent: s("Scroller", "div"),
    scrollerRef: i,
    ScrollSeekPlaceholder: s("ScrollSeekPlaceholder"),
    TopItemListComponent: s("TopItemList")
  };
}), ha = /* @__PURE__ */ ie(
  ([e, t]) => ({ ...e, ...t }),
  me(qr, da)
), pa = ({ height: e }) => /* @__PURE__ */ M.jsx("div", { style: { height: e } }), ma = { overflowAnchor: "none", position: ro(), zIndex: 1 }, ii = { overflowAnchor: "none" }, ga = { ...ii, display: "inline-block", height: "100%" }, Qo = /* @__PURE__ */ j.memo(function({ showTopList: e = !1 }) {
  const t = Z("listState"), n = ze("sizeRanges"), o = Z("useWindowScroll"), r = Z("customScrollParent"), i = ze("windowScrollContainerState"), s = ze("scrollContainerState"), l = r || o ? i : s, a = Z("itemContent"), c = Z("context"), u = Z("groupContent"), h = Z("trackItemSizes"), d = Z("itemSize"), f = Z("log"), b = ze("gap"), y = Z("horizontalDirection"), { callbackRef: x } = Hl(
    n,
    d,
    h,
    e ? yt : l,
    f,
    b,
    r,
    y,
    Z("skipAnimationFrameInResizeObserver")
  ), [p, m] = j.useState(0);
  lo("deviation", (z) => {
    p !== z && m(z);
  });
  const w = Z("EmptyPlaceholder"), I = Z("ScrollSeekPlaceholder") ?? pa, T = Z("ListComponent"), A = Z("ItemComponent"), g = Z("GroupComponent"), S = Z("computeItemKey"), R = Z("isSeeking"), H = Z("groupIndices").length > 0, O = Z("alignToBottom"), P = Z("initialItemFinalLocationReached"), N = e ? {} : {
    boxSizing: "border-box",
    ...y ? {
      display: "inline-block",
      height: "100%",
      marginInlineStart: p !== 0 ? p : O ? "auto" : 0,
      paddingInlineEnd: t.offsetBottom,
      paddingInlineStart: t.offsetTop,
      whiteSpace: "nowrap"
    } : {
      marginTop: p !== 0 ? p : O ? "auto" : 0,
      paddingBottom: t.offsetBottom,
      paddingTop: t.offsetTop
    },
    ...P ? {} : { visibility: "hidden" }
  };
  return !e && t.totalCount === 0 && w !== null && w !== void 0 ? /* @__PURE__ */ M.jsx(w, { ...Te(w, c) }) : /* @__PURE__ */ M.jsx(
    T,
    {
      ...Te(T, c),
      "data-testid": e ? "virtuoso-top-item-list" : "virtuoso-item-list",
      ref: x,
      style: N,
      children: (e ? t.topItems : t.items).map((z) => {
        const $ = z.originalIndex, V = S($ + t.firstItemIndex, z.data, c);
        return R ? /* @__PURE__ */ Xt(
          I,
          {
            ...Te(I, c),
            height: z.size,
            index: z.index,
            key: V,
            type: z.type || "item",
            ...z.type === "group" ? {} : { groupIndex: z.groupIndex }
          }
        ) : z.type === "group" ? /* @__PURE__ */ Xt(
          g,
          {
            ...Te(g, c),
            "data-index": $,
            "data-item-index": z.index,
            "data-known-size": z.size,
            key: V,
            style: ma
          },
          u(z.index, c)
        ) : /* @__PURE__ */ Xt(
          A,
          {
            ...Te(A, c),
            ...ba(A, z.data),
            "data-index": $,
            "data-item-group-index": z.groupIndex,
            "data-item-index": z.index,
            "data-known-size": z.size,
            key: V,
            style: y ? ga : ii
          },
          H ? a(z.index, z.groupIndex, z.data, c) : a(z.index, z.data, c)
        );
      })
    }
  );
}), va = {
  height: "100%",
  outline: "none",
  overflowY: "auto",
  position: "relative",
  WebkitOverflowScrolling: "touch"
}, xa = {
  outline: "none",
  overflowX: "auto",
  position: "relative"
}, so = (e) => ({
  height: "100%",
  position: "absolute",
  top: 0,
  width: "100%",
  ...e ? { display: "flex", flexDirection: "column" } : void 0
}), si = (e, t, n = 0) => ({
  ...so(e),
  position: t ? "relative" : "absolute",
  top: t ? -n : 0
}), wa = {
  position: ro(),
  top: 0,
  width: "100%",
  zIndex: 1
};
function Te(e, t) {
  if (typeof e != "string")
    return { context: t };
}
function ba(e, t) {
  return { item: typeof e == "string" ? void 0 : t };
}
const ya = /* @__PURE__ */ j.memo(function() {
  const e = Z("HeaderComponent"), t = ze("headerHeight"), n = Z("HeaderFooterTag"), o = ut(
    j.useMemo(
      () => (i) => {
        t(Je(i, "height"));
      },
      [t]
    ),
    !0,
    Z("skipAnimationFrameInResizeObserver")
  ), r = Z("context");
  return e != null ? /* @__PURE__ */ M.jsx(n, { ref: o, children: /* @__PURE__ */ M.jsx(e, { ...Te(e, r) }) }) : null;
}), Sa = /* @__PURE__ */ j.memo(function() {
  const e = Z("FooterComponent"), t = ze("footerHeight"), n = Z("HeaderFooterTag"), o = ut(
    j.useMemo(
      () => (i) => {
        t(Je(i, "height"));
      },
      [t]
    ),
    !0,
    Z("skipAnimationFrameInResizeObserver")
  ), r = Z("context");
  return e != null ? /* @__PURE__ */ M.jsx(n, { ref: o, children: /* @__PURE__ */ M.jsx(e, { ...Te(e, r) }) }) : null;
});
function li({ useEmitter: e, useEmitterValue: t, usePublisher: n }) {
  return j.memo(function({ children: o, style: r, context: i, ...s }) {
    const l = n("scrollContainerState"), a = t("ScrollerComponent"), c = n("smoothScrollTargetReached"), u = t("scrollerRef"), h = t("horizontalDirection") || !1, { scrollByCallback: d, scrollerRef: f, scrollToCallback: b } = ri(
      l,
      c,
      a,
      u,
      void 0,
      h
    );
    return e("scrollTo", b), e("scrollBy", d), /* @__PURE__ */ M.jsx(
      a,
      {
        "data-testid": "virtuoso-scroller",
        "data-virtuoso-scroller": !0,
        ref: f,
        style: { ...h ? xa : va, ...r },
        tabIndex: 0,
        ...s,
        ...Te(a, i),
        children: o
      }
    );
  });
}
function ai({ useEmitter: e, useEmitterValue: t, usePublisher: n }) {
  return j.memo(function({ children: o, style: r, context: i, ...s }) {
    const l = n("windowScrollContainerState"), a = t("ScrollerComponent"), c = n("smoothScrollTargetReached"), u = t("totalListHeight"), h = t("deviation"), d = t("customScrollParent"), f = j.useRef(null), b = t("scrollerRef"), { scrollByCallback: y, scrollerRef: x, scrollToCallback: p } = ri(
      l,
      c,
      a,
      b,
      d
    );
    return oi(() => {
      var m;
      return x.current = d || ((m = f.current) == null ? void 0 : m.ownerDocument.defaultView), () => {
        x.current = null;
      };
    }, [x, d]), e("windowScrollTo", p), e("scrollBy", y), /* @__PURE__ */ M.jsx(
      a,
      {
        ref: f,
        "data-virtuoso-scroller": !0,
        style: { position: "relative", ...r, ...u !== 0 ? { height: u + h } : void 0 },
        ...s,
        ...Te(a, i),
        children: o
      }
    );
  });
}
const Ia = ({ children: e }) => {
  const t = j.useContext(ti), n = ze("viewportHeight"), o = ze("fixedItemHeight"), r = Z("alignToBottom"), i = Z("horizontalDirection"), s = j.useMemo(
    () => kr(n, (a) => Je(a, i ? "width" : "height")),
    [n, i]
  ), l = ut(s, !0, Z("skipAnimationFrameInResizeObserver"));
  return j.useEffect(() => {
    t && (n(t.viewportHeight), o(t.itemHeight));
  }, [t, n, o]), /* @__PURE__ */ M.jsx("div", { "data-viewport-type": "element", ref: l, style: so(r), children: e });
}, Ca = ({ children: e }) => {
  const t = j.useContext(ti), n = ze("windowViewportRect"), o = ze("fixedItemHeight"), r = Z("customScrollParent"), i = Z("useWindowScroll"), s = Z("topListHeight"), l = zr(
    n,
    r,
    Z("skipAnimationFrameInResizeObserver")
  ), a = Z("alignToBottom");
  return j.useEffect(() => {
    t && (o(t.itemHeight), n({ listHeight: 0, offsetTop: 0, visibleHeight: t.viewportHeight, visibleWidth: 100 }));
  }, [t, n, o]), /* @__PURE__ */ M.jsx("div", { "data-viewport-type": "window", ref: l, style: si(a, i, s), children: e });
}, Ta = ({ children: e }) => {
  const t = Z("TopItemListComponent") ?? "div", n = Z("headerHeight"), o = { ...wa, marginTop: `${n}px` }, r = Z("context");
  return /* @__PURE__ */ M.jsx(t, { style: o, ...Te(t, r), children: e });
}, Ra = /* @__PURE__ */ j.memo(function(e) {
  const t = Z("useWindowScroll"), n = Z("topItemsIndexes").length > 0, o = Z("customScrollParent"), r = Z("context");
  return /* @__PURE__ */ M.jsxs(o || t ? Oa : Ea, { ...e, context: r, children: [
    n && /* @__PURE__ */ M.jsx(Ta, { children: /* @__PURE__ */ M.jsx(Qo, { showTopList: !0 }) }),
    /* @__PURE__ */ M.jsxs(o || t ? Ca : Ia, { children: [
      /* @__PURE__ */ M.jsx(ya, {}),
      /* @__PURE__ */ M.jsx(Qo, {}),
      /* @__PURE__ */ M.jsx(Sa, {})
    ] })
  ] });
}), {
  Component: ci,
  useEmitter: lo,
  useEmitterValue: Z,
  usePublisher: ze
} = /* @__PURE__ */ ei(
  ha,
  {
    optional: {
      restoreStateFrom: "restoreStateFrom",
      context: "context",
      followOutput: "followOutput",
      scrollIntoViewOnChange: "scrollIntoViewOnChange",
      itemContent: "itemContent",
      groupContent: "groupContent",
      overscan: "overscan",
      increaseViewportBy: "increaseViewportBy",
      minOverscanItemCount: "minOverscanItemCount",
      totalCount: "totalCount",
      groupCounts: "groupCounts",
      topItemCount: "topItemCount",
      firstItemIndex: "firstItemIndex",
      initialTopMostItemIndex: "initialTopMostItemIndex",
      components: "components",
      atBottomThreshold: "atBottomThreshold",
      atTopThreshold: "atTopThreshold",
      computeItemKey: "computeItemKey",
      defaultItemHeight: "defaultItemHeight",
      fixedGroupHeight: "fixedGroupHeight",
      // Must be set above 'fixedItemHeight'
      fixedItemHeight: "fixedItemHeight",
      heightEstimates: "heightEstimates",
      itemSize: "itemSize",
      scrollSeekConfiguration: "scrollSeekConfiguration",
      headerFooterTag: "HeaderFooterTag",
      data: "data",
      initialItemCount: "initialItemCount",
      initialScrollTop: "initialScrollTop",
      alignToBottom: "alignToBottom",
      useWindowScroll: "useWindowScroll",
      customScrollParent: "customScrollParent",
      scrollerRef: "scrollerRef",
      logLevel: "logLevel",
      horizontalDirection: "horizontalDirection",
      skipAnimationFrameInResizeObserver: "skipAnimationFrameInResizeObserver"
    },
    methods: {
      scrollToIndex: "scrollToIndex",
      scrollIntoView: "scrollIntoView",
      scrollTo: "scrollTo",
      scrollBy: "scrollBy",
      autoscrollToBottom: "autoscrollToBottom",
      getState: "getState"
    },
    events: {
      isScrolling: "isScrolling",
      endReached: "endReached",
      startReached: "startReached",
      rangeChanged: "rangeChanged",
      atBottomStateChange: "atBottomStateChange",
      atTopStateChange: "atTopStateChange",
      totalListHeightChanged: "totalListHeightChanged",
      itemsRendered: "itemsRendered",
      groupIndices: "groupIndices"
    }
  },
  Ra
), Ea = /* @__PURE__ */ li({ useEmitter: lo, useEmitterValue: Z, usePublisher: ze }), Oa = /* @__PURE__ */ ai({ useEmitter: lo, useEmitterValue: Z, usePublisher: ze }), ui = ci, fi = ci, Aa = /* @__PURE__ */ ie(() => {
  const e = k((c) => /* @__PURE__ */ M.jsxs("td", { children: [
    "Item $",
    c
  ] })), t = k(null), n = k((c) => /* @__PURE__ */ M.jsxs("td", { colSpan: 1e3, children: [
    "Group ",
    c
  ] })), o = k(null), r = k(null), i = k({}), s = k(io), l = k(yt), a = (c, u = null) => Ee(
    E(
      i,
      L((h) => h[c]),
      pe()
    ),
    u
  );
  return {
    components: i,
    computeItemKey: s,
    context: t,
    EmptyPlaceholder: a("EmptyPlaceholder"),
    FillerRow: a("FillerRow"),
    fixedFooterContent: r,
    fixedHeaderContent: o,
    itemContent: e,
    groupContent: n,
    ScrollerComponent: a("Scroller", "div"),
    scrollerRef: l,
    ScrollSeekPlaceholder: a("ScrollSeekPlaceholder"),
    TableBodyComponent: a("TableBody", "tbody"),
    TableComponent: a("Table", "table"),
    TableFooterComponent: a("TableFoot", "tfoot"),
    TableHeadComponent: a("TableHead", "thead"),
    TableRowComponent: a("TableRow", "tr"),
    GroupComponent: a("Group", "tr")
  };
});
me(qr, Aa);
ro();
const Yo = {
  bottom: 0,
  itemHeight: 0,
  items: [],
  itemWidth: 0,
  offsetBottom: 0,
  offsetTop: 0,
  top: 0
}, ka = {
  bottom: 0,
  itemHeight: 0,
  items: [{ index: 0 }],
  itemWidth: 0,
  offsetBottom: 0,
  offsetTop: 0,
  top: 0
}, { ceil: Xo, floor: ln, max: Ot, min: En, round: Ko } = Math;
function Zo(e, t, n) {
  return Array.from({ length: t - e + 1 }).map((o, r) => ({ data: n === null ? null : n[r + e], index: r + e }));
}
function Ha(e) {
  return {
    ...ka,
    items: e
  };
}
function Yt(e, t) {
  return e !== void 0 && e.width === t.width && e.height === t.height;
}
function Da(e, t) {
  return e !== void 0 && e.column === t.column && e.row === t.row;
}
const Ma = /* @__PURE__ */ ie(
  ([
    { increaseViewportBy: e, listBoundary: t, overscan: n, visibleRange: o },
    { footerHeight: r, headerHeight: i, scrollBy: s, scrollContainerState: l, scrollTo: a, scrollTop: c, smoothScrollTargetReached: u, viewportHeight: h },
    d,
    f,
    { didMount: b, propsReady: y },
    { customScrollParent: x, useWindowScroll: p, windowScrollContainerState: m, windowScrollTo: w, windowViewportRect: I },
    T
  ]) => {
    const A = k(0), g = k(0), S = k(Yo), R = k({ height: 0, width: 0 }), H = k({ height: 0, width: 0 }), O = oe(), P = oe(), N = k(0), z = k(null), $ = k({ column: 0, row: 0 }), V = oe(), U = oe(), F = k(!1), q = k(0), ne = k(!0), v = k(!1), W = k(!1);
    le(
      E(
        b,
        ee(q),
        Q(([D, C]) => C !== 0)
      ),
      () => {
        J(ne, !1);
      }
    ), le(
      E(
        ye(b, ne, H, R, q, v),
        Q(([D, C, te, se, , ue]) => D && !C && te.height !== 0 && se.height !== 0 && !ue)
      ),
      ([, , , , D]) => {
        J(v, !0), eo(1, () => {
          J(O, D);
        }), Pe(E(c), () => {
          J(t, [0, 0]), J(ne, !0);
        });
      }
    ), B(
      E(
        U,
        Q((D) => D != null && D.scrollTop > 0),
        Fe(0)
      ),
      g
    ), le(
      E(
        b,
        ee(U),
        Q(([, D]) => D != null)
      ),
      ([, D]) => {
        D && (J(R, D.viewport), J(H, D.item), J($, D.gap), D.scrollTop > 0 && (J(F, !0), Pe(E(c, ct(1)), (C) => {
          J(F, !1);
        }), J(a, { top: D.scrollTop })));
      }
    ), B(
      E(
        R,
        L(({ height: D }) => D)
      ),
      h
    ), B(
      E(
        ye(
          G(R, Yt),
          G(H, Yt),
          G($, (D, C) => D !== void 0 && D.column === C.column && D.row === C.row),
          G(c)
        ),
        L(([D, C, te, se]) => ({
          gap: te,
          item: C,
          scrollTop: se,
          viewport: D
        }))
      ),
      V
    ), B(
      E(
        ye(
          G(A),
          o,
          G($, Da),
          G(H, Yt),
          G(R, Yt),
          G(z),
          G(g),
          G(F),
          G(ne),
          G(q)
        ),
        Q(([, , , , , , , D]) => !D),
        L(
          ([
            D,
            [C, te],
            se,
            ue,
            be,
            ge,
            ae,
            ,
            K,
            ve
          ]) => {
            const { column: fe, row: Ne } = se, { height: Xe, width: St } = ue, { width: $t } = be;
            if (ae === 0 && (D === 0 || $t === 0))
              return Yo;
            if (St === 0) {
              const po = to(ve, D), Oi = po + Math.max(ae - 1, 0);
              return Ha(Zo(po, Oi, ge));
            }
            const dt = di($t, St, fe);
            let ht, nt;
            K ? C === 0 && te === 0 && ae > 0 ? (ht = 0, nt = ae - 1) : (ht = dt * ln((C + Ne) / (Xe + Ne)), nt = dt * Xo((te + Ne) / (Xe + Ne)) - 1, nt = En(D - 1, Ot(nt, dt - 1)), ht = En(nt, Ot(0, ht))) : (ht = 0, nt = -1);
            const co = Zo(ht, nt, ge), { bottom: uo, top: fo } = Jo(be, se, ue, co), ho = Xo(D / dt), Ei = ho * Xe + (ho - 1) * Ne - uo;
            return { bottom: uo, itemHeight: Xe, items: co, itemWidth: St, offsetBottom: Ei, offsetTop: fo, top: fo };
          }
        )
      ),
      S
    ), B(
      E(
        z,
        Q((D) => D !== null),
        L((D) => D.length)
      ),
      A
    ), B(
      E(
        ye(R, H, S, $),
        Q(([D, C, { items: te }]) => te.length > 0 && C.height !== 0 && D.height !== 0),
        L(([D, C, { items: te }, se]) => {
          const { bottom: ue, top: be } = Jo(D, se, C, te);
          return [be, ue];
        }),
        pe(Mt)
      ),
      t
    );
    const Y = k(!1);
    B(
      E(
        c,
        ee(Y),
        L(([D, C]) => C || D !== 0)
      ),
      Y
    );
    const X = Me(
      E(
        ye(S, A),
        Q(([{ items: D }]) => D.length > 0),
        ee(Y),
        Q(([[D, C], te]) => {
          const se = D.items[D.items.length - 1].index === C - 1;
          return (te || D.bottom > 0 && D.itemHeight > 0 && D.offsetBottom === 0 && D.items.length === C) && se;
        }),
        L(([[, D]]) => D - 1),
        pe()
      )
    ), we = Me(
      E(
        G(S),
        Q(({ items: D }) => D.length > 0 && D[0].index === 0),
        Fe(0),
        pe()
      )
    ), de = Me(
      E(
        G(S),
        ee(F),
        Q(([{ items: D }, C]) => D.length > 0 && !C),
        L(([{ items: D }]) => ({
          endIndex: D[D.length - 1].index,
          startIndex: D[0].index
        })),
        pe(Fr),
        Qe(0)
      )
    );
    B(de, f.scrollSeekRangeChanged), B(
      E(
        O,
        ee(R, H, A, $),
        L(([D, C, te, se, ue]) => {
          const be = $r(D), { align: ge, behavior: ae, offset: K } = be;
          let ve = be.index;
          ve === "LAST" && (ve = se - 1), ve = Ot(0, ve, En(se - 1, ve));
          let fe = _n(C, ue, te, ve);
          return ge === "end" ? fe = Ko(fe - C.height + te.height) : ge === "center" && (fe = Ko(fe - C.height / 2 + te.height / 2)), K !== void 0 && K !== 0 && (fe += K), { behavior: ae, top: fe };
        })
      ),
      a
    );
    const re = Ee(
      E(
        S,
        L((D) => D.offsetBottom + D.bottom)
      ),
      0
    );
    return B(
      E(
        I,
        L((D) => ({ height: D.visibleHeight, width: D.visibleWidth }))
      ),
      R
    ), {
      customScrollParent: x,
      // input
      data: z,
      deviation: N,
      footerHeight: r,
      gap: $,
      headerHeight: i,
      increaseViewportBy: e,
      initialItemCount: g,
      itemDimensions: H,
      overscan: n,
      restoreStateFrom: U,
      scrollBy: s,
      scrollContainerState: l,
      scrollHeight: P,
      scrollTo: a,
      scrollToIndex: O,
      scrollTop: c,
      smoothScrollTargetReached: u,
      totalCount: A,
      useWindowScroll: p,
      viewportDimensions: R,
      windowScrollContainerState: m,
      windowScrollTo: w,
      windowViewportRect: I,
      ...f,
      // output
      gridState: S,
      horizontalDirection: W,
      initialTopMostItemIndex: q,
      totalListHeight: re,
      ...d,
      endReached: X,
      propsReady: y,
      rangeChanged: de,
      startReached: we,
      stateChanged: V,
      stateRestoreInProgress: F,
      ...T
    };
  },
  me(no, Ae, Ut, Zr, tt, oo, et)
);
function di(e, t, n) {
  return Ot(1, ln((e + n) / (ln(t) + n)));
}
function Jo(e, t, n, o) {
  const { height: r } = n;
  if (r === void 0 || o.length === 0)
    return { bottom: 0, top: 0 };
  const i = _n(e, t, n, o[0].index);
  return { bottom: _n(e, t, n, o[o.length - 1].index) + r, top: i };
}
function _n(e, t, n, o) {
  const r = di(e.width, n.width, t.column), i = ln(o / r), s = i * n.height + Ot(0, i - 1) * t.row;
  return s > 0 ? s + t.row : s;
}
const za = /* @__PURE__ */ ie(() => {
  const e = k((h) => `Item ${h}`), t = k({}), n = k(null), o = k("virtuoso-grid-item"), r = k("virtuoso-grid-list"), i = k(io), s = k("div"), l = k(yt), a = (h, d = null) => Ee(
    E(
      t,
      L((f) => f[h]),
      pe()
    ),
    d
  ), c = k(!1), u = k(!1);
  return B(G(u), c), {
    components: t,
    computeItemKey: i,
    context: n,
    FooterComponent: a("Footer"),
    HeaderComponent: a("Header"),
    headerFooterTag: s,
    itemClassName: o,
    ItemComponent: a("Item", "div"),
    itemContent: e,
    listClassName: r,
    ListComponent: a("List", "div"),
    readyStateChanged: c,
    reportReadyState: u,
    ScrollerComponent: a("Scroller", "div"),
    scrollerRef: l,
    ScrollSeekPlaceholder: a("ScrollSeekPlaceholder", "div")
  };
}), La = /* @__PURE__ */ ie(
  ([e, t]) => ({ ...e, ...t }),
  me(Ma, za)
), Na = /* @__PURE__ */ j.memo(function() {
  const e = he("gridState"), t = he("listClassName"), n = he("itemClassName"), o = he("itemContent"), r = he("computeItemKey"), i = he("isSeeking"), s = Le("scrollHeight"), l = he("ItemComponent"), a = he("ListComponent"), c = he("ScrollSeekPlaceholder"), u = he("context"), h = Le("itemDimensions"), d = Le("gap"), f = he("log"), b = he("stateRestoreInProgress"), y = Le("reportReadyState"), x = ut(
    j.useMemo(
      () => (p) => {
        const m = p.parentElement.parentElement.scrollHeight;
        s(m);
        const w = p.firstChild;
        if (w !== null) {
          const { height: I, width: T } = w.getBoundingClientRect();
          h({ height: I, width: T });
        }
        d({
          column: qo("column-gap", getComputedStyle(p).columnGap, f),
          row: qo("row-gap", getComputedStyle(p).rowGap, f)
        });
      },
      [s, h, d, f]
    ),
    !0,
    !1
  );
  return oi(() => {
    e.itemHeight > 0 && e.itemWidth > 0 && y(!0);
  }, [e]), b ? null : /* @__PURE__ */ M.jsx(
    a,
    {
      className: t,
      ref: x,
      ...Te(a, u),
      "data-testid": "virtuoso-item-list",
      style: { paddingBottom: e.offsetBottom, paddingTop: e.offsetTop },
      children: e.items.map((p) => {
        const m = r(p.index, p.data, u);
        return i ? /* @__PURE__ */ M.jsx(
          c,
          {
            ...Te(c, u),
            height: e.itemHeight,
            index: p.index,
            width: e.itemWidth
          },
          m
        ) : /* @__PURE__ */ Xt(
          l,
          {
            ...Te(l, u),
            className: n,
            "data-index": p.index,
            key: m
          },
          o(p.index, p.data, u)
        );
      })
    }
  );
}), Pa = j.memo(function() {
  const e = he("HeaderComponent"), t = Le("headerHeight"), n = he("headerFooterTag"), o = ut(
    j.useMemo(
      () => (i) => {
        t(Je(i, "height"));
      },
      [t]
    ),
    !0,
    !1
  ), r = he("context");
  return e != null ? /* @__PURE__ */ M.jsx(n, { ref: o, children: /* @__PURE__ */ M.jsx(e, { ...Te(e, r) }) }) : null;
}), ja = j.memo(function() {
  const e = he("FooterComponent"), t = Le("footerHeight"), n = he("headerFooterTag"), o = ut(
    j.useMemo(
      () => (i) => {
        t(Je(i, "height"));
      },
      [t]
    ),
    !0,
    !1
  ), r = he("context");
  return e != null ? /* @__PURE__ */ M.jsx(n, { ref: o, children: /* @__PURE__ */ M.jsx(e, { ...Te(e, r) }) }) : null;
}), Ba = ({ children: e }) => {
  const t = j.useContext(ni), n = Le("itemDimensions"), o = Le("viewportDimensions"), r = ut(
    j.useMemo(
      () => (i) => {
        o(i.getBoundingClientRect());
      },
      [o]
    ),
    !0,
    !1
  );
  return j.useEffect(() => {
    t && (o({ height: t.viewportHeight, width: t.viewportWidth }), n({ height: t.itemHeight, width: t.itemWidth }));
  }, [t, o, n]), /* @__PURE__ */ M.jsx("div", { ref: r, style: so(!1), children: e });
}, Fa = ({ children: e }) => {
  const t = j.useContext(ni), n = Le("windowViewportRect"), o = Le("itemDimensions"), r = he("customScrollParent"), i = he("useWindowScroll"), s = zr(n, r, !1);
  return j.useEffect(() => {
    t && (o({ height: t.itemHeight, width: t.itemWidth }), n({ listHeight: 0, offsetTop: 0, visibleHeight: t.viewportHeight, visibleWidth: t.viewportWidth }));
  }, [t, n, o]), /* @__PURE__ */ M.jsx("div", { ref: s, style: si(!1, i), children: e });
}, _a = /* @__PURE__ */ j.memo(function({ ...e }) {
  const t = he("useWindowScroll"), n = he("customScrollParent"), o = n || t ? Va : Wa, r = n || t ? Fa : Ba, i = he("context");
  return /* @__PURE__ */ M.jsx(o, { ...e, ...Te(o, i), children: /* @__PURE__ */ M.jsxs(r, { children: [
    /* @__PURE__ */ M.jsx(Pa, {}),
    /* @__PURE__ */ M.jsx(Na, {}),
    /* @__PURE__ */ M.jsx(ja, {})
  ] }) });
}), {
  useEmitter: hi,
  useEmitterValue: he,
  usePublisher: Le
} = /* @__PURE__ */ ei(
  La,
  {
    optional: {
      context: "context",
      totalCount: "totalCount",
      overscan: "overscan",
      itemContent: "itemContent",
      components: "components",
      computeItemKey: "computeItemKey",
      data: "data",
      initialItemCount: "initialItemCount",
      scrollSeekConfiguration: "scrollSeekConfiguration",
      headerFooterTag: "headerFooterTag",
      listClassName: "listClassName",
      itemClassName: "itemClassName",
      useWindowScroll: "useWindowScroll",
      customScrollParent: "customScrollParent",
      scrollerRef: "scrollerRef",
      logLevel: "logLevel",
      restoreStateFrom: "restoreStateFrom",
      initialTopMostItemIndex: "initialTopMostItemIndex",
      increaseViewportBy: "increaseViewportBy"
    },
    methods: {
      scrollTo: "scrollTo",
      scrollBy: "scrollBy",
      scrollToIndex: "scrollToIndex"
    },
    events: {
      isScrolling: "isScrolling",
      endReached: "endReached",
      startReached: "startReached",
      rangeChanged: "rangeChanged",
      atBottomStateChange: "atBottomStateChange",
      atTopStateChange: "atTopStateChange",
      stateChanged: "stateChanged",
      readyStateChanged: "readyStateChanged"
    }
  },
  _a
), Wa = /* @__PURE__ */ li({ useEmitter: hi, useEmitterValue: he, usePublisher: Le }), Va = /* @__PURE__ */ ai({ useEmitter: hi, useEmitterValue: he, usePublisher: Le });
function qo(e, t, n) {
  return t !== "normal" && (t == null ? void 0 : t.endsWith("px")) !== !0 && n(`${e} was not resolved to pixel value correctly`, t, Ce.WARN), t === "normal" ? 0 : parseInt(t ?? "0", 10);
}
function pi({ className: e }) {
  return /* @__PURE__ */ M.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", className: e, children: [
    /* @__PURE__ */ M.jsx("title", { children: "Dropdown Icon" }),
    /* @__PURE__ */ M.jsx("g", { children: /* @__PURE__ */ M.jsx(
      "path",
      {
        d: "M8 14L12 10L16 14",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ) })
  ] });
}
function mi(e) {
  return "isNewValue" in e && e.isNewValue === !0;
}
function jt(e) {
  return typeof e == "string" ? e : e.label;
}
function Tt(e) {
  return typeof e == "string" ? e : mi(e) ? e.value : e.label;
}
function ao(e, t) {
  return typeof e == "string" ? e : t ? mi(e) ? { label: e.value, value: e.value } : e : e.value;
}
function Ua(e, t) {
  return t != null && t.length ? {
    label: e,
    value: e
  } : e;
}
function $e(e, t) {
  const n = ao(e, t);
  return typeof n == "string" ? n : n.value;
}
function $a(e) {
  return e.replace(/[^a-zA-Z0-9]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "").toLowerCase();
}
var gi = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(ir, () => {
    return n = { 772: (r, i, s) => {
      const l = s(826).remove, a = /[.*+?^${}()|[\]\\]/g, c = /[a-z0-9_]/i, u = /\s+/;
      r.exports = function(h, d, f) {
        var b, y;
        y = { insideWords: !1, findAllOccurrences: !1, requireMatchAll: !1 }, b = (b = f) || {}, Object.keys(b).forEach((m) => {
          y[m] = !!b[m];
        }), f = y;
        const x = Array.from(h).map((m) => l(m));
        let p = x.join("");
        return (d = l(d)).trim().split(u).filter((m) => m.length > 0).reduce((m, w) => {
          const I = w.length, T = !f.insideWords && c.test(w[0]) ? "\\b" : "", A = new RegExp(T + w.replace(a, "\\$&"), "i");
          let g, S;
          if (g = A.exec(p), f.requireMatchAll && g === null) return p = "", [];
          for (; g; ) {
            S = g.index;
            const R = I - x.slice(S, S + I).join("").length, H = S - x.slice(0, S).join("").length, O = [S + H, S + I + H + R];
            if (O[0] !== O[1] && m.push(O), p = p.slice(0, S) + new Array(I + 1).join(" ") + p.slice(S + I), !f.findAllOccurrences) break;
            g = A.exec(p);
          }
          return m;
        }, []).sort((m, w) => m[0] - w[0]);
      };
    }, 826: (r) => {
      var i = { À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", Ấ: "A", Ắ: "A", Ẳ: "A", Ẵ: "A", Ặ: "A", Æ: "AE", Ầ: "A", Ằ: "A", Ȃ: "A", Ç: "C", Ḉ: "C", È: "E", É: "E", Ê: "E", Ë: "E", Ế: "E", Ḗ: "E", Ề: "E", Ḕ: "E", Ḝ: "E", Ȇ: "E", Ì: "I", Í: "I", Î: "I", Ï: "I", Ḯ: "I", Ȋ: "I", Ð: "D", Ñ: "N", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", Ố: "O", Ṍ: "O", Ṓ: "O", Ȏ: "O", Ù: "U", Ú: "U", Û: "U", Ü: "U", Ý: "Y", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", ấ: "a", ắ: "a", ẳ: "a", ẵ: "a", ặ: "a", æ: "ae", ầ: "a", ằ: "a", ȃ: "a", ç: "c", ḉ: "c", è: "e", é: "e", ê: "e", ë: "e", ế: "e", ḗ: "e", ề: "e", ḕ: "e", ḝ: "e", ȇ: "e", ì: "i", í: "i", î: "i", ï: "i", ḯ: "i", ȋ: "i", ð: "d", ñ: "n", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", ố: "o", ṍ: "o", ṓ: "o", ȏ: "o", ù: "u", ú: "u", û: "u", ü: "u", ý: "y", ÿ: "y", Ā: "A", ā: "a", Ă: "A", ă: "a", Ą: "A", ą: "a", Ć: "C", ć: "c", Ĉ: "C", ĉ: "c", Ċ: "C", ċ: "c", Č: "C", č: "c", C̆: "C", c̆: "c", Ď: "D", ď: "d", Đ: "D", đ: "d", Ē: "E", ē: "e", Ĕ: "E", ĕ: "e", Ė: "E", ė: "e", Ę: "E", ę: "e", Ě: "E", ě: "e", Ĝ: "G", Ǵ: "G", ĝ: "g", ǵ: "g", Ğ: "G", ğ: "g", Ġ: "G", ġ: "g", Ģ: "G", ģ: "g", Ĥ: "H", ĥ: "h", Ħ: "H", ħ: "h", Ḫ: "H", ḫ: "h", Ĩ: "I", ĩ: "i", Ī: "I", ī: "i", Ĭ: "I", ĭ: "i", Į: "I", į: "i", İ: "I", ı: "i", Ĳ: "IJ", ĳ: "ij", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", Ḱ: "K", ḱ: "k", K̆: "K", k̆: "k", Ĺ: "L", ĺ: "l", Ļ: "L", ļ: "l", Ľ: "L", ľ: "l", Ŀ: "L", ŀ: "l", Ł: "l", ł: "l", Ḿ: "M", ḿ: "m", M̆: "M", m̆: "m", Ń: "N", ń: "n", Ņ: "N", ņ: "n", Ň: "N", ň: "n", ŉ: "n", N̆: "N", n̆: "n", Ō: "O", ō: "o", Ŏ: "O", ŏ: "o", Ő: "O", ő: "o", Œ: "OE", œ: "oe", P̆: "P", p̆: "p", Ŕ: "R", ŕ: "r", Ŗ: "R", ŗ: "r", Ř: "R", ř: "r", R̆: "R", r̆: "r", Ȓ: "R", ȓ: "r", Ś: "S", ś: "s", Ŝ: "S", ŝ: "s", Ş: "S", Ș: "S", ș: "s", ş: "s", Š: "S", š: "s", Ţ: "T", ţ: "t", ț: "t", Ț: "T", Ť: "T", ť: "t", Ŧ: "T", ŧ: "t", T̆: "T", t̆: "t", Ũ: "U", ũ: "u", Ū: "U", ū: "u", Ŭ: "U", ŭ: "u", Ů: "U", ů: "u", Ű: "U", ű: "u", Ų: "U", ų: "u", Ȗ: "U", ȗ: "u", V̆: "V", v̆: "v", Ŵ: "W", ŵ: "w", Ẃ: "W", ẃ: "w", X̆: "X", x̆: "x", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Y̆: "Y", y̆: "y", Ź: "Z", ź: "z", Ż: "Z", ż: "z", Ž: "Z", ž: "z", ſ: "s", ƒ: "f", Ơ: "O", ơ: "o", Ư: "U", ư: "u", Ǎ: "A", ǎ: "a", Ǐ: "I", ǐ: "i", Ǒ: "O", ǒ: "o", Ǔ: "U", ǔ: "u", Ǖ: "U", ǖ: "u", Ǘ: "U", ǘ: "u", Ǚ: "U", ǚ: "u", Ǜ: "U", ǜ: "u", Ứ: "U", ứ: "u", Ṹ: "U", ṹ: "u", Ǻ: "A", ǻ: "a", Ǽ: "AE", ǽ: "ae", Ǿ: "O", ǿ: "o", Þ: "TH", þ: "th", Ṕ: "P", ṕ: "p", Ṥ: "S", ṥ: "s", X́: "X", x́: "x", Ѓ: "Г", ѓ: "г", Ќ: "К", ќ: "к", A̋: "A", a̋: "a", E̋: "E", e̋: "e", I̋: "I", i̋: "i", Ǹ: "N", ǹ: "n", Ồ: "O", ồ: "o", Ṑ: "O", ṑ: "o", Ừ: "U", ừ: "u", Ẁ: "W", ẁ: "w", Ỳ: "Y", ỳ: "y", Ȁ: "A", ȁ: "a", Ȅ: "E", ȅ: "e", Ȉ: "I", ȉ: "i", Ȍ: "O", ȍ: "o", Ȑ: "R", ȑ: "r", Ȕ: "U", ȕ: "u", B̌: "B", b̌: "b", Č̣: "C", č̣: "c", Ê̌: "E", ê̌: "e", F̌: "F", f̌: "f", Ǧ: "G", ǧ: "g", Ȟ: "H", ȟ: "h", J̌: "J", ǰ: "j", Ǩ: "K", ǩ: "k", M̌: "M", m̌: "m", P̌: "P", p̌: "p", Q̌: "Q", q̌: "q", Ř̩: "R", ř̩: "r", Ṧ: "S", ṧ: "s", V̌: "V", v̌: "v", W̌: "W", w̌: "w", X̌: "X", x̌: "x", Y̌: "Y", y̌: "y", A̧: "A", a̧: "a", B̧: "B", b̧: "b", Ḑ: "D", ḑ: "d", Ȩ: "E", ȩ: "e", Ɛ̧: "E", ɛ̧: "e", Ḩ: "H", ḩ: "h", I̧: "I", i̧: "i", Ɨ̧: "I", ɨ̧: "i", M̧: "M", m̧: "m", O̧: "O", o̧: "o", Q̧: "Q", q̧: "q", U̧: "U", u̧: "u", X̧: "X", x̧: "x", Z̧: "Z", z̧: "z" }, s = Object.keys(i).join("|"), l = new RegExp(s, "g"), a = new RegExp(s, ""), c = function(u) {
        return u.replace(l, function(h) {
          return i[h];
        });
      };
      r.exports = c, r.exports.has = function(u) {
        return !!u.match(a);
      }, r.exports.remove = c;
    } }, o = {}, function r(i) {
      var s = o[i];
      if (s !== void 0) return s.exports;
      var l = o[i] = { exports: {} };
      return n[i](l, l.exports, r), l.exports;
    }(772);
    var n, o;
  });
})(gi);
var Ga = gi.exports;
const Qa = /* @__PURE__ */ Vn(Ga);
var vi = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(ir, () => {
    return n = { 705: (r) => {
      r.exports = function(i, s) {
        const l = [];
        return s.length === 0 ? l.push({ text: i, highlight: !1 }) : s[0][0] > 0 && l.push({ text: i.slice(0, s[0][0]), highlight: !1 }), s.forEach((a, c) => {
          const u = a[0], h = a[1];
          l.push({ text: i.slice(u, h), highlight: !0 }), c === s.length - 1 ? h < i.length && l.push({ text: i.slice(h, i.length), highlight: !1 }) : h < s[c + 1][0] && l.push({ text: i.slice(h, s[c + 1][0]), highlight: !1 });
        }), l;
      };
    } }, o = {}, function r(i) {
      var s = o[i];
      if (s !== void 0) return s.exports;
      var l = o[i] = { exports: {} };
      return n[i](l, l.exports, r), l.exports;
    }(705);
    var n, o;
  });
})(vi);
var Ya = vi.exports;
const Xa = /* @__PURE__ */ Vn(Ya);
function Ka({
  optionLabel: e,
  searchQuery: t,
  highlightMatches: n,
  classNameDropdownOptionLabel: o,
  classNameDropdownOptionLabelFocused: r
}) {
  if (!t || !n) return e;
  const i = Qa(e, t, { insideWords: !0 });
  return Xa(e, i).map((l, a) => /* @__PURE__ */ M.jsx(
    "span",
    {
      className: `${o} ${l.highlight ? r : ""}`,
      children: l.text
    },
    `${l.text}-${a}`
  ));
}
function Za({
  baseClassName: e,
  optionIsDisabled: t,
  optionIsSelected: n,
  optionIsFocused: o,
  selectedClassName: r,
  focusedClassName: i,
  disabledClassName: s
}) {
  const l = [e];
  return t ? l.push(s) : n ? l.push(r) : o && l.push(i), l.filter(Boolean).join(" ");
}
function xi({
  optionId: e,
  currentOption: t,
  searchQuery: n,
  dropdownOptionNavigationIndex: o,
  currentOptionIndex: r,
  handleDropdownOptionSelect: i,
  highlightMatches: s,
  onMouseEnter: l,
  currentOptionIsSelected: a,
  classNameDropdownOption: c,
  classNameDropdownOptionFocused: u,
  classNameDropdownOptionLabel: h,
  classNameDropdownOptionLabelFocused: d,
  classNameDropdownOptionSelected: f,
  classNameDropdownOptionDisabled: b
}) {
  const y = cn(null), x = jt(t), p = !!(a != null && a(t)), m = typeof t == "object" && "disabled" in t && t.disabled === !0, w = o === r, I = Za({
    baseClassName: c,
    optionIsDisabled: m,
    optionIsSelected: p,
    optionIsFocused: w,
    selectedClassName: f,
    focusedClassName: u,
    disabledClassName: b
  });
  return (
    // biome-ignore lint/a11y/useFocusableInteractive: focus managed via aria-activedescendant on the input
    /* @__PURE__ */ M.jsx(
      "div",
      {
        ref: y,
        id: e,
        role: "option",
        "aria-selected": p || w,
        "aria-disabled": m || void 0,
        className: I,
        onMouseUp: () => !m && i(t),
        onMouseEnter: () => !m && (l == null ? void 0 : l(r)),
        "data-testid": `dropdown-option-${r}`,
        children: /* @__PURE__ */ M.jsx(
          Ka,
          {
            optionLabel: x,
            searchQuery: n,
            highlightMatches: s,
            classNameDropdownOptionLabel: h,
            classNameDropdownOptionLabelFocused: d
          }
        )
      }
    )
  );
}
function wi({
  classNameDropdownOptionNoMatch: e,
  dropdownOptionNoMatchLabel: t
}) {
  return /* @__PURE__ */ M.jsxs("div", { className: e, children: [
    " ",
    t,
    " "
  ] });
}
function bi({
  classNameDropdownOptions: e,
  classNameDropdownOption: t,
  dropdownNoOptionsLabel: n
}) {
  return /* @__PURE__ */ M.jsx("div", { className: e, children: /* @__PURE__ */ M.jsx("div", { className: t, children: n }) });
}
const an = "lda-searchable-dropdown";
function Ja(e, t) {
  return e.current instanceof Node && e.current.contains(t);
}
function yi(e, t) {
  const n = Ie(
    (o) => {
      e.some((i) => Ja(i, o.target)) || t();
    },
    [e, t]
  );
  un(() => (document.addEventListener("mousedown", n), () => document.removeEventListener("mousedown", n)), [n]);
}
function Si(e) {
  const {
    virtuosoRef: t,
    searchQueryinputRef: n,
    matchingOptions: o,
    showDropdownOptions: r,
    setShowDropdownOptions: i,
    dropdownOptionNavigationIndex: s,
    setDropdownOptionNavigationIndex: l,
    handleOnSelectDropdownOption: a,
    setSuppressMouseEnterOptionListener: c,
    onLeaveCallback: u
  } = e;
  return { handleKeyDown: Ie(
    (d) => {
      var f, b, y, x, p, m, w;
      if (d.key === "ArrowDown") {
        d.preventDefault(), c(!0), i(!0);
        const I = s < o.length - 1 ? s + 1 : s;
        l(I), (f = t.current) == null || f.scrollToIndex({
          index: I,
          align: "center",
          behavior: "auto"
        });
      } else if (d.key === "ArrowUp") {
        d.preventDefault(), c(!0);
        const I = s > 0 ? s - 1 : s;
        l(I), (b = t.current) == null || b.scrollToIndex({
          index: I,
          align: "center",
          behavior: "auto"
        });
      } else if (d.key === "Tab" || d.key === "Enter")
        d.preventDefault(), r && s >= 0 && o.length && (a(o[s]), e.isMultiSelect ? (y = n.current) == null || y.focus() : (x = n.current) == null || x.blur());
      else if (d.key === "Escape")
        u(), (p = n.current) == null || p.blur();
      else if (d.key === "Backspace" && e.isMultiSelect && e.deleteLastChipOnBackspace && (((m = n.current) == null ? void 0 : m.value) || "") === "" && e.values && e.values.length > 0) {
        d.preventDefault();
        const T = e.values[e.values.length - 1], A = e.values.slice(0, -1);
        e.setValues(A), (w = e.onClearOption) == null || w.call(e, T);
      }
    },
    [
      o,
      s,
      a,
      r,
      n,
      i,
      l,
      c,
      u,
      t,
      e
    ]
  ) };
}
function qa(e, t) {
  const [n, o] = rt(e);
  return un(() => {
    if (t === 0) return o(e);
    const r = setTimeout(() => {
      o(e);
    }, t);
    return () => {
      clearTimeout(r);
    };
  }, [e, t]), [n, o];
}
var xn = { exports: {} }, Ii = {
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  Ấ: "A",
  Ắ: "A",
  Ẳ: "A",
  Ẵ: "A",
  Ặ: "A",
  Æ: "AE",
  Ầ: "A",
  Ằ: "A",
  Ȃ: "A",
  Ả: "A",
  Ạ: "A",
  Ẩ: "A",
  Ẫ: "A",
  Ậ: "A",
  Ç: "C",
  Ḉ: "C",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  Ế: "E",
  Ḗ: "E",
  Ề: "E",
  Ḕ: "E",
  Ḝ: "E",
  Ȇ: "E",
  Ẻ: "E",
  Ẽ: "E",
  Ẹ: "E",
  Ể: "E",
  Ễ: "E",
  Ệ: "E",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  Ḯ: "I",
  Ȋ: "I",
  Ỉ: "I",
  Ị: "I",
  Ð: "D",
  Ñ: "N",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  Ố: "O",
  Ṍ: "O",
  Ṓ: "O",
  Ȏ: "O",
  Ỏ: "O",
  Ọ: "O",
  Ổ: "O",
  Ỗ: "O",
  Ộ: "O",
  Ờ: "O",
  Ở: "O",
  Ỡ: "O",
  Ớ: "O",
  Ợ: "O",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  Ủ: "U",
  Ụ: "U",
  Ử: "U",
  Ữ: "U",
  Ự: "U",
  Ý: "Y",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  ấ: "a",
  ắ: "a",
  ẳ: "a",
  ẵ: "a",
  ặ: "a",
  æ: "ae",
  ầ: "a",
  ằ: "a",
  ȃ: "a",
  ả: "a",
  ạ: "a",
  ẩ: "a",
  ẫ: "a",
  ậ: "a",
  ç: "c",
  ḉ: "c",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  ế: "e",
  ḗ: "e",
  ề: "e",
  ḕ: "e",
  ḝ: "e",
  ȇ: "e",
  ẻ: "e",
  ẽ: "e",
  ẹ: "e",
  ể: "e",
  ễ: "e",
  ệ: "e",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  ḯ: "i",
  ȋ: "i",
  ỉ: "i",
  ị: "i",
  ð: "d",
  ñ: "n",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  ố: "o",
  ṍ: "o",
  ṓ: "o",
  ȏ: "o",
  ỏ: "o",
  ọ: "o",
  ổ: "o",
  ỗ: "o",
  ộ: "o",
  ờ: "o",
  ở: "o",
  ỡ: "o",
  ớ: "o",
  ợ: "o",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  ủ: "u",
  ụ: "u",
  ử: "u",
  ữ: "u",
  ự: "u",
  ý: "y",
  ÿ: "y",
  Ā: "A",
  ā: "a",
  Ă: "A",
  ă: "a",
  Ą: "A",
  ą: "a",
  Ć: "C",
  ć: "c",
  Ĉ: "C",
  ĉ: "c",
  Ċ: "C",
  ċ: "c",
  Č: "C",
  č: "c",
  C̆: "C",
  c̆: "c",
  Ď: "D",
  ď: "d",
  Đ: "D",
  đ: "d",
  Ē: "E",
  ē: "e",
  Ĕ: "E",
  ĕ: "e",
  Ė: "E",
  ė: "e",
  Ę: "E",
  ę: "e",
  Ě: "E",
  ě: "e",
  Ĝ: "G",
  Ǵ: "G",
  ĝ: "g",
  ǵ: "g",
  Ğ: "G",
  ğ: "g",
  Ġ: "G",
  ġ: "g",
  Ģ: "G",
  ģ: "g",
  Ĥ: "H",
  ĥ: "h",
  Ħ: "H",
  ħ: "h",
  Ḫ: "H",
  ḫ: "h",
  Ĩ: "I",
  ĩ: "i",
  Ī: "I",
  ī: "i",
  Ĭ: "I",
  ĭ: "i",
  Į: "I",
  į: "i",
  İ: "I",
  ı: "i",
  Ĳ: "IJ",
  ĳ: "ij",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  Ḱ: "K",
  ḱ: "k",
  K̆: "K",
  k̆: "k",
  Ĺ: "L",
  ĺ: "l",
  Ļ: "L",
  ļ: "l",
  Ľ: "L",
  ľ: "l",
  Ŀ: "L",
  ŀ: "l",
  Ł: "l",
  ł: "l",
  Ḿ: "M",
  ḿ: "m",
  M̆: "M",
  m̆: "m",
  Ń: "N",
  ń: "n",
  Ņ: "N",
  ņ: "n",
  Ň: "N",
  ň: "n",
  ŉ: "n",
  N̆: "N",
  n̆: "n",
  Ō: "O",
  ō: "o",
  Ŏ: "O",
  ŏ: "o",
  Ő: "O",
  ő: "o",
  Œ: "OE",
  œ: "oe",
  P̆: "P",
  p̆: "p",
  Ŕ: "R",
  ŕ: "r",
  Ŗ: "R",
  ŗ: "r",
  Ř: "R",
  ř: "r",
  R̆: "R",
  r̆: "r",
  Ȓ: "R",
  ȓ: "r",
  Ś: "S",
  ś: "s",
  Ŝ: "S",
  ŝ: "s",
  Ş: "S",
  Ș: "S",
  ș: "s",
  ş: "s",
  Š: "S",
  š: "s",
  Ţ: "T",
  ţ: "t",
  ț: "t",
  Ț: "T",
  Ť: "T",
  ť: "t",
  Ŧ: "T",
  ŧ: "t",
  T̆: "T",
  t̆: "t",
  Ũ: "U",
  ũ: "u",
  Ū: "U",
  ū: "u",
  Ŭ: "U",
  ŭ: "u",
  Ů: "U",
  ů: "u",
  Ű: "U",
  ű: "u",
  Ų: "U",
  ų: "u",
  Ȗ: "U",
  ȗ: "u",
  V̆: "V",
  v̆: "v",
  Ŵ: "W",
  ŵ: "w",
  Ẃ: "W",
  ẃ: "w",
  X̆: "X",
  x̆: "x",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Y̆: "Y",
  y̆: "y",
  Ź: "Z",
  ź: "z",
  Ż: "Z",
  ż: "z",
  Ž: "Z",
  ž: "z",
  ſ: "s",
  ƒ: "f",
  Ơ: "O",
  ơ: "o",
  Ư: "U",
  ư: "u",
  Ǎ: "A",
  ǎ: "a",
  Ǐ: "I",
  ǐ: "i",
  Ǒ: "O",
  ǒ: "o",
  Ǔ: "U",
  ǔ: "u",
  Ǖ: "U",
  ǖ: "u",
  Ǘ: "U",
  ǘ: "u",
  Ǚ: "U",
  ǚ: "u",
  Ǜ: "U",
  ǜ: "u",
  Ứ: "U",
  ứ: "u",
  Ṹ: "U",
  ṹ: "u",
  Ǻ: "A",
  ǻ: "a",
  Ǽ: "AE",
  ǽ: "ae",
  Ǿ: "O",
  ǿ: "o",
  Þ: "TH",
  þ: "th",
  Ṕ: "P",
  ṕ: "p",
  Ṥ: "S",
  ṥ: "s",
  X́: "X",
  x́: "x",
  Ѓ: "Г",
  ѓ: "г",
  Ќ: "К",
  ќ: "к",
  A̋: "A",
  a̋: "a",
  E̋: "E",
  e̋: "e",
  I̋: "I",
  i̋: "i",
  Ǹ: "N",
  ǹ: "n",
  Ồ: "O",
  ồ: "o",
  Ṑ: "O",
  ṑ: "o",
  Ừ: "U",
  ừ: "u",
  Ẁ: "W",
  ẁ: "w",
  Ỳ: "Y",
  ỳ: "y",
  Ȁ: "A",
  ȁ: "a",
  Ȅ: "E",
  ȅ: "e",
  Ȉ: "I",
  ȉ: "i",
  Ȍ: "O",
  ȍ: "o",
  Ȑ: "R",
  ȑ: "r",
  Ȕ: "U",
  ȕ: "u",
  B̌: "B",
  b̌: "b",
  Č̣: "C",
  č̣: "c",
  Ê̌: "E",
  ê̌: "e",
  F̌: "F",
  f̌: "f",
  Ǧ: "G",
  ǧ: "g",
  Ȟ: "H",
  ȟ: "h",
  J̌: "J",
  ǰ: "j",
  Ǩ: "K",
  ǩ: "k",
  M̌: "M",
  m̌: "m",
  P̌: "P",
  p̌: "p",
  Q̌: "Q",
  q̌: "q",
  Ř̩: "R",
  ř̩: "r",
  Ṧ: "S",
  ṧ: "s",
  V̌: "V",
  v̌: "v",
  W̌: "W",
  w̌: "w",
  X̌: "X",
  x̌: "x",
  Y̌: "Y",
  y̌: "y",
  A̧: "A",
  a̧: "a",
  B̧: "B",
  b̧: "b",
  Ḑ: "D",
  ḑ: "d",
  Ȩ: "E",
  ȩ: "e",
  Ɛ̧: "E",
  ɛ̧: "e",
  Ḩ: "H",
  ḩ: "h",
  I̧: "I",
  i̧: "i",
  Ɨ̧: "I",
  ɨ̧: "i",
  M̧: "M",
  m̧: "m",
  O̧: "O",
  o̧: "o",
  Q̧: "Q",
  q̧: "q",
  U̧: "U",
  u̧: "u",
  X̧: "X",
  x̧: "x",
  Z̧: "Z",
  z̧: "z",
  й: "и",
  Й: "И",
  ё: "е",
  Ё: "Е"
}, Ci = Object.keys(Ii).join("|"), ec = new RegExp(Ci, "g"), tc = new RegExp(Ci, "");
function nc(e) {
  return Ii[e];
}
var Ti = function(e) {
  return e.replace(ec, nc);
}, oc = function(e) {
  return !!e.match(tc);
};
xn.exports = Ti;
xn.exports.has = oc;
xn.exports.remove = Ti;
var rc = xn.exports;
const ic = /* @__PURE__ */ Vn(rc);
/**
 * @name match-sorter
 * @license MIT license.
 * @copyright (c) 2020 Kent C. Dodds
 * @author Kent C. Dodds <me@kentcdodds.com> (https://kentcdodds.com)
 */
const Oe = {
  CASE_SENSITIVE_EQUAL: 7,
  EQUAL: 6,
  STARTS_WITH: 5,
  WORD_STARTS_WITH: 4,
  CONTAINS: 3,
  ACRONYM: 2,
  MATCHES: 1,
  NO_MATCH: 0
}, sc = (e, t) => String(e.rankedValue).localeCompare(String(t.rankedValue));
function Wn(e, t, n = {}) {
  return lc(e, t, n).map(({
    item: o
  }) => o);
}
function lc(e, t, n) {
  const {
    keys: o,
    threshold: r = Oe.MATCHES,
    baseSort: i = sc,
    sorter: s = (c) => c.sort((u, h) => dc(u, h, i))
  } = n, l = e.reduce(a, []);
  return s(l);
  function a(c, u, h) {
    const d = ac(u, o, t, n), {
      rank: f,
      keyThreshold: b = r
    } = d;
    return f >= b && c.push({
      ...d,
      item: u,
      index: h
    }), c;
  }
}
Wn.rankings = Oe;
function ac(e, t, n, o) {
  if (!t) {
    const i = e;
    return {
      // ends up being duplicate of 'item' in matches but consistent
      rankedValue: i,
      rank: er(i, n, o),
      keyIndex: -1,
      keyThreshold: o.threshold
    };
  }
  return mc(e, t).reduce(({
    rank: i,
    rankedValue: s,
    keyIndex: l,
    keyThreshold: a
  }, {
    itemValue: c,
    attributes: u
  }, h) => {
    let d = er(c, n, o), f = s;
    const {
      minRanking: b,
      maxRanking: y,
      threshold: x
    } = u;
    return d < b && d >= Oe.MATCHES ? d = b : d > y && (d = y), d > i && (i = d, l = h, a = x, f = c), {
      rankedValue: f,
      rank: i,
      keyIndex: l,
      keyThreshold: a
    };
  }, {
    rankedValue: e,
    rank: Oe.NO_MATCH,
    keyIndex: -1,
    keyThreshold: o.threshold
  });
}
function* cc(e, t) {
  let n = -1;
  for (; (n = e.indexOf(t, n + 1)) > -1; )
    yield n;
  return -1;
}
function er(e, t, n) {
  if (e = tr(e, n), t = tr(t, n), t.length > e.length)
    return Oe.NO_MATCH;
  if (e === t)
    return Oe.CASE_SENSITIVE_EQUAL;
  e = e.toLowerCase(), t = t.toLowerCase();
  const o = cc(e, t), r = o.next(), i = r.value;
  if (e.length === t.length && i === 0)
    return Oe.EQUAL;
  if (i === 0)
    return Oe.STARTS_WITH;
  let s = r;
  for (; !s.done; ) {
    if (s.value > 0 && e[s.value - 1] === " ")
      return Oe.WORD_STARTS_WITH;
    s = o.next();
  }
  return i > 0 ? Oe.CONTAINS : t.length === 1 ? Oe.NO_MATCH : uc(e).includes(t) ? Oe.ACRONYM : fc(e, t);
}
function uc(e) {
  let t = "", n = " ";
  for (let o = 0; o < e.length; o++) {
    const r = e.charAt(o);
    (n === " " || n === "-") && !(r === " " || r === "-") && (t += r), n = r;
  }
  return t;
}
function fc(e, t) {
  let n = 0, o = 0;
  function r(a, c, u) {
    for (let h = u, d = c.length; h < d; h++)
      if (c[h] === a)
        return n += 1, h + 1;
    return -1;
  }
  function i(a) {
    const c = 1 / a, u = n / t.length;
    return Oe.MATCHES + u * c;
  }
  const s = r(t[0], e, 0);
  if (s < 0)
    return Oe.NO_MATCH;
  o = s;
  for (let a = 1, c = t.length; a < c; a++) {
    const u = t[a];
    if (o = r(u, e, o), !(o > -1))
      return Oe.NO_MATCH;
  }
  const l = o - s;
  return i(l);
}
function dc(e, t, n) {
  const {
    rank: i,
    keyIndex: s
  } = e, {
    rank: l,
    keyIndex: a
  } = t;
  return i === l ? s === a ? n(e, t) : s < a ? -1 : 1 : i > l ? -1 : 1;
}
function tr(e, {
  keepDiacritics: t
}) {
  return e = `${e}`, t || (e = ic(e)), e;
}
function hc(e, t) {
  typeof t == "object" && (t = t.key);
  let n;
  if (typeof t == "function")
    n = t(e);
  else if (e == null)
    n = null;
  else if (Object.hasOwnProperty.call(e, t))
    n = e[t];
  else {
    if (t.includes("."))
      return pc(t, e);
    n = null;
  }
  return n == null ? [] : Array.isArray(n) ? n : [String(n)];
}
function pc(e, t) {
  const n = e.split(".");
  let o = [t];
  for (let r = 0, i = n.length; r < i; r++) {
    const s = n[r];
    let l = [];
    for (let a = 0, c = o.length; a < c; a++) {
      const u = o[a];
      if (u != null)
        if (Object.hasOwnProperty.call(u, s)) {
          const h = u[s];
          h != null && l.push(h);
        } else s === "*" && (l = l.concat(u));
    }
    o = l;
  }
  return Array.isArray(o[0]) ? [].concat(...o) : o;
}
function mc(e, t) {
  const n = [];
  for (let o = 0, r = t.length; o < r; o++) {
    const i = t[o], s = gc(i), l = hc(e, i);
    for (let a = 0, c = l.length; a < c; a++)
      n.push({
        itemValue: l[a],
        attributes: s
      });
  }
  return n;
}
const nr = {
  maxRanking: 1 / 0,
  minRanking: -1 / 0
};
function gc(e) {
  return typeof e == "string" ? nr : {
    ...nr,
    ...e
  };
}
function vc(e, t, n, o, r) {
  const i = Ai(t);
  return Rt(() => {
    if (!i) return e;
    const s = Wn.rankings[o], l = Wn(
      e,
      i,
      n != null && n.length ? {
        keys: n,
        threshold: s
      } : { threshold: s }
    ), a = r(l, i);
    return a ? [a, ...l] : l;
  }, [e, i, n, o, r]);
}
function xc(e, t, n) {
  const o = Rt(() => t ? t(e) : { groupCounts: [], groupCategories: [] }, [t, e]), r = Ie(
    (i, s) => {
      if (n)
        return n(i, o.groupCategories, s);
    },
    [n, o.groupCategories]
  );
  return {
    groupCounts: o.groupCounts,
    groupContentCallback: r,
    hasGroups: !!(t && n)
  };
}
function wc(e, t) {
  return Ie(
    (n) => {
      e || t(n);
    },
    [e, t]
  );
}
function bc(e, t, n, o = 250) {
  const r = cn(null);
  un(() => (e >= 0 && t && (r.current && clearTimeout(r.current), r.current = setTimeout(() => {
    n(!1);
  }, o)), () => {
    r.current && clearTimeout(r.current);
  }), [
    e,
    t,
    n,
    o
  ]);
}
function Ri({
  options: e,
  searchOptionKeys: t,
  initialSearchQuery: n,
  searchQueryProp: o,
  onSearchQueryChange: r,
  filterType: i,
  debounceDelay: s,
  dropdownOptionsHeight: l,
  offsetValue: a,
  strategy: c,
  handleGroups: u,
  groupContent: h,
  context: d,
  enhanceOptionsWithNewCreation: f
}) {
  const b = ki(), { refs: y, floatingStyles: x } = wl({
    placement: "bottom",
    strategy: c,
    whileElementsMounted: $s,
    middleware: [
      el(a),
      nl(),
      tl(),
      ol({
        apply({ rects: te, elements: se }) {
          Object.assign(se.floating.style, {
            width: `${te.reference.width}px`
          });
        }
      })
    ]
  }), p = cn(null), [m, w] = rt(
    n
  ), I = o ?? m, T = r ?? w, [A, g] = qa(I, s), [S, R] = rt(!1), [H, O] = rt(0), [P, N] = rt(!1), [z, $] = rt(null), [V, U] = rt(!1), F = vc(
    e,
    A,
    t,
    i,
    f
  ), { groupCounts: q, groupContentCallback: ne, hasGroups: v } = xc(
    F,
    u,
    h
  );
  bc(
    H,
    P,
    N
  );
  const W = Ie(
    (te) => {
      T(te.target.value), R(!0), O(0), N(!1);
    },
    [T]
  );
  un(() => {
    var te;
    A === I && ((te = p.current) == null || te.scrollToIndex({ index: 0, align: "start", behavior: "auto" }));
  }, [A, I]);
  const Y = wc(
    P,
    O
  ), X = Ie((te) => {
    $(te), U(!0);
  }, []), we = z !== null ? Math.min(z, l) : l, de = Ie(() => {
    R(!1), U(!1), O(0), $(l);
  }, [l]), re = S && F.length > 0 ? `${b}-option-${H}` : void 0;
  function D(te) {
    return `${b}-option-${te}`;
  }
  return {
    listboxId: b,
    refs: y,
    floatingStyles: x,
    virtuosoRef: p,
    searchQuery: I,
    setSearchQuery: T,
    debouncedSearchQuery: A,
    setDebouncedSearchQuery: g,
    showDropdownOptions: S,
    setShowDropdownOptions: R,
    dropdownOptionNavigationIndex: H,
    setDropdownOptionNavigationIndex: O,
    suppressMouseEnterOptionListener: P,
    setSuppressMouseEnterOptionListener: N,
    hasMeasuredHeight: V,
    matchingOptions: F,
    groupCounts: q,
    groupContentCallback: ne,
    hasGroups: v,
    handleOnChangeSearchQuery: W,
    handleMouseEnterOptionCallback: Y,
    heightOfDropdownOptionsContainer: we,
    handleTotalListHeightChanged: X,
    resetDropdownState: de,
    activeDescendantId: re,
    getOptionId: D,
    context: d
  };
}
function Tc({
  options: e,
  placeholder: t,
  value: n,
  setValue: o,
  searchOptionKeys: r,
  disabled: i,
  filterType: s = "CONTAINS",
  debounceDelay: l = 0,
  DropdownIcon: a,
  dropdownOptionsHeight: c = 300,
  searchQuery: u,
  onSearchQueryChange: h,
  dropdownOptionNoMatchLabel: d = "No Match",
  dropdownNoOptionsLabel: f = "No options provided",
  createNewOptionIfNoMatch: b = !0,
  createNewOptionLabelPrefix: y = "Create new: ",
  offset: x = 5,
  strategy: p = "absolute",
  groupContent: m = void 0,
  handleGroups: w = void 0,
  context: I,
  classNameSearchableDropdownContainer: T = "lda-dropdown-container",
  classNameSearchQueryInput: A = "lda-dropdown-search-query-input",
  classNameDropdownOptions: g = "lda-dropdown-options",
  classNameDropdownOption: S = "lda-dropdown-option",
  classNameDropdownOptionFocused: R = "lda-dropdown-option-focused",
  classNameDropdownOptionSelected: H = "lda-dropdown-option-selected",
  classNameDropdownOptionDisabled: O = "lda-dropdown-option-disabled",
  classNameDropdownOptionLabel: P = "lda-dropdown-option-label",
  classNameDropdownOptionLabelFocused: N = "lda-dropdown-option-label-focused",
  classNameDropdownOptionNoMatch: z = "lda-dropdown-option-no-match",
  classNameTriggerIcon: $ = "lda-dropdown-trigger-icon",
  classNameTriggerIconInvert: V = "lda-dropdown-trigger-icon-invert",
  classNameDisabled: U,
  inputId: F
}) {
  const q = r ?? (e.length > 0 && typeof e[0] != "string" ? ["label"] : void 0), ne = Ie(
    (C, te) => {
      if (b && C.length === 0)
        return {
          label: `${y}${te}`,
          value: te,
          isNewValue: !0
        };
    },
    [b, y]
  ), v = Ri({
    options: e,
    searchOptionKeys: q,
    initialSearchQuery: Tt(n || ""),
    searchQueryProp: u,
    onSearchQueryChange: h,
    filterType: s,
    debounceDelay: l,
    dropdownOptionsHeight: c,
    offsetValue: x,
    strategy: p,
    handleGroups: w,
    groupContent: m,
    context: I,
    enhanceOptionsWithNewCreation: ne
  }), W = v.refs.reference, Y = Ie(
    (C) => n ? $e(C, q) === $e(n, q) : !1,
    [q, n]
  ), X = Ie(
    (C) => {
      C ? (o(ao(C, q)), v.setSearchQuery(Tt(C))) : n ? v.setSearchQuery(Tt(n)) : (v.setSearchQuery(""), v.setDebouncedSearchQuery("")), v.resetDropdownState();
    },
    [
      o,
      q,
      n,
      v.setDebouncedSearchQuery,
      v.setSearchQuery,
      v.resetDropdownState
    ]
  ), we = Ie(() => {
    v.showDropdownOptions && (v.setSuppressMouseEnterOptionListener(!1), v.setSearchQuery(jt(n || "")), v.resetDropdownState());
  }, [
    n,
    v.showDropdownOptions,
    v.setSearchQuery,
    v.setSuppressMouseEnterOptionListener,
    v.resetDropdownState
  ]);
  yi([v.refs.reference, v.refs.floating], we);
  const { handleKeyDown: de } = Si({
    virtuosoRef: v.virtuosoRef,
    searchQueryinputRef: W,
    matchingOptions: v.matchingOptions,
    showDropdownOptions: v.showDropdownOptions,
    setShowDropdownOptions: v.setShowDropdownOptions,
    dropdownOptionNavigationIndex: v.dropdownOptionNavigationIndex,
    setDropdownOptionNavigationIndex: v.setDropdownOptionNavigationIndex,
    handleOnSelectDropdownOption: X,
    setSuppressMouseEnterOptionListener: v.setSuppressMouseEnterOptionListener,
    onLeaveCallback: we
  }), re = Ie(
    () => !v.matchingOptions.length && /* @__PURE__ */ M.jsx(
      wi,
      {
        classNameDropdownOptionNoMatch: z,
        dropdownOptionNoMatchLabel: d
      }
    ),
    [z, d, v.matchingOptions]
  ), D = Ie(
    (C) => /* @__PURE__ */ M.jsx(
      xi,
      {
        optionId: v.getOptionId(C),
        searchQuery: v.debouncedSearchQuery,
        currentOption: v.matchingOptions[C],
        currentOptionIsSelected: Y,
        handleDropdownOptionSelect: X,
        currentOptionIndex: C,
        dropdownOptionNavigationIndex: v.dropdownOptionNavigationIndex,
        highlightMatches: !0,
        onMouseEnter: v.handleMouseEnterOptionCallback,
        classNameDropdownOption: S,
        classNameDropdownOptionFocused: R,
        classNameDropdownOptionSelected: H,
        classNameDropdownOptionLabel: P,
        classNameDropdownOptionLabelFocused: N,
        classNameDropdownOptionDisabled: O
      }
    ),
    [
      v.getOptionId,
      v.matchingOptions,
      v.debouncedSearchQuery,
      v.dropdownOptionNavigationIndex,
      v.handleMouseEnterOptionCallback,
      X,
      Y,
      S,
      R,
      P,
      N,
      H,
      O
    ]
  );
  return /* @__PURE__ */ M.jsxs(
    "div",
    {
      className: `${an} ${T} ${i ? "disabled" : ""}`,
      onKeyDown: de,
      children: [
        /* @__PURE__ */ M.jsx(
          "input",
          {
            ref: v.refs.setReference,
            type: "text",
            role: "combobox",
            "aria-expanded": v.showDropdownOptions,
            "aria-controls": v.listboxId,
            "aria-activedescendant": v.activeDescendantId,
            "aria-autocomplete": "list",
            "aria-haspopup": "listbox",
            readOnly: i,
            disabled: i,
            placeholder: Tt(n || "") || t,
            className: `${A} ${i ? U ?? "" : ""}`,
            value: v.searchQuery,
            onChange: v.handleOnChangeSearchQuery,
            "data-testid": F ?? A,
            onMouseUp: () => {
              var C;
              v.showDropdownOptions || (C = W.current) == null || C.focus();
            },
            onFocus: () => {
              v.setSearchQuery(""), v.setDebouncedSearchQuery(""), v.setShowDropdownOptions(!0);
            }
          }
        ),
        a ? /* @__PURE__ */ M.jsx(a, { toggled: v.showDropdownOptions }) : /* @__PURE__ */ M.jsx(
          pi,
          {
            className: `${$} ${v.showDropdownOptions ? "" : V}`
          }
        ),
        v.showDropdownOptions && /* @__PURE__ */ M.jsx(Or, { children: /* @__PURE__ */ M.jsx(
          "div",
          {
            ref: v.refs.setFloating,
            role: "listbox",
            id: v.listboxId,
            style: {
              ...v.floatingStyles,
              visibility: v.hasMeasuredHeight ? "visible" : "hidden"
            },
            className: `${an} ${g}`,
            children: e.length > 0 ? v.hasGroups ? /* @__PURE__ */ M.jsx(
              fi,
              {
                context: I,
                ref: v.virtuosoRef,
                style: { height: `${v.heightOfDropdownOptionsContainer}px` },
                groupCounts: v.groupCounts,
                groupContent: v.groupContentCallback,
                itemContent: D,
                totalListHeightChanged: v.handleTotalListHeightChanged,
                components: { Footer: re }
              }
            ) : /* @__PURE__ */ M.jsx(
              ui,
              {
                context: I,
                ref: v.virtuosoRef,
                style: { height: `${v.heightOfDropdownOptionsContainer}px` },
                totalCount: v.matchingOptions.length,
                itemContent: D,
                totalListHeightChanged: v.handleTotalListHeightChanged,
                components: { Footer: re }
              }
            ) : /* @__PURE__ */ M.jsx(
              bi,
              {
                classNameDropdownOptions: g,
                classNameDropdownOption: S,
                dropdownNoOptionsLabel: f
              }
            )
          }
        ) })
      ]
    }
  );
}
function yc({
  selectedOption: e,
  searchOptionKeys: t,
  values: n,
  setValues: o,
  inputRef: r,
  classNameChip: i = "multi-chip",
  classNameChipClose: s = "multi-chip-close",
  onClearOption: l
}) {
  const a = Ie(
    (c, u) => c ? c.filter(
      (h) => $e(h, t) !== $e(u, t)
    ) : [],
    [t]
  );
  return /* @__PURE__ */ M.jsxs("div", { className: i, children: [
    jt(e),
    /* @__PURE__ */ M.jsx(
      "button",
      {
        type: "button",
        className: s,
        "data-testid": `chip-remove-${$a(jt(e))}`,
        onMouseUp: () => {
          var c;
          o(a(n, e)), l == null || l(e), (c = r.current) == null || c.focus();
        },
        children: "×"
      }
    )
  ] });
}
function Sc({ onClear: e, inputRef: t, className: n, Icon: o }) {
  return /* @__PURE__ */ M.jsx(
    "button",
    {
      type: "button",
      className: n,
      "data-testid": "clear-all",
      onClick: () => {
        var r;
        e(), (r = t.current) == null || r.focus();
      },
      children: o ? /* @__PURE__ */ M.jsx(o, {}) : "×"
    }
  );
}
function Rc({
  options: e,
  placeholder: t,
  values: n,
  setValues: o,
  searchOptionKeys: r,
  disabled: i,
  filterType: s = "CONTAINS",
  debounceDelay: l = 0,
  searchQuery: a,
  onSearchQueryChange: c,
  groupContent: u = void 0,
  handleGroups: h = void 0,
  context: d,
  DropdownIcon: f,
  dropdownOptionsHeight: b = 300,
  dropdownOptionNoMatchLabel: y = "No Match",
  dropdownNoOptionsLabel: x = "No options provided",
  createNewOptionIfNoMatch: p = !0,
  offset: m = 5,
  strategy: w = "absolute",
  deleteLastChipOnBackspace: I = !1,
  classNameSearchableDropdownContainer: T = "lda-multi-dropdown-container",
  classNameSearchQueryInput: A = "lda-multi-search-query-input",
  classNameDropdownOptions: g = "lda-multi-dropdown-options",
  classNameDropdownOption: S = "lda-multi-dropdown-option",
  classNameDropdownOptionFocused: R = "lda-multi-dropdown-option-focused",
  classNameDropdownOptionLabel: H = "lda-multi-dropdown-option-label",
  classNameDropdownOptionLabelFocused: O = "lda-multi-dropdown-option-label-focused",
  classNameDropdownOptionDisabled: P = "lda-multi-dropdown-option-disabled",
  classNameDropdownOptionNoMatch: N = "lda-multi-dropdown-option-no-match",
  classNameTriggerIcon: z = "lda-multi-trigger-icon",
  classNameTriggerIconInvert: $ = "lda-multi-trigger-icon-invert",
  classNameMultiSelectedOption: V = "lda-multi-chip",
  classNameMultiSelectedOptionClose: U = "lda-multi-chip-close",
  classNameClearAll: F = "lda-multi-clear-all",
  ClearAllIcon: q,
  onClearAll: ne,
  onClearOption: v,
  classNameDisabled: W,
  inputId: Y
}) {
  const X = r ?? (e.length > 0 && typeof e[0] != "string" ? ["label"] : void 0), we = cn(null), de = Rt(() => {
    const K = /* @__PURE__ */ new Set();
    if (n)
      for (const ve of n)
        K.add($e(ve, X));
    return K;
  }, [n, X]), re = Rt(() => e.filter(
    (K) => !de.has($e(K, X))
  ), [e, de, X]), D = Ie(
    (K, ve) => {
      if (!p) return;
      const fe = ve.toLocaleLowerCase();
      let Ne = !1;
      for (const dt of K)
        if (jt(dt).toLocaleLowerCase() === fe) {
          Ne = !0;
          break;
        }
      const Xe = Ua(ve, X), St = $e(Xe, X), $t = de.has(St);
      if (!Ne && !$t)
        return {
          label: `Create New: ${ve}`,
          value: ve,
          isNewValue: !0
        };
    },
    [p, de, X]
  ), C = Ri({
    options: re,
    searchOptionKeys: X,
    initialSearchQuery: Tt(""),
    searchQueryProp: a,
    onSearchQueryChange: c,
    filterType: s,
    debounceDelay: l,
    dropdownOptionsHeight: b,
    offsetValue: m,
    strategy: w,
    handleGroups: h,
    groupContent: u,
    context: d,
    enhanceOptionsWithNewCreation: D
  }), te = Ie(
    (K) => {
      var fe;
      const ve = n != null && n.length ? n : [];
      if (K) {
        const Ne = ao(K, X), Xe = $e(Ne, X);
        de.has(Xe) || o([...ve, Ne]), C.setSearchQuery("");
      } else n ? C.setSearchQuery("") : (C.setSearchQuery(""), C.setDebouncedSearchQuery(""));
      (fe = we.current) == null || fe.focus(), C.setDropdownOptionNavigationIndex(0);
    },
    [
      o,
      X,
      n,
      C.setDebouncedSearchQuery,
      de,
      C.setSearchQuery,
      C.setDropdownOptionNavigationIndex
    ]
  ), se = Ie(() => {
    C.showDropdownOptions && (C.setSuppressMouseEnterOptionListener(!1), C.setSearchQuery(""), C.resetDropdownState());
  }, [
    C.showDropdownOptions,
    C.setSearchQuery,
    C.setSuppressMouseEnterOptionListener,
    C.resetDropdownState
  ]);
  yi([C.refs.reference, C.refs.floating], se);
  const { handleKeyDown: ue } = Si({
    virtuosoRef: C.virtuosoRef,
    searchQueryinputRef: we,
    matchingOptions: C.matchingOptions,
    showDropdownOptions: C.showDropdownOptions,
    setShowDropdownOptions: C.setShowDropdownOptions,
    dropdownOptionNavigationIndex: C.dropdownOptionNavigationIndex,
    setDropdownOptionNavigationIndex: C.setDropdownOptionNavigationIndex,
    handleOnSelectDropdownOption: te,
    setSuppressMouseEnterOptionListener: C.setSuppressMouseEnterOptionListener,
    onLeaveCallback: se,
    isMultiSelect: !0,
    values: n,
    setValues: o,
    deleteLastChipOnBackspace: I,
    onClearOption: v
  }), be = Ie(
    () => !C.matchingOptions.length && /* @__PURE__ */ M.jsx(
      wi,
      {
        classNameDropdownOptionNoMatch: N,
        dropdownOptionNoMatchLabel: y
      }
    ),
    [N, y, C.matchingOptions]
  ), ge = Ie(
    (K) => /* @__PURE__ */ M.jsx(
      xi,
      {
        optionId: C.getOptionId(K),
        searchQuery: C.debouncedSearchQuery,
        currentOption: C.matchingOptions[K],
        handleDropdownOptionSelect: te,
        currentOptionIndex: K,
        dropdownOptionNavigationIndex: C.dropdownOptionNavigationIndex,
        highlightMatches: !0,
        onMouseEnter: C.handleMouseEnterOptionCallback,
        classNameDropdownOption: S,
        classNameDropdownOptionFocused: R,
        classNameDropdownOptionLabel: H,
        classNameDropdownOptionLabelFocused: O,
        classNameDropdownOptionDisabled: P
      }
    ),
    [
      C.getOptionId,
      C.matchingOptions,
      C.debouncedSearchQuery,
      C.dropdownOptionNavigationIndex,
      C.handleMouseEnterOptionCallback,
      te,
      S,
      R,
      H,
      O,
      P
    ]
  ), ae = Rt(() => !C.showDropdownOptions && n && (n == null ? void 0 : n.length) > 0 ? "0px" : "inherit", [C.showDropdownOptions, n]);
  return /* @__PURE__ */ M.jsxs(
    "div",
    {
      ref: C.refs.setReference,
      className: `${an} ${T} ${i ? W || "disabled" : ""}`,
      onKeyDown: ue,
      onMouseUp: () => {
        var K;
        return (K = we.current) == null ? void 0 : K.focus();
      },
      children: [
        n == null ? void 0 : n.map((K) => /* @__PURE__ */ M.jsx(
          yc,
          {
            selectedOption: K,
            searchOptionKeys: X,
            values: n,
            setValues: o,
            onClearOption: v,
            inputRef: we,
            classNameChip: V,
            classNameChipClose: U
          },
          $e(K, X)
        )),
        /* @__PURE__ */ M.jsx(
          "input",
          {
            ref: we,
            type: "text",
            role: "combobox",
            "aria-expanded": C.showDropdownOptions,
            "aria-controls": C.listboxId,
            "aria-activedescendant": C.activeDescendantId,
            "aria-autocomplete": "list",
            "aria-haspopup": "listbox",
            "aria-multiselectable": !0,
            style: { height: ae },
            readOnly: i,
            disabled: i,
            placeholder: n != null && n.length ? "" : t,
            className: A,
            value: C.searchQuery,
            onChange: C.handleOnChangeSearchQuery,
            "data-testid": Y ?? A,
            onMouseUp: () => {
              var K;
              C.showDropdownOptions || (K = we.current) == null || K.focus();
            },
            onFocus: () => {
              C.setSearchQuery(""), C.setDebouncedSearchQuery(""), C.setShowDropdownOptions(!0);
            }
          }
        ),
        n && n.length > 0 && /* @__PURE__ */ M.jsx(
          Sc,
          {
            onClear: () => {
              o([]), ne == null || ne();
            },
            inputRef: we,
            className: F,
            Icon: q
          }
        ),
        (!n || n.length === 0) && (f ? /* @__PURE__ */ M.jsx(f, { toggled: C.showDropdownOptions }) : /* @__PURE__ */ M.jsx(
          pi,
          {
            className: `${z} ${C.showDropdownOptions ? "" : $}`
          }
        )),
        C.showDropdownOptions && /* @__PURE__ */ M.jsx(Or, { children: /* @__PURE__ */ M.jsx(
          "div",
          {
            ref: C.refs.setFloating,
            role: "listbox",
            id: C.listboxId,
            "aria-multiselectable": !0,
            style: {
              ...C.floatingStyles,
              visibility: C.hasMeasuredHeight ? "visible" : "hidden"
            },
            className: `${an} ${g}`,
            children: e.length > 0 ? C.hasGroups ? /* @__PURE__ */ M.jsx(
              fi,
              {
                context: d,
                ref: C.virtuosoRef,
                style: { height: `${C.heightOfDropdownOptionsContainer}px` },
                groupCounts: C.groupCounts,
                groupContent: C.groupContentCallback,
                itemContent: ge,
                totalListHeightChanged: C.handleTotalListHeightChanged,
                components: { Footer: be }
              }
            ) : /* @__PURE__ */ M.jsx(
              ui,
              {
                context: d,
                ref: C.virtuosoRef,
                style: { height: `${C.heightOfDropdownOptionsContainer}px` },
                totalCount: C.matchingOptions.length,
                itemContent: ge,
                totalListHeightChanged: C.handleTotalListHeightChanged,
                components: { Footer: be }
              }
            ) : /* @__PURE__ */ M.jsx(
              bi,
              {
                classNameDropdownOptions: g,
                classNameDropdownOption: S,
                dropdownNoOptionsLabel: x
              }
            )
          }
        ) })
      ]
    }
  );
}
export {
  Tc as SearchableDropdown,
  Rc as SearchableDropdownMulti,
  qa as useDebounce
};
