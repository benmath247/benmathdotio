var og = Object.defineProperty
var sg = (e, t, n) =>
  t in e
    ? og(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n)
var bn = (e, t, n) => (sg(e, typeof t != 'symbol' ? t + '' : t, n), n)
function lg(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n]
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in e)) {
          const s = Object.getOwnPropertyDescriptor(r, o)
          s &&
            Object.defineProperty(
              e,
              o,
              s.get ? s : { enumerable: !0, get: () => r[o] }
            )
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  )
}
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o)
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === 'childList')
        for (const i of s.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(o) {
    const s = {}
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (s.credentials = 'omit')
          : (s.credentials = 'same-origin'),
      s
    )
  }
  function r(o) {
    if (o.ep) return
    o.ep = !0
    const s = n(o)
    fetch(o.href, s)
  }
})()
function As(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var vd = { exports: {} },
  Bs = {},
  yd = { exports: {} },
  B = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uo = Symbol.for('react.element'),
  ig = Symbol.for('react.portal'),
  ag = Symbol.for('react.fragment'),
  cg = Symbol.for('react.strict_mode'),
  ug = Symbol.for('react.profiler'),
  dg = Symbol.for('react.provider'),
  fg = Symbol.for('react.context'),
  pg = Symbol.for('react.forward_ref'),
  hg = Symbol.for('react.suspense'),
  mg = Symbol.for('react.memo'),
  gg = Symbol.for('react.lazy'),
  Ec = Symbol.iterator
function vg(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Ec && e[Ec]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var xd = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  jd = Object.assign,
  wd = {}
function sr(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = wd),
    (this.updater = n || xd)
}
sr.prototype.isReactComponent = {}
sr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
sr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function Sd() {}
Sd.prototype = sr.prototype
function ca(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = wd),
    (this.updater = n || xd)
}
var ua = (ca.prototype = new Sd())
ua.constructor = ca
jd(ua, sr.prototype)
ua.isPureReactComponent = !0
var Tc = Array.isArray,
  Cd = Object.prototype.hasOwnProperty,
  da = { current: null },
  Nd = { key: !0, ref: !0, __self: !0, __source: !0 }
function kd(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (s = '' + t.key),
    t))
      Cd.call(t, r) && !Nd.hasOwnProperty(r) && (o[r] = t[r])
  var a = arguments.length - 2
  if (a === 1) o.children = n
  else if (1 < a) {
    for (var c = Array(a), u = 0; u < a; u++) c[u] = arguments[u + 2]
    o.children = c
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r])
  return { $$typeof: uo, type: e, key: s, ref: i, props: o, _owner: da.current }
}
function yg(e, t) {
  return {
    $$typeof: uo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  }
}
function fa(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === uo
}
function xg(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var bc = /\/+/g
function hl(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? xg('' + e.key)
    : t.toString(36)
}
function Ko(e, t, n, r, o) {
  var s = typeof e
  ;(s === 'undefined' || s === 'boolean') && (e = null)
  var i = !1
  if (e === null) i = !0
  else
    switch (s) {
      case 'string':
      case 'number':
        i = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case uo:
          case ig:
            i = !0
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === '' ? '.' + hl(i, 0) : r),
      Tc(o)
        ? ((n = ''),
          e != null && (n = e.replace(bc, '$&/') + '/'),
          Ko(o, t, n, '', function (u) {
            return u
          }))
        : o != null &&
          (fa(o) &&
            (o = yg(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ''
                  : ('' + o.key).replace(bc, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    )
  if (((i = 0), (r = r === '' ? '.' : r + ':'), Tc(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a]
      var c = r + hl(s, a)
      i += Ko(s, t, n, c, o)
    }
  else if (((c = vg(e)), typeof c == 'function'))
    for (e = c.call(e), a = 0; !(s = e.next()).done; )
      (s = s.value), (c = r + hl(s, a++)), (i += Ko(s, t, n, c, o))
  else if (s === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    )
  return i
}
function No(e, t, n) {
  if (e == null) return e
  var r = [],
    o = 0
  return (
    Ko(e, r, '', '', function (s) {
      return t.call(n, s, o++)
    }),
    r
  )
}
function jg(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n))
        },
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n))
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var Re = { current: null },
  Vo = { transition: null },
  wg = {
    ReactCurrentDispatcher: Re,
    ReactCurrentBatchConfig: Vo,
    ReactCurrentOwner: da,
  }
B.Children = {
  map: No,
  forEach: function (e, t, n) {
    No(
      e,
      function () {
        t.apply(this, arguments)
      },
      n
    )
  },
  count: function (e) {
    var t = 0
    return (
      No(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      No(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!fa(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      )
    return e
  },
}
B.Component = sr
B.Fragment = ag
B.Profiler = ug
B.PureComponent = ca
B.StrictMode = cg
B.Suspense = hg
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wg
B.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    )
  var r = jd({}, e.props),
    o = e.key,
    s = e.ref,
    i = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (i = da.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps
    for (c in t)
      Cd.call(t, c) &&
        !Nd.hasOwnProperty(c) &&
        (r[c] = t[c] === void 0 && a !== void 0 ? a[c] : t[c])
  }
  var c = arguments.length - 2
  if (c === 1) r.children = n
  else if (1 < c) {
    a = Array(c)
    for (var u = 0; u < c; u++) a[u] = arguments[u + 2]
    r.children = a
  }
  return { $$typeof: uo, type: e.type, key: o, ref: s, props: r, _owner: i }
}
B.createContext = function (e) {
  return (
    (e = {
      $$typeof: fg,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: dg, _context: e }),
    (e.Consumer = e)
  )
}
B.createElement = kd
B.createFactory = function (e) {
  var t = kd.bind(null, e)
  return (t.type = e), t
}
B.createRef = function () {
  return { current: null }
}
B.forwardRef = function (e) {
  return { $$typeof: pg, render: e }
}
B.isValidElement = fa
B.lazy = function (e) {
  return { $$typeof: gg, _payload: { _status: -1, _result: e }, _init: jg }
}
B.memo = function (e, t) {
  return { $$typeof: mg, type: e, compare: t === void 0 ? null : t }
}
B.startTransition = function (e) {
  var t = Vo.transition
  Vo.transition = {}
  try {
    e()
  } finally {
    Vo.transition = t
  }
}
B.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.')
}
B.useCallback = function (e, t) {
  return Re.current.useCallback(e, t)
}
B.useContext = function (e) {
  return Re.current.useContext(e)
}
B.useDebugValue = function () {}
B.useDeferredValue = function (e) {
  return Re.current.useDeferredValue(e)
}
B.useEffect = function (e, t) {
  return Re.current.useEffect(e, t)
}
B.useId = function () {
  return Re.current.useId()
}
B.useImperativeHandle = function (e, t, n) {
  return Re.current.useImperativeHandle(e, t, n)
}
B.useInsertionEffect = function (e, t) {
  return Re.current.useInsertionEffect(e, t)
}
B.useLayoutEffect = function (e, t) {
  return Re.current.useLayoutEffect(e, t)
}
B.useMemo = function (e, t) {
  return Re.current.useMemo(e, t)
}
B.useReducer = function (e, t, n) {
  return Re.current.useReducer(e, t, n)
}
B.useRef = function (e) {
  return Re.current.useRef(e)
}
B.useState = function (e) {
  return Re.current.useState(e)
}
B.useSyncExternalStore = function (e, t, n) {
  return Re.current.useSyncExternalStore(e, t, n)
}
B.useTransition = function () {
  return Re.current.useTransition()
}
B.version = '18.2.0'
yd.exports = B
var p = yd.exports
const Q = As(p),
  Sg = lg({ __proto__: null, default: Q }, [p])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cg = p,
  Ng = Symbol.for('react.element'),
  kg = Symbol.for('react.fragment'),
  Eg = Object.prototype.hasOwnProperty,
  Tg = Cg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  bg = { key: !0, ref: !0, __self: !0, __source: !0 }
function Ed(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null
  n !== void 0 && (s = '' + n),
    t.key !== void 0 && (s = '' + t.key),
    t.ref !== void 0 && (i = t.ref)
  for (r in t) Eg.call(t, r) && !bg.hasOwnProperty(r) && (o[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r])
  return { $$typeof: Ng, type: e, key: s, ref: i, props: o, _owner: Tg.current }
}
Bs.Fragment = kg
Bs.jsx = Ed
Bs.jsxs = Ed
vd.exports = Bs
var l = vd.exports,
  ql = {},
  Td = { exports: {} },
  Ve = {},
  bd = { exports: {} },
  _d = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(b, L) {
    var $ = b.length
    b.push(L)
    e: for (; 0 < $; ) {
      var H = ($ - 1) >>> 1,
        J = b[H]
      if (0 < o(J, L)) (b[H] = L), (b[$] = J), ($ = H)
      else break e
    }
  }
  function n(b) {
    return b.length === 0 ? null : b[0]
  }
  function r(b) {
    if (b.length === 0) return null
    var L = b[0],
      $ = b.pop()
    if ($ !== L) {
      b[0] = $
      e: for (var H = 0, J = b.length, xe = J >>> 1; H < xe; ) {
        var pe = 2 * (H + 1) - 1,
          ce = b[pe],
          be = pe + 1,
          vt = b[be]
        if (0 > o(ce, $))
          be < J && 0 > o(vt, ce)
            ? ((b[H] = vt), (b[be] = $), (H = be))
            : ((b[H] = ce), (b[pe] = $), (H = pe))
        else if (be < J && 0 > o(vt, $)) (b[H] = vt), (b[be] = $), (H = be)
        else break e
      }
    }
    return L
  }
  function o(b, L) {
    var $ = b.sortIndex - L.sortIndex
    return $ !== 0 ? $ : b.id - L.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var s = performance
    e.unstable_now = function () {
      return s.now()
    }
  } else {
    var i = Date,
      a = i.now()
    e.unstable_now = function () {
      return i.now() - a
    }
  }
  var c = [],
    u = [],
    f = 1,
    d = null,
    h = 3,
    j = !1,
    v = !1,
    x = !1,
    w = typeof setTimeout == 'function' ? setTimeout : null,
    m = typeof clearTimeout == 'function' ? clearTimeout : null,
    g = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function y(b) {
    for (var L = n(u); L !== null; ) {
      if (L.callback === null) r(u)
      else if (L.startTime <= b) r(u), (L.sortIndex = L.expirationTime), t(c, L)
      else break
      L = n(u)
    }
  }
  function S(b) {
    if (((x = !1), y(b), !v))
      if (n(c) !== null) (v = !0), Le(N)
      else {
        var L = n(u)
        L !== null && Be(S, L.startTime - b)
      }
  }
  function N(b, L) {
    ;(v = !1), x && ((x = !1), m(_), (_ = -1)), (j = !0)
    var $ = h
    try {
      for (
        y(L), d = n(c);
        d !== null && (!(d.expirationTime > L) || (b && !ae()));

      ) {
        var H = d.callback
        if (typeof H == 'function') {
          ;(d.callback = null), (h = d.priorityLevel)
          var J = H(d.expirationTime <= L)
          ;(L = e.unstable_now()),
            typeof J == 'function' ? (d.callback = J) : d === n(c) && r(c),
            y(L)
        } else r(c)
        d = n(c)
      }
      if (d !== null) var xe = !0
      else {
        var pe = n(u)
        pe !== null && Be(S, pe.startTime - L), (xe = !1)
      }
      return xe
    } finally {
      ;(d = null), (h = $), (j = !1)
    }
  }
  var C = !1,
    E = null,
    _ = -1,
    M = 5,
    O = -1
  function ae() {
    return !(e.unstable_now() - O < M)
  }
  function V() {
    if (E !== null) {
      var b = e.unstable_now()
      O = b
      var L = !0
      try {
        L = E(!0, b)
      } finally {
        L ? G() : ((C = !1), (E = null))
      }
    } else C = !1
  }
  var G
  if (typeof g == 'function')
    G = function () {
      g(V)
    }
  else if (typeof MessageChannel < 'u') {
    var X = new MessageChannel(),
      ye = X.port2
    ;(X.port1.onmessage = V),
      (G = function () {
        ye.postMessage(null)
      })
  } else
    G = function () {
      w(V, 0)
    }
  function Le(b) {
    ;(E = b), C || ((C = !0), G())
  }
  function Be(b, L) {
    _ = w(function () {
      b(e.unstable_now())
    }, L)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (b) {
      b.callback = null
    }),
    (e.unstable_continueExecution = function () {
      v || j || ((v = !0), Le(N))
    }),
    (e.unstable_forceFrameRate = function (b) {
      0 > b || 125 < b
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (M = 0 < b ? Math.floor(1e3 / b) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c)
    }),
    (e.unstable_next = function (b) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var L = 3
          break
        default:
          L = h
      }
      var $ = h
      h = L
      try {
        return b()
      } finally {
        h = $
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (b, L) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          b = 3
      }
      var $ = h
      h = b
      try {
        return L()
      } finally {
        h = $
      }
    }),
    (e.unstable_scheduleCallback = function (b, L, $) {
      var H = e.unstable_now()
      switch (
        (typeof $ == 'object' && $ !== null
          ? (($ = $.delay), ($ = typeof $ == 'number' && 0 < $ ? H + $ : H))
          : ($ = H),
        b)
      ) {
        case 1:
          var J = -1
          break
        case 2:
          J = 250
          break
        case 5:
          J = 1073741823
          break
        case 4:
          J = 1e4
          break
        default:
          J = 5e3
      }
      return (
        (J = $ + J),
        (b = {
          id: f++,
          callback: L,
          priorityLevel: b,
          startTime: $,
          expirationTime: J,
          sortIndex: -1,
        }),
        $ > H
          ? ((b.sortIndex = $),
            t(u, b),
            n(c) === null &&
              b === n(u) &&
              (x ? (m(_), (_ = -1)) : (x = !0), Be(S, $ - H)))
          : ((b.sortIndex = J), t(c, b), v || j || ((v = !0), Le(N))),
        b
      )
    }),
    (e.unstable_shouldYield = ae),
    (e.unstable_wrapCallback = function (b) {
      var L = h
      return function () {
        var $ = h
        h = L
        try {
          return b.apply(this, arguments)
        } finally {
          h = $
        }
      }
    })
})(_d)
bd.exports = _d
var _g = bd.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pd = p,
  Ke = _g
function T(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var Rd = new Set(),
  Ur = {}
function wn(e, t) {
  Yn(e, t), Yn(e + 'Capture', t)
}
function Yn(e, t) {
  for (Ur[e] = t, e = 0; e < t.length; e++) Rd.add(t[e])
}
var Et = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Zl = Object.prototype.hasOwnProperty,
  Pg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  _c = {},
  Pc = {}
function Rg(e) {
  return Zl.call(Pc, e)
    ? !0
    : Zl.call(_c, e)
      ? !1
      : Pg.test(e)
        ? (Pc[e] = !0)
        : ((_c[e] = !0), !1)
}
function Og(e, t, n, r) {
  if (n !== null && n.type === 0) return !1
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function Lg(e, t, n, r) {
  if (t === null || typeof t > 'u' || Og(e, t, n, r)) return !0
  if (r) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function Oe(e, t, n, r, o, s, i) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = i)
}
var Se = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Se[e] = new Oe(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0]
  Se[t] = new Oe(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Se[e] = new Oe(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  Se[e] = new Oe(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Se[e] = new Oe(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Se[e] = new Oe(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  Se[e] = new Oe(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Se[e] = new Oe(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  Se[e] = new Oe(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var pa = /[\-:]([a-z])/g
function ha(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(pa, ha)
    Se[t] = new Oe(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(pa, ha)
    Se[t] = new Oe(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(pa, ha)
  Se[t] = new Oe(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  Se[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
Se.xlinkHref = new Oe(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Se[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function ma(e, t, n, r) {
  var o = Se.hasOwnProperty(t) ? Se[t] : null
  ;(o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Lg(t, n, o, r) && (n = null),
    r || o === null
      ? Rg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Rt = Pd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ko = Symbol.for('react.element'),
  On = Symbol.for('react.portal'),
  Ln = Symbol.for('react.fragment'),
  ga = Symbol.for('react.strict_mode'),
  ei = Symbol.for('react.profiler'),
  Od = Symbol.for('react.provider'),
  Ld = Symbol.for('react.context'),
  va = Symbol.for('react.forward_ref'),
  ti = Symbol.for('react.suspense'),
  ni = Symbol.for('react.suspense_list'),
  ya = Symbol.for('react.memo'),
  Mt = Symbol.for('react.lazy'),
  Dd = Symbol.for('react.offscreen'),
  Rc = Symbol.iterator
function vr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Rc && e[Rc]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var oe = Object.assign,
  ml
function br(e) {
  if (ml === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      ml = (t && t[1]) || ''
    }
  return (
    `
` +
    ml +
    e
  )
}
var gl = !1
function vl(e, t) {
  if (!e || gl) return ''
  gl = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error()
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (u) {
          var r = u
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (u) {
          r = u
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (u) {
        r = u
      }
      e()
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var o = u.stack.split(`
`),
          s = r.stack.split(`
`),
          i = o.length - 1,
          a = s.length - 1;
        1 <= i && 0 <= a && o[i] !== s[a];

      )
        a--
      for (; 1 <= i && 0 <= a; i--, a--)
        if (o[i] !== s[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || o[i] !== s[a])) {
                var c =
                  `
` + o[i].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    c.includes('<anonymous>') &&
                    (c = c.replace('<anonymous>', e.displayName)),
                  c
                )
              }
            while (1 <= i && 0 <= a)
          break
        }
    }
  } finally {
    ;(gl = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? br(e) : ''
}
function Dg(e) {
  switch (e.tag) {
    case 5:
      return br(e.type)
    case 16:
      return br('Lazy')
    case 13:
      return br('Suspense')
    case 19:
      return br('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = vl(e.type, !1)), e
    case 11:
      return (e = vl(e.type.render, !1)), e
    case 1:
      return (e = vl(e.type, !0)), e
    default:
      return ''
  }
}
function ri(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case Ln:
      return 'Fragment'
    case On:
      return 'Portal'
    case ei:
      return 'Profiler'
    case ga:
      return 'StrictMode'
    case ti:
      return 'Suspense'
    case ni:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Ld:
        return (e.displayName || 'Context') + '.Consumer'
      case Od:
        return (e._context.displayName || 'Context') + '.Provider'
      case va:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case ya:
        return (
          (t = e.displayName || null), t !== null ? t : ri(e.type) || 'Memo'
        )
      case Mt:
        ;(t = e._payload), (e = e._init)
        try {
          return ri(e(t))
        } catch {}
    }
  return null
}
function Mg(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (t.displayName || 'Context') + '.Consumer'
    case 10:
      return (t._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return t
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return ri(t)
    case 8:
      return t === ga ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null
      if (typeof t == 'string') return t
  }
  return null
}
function qt(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e
    case 'object':
      return e
    default:
      return ''
  }
}
function Md(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function $g(e) {
  var t = Md(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      s = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this)
        },
        set: function (i) {
          ;(r = '' + i), s.call(this, i)
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r
        },
        setValue: function (i) {
          r = '' + i
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        },
      }
    )
  }
}
function Eo(e) {
  e._valueTracker || (e._valueTracker = $g(e))
}
function $d(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = Md(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function ls(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function oi(e, t) {
  var n = t.checked
  return oe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  })
}
function Oc(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = qt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    })
}
function Fd(e, t) {
  ;(t = t.checked), t != null && ma(e, 'checked', t, !1)
}
function si(e, t) {
  Fd(e, t)
  var n = qt(t.value),
    r = t.type
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n)
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value')
    return
  }
  t.hasOwnProperty('value')
    ? li(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && li(e, t.type, qt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function Lc(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return
    ;(t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t)
  }
  ;(n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n)
}
function li(e, t, n) {
  ;(t !== 'number' || ls(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var _r = Array.isArray
function Kn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + qt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ;(e[o].selected = !0), r && (e[o].defaultSelected = !0)
        return
      }
      t !== null || e[o].disabled || (t = e[o])
    }
    t !== null && (t.selected = !0)
  }
}
function ii(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(T(91))
  return oe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function Dc(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(T(92))
      if (_r(n)) {
        if (1 < n.length) throw Error(T(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: qt(n) }
}
function Id(e, t) {
  var n = qt(t.value),
    r = qt(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function Mc(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function Ad(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function ai(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Ad(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e
}
var To,
  Bd = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t
    else {
      for (
        To = To || document.createElement('div'),
          To.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = To.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function Hr(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var Lr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Fg = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(Lr).forEach(function (e) {
  Fg.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Lr[t] = Lr[e])
  })
})
function zd(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Lr.hasOwnProperty(e) && Lr[e])
      ? ('' + t).trim()
      : t + 'px'
}
function Ud(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = zd(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o)
    }
}
var Ig = oe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
)
function ci(e, t) {
  if (t) {
    if (Ig[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(T(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(T(60))
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(T(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(T(62))
  }
}
function ui(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var di = null
function xa(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var fi = null,
  Vn = null,
  Gn = null
function $c(e) {
  if ((e = ho(e))) {
    if (typeof fi != 'function') throw Error(T(280))
    var t = e.stateNode
    t && ((t = Ks(t)), fi(e.stateNode, e.type, t))
  }
}
function Hd(e) {
  Vn ? (Gn ? Gn.push(e) : (Gn = [e])) : (Vn = e)
}
function Wd() {
  if (Vn) {
    var e = Vn,
      t = Gn
    if (((Gn = Vn = null), $c(e), t)) for (e = 0; e < t.length; e++) $c(t[e])
  }
}
function Kd(e, t) {
  return e(t)
}
function Vd() {}
var yl = !1
function Gd(e, t, n) {
  if (yl) return e(t, n)
  yl = !0
  try {
    return Kd(e, t, n)
  } finally {
    ;(yl = !1), (Vn !== null || Gn !== null) && (Vd(), Wd())
  }
}
function Wr(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = Ks(n)
  if (r === null) return null
  n = r[t]
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != 'function') throw Error(T(231, t, typeof n))
  return n
}
var pi = !1
if (Et)
  try {
    var yr = {}
    Object.defineProperty(yr, 'passive', {
      get: function () {
        pi = !0
      },
    }),
      window.addEventListener('test', yr, yr),
      window.removeEventListener('test', yr, yr)
  } catch {
    pi = !1
  }
function Ag(e, t, n, r, o, s, i, a, c) {
  var u = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, u)
  } catch (f) {
    this.onError(f)
  }
}
var Dr = !1,
  is = null,
  as = !1,
  hi = null,
  Bg = {
    onError: function (e) {
      ;(Dr = !0), (is = e)
    },
  }
function zg(e, t, n, r, o, s, i, a, c) {
  ;(Dr = !1), (is = null), Ag.apply(Bg, arguments)
}
function Ug(e, t, n, r, o, s, i, a, c) {
  if ((zg.apply(this, arguments), Dr)) {
    if (Dr) {
      var u = is
      ;(Dr = !1), (is = null)
    } else throw Error(T(198))
    as || ((as = !0), (hi = u))
  }
}
function Sn(e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? n : null
}
function Jd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated
  }
  return null
}
function Fc(e) {
  if (Sn(e) !== e) throw Error(T(188))
}
function Hg(e) {
  var t = e.alternate
  if (!t) {
    if (((t = Sn(e)), t === null)) throw Error(T(188))
    return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
    var o = n.return
    if (o === null) break
    var s = o.alternate
    if (s === null) {
      if (((r = o.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (o.child === s.child) {
      for (s = o.child; s; ) {
        if (s === n) return Fc(o), e
        if (s === r) return Fc(o), t
        s = s.sibling
      }
      throw Error(T(188))
    }
    if (n.return !== r.return) (n = o), (r = s)
    else {
      for (var i = !1, a = o.child; a; ) {
        if (a === n) {
          ;(i = !0), (n = o), (r = s)
          break
        }
        if (a === r) {
          ;(i = !0), (r = o), (n = s)
          break
        }
        a = a.sibling
      }
      if (!i) {
        for (a = s.child; a; ) {
          if (a === n) {
            ;(i = !0), (n = s), (r = o)
            break
          }
          if (a === r) {
            ;(i = !0), (r = s), (n = o)
            break
          }
          a = a.sibling
        }
        if (!i) throw Error(T(189))
      }
    }
    if (n.alternate !== r) throw Error(T(190))
  }
  if (n.tag !== 3) throw Error(T(188))
  return n.stateNode.current === n ? e : t
}
function Qd(e) {
  return (e = Hg(e)), e !== null ? Xd(e) : null
}
function Xd(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = Xd(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var Yd = Ke.unstable_scheduleCallback,
  Ic = Ke.unstable_cancelCallback,
  Wg = Ke.unstable_shouldYield,
  Kg = Ke.unstable_requestPaint,
  ie = Ke.unstable_now,
  Vg = Ke.unstable_getCurrentPriorityLevel,
  ja = Ke.unstable_ImmediatePriority,
  qd = Ke.unstable_UserBlockingPriority,
  cs = Ke.unstable_NormalPriority,
  Gg = Ke.unstable_LowPriority,
  Zd = Ke.unstable_IdlePriority,
  zs = null,
  ht = null
function Jg(e) {
  if (ht && typeof ht.onCommitFiberRoot == 'function')
    try {
      ht.onCommitFiberRoot(zs, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var lt = Math.clz32 ? Math.clz32 : Yg,
  Qg = Math.log,
  Xg = Math.LN2
function Yg(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Qg(e) / Xg) | 0)) | 0
}
var bo = 64,
  _o = 4194304
function Pr(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function us(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    o = e.suspendedLanes,
    s = e.pingedLanes,
    i = n & 268435455
  if (i !== 0) {
    var a = i & ~o
    a !== 0 ? (r = Pr(a)) : ((s &= i), s !== 0 && (r = Pr(s)))
  } else (i = n & ~o), i !== 0 ? (r = Pr(i)) : s !== 0 && (r = Pr(s))
  if (r === 0) return 0
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (s = t & -t), o >= s || (o === 16 && (s & 4194240) !== 0))
  )
    return t
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - lt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o)
  return r
}
function qg(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function Zg(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var i = 31 - lt(s),
      a = 1 << i,
      c = o[i]
    c === -1
      ? (!(a & n) || a & r) && (o[i] = qg(a, t))
      : c <= t && (e.expiredLanes |= a),
      (s &= ~a)
  }
}
function mi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function ef() {
  var e = bo
  return (bo <<= 1), !(bo & 4194240) && (bo = 64), e
}
function xl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function fo(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - lt(t)),
    (e[t] = n)
}
function ev(e, t) {
  var n = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var r = e.eventTimes
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - lt(n),
      s = 1 << o
    ;(t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~s)
  }
}
function wa(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - lt(n),
      o = 1 << r
    ;(o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o)
  }
}
var K = 0
function tf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var nf,
  Sa,
  rf,
  of,
  sf,
  gi = !1,
  Po = [],
  Ht = null,
  Wt = null,
  Kt = null,
  Kr = new Map(),
  Vr = new Map(),
  It = [],
  tv =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function Ac(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Ht = null
      break
    case 'dragenter':
    case 'dragleave':
      Wt = null
      break
    case 'mouseover':
    case 'mouseout':
      Kt = null
      break
    case 'pointerover':
    case 'pointerout':
      Kr.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      Vr.delete(t.pointerId)
  }
}
function xr(e, t, n, r, o, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o],
      }),
      t !== null && ((t = ho(t)), t !== null && Sa(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e)
}
function nv(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (Ht = xr(Ht, e, t, n, r, o)), !0
    case 'dragenter':
      return (Wt = xr(Wt, e, t, n, r, o)), !0
    case 'mouseover':
      return (Kt = xr(Kt, e, t, n, r, o)), !0
    case 'pointerover':
      var s = o.pointerId
      return Kr.set(s, xr(Kr.get(s) || null, e, t, n, r, o)), !0
    case 'gotpointercapture':
      return (
        (s = o.pointerId), Vr.set(s, xr(Vr.get(s) || null, e, t, n, r, o)), !0
      )
  }
  return !1
}
function lf(e) {
  var t = un(e.target)
  if (t !== null) {
    var n = Sn(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Jd(n)), t !== null)) {
          ;(e.blockedOn = t),
            sf(e.priority, function () {
              rf(n)
            })
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function Go(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = vi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(di = r), n.target.dispatchEvent(r), (di = null)
    } else return (t = ho(n)), t !== null && Sa(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function Bc(e, t, n) {
  Go(e) && n.delete(t)
}
function rv() {
  ;(gi = !1),
    Ht !== null && Go(Ht) && (Ht = null),
    Wt !== null && Go(Wt) && (Wt = null),
    Kt !== null && Go(Kt) && (Kt = null),
    Kr.forEach(Bc),
    Vr.forEach(Bc)
}
function jr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    gi ||
      ((gi = !0), Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority, rv)))
}
function Gr(e) {
  function t(o) {
    return jr(o, e)
  }
  if (0 < Po.length) {
    jr(Po[0], e)
    for (var n = 1; n < Po.length; n++) {
      var r = Po[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    Ht !== null && jr(Ht, e),
      Wt !== null && jr(Wt, e),
      Kt !== null && jr(Kt, e),
      Kr.forEach(t),
      Vr.forEach(t),
      n = 0;
    n < It.length;
    n++
  )
    (r = It[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < It.length && ((n = It[0]), n.blockedOn === null); )
    lf(n), n.blockedOn === null && It.shift()
}
var Jn = Rt.ReactCurrentBatchConfig,
  ds = !0
function ov(e, t, n, r) {
  var o = K,
    s = Jn.transition
  Jn.transition = null
  try {
    ;(K = 1), Ca(e, t, n, r)
  } finally {
    ;(K = o), (Jn.transition = s)
  }
}
function sv(e, t, n, r) {
  var o = K,
    s = Jn.transition
  Jn.transition = null
  try {
    ;(K = 4), Ca(e, t, n, r)
  } finally {
    ;(K = o), (Jn.transition = s)
  }
}
function Ca(e, t, n, r) {
  if (ds) {
    var o = vi(e, t, n, r)
    if (o === null) _l(e, t, r, fs, n), Ac(e, r)
    else if (nv(o, e, t, n, r)) r.stopPropagation()
    else if ((Ac(e, r), t & 4 && -1 < tv.indexOf(e))) {
      for (; o !== null; ) {
        var s = ho(o)
        if (
          (s !== null && nf(s),
          (s = vi(e, t, n, r)),
          s === null && _l(e, t, r, fs, n),
          s === o)
        )
          break
        o = s
      }
      o !== null && r.stopPropagation()
    } else _l(e, t, r, null, n)
  }
}
var fs = null
function vi(e, t, n, r) {
  if (((fs = null), (e = xa(r)), (e = un(e)), e !== null))
    if (((t = Sn(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = Jd(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (fs = e), null
}
function af(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (Vg()) {
        case ja:
          return 1
        case qd:
          return 4
        case cs:
        case Gg:
          return 16
        case Zd:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var Bt = null,
  Na = null,
  Jo = null
function cf() {
  if (Jo) return Jo
  var e,
    t = Na,
    n = t.length,
    r,
    o = 'value' in Bt ? Bt.value : Bt.textContent,
    s = o.length
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e
  for (r = 1; r <= i && t[n - r] === o[s - r]; r++);
  return (Jo = o.slice(e, 1 < r ? 1 - r : void 0))
}
function Qo(e) {
  var t = e.keyCode
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function Ro() {
  return !0
}
function zc() {
  return !1
}
function Ge(e) {
  function t(n, r, o, s, i) {
    ;(this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = i),
      (this.currentTarget = null)
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]))
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Ro
        : zc),
      (this.isPropagationStopped = zc),
      this
    )
  }
  return (
    oe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Ro))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ro))
      },
      persist: function () {},
      isPersistent: Ro,
    }),
    t
  )
}
var lr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ka = Ge(lr),
  po = oe({}, lr, { view: 0, detail: 0 }),
  lv = Ge(po),
  jl,
  wl,
  wr,
  Us = oe({}, po, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ea,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== wr &&
            (wr && e.type === 'mousemove'
              ? ((jl = e.screenX - wr.screenX), (wl = e.screenY - wr.screenY))
              : (wl = jl = 0),
            (wr = e)),
          jl)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : wl
    },
  }),
  Uc = Ge(Us),
  iv = oe({}, Us, { dataTransfer: 0 }),
  av = Ge(iv),
  cv = oe({}, po, { relatedTarget: 0 }),
  Sl = Ge(cv),
  uv = oe({}, lr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  dv = Ge(uv),
  fv = oe({}, lr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    },
  }),
  pv = Ge(fv),
  hv = oe({}, lr, { data: 0 }),
  Hc = Ge(hv),
  mv = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  gv = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  vv = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function yv(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = vv[e]) ? !!t[e] : !1
}
function Ea() {
  return yv
}
var xv = oe({}, po, {
    key: function (e) {
      if (e.key) {
        var t = mv[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = Qo(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? gv[e.keyCode] || 'Unidentified'
          : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ea,
    charCode: function (e) {
      return e.type === 'keypress' ? Qo(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Qo(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0
    },
  }),
  jv = Ge(xv),
  wv = oe({}, Us, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Wc = Ge(wv),
  Sv = oe({}, po, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ea,
  }),
  Cv = Ge(Sv),
  Nv = oe({}, lr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  kv = Ge(Nv),
  Ev = oe({}, Us, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Tv = Ge(Ev),
  bv = [9, 13, 27, 32],
  Ta = Et && 'CompositionEvent' in window,
  Mr = null
Et && 'documentMode' in document && (Mr = document.documentMode)
var _v = Et && 'TextEvent' in window && !Mr,
  uf = Et && (!Ta || (Mr && 8 < Mr && 11 >= Mr)),
  Kc = ' ',
  Vc = !1
function df(e, t) {
  switch (e) {
    case 'keyup':
      return bv.indexOf(t.keyCode) !== -1
    case 'keydown':
      return t.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function ff(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var Dn = !1
function Pv(e, t) {
  switch (e) {
    case 'compositionend':
      return ff(t)
    case 'keypress':
      return t.which !== 32 ? null : ((Vc = !0), Kc)
    case 'textInput':
      return (e = t.data), e === Kc && Vc ? null : e
    default:
      return null
  }
}
function Rv(e, t) {
  if (Dn)
    return e === 'compositionend' || (!Ta && df(e, t))
      ? ((e = cf()), (Jo = Na = Bt = null), (Dn = !1), e)
      : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case 'compositionend':
      return uf && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var Ov = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
}
function Gc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!Ov[e.type] : t === 'textarea'
}
function pf(e, t, n, r) {
  Hd(r),
    (t = ps(t, 'onChange')),
    0 < t.length &&
      ((n = new ka('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }))
}
var $r = null,
  Jr = null
function Lv(e) {
  Nf(e, 0)
}
function Hs(e) {
  var t = Fn(e)
  if ($d(t)) return e
}
function Dv(e, t) {
  if (e === 'change') return t
}
var hf = !1
if (Et) {
  var Cl
  if (Et) {
    var Nl = 'oninput' in document
    if (!Nl) {
      var Jc = document.createElement('div')
      Jc.setAttribute('oninput', 'return;'),
        (Nl = typeof Jc.oninput == 'function')
    }
    Cl = Nl
  } else Cl = !1
  hf = Cl && (!document.documentMode || 9 < document.documentMode)
}
function Qc() {
  $r && ($r.detachEvent('onpropertychange', mf), (Jr = $r = null))
}
function mf(e) {
  if (e.propertyName === 'value' && Hs(Jr)) {
    var t = []
    pf(t, Jr, e, xa(e)), Gd(Lv, t)
  }
}
function Mv(e, t, n) {
  e === 'focusin'
    ? (Qc(), ($r = t), (Jr = n), $r.attachEvent('onpropertychange', mf))
    : e === 'focusout' && Qc()
}
function $v(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Hs(Jr)
}
function Fv(e, t) {
  if (e === 'click') return Hs(t)
}
function Iv(e, t) {
  if (e === 'input' || e === 'change') return Hs(t)
}
function Av(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var at = typeof Object.is == 'function' ? Object.is : Av
function Qr(e, t) {
  if (at(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var o = n[r]
    if (!Zl.call(t, o) || !at(e[o], t[o])) return !1
  }
  return !0
}
function Xc(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function Yc(e, t) {
  var n = Xc(e)
  e = 0
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e }
      e = r
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = Xc(n)
  }
}
function gf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? gf(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1
}
function vf() {
  for (var e = window, t = ls(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = ls(e.document)
  }
  return t
}
function ba(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  )
}
function Bv(e) {
  var t = vf(),
    n = e.focusedElem,
    r = e.selectionRange
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    gf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ba(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection()
        var o = n.textContent.length,
          s = Math.min(r.start, o)
        ;(r = r.end === void 0 ? s : Math.min(r.end, o)),
          !e.extend && s > r && ((o = r), (r = s), (s = o)),
          (o = Yc(n, s))
        var i = Yc(n, r)
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var zv = Et && 'documentMode' in document && 11 >= document.documentMode,
  Mn = null,
  yi = null,
  Fr = null,
  xi = !1
function qc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  xi ||
    Mn == null ||
    Mn !== ls(r) ||
    ((r = Mn),
    'selectionStart' in r && ba(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Fr && Qr(Fr, r)) ||
      ((Fr = r),
      (r = ps(yi, 'onSelect')),
      0 < r.length &&
        ((t = new ka('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Mn))))
}
function Oo(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var $n = {
    animationend: Oo('Animation', 'AnimationEnd'),
    animationiteration: Oo('Animation', 'AnimationIteration'),
    animationstart: Oo('Animation', 'AnimationStart'),
    transitionend: Oo('Transition', 'TransitionEnd'),
  },
  kl = {},
  yf = {}
Et &&
  ((yf = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete $n.animationend.animation,
    delete $n.animationiteration.animation,
    delete $n.animationstart.animation),
  'TransitionEvent' in window || delete $n.transitionend.transition)
function Ws(e) {
  if (kl[e]) return kl[e]
  if (!$n[e]) return e
  var t = $n[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in yf) return (kl[e] = t[n])
  return e
}
var xf = Ws('animationend'),
  jf = Ws('animationiteration'),
  wf = Ws('animationstart'),
  Sf = Ws('transitionend'),
  Cf = new Map(),
  Zc =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function en(e, t) {
  Cf.set(e, t), wn(t, [e])
}
for (var El = 0; El < Zc.length; El++) {
  var Tl = Zc[El],
    Uv = Tl.toLowerCase(),
    Hv = Tl[0].toUpperCase() + Tl.slice(1)
  en(Uv, 'on' + Hv)
}
en(xf, 'onAnimationEnd')
en(jf, 'onAnimationIteration')
en(wf, 'onAnimationStart')
en('dblclick', 'onDoubleClick')
en('focusin', 'onFocus')
en('focusout', 'onBlur')
en(Sf, 'onTransitionEnd')
Yn('onMouseEnter', ['mouseout', 'mouseover'])
Yn('onMouseLeave', ['mouseout', 'mouseover'])
Yn('onPointerEnter', ['pointerout', 'pointerover'])
Yn('onPointerLeave', ['pointerout', 'pointerover'])
wn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
)
wn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
)
wn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
wn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
wn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
wn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var Rr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Wv = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Rr))
function eu(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), Ug(r, t, void 0, e), (e.currentTarget = null)
}
function Nf(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event
    r = r.listeners
    e: {
      var s = void 0
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            c = a.instance,
            u = a.currentTarget
          if (((a = a.listener), c !== s && o.isPropagationStopped())) break e
          eu(o, a, u), (s = c)
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (c = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            c !== s && o.isPropagationStopped())
          )
            break e
          eu(o, a, u), (s = c)
        }
    }
  }
  if (as) throw ((e = hi), (as = !1), (hi = null), e)
}
function q(e, t) {
  var n = t[Ni]
  n === void 0 && (n = t[Ni] = new Set())
  var r = e + '__bubble'
  n.has(r) || (kf(t, e, 2, !1), n.add(r))
}
function bl(e, t, n) {
  var r = 0
  t && (r |= 4), kf(n, e, r, t)
}
var Lo = '_reactListening' + Math.random().toString(36).slice(2)
function Xr(e) {
  if (!e[Lo]) {
    ;(e[Lo] = !0),
      Rd.forEach(function (n) {
        n !== 'selectionchange' && (Wv.has(n) || bl(n, !1, e), bl(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[Lo] || ((t[Lo] = !0), bl('selectionchange', !1, t))
  }
}
function kf(e, t, n, r) {
  switch (af(t)) {
    case 1:
      var o = ov
      break
    case 4:
      o = sv
      break
    default:
      o = Ca
  }
  ;(n = o.bind(null, t, n, e)),
    (o = void 0),
    !pi ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1)
}
function _l(e, t, n, r, o) {
  var s = r
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var i = r.tag
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var c = i.tag
            if (
              (c === 3 || c === 4) &&
              ((c = i.stateNode.containerInfo),
              c === o || (c.nodeType === 8 && c.parentNode === o))
            )
              return
            i = i.return
          }
        for (; a !== null; ) {
          if (((i = un(a)), i === null)) return
          if (((c = i.tag), c === 5 || c === 6)) {
            r = s = i
            continue e
          }
          a = a.parentNode
        }
      }
      r = r.return
    }
  Gd(function () {
    var u = s,
      f = xa(n),
      d = []
    e: {
      var h = Cf.get(e)
      if (h !== void 0) {
        var j = ka,
          v = e
        switch (e) {
          case 'keypress':
            if (Qo(n) === 0) break e
          case 'keydown':
          case 'keyup':
            j = jv
            break
          case 'focusin':
            ;(v = 'focus'), (j = Sl)
            break
          case 'focusout':
            ;(v = 'blur'), (j = Sl)
            break
          case 'beforeblur':
          case 'afterblur':
            j = Sl
            break
          case 'click':
            if (n.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            j = Uc
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            j = av
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            j = Cv
            break
          case xf:
          case jf:
          case wf:
            j = dv
            break
          case Sf:
            j = kv
            break
          case 'scroll':
            j = lv
            break
          case 'wheel':
            j = Tv
            break
          case 'copy':
          case 'cut':
          case 'paste':
            j = pv
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            j = Wc
        }
        var x = (t & 4) !== 0,
          w = !x && e === 'scroll',
          m = x ? (h !== null ? h + 'Capture' : null) : h
        x = []
        for (var g = u, y; g !== null; ) {
          y = g
          var S = y.stateNode
          if (
            (y.tag === 5 &&
              S !== null &&
              ((y = S),
              m !== null && ((S = Wr(g, m)), S != null && x.push(Yr(g, S, y)))),
            w)
          )
            break
          g = g.return
        }
        0 < x.length &&
          ((h = new j(h, v, null, n, f)), d.push({ event: h, listeners: x }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === 'mouseover' || e === 'pointerover'),
          (j = e === 'mouseout' || e === 'pointerout'),
          h &&
            n !== di &&
            (v = n.relatedTarget || n.fromElement) &&
            (un(v) || v[Tt]))
        )
          break e
        if (
          (j || h) &&
          ((h =
            f.window === f
              ? f
              : (h = f.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
          j
            ? ((v = n.relatedTarget || n.toElement),
              (j = u),
              (v = v ? un(v) : null),
              v !== null &&
                ((w = Sn(v)), v !== w || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((j = null), (v = u)),
          j !== v)
        ) {
          if (
            ((x = Uc),
            (S = 'onMouseLeave'),
            (m = 'onMouseEnter'),
            (g = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((x = Wc),
              (S = 'onPointerLeave'),
              (m = 'onPointerEnter'),
              (g = 'pointer')),
            (w = j == null ? h : Fn(j)),
            (y = v == null ? h : Fn(v)),
            (h = new x(S, g + 'leave', j, n, f)),
            (h.target = w),
            (h.relatedTarget = y),
            (S = null),
            un(f) === u &&
              ((x = new x(m, g + 'enter', v, n, f)),
              (x.target = y),
              (x.relatedTarget = w),
              (S = x)),
            (w = S),
            j && v)
          )
            t: {
              for (x = j, m = v, g = 0, y = x; y; y = _n(y)) g++
              for (y = 0, S = m; S; S = _n(S)) y++
              for (; 0 < g - y; ) (x = _n(x)), g--
              for (; 0 < y - g; ) (m = _n(m)), y--
              for (; g--; ) {
                if (x === m || (m !== null && x === m.alternate)) break t
                ;(x = _n(x)), (m = _n(m))
              }
              x = null
            }
          else x = null
          j !== null && tu(d, h, j, x, !1),
            v !== null && w !== null && tu(d, w, v, x, !0)
        }
      }
      e: {
        if (
          ((h = u ? Fn(u) : window),
          (j = h.nodeName && h.nodeName.toLowerCase()),
          j === 'select' || (j === 'input' && h.type === 'file'))
        )
          var N = Dv
        else if (Gc(h))
          if (hf) N = Iv
          else {
            N = $v
            var C = Mv
          }
        else
          (j = h.nodeName) &&
            j.toLowerCase() === 'input' &&
            (h.type === 'checkbox' || h.type === 'radio') &&
            (N = Fv)
        if (N && (N = N(e, u))) {
          pf(d, N, n, f)
          break e
        }
        C && C(e, h, u),
          e === 'focusout' &&
            (C = h._wrapperState) &&
            C.controlled &&
            h.type === 'number' &&
            li(h, 'number', h.value)
      }
      switch (((C = u ? Fn(u) : window), e)) {
        case 'focusin':
          ;(Gc(C) || C.contentEditable === 'true') &&
            ((Mn = C), (yi = u), (Fr = null))
          break
        case 'focusout':
          Fr = yi = Mn = null
          break
        case 'mousedown':
          xi = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(xi = !1), qc(d, n, f)
          break
        case 'selectionchange':
          if (zv) break
        case 'keydown':
        case 'keyup':
          qc(d, n, f)
      }
      var E
      if (Ta)
        e: {
          switch (e) {
            case 'compositionstart':
              var _ = 'onCompositionStart'
              break e
            case 'compositionend':
              _ = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              _ = 'onCompositionUpdate'
              break e
          }
          _ = void 0
        }
      else
        Dn
          ? df(e, n) && (_ = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (_ = 'onCompositionStart')
      _ &&
        (uf &&
          n.locale !== 'ko' &&
          (Dn || _ !== 'onCompositionStart'
            ? _ === 'onCompositionEnd' && Dn && (E = cf())
            : ((Bt = f),
              (Na = 'value' in Bt ? Bt.value : Bt.textContent),
              (Dn = !0))),
        (C = ps(u, _)),
        0 < C.length &&
          ((_ = new Hc(_, e, null, n, f)),
          d.push({ event: _, listeners: C }),
          E ? (_.data = E) : ((E = ff(n)), E !== null && (_.data = E)))),
        (E = _v ? Pv(e, n) : Rv(e, n)) &&
          ((u = ps(u, 'onBeforeInput')),
          0 < u.length &&
            ((f = new Hc('onBeforeInput', 'beforeinput', null, n, f)),
            d.push({ event: f, listeners: u }),
            (f.data = E)))
    }
    Nf(d, t)
  })
}
function Yr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function ps(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      s = o.stateNode
    o.tag === 5 &&
      s !== null &&
      ((o = s),
      (s = Wr(e, n)),
      s != null && r.unshift(Yr(e, s, o)),
      (s = Wr(e, t)),
      s != null && r.push(Yr(e, s, o))),
      (e = e.return)
  }
  return r
}
function _n(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function tu(e, t, n, r, o) {
  for (var s = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      c = a.alternate,
      u = a.stateNode
    if (c !== null && c === r) break
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((c = Wr(n, s)), c != null && i.unshift(Yr(n, c, a)))
        : o || ((c = Wr(n, s)), c != null && i.push(Yr(n, c, a)))),
      (n = n.return)
  }
  i.length !== 0 && e.push({ event: t, listeners: i })
}
var Kv = /\r\n?/g,
  Vv = /\u0000|\uFFFD/g
function nu(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Kv,
      `
`
    )
    .replace(Vv, '')
}
function Do(e, t, n) {
  if (((t = nu(t)), nu(e) !== t && n)) throw Error(T(425))
}
function hs() {}
var ji = null,
  wi = null
function Si(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var Ci = typeof setTimeout == 'function' ? setTimeout : void 0,
  Gv = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  ru = typeof Promise == 'function' ? Promise : void 0,
  Jv =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof ru < 'u'
        ? function (e) {
            return ru.resolve(null).then(e).catch(Qv)
          }
        : Ci
function Qv(e) {
  setTimeout(function () {
    throw e
  })
}
function Pl(e, t) {
  var n = t,
    r = 0
  do {
    var o = n.nextSibling
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), Gr(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = o
  } while (n)
  Gr(t)
}
function Vt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
      if (t === '/$') return null
    }
  }
  return e
}
function ou(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e
        t--
      } else n === '/$' && t++
    }
    e = e.previousSibling
  }
  return null
}
var ir = Math.random().toString(36).slice(2),
  ft = '__reactFiber$' + ir,
  qr = '__reactProps$' + ir,
  Tt = '__reactContainer$' + ir,
  Ni = '__reactEvents$' + ir,
  Xv = '__reactListeners$' + ir,
  Yv = '__reactHandles$' + ir
function un(e) {
  var t = e[ft]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[Tt] || n[ft])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ou(e); e !== null; ) {
          if ((n = e[ft])) return n
          e = ou(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function ho(e) {
  return (
    (e = e[ft] || e[Tt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function Fn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(T(33))
}
function Ks(e) {
  return e[qr] || null
}
var ki = [],
  In = -1
function tn(e) {
  return { current: e }
}
function Z(e) {
  0 > In || ((e.current = ki[In]), (ki[In] = null), In--)
}
function Y(e, t) {
  In++, (ki[In] = e.current), (e.current = t)
}
var Zt = {},
  Te = tn(Zt),
  Fe = tn(!1),
  mn = Zt
function qn(e, t) {
  var n = e.type.contextTypes
  if (!n) return Zt
  var r = e.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext
  var o = {},
    s
  for (s in n) o[s] = t[s]
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  )
}
function Ie(e) {
  return (e = e.childContextTypes), e != null
}
function ms() {
  Z(Fe), Z(Te)
}
function su(e, t, n) {
  if (Te.current !== Zt) throw Error(T(168))
  Y(Te, t), Y(Fe, n)
}
function Ef(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n
  r = r.getChildContext()
  for (var o in r) if (!(o in t)) throw Error(T(108, Mg(e) || 'Unknown', o))
  return oe({}, n, r)
}
function gs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Zt),
    (mn = Te.current),
    Y(Te, e),
    Y(Fe, Fe.current),
    !0
  )
}
function lu(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(T(169))
  n
    ? ((e = Ef(e, t, mn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Z(Fe),
      Z(Te),
      Y(Te, e))
    : Z(Fe),
    Y(Fe, n)
}
var xt = null,
  Vs = !1,
  Rl = !1
function Tf(e) {
  xt === null ? (xt = [e]) : xt.push(e)
}
function qv(e) {
  ;(Vs = !0), Tf(e)
}
function nn() {
  if (!Rl && xt !== null) {
    Rl = !0
    var e = 0,
      t = K
    try {
      var n = xt
      for (K = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(xt = null), (Vs = !1)
    } catch (o) {
      throw (xt !== null && (xt = xt.slice(e + 1)), Yd(ja, nn), o)
    } finally {
      ;(K = t), (Rl = !1)
    }
  }
  return null
}
var An = [],
  Bn = 0,
  vs = null,
  ys = 0,
  Je = [],
  Qe = 0,
  gn = null,
  wt = 1,
  St = ''
function sn(e, t) {
  ;(An[Bn++] = ys), (An[Bn++] = vs), (vs = e), (ys = t)
}
function bf(e, t, n) {
  ;(Je[Qe++] = wt), (Je[Qe++] = St), (Je[Qe++] = gn), (gn = e)
  var r = wt
  e = St
  var o = 32 - lt(r) - 1
  ;(r &= ~(1 << o)), (n += 1)
  var s = 32 - lt(t) + o
  if (30 < s) {
    var i = o - (o % 5)
    ;(s = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (wt = (1 << (32 - lt(t) + o)) | (n << o) | r),
      (St = s + e)
  } else (wt = (1 << s) | (n << o) | r), (St = e)
}
function _a(e) {
  e.return !== null && (sn(e, 1), bf(e, 1, 0))
}
function Pa(e) {
  for (; e === vs; )
    (vs = An[--Bn]), (An[Bn] = null), (ys = An[--Bn]), (An[Bn] = null)
  for (; e === gn; )
    (gn = Je[--Qe]),
      (Je[Qe] = null),
      (St = Je[--Qe]),
      (Je[Qe] = null),
      (wt = Je[--Qe]),
      (Je[Qe] = null)
}
var We = null,
  He = null,
  te = !1,
  ot = null
function _f(e, t) {
  var n = Xe(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function iu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (We = e), (He = Vt(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (We = e), (He = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = gn !== null ? { id: wt, overflow: St } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Xe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (We = e),
            (He = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function Ei(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Ti(e) {
  if (te) {
    var t = He
    if (t) {
      var n = t
      if (!iu(e, t)) {
        if (Ei(e)) throw Error(T(418))
        t = Vt(n.nextSibling)
        var r = We
        t && iu(e, t)
          ? _f(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (te = !1), (We = e))
      }
    } else {
      if (Ei(e)) throw Error(T(418))
      ;(e.flags = (e.flags & -4097) | 2), (te = !1), (We = e)
    }
  }
}
function au(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  We = e
}
function Mo(e) {
  if (e !== We) return !1
  if (!te) return au(e), (te = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Si(e.type, e.memoizedProps))),
    t && (t = He))
  ) {
    if (Ei(e)) throw (Pf(), Error(T(418)))
    for (; t; ) _f(e, t), (t = Vt(t.nextSibling))
  }
  if ((au(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(T(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              He = Vt(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      He = null
    }
  } else He = We ? Vt(e.stateNode.nextSibling) : null
  return !0
}
function Pf() {
  for (var e = He; e; ) e = Vt(e.nextSibling)
}
function Zn() {
  ;(He = We = null), (te = !1)
}
function Ra(e) {
  ot === null ? (ot = [e]) : ot.push(e)
}
var Zv = Rt.ReactCurrentBatchConfig
function nt(e, t) {
  if (e && e.defaultProps) {
    ;(t = oe({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
var xs = tn(null),
  js = null,
  zn = null,
  Oa = null
function La() {
  Oa = zn = js = null
}
function Da(e) {
  var t = xs.current
  Z(xs), (e._currentValue = t)
}
function bi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break
    e = e.return
  }
}
function Qn(e, t) {
  ;(js = e),
    (Oa = zn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && ($e = !0), (e.firstContext = null))
}
function Ze(e) {
  var t = e._currentValue
  if (Oa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), zn === null)) {
      if (js === null) throw Error(T(308))
      ;(zn = e), (js.dependencies = { lanes: 0, firstContext: e })
    } else zn = zn.next = e
  return t
}
var dn = null
function Ma(e) {
  dn === null ? (dn = [e]) : dn.push(e)
}
function Rf(e, t, n, r) {
  var o = t.interleaved
  return (
    o === null ? ((n.next = n), Ma(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    bt(e, r)
  )
}
function bt(e, t) {
  e.lanes |= t
  var n = e.alternate
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return)
  return n.tag === 3 ? n.stateNode : null
}
var $t = !1
function $a(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function Of(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      })
}
function Ct(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  }
}
function Gt(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), U & 2)) {
    var o = r.pending
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      bt(e, n)
    )
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Ma(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    bt(e, n)
  )
}
function Xo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), wa(e, n)
  }
}
function cu(e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      s = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        }
        s === null ? (o = s = i) : (s = s.next = i), (n = n.next)
      } while (n !== null)
      s === null ? (o = s = t) : (s = s.next = t)
    } else o = s = t
    ;(n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n)
    return
  }
  ;(e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t)
}
function ws(e, t, n, r) {
  var o = e.updateQueue
  $t = !1
  var s = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    a = o.shared.pending
  if (a !== null) {
    o.shared.pending = null
    var c = a,
      u = c.next
    ;(c.next = null), i === null ? (s = u) : (i.next = u), (i = c)
    var f = e.alternate
    f !== null &&
      ((f = f.updateQueue),
      (a = f.lastBaseUpdate),
      a !== i &&
        (a === null ? (f.firstBaseUpdate = u) : (a.next = u),
        (f.lastBaseUpdate = c)))
  }
  if (s !== null) {
    var d = o.baseState
    ;(i = 0), (f = u = c = null), (a = s)
    do {
      var h = a.lane,
        j = a.eventTime
      if ((r & h) === h) {
        f !== null &&
          (f = f.next =
            {
              eventTime: j,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            })
        e: {
          var v = e,
            x = a
          switch (((h = t), (j = n), x.tag)) {
            case 1:
              if (((v = x.payload), typeof v == 'function')) {
                d = v.call(j, d, h)
                break e
              }
              d = v
              break e
            case 3:
              v.flags = (v.flags & -65537) | 128
            case 0:
              if (
                ((v = x.payload),
                (h = typeof v == 'function' ? v.call(j, d, h) : v),
                h == null)
              )
                break e
              d = oe({}, d, h)
              break e
            case 2:
              $t = !0
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = o.effects),
          h === null ? (o.effects = [a]) : h.push(a))
      } else
        (j = {
          eventTime: j,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          f === null ? ((u = f = j), (c = d)) : (f = f.next = j),
          (i |= h)
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break
        ;(h = a),
          (a = h.next),
          (h.next = null),
          (o.lastBaseUpdate = h),
          (o.shared.pending = null)
      }
    } while (!0)
    if (
      (f === null && (c = d),
      (o.baseState = c),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = f),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t
      do (i |= o.lane), (o = o.next)
      while (o !== t)
    } else s === null && (o.shared.lanes = 0)
    ;(yn |= i), (e.lanes = i), (e.memoizedState = d)
  }
}
function uu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error(T(191, o))
        o.call(r)
      }
    }
}
var Lf = new Pd.Component().refs
function _i(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : oe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Gs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Sn(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = Pe(),
      o = Qt(e),
      s = Ct(r, o)
    ;(s.payload = t),
      n != null && (s.callback = n),
      (t = Gt(e, s, o)),
      t !== null && (it(t, e, o, r), Xo(t, e, o))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = Pe(),
      o = Qt(e),
      s = Ct(r, o)
    ;(s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Gt(e, s, o)),
      t !== null && (it(t, e, o, r), Xo(t, e, o))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = Pe(),
      r = Qt(e),
      o = Ct(n, r)
    ;(o.tag = 2),
      t != null && (o.callback = t),
      (t = Gt(e, o, r)),
      t !== null && (it(t, e, r, n), Xo(t, e, r))
  },
}
function du(e, t, n, r, o, s, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, s, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Qr(n, r) || !Qr(o, s)
        : !0
  )
}
function Df(e, t, n) {
  var r = !1,
    o = Zt,
    s = t.contextType
  return (
    typeof s == 'object' && s !== null
      ? (s = Ze(s))
      : ((o = Ie(t) ? mn : Te.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? qn(e, o) : Zt)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Gs),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  )
}
function fu(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Gs.enqueueReplaceState(t, t.state, null)
}
function Pi(e, t, n, r) {
  var o = e.stateNode
  ;(o.props = n), (o.state = e.memoizedState), (o.refs = Lf), $a(e)
  var s = t.contextType
  typeof s == 'object' && s !== null
    ? (o.context = Ze(s))
    : ((s = Ie(t) ? mn : Te.current), (o.context = qn(e, s))),
    (o.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == 'function' && (_i(e, t, s, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Gs.enqueueReplaceState(o, o.state, null),
      ws(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308)
}
function Sr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(T(309))
        var r = n.stateNode
      }
      if (!r) throw Error(T(147, e))
      var o = r,
        s = '' + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (i) {
            var a = o.refs
            a === Lf && (a = o.refs = {}), i === null ? delete a[s] : (a[s] = i)
          }),
          (t._stringRef = s),
          t)
    }
    if (typeof e != 'string') throw Error(T(284))
    if (!n._owner) throw Error(T(290, e))
  }
  return e
}
function $o(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      T(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  )
}
function pu(e) {
  var t = e._init
  return t(e._payload)
}
function Mf(e) {
  function t(m, g) {
    if (e) {
      var y = m.deletions
      y === null ? ((m.deletions = [g]), (m.flags |= 16)) : y.push(g)
    }
  }
  function n(m, g) {
    if (!e) return null
    for (; g !== null; ) t(m, g), (g = g.sibling)
    return null
  }
  function r(m, g) {
    for (m = new Map(); g !== null; )
      g.key !== null ? m.set(g.key, g) : m.set(g.index, g), (g = g.sibling)
    return m
  }
  function o(m, g) {
    return (m = Xt(m, g)), (m.index = 0), (m.sibling = null), m
  }
  function s(m, g, y) {
    return (
      (m.index = y),
      e
        ? ((y = m.alternate),
          y !== null
            ? ((y = y.index), y < g ? ((m.flags |= 2), g) : y)
            : ((m.flags |= 2), g))
        : ((m.flags |= 1048576), g)
    )
  }
  function i(m) {
    return e && m.alternate === null && (m.flags |= 2), m
  }
  function a(m, g, y, S) {
    return g === null || g.tag !== 6
      ? ((g = Il(y, m.mode, S)), (g.return = m), g)
      : ((g = o(g, y)), (g.return = m), g)
  }
  function c(m, g, y, S) {
    var N = y.type
    return N === Ln
      ? f(m, g, y.props.children, S, y.key)
      : g !== null &&
          (g.elementType === N ||
            (typeof N == 'object' &&
              N !== null &&
              N.$$typeof === Mt &&
              pu(N) === g.type))
        ? ((S = o(g, y.props)), (S.ref = Sr(m, g, y)), (S.return = m), S)
        : ((S = ns(y.type, y.key, y.props, null, m.mode, S)),
          (S.ref = Sr(m, g, y)),
          (S.return = m),
          S)
  }
  function u(m, g, y, S) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== y.containerInfo ||
      g.stateNode.implementation !== y.implementation
      ? ((g = Al(y, m.mode, S)), (g.return = m), g)
      : ((g = o(g, y.children || [])), (g.return = m), g)
  }
  function f(m, g, y, S, N) {
    return g === null || g.tag !== 7
      ? ((g = hn(y, m.mode, S, N)), (g.return = m), g)
      : ((g = o(g, y)), (g.return = m), g)
  }
  function d(m, g, y) {
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return (g = Il('' + g, m.mode, y)), (g.return = m), g
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case ko:
          return (
            (y = ns(g.type, g.key, g.props, null, m.mode, y)),
            (y.ref = Sr(m, null, g)),
            (y.return = m),
            y
          )
        case On:
          return (g = Al(g, m.mode, y)), (g.return = m), g
        case Mt:
          var S = g._init
          return d(m, S(g._payload), y)
      }
      if (_r(g) || vr(g)) return (g = hn(g, m.mode, y, null)), (g.return = m), g
      $o(m, g)
    }
    return null
  }
  function h(m, g, y, S) {
    var N = g !== null ? g.key : null
    if ((typeof y == 'string' && y !== '') || typeof y == 'number')
      return N !== null ? null : a(m, g, '' + y, S)
    if (typeof y == 'object' && y !== null) {
      switch (y.$$typeof) {
        case ko:
          return y.key === N ? c(m, g, y, S) : null
        case On:
          return y.key === N ? u(m, g, y, S) : null
        case Mt:
          return (N = y._init), h(m, g, N(y._payload), S)
      }
      if (_r(y) || vr(y)) return N !== null ? null : f(m, g, y, S, null)
      $o(m, y)
    }
    return null
  }
  function j(m, g, y, S, N) {
    if ((typeof S == 'string' && S !== '') || typeof S == 'number')
      return (m = m.get(y) || null), a(g, m, '' + S, N)
    if (typeof S == 'object' && S !== null) {
      switch (S.$$typeof) {
        case ko:
          return (m = m.get(S.key === null ? y : S.key) || null), c(g, m, S, N)
        case On:
          return (m = m.get(S.key === null ? y : S.key) || null), u(g, m, S, N)
        case Mt:
          var C = S._init
          return j(m, g, y, C(S._payload), N)
      }
      if (_r(S) || vr(S)) return (m = m.get(y) || null), f(g, m, S, N, null)
      $o(g, S)
    }
    return null
  }
  function v(m, g, y, S) {
    for (
      var N = null, C = null, E = g, _ = (g = 0), M = null;
      E !== null && _ < y.length;
      _++
    ) {
      E.index > _ ? ((M = E), (E = null)) : (M = E.sibling)
      var O = h(m, E, y[_], S)
      if (O === null) {
        E === null && (E = M)
        break
      }
      e && E && O.alternate === null && t(m, E),
        (g = s(O, g, _)),
        C === null ? (N = O) : (C.sibling = O),
        (C = O),
        (E = M)
    }
    if (_ === y.length) return n(m, E), te && sn(m, _), N
    if (E === null) {
      for (; _ < y.length; _++)
        (E = d(m, y[_], S)),
          E !== null &&
            ((g = s(E, g, _)), C === null ? (N = E) : (C.sibling = E), (C = E))
      return te && sn(m, _), N
    }
    for (E = r(m, E); _ < y.length; _++)
      (M = j(E, m, _, y[_], S)),
        M !== null &&
          (e && M.alternate !== null && E.delete(M.key === null ? _ : M.key),
          (g = s(M, g, _)),
          C === null ? (N = M) : (C.sibling = M),
          (C = M))
    return (
      e &&
        E.forEach(function (ae) {
          return t(m, ae)
        }),
      te && sn(m, _),
      N
    )
  }
  function x(m, g, y, S) {
    var N = vr(y)
    if (typeof N != 'function') throw Error(T(150))
    if (((y = N.call(y)), y == null)) throw Error(T(151))
    for (
      var C = (N = null), E = g, _ = (g = 0), M = null, O = y.next();
      E !== null && !O.done;
      _++, O = y.next()
    ) {
      E.index > _ ? ((M = E), (E = null)) : (M = E.sibling)
      var ae = h(m, E, O.value, S)
      if (ae === null) {
        E === null && (E = M)
        break
      }
      e && E && ae.alternate === null && t(m, E),
        (g = s(ae, g, _)),
        C === null ? (N = ae) : (C.sibling = ae),
        (C = ae),
        (E = M)
    }
    if (O.done) return n(m, E), te && sn(m, _), N
    if (E === null) {
      for (; !O.done; _++, O = y.next())
        (O = d(m, O.value, S)),
          O !== null &&
            ((g = s(O, g, _)), C === null ? (N = O) : (C.sibling = O), (C = O))
      return te && sn(m, _), N
    }
    for (E = r(m, E); !O.done; _++, O = y.next())
      (O = j(E, m, _, O.value, S)),
        O !== null &&
          (e && O.alternate !== null && E.delete(O.key === null ? _ : O.key),
          (g = s(O, g, _)),
          C === null ? (N = O) : (C.sibling = O),
          (C = O))
    return (
      e &&
        E.forEach(function (V) {
          return t(m, V)
        }),
      te && sn(m, _),
      N
    )
  }
  function w(m, g, y, S) {
    if (
      (typeof y == 'object' &&
        y !== null &&
        y.type === Ln &&
        y.key === null &&
        (y = y.props.children),
      typeof y == 'object' && y !== null)
    ) {
      switch (y.$$typeof) {
        case ko:
          e: {
            for (var N = y.key, C = g; C !== null; ) {
              if (C.key === N) {
                if (((N = y.type), N === Ln)) {
                  if (C.tag === 7) {
                    n(m, C.sibling),
                      (g = o(C, y.props.children)),
                      (g.return = m),
                      (m = g)
                    break e
                  }
                } else if (
                  C.elementType === N ||
                  (typeof N == 'object' &&
                    N !== null &&
                    N.$$typeof === Mt &&
                    pu(N) === C.type)
                ) {
                  n(m, C.sibling),
                    (g = o(C, y.props)),
                    (g.ref = Sr(m, C, y)),
                    (g.return = m),
                    (m = g)
                  break e
                }
                n(m, C)
                break
              } else t(m, C)
              C = C.sibling
            }
            y.type === Ln
              ? ((g = hn(y.props.children, m.mode, S, y.key)),
                (g.return = m),
                (m = g))
              : ((S = ns(y.type, y.key, y.props, null, m.mode, S)),
                (S.ref = Sr(m, g, y)),
                (S.return = m),
                (m = S))
          }
          return i(m)
        case On:
          e: {
            for (C = y.key; g !== null; ) {
              if (g.key === C)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === y.containerInfo &&
                  g.stateNode.implementation === y.implementation
                ) {
                  n(m, g.sibling),
                    (g = o(g, y.children || [])),
                    (g.return = m),
                    (m = g)
                  break e
                } else {
                  n(m, g)
                  break
                }
              else t(m, g)
              g = g.sibling
            }
            ;(g = Al(y, m.mode, S)), (g.return = m), (m = g)
          }
          return i(m)
        case Mt:
          return (C = y._init), w(m, g, C(y._payload), S)
      }
      if (_r(y)) return v(m, g, y, S)
      if (vr(y)) return x(m, g, y, S)
      $o(m, y)
    }
    return (typeof y == 'string' && y !== '') || typeof y == 'number'
      ? ((y = '' + y),
        g !== null && g.tag === 6
          ? (n(m, g.sibling), (g = o(g, y)), (g.return = m), (m = g))
          : (n(m, g), (g = Il(y, m.mode, S)), (g.return = m), (m = g)),
        i(m))
      : n(m, g)
  }
  return w
}
var er = Mf(!0),
  $f = Mf(!1),
  mo = {},
  mt = tn(mo),
  Zr = tn(mo),
  eo = tn(mo)
function fn(e) {
  if (e === mo) throw Error(T(174))
  return e
}
function Fa(e, t) {
  switch ((Y(eo, t), Y(Zr, e), Y(mt, mo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ai(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ai(t, e))
  }
  Z(mt), Y(mt, t)
}
function tr() {
  Z(mt), Z(Zr), Z(eo)
}
function Ff(e) {
  fn(eo.current)
  var t = fn(mt.current),
    n = ai(t, e.type)
  t !== n && (Y(Zr, e), Y(mt, n))
}
function Ia(e) {
  Zr.current === e && (Z(mt), Z(Zr))
}
var ne = tn(0)
function Ss(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var Ol = []
function Aa() {
  for (var e = 0; e < Ol.length; e++) Ol[e]._workInProgressVersionPrimary = null
  Ol.length = 0
}
var Yo = Rt.ReactCurrentDispatcher,
  Ll = Rt.ReactCurrentBatchConfig,
  vn = 0,
  re = null,
  he = null,
  ge = null,
  Cs = !1,
  Ir = !1,
  to = 0,
  ey = 0
function Ce() {
  throw Error(T(321))
}
function Ba(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!at(e[n], t[n])) return !1
  return !0
}
function za(e, t, n, r, o, s) {
  if (
    ((vn = s),
    (re = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Yo.current = e === null || e.memoizedState === null ? oy : sy),
    (e = n(r, o)),
    Ir)
  ) {
    s = 0
    do {
      if (((Ir = !1), (to = 0), 25 <= s)) throw Error(T(301))
      ;(s += 1),
        (ge = he = null),
        (t.updateQueue = null),
        (Yo.current = ly),
        (e = n(r, o))
    } while (Ir)
  }
  if (
    ((Yo.current = Ns),
    (t = he !== null && he.next !== null),
    (vn = 0),
    (ge = he = re = null),
    (Cs = !1),
    t)
  )
    throw Error(T(300))
  return e
}
function Ua() {
  var e = to !== 0
  return (to = 0), e
}
function ut() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return ge === null ? (re.memoizedState = ge = e) : (ge = ge.next = e), ge
}
function et() {
  if (he === null) {
    var e = re.alternate
    e = e !== null ? e.memoizedState : null
  } else e = he.next
  var t = ge === null ? re.memoizedState : ge.next
  if (t !== null) (ge = t), (he = e)
  else {
    if (e === null) throw Error(T(310))
    ;(he = e),
      (e = {
        memoizedState: he.memoizedState,
        baseState: he.baseState,
        baseQueue: he.baseQueue,
        queue: he.queue,
        next: null,
      }),
      ge === null ? (re.memoizedState = ge = e) : (ge = ge.next = e)
  }
  return ge
}
function no(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function Dl(e) {
  var t = et(),
    n = t.queue
  if (n === null) throw Error(T(311))
  n.lastRenderedReducer = e
  var r = he,
    o = r.baseQueue,
    s = n.pending
  if (s !== null) {
    if (o !== null) {
      var i = o.next
      ;(o.next = s.next), (s.next = i)
    }
    ;(r.baseQueue = o = s), (n.pending = null)
  }
  if (o !== null) {
    ;(s = o.next), (r = r.baseState)
    var a = (i = null),
      c = null,
      u = s
    do {
      var f = u.lane
      if ((vn & f) === f)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action))
      else {
        var d = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        }
        c === null ? ((a = c = d), (i = r)) : (c = c.next = d),
          (re.lanes |= f),
          (yn |= f)
      }
      u = u.next
    } while (u !== null && u !== s)
    c === null ? (i = r) : (c.next = a),
      at(r, t.memoizedState) || ($e = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = c),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    o = e
    do (s = o.lane), (re.lanes |= s), (yn |= s), (o = o.next)
    while (o !== e)
  } else o === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function Ml(e) {
  var t = et(),
    n = t.queue
  if (n === null) throw Error(T(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    o = n.pending,
    s = t.memoizedState
  if (o !== null) {
    n.pending = null
    var i = (o = o.next)
    do (s = e(s, i.action)), (i = i.next)
    while (i !== o)
    at(s, t.memoizedState) || ($e = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s)
  }
  return [s, r]
}
function If() {}
function Af(e, t) {
  var n = re,
    r = et(),
    o = t(),
    s = !at(r.memoizedState, o)
  if (
    (s && ((r.memoizedState = o), ($e = !0)),
    (r = r.queue),
    Ha(Uf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (ge !== null && ge.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ro(9, zf.bind(null, n, r, o, t), void 0, null),
      ve === null)
    )
      throw Error(T(349))
    vn & 30 || Bf(n, t, o)
  }
  return o
}
function Bf(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (re.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function zf(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), Hf(t) && Wf(e)
}
function Uf(e, t, n) {
  return n(function () {
    Hf(t) && Wf(e)
  })
}
function Hf(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !at(e, n)
  } catch {
    return !0
  }
}
function Wf(e) {
  var t = bt(e, 1)
  t !== null && it(t, e, 1, -1)
}
function hu(e) {
  var t = ut()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: no,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = ry.bind(null, re, e)),
    [t.memoizedState, e]
  )
}
function ro(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (re.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function Kf() {
  return et().memoizedState
}
function qo(e, t, n, r) {
  var o = ut()
  ;(re.flags |= e),
    (o.memoizedState = ro(1 | t, n, void 0, r === void 0 ? null : r))
}
function Js(e, t, n, r) {
  var o = et()
  r = r === void 0 ? null : r
  var s = void 0
  if (he !== null) {
    var i = he.memoizedState
    if (((s = i.destroy), r !== null && Ba(r, i.deps))) {
      o.memoizedState = ro(t, n, s, r)
      return
    }
  }
  ;(re.flags |= e), (o.memoizedState = ro(1 | t, n, s, r))
}
function mu(e, t) {
  return qo(8390656, 8, e, t)
}
function Ha(e, t) {
  return Js(2048, 8, e, t)
}
function Vf(e, t) {
  return Js(4, 2, e, t)
}
function Gf(e, t) {
  return Js(4, 4, e, t)
}
function Jf(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function Qf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Js(4, 4, Jf.bind(null, t, e), n)
  )
}
function Wa() {}
function Xf(e, t) {
  var n = et()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Ba(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e)
}
function Yf(e, t) {
  var n = et()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Ba(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function qf(e, t, n) {
  return vn & 21
    ? (at(n, t) || ((n = ef()), (re.lanes |= n), (yn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), ($e = !0)), (e.memoizedState = n))
}
function ty(e, t) {
  var n = K
  ;(K = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = Ll.transition
  Ll.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(K = n), (Ll.transition = r)
  }
}
function Zf() {
  return et().memoizedState
}
function ny(e, t, n) {
  var r = Qt(e)
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ep(e))
  )
    tp(t, n)
  else if (((n = Rf(e, t, n, r)), n !== null)) {
    var o = Pe()
    it(n, e, r, o), np(n, t, r)
  }
}
function ry(e, t, n) {
  var r = Qt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (ep(e)) tp(t, o)
  else {
    var s = e.alternate
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = s(i, n)
        if (((o.hasEagerState = !0), (o.eagerState = a), at(a, i))) {
          var c = t.interleaved
          c === null
            ? ((o.next = o), Ma(t))
            : ((o.next = c.next), (c.next = o)),
            (t.interleaved = o)
          return
        }
      } catch {
      } finally {
      }
    ;(n = Rf(e, t, o, r)),
      n !== null && ((o = Pe()), it(n, e, r, o), np(n, t, r))
  }
}
function ep(e) {
  var t = e.alternate
  return e === re || (t !== null && t === re)
}
function tp(e, t) {
  Ir = Cs = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function np(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), wa(e, n)
  }
}
var Ns = {
    readContext: Ze,
    useCallback: Ce,
    useContext: Ce,
    useEffect: Ce,
    useImperativeHandle: Ce,
    useInsertionEffect: Ce,
    useLayoutEffect: Ce,
    useMemo: Ce,
    useReducer: Ce,
    useRef: Ce,
    useState: Ce,
    useDebugValue: Ce,
    useDeferredValue: Ce,
    useTransition: Ce,
    useMutableSource: Ce,
    useSyncExternalStore: Ce,
    useId: Ce,
    unstable_isNewReconciler: !1,
  },
  oy = {
    readContext: Ze,
    useCallback: function (e, t) {
      return (ut().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: Ze,
    useEffect: mu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        qo(4194308, 4, Jf.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return qo(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return qo(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = ut()
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      )
    },
    useReducer: function (e, t, n) {
      var r = ut()
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = ny.bind(null, re, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = ut()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: hu,
    useDebugValue: Wa,
    useDeferredValue: function (e) {
      return (ut().memoizedState = e)
    },
    useTransition: function () {
      var e = hu(!1),
        t = e[0]
      return (e = ty.bind(null, e[1])), (ut().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = re,
        o = ut()
      if (te) {
        if (n === void 0) throw Error(T(407))
        n = n()
      } else {
        if (((n = t()), ve === null)) throw Error(T(349))
        vn & 30 || Bf(r, t, n)
      }
      o.memoizedState = n
      var s = { value: n, getSnapshot: t }
      return (
        (o.queue = s),
        mu(Uf.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        ro(9, zf.bind(null, r, s, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = ut(),
        t = ve.identifierPrefix
      if (te) {
        var n = St,
          r = wt
        ;(n = (r & ~(1 << (32 - lt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = to++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = ey++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  sy = {
    readContext: Ze,
    useCallback: Xf,
    useContext: Ze,
    useEffect: Ha,
    useImperativeHandle: Qf,
    useInsertionEffect: Vf,
    useLayoutEffect: Gf,
    useMemo: Yf,
    useReducer: Dl,
    useRef: Kf,
    useState: function () {
      return Dl(no)
    },
    useDebugValue: Wa,
    useDeferredValue: function (e) {
      var t = et()
      return qf(t, he.memoizedState, e)
    },
    useTransition: function () {
      var e = Dl(no)[0],
        t = et().memoizedState
      return [e, t]
    },
    useMutableSource: If,
    useSyncExternalStore: Af,
    useId: Zf,
    unstable_isNewReconciler: !1,
  },
  ly = {
    readContext: Ze,
    useCallback: Xf,
    useContext: Ze,
    useEffect: Ha,
    useImperativeHandle: Qf,
    useInsertionEffect: Vf,
    useLayoutEffect: Gf,
    useMemo: Yf,
    useReducer: Ml,
    useRef: Kf,
    useState: function () {
      return Ml(no)
    },
    useDebugValue: Wa,
    useDeferredValue: function (e) {
      var t = et()
      return he === null ? (t.memoizedState = e) : qf(t, he.memoizedState, e)
    },
    useTransition: function () {
      var e = Ml(no)[0],
        t = et().memoizedState
      return [e, t]
    },
    useMutableSource: If,
    useSyncExternalStore: Af,
    useId: Zf,
    unstable_isNewReconciler: !1,
  }
function nr(e, t) {
  try {
    var n = '',
      r = t
    do (n += Dg(r)), (r = r.return)
    while (r)
    var o = n
  } catch (s) {
    o =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack
  }
  return { value: e, source: t, stack: o, digest: null }
}
function $l(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function Ri(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var iy = typeof WeakMap == 'function' ? WeakMap : Map
function rp(e, t, n) {
  ;(n = Ct(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      Es || ((Es = !0), (zi = r)), Ri(e, t)
    }),
    n
  )
}
function op(e, t, n) {
  ;(n = Ct(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var o = t.value
    ;(n.payload = function () {
      return r(o)
    }),
      (n.callback = function () {
        Ri(e, t)
      })
  }
  var s = e.stateNode
  return (
    s !== null &&
      typeof s.componentDidCatch == 'function' &&
      (n.callback = function () {
        Ri(e, t),
          typeof r != 'function' &&
            (Jt === null ? (Jt = new Set([this])) : Jt.add(this))
        var i = t.stack
        this.componentDidCatch(t.value, { componentStack: i !== null ? i : '' })
      }),
    n
  )
}
function gu(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new iy()
    var o = new Set()
    r.set(t, o)
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o))
  o.has(n) || (o.add(n), (e = wy.bind(null, e, t, n)), t.then(e, e))
}
function vu(e) {
  do {
    var t
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e
    e = e.return
  } while (e !== null)
  return null
}
function yu(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ct(-1, 1)), (t.tag = 2), Gt(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var ay = Rt.ReactCurrentOwner,
  $e = !1
function _e(e, t, n, r) {
  t.child = e === null ? $f(t, null, n, r) : er(t, e.child, n, r)
}
function xu(e, t, n, r, o) {
  n = n.render
  var s = t.ref
  return (
    Qn(t, o),
    (r = za(e, t, n, r, s, o)),
    (n = Ua()),
    e !== null && !$e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        _t(e, t, o))
      : (te && n && _a(t), (t.flags |= 1), _e(e, t, r, o), t.child)
  )
}
function ju(e, t, n, r, o) {
  if (e === null) {
    var s = n.type
    return typeof s == 'function' &&
      !qa(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), sp(e, t, s, r, o))
      : ((e = ns(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((s = e.child), !(e.lanes & o))) {
    var i = s.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : Qr), n(i, r) && e.ref === t.ref)
    )
      return _t(e, t, o)
  }
  return (
    (t.flags |= 1),
    (e = Xt(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function sp(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps
    if (Qr(s, r) && e.ref === t.ref)
      if ((($e = !1), (t.pendingProps = r = s), (e.lanes & o) !== 0))
        e.flags & 131072 && ($e = !0)
      else return (t.lanes = e.lanes), _t(e, t, o)
  }
  return Oi(e, t, n, r, o)
}
function lp(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    s = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Y(Hn, ze),
        (ze |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Y(Hn, ze),
          (ze |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        Y(Hn, ze),
        (ze |= r)
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Y(Hn, ze),
      (ze |= r)
  return _e(e, t, o, n), t.child
}
function ip(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function Oi(e, t, n, r, o) {
  var s = Ie(n) ? mn : Te.current
  return (
    (s = qn(t, s)),
    Qn(t, o),
    (n = za(e, t, n, r, s, o)),
    (r = Ua()),
    e !== null && !$e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        _t(e, t, o))
      : (te && r && _a(t), (t.flags |= 1), _e(e, t, n, o), t.child)
  )
}
function wu(e, t, n, r, o) {
  if (Ie(n)) {
    var s = !0
    gs(t)
  } else s = !1
  if ((Qn(t, o), t.stateNode === null))
    Zo(e, t), Df(t, n, r), Pi(t, n, r, o), (r = !0)
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps
    i.props = a
    var c = i.context,
      u = n.contextType
    typeof u == 'object' && u !== null
      ? (u = Ze(u))
      : ((u = Ie(n) ? mn : Te.current), (u = qn(t, u)))
    var f = n.getDerivedStateFromProps,
      d =
        typeof f == 'function' || typeof i.getSnapshotBeforeUpdate == 'function'
    d ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((a !== r || c !== u) && fu(t, i, r, u)),
      ($t = !1)
    var h = t.memoizedState
    ;(i.state = h),
      ws(t, r, i, o),
      (c = t.memoizedState),
      a !== r || h !== c || Fe.current || $t
        ? (typeof f == 'function' && (_i(t, n, f, r), (c = t.memoizedState)),
          (a = $t || du(t, n, a, r, h, c, u))
            ? (d ||
                (typeof i.UNSAFE_componentWillMount != 'function' &&
                  typeof i.componentWillMount != 'function') ||
                (typeof i.componentWillMount == 'function' &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == 'function' &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = c)),
          (i.props = r),
          (i.state = c),
          (i.context = u),
          (r = a))
        : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1))
  } else {
    ;(i = t.stateNode),
      Of(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : nt(t.type, a)),
      (i.props = u),
      (d = t.pendingProps),
      (h = i.context),
      (c = n.contextType),
      typeof c == 'object' && c !== null
        ? (c = Ze(c))
        : ((c = Ie(n) ? mn : Te.current), (c = qn(t, c)))
    var j = n.getDerivedStateFromProps
    ;(f =
      typeof j == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((a !== d || h !== c) && fu(t, i, r, c)),
      ($t = !1),
      (h = t.memoizedState),
      (i.state = h),
      ws(t, r, i, o)
    var v = t.memoizedState
    a !== d || h !== v || Fe.current || $t
      ? (typeof j == 'function' && (_i(t, n, j, r), (v = t.memoizedState)),
        (u = $t || du(t, n, u, r, h, v, c) || !1)
          ? (f ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' &&
                i.componentWillUpdate(r, v, c),
              typeof i.UNSAFE_componentWillUpdate == 'function' &&
                i.UNSAFE_componentWillUpdate(r, v, c)),
            typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (i.props = r),
        (i.state = v),
        (i.context = c),
        (r = u))
      : (typeof i.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1))
  }
  return Li(e, t, n, r, s, o)
}
function Li(e, t, n, r, o, s) {
  ip(e, t)
  var i = (t.flags & 128) !== 0
  if (!r && !i) return o && lu(t, n, !1), _t(e, t, s)
  ;(r = t.stateNode), (ay.current = t)
  var a =
    i && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = er(t, e.child, null, s)), (t.child = er(t, null, a, s)))
      : _e(e, t, a, s),
    (t.memoizedState = r.state),
    o && lu(t, n, !0),
    t.child
  )
}
function ap(e) {
  var t = e.stateNode
  t.pendingContext
    ? su(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && su(e, t.context, !1),
    Fa(e, t.containerInfo)
}
function Su(e, t, n, r, o) {
  return Zn(), Ra(o), (t.flags |= 256), _e(e, t, n, r), t.child
}
var Di = { dehydrated: null, treeContext: null, retryLane: 0 }
function Mi(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function cp(e, t, n) {
  var r = t.pendingProps,
    o = ne.current,
    s = !1,
    i = (t.flags & 128) !== 0,
    a
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Y(ne, o & 1),
    e === null)
  )
    return (
      Ti(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (i = { mode: 'hidden', children: i }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = i))
                : (s = Ys(i, r, 0, null)),
              (e = hn(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Mi(n)),
              (t.memoizedState = Di),
              e)
            : Ka(t, i))
    )
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return cy(e, t, i, r, a, o, n)
  if (s) {
    ;(s = r.fallback), (i = t.mode), (o = e.child), (a = o.sibling)
    var c = { mode: 'hidden', children: r.children }
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = c),
          (t.deletions = null))
        : ((r = Xt(o, c)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (s = Xt(a, s)) : ((s = hn(s, i, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Mi(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (s.memoizedState = i),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Di),
      r
    )
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Xt(s, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  )
}
function Ka(e, t) {
  return (
    (t = Ys({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function Fo(e, t, n, r) {
  return (
    r !== null && Ra(r),
    er(t, e.child, null, n),
    (e = Ka(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function cy(e, t, n, r, o, s, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = $l(Error(T(422)))), Fo(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (o = t.mode),
          (r = Ys({ mode: 'visible', children: r.children }, o, 0, null)),
          (s = hn(s, o, i, null)),
          (s.flags |= 2),
          (r.return = t),
          (s.return = t),
          (r.sibling = s),
          (t.child = r),
          t.mode & 1 && er(t, e.child, null, i),
          (t.child.memoizedState = Mi(i)),
          (t.memoizedState = Di),
          s)
  if (!(t.mode & 1)) return Fo(e, t, i, null)
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst
    return (r = a), (s = Error(T(419))), (r = $l(s, r, void 0)), Fo(e, t, i, r)
  }
  if (((a = (i & e.childLanes) !== 0), $e || a)) {
    if (((r = ve), r !== null)) {
      switch (i & -i) {
        case 4:
          o = 2
          break
        case 16:
          o = 8
          break
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32
          break
        case 536870912:
          o = 268435456
          break
        default:
          o = 0
      }
      ;(o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== s.retryLane &&
          ((s.retryLane = o), bt(e, o), it(r, e, o, -1))
    }
    return Ya(), (r = $l(Error(T(421)))), Fo(e, t, i, r)
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Sy.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (He = Vt(o.nextSibling)),
      (We = t),
      (te = !0),
      (ot = null),
      e !== null &&
        ((Je[Qe++] = wt),
        (Je[Qe++] = St),
        (Je[Qe++] = gn),
        (wt = e.id),
        (St = e.overflow),
        (gn = t)),
      (t = Ka(t, r.children)),
      (t.flags |= 4096),
      t)
}
function Cu(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), bi(e.return, t, n)
}
function Fl(e, t, n, r, o) {
  var s = e.memoizedState
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = o))
}
function up(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    s = r.tail
  if ((_e(e, t, r.children, n), (r = ne.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Cu(e, n, t)
        else if (e.tag === 19) Cu(e, n, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    r &= 1
  }
  if ((Y(ne, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Ss(e) === null && (o = n),
            (n = n.sibling)
        ;(n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Fl(t, !1, o, n, s)
        break
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Ss(e) === null)) {
            t.child = o
            break
          }
          ;(e = o.sibling), (o.sibling = n), (n = o), (o = e)
        }
        Fl(t, !0, n, null, s)
        break
      case 'together':
        Fl(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function Zo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function _t(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (yn |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(T(153))
  if (t.child !== null) {
    for (
      e = t.child, n = Xt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Xt(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function uy(e, t, n) {
  switch (t.tag) {
    case 3:
      ap(t), Zn()
      break
    case 5:
      Ff(t)
      break
    case 1:
      Ie(t.type) && gs(t)
      break
    case 4:
      Fa(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value
      Y(xs, r._currentValue), (r._currentValue = o)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Y(ne, ne.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? cp(e, t, n)
            : (Y(ne, ne.current & 1),
              (e = _t(e, t, n)),
              e !== null ? e.sibling : null)
      Y(ne, ne.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return up(e, t, n)
        t.flags |= 128
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Y(ne, ne.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), lp(e, t, n)
  }
  return _t(e, t, n)
}
var dp, $i, fp, pp
dp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
$i = function () {}
fp = function (e, t, n, r) {
  var o = e.memoizedProps
  if (o !== r) {
    ;(e = t.stateNode), fn(mt.current)
    var s = null
    switch (n) {
      case 'input':
        ;(o = oi(e, o)), (r = oi(e, r)), (s = [])
        break
      case 'select':
        ;(o = oe({}, o, { value: void 0 })),
          (r = oe({}, r, { value: void 0 })),
          (s = [])
        break
      case 'textarea':
        ;(o = ii(e, o)), (r = ii(e, r)), (s = [])
        break
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = hs)
    }
    ci(n, r)
    var i
    n = null
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === 'style') {
          var a = o[u]
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''))
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Ur.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null))
    for (u in r) {
      var c = r[u]
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && c !== a && (c != null || a != null))
      )
        if (u === 'style')
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (c && c.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ''))
            for (i in c)
              c.hasOwnProperty(i) &&
                a[i] !== c[i] &&
                (n || (n = {}), (n[i] = c[i]))
          } else n || (s || (s = []), s.push(u, n)), (n = c)
        else
          u === 'dangerouslySetInnerHTML'
            ? ((c = c ? c.__html : void 0),
              (a = a ? a.__html : void 0),
              c != null && a !== c && (s = s || []).push(u, c))
            : u === 'children'
              ? (typeof c != 'string' && typeof c != 'number') ||
                (s = s || []).push(u, '' + c)
              : u !== 'suppressContentEditableWarning' &&
                u !== 'suppressHydrationWarning' &&
                (Ur.hasOwnProperty(u)
                  ? (c != null && u === 'onScroll' && q('scroll', e),
                    s || a === c || (s = []))
                  : (s = s || []).push(u, c))
    }
    n && (s = s || []).push('style', n)
    var u = s
    ;(t.updateQueue = u) && (t.flags |= 4)
  }
}
pp = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function Cr(e, t) {
  if (!te)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling)
        n === null ? (e.tail = null) : (n.sibling = null)
        break
      case 'collapsed':
        n = e.tail
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling)
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null)
    }
}
function Ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling)
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling)
  return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function dy(e, t, n) {
  var r = t.pendingProps
  switch ((Pa(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ne(t), null
    case 1:
      return Ie(t.type) && ms(), Ne(t), null
    case 3:
      return (
        (r = t.stateNode),
        tr(),
        Z(Fe),
        Z(Te),
        Aa(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Mo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ot !== null && (Wi(ot), (ot = null)))),
        $i(e, t),
        Ne(t),
        null
      )
    case 5:
      Ia(t)
      var o = fn(eo.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        fp(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(T(166))
          return Ne(t), null
        }
        if (((e = fn(mt.current)), Mo(t))) {
          ;(r = t.stateNode), (n = t.type)
          var s = t.memoizedProps
          switch (((r[ft] = t), (r[qr] = s), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              q('cancel', r), q('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              q('load', r)
              break
            case 'video':
            case 'audio':
              for (o = 0; o < Rr.length; o++) q(Rr[o], r)
              break
            case 'source':
              q('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              q('error', r), q('load', r)
              break
            case 'details':
              q('toggle', r)
              break
            case 'input':
              Oc(r, s), q('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!s.multiple }),
                q('invalid', r)
              break
            case 'textarea':
              Dc(r, s), q('invalid', r)
          }
          ci(n, s), (o = null)
          for (var i in s)
            if (s.hasOwnProperty(i)) {
              var a = s[i]
              i === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Do(r.textContent, a, e),
                    (o = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Do(r.textContent, a, e),
                    (o = ['children', '' + a]))
                : Ur.hasOwnProperty(i) &&
                  a != null &&
                  i === 'onScroll' &&
                  q('scroll', r)
            }
          switch (n) {
            case 'input':
              Eo(r), Lc(r, s, !0)
              break
            case 'textarea':
              Eo(r), Mc(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof s.onClick == 'function' && (r.onclick = hs)
          }
          ;(r = o), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(i = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Ad(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = i.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    n === 'select' &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[ft] = t),
            (e[qr] = r),
            dp(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((i = ui(n, r)), n)) {
              case 'dialog':
                q('cancel', e), q('close', e), (o = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                q('load', e), (o = r)
                break
              case 'video':
              case 'audio':
                for (o = 0; o < Rr.length; o++) q(Rr[o], e)
                o = r
                break
              case 'source':
                q('error', e), (o = r)
                break
              case 'img':
              case 'image':
              case 'link':
                q('error', e), q('load', e), (o = r)
                break
              case 'details':
                q('toggle', e), (o = r)
                break
              case 'input':
                Oc(e, r), (o = oi(e, r)), q('invalid', e)
                break
              case 'option':
                o = r
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = oe({}, r, { value: void 0 })),
                  q('invalid', e)
                break
              case 'textarea':
                Dc(e, r), (o = ii(e, r)), q('invalid', e)
                break
              default:
                o = r
            }
            ci(n, o), (a = o)
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var c = a[s]
                s === 'style'
                  ? Ud(e, c)
                  : s === 'dangerouslySetInnerHTML'
                    ? ((c = c ? c.__html : void 0), c != null && Bd(e, c))
                    : s === 'children'
                      ? typeof c == 'string'
                        ? (n !== 'textarea' || c !== '') && Hr(e, c)
                        : typeof c == 'number' && Hr(e, '' + c)
                      : s !== 'suppressContentEditableWarning' &&
                        s !== 'suppressHydrationWarning' &&
                        s !== 'autoFocus' &&
                        (Ur.hasOwnProperty(s)
                          ? c != null && s === 'onScroll' && q('scroll', e)
                          : c != null && ma(e, s, c, i))
              }
            switch (n) {
              case 'input':
                Eo(e), Lc(e, r, !1)
                break
              case 'textarea':
                Eo(e), Mc(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + qt(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Kn(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Kn(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof o.onClick == 'function' && (e.onclick = hs)
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus
                break e
              case 'img':
                r = !0
                break e
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return Ne(t), null
    case 6:
      if (e && t.stateNode != null) pp(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(T(166))
        if (((n = fn(eo.current)), fn(mt.current), Mo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ft] = t),
            (s = r.nodeValue !== n) && ((e = We), e !== null))
          )
            switch (e.tag) {
              case 3:
                Do(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Do(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          s && (t.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ft] = t),
            (t.stateNode = r)
      }
      return Ne(t), null
    case 13:
      if (
        (Z(ne),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (te && He !== null && t.mode & 1 && !(t.flags & 128))
          Pf(), Zn(), (t.flags |= 98560), (s = !1)
        else if (((s = Mo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(T(318))
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(T(317))
            s[ft] = t
          } else
            Zn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          Ne(t), (s = !1)
        } else ot !== null && (Wi(ot), (ot = null)), (s = !0)
        if (!s) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ne.current & 1 ? me === 0 && (me = 3) : Ya())),
          t.updateQueue !== null && (t.flags |= 4),
          Ne(t),
          null)
    case 4:
      return (
        tr(), $i(e, t), e === null && Xr(t.stateNode.containerInfo), Ne(t), null
      )
    case 10:
      return Da(t.type._context), Ne(t), null
    case 17:
      return Ie(t.type) && ms(), Ne(t), null
    case 19:
      if ((Z(ne), (s = t.memoizedState), s === null)) return Ne(t), null
      if (((r = (t.flags & 128) !== 0), (i = s.rendering), i === null))
        if (r) Cr(s, !1)
        else {
          if (me !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Ss(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Cr(s, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (i = s.alternate),
                    i === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = i.childLanes),
                        (s.lanes = i.lanes),
                        (s.child = i.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = i.memoizedProps),
                        (s.memoizedState = i.memoizedState),
                        (s.updateQueue = i.updateQueue),
                        (s.type = i.type),
                        (e = i.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling)
                return Y(ne, (ne.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          s.tail !== null &&
            ie() > rr &&
            ((t.flags |= 128), (r = !0), Cr(s, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = Ss(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Cr(s, !0),
              s.tail === null && s.tailMode === 'hidden' && !i.alternate && !te)
            )
              return Ne(t), null
          } else
            2 * ie() - s.renderingStartTime > rr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Cr(s, !1), (t.lanes = 4194304))
        s.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = s.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (s.last = i))
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = ie()),
          (t.sibling = null),
          (n = ne.current),
          Y(ne, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ne(t), null)
    case 22:
    case 23:
      return (
        Xa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ze & 1073741824 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ne(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(T(156, t.tag))
}
function fy(e, t) {
  switch ((Pa(t), t.tag)) {
    case 1:
      return (
        Ie(t.type) && ms(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        tr(),
        Z(Fe),
        Z(Te),
        Aa(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return Ia(t), null
    case 13:
      if ((Z(ne), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(T(340))
        Zn()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return Z(ne), null
    case 4:
      return tr(), null
    case 10:
      return Da(t.type._context), null
    case 22:
    case 23:
      return Xa(), null
    case 24:
      return null
    default:
      return null
  }
}
var Io = !1,
  Ee = !1,
  py = typeof WeakSet == 'function' ? WeakSet : Set,
  P = null
function Un(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        se(e, t, r)
      }
    else n.current = null
}
function Fi(e, t, n) {
  try {
    n()
  } catch (r) {
    se(e, t, r)
  }
}
var Nu = !1
function hy(e, t) {
  if (((ji = ds), (e = vf()), ba(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var o = r.anchorOffset,
            s = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, s.nodeType
          } catch {
            n = null
            break e
          }
          var i = 0,
            a = -1,
            c = -1,
            u = 0,
            f = 0,
            d = e,
            h = null
          t: for (;;) {
            for (
              var j;
              d !== n || (o !== 0 && d.nodeType !== 3) || (a = i + o),
                d !== s || (r !== 0 && d.nodeType !== 3) || (c = i + r),
                d.nodeType === 3 && (i += d.nodeValue.length),
                (j = d.firstChild) !== null;

            )
              (h = d), (d = j)
            for (;;) {
              if (d === e) break t
              if (
                (h === n && ++u === o && (a = i),
                h === s && ++f === r && (c = i),
                (j = d.nextSibling) !== null)
              )
                break
              ;(d = h), (h = d.parentNode)
            }
            d = j
          }
          n = a === -1 || c === -1 ? null : { start: a, end: c }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (wi = { focusedElem: e, selectionRange: n }, ds = !1, P = t; P !== null; )
    if (((t = P), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (P = e)
    else
      for (; P !== null; ) {
        t = P
        try {
          var v = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (v !== null) {
                  var x = v.memoizedProps,
                    w = v.memoizedState,
                    m = t.stateNode,
                    g = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : nt(t.type, x),
                      w
                    )
                  m.__reactInternalSnapshotBeforeUpdate = g
                }
                break
              case 3:
                var y = t.stateNode.containerInfo
                y.nodeType === 1
                  ? (y.textContent = '')
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(T(163))
            }
        } catch (S) {
          se(t, t.return, S)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (P = e)
          break
        }
        P = t.return
      }
  return (v = Nu), (Nu = !1), v
}
function Ar(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next)
    do {
      if ((o.tag & e) === e) {
        var s = o.destroy
        ;(o.destroy = void 0), s !== void 0 && Fi(t, n, s)
      }
      o = o.next
    } while (o !== r)
  }
}
function Qs(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next)
    do {
      if ((n.tag & e) === e) {
        var r = n.create
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}
function Ii(e) {
  var t = e.ref
  if (t !== null) {
    var n = e.stateNode
    switch (e.tag) {
      case 5:
        e = n
        break
      default:
        e = n
    }
    typeof t == 'function' ? t(e) : (t.current = e)
  }
}
function hp(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), hp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ft], delete t[qr], delete t[Ni], delete t[Xv], delete t[Yv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function mp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function ku(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || mp(e.return)) return null
      e = e.return
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function Ai(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = hs))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ai(e, t, n), e = e.sibling; e !== null; ) Ai(e, t, n), (e = e.sibling)
}
function Bi(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bi(e, t, n), e = e.sibling; e !== null; ) Bi(e, t, n), (e = e.sibling)
}
var je = null,
  rt = !1
function Lt(e, t, n) {
  for (n = n.child; n !== null; ) gp(e, t, n), (n = n.sibling)
}
function gp(e, t, n) {
  if (ht && typeof ht.onCommitFiberUnmount == 'function')
    try {
      ht.onCommitFiberUnmount(zs, n)
    } catch {}
  switch (n.tag) {
    case 5:
      Ee || Un(n, t)
    case 6:
      var r = je,
        o = rt
      ;(je = null),
        Lt(e, t, n),
        (je = r),
        (rt = o),
        je !== null &&
          (rt
            ? ((e = je),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : je.removeChild(n.stateNode))
      break
    case 18:
      je !== null &&
        (rt
          ? ((e = je),
            (n = n.stateNode),
            e.nodeType === 8
              ? Pl(e.parentNode, n)
              : e.nodeType === 1 && Pl(e, n),
            Gr(e))
          : Pl(je, n.stateNode))
      break
    case 4:
      ;(r = je),
        (o = rt),
        (je = n.stateNode.containerInfo),
        (rt = !0),
        Lt(e, t, n),
        (je = r),
        (rt = o)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ee &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next
        do {
          var s = o,
            i = s.destroy
          ;(s = s.tag),
            i !== void 0 && (s & 2 || s & 4) && Fi(n, t, i),
            (o = o.next)
        } while (o !== r)
      }
      Lt(e, t, n)
      break
    case 1:
      if (
        !Ee &&
        (Un(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          ;(r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount()
        } catch (a) {
          se(n, t, a)
        }
      Lt(e, t, n)
      break
    case 21:
      Lt(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((Ee = (r = Ee) || n.memoizedState !== null), Lt(e, t, n), (Ee = r))
        : Lt(e, t, n)
      break
    default:
      Lt(e, t, n)
  }
}
function Eu(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new py()),
      t.forEach(function (r) {
        var o = Cy.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(o, o))
      })
  }
}
function tt(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r]
      try {
        var s = e,
          i = t,
          a = i
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ;(je = a.stateNode), (rt = !1)
              break e
            case 3:
              ;(je = a.stateNode.containerInfo), (rt = !0)
              break e
            case 4:
              ;(je = a.stateNode.containerInfo), (rt = !0)
              break e
          }
          a = a.return
        }
        if (je === null) throw Error(T(160))
        gp(s, i, o), (je = null), (rt = !1)
        var c = o.alternate
        c !== null && (c.return = null), (o.return = null)
      } catch (u) {
        se(o, t, u)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) vp(t, e), (t = t.sibling)
}
function vp(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((tt(t, e), ct(e), r & 4)) {
        try {
          Ar(3, e, e.return), Qs(3, e)
        } catch (x) {
          se(e, e.return, x)
        }
        try {
          Ar(5, e, e.return)
        } catch (x) {
          se(e, e.return, x)
        }
      }
      break
    case 1:
      tt(t, e), ct(e), r & 512 && n !== null && Un(n, n.return)
      break
    case 5:
      if (
        (tt(t, e),
        ct(e),
        r & 512 && n !== null && Un(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode
        try {
          Hr(o, '')
        } catch (x) {
          se(e, e.return, x)
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var s = e.memoizedProps,
          i = n !== null ? n.memoizedProps : s,
          a = e.type,
          c = e.updateQueue
        if (((e.updateQueue = null), c !== null))
          try {
            a === 'input' && s.type === 'radio' && s.name != null && Fd(o, s),
              ui(a, i)
            var u = ui(a, s)
            for (i = 0; i < c.length; i += 2) {
              var f = c[i],
                d = c[i + 1]
              f === 'style'
                ? Ud(o, d)
                : f === 'dangerouslySetInnerHTML'
                  ? Bd(o, d)
                  : f === 'children'
                    ? Hr(o, d)
                    : ma(o, f, d, u)
            }
            switch (a) {
              case 'input':
                si(o, s)
                break
              case 'textarea':
                Id(o, s)
                break
              case 'select':
                var h = o._wrapperState.wasMultiple
                o._wrapperState.wasMultiple = !!s.multiple
                var j = s.value
                j != null
                  ? Kn(o, !!s.multiple, j, !1)
                  : h !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Kn(o, !!s.multiple, s.defaultValue, !0)
                      : Kn(o, !!s.multiple, s.multiple ? [] : '', !1))
            }
            o[qr] = s
          } catch (x) {
            se(e, e.return, x)
          }
      }
      break
    case 6:
      if ((tt(t, e), ct(e), r & 4)) {
        if (e.stateNode === null) throw Error(T(162))
        ;(o = e.stateNode), (s = e.memoizedProps)
        try {
          o.nodeValue = s
        } catch (x) {
          se(e, e.return, x)
        }
      }
      break
    case 3:
      if (
        (tt(t, e), ct(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Gr(t.containerInfo)
        } catch (x) {
          se(e, e.return, x)
        }
      break
    case 4:
      tt(t, e), ct(e)
      break
    case 13:
      tt(t, e),
        ct(e),
        (o = e.child),
        o.flags & 8192 &&
          ((s = o.memoizedState !== null),
          (o.stateNode.isHidden = s),
          !s ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Ja = ie())),
        r & 4 && Eu(e)
      break
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ee = (u = Ee) || f), tt(t, e), (Ee = u)) : tt(t, e),
        ct(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !f && e.mode & 1)
        )
          for (P = e, f = e.child; f !== null; ) {
            for (d = P = f; P !== null; ) {
              switch (((h = P), (j = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ar(4, h, h.return)
                  break
                case 1:
                  Un(h, h.return)
                  var v = h.stateNode
                  if (typeof v.componentWillUnmount == 'function') {
                    ;(r = h), (n = h.return)
                    try {
                      ;(t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount()
                    } catch (x) {
                      se(r, n, x)
                    }
                  }
                  break
                case 5:
                  Un(h, h.return)
                  break
                case 22:
                  if (h.memoizedState !== null) {
                    bu(d)
                    continue
                  }
              }
              j !== null ? ((j.return = h), (P = j)) : bu(d)
            }
            f = f.sibling
          }
        e: for (f = null, d = e; ; ) {
          if (d.tag === 5) {
            if (f === null) {
              f = d
              try {
                ;(o = d.stateNode),
                  u
                    ? ((s = o.style),
                      typeof s.setProperty == 'function'
                        ? s.setProperty('display', 'none', 'important')
                        : (s.display = 'none'))
                    : ((a = d.stateNode),
                      (c = d.memoizedProps.style),
                      (i =
                        c != null && c.hasOwnProperty('display')
                          ? c.display
                          : null),
                      (a.style.display = zd('display', i)))
              } catch (x) {
                se(e, e.return, x)
              }
            }
          } else if (d.tag === 6) {
            if (f === null)
              try {
                d.stateNode.nodeValue = u ? '' : d.memoizedProps
              } catch (x) {
                se(e, e.return, x)
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            ;(d.child.return = d), (d = d.child)
            continue
          }
          if (d === e) break e
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e
            f === d && (f = null), (d = d.return)
          }
          f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling)
        }
      }
      break
    case 19:
      tt(t, e), ct(e), r & 4 && Eu(e)
      break
    case 21:
      break
    default:
      tt(t, e), ct(e)
  }
}
function ct(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (mp(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(T(160))
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode
          r.flags & 32 && (Hr(o, ''), (r.flags &= -33))
          var s = ku(e)
          Bi(e, s, o)
          break
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = ku(e)
          Ai(e, a, i)
          break
        default:
          throw Error(T(161))
      }
    } catch (c) {
      se(e, e.return, c)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function my(e, t, n) {
  ;(P = e), yp(e)
}
function yp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var o = P,
      s = o.child
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Io
      if (!i) {
        var a = o.alternate,
          c = (a !== null && a.memoizedState !== null) || Ee
        a = Io
        var u = Ee
        if (((Io = i), (Ee = c) && !u))
          for (P = o; P !== null; )
            (i = P),
              (c = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? _u(o)
                : c !== null
                  ? ((c.return = i), (P = c))
                  : _u(o)
        for (; s !== null; ) (P = s), yp(s), (s = s.sibling)
        ;(P = o), (Io = a), (Ee = u)
      }
      Tu(e)
    } else
      o.subtreeFlags & 8772 && s !== null ? ((s.return = o), (P = s)) : Tu(e)
  }
}
function Tu(e) {
  for (; P !== null; ) {
    var t = P
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ee || Qs(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !Ee)
                if (n === null) r.componentDidMount()
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : nt(t.type, n.memoizedProps)
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  )
                }
              var s = t.updateQueue
              s !== null && uu(t, s, r)
              break
            case 3:
              var i = t.updateQueue
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                uu(t, i, n)
              }
              break
            case 5:
              var a = t.stateNode
              if (n === null && t.flags & 4) {
                n = a
                var c = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    c.autoFocus && n.focus()
                    break
                  case 'img':
                    c.src && (n.src = c.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate
                if (u !== null) {
                  var f = u.memoizedState
                  if (f !== null) {
                    var d = f.dehydrated
                    d !== null && Gr(d)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(T(163))
          }
        Ee || (t.flags & 512 && Ii(t))
      } catch (h) {
        se(t, t.return, h)
      }
    }
    if (t === e) {
      P = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (P = n)
      break
    }
    P = t.return
  }
}
function bu(e) {
  for (; P !== null; ) {
    var t = P
    if (t === e) {
      P = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (P = n)
      break
    }
    P = t.return
  }
}
function _u(e) {
  for (; P !== null; ) {
    var t = P
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            Qs(4, t)
          } catch (c) {
            se(t, n, c)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == 'function') {
            var o = t.return
            try {
              r.componentDidMount()
            } catch (c) {
              se(t, o, c)
            }
          }
          var s = t.return
          try {
            Ii(t)
          } catch (c) {
            se(t, s, c)
          }
          break
        case 5:
          var i = t.return
          try {
            Ii(t)
          } catch (c) {
            se(t, i, c)
          }
      }
    } catch (c) {
      se(t, t.return, c)
    }
    if (t === e) {
      P = null
      break
    }
    var a = t.sibling
    if (a !== null) {
      ;(a.return = t.return), (P = a)
      break
    }
    P = t.return
  }
}
var gy = Math.ceil,
  ks = Rt.ReactCurrentDispatcher,
  Va = Rt.ReactCurrentOwner,
  Ye = Rt.ReactCurrentBatchConfig,
  U = 0,
  ve = null,
  de = null,
  we = 0,
  ze = 0,
  Hn = tn(0),
  me = 0,
  oo = null,
  yn = 0,
  Xs = 0,
  Ga = 0,
  Br = null,
  De = null,
  Ja = 0,
  rr = 1 / 0,
  yt = null,
  Es = !1,
  zi = null,
  Jt = null,
  Ao = !1,
  zt = null,
  Ts = 0,
  zr = 0,
  Ui = null,
  es = -1,
  ts = 0
function Pe() {
  return U & 6 ? ie() : es !== -1 ? es : (es = ie())
}
function Qt(e) {
  return e.mode & 1
    ? U & 2 && we !== 0
      ? we & -we
      : Zv.transition !== null
        ? (ts === 0 && (ts = ef()), ts)
        : ((e = K),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : af(e.type))),
          e)
    : 1
}
function it(e, t, n, r) {
  if (50 < zr) throw ((zr = 0), (Ui = null), Error(T(185)))
  fo(e, n, r),
    (!(U & 2) || e !== ve) &&
      (e === ve && (!(U & 2) && (Xs |= n), me === 4 && At(e, we)),
      Ae(e, r),
      n === 1 && U === 0 && !(t.mode & 1) && ((rr = ie() + 500), Vs && nn()))
}
function Ae(e, t) {
  var n = e.callbackNode
  Zg(e, t)
  var r = us(e, e === ve ? we : 0)
  if (r === 0)
    n !== null && Ic(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ic(n), t === 1))
      e.tag === 0 ? qv(Pu.bind(null, e)) : Tf(Pu.bind(null, e)),
        Jv(function () {
          !(U & 6) && nn()
        }),
        (n = null)
    else {
      switch (tf(r)) {
        case 1:
          n = ja
          break
        case 4:
          n = qd
          break
        case 16:
          n = cs
          break
        case 536870912:
          n = Zd
          break
        default:
          n = cs
      }
      n = Ep(n, xp.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function xp(e, t) {
  if (((es = -1), (ts = 0), U & 6)) throw Error(T(327))
  var n = e.callbackNode
  if (Xn() && e.callbackNode !== n) return null
  var r = us(e, e === ve ? we : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = bs(e, r)
  else {
    t = r
    var o = U
    U |= 2
    var s = wp()
    ;(ve !== e || we !== t) && ((yt = null), (rr = ie() + 500), pn(e, t))
    do
      try {
        xy()
        break
      } catch (a) {
        jp(e, a)
      }
    while (!0)
    La(),
      (ks.current = s),
      (U = o),
      de !== null ? (t = 0) : ((ve = null), (we = 0), (t = me))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = mi(e)), o !== 0 && ((r = o), (t = Hi(e, o)))), t === 1)
    )
      throw ((n = oo), pn(e, 0), At(e, r), Ae(e, ie()), n)
    if (t === 6) At(e, r)
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !vy(o) &&
          ((t = bs(e, r)),
          t === 2 && ((s = mi(e)), s !== 0 && ((r = s), (t = Hi(e, s)))),
          t === 1))
      )
        throw ((n = oo), pn(e, 0), At(e, r), Ae(e, ie()), n)
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(T(345))
        case 2:
          ln(e, De, yt)
          break
        case 3:
          if (
            (At(e, r), (r & 130023424) === r && ((t = Ja + 500 - ie()), 10 < t))
          ) {
            if (us(e, 0) !== 0) break
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Pe(), (e.pingedLanes |= e.suspendedLanes & o)
              break
            }
            e.timeoutHandle = Ci(ln.bind(null, e, De, yt), t)
            break
          }
          ln(e, De, yt)
          break
        case 4:
          if ((At(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - lt(r)
            ;(s = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~s)
          }
          if (
            ((r = o),
            (r = ie() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * gy(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ci(ln.bind(null, e, De, yt), r)
            break
          }
          ln(e, De, yt)
          break
        case 5:
          ln(e, De, yt)
          break
        default:
          throw Error(T(329))
      }
    }
  }
  return Ae(e, ie()), e.callbackNode === n ? xp.bind(null, e) : null
}
function Hi(e, t) {
  var n = Br
  return (
    e.current.memoizedState.isDehydrated && (pn(e, t).flags |= 256),
    (e = bs(e, t)),
    e !== 2 && ((t = De), (De = n), t !== null && Wi(t)),
    e
  )
}
function Wi(e) {
  De === null ? (De = e) : De.push.apply(De, e)
}
function vy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            s = o.getSnapshot
          o = o.value
          try {
            if (!at(s(), o)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function At(e, t) {
  for (
    t &= ~Ga,
      t &= ~Xs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - lt(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function Pu(e) {
  if (U & 6) throw Error(T(327))
  Xn()
  var t = us(e, 0)
  if (!(t & 1)) return Ae(e, ie()), null
  var n = bs(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = mi(e)
    r !== 0 && ((t = r), (n = Hi(e, r)))
  }
  if (n === 1) throw ((n = oo), pn(e, 0), At(e, t), Ae(e, ie()), n)
  if (n === 6) throw Error(T(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    ln(e, De, yt),
    Ae(e, ie()),
    null
  )
}
function Qa(e, t) {
  var n = U
  U |= 1
  try {
    return e(t)
  } finally {
    ;(U = n), U === 0 && ((rr = ie() + 500), Vs && nn())
  }
}
function xn(e) {
  zt !== null && zt.tag === 0 && !(U & 6) && Xn()
  var t = U
  U |= 1
  var n = Ye.transition,
    r = K
  try {
    if (((Ye.transition = null), (K = 1), e)) return e()
  } finally {
    ;(K = r), (Ye.transition = n), (U = t), !(U & 6) && nn()
  }
}
function Xa() {
  ;(ze = Hn.current), Z(Hn)
}
function pn(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), Gv(n)), de !== null))
    for (n = de.return; n !== null; ) {
      var r = n
      switch ((Pa(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && ms()
          break
        case 3:
          tr(), Z(Fe), Z(Te), Aa()
          break
        case 5:
          Ia(r)
          break
        case 4:
          tr()
          break
        case 13:
          Z(ne)
          break
        case 19:
          Z(ne)
          break
        case 10:
          Da(r.type._context)
          break
        case 22:
        case 23:
          Xa()
      }
      n = n.return
    }
  if (
    ((ve = e),
    (de = e = Xt(e.current, null)),
    (we = ze = t),
    (me = 0),
    (oo = null),
    (Ga = Xs = yn = 0),
    (De = Br = null),
    dn !== null)
  ) {
    for (t = 0; t < dn.length; t++)
      if (((n = dn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var o = r.next,
          s = n.pending
        if (s !== null) {
          var i = s.next
          ;(s.next = o), (r.next = i)
        }
        n.pending = r
      }
    dn = null
  }
  return e
}
function jp(e, t) {
  do {
    var n = de
    try {
      if ((La(), (Yo.current = Ns), Cs)) {
        for (var r = re.memoizedState; r !== null; ) {
          var o = r.queue
          o !== null && (o.pending = null), (r = r.next)
        }
        Cs = !1
      }
      if (
        ((vn = 0),
        (ge = he = re = null),
        (Ir = !1),
        (to = 0),
        (Va.current = null),
        n === null || n.return === null)
      ) {
        ;(me = 1), (oo = t), (de = null)
        break
      }
      e: {
        var s = e,
          i = n.return,
          a = n,
          c = t
        if (
          ((t = we),
          (a.flags |= 32768),
          c !== null && typeof c == 'object' && typeof c.then == 'function')
        ) {
          var u = c,
            f = a,
            d = f.tag
          if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = f.alternate
            h
              ? ((f.updateQueue = h.updateQueue),
                (f.memoizedState = h.memoizedState),
                (f.lanes = h.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null))
          }
          var j = vu(i)
          if (j !== null) {
            ;(j.flags &= -257),
              yu(j, i, a, s, t),
              j.mode & 1 && gu(s, u, t),
              (t = j),
              (c = u)
            var v = t.updateQueue
            if (v === null) {
              var x = new Set()
              x.add(c), (t.updateQueue = x)
            } else v.add(c)
            break e
          } else {
            if (!(t & 1)) {
              gu(s, u, t), Ya()
              break e
            }
            c = Error(T(426))
          }
        } else if (te && a.mode & 1) {
          var w = vu(i)
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              yu(w, i, a, s, t),
              Ra(nr(c, a))
            break e
          }
        }
        ;(s = c = nr(c, a)),
          me !== 4 && (me = 2),
          Br === null ? (Br = [s]) : Br.push(s),
          (s = i)
        do {
          switch (s.tag) {
            case 3:
              ;(s.flags |= 65536), (t &= -t), (s.lanes |= t)
              var m = rp(s, c, t)
              cu(s, m)
              break e
            case 1:
              a = c
              var g = s.type,
                y = s.stateNode
              if (
                !(s.flags & 128) &&
                (typeof g.getDerivedStateFromError == 'function' ||
                  (y !== null &&
                    typeof y.componentDidCatch == 'function' &&
                    (Jt === null || !Jt.has(y))))
              ) {
                ;(s.flags |= 65536), (t &= -t), (s.lanes |= t)
                var S = op(s, a, t)
                cu(s, S)
                break e
              }
          }
          s = s.return
        } while (s !== null)
      }
      Cp(n)
    } catch (N) {
      ;(t = N), de === n && n !== null && (de = n = n.return)
      continue
    }
    break
  } while (!0)
}
function wp() {
  var e = ks.current
  return (ks.current = Ns), e === null ? Ns : e
}
function Ya() {
  ;(me === 0 || me === 3 || me === 2) && (me = 4),
    ve === null || (!(yn & 268435455) && !(Xs & 268435455)) || At(ve, we)
}
function bs(e, t) {
  var n = U
  U |= 2
  var r = wp()
  ;(ve !== e || we !== t) && ((yt = null), pn(e, t))
  do
    try {
      yy()
      break
    } catch (o) {
      jp(e, o)
    }
  while (!0)
  if ((La(), (U = n), (ks.current = r), de !== null)) throw Error(T(261))
  return (ve = null), (we = 0), me
}
function yy() {
  for (; de !== null; ) Sp(de)
}
function xy() {
  for (; de !== null && !Wg(); ) Sp(de)
}
function Sp(e) {
  var t = kp(e.alternate, e, ze)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? Cp(e) : (de = t),
    (Va.current = null)
}
function Cp(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = fy(n, t)), n !== null)) {
        ;(n.flags &= 32767), (de = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(me = 6), (de = null)
        return
      }
    } else if (((n = dy(n, t, ze)), n !== null)) {
      de = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      de = t
      return
    }
    de = t = e
  } while (t !== null)
  me === 0 && (me = 5)
}
function ln(e, t, n) {
  var r = K,
    o = Ye.transition
  try {
    ;(Ye.transition = null), (K = 1), jy(e, t, n, r)
  } finally {
    ;(Ye.transition = o), (K = r)
  }
  return null
}
function jy(e, t, n, r) {
  do Xn()
  while (zt !== null)
  if (U & 6) throw Error(T(327))
  n = e.finishedWork
  var o = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(T(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var s = n.lanes | n.childLanes
  if (
    (ev(e, s),
    e === ve && ((de = ve = null), (we = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ao ||
      ((Ao = !0),
      Ep(cs, function () {
        return Xn(), null
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    ;(s = Ye.transition), (Ye.transition = null)
    var i = K
    K = 1
    var a = U
    ;(U |= 4),
      (Va.current = null),
      hy(e, n),
      vp(n, e),
      Bv(wi),
      (ds = !!ji),
      (wi = ji = null),
      (e.current = n),
      my(n),
      Kg(),
      (U = a),
      (K = i),
      (Ye.transition = s)
  } else e.current = n
  if (
    (Ao && ((Ao = !1), (zt = e), (Ts = o)),
    (s = e.pendingLanes),
    s === 0 && (Jt = null),
    Jg(n.stateNode),
    Ae(e, ie()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest })
  if (Es) throw ((Es = !1), (e = zi), (zi = null), e)
  return (
    Ts & 1 && e.tag !== 0 && Xn(),
    (s = e.pendingLanes),
    s & 1 ? (e === Ui ? zr++ : ((zr = 0), (Ui = e))) : (zr = 0),
    nn(),
    null
  )
}
function Xn() {
  if (zt !== null) {
    var e = tf(Ts),
      t = Ye.transition,
      n = K
    try {
      if (((Ye.transition = null), (K = 16 > e ? 16 : e), zt === null))
        var r = !1
      else {
        if (((e = zt), (zt = null), (Ts = 0), U & 6)) throw Error(T(331))
        var o = U
        for (U |= 4, P = e.current; P !== null; ) {
          var s = P,
            i = s.child
          if (P.flags & 16) {
            var a = s.deletions
            if (a !== null) {
              for (var c = 0; c < a.length; c++) {
                var u = a[c]
                for (P = u; P !== null; ) {
                  var f = P
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ar(8, f, s)
                  }
                  var d = f.child
                  if (d !== null) (d.return = f), (P = d)
                  else
                    for (; P !== null; ) {
                      f = P
                      var h = f.sibling,
                        j = f.return
                      if ((hp(f), f === u)) {
                        P = null
                        break
                      }
                      if (h !== null) {
                        ;(h.return = j), (P = h)
                        break
                      }
                      P = j
                    }
                }
              }
              var v = s.alternate
              if (v !== null) {
                var x = v.child
                if (x !== null) {
                  v.child = null
                  do {
                    var w = x.sibling
                    ;(x.sibling = null), (x = w)
                  } while (x !== null)
                }
              }
              P = s
            }
          }
          if (s.subtreeFlags & 2064 && i !== null) (i.return = s), (P = i)
          else
            e: for (; P !== null; ) {
              if (((s = P), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ar(9, s, s.return)
                }
              var m = s.sibling
              if (m !== null) {
                ;(m.return = s.return), (P = m)
                break e
              }
              P = s.return
            }
        }
        var g = e.current
        for (P = g; P !== null; ) {
          i = P
          var y = i.child
          if (i.subtreeFlags & 2064 && y !== null) (y.return = i), (P = y)
          else
            e: for (i = g; P !== null; ) {
              if (((a = P), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qs(9, a)
                  }
                } catch (N) {
                  se(a, a.return, N)
                }
              if (a === i) {
                P = null
                break e
              }
              var S = a.sibling
              if (S !== null) {
                ;(S.return = a.return), (P = S)
                break e
              }
              P = a.return
            }
        }
        if (
          ((U = o), nn(), ht && typeof ht.onPostCommitFiberRoot == 'function')
        )
          try {
            ht.onPostCommitFiberRoot(zs, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(K = n), (Ye.transition = t)
    }
  }
  return !1
}
function Ru(e, t, n) {
  ;(t = nr(n, t)),
    (t = rp(e, t, 1)),
    (e = Gt(e, t, 1)),
    (t = Pe()),
    e !== null && (fo(e, 1, t), Ae(e, t))
}
function se(e, t, n) {
  if (e.tag === 3) Ru(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ru(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Jt === null || !Jt.has(r)))
        ) {
          ;(e = nr(n, e)),
            (e = op(t, e, 1)),
            (t = Gt(t, e, 1)),
            (e = Pe()),
            t !== null && (fo(t, 1, e), Ae(t, e))
          break
        }
      }
      t = t.return
    }
}
function wy(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = Pe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ve === e &&
      (we & n) === n &&
      (me === 4 || (me === 3 && (we & 130023424) === we && 500 > ie() - Ja)
        ? pn(e, 0)
        : (Ga |= n)),
    Ae(e, t)
}
function Np(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = _o), (_o <<= 1), !(_o & 130023424) && (_o = 4194304))
      : (t = 1))
  var n = Pe()
  ;(e = bt(e, t)), e !== null && (fo(e, t, n), Ae(e, n))
}
function Sy(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), Np(e, n)
}
function Cy(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState
      o !== null && (n = o.retryLane)
      break
    case 19:
      r = e.stateNode
      break
    default:
      throw Error(T(314))
  }
  r !== null && r.delete(t), Np(e, n)
}
var kp
kp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Fe.current) $e = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ($e = !1), uy(e, t, n)
      $e = !!(e.flags & 131072)
    }
  else ($e = !1), te && t.flags & 1048576 && bf(t, ys, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      Zo(e, t), (e = t.pendingProps)
      var o = qn(t, Te.current)
      Qn(t, n), (o = za(null, t, r, e, o, n))
      var s = Ua()
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ie(r) ? ((s = !0), gs(t)) : (s = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            $a(t),
            (o.updater = Gs),
            (t.stateNode = o),
            (o._reactInternals = t),
            Pi(t, r, e, n),
            (t = Li(null, t, r, !0, s, n)))
          : ((t.tag = 0), te && s && _a(t), _e(null, t, o, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (Zo(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = ky(r)),
          (e = nt(r, e)),
          o)
        ) {
          case 0:
            t = Oi(null, t, r, e, n)
            break e
          case 1:
            t = wu(null, t, r, e, n)
            break e
          case 11:
            t = xu(null, t, r, e, n)
            break e
          case 14:
            t = ju(null, t, r, nt(r.type, e), n)
            break e
        }
        throw Error(T(306, r, ''))
      }
      return t
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : nt(r, o)),
        Oi(e, t, r, o, n)
      )
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : nt(r, o)),
        wu(e, t, r, o, n)
      )
    case 3:
      e: {
        if ((ap(t), e === null)) throw Error(T(387))
        ;(r = t.pendingProps),
          (s = t.memoizedState),
          (o = s.element),
          Of(e, t),
          ws(t, r, null, n)
        var i = t.memoizedState
        if (((r = i.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            ;(o = nr(Error(T(423)), t)), (t = Su(e, t, r, n, o))
            break e
          } else if (r !== o) {
            ;(o = nr(Error(T(424)), t)), (t = Su(e, t, r, n, o))
            break e
          } else
            for (
              He = Vt(t.stateNode.containerInfo.firstChild),
                We = t,
                te = !0,
                ot = null,
                n = $f(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((Zn(), r === o)) {
            t = _t(e, t, n)
            break e
          }
          _e(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        Ff(t),
        e === null && Ti(t),
        (r = t.type),
        (o = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (i = o.children),
        Si(r, o) ? (i = null) : s !== null && Si(r, s) && (t.flags |= 32),
        ip(e, t),
        _e(e, t, i, n),
        t.child
      )
    case 6:
      return e === null && Ti(t), null
    case 13:
      return cp(e, t, n)
    case 4:
      return (
        Fa(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = er(t, null, r, n)) : _e(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : nt(r, o)),
        xu(e, t, r, o, n)
      )
    case 7:
      return _e(e, t, t.pendingProps, n), t.child
    case 8:
      return _e(e, t, t.pendingProps.children, n), t.child
    case 12:
      return _e(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (s = t.memoizedProps),
          (i = o.value),
          Y(xs, r._currentValue),
          (r._currentValue = i),
          s !== null)
        )
          if (at(s.value, i)) {
            if (s.children === o.children && !Fe.current) {
              t = _t(e, t, n)
              break e
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies
              if (a !== null) {
                i = s.child
                for (var c = a.firstContext; c !== null; ) {
                  if (c.context === r) {
                    if (s.tag === 1) {
                      ;(c = Ct(-1, n & -n)), (c.tag = 2)
                      var u = s.updateQueue
                      if (u !== null) {
                        u = u.shared
                        var f = u.pending
                        f === null
                          ? (c.next = c)
                          : ((c.next = f.next), (f.next = c)),
                          (u.pending = c)
                      }
                    }
                    ;(s.lanes |= n),
                      (c = s.alternate),
                      c !== null && (c.lanes |= n),
                      bi(s.return, n, t),
                      (a.lanes |= n)
                    break
                  }
                  c = c.next
                }
              } else if (s.tag === 10) i = s.type === t.type ? null : s.child
              else if (s.tag === 18) {
                if (((i = s.return), i === null)) throw Error(T(341))
                ;(i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  bi(i, n, t),
                  (i = s.sibling)
              } else i = s.child
              if (i !== null) i.return = s
              else
                for (i = s; i !== null; ) {
                  if (i === t) {
                    i = null
                    break
                  }
                  if (((s = i.sibling), s !== null)) {
                    ;(s.return = i.return), (i = s)
                    break
                  }
                  i = i.return
                }
              s = i
            }
        _e(e, t, o.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Qn(t, n),
        (o = Ze(o)),
        (r = r(o)),
        (t.flags |= 1),
        _e(e, t, r, n),
        t.child
      )
    case 14:
      return (
        (r = t.type),
        (o = nt(r, t.pendingProps)),
        (o = nt(r.type, o)),
        ju(e, t, r, o, n)
      )
    case 15:
      return sp(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : nt(r, o)),
        Zo(e, t),
        (t.tag = 1),
        Ie(r) ? ((e = !0), gs(t)) : (e = !1),
        Qn(t, n),
        Df(t, r, o),
        Pi(t, r, o, n),
        Li(null, t, r, !0, e, n)
      )
    case 19:
      return up(e, t, n)
    case 22:
      return lp(e, t, n)
  }
  throw Error(T(156, t.tag))
}
function Ep(e, t) {
  return Yd(e, t)
}
function Ny(e, t, n, r) {
  ;(this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function Xe(e, t, n, r) {
  return new Ny(e, t, n, r)
}
function qa(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function ky(e) {
  if (typeof e == 'function') return qa(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === va)) return 11
    if (e === ya) return 14
  }
  return 2
}
function Xt(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = Xe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  )
}
function ns(e, t, n, r, o, s) {
  var i = 2
  if (((r = e), typeof e == 'function')) qa(e) && (i = 1)
  else if (typeof e == 'string') i = 5
  else
    e: switch (e) {
      case Ln:
        return hn(n.children, o, s, t)
      case ga:
        ;(i = 8), (o |= 8)
        break
      case ei:
        return (e = Xe(12, n, t, o | 2)), (e.elementType = ei), (e.lanes = s), e
      case ti:
        return (e = Xe(13, n, t, o)), (e.elementType = ti), (e.lanes = s), e
      case ni:
        return (e = Xe(19, n, t, o)), (e.elementType = ni), (e.lanes = s), e
      case Dd:
        return Ys(n, o, s, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Od:
              i = 10
              break e
            case Ld:
              i = 9
              break e
            case va:
              i = 11
              break e
            case ya:
              i = 14
              break e
            case Mt:
              ;(i = 16), (r = null)
              break e
          }
        throw Error(T(130, e == null ? e : typeof e, ''))
    }
  return (
    (t = Xe(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  )
}
function hn(e, t, n, r) {
  return (e = Xe(7, e, r, t)), (e.lanes = n), e
}
function Ys(e, t, n, r) {
  return (
    (e = Xe(22, e, r, t)),
    (e.elementType = Dd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function Il(e, t, n) {
  return (e = Xe(6, e, null, t)), (e.lanes = n), e
}
function Al(e, t, n) {
  return (
    (t = Xe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function Ey(e, t, n, r, o) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = xl(0)),
    (this.expirationTimes = xl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = xl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null)
}
function Za(e, t, n, r, o, s, i, a, c) {
  return (
    (e = new Ey(e, t, n, a, c)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Xe(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    $a(s),
    e
  )
}
function Ty(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: On,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  }
}
function Tp(e) {
  if (!e) return Zt
  e = e._reactInternals
  e: {
    if (Sn(e) !== e || e.tag !== 1) throw Error(T(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (Ie(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(T(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (Ie(n)) return Ef(e, n, t)
  }
  return t
}
function bp(e, t, n, r, o, s, i, a, c) {
  return (
    (e = Za(n, r, !0, e, o, s, i, a, c)),
    (e.context = Tp(null)),
    (n = e.current),
    (r = Pe()),
    (o = Qt(n)),
    (s = Ct(r, o)),
    (s.callback = t ?? null),
    Gt(n, s, o),
    (e.current.lanes = o),
    fo(e, o, r),
    Ae(e, r),
    e
  )
}
function qs(e, t, n, r) {
  var o = t.current,
    s = Pe(),
    i = Qt(o)
  return (
    (n = Tp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ct(s, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Gt(o, t, i)),
    e !== null && (it(e, o, i, s), Xo(e, o, i)),
    i
  )
}
function _s(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function Ou(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function ec(e, t) {
  Ou(e, t), (e = e.alternate) && Ou(e, t)
}
function by() {
  return null
}
var _p =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function tc(e) {
  this._internalRoot = e
}
Zs.prototype.render = tc.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(T(409))
  qs(e, t, null, null)
}
Zs.prototype.unmount = tc.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    xn(function () {
      qs(null, e, null, null)
    }),
      (t[Tt] = null)
  }
}
function Zs(e) {
  this._internalRoot = e
}
Zs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = of()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < It.length && t !== 0 && t < It[n].priority; n++);
    It.splice(n, 0, e), n === 0 && lf(e)
  }
}
function nc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function el(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function Lu() {}
function _y(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var s = r
      r = function () {
        var u = _s(i)
        s.call(u)
      }
    }
    var i = bp(t, r, e, 0, null, !1, !1, '', Lu)
    return (
      (e._reactRootContainer = i),
      (e[Tt] = i.current),
      Xr(e.nodeType === 8 ? e.parentNode : e),
      xn(),
      i
    )
  }
  for (; (o = e.lastChild); ) e.removeChild(o)
  if (typeof r == 'function') {
    var a = r
    r = function () {
      var u = _s(c)
      a.call(u)
    }
  }
  var c = Za(e, 0, !1, null, null, !1, !1, '', Lu)
  return (
    (e._reactRootContainer = c),
    (e[Tt] = c.current),
    Xr(e.nodeType === 8 ? e.parentNode : e),
    xn(function () {
      qs(t, c, n, r)
    }),
    c
  )
}
function tl(e, t, n, r, o) {
  var s = n._reactRootContainer
  if (s) {
    var i = s
    if (typeof o == 'function') {
      var a = o
      o = function () {
        var c = _s(i)
        a.call(c)
      }
    }
    qs(t, i, e, o)
  } else i = _y(n, t, e, o, r)
  return _s(i)
}
nf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = Pr(t.pendingLanes)
        n !== 0 &&
          (wa(t, n | 1), Ae(t, ie()), !(U & 6) && ((rr = ie() + 500), nn()))
      }
      break
    case 13:
      xn(function () {
        var r = bt(e, 1)
        if (r !== null) {
          var o = Pe()
          it(r, e, 1, o)
        }
      }),
        ec(e, 1)
  }
}
Sa = function (e) {
  if (e.tag === 13) {
    var t = bt(e, 134217728)
    if (t !== null) {
      var n = Pe()
      it(t, e, 134217728, n)
    }
    ec(e, 134217728)
  }
}
rf = function (e) {
  if (e.tag === 13) {
    var t = Qt(e),
      n = bt(e, t)
    if (n !== null) {
      var r = Pe()
      it(n, e, t, r)
    }
    ec(e, t)
  }
}
of = function () {
  return K
}
sf = function (e, t) {
  var n = K
  try {
    return (K = e), t()
  } finally {
    K = n
  }
}
fi = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((si(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t]
          if (r !== e && r.form === e.form) {
            var o = Ks(r)
            if (!o) throw Error(T(90))
            $d(r), si(r, o)
          }
        }
      }
      break
    case 'textarea':
      Id(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && Kn(e, !!n.multiple, t, !1)
  }
}
Kd = Qa
Vd = xn
var Py = { usingClientEntryPoint: !1, Events: [ho, Fn, Ks, Hd, Wd, Qa] },
  Nr = {
    findFiberByHostInstance: un,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  Ry = {
    bundleType: Nr.bundleType,
    version: Nr.version,
    rendererPackageName: Nr.rendererPackageName,
    rendererConfig: Nr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Rt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Qd(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Nr.findFiberByHostInstance || by,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Bo = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!Bo.isDisabled && Bo.supportsFiber)
    try {
      ;(zs = Bo.inject(Ry)), (ht = Bo)
    } catch {}
}
Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Py
Ve.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!nc(t)) throw Error(T(200))
  return Ty(e, t, null, n)
}
Ve.createRoot = function (e, t) {
  if (!nc(e)) throw Error(T(299))
  var n = !1,
    r = '',
    o = _p
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Za(e, 1, !1, null, null, n, !1, r, o)),
    (e[Tt] = t.current),
    Xr(e.nodeType === 8 ? e.parentNode : e),
    new tc(t)
  )
}
Ve.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(T(188))
      : ((e = Object.keys(e).join(',')), Error(T(268, e)))
  return (e = Qd(t)), (e = e === null ? null : e.stateNode), e
}
Ve.flushSync = function (e) {
  return xn(e)
}
Ve.hydrate = function (e, t, n) {
  if (!el(t)) throw Error(T(200))
  return tl(null, e, t, !0, n)
}
Ve.hydrateRoot = function (e, t, n) {
  if (!nc(e)) throw Error(T(405))
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    s = '',
    i = _p
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = bp(t, null, e, 1, n ?? null, o, !1, s, i)),
    (e[Tt] = t.current),
    Xr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o)
  return new Zs(t)
}
Ve.render = function (e, t, n) {
  if (!el(t)) throw Error(T(200))
  return tl(null, e, t, !1, n)
}
Ve.unmountComponentAtNode = function (e) {
  if (!el(e)) throw Error(T(40))
  return e._reactRootContainer
    ? (xn(function () {
        tl(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[Tt] = null)
        })
      }),
      !0)
    : !1
}
Ve.unstable_batchedUpdates = Qa
Ve.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!el(n)) throw Error(T(200))
  if (e == null || e._reactInternals === void 0) throw Error(T(38))
  return tl(e, t, n, !1, r)
}
Ve.version = '18.2.0-next-9e3b772b8-20220608'
function Pp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pp)
    } catch (e) {
      console.error(e)
    }
}
Pp(), (Td.exports = Ve)
var Rp = Td.exports
const Wn = As(Rp)
var Du = Rp
;(ql.createRoot = Du.createRoot), (ql.hydrateRoot = Du.hydrateRoot)
/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function so() {
  return (
    (so = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    so.apply(this, arguments)
  )
}
var Ut
;(function (e) {
  ;(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE')
})(Ut || (Ut = {}))
const Mu = 'popstate'
function Oy(e) {
  e === void 0 && (e = {})
  function t(r, o) {
    let { pathname: s, search: i, hash: a } = r.location
    return Ki(
      '',
      { pathname: s, search: i, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default'
    )
  }
  function n(r, o) {
    return typeof o == 'string' ? o : Ps(o)
  }
  return Dy(t, n, null, e)
}
function fe(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t)
}
function rc(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t)
    try {
      throw new Error(t)
    } catch {}
  }
}
function Ly() {
  return Math.random().toString(36).substr(2, 8)
}
function $u(e, t) {
  return { usr: e.state, key: e.key, idx: t }
}
function Ki(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    so(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? ar(t) : t,
      { state: n, key: (t && t.key) || r || Ly() }
    )
  )
}
function Ps(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  )
}
function ar(e) {
  let t = {}
  if (e) {
    let n = e.indexOf('#')
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)))
    let r = e.indexOf('?')
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e)
  }
  return t
}
function Dy(e, t, n, r) {
  r === void 0 && (r = {})
  let { window: o = document.defaultView, v5Compat: s = !1 } = r,
    i = o.history,
    a = Ut.Pop,
    c = null,
    u = f()
  u == null && ((u = 0), i.replaceState(so({}, i.state, { idx: u }), ''))
  function f() {
    return (i.state || { idx: null }).idx
  }
  function d() {
    a = Ut.Pop
    let w = f(),
      m = w == null ? null : w - u
    ;(u = w), c && c({ action: a, location: x.location, delta: m })
  }
  function h(w, m) {
    a = Ut.Push
    let g = Ki(x.location, w, m)
    n && n(g, w), (u = f() + 1)
    let y = $u(g, u),
      S = x.createHref(g)
    try {
      i.pushState(y, '', S)
    } catch (N) {
      if (N instanceof DOMException && N.name === 'DataCloneError') throw N
      o.location.assign(S)
    }
    s && c && c({ action: a, location: x.location, delta: 1 })
  }
  function j(w, m) {
    a = Ut.Replace
    let g = Ki(x.location, w, m)
    n && n(g, w), (u = f())
    let y = $u(g, u),
      S = x.createHref(g)
    i.replaceState(y, '', S),
      s && c && c({ action: a, location: x.location, delta: 0 })
  }
  function v(w) {
    let m = o.location.origin !== 'null' ? o.location.origin : o.location.href,
      g = typeof w == 'string' ? w : Ps(w)
    return (
      fe(
        m,
        'No window.location.(origin|href) available to create URL for href: ' +
          g
      ),
      new URL(g, m)
    )
  }
  let x = {
    get action() {
      return a
    },
    get location() {
      return e(o, i)
    },
    listen(w) {
      if (c) throw new Error('A history only accepts one active listener')
      return (
        o.addEventListener(Mu, d),
        (c = w),
        () => {
          o.removeEventListener(Mu, d), (c = null)
        }
      )
    },
    createHref(w) {
      return t(o, w)
    },
    createURL: v,
    encodeLocation(w) {
      let m = v(w)
      return { pathname: m.pathname, search: m.search, hash: m.hash }
    },
    push: h,
    replace: j,
    go(w) {
      return i.go(w)
    },
  }
  return x
}
var Fu
;(function (e) {
  ;(e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error')
})(Fu || (Fu = {}))
function My(e, t, n) {
  n === void 0 && (n = '/')
  let r = typeof t == 'string' ? ar(t) : t,
    o = oc(r.pathname || '/', n)
  if (o == null) return null
  let s = Op(e)
  $y(s)
  let i = null
  for (let a = 0; i == null && a < s.length; ++a) i = Ky(s[a], Jy(o))
  return i
}
function Op(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '')
  let o = (s, i, a) => {
    let c = {
      relativePath: a === void 0 ? s.path || '' : a,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: i,
      route: s,
    }
    c.relativePath.startsWith('/') &&
      (fe(
        c.relativePath.startsWith(r),
        'Absolute route path "' +
          c.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (c.relativePath = c.relativePath.slice(r.length)))
    let u = Yt([r, c.relativePath]),
      f = n.concat(c)
    s.children &&
      s.children.length > 0 &&
      (fe(
        s.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + u + '".')
      ),
      Op(s.children, t, f, u)),
      !(s.path == null && !s.index) &&
        t.push({ path: u, score: Hy(u, s.index), routesMeta: f })
  }
  return (
    e.forEach((s, i) => {
      var a
      if (s.path === '' || !((a = s.path) != null && a.includes('?'))) o(s, i)
      else for (let c of Lp(s.path)) o(s, i, c)
    }),
    t
  )
}
function Lp(e) {
  let t = e.split('/')
  if (t.length === 0) return []
  let [n, ...r] = t,
    o = n.endsWith('?'),
    s = n.replace(/\?$/, '')
  if (r.length === 0) return o ? [s, ''] : [s]
  let i = Lp(r.join('/')),
    a = []
  return (
    a.push(...i.map((c) => (c === '' ? s : [s, c].join('/')))),
    o && a.push(...i),
    a.map((c) => (e.startsWith('/') && c === '' ? '/' : c))
  )
}
function $y(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Wy(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  )
}
const Fy = /^:[\w-]+$/,
  Iy = 3,
  Ay = 2,
  By = 1,
  zy = 10,
  Uy = -2,
  Iu = (e) => e === '*'
function Hy(e, t) {
  let n = e.split('/'),
    r = n.length
  return (
    n.some(Iu) && (r += Uy),
    t && (r += Ay),
    n
      .filter((o) => !Iu(o))
      .reduce((o, s) => o + (Fy.test(s) ? Iy : s === '' ? By : zy), r)
  )
}
function Wy(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0
}
function Ky(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = '/',
    s = []
  for (let i = 0; i < n.length; ++i) {
    let a = n[i],
      c = i === n.length - 1,
      u = o === '/' ? t : t.slice(o.length) || '/',
      f = Vy(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: c },
        u
      )
    if (!f) return null
    Object.assign(r, f.params)
    let d = a.route
    s.push({
      params: r,
      pathname: Yt([o, f.pathname]),
      pathnameBase: Zy(Yt([o, f.pathnameBase])),
      route: d,
    }),
      f.pathnameBase !== '/' && (o = Yt([o, f.pathnameBase]))
  }
  return s
}
function Vy(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 })
  let [n, r] = Gy(e.path, e.caseSensitive, e.end),
    o = t.match(n)
  if (!o) return null
  let s = o[0],
    i = s.replace(/(.)\/+$/, '$1'),
    a = o.slice(1)
  return {
    params: r.reduce((u, f, d) => {
      let { paramName: h, isOptional: j } = f
      if (h === '*') {
        let x = a[d] || ''
        i = s.slice(0, s.length - x.length).replace(/(.)\/+$/, '$1')
      }
      const v = a[d]
      return j && !v ? (u[h] = void 0) : (u[h] = Qy(v || '', h)), u
    }, {}),
    pathname: s,
    pathnameBase: i,
    pattern: e,
  }
}
function Gy(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    rc(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    )
  let r = [],
    o =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, a, c) => (
            r.push({ paramName: a, isOptional: c != null }),
            c ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        )
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }),
        (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
        ? (o += '\\/*$')
        : e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, t ? void 0 : 'i'), r]
  )
}
function Jy(e) {
  try {
    return decodeURI(e)
  } catch (t) {
    return (
      rc(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    )
  }
}
function Qy(e, t) {
  try {
    return decodeURIComponent(e)
  } catch (n) {
    return (
      rc(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').')
      ),
      e
    )
  }
}
function oc(e, t) {
  if (t === '/') return e
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n)
  return r && r !== '/' ? null : e.slice(n) || '/'
}
function Xy(e, t) {
  t === void 0 && (t = '/')
  let {
    pathname: n,
    search: r = '',
    hash: o = '',
  } = typeof e == 'string' ? ar(e) : e
  return {
    pathname: n ? (n.startsWith('/') ? n : Yy(n, t)) : t,
    search: ex(r),
    hash: tx(o),
  }
}
function Yy(e, t) {
  let n = t.replace(/\/+$/, '').split('/')
  return (
    e.split('/').forEach((o) => {
      o === '..' ? n.length > 1 && n.pop() : o !== '.' && n.push(o)
    }),
    n.length > 1 ? n.join('/') : '/'
  )
}
function Bl(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  )
}
function qy(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  )
}
function Dp(e, t) {
  let n = qy(e)
  return t
    ? n.map((r, o) => (o === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase)
}
function Mp(e, t, n, r) {
  r === void 0 && (r = !1)
  let o
  typeof e == 'string'
    ? (o = ar(e))
    : ((o = so({}, e)),
      fe(
        !o.pathname || !o.pathname.includes('?'),
        Bl('?', 'pathname', 'search', o)
      ),
      fe(
        !o.pathname || !o.pathname.includes('#'),
        Bl('#', 'pathname', 'hash', o)
      ),
      fe(!o.search || !o.search.includes('#'), Bl('#', 'search', 'hash', o)))
  let s = e === '' || o.pathname === '',
    i = s ? '/' : o.pathname,
    a
  if (i == null) a = n
  else {
    let d = t.length - 1
    if (!r && i.startsWith('..')) {
      let h = i.split('/')
      for (; h[0] === '..'; ) h.shift(), (d -= 1)
      o.pathname = h.join('/')
    }
    a = d >= 0 ? t[d] : '/'
  }
  let c = Xy(o, a),
    u = i && i !== '/' && i.endsWith('/'),
    f = (s || i === '.') && n.endsWith('/')
  return !c.pathname.endsWith('/') && (u || f) && (c.pathname += '/'), c
}
const Yt = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Zy = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  ex = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  tx = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e)
function nx(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  )
}
const $p = ['post', 'put', 'patch', 'delete']
new Set($p)
const rx = ['get', ...$p]
new Set(rx)
/**
 * React Router v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function lo() {
  return (
    (lo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    lo.apply(this, arguments)
  )
}
const sc = p.createContext(null),
  ox = p.createContext(null),
  Cn = p.createContext(null),
  nl = p.createContext(null),
  rn = p.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Fp = p.createContext(null)
function sx(e, t) {
  let { relative: n } = t === void 0 ? {} : t
  go() || fe(!1)
  let { basename: r, navigator: o } = p.useContext(Cn),
    { hash: s, pathname: i, search: a } = Bp(e, { relative: n }),
    c = i
  return (
    r !== '/' && (c = i === '/' ? r : Yt([r, i])),
    o.createHref({ pathname: c, search: a, hash: s })
  )
}
function go() {
  return p.useContext(nl) != null
}
function rl() {
  return go() || fe(!1), p.useContext(nl).location
}
function Ip(e) {
  p.useContext(Cn).static || p.useLayoutEffect(e)
}
function lx() {
  let { isDataRoute: e } = p.useContext(rn)
  return e ? xx() : ix()
}
function ix() {
  go() || fe(!1)
  let e = p.useContext(sc),
    { basename: t, future: n, navigator: r } = p.useContext(Cn),
    { matches: o } = p.useContext(rn),
    { pathname: s } = rl(),
    i = JSON.stringify(Dp(o, n.v7_relativeSplatPath)),
    a = p.useRef(!1)
  return (
    Ip(() => {
      a.current = !0
    }),
    p.useCallback(
      function (u, f) {
        if ((f === void 0 && (f = {}), !a.current)) return
        if (typeof u == 'number') {
          r.go(u)
          return
        }
        let d = Mp(u, JSON.parse(i), s, f.relative === 'path')
        e == null &&
          t !== '/' &&
          (d.pathname = d.pathname === '/' ? t : Yt([t, d.pathname])),
          (f.replace ? r.replace : r.push)(d, f.state, f)
      },
      [t, r, i, s, e]
    )
  )
}
function Ap() {
  let { matches: e } = p.useContext(rn),
    t = e[e.length - 1]
  return t ? t.params : {}
}
function Bp(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = p.useContext(Cn),
    { matches: o } = p.useContext(rn),
    { pathname: s } = rl(),
    i = JSON.stringify(Dp(o, r.v7_relativeSplatPath))
  return p.useMemo(() => Mp(e, JSON.parse(i), s, n === 'path'), [e, i, s, n])
}
function ax(e, t) {
  return cx(e, t)
}
function cx(e, t, n, r) {
  go() || fe(!1)
  let { navigator: o } = p.useContext(Cn),
    { matches: s } = p.useContext(rn),
    i = s[s.length - 1],
    a = i ? i.params : {}
  i && i.pathname
  let c = i ? i.pathnameBase : '/'
  i && i.route
  let u = rl(),
    f
  if (t) {
    var d
    let w = typeof t == 'string' ? ar(t) : t
    c === '/' || ((d = w.pathname) != null && d.startsWith(c)) || fe(!1),
      (f = w)
  } else f = u
  let h = f.pathname || '/',
    j = c === '/' ? h : h.slice(c.length) || '/',
    v = My(e, { pathname: j }),
    x = hx(
      v &&
        v.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, a, w.params),
            pathname: Yt([
              c,
              o.encodeLocation
                ? o.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === '/'
                ? c
                : Yt([
                    c,
                    o.encodeLocation
                      ? o.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      s,
      n,
      r
    )
  return t && x
    ? p.createElement(
        nl.Provider,
        {
          value: {
            location: lo(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              f
            ),
            navigationType: Ut.Pop,
          },
        },
        x
      )
    : x
}
function ux() {
  let e = yx(),
    t = nx(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' }
  return p.createElement(
    p.Fragment,
    null,
    p.createElement('h2', null, 'Unexpected Application Error!'),
    p.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? p.createElement('pre', { style: o }, n) : null,
    null
  )
}
const dx = p.createElement(ux, null)
class fx extends p.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      })
  }
  static getDerivedStateFromError(t) {
    return { error: t }
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        }
  }
  componentDidCatch(t, n) {
    console.error('React Router caught the following error during render', t, n)
  }
  render() {
    return this.state.error !== void 0
      ? p.createElement(
          rn.Provider,
          { value: this.props.routeContext },
          p.createElement(Fp.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children
  }
}
function px(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = p.useContext(sc)
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    p.createElement(rn.Provider, { value: t }, r)
  )
}
function hx(e, t, n, r) {
  var o
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var s
    if ((s = n) != null && s.errors) e = n.matches
    else return null
  }
  let i = e,
    a = (o = n) == null ? void 0 : o.errors
  if (a != null) {
    let f = i.findIndex(
      (d) => d.route.id && (a == null ? void 0 : a[d.route.id])
    )
    f >= 0 || fe(!1), (i = i.slice(0, Math.min(i.length, f + 1)))
  }
  let c = !1,
    u = -1
  if (n && r && r.v7_partialHydration)
    for (let f = 0; f < i.length; f++) {
      let d = i[f]
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = f),
        d.route.id)
      ) {
        let { loaderData: h, errors: j } = n,
          v =
            d.route.loader &&
            h[d.route.id] === void 0 &&
            (!j || j[d.route.id] === void 0)
        if (d.route.lazy || v) {
          ;(c = !0), u >= 0 ? (i = i.slice(0, u + 1)) : (i = [i[0]])
          break
        }
      }
    }
  return i.reduceRight((f, d, h) => {
    let j,
      v = !1,
      x = null,
      w = null
    n &&
      ((j = a && d.route.id ? a[d.route.id] : void 0),
      (x = d.route.errorElement || dx),
      c &&
        (u < 0 && h === 0
          ? (jx('route-fallback', !1), (v = !0), (w = null))
          : u === h &&
            ((v = !0), (w = d.route.hydrateFallbackElement || null))))
    let m = t.concat(i.slice(0, h + 1)),
      g = () => {
        let y
        return (
          j
            ? (y = x)
            : v
              ? (y = w)
              : d.route.Component
                ? (y = p.createElement(d.route.Component, null))
                : d.route.element
                  ? (y = d.route.element)
                  : (y = f),
          p.createElement(px, {
            match: d,
            routeContext: { outlet: f, matches: m, isDataRoute: n != null },
            children: y,
          })
        )
      }
    return n && (d.route.ErrorBoundary || d.route.errorElement || h === 0)
      ? p.createElement(fx, {
          location: n.location,
          revalidation: n.revalidation,
          component: x,
          error: j,
          children: g(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : g()
  }, null)
}
var zp = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    )
  })(zp || {}),
  Rs = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    )
  })(Rs || {})
function mx(e) {
  let t = p.useContext(sc)
  return t || fe(!1), t
}
function gx(e) {
  let t = p.useContext(ox)
  return t || fe(!1), t
}
function vx(e) {
  let t = p.useContext(rn)
  return t || fe(!1), t
}
function Up(e) {
  let t = vx(),
    n = t.matches[t.matches.length - 1]
  return n.route.id || fe(!1), n.route.id
}
function yx() {
  var e
  let t = p.useContext(Fp),
    n = gx(Rs.UseRouteError),
    r = Up(Rs.UseRouteError)
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function xx() {
  let { router: e } = mx(zp.UseNavigateStable),
    t = Up(Rs.UseNavigateStable),
    n = p.useRef(!1)
  return (
    Ip(() => {
      n.current = !0
    }),
    p.useCallback(
      function (o, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof o == 'number'
              ? e.navigate(o)
              : e.navigate(o, lo({ fromRouteId: t }, s)))
      },
      [e, t]
    )
  )
}
const Au = {}
function jx(e, t, n) {
  !t && !Au[e] && (Au[e] = !0)
}
function ue(e) {
  fe(!1)
}
function wx(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: o = Ut.Pop,
    navigator: s,
    static: i = !1,
    future: a,
  } = e
  go() && fe(!1)
  let c = t.replace(/^\/*/, '/'),
    u = p.useMemo(
      () => ({
        basename: c,
        navigator: s,
        static: i,
        future: lo({ v7_relativeSplatPath: !1 }, a),
      }),
      [c, a, s, i]
    )
  typeof r == 'string' && (r = ar(r))
  let {
      pathname: f = '/',
      search: d = '',
      hash: h = '',
      state: j = null,
      key: v = 'default',
    } = r,
    x = p.useMemo(() => {
      let w = oc(f, c)
      return w == null
        ? null
        : {
            location: { pathname: w, search: d, hash: h, state: j, key: v },
            navigationType: o,
          }
    }, [c, f, d, h, j, v, o])
  return x == null
    ? null
    : p.createElement(
        Cn.Provider,
        { value: u },
        p.createElement(nl.Provider, { children: n, value: x })
      )
}
function Sx(e) {
  let { children: t, location: n } = e
  return ax(Vi(t), n)
}
new Promise(() => {})
function Vi(e, t) {
  t === void 0 && (t = [])
  let n = []
  return (
    p.Children.forEach(e, (r, o) => {
      if (!p.isValidElement(r)) return
      let s = [...t, o]
      if (r.type === p.Fragment) {
        n.push.apply(n, Vi(r.props.children, s))
        return
      }
      r.type !== ue && fe(!1), !r.props.index || !r.props.children || fe(!1)
      let i = {
        id: r.props.id || s.join('-'),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      }
      r.props.children && (i.children = Vi(r.props.children, s)), n.push(i)
    }),
    n
  )
}
/**
 * React Router DOM v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Gi() {
  return (
    (Gi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    Gi.apply(this, arguments)
  )
}
function Cx(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    o,
    s
  for (s = 0; s < r.length; s++)
    (o = r[s]), !(t.indexOf(o) >= 0) && (n[o] = e[o])
  return n
}
function Nx(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function kx(e, t) {
  return e.button === 0 && (!t || t === '_self') && !Nx(e)
}
const Ex = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  Tx = 'startTransition',
  Bu = Sg[Tx]
function bx(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    s = p.useRef()
  s.current == null && (s.current = Oy({ window: o, v5Compat: !0 }))
  let i = s.current,
    [a, c] = p.useState({ action: i.action, location: i.location }),
    { v7_startTransition: u } = r || {},
    f = p.useCallback(
      (d) => {
        u && Bu ? Bu(() => c(d)) : c(d)
      },
      [c, u]
    )
  return (
    p.useLayoutEffect(() => i.listen(f), [i, f]),
    p.createElement(wx, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: i,
      future: r,
    })
  )
}
const _x =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Px = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ue = p.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: s,
        replace: i,
        state: a,
        target: c,
        to: u,
        preventScrollReset: f,
        unstable_viewTransition: d,
      } = t,
      h = Cx(t, Ex),
      { basename: j } = p.useContext(Cn),
      v,
      x = !1
    if (typeof u == 'string' && Px.test(u) && ((v = u), _x))
      try {
        let y = new URL(window.location.href),
          S = u.startsWith('//') ? new URL(y.protocol + u) : new URL(u),
          N = oc(S.pathname, j)
        S.origin === y.origin && N != null
          ? (u = N + S.search + S.hash)
          : (x = !0)
      } catch {}
    let w = sx(u, { relative: o }),
      m = Rx(u, {
        replace: i,
        state: a,
        target: c,
        preventScrollReset: f,
        relative: o,
        unstable_viewTransition: d,
      })
    function g(y) {
      r && r(y), y.defaultPrevented || m(y)
    }
    return p.createElement(
      'a',
      Gi({}, h, { href: v || w, onClick: x || s ? r : g, ref: n, target: c })
    )
  })
var zu
;(function (e) {
  ;(e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState')
})(zu || (zu = {}))
var Uu
;(function (e) {
  ;(e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration')
})(Uu || (Uu = {}))
function Rx(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: s,
      relative: i,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    c = lx(),
    u = rl(),
    f = Bp(e, { relative: i })
  return p.useCallback(
    (d) => {
      if (kx(d, n)) {
        d.preventDefault()
        let h = r !== void 0 ? r : Ps(u) === Ps(f)
        c(e, {
          replace: h,
          state: o,
          preventScrollReset: s,
          relative: i,
          unstable_viewTransition: a,
        })
      }
    },
    [u, c, f, r, o, n, e, s, i, a]
  )
}
var Hp = { exports: {} },
  Ox = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  Lx = Ox,
  Dx = Lx
function Wp() {}
function Kp() {}
Kp.resetWarningCache = Wp
var Mx = function () {
  function e(r, o, s, i, a, c) {
    if (c !== Dx) {
      var u = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
      )
      throw ((u.name = 'Invariant Violation'), u)
    }
  }
  e.isRequired = e
  function t() {
    return e
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Kp,
    resetWarningCache: Wp,
  }
  return (n.PropTypes = n), n
}
Hp.exports = Mx()
var $x = Hp.exports
const ke = As($x)
function Fx(e, t, n) {
  const r = p.useRef(e !== void 0),
    [o, s] = p.useState(t),
    i = e !== void 0,
    a = r.current
  return (
    (r.current = i),
    !i && a && o !== t && s(t),
    [
      i ? e : o,
      p.useCallback(
        (...c) => {
          const [u, ...f] = c
          let d = n == null ? void 0 : n(u, ...f)
          return s(u), d
        },
        [n]
      ),
    ]
  )
}
const Os = { prefix: String(Math.round(Math.random() * 1e10)), current: 0 },
  Vp = Q.createContext(Os),
  Ix = Q.createContext(!1)
let Ax = !!(
    typeof window < 'u' &&
    window.document &&
    window.document.createElement
  ),
  zl = new WeakMap()
function Bx(e = !1) {
  let t = p.useContext(Vp),
    n = p.useRef(null)
  if (n.current === null && !e) {
    var r, o
    let s =
      (o = Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null ||
      o === void 0 ||
      (r = o.ReactCurrentOwner) === null ||
      r === void 0
        ? void 0
        : r.current
    if (s) {
      let i = zl.get(s)
      i == null
        ? zl.set(s, { id: t.current, state: s.memoizedState })
        : s.memoizedState !== i.state && ((t.current = i.id), zl.delete(s))
    }
    n.current = ++t.current
  }
  return n.current
}
function zx(e) {
  let t = p.useContext(Vp)
  t === Os &&
    !Ax &&
    console.warn(
      'When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.'
    )
  let n = Bx(!!e),
    r = `react-aria${t.prefix}`
  return e || `${r}-${n}`
}
function Ux(e) {
  let t = Q.useId(),
    [n] = p.useState(Gx()),
    r = n ? 'react-aria' : `react-aria${Os.prefix}`
  return e || `${r}-${t}`
}
const Hx = typeof Q.useId == 'function' ? Ux : zx
function Wx() {
  return !1
}
function Kx() {
  return !0
}
function Vx(e) {
  return () => {}
}
function Gx() {
  return typeof Q.useSyncExternalStore == 'function'
    ? Q.useSyncExternalStore(Vx, Wx, Kx)
    : p.useContext(Ix)
}
const Jx = p.createContext(null),
  cr = Jx,
  Qx = p.createContext(null),
  io = (e, t = null) => (e != null ? String(e) : t || null),
  jn = Qx
function Xx(e) {
  const t = p.useRef(e)
  return (
    p.useEffect(() => {
      t.current = e
    }, [e]),
    t
  )
}
function Me(e) {
  const t = Xx(e)
  return p.useCallback(
    function (...n) {
      return t.current && t.current(...n)
    },
    [t]
  )
}
const Hu = (e) =>
  !e || typeof e == 'function'
    ? e
    : (t) => {
        e.current = t
      }
function Yx(e, t) {
  const n = Hu(e),
    r = Hu(t)
  return (o) => {
    n && n(o), r && r(o)
  }
}
function vo(e, t) {
  return p.useMemo(() => Yx(e, t), [e, t])
}
function lc({
  children: e,
  in: t,
  onExited: n,
  mountOnEnter: r,
  unmountOnExit: o,
}) {
  const s = p.useRef(null),
    i = p.useRef(t),
    a = Me(n)
  p.useEffect(() => {
    t ? (i.current = !0) : a(s.current)
  }, [t, a])
  const c = vo(s, e.ref),
    u = p.cloneElement(e, { ref: c })
  return t ? u : o || (!i.current && r) ? null : u
}
const qx = [
    'active',
    'eventKey',
    'mountOnEnter',
    'transition',
    'unmountOnExit',
    'role',
    'onEnter',
    'onEntering',
    'onEntered',
    'onExit',
    'onExiting',
    'onExited',
  ],
  Zx = ['activeKey', 'getControlledId', 'getControllerId'],
  e0 = ['as']
function Ji(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    o,
    s
  for (s = 0; s < r.length; s++)
    (o = r[s]), !(t.indexOf(o) >= 0) && (n[o] = e[o])
  return n
}
function Gp(e) {
  let {
      active: t,
      eventKey: n,
      mountOnEnter: r,
      transition: o,
      unmountOnExit: s,
      role: i = 'tabpanel',
      onEnter: a,
      onEntering: c,
      onEntered: u,
      onExit: f,
      onExiting: d,
      onExited: h,
    } = e,
    j = Ji(e, qx)
  const v = p.useContext(cr)
  if (!v)
    return [
      Object.assign({}, j, { role: i }),
      {
        eventKey: n,
        isActive: t,
        mountOnEnter: r,
        transition: o,
        unmountOnExit: s,
        onEnter: a,
        onEntering: c,
        onEntered: u,
        onExit: f,
        onExiting: d,
        onExited: h,
      },
    ]
  const { activeKey: x, getControlledId: w, getControllerId: m } = v,
    g = Ji(v, Zx),
    y = io(n)
  return [
    Object.assign({}, j, { role: i, id: w(n), 'aria-labelledby': m(n) }),
    {
      eventKey: n,
      isActive: t == null && y != null ? io(x) === y : t,
      transition: o || g.transition,
      mountOnEnter: r ?? g.mountOnEnter,
      unmountOnExit: s ?? g.unmountOnExit,
      onEnter: a,
      onEntering: c,
      onEntered: u,
      onExit: f,
      onExiting: d,
      onExited: h,
    },
  ]
}
const Jp = p.forwardRef((e, t) => {
  let { as: n = 'div' } = e,
    r = Ji(e, e0)
  const [
    o,
    {
      isActive: s,
      onEnter: i,
      onEntering: a,
      onEntered: c,
      onExit: u,
      onExiting: f,
      onExited: d,
      mountOnEnter: h,
      unmountOnExit: j,
      transition: v = lc,
    },
  ] = Gp(r)
  return l.jsx(cr.Provider, {
    value: null,
    children: l.jsx(jn.Provider, {
      value: null,
      children: l.jsx(v, {
        in: s,
        onEnter: i,
        onEntering: a,
        onEntered: c,
        onExit: u,
        onExiting: f,
        onExited: d,
        mountOnEnter: h,
        unmountOnExit: j,
        children: l.jsx(
          n,
          Object.assign({}, o, { ref: t, hidden: !s, 'aria-hidden': !s })
        ),
      }),
    }),
  })
})
Jp.displayName = 'TabPanel'
const Qp = (e) => {
  const {
      id: t,
      generateChildId: n,
      onSelect: r,
      activeKey: o,
      defaultActiveKey: s,
      transition: i,
      mountOnEnter: a,
      unmountOnExit: c,
      children: u,
    } = e,
    [f, d] = Fx(o, s, r),
    h = Hx(t),
    j = p.useMemo(() => n || ((x, w) => (h ? `${h}-${w}-${x}` : null)), [h, n]),
    v = p.useMemo(
      () => ({
        onSelect: d,
        activeKey: f,
        transition: i,
        mountOnEnter: a || !1,
        unmountOnExit: c || !1,
        getControlledId: (x) => j(x, 'tabpane'),
        getControllerId: (x) => j(x, 'tab'),
      }),
      [d, f, i, a, c, j]
    )
  return l.jsx(cr.Provider, {
    value: v,
    children: l.jsx(jn.Provider, { value: d || null, children: u }),
  })
}
Qp.Panel = Jp
const t0 = Qp
var Xp = { exports: {} }
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ ;(function (e) {
  ;(function () {
    var t = {}.hasOwnProperty
    function n() {
      for (var s = '', i = 0; i < arguments.length; i++) {
        var a = arguments[i]
        a && (s = o(s, r(a)))
      }
      return s
    }
    function r(s) {
      if (typeof s == 'string' || typeof s == 'number') return s
      if (typeof s != 'object') return ''
      if (Array.isArray(s)) return n.apply(null, s)
      if (
        s.toString !== Object.prototype.toString &&
        !s.toString.toString().includes('[native code]')
      )
        return s.toString()
      var i = ''
      for (var a in s) t.call(s, a) && s[a] && (i = o(i, a))
      return i
    }
    function o(s, i) {
      return i ? (s ? s + ' ' + i : s + i) : s
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n)
  })()
})(Xp)
var n0 = Xp.exports
const R = As(n0)
function Yp(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    o,
    s
  for (s = 0; s < r.length; s++)
    (o = r[s]), !(t.indexOf(o) >= 0) && (n[o] = e[o])
  return n
}
function Qi(e, t) {
  return (
    (Qi = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r
        }),
    Qi(e, t)
  )
}
function r0(e, t) {
  ;(e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Qi(e, t)
}
const Wu = { disabled: !1 },
  qp = Q.createContext(null)
var o0 = function (t) {
    return t.scrollTop
  },
  Or = 'unmounted',
  Ft = 'exited',
  st = 'entering',
  jt = 'entered',
  ao = 'exiting',
  Ot = (function (e) {
    r0(t, e)
    function t(r, o) {
      var s
      s = e.call(this, r, o) || this
      var i = o,
        a = i && !i.isMounting ? r.enter : r.appear,
        c
      return (
        (s.appearStatus = null),
        r.in
          ? a
            ? ((c = Ft), (s.appearStatus = st))
            : (c = jt)
          : r.unmountOnExit || r.mountOnEnter
            ? (c = Or)
            : (c = Ft),
        (s.state = { status: c }),
        (s.nextCallback = null),
        s
      )
    }
    t.getDerivedStateFromProps = function (o, s) {
      var i = o.in
      return i && s.status === Or ? { status: Ft } : null
    }
    var n = t.prototype
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus)
      }),
      (n.componentDidUpdate = function (o) {
        var s = null
        if (o !== this.props) {
          var i = this.state.status
          this.props.in
            ? i !== st && i !== jt && (s = st)
            : (i === st || i === jt) && (s = ao)
        }
        this.updateStatus(!1, s)
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback()
      }),
      (n.getTimeouts = function () {
        var o = this.props.timeout,
          s,
          i,
          a
        return (
          (s = i = a = o),
          o != null &&
            typeof o != 'number' &&
            ((s = o.exit),
            (i = o.enter),
            (a = o.appear !== void 0 ? o.appear : i)),
          { exit: s, enter: i, appear: a }
        )
      }),
      (n.updateStatus = function (o, s) {
        if ((o === void 0 && (o = !1), s !== null))
          if ((this.cancelNextCallback(), s === st)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var i = this.props.nodeRef
                ? this.props.nodeRef.current
                : Wn.findDOMNode(this)
              i && o0(i)
            }
            this.performEnter(o)
          } else this.performExit()
        else
          this.props.unmountOnExit &&
            this.state.status === Ft &&
            this.setState({ status: Or })
      }),
      (n.performEnter = function (o) {
        var s = this,
          i = this.props.enter,
          a = this.context ? this.context.isMounting : o,
          c = this.props.nodeRef ? [a] : [Wn.findDOMNode(this), a],
          u = c[0],
          f = c[1],
          d = this.getTimeouts(),
          h = a ? d.appear : d.enter
        if ((!o && !i) || Wu.disabled) {
          this.safeSetState({ status: jt }, function () {
            s.props.onEntered(u)
          })
          return
        }
        this.props.onEnter(u, f),
          this.safeSetState({ status: st }, function () {
            s.props.onEntering(u, f),
              s.onTransitionEnd(h, function () {
                s.safeSetState({ status: jt }, function () {
                  s.props.onEntered(u, f)
                })
              })
          })
      }),
      (n.performExit = function () {
        var o = this,
          s = this.props.exit,
          i = this.getTimeouts(),
          a = this.props.nodeRef ? void 0 : Wn.findDOMNode(this)
        if (!s || Wu.disabled) {
          this.safeSetState({ status: Ft }, function () {
            o.props.onExited(a)
          })
          return
        }
        this.props.onExit(a),
          this.safeSetState({ status: ao }, function () {
            o.props.onExiting(a),
              o.onTransitionEnd(i.exit, function () {
                o.safeSetState({ status: Ft }, function () {
                  o.props.onExited(a)
                })
              })
          })
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null))
      }),
      (n.safeSetState = function (o, s) {
        ;(s = this.setNextCallback(s)), this.setState(o, s)
      }),
      (n.setNextCallback = function (o) {
        var s = this,
          i = !0
        return (
          (this.nextCallback = function (a) {
            i && ((i = !1), (s.nextCallback = null), o(a))
          }),
          (this.nextCallback.cancel = function () {
            i = !1
          }),
          this.nextCallback
        )
      }),
      (n.onTransitionEnd = function (o, s) {
        this.setNextCallback(s)
        var i = this.props.nodeRef
            ? this.props.nodeRef.current
            : Wn.findDOMNode(this),
          a = o == null && !this.props.addEndListener
        if (!i || a) {
          setTimeout(this.nextCallback, 0)
          return
        }
        if (this.props.addEndListener) {
          var c = this.props.nodeRef
              ? [this.nextCallback]
              : [i, this.nextCallback],
            u = c[0],
            f = c[1]
          this.props.addEndListener(u, f)
        }
        o != null && setTimeout(this.nextCallback, o)
      }),
      (n.render = function () {
        var o = this.state.status
        if (o === Or) return null
        var s = this.props,
          i = s.children
        s.in,
          s.mountOnEnter,
          s.unmountOnExit,
          s.appear,
          s.enter,
          s.exit,
          s.timeout,
          s.addEndListener,
          s.onEnter,
          s.onEntering,
          s.onEntered,
          s.onExit,
          s.onExiting,
          s.onExited,
          s.nodeRef
        var a = Yp(s, [
          'children',
          'in',
          'mountOnEnter',
          'unmountOnExit',
          'appear',
          'enter',
          'exit',
          'timeout',
          'addEndListener',
          'onEnter',
          'onEntering',
          'onEntered',
          'onExit',
          'onExiting',
          'onExited',
          'nodeRef',
        ])
        return Q.createElement(
          qp.Provider,
          { value: null },
          typeof i == 'function'
            ? i(o, a)
            : Q.cloneElement(Q.Children.only(i), a)
        )
      }),
      t
    )
  })(Q.Component)
Ot.contextType = qp
Ot.propTypes = {}
function Pn() {}
Ot.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Pn,
  onEntering: Pn,
  onEntered: Pn,
  onExit: Pn,
  onExiting: Pn,
  onExited: Pn,
}
Ot.UNMOUNTED = Or
Ot.EXITED = Ft
Ot.ENTERING = st
Ot.ENTERED = jt
Ot.EXITING = ao
const s0 = Ot
function ol(e) {
  return (e && e.ownerDocument) || document
}
function l0(e) {
  var t = ol(e)
  return (t && t.defaultView) || window
}
function i0(e, t) {
  return l0(e).getComputedStyle(e, t)
}
var a0 = /([A-Z])/g
function c0(e) {
  return e.replace(a0, '-$1').toLowerCase()
}
var u0 = /^ms-/
function zo(e) {
  return c0(e).replace(u0, '-ms-')
}
var d0 =
  /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i
function f0(e) {
  return !!(e && d0.test(e))
}
function Nt(e, t) {
  var n = '',
    r = ''
  if (typeof t == 'string')
    return e.style.getPropertyValue(zo(t)) || i0(e).getPropertyValue(zo(t))
  Object.keys(t).forEach(function (o) {
    var s = t[o]
    !s && s !== 0
      ? e.style.removeProperty(zo(o))
      : f0(o)
        ? (r += o + '(' + s + ') ')
        : (n += zo(o) + ': ' + s + ';')
  }),
    r && (n += 'transform: ' + r + ';'),
    (e.style.cssText += ';' + n)
}
const ur = !!(
  typeof window < 'u' &&
  window.document &&
  window.document.createElement
)
var Xi = !1,
  Yi = !1
try {
  var Ul = {
    get passive() {
      return (Xi = !0)
    },
    get once() {
      return (Yi = Xi = !0)
    },
  }
  ur &&
    (window.addEventListener('test', Ul, Ul),
    window.removeEventListener('test', Ul, !0))
} catch {}
function Zp(e, t, n, r) {
  if (r && typeof r != 'boolean' && !Yi) {
    var o = r.once,
      s = r.capture,
      i = n
    !Yi &&
      o &&
      ((i =
        n.__once ||
        function a(c) {
          this.removeEventListener(t, a, s), n.call(this, c)
        }),
      (n.__once = i)),
      e.addEventListener(t, i, Xi ? r : s)
  }
  e.addEventListener(t, n, r)
}
function qi(e, t, n, r) {
  var o = r && typeof r != 'boolean' ? r.capture : r
  e.removeEventListener(t, n, o),
    n.__once && e.removeEventListener(t, n.__once, o)
}
function Ls(e, t, n, r) {
  return (
    Zp(e, t, n, r),
    function () {
      qi(e, t, n, r)
    }
  )
}
function p0(e, t, n, r) {
  if ((n === void 0 && (n = !1), r === void 0 && (r = !0), e)) {
    var o = document.createEvent('HTMLEvents')
    o.initEvent(t, n, r), e.dispatchEvent(o)
  }
}
function h0(e) {
  var t = Nt(e, 'transitionDuration') || '',
    n = t.indexOf('ms') === -1 ? 1e3 : 1
  return parseFloat(t) * n
}
function m0(e, t, n) {
  n === void 0 && (n = 5)
  var r = !1,
    o = setTimeout(function () {
      r || p0(e, 'transitionend', !0)
    }, t + n),
    s = Ls(
      e,
      'transitionend',
      function () {
        r = !0
      },
      { once: !0 }
    )
  return function () {
    clearTimeout(o), s()
  }
}
function eh(e, t, n, r) {
  n == null && (n = h0(e) || 0)
  var o = m0(e, n, r),
    s = Ls(e, 'transitionend', t)
  return function () {
    o(), s()
  }
}
function Ku(e, t) {
  const n = Nt(e, t) || '',
    r = n.indexOf('ms') === -1 ? 1e3 : 1
  return parseFloat(n) * r
}
function ic(e, t) {
  const n = Ku(e, 'transitionDuration'),
    r = Ku(e, 'transitionDelay'),
    o = eh(
      e,
      (s) => {
        s.target === e && (o(), t(s))
      },
      n + r
    )
}
function th(e) {
  e.offsetHeight
}
function g0(e) {
  return e && 'setState' in e ? Wn.findDOMNode(e) : e ?? null
}
const v0 = Q.forwardRef(
    (
      {
        onEnter: e,
        onEntering: t,
        onEntered: n,
        onExit: r,
        onExiting: o,
        onExited: s,
        addEndListener: i,
        children: a,
        childRef: c,
        ...u
      },
      f
    ) => {
      const d = p.useRef(null),
        h = vo(d, c),
        j = (C) => {
          h(g0(C))
        },
        v = (C) => (E) => {
          C && d.current && C(d.current, E)
        },
        x = p.useCallback(v(e), [e]),
        w = p.useCallback(v(t), [t]),
        m = p.useCallback(v(n), [n]),
        g = p.useCallback(v(r), [r]),
        y = p.useCallback(v(o), [o]),
        S = p.useCallback(v(s), [s]),
        N = p.useCallback(v(i), [i])
      return l.jsx(s0, {
        ref: f,
        ...u,
        onEnter: x,
        onEntered: m,
        onEntering: w,
        onExit: g,
        onExited: S,
        onExiting: y,
        addEndListener: N,
        nodeRef: d,
        children:
          typeof a == 'function'
            ? (C, E) => a(C, { ...E, ref: j })
            : Q.cloneElement(a, { ref: j }),
      })
    }
  ),
  ac = v0,
  y0 = { [st]: 'show', [jt]: 'show' },
  nh = p.forwardRef(
    (
      {
        className: e,
        children: t,
        transitionClasses: n = {},
        onEnter: r,
        ...o
      },
      s
    ) => {
      const i = {
          in: !1,
          timeout: 300,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          ...o,
        },
        a = p.useCallback(
          (c, u) => {
            th(c), r == null || r(c, u)
          },
          [r]
        )
      return l.jsx(ac, {
        ref: s,
        addEndListener: ic,
        ...i,
        onEnter: a,
        childRef: t.ref,
        children: (c, u) =>
          p.cloneElement(t, {
            ...u,
            className: R('fade', e, t.props.className, y0[c], n[c]),
          }),
      })
    }
  )
nh.displayName = 'Fade'
const yo = nh
function rh(e) {
  return typeof e == 'boolean' ? (e ? yo : lc) : e
}
const oh = ({ transition: e, ...t }) => l.jsx(t0, { ...t, transition: rh(e) })
oh.displayName = 'TabContainer'
const x0 = oh,
  j0 = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
  w0 = 'xs',
  sl = p.createContext({ prefixes: {}, breakpoints: j0, minBreakpoint: w0 })
function D(e, t) {
  const { prefixes: n } = p.useContext(sl)
  return e || n[t] || t
}
function sh() {
  const { breakpoints: e } = p.useContext(sl)
  return e
}
function lh() {
  const { minBreakpoint: e } = p.useContext(sl)
  return e
}
function S0() {
  const { dir: e } = p.useContext(sl)
  return e === 'rtl'
}
const ih = p.forwardRef(
  ({ className: e, bsPrefix: t, as: n = 'div', ...r }, o) => (
    (t = D(t, 'tab-content')), l.jsx(n, { ref: o, className: R(e, t), ...r })
  )
)
ih.displayName = 'TabContent'
const C0 = ih,
  ah = p.forwardRef(({ bsPrefix: e, transition: t, ...n }, r) => {
    const [
        { className: o, as: s = 'div', ...i },
        {
          isActive: a,
          onEnter: c,
          onEntering: u,
          onEntered: f,
          onExit: d,
          onExiting: h,
          onExited: j,
          mountOnEnter: v,
          unmountOnExit: x,
          transition: w = yo,
        },
      ] = Gp({ ...n, transition: rh(t) }),
      m = D(e, 'tab-pane')
    return l.jsx(cr.Provider, {
      value: null,
      children: l.jsx(jn.Provider, {
        value: null,
        children: l.jsx(w, {
          in: a,
          onEnter: c,
          onEntering: u,
          onEntered: f,
          onExit: d,
          onExiting: h,
          onExited: j,
          mountOnEnter: v,
          unmountOnExit: x,
          children: l.jsx(s, {
            ...i,
            ref: r,
            className: R(o, m, a && 'active'),
          }),
        }),
      }),
    })
  })
ah.displayName = 'TabPane'
const N0 = ah,
  k0 = {
    eventKey: ke.oneOfType([ke.string, ke.number]),
    title: ke.node.isRequired,
    disabled: ke.bool,
    tabClassName: ke.string,
    tabAttrs: ke.object,
  },
  ch = () => {
    throw new Error(
      "ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly"
    )
  }
ch.propTypes = k0
const le = Object.assign(ch, { Container: x0, Content: C0, Pane: N0 })
var Vu = { exports: {} },
  Zi = { exports: {} }
;(function (e, t) {
  Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = n)
  function n(r) {
    function o(i, a, c, u, f, d) {
      var h = u || '<<anonymous>>',
        j = d || c
      if (a[c] == null)
        return i
          ? new Error(
              'Required ' +
                f +
                ' `' +
                j +
                '` was not specified ' +
                ('in `' + h + '`.')
            )
          : null
      for (
        var v = arguments.length, x = Array(v > 6 ? v - 6 : 0), w = 6;
        w < v;
        w++
      )
        x[w - 6] = arguments[w]
      return r.apply(void 0, [a, c, h, f, j].concat(x))
    }
    var s = o.bind(null, !1)
    return (s.isRequired = o.bind(null, !0)), s
  }
  e.exports = t.default
})(Zi, Zi.exports)
var E0 = Zi.exports
;(function (e, t) {
  Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = s)
  var n = E0,
    r = o(n)
  function o(i) {
    return i && i.__esModule ? i : { default: i }
  }
  function s() {
    for (var i = arguments.length, a = Array(i), c = 0; c < i; c++)
      a[c] = arguments[c]
    function u() {
      for (var f = arguments.length, d = Array(f), h = 0; h < f; h++)
        d[h] = arguments[h]
      var j = null
      return (
        a.forEach(function (v) {
          if (j == null) {
            var x = v.apply(void 0, d)
            x != null && (j = x)
          }
        }),
        j
      )
    }
    return (0, r.default)(u)
  }
  e.exports = t.default
})(Vu, Vu.exports)
function ea() {
  return (
    (ea = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    ea.apply(this, arguments)
  )
}
function Gu(e) {
  return 'default' + e.charAt(0).toUpperCase() + e.substr(1)
}
function T0(e) {
  var t = b0(e, 'string')
  return typeof t == 'symbol' ? t : String(t)
}
function b0(e, t) {
  if (typeof e != 'object' || e === null) return e
  var n = e[Symbol.toPrimitive]
  if (n !== void 0) {
    var r = n.call(e, t || 'default')
    if (typeof r != 'object') return r
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function _0(e, t, n) {
  var r = p.useRef(e !== void 0),
    o = p.useState(t),
    s = o[0],
    i = o[1],
    a = e !== void 0,
    c = r.current
  return (
    (r.current = a),
    !a && c && s !== t && i(t),
    [
      a ? e : s,
      p.useCallback(
        function (u) {
          for (
            var f = arguments.length, d = new Array(f > 1 ? f - 1 : 0), h = 1;
            h < f;
            h++
          )
            d[h - 1] = arguments[h]
          n && n.apply(void 0, [u].concat(d)), i(u)
        },
        [n]
      ),
    ]
  )
}
function uh(e, t) {
  return Object.keys(t).reduce(function (n, r) {
    var o,
      s = n,
      i = s[Gu(r)],
      a = s[r],
      c = Yp(s, [Gu(r), r].map(T0)),
      u = t[r],
      f = _0(a, i, e[u]),
      d = f[0],
      h = f[1]
    return ea({}, c, ((o = {}), (o[r] = d), (o[u] = h), o))
  }, e)
}
var P0 = Function.prototype.bind.call(Function.prototype.call, [].slice)
function an(e, t) {
  return P0(e.querySelectorAll(t))
}
function R0() {
  const [, e] = p.useReducer((t) => !t, !1)
  return e
}
const dh = p.createContext(null)
dh.displayName = 'NavContext'
const fh = dh,
  O0 = 'data-rr-ui-',
  L0 = 'rrUi'
function ll(e) {
  return `${O0}${e}`
}
function D0(e) {
  return `${L0}${e}`
}
const M0 = ['as', 'disabled']
function $0(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    o,
    s
  for (s = 0; s < r.length; s++)
    (o = r[s]), !(t.indexOf(o) >= 0) && (n[o] = e[o])
  return n
}
function F0(e) {
  return !e || e.trim() === '#'
}
function cc({
  tagName: e,
  disabled: t,
  href: n,
  target: r,
  rel: o,
  role: s,
  onClick: i,
  tabIndex: a = 0,
  type: c,
}) {
  e || (n != null || r != null || o != null ? (e = 'a') : (e = 'button'))
  const u = { tagName: e }
  if (e === 'button') return [{ type: c || 'button', disabled: t }, u]
  const f = (h) => {
      if (((t || (e === 'a' && F0(n))) && h.preventDefault(), t)) {
        h.stopPropagation()
        return
      }
      i == null || i(h)
    },
    d = (h) => {
      h.key === ' ' && (h.preventDefault(), f(h))
    }
  return (
    e === 'a' && (n || (n = '#'), t && (n = void 0)),
    [
      {
        role: s ?? 'button',
        disabled: void 0,
        tabIndex: t ? void 0 : a,
        href: n,
        target: e === 'a' ? r : void 0,
        'aria-disabled': t || void 0,
        rel: e === 'a' ? o : void 0,
        onClick: f,
        onKeyDown: d,
      },
      u,
    ]
  )
}
const ph = p.forwardRef((e, t) => {
  let { as: n, disabled: r } = e,
    o = $0(e, M0)
  const [s, { tagName: i }] = cc(Object.assign({ tagName: n, disabled: r }, o))
  return l.jsx(i, Object.assign({}, o, s, { ref: t }))
})
ph.displayName = 'Button'
const I0 = ['as', 'active', 'eventKey']
function A0(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    o,
    s
  for (s = 0; s < r.length; s++)
    (o = r[s]), !(t.indexOf(o) >= 0) && (n[o] = e[o])
  return n
}
function hh({ key: e, onClick: t, active: n, id: r, role: o, disabled: s }) {
  const i = p.useContext(jn),
    a = p.useContext(fh),
    c = p.useContext(cr)
  let u = n
  const f = { role: o }
  if (a) {
    !o && a.role === 'tablist' && (f.role = 'tab')
    const d = a.getControllerId(e ?? null),
      h = a.getControlledId(e ?? null)
    ;(f[ll('event-key')] = e),
      (f.id = d || r),
      (u = n == null && e != null ? a.activeKey === e : n),
      (u ||
        (!(c != null && c.unmountOnExit) && !(c != null && c.mountOnEnter))) &&
        (f['aria-controls'] = h)
  }
  return (
    f.role === 'tab' &&
      ((f['aria-selected'] = u),
      u || (f.tabIndex = -1),
      s && ((f.tabIndex = -1), (f['aria-disabled'] = !0))),
    (f.onClick = Me((d) => {
      s ||
        (t == null || t(d),
        e != null && i && !d.isPropagationStopped() && i(e, d))
    })),
    [f, { isActive: u }]
  )
}
const mh = p.forwardRef((e, t) => {
  let { as: n = ph, active: r, eventKey: o } = e,
    s = A0(e, I0)
  const [i, a] = hh(Object.assign({ key: io(o, s.href), active: r }, s))
  return (
    (i[ll('active')] = a.isActive),
    l.jsx(n, Object.assign({}, s, i, { ref: t }))
  )
})
mh.displayName = 'NavItem'
const B0 = mh,
  z0 = ['as', 'onSelect', 'activeKey', 'role', 'onKeyDown']
function U0(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    o,
    s
  for (s = 0; s < r.length; s++)
    (o = r[s]), !(t.indexOf(o) >= 0) && (n[o] = e[o])
  return n
}
const Ju = () => {},
  Qu = ll('event-key'),
  gh = p.forwardRef((e, t) => {
    let { as: n = 'div', onSelect: r, activeKey: o, role: s, onKeyDown: i } = e,
      a = U0(e, z0)
    const c = R0(),
      u = p.useRef(!1),
      f = p.useContext(jn),
      d = p.useContext(cr)
    let h, j
    d &&
      ((s = s || 'tablist'),
      (o = d.activeKey),
      (h = d.getControlledId),
      (j = d.getControllerId))
    const v = p.useRef(null),
      x = (y) => {
        const S = v.current
        if (!S) return null
        const N = an(S, `[${Qu}]:not([aria-disabled=true])`),
          C = S.querySelector('[aria-selected=true]')
        if (!C || C !== document.activeElement) return null
        const E = N.indexOf(C)
        if (E === -1) return null
        let _ = E + y
        return _ >= N.length && (_ = 0), _ < 0 && (_ = N.length - 1), N[_]
      },
      w = (y, S) => {
        y != null && (r == null || r(y, S), f == null || f(y, S))
      },
      m = (y) => {
        if ((i == null || i(y), !d)) return
        let S
        switch (y.key) {
          case 'ArrowLeft':
          case 'ArrowUp':
            S = x(-1)
            break
          case 'ArrowRight':
          case 'ArrowDown':
            S = x(1)
            break
          default:
            return
        }
        S &&
          (y.preventDefault(),
          w(S.dataset[D0('EventKey')] || null, y),
          (u.current = !0),
          c())
      }
    p.useEffect(() => {
      if (v.current && u.current) {
        const y = v.current.querySelector(`[${Qu}][aria-selected=true]`)
        y == null || y.focus()
      }
      u.current = !1
    })
    const g = vo(t, v)
    return l.jsx(jn.Provider, {
      value: w,
      children: l.jsx(fh.Provider, {
        value: {
          role: s,
          activeKey: io(o),
          getControlledId: h || Ju,
          getControllerId: j || Ju,
        },
        children: l.jsx(
          n,
          Object.assign({}, a, { onKeyDown: m, ref: g, role: s })
        ),
      }),
    })
  })
gh.displayName = 'Nav'
const H0 = Object.assign(gh, { Item: B0 }),
  vh = p.createContext(null)
vh.displayName = 'NavbarContext'
const dr = vh,
  yh = p.createContext(null)
yh.displayName = 'CardHeaderContext'
const xh = yh,
  jh = p.forwardRef(
    ({ className: e, bsPrefix: t, as: n = 'div', ...r }, o) => (
      (t = D(t, 'nav-item')), l.jsx(n, { ref: o, className: R(e, t), ...r })
    )
  )
jh.displayName = 'NavItem'
const W0 = jh
function K0() {
  return p.useState(null)
}
function V0() {
  const e = p.useRef(!0),
    t = p.useRef(() => e.current)
  return (
    p.useEffect(
      () => (
        (e.current = !0),
        () => {
          e.current = !1
        }
      ),
      []
    ),
    t.current
  )
}
function G0(e) {
  const t = p.useRef(null)
  return (
    p.useEffect(() => {
      t.current = e
    }),
    t.current
  )
}
const J0 =
    typeof global < 'u' &&
    global.navigator &&
    global.navigator.product === 'ReactNative',
  Q0 = typeof document < 'u',
  ta = Q0 || J0 ? p.useLayoutEffect : p.useEffect,
  X0 = ['onKeyDown']
function Y0(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    o,
    s
  for (s = 0; s < r.length; s++)
    (o = r[s]), !(t.indexOf(o) >= 0) && (n[o] = e[o])
  return n
}
function q0(e) {
  return !e || e.trim() === '#'
}
const wh = p.forwardRef((e, t) => {
  let { onKeyDown: n } = e,
    r = Y0(e, X0)
  const [o] = cc(Object.assign({ tagName: 'a' }, r)),
    s = Me((i) => {
      o.onKeyDown(i), n == null || n(i)
    })
  return q0(r.href) || r.role === 'button'
    ? l.jsx('a', Object.assign({ ref: t }, r, o, { onKeyDown: s }))
    : l.jsx('a', Object.assign({ ref: t }, r, { onKeyDown: n }))
})
wh.displayName = 'Anchor'
const Z0 = wh,
  Sh = p.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        as: n = Z0,
        active: r,
        eventKey: o,
        disabled: s = !1,
        ...i
      },
      a
    ) => {
      e = D(e, 'nav-link')
      const [c, u] = hh({ key: io(o, i.href), active: r, disabled: s, ...i })
      return l.jsx(n, {
        ...i,
        ...c,
        ref: a,
        disabled: s,
        className: R(t, e, s && 'disabled', u.isActive && 'active'),
      })
    }
  )
Sh.displayName = 'NavLink'
const e1 = Sh,
  Ch = p.forwardRef((e, t) => {
    const {
        as: n = 'div',
        bsPrefix: r,
        variant: o,
        fill: s = !1,
        justify: i = !1,
        navbar: a,
        navbarScroll: c,
        className: u,
        activeKey: f,
        ...d
      } = uh(e, { activeKey: 'onSelect' }),
      h = D(r, 'nav')
    let j,
      v,
      x = !1
    const w = p.useContext(dr),
      m = p.useContext(xh)
    return (
      w
        ? ((j = w.bsPrefix), (x = a ?? !0))
        : m && ({ cardHeaderBsPrefix: v } = m),
      l.jsx(H0, {
        as: n,
        ref: t,
        activeKey: f,
        className: R(u, {
          [h]: !x,
          [`${j}-nav`]: x,
          [`${j}-nav-scroll`]: x && c,
          [`${v}-${o}`]: !!v,
          [`${h}-${o}`]: !!o,
          [`${h}-fill`]: s,
          [`${h}-justified`]: i,
        }),
        ...d,
      })
    )
  })
Ch.displayName = 'Nav'
const I = Object.assign(Ch, { Item: W0, Link: e1 }),
  Nh = p.forwardRef(
    ({ bsPrefix: e, fluid: t = !1, as: n = 'div', className: r, ...o }, s) => {
      const i = D(e, 'container'),
        a = typeof t == 'string' ? `-${t}` : '-fluid'
      return l.jsx(n, { ref: s, ...o, className: R(r, t ? `${i}${a}` : i) })
    }
  )
Nh.displayName = 'Container'
const xo = Nh
function t1({ title: e, subtitle: t, id: n, content: r, date: o }) {
  const [s, i] = p.useState(!1),
    a = () => {
      i(!s)
    }
  return l.jsx('div', {
    className: 'card mb-4',
    children: l.jsxs('div', {
      className: 'card-body bg-dark',
      children: [
        l.jsx('h2', { className: 'card-title text-light', children: e }),
        l.jsx('h6', { className: 'card-date text-light mb-2', children: o }),
        l.jsx('p', { className: 'card-text text-light', children: t }),
        s
          ? l.jsxs(l.Fragment, {
              children: [
                l.jsx('div', {
                  className: 'container',
                  children: l.jsx('div', {
                    className: 'text-light bg-dark',
                    dangerouslySetInnerHTML: { __html: r },
                  }),
                }),
                l.jsx('button', {
                  className: 'btn btn-primary',
                  onClick: a,
                  children: 'Show Less',
                }),
              ],
            })
          : l.jsx('button', {
              className: 'btn btn-primary',
              onClick: a,
              children: 'Read More',
            }),
      ],
    }),
  })
}
const n1 = [
    {
      title: 'Today I Failed a Technical Interview',
      subtitle:
        'Turning a failed technical interview into a learning experience',
      content: './blogs/technology/BombingAnInterview.html',
      date: 'January 11, 2024',
    },
    {
      title: 'When Creating New Products Turns to Technical Debt',
      subtitle:
        'That time I overhauled a dilapidated repository to create a new application',
      content: './blogs/technology/TechnicalDebt.html',
      date: 'January 11, 2024',
    },
    {
      title: 'The Role of AI in Software Development',
      subtitle: 'The turning of a page in engineer productivity',
      content: './blogs/technology/ChatGPT.html',
      date: 'January 3, 2024',
    },
    {
      title: 'Hello, world!',
      subtitle: 'Making a better site with ChatGPT in an afternoon.',
      content: './blogs/technology/HelloWorld.html',
      date: 'January 1, 2024',
    },
  ],
  r1 = [
    {
      title: 'Notes on Eat That Frog!',
      subtitle: 'Keeping track of my notes while I read',
      content: './blogs/personal/EatThatFrog.html',
      date: 'January 18, 2024',
    },
    {
      title: 'Reflecting on my South American Trip',
      subtitle: 'Thoughts from my second airplane ride home',
      content: './blogs/personal/PanamaFlight.html',
      date: 'January 11, 2024',
    },
    {
      title: 'The DaVinci Method',
      subtitle: 'Thoughts on the path less traveled',
      content: './blogs/personal/TheDaVinciMethod.html',
      date: 'January 2, 2024',
    },
    {
      title: 'Hello from Buenos Aires!',
      subtitle: 'Checking in from Buenos Aires, Argentina',
      content: './blogs/personal/HelloFromArgentina.html',
      date: 'January 1, 2024',
    },
  ],
  o1 = [
    {
      title: 'Connecting Google Cloud Storage',
      subtitle: 'Enhancing the Neighborhoods backend with GCS',
      content: './blogs/projects/ConnectingGoogleCloudStorage.html',
      date: 'January 27, 2024',
    },
    {
      title: 'The Neighborhoods Backend',
      subtitle:
        'Creating a backend to support front ends for neighborhood associations in Philly',
      content: './blogs/projects/MakingNeighborhoodsBackend.html',
      date: 'January 26, 2024',
    },
    {
      title: '1, 2, 3 Deployed!',
      subtitle: 'Deploying and setting up CI/CD for benmath.io',
      content: './blogs/projects/123Deployment.html',
      date: 'January 25, 2024',
    },
    {
      title: "Gotta Catch 'Em All - Bulding the Pokedex",
      subtitle: 'All the features, that is!',
      content: './blogs/projects/GottaCatchEmAll.html',
      date: 'January 20, 2024',
    },
    {
      title: 'Scaling up the Brandsite Generator',
      subtitle:
        'Unearthing technical debt to make it a multi-page site solution',
      content: './blogs/projects/BrandsiteGeneratorPages.html',
      date: 'January 17, 2024',
    },
  ]
function s1() {
  const [e, t] = p.useState('technology'),
    [n, r] = p.useState([]),
    [o, s] = p.useState([]),
    [i, a] = p.useState([])
  p.useEffect(() => {
    const u = async (f, d) => {
      try {
        const h = await fetch(d)
        if (!h.ok) throw new Error('Failed to fetch content')
        return await h.text()
      } catch (h) {
        return console.error(h), ''
      }
    }
    Promise.all(
      n1.map((f) =>
        u('technology', f.content).then((d) => ({ ...f, content: d }))
      )
    ).then((f) => r(f)),
      Promise.all(
        r1.map((f) =>
          u('personal', f.content).then((d) => ({ ...f, content: d }))
        )
      ).then((f) => s(f)),
      Promise.all(
        o1.map((f) =>
          u('projects', f.content).then((d) => ({ ...f, content: d }))
        )
      ).then((f) => a(f))
  }, [])
  const c = (u, f) =>
    l.jsx('div', {
      children: f.map((d) =>
        l.jsx(
          t1,
          {
            title: d.title,
            subtitle: d.subtitle,
            date: d.date,
            id: d.title,
            content: d.content,
          },
          d.title
        )
      ),
    })
  return l.jsxs('div', {
    className: 'container',
    children: [
      l.jsx('h1', {
        style: { paddingTop: '100px' },
        className: 'text-center',
        children: 'Blog',
      }),
      l.jsxs(le.Container, {
        id: 'blog-tabs',
        activeKey: e,
        onSelect: (u) => t(u),
        children: [
          l.jsx(xo, {
            children: l.jsxs(I, {
              variant: 'pills',
              className: 'justify-content-center',
              children: [
                l.jsx(I.Item, {
                  children: l.jsx(I.Link, {
                    eventKey: 'technology',
                    children: 'Technology',
                  }),
                }),
                l.jsx(I.Item, {
                  children: l.jsx(I.Link, {
                    eventKey: 'personal',
                    children: 'Personal',
                  }),
                }),
                l.jsx(I.Item, {
                  children: l.jsx(I.Link, {
                    eventKey: 'projects',
                    children: 'Projects',
                  }),
                }),
              ],
            }),
          }),
          l.jsxs(le.Content, {
            children: [
              l.jsx(le.Pane, {
                eventKey: 'technology',
                children: c('technology', n),
              }),
              l.jsx(le.Pane, {
                eventKey: 'personal',
                children: c('personal', o),
              }),
              l.jsx(le.Pane, {
                eventKey: 'projects',
                children: c('projects', i),
              }),
            ],
          }),
        ],
      }),
    ],
  })
}
function l1() {
  return l.jsx('div', {
    children: l.jsx('section', {
      className: 'hero bg-primary text-white py-5',
      children: l.jsxs('div', {
        style: { paddingTop: '50px' },
        className: 'container text-center',
        children: [
          l.jsx('img', {
            src: 'https://media.licdn.com/dms/image/D4E03AQH--5mTLwHlBQ/profile-displayphoto-shrink_400_400/0/1664807111568?e=1709769600&v=beta&t=Ml3wEiJek-1V5TT8XKRLVO6xawYpsLKcAt_JokLBEUI',
            alt: 'Your Name',
            className: 'rounded-circle mb-4',
            width: '150',
          }),
          l.jsx('h1', { children: 'Welcome to My Personal Website' }),
          l.jsx('p', {
            className: 'lead',
            children:
              "I'm Benjamin Math, a Software Engineer based in Philadelphia.",
          }),
          l.jsx('p', {
            children:
              'I have a passion for coding with JavaScript, Python, and Java. I enjoy working on projects that make a difference for my community, customers, and the world.',
          }),
          l.jsx('a', {
            href: '/portfolio',
            className: 'btn btn-light btn-lg',
            style: { width: '150px', margin: '15px' },
            children: 'View My Portfolio',
          }),
          l.jsx('a', {
            href: '/blog',
            className: 'btn btn-light btn-lg',
            style: { width: '150px', margin: '15px' },
            children: 'View My Blog',
          }),
        ],
      }),
    }),
  })
}
var kh = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Xu = Q.createContext && Q.createContext(kh),
  i1 = ['attr', 'size', 'title']
function a1(e, t) {
  if (e == null) return {}
  var n = c1(e, t),
    r,
    o
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e)
    for (o = 0; o < s.length; o++)
      (r = s[o]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r])
  }
  return n
}
function c1(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    o,
    s
  for (s = 0; s < r.length; s++)
    (o = r[s]), !(t.indexOf(o) >= 0) && (n[o] = e[o])
  return n
}
function Ds() {
  return (
    (Ds = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    Ds.apply(this, arguments)
  )
}
function Yu(e, t) {
  var n = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e)
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function Ms(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? Yu(Object(n), !0).forEach(function (r) {
          u1(e, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Yu(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
          })
  }
  return e
}
function u1(e, t, n) {
  return (
    (t = d1(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  )
}
function d1(e) {
  var t = f1(e, 'string')
  return typeof t == 'symbol' ? t : String(t)
}
function f1(e, t) {
  if (typeof e != 'object' || e === null) return e
  var n = e[Symbol.toPrimitive]
  if (n !== void 0) {
    var r = n.call(e, t || 'default')
    if (typeof r != 'object') return r
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function Eh(e) {
  return (
    e &&
    e.map((t, n) => Q.createElement(t.tag, Ms({ key: n }, t.attr), Eh(t.child)))
  )
}
function fr(e) {
  return (t) =>
    Q.createElement(p1, Ds({ attr: Ms({}, e.attr) }, t), Eh(e.child))
}
function p1(e) {
  var t = (n) => {
    var { attr: r, size: o, title: s } = e,
      i = a1(e, i1),
      a = o || n.size || '1em',
      c
    return (
      n.className && (c = n.className),
      e.className && (c = (c ? c + ' ' : '') + e.className),
      Q.createElement(
        'svg',
        Ds(
          { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
          n.attr,
          r,
          i,
          {
            className: c,
            style: Ms(Ms({ color: e.color || n.color }, n.style), e.style),
            height: a,
            width: a,
            xmlns: 'http://www.w3.org/2000/svg',
          }
        ),
        s && Q.createElement('title', null, s),
        e.children
      )
    )
  }
  return Xu !== void 0 ? Q.createElement(Xu.Consumer, null, (n) => t(n)) : t(kh)
}
function h1(e) {
  return fr({
    tag: 'svg',
    attr: { viewBox: '0 0 496 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z',
        },
        child: [],
      },
    ],
  })(e)
}
function m1(e) {
  return fr({
    tag: 'svg',
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z',
        },
        child: [],
      },
    ],
  })(e)
}
function g1(e) {
  return fr({
    tag: 'svg',
    attr: { viewBox: '0 0 384 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z',
        },
        child: [],
      },
    ],
  })(e)
}
function v1(e) {
  return fr({
    tag: 'svg',
    attr: { viewBox: '0 0 384 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M80.95 472.23c-4.28 17.16 6.14 34.53 23.28 38.81 2.61.66 5.22.95 7.8.95 14.33 0 27.37-9.7 31.02-24.23l25.24-100.97-52.78-52.78-34.56 138.22zm14.89-196.12L137 117c2.19-8.42-3.14-16.95-11.92-19.06-43.88-10.52-88.35 15.07-99.32 57.17L.49 253.24c-2.19 8.42 3.14 16.95 11.92 19.06l63.56 15.25c8.79 2.1 17.68-3.02 19.87-11.44zM368 160h-16c-8.84 0-16 7.16-16 16v16h-34.75l-46.78-46.78C243.38 134.11 228.61 128 212.91 128c-27.02 0-50.47 18.3-57.03 44.52l-26.92 107.72a32.012 32.012 0 0 0 8.42 30.39L224 397.25V480c0 17.67 14.33 32 32 32s32-14.33 32-32v-82.75c0-17.09-6.66-33.16-18.75-45.25l-46.82-46.82c.15-.5.49-.89.62-1.41l19.89-79.57 22.43 22.43c6 6 14.14 9.38 22.62 9.38h48v240c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V176c.01-8.84-7.15-16-15.99-16zM240 96c26.51 0 48-21.49 48-48S266.51 0 240 0s-48 21.49-48 48 21.49 48 48 48z',
        },
        child: [],
      },
    ],
  })(e)
}
function y1(e) {
  return fr({
    tag: 'svg',
    attr: { viewBox: '0 0 640 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z',
        },
        child: [],
      },
    ],
  })(e)
}
function x1(e) {
  return fr({
    tag: 'svg',
    attr: { viewBox: '0 0 416 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z',
        },
        child: [],
      },
    ],
  })(e)
}
const Th = p.forwardRef(
  (
    {
      as: e,
      bsPrefix: t,
      variant: n = 'primary',
      size: r,
      active: o = !1,
      disabled: s = !1,
      className: i,
      ...a
    },
    c
  ) => {
    const u = D(t, 'btn'),
      [f, { tagName: d }] = cc({ tagName: e, disabled: s, ...a }),
      h = d
    return l.jsx(h, {
      ...f,
      ...a,
      ref: c,
      disabled: s,
      className: R(
        i,
        u,
        o && 'active',
        n && `${u}-${n}`,
        r && `${u}-${r}`,
        a.href && s && 'disabled'
      ),
    })
  }
)
Th.displayName = 'Button'
const uc = Th,
  bh = p.forwardRef(
    ({ className: e, bsPrefix: t, as: n = 'div', ...r }, o) => (
      (t = D(t, 'card-body')), l.jsx(n, { ref: o, className: R(e, t), ...r })
    )
  )
bh.displayName = 'CardBody'
const _h = bh,
  Ph = p.forwardRef(
    ({ className: e, bsPrefix: t, as: n = 'div', ...r }, o) => (
      (t = D(t, 'card-footer')), l.jsx(n, { ref: o, className: R(e, t), ...r })
    )
  )
Ph.displayName = 'CardFooter'
const j1 = Ph,
  Rh = p.forwardRef(({ bsPrefix: e, className: t, as: n = 'div', ...r }, o) => {
    const s = D(e, 'card-header'),
      i = p.useMemo(() => ({ cardHeaderBsPrefix: s }), [s])
    return l.jsx(xh.Provider, {
      value: i,
      children: l.jsx(n, { ref: o, ...r, className: R(t, s) }),
    })
  })
Rh.displayName = 'CardHeader'
const w1 = Rh,
  Oh = p.forwardRef(
    ({ bsPrefix: e, className: t, variant: n, as: r = 'img', ...o }, s) => {
      const i = D(e, 'card-img')
      return l.jsx(r, { ref: s, className: R(n ? `${i}-${n}` : i, t), ...o })
    }
  )
Oh.displayName = 'CardImg'
const S1 = Oh,
  Lh = p.forwardRef(
    ({ className: e, bsPrefix: t, as: n = 'div', ...r }, o) => (
      (t = D(t, 'card-img-overlay')),
      l.jsx(n, { ref: o, className: R(e, t), ...r })
    )
  )
Lh.displayName = 'CardImgOverlay'
const C1 = Lh,
  Dh = p.forwardRef(
    ({ className: e, bsPrefix: t, as: n = 'a', ...r }, o) => (
      (t = D(t, 'card-link')), l.jsx(n, { ref: o, className: R(e, t), ...r })
    )
  )
Dh.displayName = 'CardLink'
const N1 = Dh,
  il = (e) =>
    p.forwardRef((t, n) =>
      l.jsx('div', { ...t, ref: n, className: R(t.className, e) })
    ),
  k1 = il('h6'),
  Mh = p.forwardRef(
    ({ className: e, bsPrefix: t, as: n = k1, ...r }, o) => (
      (t = D(t, 'card-subtitle')),
      l.jsx(n, { ref: o, className: R(e, t), ...r })
    )
  )
Mh.displayName = 'CardSubtitle'
const E1 = Mh,
  $h = p.forwardRef(
    ({ className: e, bsPrefix: t, as: n = 'p', ...r }, o) => (
      (t = D(t, 'card-text')), l.jsx(n, { ref: o, className: R(e, t), ...r })
    )
  )
$h.displayName = 'CardText'
const T1 = $h,
  b1 = il('h5'),
  Fh = p.forwardRef(
    ({ className: e, bsPrefix: t, as: n = b1, ...r }, o) => (
      (t = D(t, 'card-title')), l.jsx(n, { ref: o, className: R(e, t), ...r })
    )
  )
Fh.displayName = 'CardTitle'
const _1 = Fh,
  Ih = p.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        bg: n,
        text: r,
        border: o,
        body: s = !1,
        children: i,
        as: a = 'div',
        ...c
      },
      u
    ) => {
      const f = D(e, 'card')
      return l.jsx(a, {
        ref: u,
        ...c,
        className: R(
          t,
          f,
          n && `bg-${n}`,
          r && `text-${r}`,
          o && `border-${o}`
        ),
        children: s ? l.jsx(_h, { children: i }) : i,
      })
    }
  )
Ih.displayName = 'Card'
const dt = Object.assign(Ih, {
  Img: S1,
  Title: _1,
  Subtitle: E1,
  Body: _h,
  Link: N1,
  Text: T1,
  Header: w1,
  Footer: j1,
  ImgOverlay: C1,
})
function kr(...e) {
  return e
    .filter((t) => t != null)
    .reduce((t, n) => {
      if (typeof n != 'function')
        throw new Error(
          'Invalid Argument Type, must only provide functions, undefined, or null.'
        )
      return t === null
        ? n
        : function (...o) {
            t.apply(this, o), n.apply(this, o)
          }
    }, null)
}
const P1 = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight'],
}
function R1(e, t) {
  const n = `offset${e[0].toUpperCase()}${e.slice(1)}`,
    r = t[n],
    o = P1[e]
  return r + parseInt(Nt(t, o[0]), 10) + parseInt(Nt(t, o[1]), 10)
}
const O1 = {
    [Ft]: 'collapse',
    [ao]: 'collapsing',
    [st]: 'collapsing',
    [jt]: 'collapse show',
  },
  L1 = Q.forwardRef(
    (
      {
        onEnter: e,
        onEntering: t,
        onEntered: n,
        onExit: r,
        onExiting: o,
        className: s,
        children: i,
        dimension: a = 'height',
        in: c = !1,
        timeout: u = 300,
        mountOnEnter: f = !1,
        unmountOnExit: d = !1,
        appear: h = !1,
        getDimensionValue: j = R1,
        ...v
      },
      x
    ) => {
      const w = typeof a == 'function' ? a() : a,
        m = p.useMemo(
          () =>
            kr((C) => {
              C.style[w] = '0'
            }, e),
          [w, e]
        ),
        g = p.useMemo(
          () =>
            kr((C) => {
              const E = `scroll${w[0].toUpperCase()}${w.slice(1)}`
              C.style[w] = `${C[E]}px`
            }, t),
          [w, t]
        ),
        y = p.useMemo(
          () =>
            kr((C) => {
              C.style[w] = null
            }, n),
          [w, n]
        ),
        S = p.useMemo(
          () =>
            kr((C) => {
              ;(C.style[w] = `${j(w, C)}px`), th(C)
            }, r),
          [r, j, w]
        ),
        N = p.useMemo(
          () =>
            kr((C) => {
              C.style[w] = null
            }, o),
          [w, o]
        )
      return l.jsx(ac, {
        ref: x,
        addEndListener: ic,
        ...v,
        'aria-expanded': v.role ? c : null,
        onEnter: m,
        onEntering: g,
        onEntered: y,
        onExit: S,
        onExiting: N,
        childRef: i.ref,
        in: c,
        timeout: u,
        mountOnEnter: f,
        unmountOnExit: d,
        appear: h,
        children: (C, E) =>
          Q.cloneElement(i, {
            ...E,
            className: R(
              s,
              i.props.className,
              O1[C],
              w === 'width' && 'collapse-horizontal'
            ),
          }),
      })
    }
  ),
  D1 = L1,
  M1 = {
    'aria-label': ke.string,
    onClick: ke.func,
    variant: ke.oneOf(['white']),
  },
  dc = p.forwardRef(
    ({ className: e, variant: t, 'aria-label': n = 'Close', ...r }, o) =>
      l.jsx('button', {
        ref: o,
        type: 'button',
        className: R('btn-close', t && `btn-close-${t}`, e),
        'aria-label': n,
        ...r,
      })
  )
dc.displayName = 'CloseButton'
dc.propTypes = M1
const $1 = dc
function F1(e) {
  const t = p.useRef(e)
  return (t.current = e), t
}
function Ah(e) {
  const t = F1(e)
  p.useEffect(() => () => t.current(), [])
}
function I1(e, t) {
  return p.Children.toArray(e).some((n) => p.isValidElement(n) && n.type === t)
}
function A1({ as: e, bsPrefix: t, className: n, ...r }) {
  t = D(t, 'col')
  const o = sh(),
    s = lh(),
    i = [],
    a = []
  return (
    o.forEach((c) => {
      const u = r[c]
      delete r[c]
      let f, d, h
      typeof u == 'object' && u != null
        ? ({ span: f, offset: d, order: h } = u)
        : (f = u)
      const j = c !== s ? `-${c}` : ''
      f && i.push(f === !0 ? `${t}${j}` : `${t}${j}-${f}`),
        h != null && a.push(`order${j}-${h}`),
        d != null && a.push(`offset${j}-${d}`)
    }),
    [
      { ...r, className: R(n, ...i, ...a) },
      { as: e, bsPrefix: t, spans: i },
    ]
  )
}
const Bh = p.forwardRef((e, t) => {
  const [{ className: n, ...r }, { as: o = 'div', bsPrefix: s, spans: i }] =
    A1(e)
  return l.jsx(o, { ...r, ref: t, className: R(n, !i.length && s) })
})
Bh.displayName = 'Col'
const cn = Bh
function qu(e, t) {
  if (e.contains) return e.contains(t)
  if (e.compareDocumentPosition)
    return e === t || !!(e.compareDocumentPosition(t) & 16)
}
const zh = p.createContext(ur ? window : void 0)
zh.Provider
function fc() {
  return p.useContext(zh)
}
const B1 = { type: ke.string, tooltip: ke.bool, as: ke.elementType },
  pc = p.forwardRef(
    (
      { as: e = 'div', className: t, type: n = 'valid', tooltip: r = !1, ...o },
      s
    ) =>
      l.jsx(e, {
        ...o,
        ref: s,
        className: R(t, `${n}-${r ? 'tooltip' : 'feedback'}`),
      })
  )
pc.displayName = 'Feedback'
pc.propTypes = B1
const Uh = pc,
  z1 = p.createContext({}),
  Pt = z1,
  Hh = p.forwardRef(
    (
      {
        id: e,
        bsPrefix: t,
        className: n,
        type: r = 'checkbox',
        isValid: o = !1,
        isInvalid: s = !1,
        as: i = 'input',
        ...a
      },
      c
    ) => {
      const { controlId: u } = p.useContext(Pt)
      return (
        (t = D(t, 'form-check-input')),
        l.jsx(i, {
          ...a,
          ref: c,
          type: r,
          id: e || u,
          className: R(n, t, o && 'is-valid', s && 'is-invalid'),
        })
      )
    }
  )
Hh.displayName = 'FormCheckInput'
const Wh = Hh,
  Kh = p.forwardRef(({ bsPrefix: e, className: t, htmlFor: n, ...r }, o) => {
    const { controlId: s } = p.useContext(Pt)
    return (
      (e = D(e, 'form-check-label')),
      l.jsx('label', { ...r, ref: o, htmlFor: n || s, className: R(t, e) })
    )
  })
Kh.displayName = 'FormCheckLabel'
const na = Kh,
  Vh = p.forwardRef(
    (
      {
        id: e,
        bsPrefix: t,
        bsSwitchPrefix: n,
        inline: r = !1,
        reverse: o = !1,
        disabled: s = !1,
        isValid: i = !1,
        isInvalid: a = !1,
        feedbackTooltip: c = !1,
        feedback: u,
        feedbackType: f,
        className: d,
        style: h,
        title: j = '',
        type: v = 'checkbox',
        label: x,
        children: w,
        as: m = 'input',
        ...g
      },
      y
    ) => {
      ;(t = D(t, 'form-check')), (n = D(n, 'form-switch'))
      const { controlId: S } = p.useContext(Pt),
        N = p.useMemo(() => ({ controlId: e || S }), [S, e]),
        C = (!w && x != null && x !== !1) || I1(w, na),
        E = l.jsx(Wh, {
          ...g,
          type: v === 'switch' ? 'checkbox' : v,
          ref: y,
          isValid: i,
          isInvalid: a,
          disabled: s,
          as: m,
        })
      return l.jsx(Pt.Provider, {
        value: N,
        children: l.jsx('div', {
          style: h,
          className: R(
            d,
            C && t,
            r && `${t}-inline`,
            o && `${t}-reverse`,
            v === 'switch' && n
          ),
          children:
            w ||
            l.jsxs(l.Fragment, {
              children: [
                E,
                C && l.jsx(na, { title: j, children: x }),
                u && l.jsx(Uh, { type: f, tooltip: c, children: u }),
              ],
            }),
        }),
      })
    }
  )
Vh.displayName = 'FormCheck'
const $s = Object.assign(Vh, { Input: Wh, Label: na }),
  Gh = p.forwardRef(
    (
      {
        bsPrefix: e,
        type: t,
        size: n,
        htmlSize: r,
        id: o,
        className: s,
        isValid: i = !1,
        isInvalid: a = !1,
        plaintext: c,
        readOnly: u,
        as: f = 'input',
        ...d
      },
      h
    ) => {
      const { controlId: j } = p.useContext(Pt)
      return (
        (e = D(e, 'form-control')),
        l.jsx(f, {
          ...d,
          type: t,
          size: r,
          ref: h,
          readOnly: u,
          id: o || j,
          className: R(
            s,
            c ? `${e}-plaintext` : e,
            n && `${e}-${n}`,
            t === 'color' && `${e}-color`,
            i && 'is-valid',
            a && 'is-invalid'
          ),
        })
      )
    }
  )
Gh.displayName = 'FormControl'
const U1 = Object.assign(Gh, { Feedback: Uh }),
  Jh = p.forwardRef(
    ({ className: e, bsPrefix: t, as: n = 'div', ...r }, o) => (
      (t = D(t, 'form-floating')),
      l.jsx(n, { ref: o, className: R(e, t), ...r })
    )
  )
Jh.displayName = 'FormFloating'
const H1 = Jh,
  Qh = p.forwardRef(({ controlId: e, as: t = 'div', ...n }, r) => {
    const o = p.useMemo(() => ({ controlId: e }), [e])
    return l.jsx(Pt.Provider, {
      value: o,
      children: l.jsx(t, { ...n, ref: r }),
    })
  })
Qh.displayName = 'FormGroup'
const Xh = Qh,
  Yh = p.forwardRef(
    (
      {
        as: e = 'label',
        bsPrefix: t,
        column: n = !1,
        visuallyHidden: r = !1,
        className: o,
        htmlFor: s,
        ...i
      },
      a
    ) => {
      const { controlId: c } = p.useContext(Pt)
      t = D(t, 'form-label')
      let u = 'col-form-label'
      typeof n == 'string' && (u = `${u} ${u}-${n}`)
      const f = R(o, t, r && 'visually-hidden', n && u)
      return (
        (s = s || c),
        n
          ? l.jsx(cn, { ref: a, as: 'label', className: f, htmlFor: s, ...i })
          : l.jsx(e, { ref: a, className: f, htmlFor: s, ...i })
      )
    }
  )
Yh.displayName = 'FormLabel'
const W1 = Yh,
  qh = p.forwardRef(({ bsPrefix: e, className: t, id: n, ...r }, o) => {
    const { controlId: s } = p.useContext(Pt)
    return (
      (e = D(e, 'form-range')),
      l.jsx('input', {
        ...r,
        type: 'range',
        ref: o,
        className: R(t, e),
        id: n || s,
      })
    )
  })
qh.displayName = 'FormRange'
const K1 = qh,
  Zh = p.forwardRef(
    (
      {
        bsPrefix: e,
        size: t,
        htmlSize: n,
        className: r,
        isValid: o = !1,
        isInvalid: s = !1,
        id: i,
        ...a
      },
      c
    ) => {
      const { controlId: u } = p.useContext(Pt)
      return (
        (e = D(e, 'form-select')),
        l.jsx('select', {
          ...a,
          size: n,
          ref: c,
          className: R(
            r,
            e,
            t && `${e}-${t}`,
            o && 'is-valid',
            s && 'is-invalid'
          ),
          id: i || u,
        })
      )
    }
  )
Zh.displayName = 'FormSelect'
const V1 = Zh,
  em = p.forwardRef(
    ({ bsPrefix: e, className: t, as: n = 'small', muted: r, ...o }, s) => (
      (e = D(e, 'form-text')),
      l.jsx(n, { ...o, ref: s, className: R(t, e, r && 'text-muted') })
    )
  )
em.displayName = 'FormText'
const G1 = em,
  tm = p.forwardRef((e, t) => l.jsx($s, { ...e, ref: t, type: 'switch' }))
tm.displayName = 'Switch'
const J1 = Object.assign(tm, { Input: $s.Input, Label: $s.Label }),
  nm = p.forwardRef(
    (
      { bsPrefix: e, className: t, children: n, controlId: r, label: o, ...s },
      i
    ) => (
      (e = D(e, 'form-floating')),
      l.jsxs(Xh, {
        ref: i,
        className: R(t, e),
        controlId: r,
        ...s,
        children: [n, l.jsx('label', { htmlFor: r, children: o })],
      })
    )
  )
nm.displayName = 'FloatingLabel'
const Q1 = nm,
  X1 = { _ref: ke.any, validated: ke.bool, as: ke.elementType },
  hc = p.forwardRef(({ className: e, validated: t, as: n = 'form', ...r }, o) =>
    l.jsx(n, { ...r, ref: o, className: R(e, t && 'was-validated') })
  )
hc.displayName = 'Form'
hc.propTypes = X1
const F = Object.assign(hc, {
  Group: Xh,
  Control: U1,
  Floating: H1,
  Check: $s,
  Switch: J1,
  Label: W1,
  Text: G1,
  Range: K1,
  Select: V1,
  FloatingLabel: Q1,
})
var Uo
function Zu(e) {
  if (((!Uo && Uo !== 0) || e) && ur) {
    var t = document.createElement('div')
    ;(t.style.position = 'absolute'),
      (t.style.top = '-9999px'),
      (t.style.width = '50px'),
      (t.style.height = '50px'),
      (t.style.overflow = 'scroll'),
      document.body.appendChild(t),
      (Uo = t.offsetWidth - t.clientWidth),
      document.body.removeChild(t)
  }
  return Uo
}
function Hl(e) {
  e === void 0 && (e = ol())
  try {
    var t = e.activeElement
    return !t || !t.nodeName ? null : t
  } catch {
    return e.body
  }
}
function Y1(e = document) {
  const t = e.defaultView
  return Math.abs(t.innerWidth - e.documentElement.clientWidth)
}
const ed = ll('modal-open')
class q1 {
  constructor({
    ownerDocument: t,
    handleContainerOverflow: n = !0,
    isRTL: r = !1,
  } = {}) {
    ;(this.handleContainerOverflow = n),
      (this.isRTL = r),
      (this.modals = []),
      (this.ownerDocument = t)
  }
  getScrollbarWidth() {
    return Y1(this.ownerDocument)
  }
  getElement() {
    return (this.ownerDocument || document).body
  }
  setModalAttributes(t) {}
  removeModalAttributes(t) {}
  setContainerStyle(t) {
    const n = { overflow: 'hidden' },
      r = this.isRTL ? 'paddingLeft' : 'paddingRight',
      o = this.getElement()
    ;(t.style = { overflow: o.style.overflow, [r]: o.style[r] }),
      t.scrollBarWidth &&
        (n[r] = `${parseInt(Nt(o, r) || '0', 10) + t.scrollBarWidth}px`),
      o.setAttribute(ed, ''),
      Nt(o, n)
  }
  reset() {
    ;[...this.modals].forEach((t) => this.remove(t))
  }
  removeContainerStyle(t) {
    const n = this.getElement()
    n.removeAttribute(ed), Object.assign(n.style, t.style)
  }
  add(t) {
    let n = this.modals.indexOf(t)
    return (
      n !== -1 ||
        ((n = this.modals.length),
        this.modals.push(t),
        this.setModalAttributes(t),
        n !== 0) ||
        ((this.state = { scrollBarWidth: this.getScrollbarWidth(), style: {} }),
        this.handleContainerOverflow && this.setContainerStyle(this.state)),
      n
    )
  }
  remove(t) {
    const n = this.modals.indexOf(t)
    n !== -1 &&
      (this.modals.splice(n, 1),
      !this.modals.length &&
        this.handleContainerOverflow &&
        this.removeContainerStyle(this.state),
      this.removeModalAttributes(t))
  }
  isTopModal(t) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === t
  }
}
const mc = q1,
  Wl = (e, t) =>
    ur
      ? e == null
        ? (t || ol()).body
        : (typeof e == 'function' && (e = e()),
          e && 'current' in e && (e = e.current),
          e && ('nodeType' in e || e.getBoundingClientRect) ? e : null)
      : null
function Z1(e, t) {
  const n = fc(),
    [r, o] = p.useState(() => Wl(e, n == null ? void 0 : n.document))
  if (!r) {
    const s = Wl(e)
    s && o(s)
  }
  return (
    p.useEffect(() => {
      t && r && t(r)
    }, [t, r]),
    p.useEffect(() => {
      const s = Wl(e)
      s !== r && o(s)
    }, [e, r]),
    r
  )
}
function ej({ in: e, onTransition: t }) {
  const n = p.useRef(null),
    r = p.useRef(!0),
    o = Me(t)
  return (
    ta(() => {
      if (!n.current) return
      let s = !1
      return (
        o({ in: e, element: n.current, initial: r.current, isStale: () => s }),
        () => {
          s = !0
        }
      )
    }, [e, o]),
    ta(
      () => (
        (r.current = !1),
        () => {
          r.current = !0
        }
      ),
      []
    ),
    n
  )
}
function tj({ children: e, in: t, onExited: n, onEntered: r, transition: o }) {
  const [s, i] = p.useState(!t)
  t && s && i(!1)
  const a = ej({
      in: !!t,
      onTransition: (u) => {
        const f = () => {
          u.isStale() ||
            (u.in
              ? r == null || r(u.element, u.initial)
              : (i(!0), n == null || n(u.element)))
        }
        Promise.resolve(o(u)).then(f, (d) => {
          throw (u.in || i(!0), d)
        })
      },
    }),
    c = vo(a, e.ref)
  return s && !t ? null : p.cloneElement(e, { ref: c })
}
function td(e, t, n) {
  return e
    ? l.jsx(e, Object.assign({}, n))
    : t
      ? l.jsx(tj, Object.assign({}, n, { transition: t }))
      : l.jsx(lc, Object.assign({}, n))
}
function nj(e) {
  return e.code === 'Escape' || e.keyCode === 27
}
const rj = [
  'show',
  'role',
  'className',
  'style',
  'children',
  'backdrop',
  'keyboard',
  'onBackdropClick',
  'onEscapeKeyDown',
  'transition',
  'runTransition',
  'backdropTransition',
  'runBackdropTransition',
  'autoFocus',
  'enforceFocus',
  'restoreFocus',
  'restoreFocusOptions',
  'renderDialog',
  'renderBackdrop',
  'manager',
  'container',
  'onShow',
  'onHide',
  'onExit',
  'onExited',
  'onExiting',
  'onEnter',
  'onEntering',
  'onEntered',
]
function oj(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    o,
    s
  for (s = 0; s < r.length; s++)
    (o = r[s]), !(t.indexOf(o) >= 0) && (n[o] = e[o])
  return n
}
let Kl
function sj(e) {
  return (
    Kl || (Kl = new mc({ ownerDocument: e == null ? void 0 : e.document })), Kl
  )
}
function lj(e) {
  const t = fc(),
    n = e || sj(t),
    r = p.useRef({ dialog: null, backdrop: null })
  return Object.assign(r.current, {
    add: () => n.add(r.current),
    remove: () => n.remove(r.current),
    isTopModal: () => n.isTopModal(r.current),
    setDialogRef: p.useCallback((o) => {
      r.current.dialog = o
    }, []),
    setBackdropRef: p.useCallback((o) => {
      r.current.backdrop = o
    }, []),
  })
}
const rm = p.forwardRef((e, t) => {
  let {
      show: n = !1,
      role: r = 'dialog',
      className: o,
      style: s,
      children: i,
      backdrop: a = !0,
      keyboard: c = !0,
      onBackdropClick: u,
      onEscapeKeyDown: f,
      transition: d,
      runTransition: h,
      backdropTransition: j,
      runBackdropTransition: v,
      autoFocus: x = !0,
      enforceFocus: w = !0,
      restoreFocus: m = !0,
      restoreFocusOptions: g,
      renderDialog: y,
      renderBackdrop: S = (ee) => l.jsx('div', Object.assign({}, ee)),
      manager: N,
      container: C,
      onShow: E,
      onHide: _ = () => {},
      onExit: M,
      onExited: O,
      onExiting: ae,
      onEnter: V,
      onEntering: G,
      onEntered: X,
    } = e,
    ye = oj(e, rj)
  const Le = fc(),
    Be = Z1(C),
    b = lj(N),
    L = V0(),
    $ = G0(n),
    [H, J] = p.useState(!n),
    xe = p.useRef(null)
  p.useImperativeHandle(t, () => b, [b]),
    ur && !$ && n && (xe.current = Hl(Le == null ? void 0 : Le.document)),
    n && H && J(!1)
  const pe = Me(() => {
      if (
        (b.add(),
        (Nn.current = Ls(document, 'keydown', pl)),
        (hr.current = Ls(document, 'focus', () => setTimeout(be), !0)),
        E && E(),
        x)
      ) {
        var ee, Co
        const gr = Hl(
          (ee = (Co = b.dialog) == null ? void 0 : Co.ownerDocument) != null
            ? ee
            : Le == null
              ? void 0
              : Le.document
        )
        b.dialog &&
          gr &&
          !qu(b.dialog, gr) &&
          ((xe.current = gr), b.dialog.focus())
      }
    }),
    ce = Me(() => {
      if (
        (b.remove(),
        Nn.current == null || Nn.current(),
        hr.current == null || hr.current(),
        m)
      ) {
        var ee
        ;(ee = xe.current) == null || ee.focus == null || ee.focus(g),
          (xe.current = null)
      }
    })
  p.useEffect(() => {
    !n || !Be || pe()
  }, [n, Be, pe]),
    p.useEffect(() => {
      H && ce()
    }, [H, ce]),
    Ah(() => {
      ce()
    })
  const be = Me(() => {
      if (!w || !L() || !b.isTopModal()) return
      const ee = Hl(Le == null ? void 0 : Le.document)
      b.dialog && ee && !qu(b.dialog, ee) && b.dialog.focus()
    }),
    vt = Me((ee) => {
      ee.target === ee.currentTarget && (u == null || u(ee), a === !0 && _())
    }),
    pl = Me((ee) => {
      c &&
        nj(ee) &&
        b.isTopModal() &&
        (f == null || f(ee), ee.defaultPrevented || _())
    }),
    hr = p.useRef(),
    Nn = p.useRef(),
    So = (...ee) => {
      J(!0), O == null || O(...ee)
    }
  if (!Be) return null
  const kn = Object.assign(
    {
      role: r,
      ref: b.setDialogRef,
      'aria-modal': r === 'dialog' ? !0 : void 0,
    },
    ye,
    { style: s, className: o, tabIndex: -1 }
  )
  let mr = y
    ? y(kn)
    : l.jsx(
        'div',
        Object.assign({}, kn, {
          children: p.cloneElement(i, { role: 'document' }),
        })
      )
  mr = td(d, h, {
    unmountOnExit: !0,
    mountOnEnter: !0,
    appear: !0,
    in: !!n,
    onExit: M,
    onExiting: ae,
    onExited: So,
    onEnter: V,
    onEntering: G,
    onEntered: X,
    children: mr,
  })
  let En = null
  return (
    a &&
      ((En = S({ ref: b.setBackdropRef, onClick: vt })),
      (En = td(j, v, {
        in: !!n,
        appear: !0,
        mountOnEnter: !0,
        unmountOnExit: !0,
        children: En,
      }))),
    l.jsx(l.Fragment, {
      children: Wn.createPortal(l.jsxs(l.Fragment, { children: [En, mr] }), Be),
    })
  )
})
rm.displayName = 'Modal'
const om = Object.assign(rm, { Manager: mc })
function ij(e, t) {
  return e.classList
    ? !!t && e.classList.contains(t)
    : (' ' + (e.className.baseVal || e.className) + ' ').indexOf(
        ' ' + t + ' '
      ) !== -1
}
function aj(e, t) {
  e.classList
    ? e.classList.add(t)
    : ij(e, t) ||
      (typeof e.className == 'string'
        ? (e.className = e.className + ' ' + t)
        : e.setAttribute(
            'class',
            ((e.className && e.className.baseVal) || '') + ' ' + t
          ))
}
function nd(e, t) {
  return e
    .replace(new RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
    .replace(/\s+/g, ' ')
    .replace(/^\s*|\s*$/g, '')
}
function cj(e, t) {
  e.classList
    ? e.classList.remove(t)
    : typeof e.className == 'string'
      ? (e.className = nd(e.className, t))
      : e.setAttribute(
          'class',
          nd((e.className && e.className.baseVal) || '', t)
        )
}
const Rn = {
  FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  STICKY_CONTENT: '.sticky-top',
  NAVBAR_TOGGLER: '.navbar-toggler',
}
class sm extends mc {
  adjustAndStore(t, n, r) {
    const o = n.style[t]
    ;(n.dataset[t] = o), Nt(n, { [t]: `${parseFloat(Nt(n, t)) + r}px` })
  }
  restore(t, n) {
    const r = n.dataset[t]
    r !== void 0 && (delete n.dataset[t], Nt(n, { [t]: r }))
  }
  setContainerStyle(t) {
    super.setContainerStyle(t)
    const n = this.getElement()
    if ((aj(n, 'modal-open'), !t.scrollBarWidth)) return
    const r = this.isRTL ? 'paddingLeft' : 'paddingRight',
      o = this.isRTL ? 'marginLeft' : 'marginRight'
    an(n, Rn.FIXED_CONTENT).forEach((s) =>
      this.adjustAndStore(r, s, t.scrollBarWidth)
    ),
      an(n, Rn.STICKY_CONTENT).forEach((s) =>
        this.adjustAndStore(o, s, -t.scrollBarWidth)
      ),
      an(n, Rn.NAVBAR_TOGGLER).forEach((s) =>
        this.adjustAndStore(o, s, t.scrollBarWidth)
      )
  }
  removeContainerStyle(t) {
    super.removeContainerStyle(t)
    const n = this.getElement()
    cj(n, 'modal-open')
    const r = this.isRTL ? 'paddingLeft' : 'paddingRight',
      o = this.isRTL ? 'marginLeft' : 'marginRight'
    an(n, Rn.FIXED_CONTENT).forEach((s) => this.restore(r, s)),
      an(n, Rn.STICKY_CONTENT).forEach((s) => this.restore(o, s)),
      an(n, Rn.NAVBAR_TOGGLER).forEach((s) => this.restore(o, s))
  }
}
let Vl
function lm(e) {
  return Vl || (Vl = new sm(e)), Vl
}
const im = p.forwardRef(
  ({ className: e, bsPrefix: t, as: n = 'div', ...r }, o) => (
    (t = D(t, 'modal-body')), l.jsx(n, { ref: o, className: R(e, t), ...r })
  )
)
im.displayName = 'ModalBody'
const uj = im,
  dj = p.createContext({ onHide() {} }),
  gc = dj,
  am = p.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        contentClassName: n,
        centered: r,
        size: o,
        fullscreen: s,
        children: i,
        scrollable: a,
        ...c
      },
      u
    ) => {
      e = D(e, 'modal')
      const f = `${e}-dialog`,
        d = typeof s == 'string' ? `${e}-fullscreen-${s}` : `${e}-fullscreen`
      return l.jsx('div', {
        ...c,
        ref: u,
        className: R(
          f,
          t,
          o && `${e}-${o}`,
          r && `${f}-centered`,
          a && `${f}-scrollable`,
          s && d
        ),
        children: l.jsx('div', {
          className: R(`${e}-content`, n),
          children: i,
        }),
      })
    }
  )
am.displayName = 'ModalDialog'
const cm = am,
  um = p.forwardRef(
    ({ className: e, bsPrefix: t, as: n = 'div', ...r }, o) => (
      (t = D(t, 'modal-footer')), l.jsx(n, { ref: o, className: R(e, t), ...r })
    )
  )
um.displayName = 'ModalFooter'
const fj = um,
  pj = p.forwardRef(
    (
      {
        closeLabel: e = 'Close',
        closeVariant: t,
        closeButton: n = !1,
        onHide: r,
        children: o,
        ...s
      },
      i
    ) => {
      const a = p.useContext(gc),
        c = Me(() => {
          a == null || a.onHide(), r == null || r()
        })
      return l.jsxs('div', {
        ref: i,
        ...s,
        children: [
          o,
          n && l.jsx($1, { 'aria-label': e, variant: t, onClick: c }),
        ],
      })
    }
  ),
  dm = pj,
  fm = p.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        closeLabel: n = 'Close',
        closeButton: r = !1,
        ...o
      },
      s
    ) => (
      (e = D(e, 'modal-header')),
      l.jsx(dm, {
        ref: s,
        ...o,
        className: R(t, e),
        closeLabel: n,
        closeButton: r,
      })
    )
  )
fm.displayName = 'ModalHeader'
const hj = fm,
  mj = il('h4'),
  pm = p.forwardRef(
    ({ className: e, bsPrefix: t, as: n = mj, ...r }, o) => (
      (t = D(t, 'modal-title')), l.jsx(n, { ref: o, className: R(e, t), ...r })
    )
  )
pm.displayName = 'ModalTitle'
const gj = pm
function vj(e) {
  return l.jsx(yo, { ...e, timeout: null })
}
function yj(e) {
  return l.jsx(yo, { ...e, timeout: null })
}
const hm = p.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      style: n,
      dialogClassName: r,
      contentClassName: o,
      children: s,
      dialogAs: i = cm,
      'data-bs-theme': a,
      'aria-labelledby': c,
      'aria-describedby': u,
      'aria-label': f,
      show: d = !1,
      animation: h = !0,
      backdrop: j = !0,
      keyboard: v = !0,
      onEscapeKeyDown: x,
      onShow: w,
      onHide: m,
      container: g,
      autoFocus: y = !0,
      enforceFocus: S = !0,
      restoreFocus: N = !0,
      restoreFocusOptions: C,
      onEntered: E,
      onExit: _,
      onExiting: M,
      onEnter: O,
      onEntering: ae,
      onExited: V,
      backdropClassName: G,
      manager: X,
      ...ye
    },
    Le
  ) => {
    const [Be, b] = p.useState({}),
      [L, $] = p.useState(!1),
      H = p.useRef(!1),
      J = p.useRef(!1),
      xe = p.useRef(null),
      [pe, ce] = K0(),
      be = vo(Le, ce),
      vt = Me(m),
      pl = S0()
    e = D(e, 'modal')
    const hr = p.useMemo(() => ({ onHide: vt }), [vt])
    function Nn() {
      return X || lm({ isRTL: pl })
    }
    function So(W) {
      if (!ur) return
      const Tn = Nn().getScrollbarWidth() > 0,
        kc = W.scrollHeight > ol(W).documentElement.clientHeight
      b({
        paddingRight: Tn && !kc ? Zu() : void 0,
        paddingLeft: !Tn && kc ? Zu() : void 0,
      })
    }
    const kn = Me(() => {
      pe && So(pe.dialog)
    })
    Ah(() => {
      qi(window, 'resize', kn), xe.current == null || xe.current()
    })
    const mr = () => {
        H.current = !0
      },
      En = (W) => {
        H.current && pe && W.target === pe.dialog && (J.current = !0),
          (H.current = !1)
      },
      ee = () => {
        $(!0),
          (xe.current = eh(pe.dialog, () => {
            $(!1)
          }))
      },
      Co = (W) => {
        W.target === W.currentTarget && ee()
      },
      gr = (W) => {
        if (j === 'static') {
          Co(W)
          return
        }
        if (J.current || W.target !== W.currentTarget) {
          J.current = !1
          return
        }
        m == null || m()
      },
      Ym = (W) => {
        v ? x == null || x(W) : (W.preventDefault(), j === 'static' && ee())
      },
      qm = (W, Tn) => {
        W && So(W), O == null || O(W, Tn)
      },
      Zm = (W) => {
        xe.current == null || xe.current(), _ == null || _(W)
      },
      eg = (W, Tn) => {
        ae == null || ae(W, Tn), Zp(window, 'resize', kn)
      },
      tg = (W) => {
        W && (W.style.display = ''), V == null || V(W), qi(window, 'resize', kn)
      },
      ng = p.useCallback(
        (W) =>
          l.jsx('div', {
            ...W,
            className: R(`${e}-backdrop`, G, !h && 'show'),
          }),
        [h, G, e]
      ),
      Nc = { ...n, ...Be }
    Nc.display = 'block'
    const rg = (W) =>
      l.jsx('div', {
        role: 'dialog',
        ...W,
        style: Nc,
        className: R(t, e, L && `${e}-static`, !h && 'show'),
        onClick: j ? gr : void 0,
        onMouseUp: En,
        'data-bs-theme': a,
        'aria-label': f,
        'aria-labelledby': c,
        'aria-describedby': u,
        children: l.jsx(i, {
          ...ye,
          onMouseDown: mr,
          className: r,
          contentClassName: o,
          children: s,
        }),
      })
    return l.jsx(gc.Provider, {
      value: hr,
      children: l.jsx(om, {
        show: d,
        ref: be,
        backdrop: j,
        container: g,
        keyboard: !0,
        autoFocus: y,
        enforceFocus: S,
        restoreFocus: N,
        restoreFocusOptions: C,
        onEscapeKeyDown: Ym,
        onShow: w,
        onHide: m,
        onEnter: qm,
        onEntering: eg,
        onEntered: E,
        onExit: Zm,
        onExiting: M,
        onExited: tg,
        manager: Nn(),
        transition: h ? vj : void 0,
        backdropTransition: h ? yj : void 0,
        renderBackdrop: ng,
        renderDialog: rg,
      }),
    })
  }
)
hm.displayName = 'Modal'
const Er = Object.assign(hm, {
    Body: uj,
    Header: hj,
    Title: gj,
    Footer: fj,
    Dialog: cm,
    TRANSITION_DURATION: 300,
    BACKDROP_TRANSITION_DURATION: 150,
  }),
  mm = p.forwardRef(({ bsPrefix: e, className: t, as: n, ...r }, o) => {
    e = D(e, 'navbar-brand')
    const s = n || (r.href ? 'a' : 'span')
    return l.jsx(s, { ...r, ref: o, className: R(t, e) })
  })
mm.displayName = 'NavbarBrand'
const xj = mm,
  gm = p.forwardRef(({ children: e, bsPrefix: t, ...n }, r) => {
    t = D(t, 'navbar-collapse')
    const o = p.useContext(dr)
    return l.jsx(D1, {
      in: !!(o && o.expanded),
      ...n,
      children: l.jsx('div', { ref: r, className: t, children: e }),
    })
  })
gm.displayName = 'NavbarCollapse'
const jj = gm,
  vm = p.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        children: n,
        label: r = 'Toggle navigation',
        as: o = 'button',
        onClick: s,
        ...i
      },
      a
    ) => {
      e = D(e, 'navbar-toggler')
      const { onToggle: c, expanded: u } = p.useContext(dr) || {},
        f = Me((d) => {
          s && s(d), c && c()
        })
      return (
        o === 'button' && (i.type = 'button'),
        l.jsx(o, {
          ...i,
          ref: a,
          onClick: f,
          'aria-label': r,
          className: R(t, e, !u && 'collapsed'),
          children: n || l.jsx('span', { className: `${e}-icon` }),
        })
      )
    }
  )
vm.displayName = 'NavbarToggle'
const wj = vm,
  ra = new WeakMap(),
  rd = (e, t) => {
    if (!e || !t) return
    const n = ra.get(t) || new Map()
    ra.set(t, n)
    let r = n.get(e)
    return r || ((r = t.matchMedia(e)), (r.refCount = 0), n.set(r.media, r)), r
  }
function Sj(e, t = typeof window > 'u' ? void 0 : window) {
  const n = rd(e, t),
    [r, o] = p.useState(() => (n ? n.matches : !1))
  return (
    ta(() => {
      let s = rd(e, t)
      if (!s) return o(!1)
      let i = ra.get(t)
      const a = () => {
        o(s.matches)
      }
      return (
        s.refCount++,
        s.addListener(a),
        a(),
        () => {
          s.removeListener(a),
            s.refCount--,
            s.refCount <= 0 && (i == null || i.delete(s.media)),
            (s = void 0)
        }
      )
    }, [e]),
    r
  )
}
function Cj(e) {
  const t = Object.keys(e)
  function n(a, c) {
    return a === c ? c : a ? `${a} and ${c}` : c
  }
  function r(a) {
    return t[Math.min(t.indexOf(a) + 1, t.length - 1)]
  }
  function o(a) {
    const c = r(a)
    let u = e[c]
    return (
      typeof u == 'number' ? (u = `${u - 0.2}px`) : (u = `calc(${u} - 0.2px)`),
      `(max-width: ${u})`
    )
  }
  function s(a) {
    let c = e[a]
    return typeof c == 'number' && (c = `${c}px`), `(min-width: ${c})`
  }
  function i(a, c, u) {
    let f
    typeof a == 'object'
      ? ((f = a), (u = c), (c = !0))
      : ((c = c || !0), (f = { [a]: c }))
    let d = p.useMemo(
      () =>
        Object.entries(f).reduce(
          (h, [j, v]) => (
            (v === 'up' || v === !0) && (h = n(h, s(j))),
            (v === 'down' || v === !0) && (h = n(h, o(j))),
            h
          ),
          ''
        ),
      [JSON.stringify(f)]
    )
    return Sj(d, u)
  }
  return i
}
const Nj = Cj({ xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 }),
  ym = p.forwardRef(
    ({ className: e, bsPrefix: t, as: n = 'div', ...r }, o) => (
      (t = D(t, 'offcanvas-body')),
      l.jsx(n, { ref: o, className: R(e, t), ...r })
    )
  )
ym.displayName = 'OffcanvasBody'
const kj = ym,
  Ej = { [st]: 'show', [jt]: 'show' },
  xm = p.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        children: n,
        in: r = !1,
        mountOnEnter: o = !1,
        unmountOnExit: s = !1,
        appear: i = !1,
        ...a
      },
      c
    ) => (
      (e = D(e, 'offcanvas')),
      l.jsx(ac, {
        ref: c,
        addEndListener: ic,
        in: r,
        mountOnEnter: o,
        unmountOnExit: s,
        appear: i,
        ...a,
        childRef: n.ref,
        children: (u, f) =>
          p.cloneElement(n, {
            ...f,
            className: R(
              t,
              n.props.className,
              (u === st || u === ao) && `${e}-toggling`,
              Ej[u]
            ),
          }),
      })
    )
  )
xm.displayName = 'OffcanvasToggling'
const Tj = xm,
  jm = p.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        closeLabel: n = 'Close',
        closeButton: r = !1,
        ...o
      },
      s
    ) => (
      (e = D(e, 'offcanvas-header')),
      l.jsx(dm, {
        ref: s,
        ...o,
        className: R(t, e),
        closeLabel: n,
        closeButton: r,
      })
    )
  )
jm.displayName = 'OffcanvasHeader'
const bj = jm,
  _j = il('h5'),
  wm = p.forwardRef(
    ({ className: e, bsPrefix: t, as: n = _j, ...r }, o) => (
      (t = D(t, 'offcanvas-title')),
      l.jsx(n, { ref: o, className: R(e, t), ...r })
    )
  )
wm.displayName = 'OffcanvasTitle'
const Pj = wm
function Rj(e) {
  return l.jsx(Tj, { ...e })
}
function Oj(e) {
  return l.jsx(yo, { ...e })
}
const Sm = p.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      children: n,
      'aria-labelledby': r,
      placement: o = 'start',
      responsive: s,
      show: i = !1,
      backdrop: a = !0,
      keyboard: c = !0,
      scroll: u = !1,
      onEscapeKeyDown: f,
      onShow: d,
      onHide: h,
      container: j,
      autoFocus: v = !0,
      enforceFocus: x = !0,
      restoreFocus: w = !0,
      restoreFocusOptions: m,
      onEntered: g,
      onExit: y,
      onExiting: S,
      onEnter: N,
      onEntering: C,
      onExited: E,
      backdropClassName: _,
      manager: M,
      renderStaticNode: O = !1,
      ...ae
    },
    V
  ) => {
    const G = p.useRef()
    e = D(e, 'offcanvas')
    const { onToggle: X } = p.useContext(dr) || {},
      [ye, Le] = p.useState(!1),
      Be = Nj(s || 'xs', 'up')
    p.useEffect(() => {
      Le(s ? i && !Be : i)
    }, [i, s, Be])
    const b = Me(() => {
        X == null || X(), h == null || h()
      }),
      L = p.useMemo(() => ({ onHide: b }), [b])
    function $() {
      return (
        M ||
        (u
          ? (G.current || (G.current = new sm({ handleContainerOverflow: !1 })),
            G.current)
          : lm())
      )
    }
    const H = (ce, ...be) => {
        ce && (ce.style.visibility = 'visible'), N == null || N(ce, ...be)
      },
      J = (ce, ...be) => {
        ce && (ce.style.visibility = ''), E == null || E(...be)
      },
      xe = p.useCallback(
        (ce) => l.jsx('div', { ...ce, className: R(`${e}-backdrop`, _) }),
        [_, e]
      ),
      pe = (ce) =>
        l.jsx('div', {
          ...ce,
          ...ae,
          className: R(t, s ? `${e}-${s}` : e, `${e}-${o}`),
          'aria-labelledby': r,
          children: n,
        })
    return l.jsxs(l.Fragment, {
      children: [
        !ye && (s || O) && pe({}),
        l.jsx(gc.Provider, {
          value: L,
          children: l.jsx(om, {
            show: ye,
            ref: V,
            backdrop: a,
            container: j,
            keyboard: c,
            autoFocus: v,
            enforceFocus: x && !u,
            restoreFocus: w,
            restoreFocusOptions: m,
            onEscapeKeyDown: f,
            onShow: d,
            onHide: b,
            onEnter: H,
            onEntering: C,
            onEntered: g,
            onExit: y,
            onExiting: S,
            onExited: J,
            manager: $(),
            transition: Rj,
            backdropTransition: Oj,
            renderBackdrop: xe,
            renderDialog: pe,
          }),
        }),
      ],
    })
  }
)
Sm.displayName = 'Offcanvas'
const Lj = Object.assign(Sm, { Body: kj, Header: bj, Title: Pj }),
  Cm = p.forwardRef((e, t) => {
    const n = p.useContext(dr)
    return l.jsx(Lj, {
      ref: t,
      show: !!(n != null && n.expanded),
      ...e,
      renderStaticNode: !0,
    })
  })
Cm.displayName = 'NavbarOffcanvas'
const Dj = Cm,
  Nm = p.forwardRef(
    ({ className: e, bsPrefix: t, as: n = 'span', ...r }, o) => (
      (t = D(t, 'navbar-text')), l.jsx(n, { ref: o, className: R(e, t), ...r })
    )
  )
Nm.displayName = 'NavbarText'
const Mj = Nm,
  km = p.forwardRef((e, t) => {
    const {
        bsPrefix: n,
        expand: r = !0,
        variant: o = 'light',
        bg: s,
        fixed: i,
        sticky: a,
        className: c,
        as: u = 'nav',
        expanded: f,
        onToggle: d,
        onSelect: h,
        collapseOnSelect: j = !1,
        ...v
      } = uh(e, { expanded: 'onToggle' }),
      x = D(n, 'navbar'),
      w = p.useCallback(
        (...y) => {
          h == null || h(...y), j && f && (d == null || d(!1))
        },
        [h, j, f, d]
      )
    v.role === void 0 && u !== 'nav' && (v.role = 'navigation')
    let m = `${x}-expand`
    typeof r == 'string' && (m = `${m}-${r}`)
    const g = p.useMemo(
      () => ({
        onToggle: () => (d == null ? void 0 : d(!f)),
        bsPrefix: x,
        expanded: !!f,
        expand: r,
      }),
      [x, f, r, d]
    )
    return l.jsx(dr.Provider, {
      value: g,
      children: l.jsx(jn.Provider, {
        value: w,
        children: l.jsx(u, {
          ref: t,
          ...v,
          className: R(
            c,
            x,
            r && m,
            o && `${x}-${o}`,
            s && `bg-${s}`,
            a && `sticky-${a}`,
            i && `fixed-${i}`
          ),
        }),
      }),
    })
  })
km.displayName = 'Navbar'
const Ho = Object.assign(km, {
    Brand: xj,
    Collapse: jj,
    Offcanvas: Dj,
    Text: Mj,
    Toggle: wj,
  }),
  Em = p.forwardRef(({ bsPrefix: e, className: t, as: n = 'div', ...r }, o) => {
    const s = D(e, 'row'),
      i = sh(),
      a = lh(),
      c = `${s}-cols`,
      u = []
    return (
      i.forEach((f) => {
        const d = r[f]
        delete r[f]
        let h
        d != null && typeof d == 'object' ? ({ cols: h } = d) : (h = d)
        const j = f !== a ? `-${f}` : ''
        h != null && u.push(`${c}${j}-${h}`)
      }),
      l.jsx(n, { ref: o, ...r, className: R(t, s, ...u) })
    )
  })
Em.displayName = 'Row'
const Fs = Em,
  $j = p.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        striped: n,
        bordered: r,
        borderless: o,
        hover: s,
        size: i,
        variant: a,
        responsive: c,
        ...u
      },
      f
    ) => {
      const d = D(e, 'table'),
        h = R(
          t,
          d,
          a && `${d}-${a}`,
          i && `${d}-${i}`,
          n && `${d}-${typeof n == 'string' ? `striped-${n}` : 'striped'}`,
          r && `${d}-bordered`,
          o && `${d}-borderless`,
          s && `${d}-hover`
        ),
        j = l.jsx('table', { ...u, className: h, ref: f })
      if (c) {
        let v = `${d}-responsive`
        return (
          typeof c == 'string' && (v = `${v}-${c}`),
          l.jsx('div', { className: v, children: j })
        )
      }
      return j
    }
  ),
  Fj = $j
function Ij() {
  return l.jsxs('div', {
    children: [
      l.jsx('section', {
        className: 'jumbotron text-center bg-dark',
        children: l.jsxs('div', {
          className: 'container',
          children: [
            l.jsx('img', {
              src: 'https://media.licdn.com/dms/image/D4E03AQH--5mTLwHlBQ/profile-displayphoto-shrink_400_400/0/1664807111568?e=1709769600&v=beta&t=Ml3wEiJek-1V5TT8XKRLVO6xawYpsLKcAt_JokLBEUI',
              alt: 'Your Name',
              className: 'rounded-circle mb-4',
              width: '150',
            }),
            l.jsx('h1', { className: 'display-4', children: 'About Me' }),
            l.jsx('p', {
              className: 'lead',
              children:
                "I'm a passionate and creative Software Engineer based in Philadelphia, dedicated to making a positive impact through technology.",
            }),
          ],
        }),
      }),
      l.jsx('section', {
        className: 'container mt-5',
        children: l.jsxs('div', {
          className: 'row',
          children: [
            l.jsxs('div', {
              className: 'col-md-6',
              children: [
                l.jsx('h2', { children: 'My Journey' }),
                l.jsx('p', {
                  children:
                    'My journey in the world of software engineering started at a young age when I discovered my love for coding. I pursued my passion by earning a degree in Computer Science from [Your University].',
                }),
                l.jsx('p', {
                  children:
                    "Over the years, I've had the opportunity to work on a variety of projects, from building web applications that streamline business operations to developing mobile apps that enhance user experiences.",
                }),
              ],
            }),
            l.jsxs('div', {
              className: 'col-md-6',
              children: [
                l.jsx('h2', { children: 'My Interests' }),
                l.jsx('p', {
                  children:
                    "When I'm not coding, you can find me exploring the great outdoors. I'm an avid hiker and nature enthusiast, always seeking new adventures in the beautiful landscapes around Philadelphia.",
                }),
                l.jsx('p', {
                  children:
                    "I'm also a foodie and love experimenting with new recipes in the kitchen. You might even catch me at the latest food festival in town!",
                }),
              ],
            }),
          ],
        }),
      }),
      l.jsxs('section', {
        className: 'container what-i-do mt-5',
        children: [
          l.jsx('h2', {
            className: 'text-center what-i-do-title',
            children: 'What I Do',
          }),
          l.jsxs('div', {
            className: 'row what-i-do-row',
            children: [
              l.jsx('div', {
                className: 'col-md-4',
                children: l.jsx(dt, {
                  className: 'mb-4 what-i-do-card',
                  children: l.jsxs(dt.Body, {
                    children: [
                      l.jsx(y1, { className: 'display-4 text-primary mb-3' }),
                      l.jsx('h5', {
                        className: 'card-title',
                        children: 'Coding',
                      }),
                      l.jsx('p', {
                        className: 'card-text',
                        children:
                          "I'm passionate about writing clean and efficient code. Solving complex problems with technology is what I do best.",
                      }),
                    ],
                  }),
                }),
              }),
              l.jsx('div', {
                className: 'col-md-4',
                children: l.jsx(dt, {
                  className: 'mb-4 what-i-do-card',
                  children: l.jsxs(dt.Body, {
                    children: [
                      l.jsx(v1, { className: 'display-4 text-success mb-3' }),
                      l.jsx('h5', {
                        className: 'card-title',
                        children: 'Exploring',
                      }),
                      l.jsx('p', {
                        className: 'card-text',
                        children:
                          'I love exploring the outdoors, from hiking in the mountains to camping by the lakeside. Nature inspires me.',
                      }),
                    ],
                  }),
                }),
              }),
              l.jsx('div', {
                className: 'col-md-4',
                children: l.jsx(dt, {
                  className: 'mb-4 what-i-do-card',
                  children: l.jsxs(dt.Body, {
                    children: [
                      l.jsx(x1, { className: 'display-4 text-warning mb-3' }),
                      l.jsx('h5', {
                        className: 'card-title',
                        children: 'Cooking',
                      }),
                      l.jsx('p', {
                        className: 'card-text',
                        children:
                          "In the kitchen, I'm an adventurer too. Trying new recipes and flavors is a delightful experience.",
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        ],
      }),
      l.jsx('section', { className: 'container mt-5' }),
      l.jsx('section', {
        className: 'container text-center mt-5',
        children: l.jsx(uc, {
          href: '/contact',
          variant: 'primary',
          size: 'lg',
          children: 'Get in Touch',
        }),
      }),
    ],
  })
}
function Aj() {
  const [e, t] = p.useState('games'),
    [n, r] = p.useState([]),
    [o, s] = p.useState([]),
    [i, a] = p.useState([]),
    [c, u] = p.useState([])
  p.useEffect(() => {
    const d = async (w, m) => {
        try {
          const g = await fetch(m)
          if (!g.ok) throw new Error('Failed to fetch content')
          return await g.text()
        } catch (g) {
          return console.error(g), ''
        }
      },
      h = [
        {
          title: 'Pokedex',
          subtitle: 'Using the PokeAPI to build a Pokedex',
          image: '/portfolio/games/pokedex.webp',
          link: 'pokedex',
        },
        {
          title: 'Tik Tac Toe',
          subtitle: 'A simple Tik Tac Toe application',
          image: '/portfolio/games/ttt.png',
          link: 'tik-tac-toe',
        },
        {
          title: 'Pokemon Hangman',
          subtitle: "Who's that Pokemon?!",
          image: '/portfolio/games/pokemon.jpeg',
          link: 'hangman',
        },
        {
          title: 'Memory',
          subtitle: 'Use your memory to match all of the emojis',
          image: '/portfolio/games/memory.jpeg',
          link: 'memory',
        },
        {
          title: 'Guess the Number',
          subtitle: 'Guess a number between 1 and 100',
          image: '/portfolio/games/numbers.jpeg',
          link: 'numbers',
        },
      ],
      j = [
        {
          title: 'Frozen Rewards',
          subtitle: 'A Conagra Frozen Products rebates site',
          image: './portfolio/websites/digitalReward.png',
          link: 'https://www.frozenrewardsclub.com',
        },
        {
          title: 'Club Publix Digital Event',
          subtitle:
            'Brand promotion site for 90+ brands on behalf of Publix Grocery',
          image: './portfolio/websites/multibrand.jpg',
          link: 'https://www.clubpublixdigitalevent.com',
        },
        {
          title: 'Penn Mutual Asset Management',
          subtitle: 'UI consulting for Penn Mutual Asset Management',
          image: './portfolio/websites/pmam.png',
          link: 'https://www.pennmutualam.org',
        },
        {
          title: 'My Pantry Planner',
          subtitle: 'High level customization of a brand site product',
          image: './portfolio/websites/mpp.jpeg',
          link: 'https://www.mypantryplanner.com',
        },
        {
          title: 'Spoonable Perks',
          subtitle:
            'Using React to engage proprietary API to support a loyalty shopping program',
          image: './portfolio/websites/spoonable.jpeg',
          link: 'https://www.spoonableperks.com',
        },
      ],
      v = [
        {
          title: 'Dictation',
          subtitle:
            'Using the browser`s built in audio to text tool for dictation',
          image: '/portfolio/tools/dictation.jpeg',
          link: 'dictation',
        },
        {
          title: 'Translator',
          subtitle: 'Using Google Translate API to translate user input',
          image: '/portfolio/tools/translate.jpeg',
          link: 'translation',
        },
        {
          title: 'Color Pallet Assistance',
          subtitle: 'Helping me pick colors',
          image: '/portfolio/tools/paint.jpeg',
          link: 'colors',
        },
        {
          title: 'JSON Formatter',
          subtitle: 'Organizing JSON format strings so I can read them',
          image: '/portfolio/tools/json-response.png',
          link: 'json-formatter',
        },
      ],
      x = [
        {
          title: 'Hello, world!',
          subtitle: 'Making a better site with ChatGPT in an afternoon.',
          image: './projects/demos/HelloWorld.html',
          link: 'January 1, 2024',
        },
      ]
    Promise.all(
      h.map((w) => d('games', w.image).then((m) => ({ ...w, content: m })))
    ).then((w) => r(w)),
      Promise.all(
        j.map((w) => d('websites', w.image).then((m) => ({ ...w, content: m })))
      ).then((w) => s(w)),
      Promise.all(
        v.map((w) => d('tools', w.image).then((m) => ({ ...w, content: m })))
      ).then((w) => a(w)),
      Promise.all(
        x.map((w) => d('demos', w.image).then((m) => ({ ...w, content: m })))
      ).then((w) => u(w))
  }, [])
  const f = (d, h) =>
    l.jsx('div', {
      className: 'row',
      children: h.map((j) =>
        l.jsx(
          'div',
          {
            className: 'col-md-4 mb-4',
            children: l.jsx('a', {
              href: j.link,
              rel: 'noopener noreferrer',
              children: l.jsxs('div', {
                className: 'card',
                children: [
                  l.jsx('img', {
                    src: j.image,
                    alt: j.title,
                    className: 'card-img-top',
                  }),
                  l.jsxs('div', {
                    className: 'card-body',
                    children: [
                      l.jsx('h5', {
                        className: 'card-title',
                        children: j.title,
                      }),
                      l.jsx('p', {
                        className: 'card-text',
                        children: j.subtitle,
                      }),
                    ],
                  }),
                ],
              }),
            }),
          },
          j.title
        )
      ),
    })
  return l.jsxs('div', {
    className: 'container mt-5',
    children: [
      l.jsx('h1', { className: 'text-center', children: 'Portfolio' }),
      l.jsxs(le.Container, {
        id: 'project-tabs',
        activeKey: e,
        onSelect: (d) => t(d),
        children: [
          l.jsx(xo, {
            children: l.jsxs(I, {
              variant: 'pills',
              className: 'justify-content-center',
              children: [
                l.jsx(I.Item, {
                  children: l.jsx(I.Link, {
                    eventKey: 'games',
                    children: 'Games',
                  }),
                }),
                l.jsx(I.Item, {
                  children: l.jsx(I.Link, {
                    eventKey: 'websites',
                    children: 'Websites',
                  }),
                }),
                l.jsx(I.Item, {
                  children: l.jsx(I.Link, {
                    eventKey: 'tools',
                    children: 'Tools',
                  }),
                }),
                l.jsx(I.Item, {
                  children: l.jsx(I.Link, {
                    eventKey: 'demos',
                    children: 'Demos',
                  }),
                }),
              ],
            }),
          }),
          l.jsxs(le.Content, {
            children: [
              l.jsx(le.Pane, { eventKey: 'games', children: f('games', n) }),
              l.jsx(le.Pane, {
                eventKey: 'websites',
                children: f('websites', o),
              }),
              l.jsx(le.Pane, { eventKey: 'tools', children: f('tools', i) }),
              l.jsx(le.Pane, { eventKey: 'demos', children: f('demos', c) }),
            ],
          }),
        ],
      }),
    ],
  })
}
function Tm(e, t) {
  return function () {
    return e.apply(t, arguments)
  }
}
const { toString: Bj } = Object.prototype,
  { getPrototypeOf: vc } = Object,
  al = ((e) => (t) => {
    const n = Bj.call(t)
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
  })(Object.create(null)),
  gt = (e) => ((e = e.toLowerCase()), (t) => al(t) === e),
  cl = (e) => (t) => typeof t === e,
  { isArray: pr } = Array,
  co = cl('undefined')
function zj(e) {
  return (
    e !== null &&
    !co(e) &&
    e.constructor !== null &&
    !co(e.constructor) &&
    qe(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  )
}
const bm = gt('ArrayBuffer')
function Uj(e) {
  let t
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && bm(e.buffer)),
    t
  )
}
const Hj = cl('string'),
  qe = cl('function'),
  _m = cl('number'),
  ul = (e) => e !== null && typeof e == 'object',
  Wj = (e) => e === !0 || e === !1,
  rs = (e) => {
    if (al(e) !== 'object') return !1
    const t = vc(e)
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    )
  },
  Kj = gt('Date'),
  Vj = gt('File'),
  Gj = gt('Blob'),
  Jj = gt('FileList'),
  Qj = (e) => ul(e) && qe(e.pipe),
  Xj = (e) => {
    let t
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (qe(e.append) &&
          ((t = al(e)) === 'formdata' ||
            (t === 'object' &&
              qe(e.toString) &&
              e.toString() === '[object FormData]'))))
    )
  },
  Yj = gt('URLSearchParams'),
  qj = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
function jo(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return
  let r, o
  if ((typeof e != 'object' && (e = [e]), pr(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e)
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = s.length
    let a
    for (r = 0; r < i; r++) (a = s[r]), t.call(null, e[a], a, e)
  }
}
function Pm(e, t) {
  t = t.toLowerCase()
  const n = Object.keys(e)
  let r = n.length,
    o
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o
  return null
}
const Rm =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : global,
  Om = (e) => !co(e) && e !== Rm
function oa() {
  const { caseless: e } = (Om(this) && this) || {},
    t = {},
    n = (r, o) => {
      const s = (e && Pm(t, o)) || o
      rs(t[s]) && rs(r)
        ? (t[s] = oa(t[s], r))
        : rs(r)
          ? (t[s] = oa({}, r))
          : pr(r)
            ? (t[s] = r.slice())
            : (t[s] = r)
    }
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && jo(arguments[r], n)
  return t
}
const Zj = (e, t, n, { allOwnKeys: r } = {}) => (
    jo(
      t,
      (o, s) => {
        n && qe(o) ? (e[s] = Tm(o, n)) : (e[s] = o)
      },
      { allOwnKeys: r }
    ),
    e
  ),
  ew = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  tw = (e, t, n, r) => {
    ;(e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n)
  },
  nw = (e, t, n, r) => {
    let o, s, i
    const a = {}
    if (((t = t || {}), e == null)) return t
    do {
      for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
        (i = o[s]), (!r || r(i, e, t)) && !a[i] && ((t[i] = e[i]), (a[i] = !0))
      e = n !== !1 && vc(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype)
    return t
  },
  rw = (e, t, n) => {
    ;(e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length)
    const r = e.indexOf(t, n)
    return r !== -1 && r === n
  },
  ow = (e) => {
    if (!e) return null
    if (pr(e)) return e
    let t = e.length
    if (!_m(t)) return null
    const n = new Array(t)
    for (; t-- > 0; ) n[t] = e[t]
    return n
  },
  sw = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && vc(Uint8Array)),
  lw = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e)
    let o
    for (; (o = r.next()) && !o.done; ) {
      const s = o.value
      t.call(e, s[0], s[1])
    }
  },
  iw = (e, t) => {
    let n
    const r = []
    for (; (n = e.exec(t)) !== null; ) r.push(n)
    return r
  },
  aw = gt('HTMLFormElement'),
  cw = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o
    }),
  od = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  uw = gt('RegExp'),
  Lm = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {}
    jo(n, (o, s) => {
      let i
      ;(i = t(o, s, e)) !== !1 && (r[s] = i || o)
    }),
      Object.defineProperties(e, r)
  },
  dw = (e) => {
    Lm(e, (t, n) => {
      if (qe(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1)
        return !1
      const r = e[n]
      if (qe(r)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1
          return
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'")
          })
      }
    })
  },
  fw = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((s) => {
          n[s] = !0
        })
      }
    return pr(e) ? r(e) : r(String(e).split(t)), n
  },
  pw = () => {},
  hw = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Gl = 'abcdefghijklmnopqrstuvwxyz',
  sd = '0123456789',
  Dm = { DIGIT: sd, ALPHA: Gl, ALPHA_DIGIT: Gl + Gl.toUpperCase() + sd },
  mw = (e = 16, t = Dm.ALPHA_DIGIT) => {
    let n = ''
    const { length: r } = t
    for (; e--; ) n += t[(Math.random() * r) | 0]
    return n
  }
function gw(e) {
  return !!(
    e &&
    qe(e.append) &&
    e[Symbol.toStringTag] === 'FormData' &&
    e[Symbol.iterator]
  )
}
const vw = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (ul(r)) {
          if (t.indexOf(r) >= 0) return
          if (!('toJSON' in r)) {
            t[o] = r
            const s = pr(r) ? [] : {}
            return (
              jo(r, (i, a) => {
                const c = n(i, o + 1)
                !co(c) && (s[a] = c)
              }),
              (t[o] = void 0),
              s
            )
          }
        }
        return r
      }
    return n(e, 0)
  },
  yw = gt('AsyncFunction'),
  xw = (e) => e && (ul(e) || qe(e)) && qe(e.then) && qe(e.catch),
  k = {
    isArray: pr,
    isArrayBuffer: bm,
    isBuffer: zj,
    isFormData: Xj,
    isArrayBufferView: Uj,
    isString: Hj,
    isNumber: _m,
    isBoolean: Wj,
    isObject: ul,
    isPlainObject: rs,
    isUndefined: co,
    isDate: Kj,
    isFile: Vj,
    isBlob: Gj,
    isRegExp: uw,
    isFunction: qe,
    isStream: Qj,
    isURLSearchParams: Yj,
    isTypedArray: sw,
    isFileList: Jj,
    forEach: jo,
    merge: oa,
    extend: Zj,
    trim: qj,
    stripBOM: ew,
    inherits: tw,
    toFlatObject: nw,
    kindOf: al,
    kindOfTest: gt,
    endsWith: rw,
    toArray: ow,
    forEachEntry: lw,
    matchAll: iw,
    isHTMLForm: aw,
    hasOwnProperty: od,
    hasOwnProp: od,
    reduceDescriptors: Lm,
    freezeMethods: dw,
    toObjectSet: fw,
    toCamelCase: cw,
    noop: pw,
    toFiniteNumber: hw,
    findKey: Pm,
    global: Rm,
    isContextDefined: Om,
    ALPHABET: Dm,
    generateString: mw,
    isSpecCompliantForm: gw,
    toJSONObject: vw,
    isAsyncFn: yw,
    isThenable: xw,
  }
function z(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o)
}
k.inherits(z, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: k.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    }
  },
})
const Mm = z.prototype,
  $m = {}
;[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((e) => {
  $m[e] = { value: e }
})
Object.defineProperties(z, $m)
Object.defineProperty(Mm, 'isAxiosError', { value: !0 })
z.from = (e, t, n, r, o, s) => {
  const i = Object.create(Mm)
  return (
    k.toFlatObject(
      e,
      i,
      function (c) {
        return c !== Error.prototype
      },
      (a) => a !== 'isAxiosError'
    ),
    z.call(i, e.message, t, n, r, o),
    (i.cause = e),
    (i.name = e.name),
    s && Object.assign(i, s),
    i
  )
}
const jw = null
function sa(e) {
  return k.isPlainObject(e) || k.isArray(e)
}
function Fm(e) {
  return k.endsWith(e, '[]') ? e.slice(0, -2) : e
}
function ld(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, s) {
          return (o = Fm(o)), !n && s ? '[' + o + ']' : o
        })
        .join(n ? '.' : '')
    : t
}
function ww(e) {
  return k.isArray(e) && !e.some(sa)
}
const Sw = k.toFlatObject(k, {}, null, function (t) {
  return /^is[A-Z]/.test(t)
})
function dl(e, t, n) {
  if (!k.isObject(e)) throw new TypeError('target must be an object')
  ;(t = t || new FormData()),
    (n = k.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (x, w) {
        return !k.isUndefined(w[x])
      }
    ))
  const r = n.metaTokens,
    o = n.visitor || f,
    s = n.dots,
    i = n.indexes,
    c = (n.Blob || (typeof Blob < 'u' && Blob)) && k.isSpecCompliantForm(t)
  if (!k.isFunction(o)) throw new TypeError('visitor must be a function')
  function u(v) {
    if (v === null) return ''
    if (k.isDate(v)) return v.toISOString()
    if (!c && k.isBlob(v))
      throw new z('Blob is not supported. Use a Buffer instead.')
    return k.isArrayBuffer(v) || k.isTypedArray(v)
      ? c && typeof Blob == 'function'
        ? new Blob([v])
        : Buffer.from(v)
      : v
  }
  function f(v, x, w) {
    let m = v
    if (v && !w && typeof v == 'object') {
      if (k.endsWith(x, '{}'))
        (x = r ? x : x.slice(0, -2)), (v = JSON.stringify(v))
      else if (
        (k.isArray(v) && ww(v)) ||
        ((k.isFileList(v) || k.endsWith(x, '[]')) && (m = k.toArray(v)))
      )
        return (
          (x = Fm(x)),
          m.forEach(function (y, S) {
            !(k.isUndefined(y) || y === null) &&
              t.append(
                i === !0 ? ld([x], S, s) : i === null ? x : x + '[]',
                u(y)
              )
          }),
          !1
        )
    }
    return sa(v) ? !0 : (t.append(ld(w, x, s), u(v)), !1)
  }
  const d = [],
    h = Object.assign(Sw, {
      defaultVisitor: f,
      convertValue: u,
      isVisitable: sa,
    })
  function j(v, x) {
    if (!k.isUndefined(v)) {
      if (d.indexOf(v) !== -1)
        throw Error('Circular reference detected in ' + x.join('.'))
      d.push(v),
        k.forEach(v, function (m, g) {
          ;(!(k.isUndefined(m) || m === null) &&
            o.call(t, m, k.isString(g) ? g.trim() : g, x, h)) === !0 &&
            j(m, x ? x.concat(g) : [g])
        }),
        d.pop()
    }
  }
  if (!k.isObject(e)) throw new TypeError('data must be an object')
  return j(e), t
}
function id(e) {
  const t = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  }
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r]
  })
}
function yc(e, t) {
  ;(this._pairs = []), e && dl(e, this, t)
}
const Im = yc.prototype
Im.append = function (t, n) {
  this._pairs.push([t, n])
}
Im.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, id)
      }
    : id
  return this._pairs
    .map(function (o) {
      return n(o[0]) + '=' + n(o[1])
    }, '')
    .join('&')
}
function Cw(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
function Am(e, t, n) {
  if (!t) return e
  const r = (n && n.encode) || Cw,
    o = n && n.serialize
  let s
  if (
    (o
      ? (s = o(t, n))
      : (s = k.isURLSearchParams(t) ? t.toString() : new yc(t, n).toString(r)),
    s)
  ) {
    const i = e.indexOf('#')
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + s)
  }
  return e
}
class ad {
  constructor() {
    this.handlers = []
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    )
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null)
  }
  clear() {
    this.handlers && (this.handlers = [])
  }
  forEach(t) {
    k.forEach(this.handlers, function (r) {
      r !== null && t(r)
    })
  }
}
const Bm = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Nw = typeof URLSearchParams < 'u' ? URLSearchParams : yc,
  kw = typeof FormData < 'u' ? FormData : null,
  Ew = typeof Blob < 'u' ? Blob : null,
  Tw = {
    isBrowser: !0,
    classes: { URLSearchParams: Nw, FormData: kw, Blob: Ew },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  zm = typeof window < 'u' && typeof document < 'u',
  bw = ((e) => zm && ['ReactNative', 'NativeScript', 'NS'].indexOf(e) < 0)(
    typeof navigator < 'u' && navigator.product
  ),
  _w =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  Pw = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: zm,
        hasStandardBrowserEnv: bw,
        hasStandardBrowserWebWorkerEnv: _w,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  pt = { ...Pw, ...Tw }
function Rw(e, t) {
  return dl(
    e,
    new pt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, s) {
          return pt.isNode && k.isBuffer(n)
            ? (this.append(r, n.toString('base64')), !1)
            : s.defaultVisitor.apply(this, arguments)
        },
      },
      t
    )
  )
}
function Ow(e) {
  return k
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === '[]' ? '' : t[1] || t[0]))
}
function Lw(e) {
  const t = {},
    n = Object.keys(e)
  let r
  const o = n.length
  let s
  for (r = 0; r < o; r++) (s = n[r]), (t[s] = e[s])
  return t
}
function Um(e) {
  function t(n, r, o, s) {
    let i = n[s++]
    if (i === '__proto__') return !0
    const a = Number.isFinite(+i),
      c = s >= n.length
    return (
      (i = !i && k.isArray(o) ? o.length : i),
      c
        ? (k.hasOwnProp(o, i) ? (o[i] = [o[i], r]) : (o[i] = r), !a)
        : ((!o[i] || !k.isObject(o[i])) && (o[i] = []),
          t(n, r, o[i], s) && k.isArray(o[i]) && (o[i] = Lw(o[i])),
          !a)
    )
  }
  if (k.isFormData(e) && k.isFunction(e.entries)) {
    const n = {}
    return (
      k.forEachEntry(e, (r, o) => {
        t(Ow(r), o, n, 0)
      }),
      n
    )
  }
  return null
}
function Dw(e, t, n) {
  if (k.isString(e))
    try {
      return (t || JSON.parse)(e), k.trim(e)
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r
    }
  return (n || JSON.stringify)(e)
}
const xc = {
  transitional: Bm,
  adapter: ['xhr', 'http'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        o = r.indexOf('application/json') > -1,
        s = k.isObject(t)
      if ((s && k.isHTMLForm(t) && (t = new FormData(t)), k.isFormData(t)))
        return o ? JSON.stringify(Um(t)) : t
      if (
        k.isArrayBuffer(t) ||
        k.isBuffer(t) ||
        k.isStream(t) ||
        k.isFile(t) ||
        k.isBlob(t)
      )
        return t
      if (k.isArrayBufferView(t)) return t.buffer
      if (k.isURLSearchParams(t))
        return (
          n.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1
          ),
          t.toString()
        )
      let a
      if (s) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1)
          return Rw(t, this.formSerializer).toString()
        if ((a = k.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const c = this.env && this.env.FormData
          return dl(a ? { 'files[]': t } : t, c && new c(), this.formSerializer)
        }
      }
      return s || o ? (n.setContentType('application/json', !1), Dw(t)) : t
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || xc.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === 'json'
      if (t && k.isString(t) && ((r && !this.responseType) || o)) {
        const i = !(n && n.silentJSONParsing) && o
        try {
          return JSON.parse(t)
        } catch (a) {
          if (i)
            throw a.name === 'SyntaxError'
              ? z.from(a, z.ERR_BAD_RESPONSE, this, null, this.response)
              : a
        }
      }
      return t
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: pt.classes.FormData, Blob: pt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300
  },
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': void 0,
    },
  },
}
k.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  xc.headers[e] = {}
})
const jc = xc,
  Mw = k.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  $w = (e) => {
    const t = {}
    let n, r, o
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            ;(o = i.indexOf(':')),
              (n = i.substring(0, o).trim().toLowerCase()),
              (r = i.substring(o + 1).trim()),
              !(!n || (t[n] && Mw[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ', ' + r : r))
          }),
      t
    )
  },
  cd = Symbol('internals')
function Tr(e) {
  return e && String(e).trim().toLowerCase()
}
function os(e) {
  return e === !1 || e == null ? e : k.isArray(e) ? e.map(os) : String(e)
}
function Fw(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g
  let r
  for (; (r = n.exec(e)); ) t[r[1]] = r[2]
  return t
}
const Iw = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
function Jl(e, t, n, r, o) {
  if (k.isFunction(r)) return r.call(this, t, n)
  if ((o && (t = n), !!k.isString(t))) {
    if (k.isString(r)) return t.indexOf(r) !== -1
    if (k.isRegExp(r)) return r.test(t)
  }
}
function Aw(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function Bw(e, t) {
  const n = k.toCamelCase(' ' + t)
  ;['get', 'set', 'has'].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, s, i) {
        return this[r].call(this, t, o, s, i)
      },
      configurable: !0,
    })
  })
}
class fl {
  constructor(t) {
    t && this.set(t)
  }
  set(t, n, r) {
    const o = this
    function s(a, c, u) {
      const f = Tr(c)
      if (!f) throw new Error('header name must be a non-empty string')
      const d = k.findKey(o, f)
      ;(!d || o[d] === void 0 || u === !0 || (u === void 0 && o[d] !== !1)) &&
        (o[d || c] = os(a))
    }
    const i = (a, c) => k.forEach(a, (u, f) => s(u, f, c))
    return (
      k.isPlainObject(t) || t instanceof this.constructor
        ? i(t, n)
        : k.isString(t) && (t = t.trim()) && !Iw(t)
          ? i($w(t), n)
          : t != null && s(n, t, r),
      this
    )
  }
  get(t, n) {
    if (((t = Tr(t)), t)) {
      const r = k.findKey(this, t)
      if (r) {
        const o = this[r]
        if (!n) return o
        if (n === !0) return Fw(o)
        if (k.isFunction(n)) return n.call(this, o, r)
        if (k.isRegExp(n)) return n.exec(o)
        throw new TypeError('parser must be boolean|regexp|function')
      }
    }
  }
  has(t, n) {
    if (((t = Tr(t)), t)) {
      const r = k.findKey(this, t)
      return !!(r && this[r] !== void 0 && (!n || Jl(this, this[r], r, n)))
    }
    return !1
  }
  delete(t, n) {
    const r = this
    let o = !1
    function s(i) {
      if (((i = Tr(i)), i)) {
        const a = k.findKey(r, i)
        a && (!n || Jl(r, r[a], a, n)) && (delete r[a], (o = !0))
      }
    }
    return k.isArray(t) ? t.forEach(s) : s(t), o
  }
  clear(t) {
    const n = Object.keys(this)
    let r = n.length,
      o = !1
    for (; r--; ) {
      const s = n[r]
      ;(!t || Jl(this, this[s], s, t, !0)) && (delete this[s], (o = !0))
    }
    return o
  }
  normalize(t) {
    const n = this,
      r = {}
    return (
      k.forEach(this, (o, s) => {
        const i = k.findKey(r, s)
        if (i) {
          ;(n[i] = os(o)), delete n[s]
          return
        }
        const a = t ? Aw(s) : String(s).trim()
        a !== s && delete n[s], (n[a] = os(o)), (r[a] = !0)
      }),
      this
    )
  }
  concat(...t) {
    return this.constructor.concat(this, ...t)
  }
  toJSON(t) {
    const n = Object.create(null)
    return (
      k.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && k.isArray(r) ? r.join(', ') : r)
      }),
      n
    )
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]()
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`)
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders'
  }
  static from(t) {
    return t instanceof this ? t : new this(t)
  }
  static concat(t, ...n) {
    const r = new this(t)
    return n.forEach((o) => r.set(o)), r
  }
  static accessor(t) {
    const r = (this[cd] = this[cd] = { accessors: {} }).accessors,
      o = this.prototype
    function s(i) {
      const a = Tr(i)
      r[a] || (Bw(o, i), (r[a] = !0))
    }
    return k.isArray(t) ? t.forEach(s) : s(t), this
  }
}
fl.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
])
k.reduceDescriptors(fl.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1)
  return {
    get: () => e,
    set(r) {
      this[n] = r
    },
  }
})
k.freezeMethods(fl)
const kt = fl
function Ql(e, t) {
  const n = this || jc,
    r = t || n,
    o = kt.from(r.headers)
  let s = r.data
  return (
    k.forEach(e, function (a) {
      s = a.call(n, s, o.normalize(), t ? t.status : void 0)
    }),
    o.normalize(),
    s
  )
}
function Hm(e) {
  return !!(e && e.__CANCEL__)
}
function wo(e, t, n) {
  z.call(this, e ?? 'canceled', z.ERR_CANCELED, t, n),
    (this.name = 'CanceledError')
}
k.inherits(wo, z, { __CANCEL__: !0 })
function zw(e, t, n) {
  const r = n.config.validateStatus
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new z(
          'Request failed with status code ' + n.status,
          [z.ERR_BAD_REQUEST, z.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      )
}
const Uw = pt.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, o, s) {
        const i = [e + '=' + encodeURIComponent(t)]
        k.isNumber(n) && i.push('expires=' + new Date(n).toGMTString()),
          k.isString(r) && i.push('path=' + r),
          k.isString(o) && i.push('domain=' + o),
          s === !0 && i.push('secure'),
          (document.cookie = i.join('; '))
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp('(^|;\\s*)(' + e + ')=([^;]*)')
        )
        return t ? decodeURIComponent(t[3]) : null
      },
      remove(e) {
        this.write(e, '', Date.now() - 864e5)
      },
    }
  : {
      write() {},
      read() {
        return null
      },
      remove() {},
    }
function Hw(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function Ww(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e
}
function Wm(e, t) {
  return e && !Hw(t) ? Ww(e, t) : t
}
const Kw = pt.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement('a')
      let r
      function o(s) {
        let i = s
        return (
          t && (n.setAttribute('href', i), (i = n.href)),
          n.setAttribute('href', i),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, '') : '',
            hash: n.hash ? n.hash.replace(/^#/, '') : '',
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname,
          }
        )
      }
      return (
        (r = o(window.location.href)),
        function (i) {
          const a = k.isString(i) ? o(i) : i
          return a.protocol === r.protocol && a.host === r.host
        }
      )
    })()
  : (function () {
      return function () {
        return !0
      }
    })()
function Vw(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e)
  return (t && t[1]) || ''
}
function Gw(e, t) {
  e = e || 10
  const n = new Array(e),
    r = new Array(e)
  let o = 0,
    s = 0,
    i
  return (
    (t = t !== void 0 ? t : 1e3),
    function (c) {
      const u = Date.now(),
        f = r[s]
      i || (i = u), (n[o] = c), (r[o] = u)
      let d = s,
        h = 0
      for (; d !== o; ) (h += n[d++]), (d = d % e)
      if (((o = (o + 1) % e), o === s && (s = (s + 1) % e), u - i < t)) return
      const j = f && u - f
      return j ? Math.round((h * 1e3) / j) : void 0
    }
  )
}
function ud(e, t) {
  let n = 0
  const r = Gw(50, 250)
  return (o) => {
    const s = o.loaded,
      i = o.lengthComputable ? o.total : void 0,
      a = s - n,
      c = r(a),
      u = s <= i
    n = s
    const f = {
      loaded: s,
      total: i,
      progress: i ? s / i : void 0,
      bytes: a,
      rate: c || void 0,
      estimated: c && i && u ? (i - s) / c : void 0,
      event: o,
    }
    ;(f[t ? 'download' : 'upload'] = !0), e(f)
  }
}
const Jw = typeof XMLHttpRequest < 'u',
  Qw =
    Jw &&
    function (e) {
      return new Promise(function (n, r) {
        let o = e.data
        const s = kt.from(e.headers).normalize()
        let { responseType: i, withXSRFToken: a } = e,
          c
        function u() {
          e.cancelToken && e.cancelToken.unsubscribe(c),
            e.signal && e.signal.removeEventListener('abort', c)
        }
        let f
        if (k.isFormData(o)) {
          if (pt.hasStandardBrowserEnv || pt.hasStandardBrowserWebWorkerEnv)
            s.setContentType(!1)
          else if ((f = s.getContentType()) !== !1) {
            const [x, ...w] = f
              ? f
                  .split(';')
                  .map((m) => m.trim())
                  .filter(Boolean)
              : []
            s.setContentType([x || 'multipart/form-data', ...w].join('; '))
          }
        }
        let d = new XMLHttpRequest()
        if (e.auth) {
          const x = e.auth.username || '',
            w = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : ''
          s.set('Authorization', 'Basic ' + btoa(x + ':' + w))
        }
        const h = Wm(e.baseURL, e.url)
        d.open(e.method.toUpperCase(), Am(h, e.params, e.paramsSerializer), !0),
          (d.timeout = e.timeout)
        function j() {
          if (!d) return
          const x = kt.from(
              'getAllResponseHeaders' in d && d.getAllResponseHeaders()
            ),
            m = {
              data:
                !i || i === 'text' || i === 'json'
                  ? d.responseText
                  : d.response,
              status: d.status,
              statusText: d.statusText,
              headers: x,
              config: e,
              request: d,
            }
          zw(
            function (y) {
              n(y), u()
            },
            function (y) {
              r(y), u()
            },
            m
          ),
            (d = null)
        }
        if (
          ('onloadend' in d
            ? (d.onloadend = j)
            : (d.onreadystatechange = function () {
                !d ||
                  d.readyState !== 4 ||
                  (d.status === 0 &&
                    !(d.responseURL && d.responseURL.indexOf('file:') === 0)) ||
                  setTimeout(j)
              }),
          (d.onabort = function () {
            d && (r(new z('Request aborted', z.ECONNABORTED, e, d)), (d = null))
          }),
          (d.onerror = function () {
            r(new z('Network Error', z.ERR_NETWORK, e, d)), (d = null)
          }),
          (d.ontimeout = function () {
            let w = e.timeout
              ? 'timeout of ' + e.timeout + 'ms exceeded'
              : 'timeout exceeded'
            const m = e.transitional || Bm
            e.timeoutErrorMessage && (w = e.timeoutErrorMessage),
              r(
                new z(
                  w,
                  m.clarifyTimeoutError ? z.ETIMEDOUT : z.ECONNABORTED,
                  e,
                  d
                )
              ),
              (d = null)
          }),
          pt.hasStandardBrowserEnv &&
            (a && k.isFunction(a) && (a = a(e)), a || (a !== !1 && Kw(h))))
        ) {
          const x =
            e.xsrfHeaderName && e.xsrfCookieName && Uw.read(e.xsrfCookieName)
          x && s.set(e.xsrfHeaderName, x)
        }
        o === void 0 && s.setContentType(null),
          'setRequestHeader' in d &&
            k.forEach(s.toJSON(), function (w, m) {
              d.setRequestHeader(m, w)
            }),
          k.isUndefined(e.withCredentials) ||
            (d.withCredentials = !!e.withCredentials),
          i && i !== 'json' && (d.responseType = e.responseType),
          typeof e.onDownloadProgress == 'function' &&
            d.addEventListener('progress', ud(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == 'function' &&
            d.upload &&
            d.upload.addEventListener('progress', ud(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((c = (x) => {
              d &&
                (r(!x || x.type ? new wo(null, e, d) : x),
                d.abort(),
                (d = null))
            }),
            e.cancelToken && e.cancelToken.subscribe(c),
            e.signal &&
              (e.signal.aborted ? c() : e.signal.addEventListener('abort', c)))
        const v = Vw(h)
        if (v && pt.protocols.indexOf(v) === -1) {
          r(new z('Unsupported protocol ' + v + ':', z.ERR_BAD_REQUEST, e))
          return
        }
        d.send(o || null)
      })
    },
  la = { http: jw, xhr: Qw }
k.forEach(la, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t })
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t })
  }
})
const dd = (e) => `- ${e}`,
  Xw = (e) => k.isFunction(e) || e === null || e === !1,
  Km = {
    getAdapter: (e) => {
      e = k.isArray(e) ? e : [e]
      const { length: t } = e
      let n, r
      const o = {}
      for (let s = 0; s < t; s++) {
        n = e[s]
        let i
        if (
          ((r = n),
          !Xw(n) && ((r = la[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new z(`Unknown adapter '${i}'`)
        if (r) break
        o[i || '#' + s] = r
      }
      if (!r) {
        const s = Object.entries(o).map(
          ([a, c]) =>
            `adapter ${a} ` +
            (c === !1
              ? 'is not supported by the environment'
              : 'is not available in the build')
        )
        let i = t
          ? s.length > 1
            ? `since :
` +
              s.map(dd).join(`
`)
            : ' ' + dd(s[0])
          : 'as no adapter specified'
        throw new z(
          'There is no suitable adapter to dispatch the request ' + i,
          'ERR_NOT_SUPPORT'
        )
      }
      return r
    },
    adapters: la,
  }
function Xl(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new wo(null, e)
}
function fd(e) {
  return (
    Xl(e),
    (e.headers = kt.from(e.headers)),
    (e.data = Ql.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    Km.getAdapter(e.adapter || jc.adapter)(e).then(
      function (r) {
        return (
          Xl(e),
          (r.data = Ql.call(e, e.transformResponse, r)),
          (r.headers = kt.from(r.headers)),
          r
        )
      },
      function (r) {
        return (
          Hm(r) ||
            (Xl(e),
            r &&
              r.response &&
              ((r.response.data = Ql.call(e, e.transformResponse, r.response)),
              (r.response.headers = kt.from(r.response.headers)))),
          Promise.reject(r)
        )
      }
    )
  )
}
const pd = (e) => (e instanceof kt ? e.toJSON() : e)
function or(e, t) {
  t = t || {}
  const n = {}
  function r(u, f, d) {
    return k.isPlainObject(u) && k.isPlainObject(f)
      ? k.merge.call({ caseless: d }, u, f)
      : k.isPlainObject(f)
        ? k.merge({}, f)
        : k.isArray(f)
          ? f.slice()
          : f
  }
  function o(u, f, d) {
    if (k.isUndefined(f)) {
      if (!k.isUndefined(u)) return r(void 0, u, d)
    } else return r(u, f, d)
  }
  function s(u, f) {
    if (!k.isUndefined(f)) return r(void 0, f)
  }
  function i(u, f) {
    if (k.isUndefined(f)) {
      if (!k.isUndefined(u)) return r(void 0, u)
    } else return r(void 0, f)
  }
  function a(u, f, d) {
    if (d in t) return r(u, f)
    if (d in e) return r(void 0, u)
  }
  const c = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (u, f) => o(pd(u), pd(f), !0),
  }
  return (
    k.forEach(Object.keys(Object.assign({}, e, t)), function (f) {
      const d = c[f] || o,
        h = d(e[f], t[f], f)
      ;(k.isUndefined(h) && d !== a) || (n[f] = h)
    }),
    n
  )
}
const Vm = '1.6.7',
  wc = {}
;['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    wc[e] = function (r) {
      return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e
    }
  }
)
const hd = {}
wc.transitional = function (t, n, r) {
  function o(s, i) {
    return (
      '[Axios v' +
      Vm +
      "] Transitional option '" +
      s +
      "'" +
      i +
      (r ? '. ' + r : '')
    )
  }
  return (s, i, a) => {
    if (t === !1)
      throw new z(
        o(i, ' has been removed' + (n ? ' in ' + n : '')),
        z.ERR_DEPRECATED
      )
    return (
      n &&
        !hd[i] &&
        ((hd[i] = !0),
        console.warn(
          o(
            i,
            ' has been deprecated since v' +
              n +
              ' and will be removed in the near future'
          )
        )),
      t ? t(s, i, a) : !0
    )
  }
}
function Yw(e, t, n) {
  if (typeof e != 'object')
    throw new z('options must be an object', z.ERR_BAD_OPTION_VALUE)
  const r = Object.keys(e)
  let o = r.length
  for (; o-- > 0; ) {
    const s = r[o],
      i = t[s]
    if (i) {
      const a = e[s],
        c = a === void 0 || i(a, s, e)
      if (c !== !0)
        throw new z('option ' + s + ' must be ' + c, z.ERR_BAD_OPTION_VALUE)
      continue
    }
    if (n !== !0) throw new z('Unknown option ' + s, z.ERR_BAD_OPTION)
  }
}
const ia = { assertOptions: Yw, validators: wc },
  Dt = ia.validators
class Is {
  constructor(t) {
    ;(this.defaults = t),
      (this.interceptors = { request: new ad(), response: new ad() })
  }
  async request(t, n) {
    try {
      return await this._request(t, n)
    } catch (r) {
      if (r instanceof Error) {
        let o
        Error.captureStackTrace
          ? Error.captureStackTrace((o = {}))
          : (o = new Error())
        const s = o.stack ? o.stack.replace(/^.+\n/, '') : ''
        r.stack
          ? s &&
            !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, '')) &&
            (r.stack +=
              `
` + s)
          : (r.stack = s)
      }
      throw r
    }
  }
  _request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = or(this.defaults, n))
    const { transitional: r, paramsSerializer: o, headers: s } = n
    r !== void 0 &&
      ia.assertOptions(
        r,
        {
          silentJSONParsing: Dt.transitional(Dt.boolean),
          forcedJSONParsing: Dt.transitional(Dt.boolean),
          clarifyTimeoutError: Dt.transitional(Dt.boolean),
        },
        !1
      ),
      o != null &&
        (k.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : ia.assertOptions(
              o,
              { encode: Dt.function, serialize: Dt.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase())
    let i = s && k.merge(s.common, s[n.method])
    s &&
      k.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (v) => {
          delete s[v]
        }
      ),
      (n.headers = kt.concat(i, s))
    const a = []
    let c = !0
    this.interceptors.request.forEach(function (x) {
      ;(typeof x.runWhen == 'function' && x.runWhen(n) === !1) ||
        ((c = c && x.synchronous), a.unshift(x.fulfilled, x.rejected))
    })
    const u = []
    this.interceptors.response.forEach(function (x) {
      u.push(x.fulfilled, x.rejected)
    })
    let f,
      d = 0,
      h
    if (!c) {
      const v = [fd.bind(this), void 0]
      for (
        v.unshift.apply(v, a),
          v.push.apply(v, u),
          h = v.length,
          f = Promise.resolve(n);
        d < h;

      )
        f = f.then(v[d++], v[d++])
      return f
    }
    h = a.length
    let j = n
    for (d = 0; d < h; ) {
      const v = a[d++],
        x = a[d++]
      try {
        j = v(j)
      } catch (w) {
        x.call(this, w)
        break
      }
    }
    try {
      f = fd.call(this, j)
    } catch (v) {
      return Promise.reject(v)
    }
    for (d = 0, h = u.length; d < h; ) f = f.then(u[d++], u[d++])
    return f
  }
  getUri(t) {
    t = or(this.defaults, t)
    const n = Wm(t.baseURL, t.url)
    return Am(n, t.params, t.paramsSerializer)
  }
}
k.forEach(['delete', 'get', 'head', 'options'], function (t) {
  Is.prototype[t] = function (n, r) {
    return this.request(
      or(r || {}, { method: t, url: n, data: (r || {}).data })
    )
  }
})
k.forEach(['post', 'put', 'patch'], function (t) {
  function n(r) {
    return function (s, i, a) {
      return this.request(
        or(a || {}, {
          method: t,
          headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
          url: s,
          data: i,
        })
      )
    }
  }
  ;(Is.prototype[t] = n()), (Is.prototype[t + 'Form'] = n(!0))
})
const ss = Is
class Sc {
  constructor(t) {
    if (typeof t != 'function')
      throw new TypeError('executor must be a function.')
    let n
    this.promise = new Promise(function (s) {
      n = s
    })
    const r = this
    this.promise.then((o) => {
      if (!r._listeners) return
      let s = r._listeners.length
      for (; s-- > 0; ) r._listeners[s](o)
      r._listeners = null
    }),
      (this.promise.then = (o) => {
        let s
        const i = new Promise((a) => {
          r.subscribe(a), (s = a)
        }).then(o)
        return (
          (i.cancel = function () {
            r.unsubscribe(s)
          }),
          i
        )
      }),
      t(function (s, i, a) {
        r.reason || ((r.reason = new wo(s, i, a)), n(r.reason))
      })
  }
  throwIfRequested() {
    if (this.reason) throw this.reason
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason)
      return
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t])
  }
  unsubscribe(t) {
    if (!this._listeners) return
    const n = this._listeners.indexOf(t)
    n !== -1 && this._listeners.splice(n, 1)
  }
  static source() {
    let t
    return {
      token: new Sc(function (o) {
        t = o
      }),
      cancel: t,
    }
  }
}
const qw = Sc
function Zw(e) {
  return function (n) {
    return e.apply(null, n)
  }
}
function eS(e) {
  return k.isObject(e) && e.isAxiosError === !0
}
const aa = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
}
Object.entries(aa).forEach(([e, t]) => {
  aa[t] = e
})
const tS = aa
function Gm(e) {
  const t = new ss(e),
    n = Tm(ss.prototype.request, t)
  return (
    k.extend(n, ss.prototype, t, { allOwnKeys: !0 }),
    k.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return Gm(or(e, o))
    }),
    n
  )
}
const A = Gm(jc)
A.Axios = ss
A.CanceledError = wo
A.CancelToken = qw
A.isCancel = Hm
A.VERSION = Vm
A.toFormData = dl
A.AxiosError = z
A.Cancel = A.CanceledError
A.all = function (t) {
  return Promise.all(t)
}
A.spread = Zw
A.isAxiosError = eS
A.mergeConfig = or
A.AxiosHeaders = kt
A.formToJSON = (e) => Um(k.isHTMLForm(e) ? new FormData(e) : e)
A.getAdapter = Km.getAdapter
A.HttpStatusCode = tS
A.default = A
function nS() {
  const [e, t] = p.useState([]),
    [n, r] = p.useState(''),
    o = () => {
      const a = 'cP1TKlvcDX/LLMcD5hHjKw==E5SrJvJtMhSJ8sRm',
        c = `https://api.api-ninjas.com/v1/logo?name=${n}`
      A.get(c, { headers: { 'X-Api-Key': a } })
        .then((u) => {
          t(u.data)
        })
        .catch((u) => {
          console.error('Error:', u)
        })
    },
    s = (a) => {
      r(a.target.value)
    },
    i = (a) => {
      a.preventDefault(), o()
    }
  return l.jsxs('div', {
    className: 'container mt-4',
    children: [
      l.jsx('h1', { className: 'mb-4', children: 'Company Logo Search' }),
      l.jsx('form', {
        onSubmit: i,
        children: l.jsxs('div', {
          className: 'form-row mb-4',
          children: [
            l.jsx('div', {
              className: 'col',
              children: l.jsx('input', {
                type: 'text',
                name: 'companyName',
                value: n,
                className: 'form-control',
                placeholder: 'Enter Company Name',
                onChange: s,
              }),
            }),
            l.jsx('div', {
              className: 'col',
              children: l.jsx('button', {
                type: 'submit',
                className: 'btn btn-primary',
                children: 'Search Logo',
              }),
            }),
          ],
        }),
      }),
      e.length > 0 &&
        l.jsxs('div', {
          children: [
            l.jsx('h2', { children: 'Logo Details' }),
            l.jsxs('p', { children: ['Name: ', e[0].name] }),
            l.jsxs('p', { children: ['Ticker: ', e[0].ticker] }),
            l.jsx('div', {
              className: 'bg-white p-3',
              children: l.jsx('img', {
                src: e[0].image,
                alt: `${e[0].name} Logo`,
                style: { maxWidth: '200px' },
              }),
            }),
          ],
        }),
    ],
  })
}
class rS extends p.Component {
  constructor() {
    super()
    bn(this, 'handleDropdownChange', (n) => {
      const { name: r, value: o } = n.target
      this.setState({ [r]: o }, () => {
        this.fetchExerciseData()
      })
    })
    bn(this, 'handleExerciseNameChange', (n) => {
      const { name: r, value: o } = n.target
      this.setState({ [r]: o }, () => {
        this.fetchExerciseData()
      })
    })
    this.state = {
      exerciseData: [],
      exerciseTypes: [],
      muscleGroups: [],
      difficultyLevels: [],
      selectedType: '',
      selectedMuscle: '',
      selectedDifficulty: '',
      exerciseName: '',
    }
  }
  componentDidMount() {
    this.fetchExerciseData(),
      this.fetchExerciseTypes(),
      this.fetchMuscleGroups(),
      this.fetchDifficultyLevels()
  }
  fetchExerciseData() {
    const n = 'cP1TKlvcDX/LLMcD5hHjKw==E5SrJvJtMhSJ8sRm',
      {
        selectedType: r,
        selectedMuscle: o,
        selectedDifficulty: s,
        exerciseName: i,
      } = this.state,
      a = `https://api.api-ninjas.com/v1/exercises?muscle=${o}&type=${r}&difficulty=${s}&name=${i}`
    A.get(a, { headers: { 'X-Api-Key': n } })
      .then((c) => {
        this.setState({ exerciseData: c.data })
      })
      .catch((c) => {
        console.error('Error:', c)
      })
  }
  fetchExerciseTypes() {
    const n = [
      'cardio',
      'olympic_weightlifting',
      'plyometrics',
      'powerlifting',
      'strength',
      'stretching',
      'strongman',
    ]
    this.setState({ exerciseTypes: n })
  }
  fetchMuscleGroups() {
    const n = [
      'abdominals',
      'abductors',
      'adductors',
      'biceps',
      'calves',
      'chest',
      'forearms',
      'glutes',
      'hamstrings',
      'lats',
      'lower_back',
      'middle_back',
      'neck',
      'quadriceps',
      'traps',
      'triceps',
    ]
    this.setState({ muscleGroups: n })
  }
  fetchDifficultyLevels() {
    const n = ['beginner', 'intermediate', 'expert']
    this.setState({ difficultyLevels: n })
  }
  render() {
    const {
      exerciseData: n,
      exerciseTypes: r,
      muscleGroups: o,
      difficultyLevels: s,
      exerciseName: i,
    } = this.state
    return l.jsxs('div', {
      className: 'container',
      children: [
        l.jsx('h1', {
          className: 'mt-4 mb-4',
          children: 'Exercises Encyclopedia',
        }),
        l.jsxs('div', {
          className: 'form-row mb-4',
          children: [
            l.jsx('div', {
              className: 'container',
              children:
                'Search for exercises by name, or filter by muscle group, difficulty level, or type of exercise.',
            }),
            l.jsx('div', {
              className: 'col',
              children: l.jsx('input', {
                type: 'text',
                name: 'exerciseName',
                value: i,
                className: 'form-control',
                placeholder: 'Search by Exercise Name (Optional)',
                onChange: this.handleExerciseNameChange,
              }),
            }),
            l.jsx('div', {
              className: 'col',
              children: l.jsxs('select', {
                name: 'selectedType',
                className: 'form-control',
                onChange: this.handleDropdownChange,
                children: [
                  l.jsx('option', {
                    value: '',
                    children: 'Select Type (Optional)',
                  }),
                  r.map((a, c) =>
                    l.jsx('option', { value: a, children: a }, c)
                  ),
                ],
              }),
            }),
            l.jsx('div', {
              className: 'col',
              children: l.jsxs('select', {
                name: 'selectedMuscle',
                className: 'form-control',
                onChange: this.handleDropdownChange,
                children: [
                  l.jsx('option', {
                    value: '',
                    children: 'Select Muscle (Optional)',
                  }),
                  o.map((a, c) =>
                    l.jsx('option', { value: a, children: a }, c)
                  ),
                ],
              }),
            }),
            l.jsx('div', {
              className: 'col',
              children: l.jsxs('select', {
                name: 'selectedDifficulty',
                className: 'form-control',
                onChange: this.handleDropdownChange,
                children: [
                  l.jsx('option', {
                    value: '',
                    children: 'Select Difficulty (Optional)',
                  }),
                  s.map((a, c) =>
                    l.jsx('option', { value: a, children: a }, c)
                  ),
                ],
              }),
            }),
          ],
        }),
        l.jsxs('table', {
          className: 'table table-striped',
          children: [
            l.jsx('thead', {
              children: l.jsxs('tr', {
                children: [
                  l.jsx('th', { children: 'Name' }),
                  l.jsx('th', { children: 'Type' }),
                  l.jsx('th', { children: 'Equipment' }),
                  l.jsx('th', { children: 'Difficulty' }),
                  l.jsx('th', { children: 'Instructions' }),
                ],
              }),
            }),
            l.jsx('tbody', {
              children: n.map((a, c) =>
                l.jsxs(
                  'tr',
                  {
                    children: [
                      l.jsx('td', { children: a.name }),
                      l.jsx('td', { children: a.type }),
                      l.jsx('td', { children: a.equipment }),
                      l.jsx('td', { children: a.difficulty }),
                      l.jsx('td', { children: a.instructions }),
                    ],
                  },
                  c
                )
              ),
            }),
          ],
        }),
      ],
    })
  }
}
function oS() {
  const [e, t] = p.useState({
      manufacturer: '',
      model: '',
      engine_type: '',
      min_speed: '',
      max_speed: '',
      min_range: '',
      max_range: '',
      min_length: '',
      max_length: '',
      min_height: '',
      max_height: '',
      min_wingspan: '',
      max_wingspan: '',
      limit: '30',
    }),
    [n, r] = p.useState(null),
    o = (i) => {
      const { name: a, value: c } = i.target
      t({ ...e, [a]: c })
    },
    s = async () => {
      try {
        const a = await A.get('https://api.api-ninjas.com/v1/aircraft', {
          params: e,
          headers: { 'X-Api-Key': 'cP1TKlvcDX/LLMcD5hHjKw==E5SrJvJtMhSJ8sRm' },
        })
        r(a.data)
      } catch (i) {
        console.error('API request failed:', i)
      }
    }
  return l.jsxs('div', {
    children: [
      l.jsx('h1', { children: 'Find Aircraft Data' }),
      l.jsxs(F, {
        children: [
          l.jsxs(Fs, {
            children: [
              l.jsx(cn, {
                children: l.jsxs(F.Group, {
                  children: [
                    l.jsx(F.Label, {
                      htmlFor: 'manufacturer',
                      children: 'Manufacturer:',
                    }),
                    l.jsxs(F.Control, {
                      as: 'select',
                      name: 'manufacturer',
                      id: 'manufacturer',
                      value: e.manufacturer,
                      onChange: o,
                      children: [
                        l.jsx('option', {
                          value: '',
                          children: 'Select Manufacturer',
                        }),
                        ' ',
                        l.jsx('option', {
                          value: 'Boeing',
                          children: 'Boeing',
                        }),
                        l.jsx('option', {
                          value: 'Airbus',
                          children: 'Airbus',
                        }),
                        l.jsx('option', {
                          value: 'Lockheed Martin',
                          children: 'Lockheed Martin',
                        }),
                        l.jsx('option', {
                          value: 'Embraer',
                          children: 'Embraer',
                        }),
                        l.jsx('option', {
                          value: 'Bombardier',
                          children: 'Bombardier',
                        }),
                        l.jsx('option', {
                          value: 'Mitsubishi',
                          children: 'Mitsubishi Aircraft Corporation',
                        }),
                        l.jsx('option', {
                          value: 'Hawker Beechcraft',
                          children: 'Hawker Beechcraft',
                        }),
                        l.jsx('option', {
                          value: 'Pilatus',
                          children: 'Pilatus Aircraft',
                        }),
                        l.jsx('option', {
                          value: 'Cessna',
                          children: 'Cessna',
                        }),
                        l.jsx('option', {
                          value: 'Gulfstream Aerospace',
                          children: 'Gulfstream Aerospace',
                        }),
                        l.jsx('option', {
                          value: 'Beechcraft',
                          children: 'Beechcraft',
                        }),
                        l.jsx('option', {
                          value: 'Piaggio',
                          children: 'Piaggio Aerospace',
                        }),
                        l.jsx('option', {
                          value: 'Cirrus',
                          children: 'Cirrus Aircraft',
                        }),
                        l.jsx('option', {
                          value: 'Piper Aircraft',
                          children: 'Piper Aircraft',
                        }),
                        l.jsx('option', {
                          value: 'Diamond Aircraft',
                          children: 'Diamond Aircraft',
                        }),
                        l.jsx('option', {
                          value: 'Quest Aircraft',
                          children: 'Quest Aircraft',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              l.jsx(cn, {
                children: l.jsxs(F.Group, {
                  children: [
                    l.jsx(F.Label, { htmlFor: 'model', children: 'Model:' }),
                    l.jsx(F.Control, {
                      type: 'text',
                      name: 'model',
                      id: 'model',
                      value: e.model,
                      onChange: o,
                    }),
                  ],
                }),
              }),
              l.jsx(cn, {
                children: l.jsxs(F.Group, {
                  children: [
                    l.jsx(F.Label, {
                      htmlFor: 'engine_type',
                      children: 'Engine Type:',
                    }),
                    l.jsxs(F.Control, {
                      as: 'select',
                      name: 'engine_type',
                      id: 'engine_type',
                      value: e.engine_type,
                      onChange: o,
                      children: [
                        l.jsx('option', { value: '', children: ' ' }),
                        ' ',
                        l.jsx('option', {
                          value: 'piston',
                          children: 'Piston',
                        }),
                        l.jsx('option', {
                          value: 'propjet',
                          children: 'Propjet',
                        }),
                        l.jsx('option', { value: 'jet', children: 'Jet' }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          l.jsxs(Fs, {
            children: [
              l.jsxs(cn, {
                children: [
                  l.jsxs(F.Group, {
                    children: [
                      l.jsx(F.Label, {
                        htmlFor: 'min_speed',
                        children: 'Min Speed (knots):',
                      }),
                      l.jsx(F.Control, {
                        type: 'text',
                        name: 'min_speed',
                        id: 'min_speed',
                        value: e.min_speed,
                        onChange: o,
                      }),
                    ],
                  }),
                  l.jsxs(F.Group, {
                    children: [
                      l.jsx(F.Label, {
                        htmlFor: 'max_speed',
                        children: 'Max Speed (knots):',
                      }),
                      l.jsx(F.Control, {
                        type: 'text',
                        name: 'max_speed',
                        id: 'max_speed',
                        value: e.max_speed,
                        onChange: o,
                      }),
                    ],
                  }),
                  l.jsxs(F.Group, {
                    children: [
                      l.jsx(F.Label, {
                        htmlFor: 'min_range',
                        children: 'Min Range (nautical miles):',
                      }),
                      l.jsx(F.Control, {
                        type: 'text',
                        name: 'min_range',
                        id: 'min_range',
                        value: e.min_range,
                        onChange: o,
                      }),
                    ],
                  }),
                  l.jsxs(F.Group, {
                    children: [
                      l.jsx(F.Label, {
                        htmlFor: 'max_range',
                        children: 'Max Range (nautical miles):',
                      }),
                      l.jsx(F.Control, {
                        type: 'text',
                        name: 'max_range',
                        id: 'max_range',
                        value: e.max_range,
                        onChange: o,
                      }),
                    ],
                  }),
                  l.jsxs(F.Group, {
                    children: [
                      l.jsx(F.Label, {
                        htmlFor: 'min_length',
                        children: 'Min Length (feet):',
                      }),
                      l.jsx(F.Control, {
                        type: 'text',
                        name: 'min_length',
                        id: 'min_length',
                        value: e.min_length,
                        onChange: o,
                      }),
                    ],
                  }),
                ],
              }),
              l.jsxs(cn, {
                children: [
                  l.jsxs(F.Group, {
                    children: [
                      l.jsx(F.Label, {
                        htmlFor: 'max_length',
                        children: 'Max Length (feet):',
                      }),
                      l.jsx(F.Control, {
                        type: 'text',
                        name: 'max_length',
                        id: 'max_length',
                        value: e.max_length,
                        onChange: o,
                      }),
                    ],
                  }),
                  l.jsxs(F.Group, {
                    children: [
                      l.jsx(F.Label, {
                        htmlFor: 'min_height',
                        children: 'Min Height (feet):',
                      }),
                      l.jsx(F.Control, {
                        type: 'text',
                        name: 'min_height',
                        id: 'min_height',
                        value: e.min_height,
                        onChange: o,
                      }),
                    ],
                  }),
                  l.jsxs(F.Group, {
                    children: [
                      l.jsx(F.Label, {
                        htmlFor: 'max_height',
                        children: 'Max Height (feet):',
                      }),
                      l.jsx(F.Control, {
                        type: 'text',
                        name: 'max_height',
                        id: 'max_height',
                        value: e.max_height,
                        onChange: o,
                      }),
                    ],
                  }),
                  l.jsxs(F.Group, {
                    children: [
                      l.jsx(F.Label, {
                        htmlFor: 'min_wingspan',
                        children: 'Min Wingspan (feet):',
                      }),
                      l.jsx(F.Control, {
                        type: 'text',
                        name: 'min_wingspan',
                        id: 'min_wingspan',
                        value: e.min_wingspan,
                        onChange: o,
                      }),
                    ],
                  }),
                  l.jsxs(F.Group, {
                    children: [
                      l.jsx(F.Label, {
                        htmlFor: 'max_wingspan',
                        children: 'Max Wingspan (feet):',
                      }),
                      l.jsx(F.Control, {
                        type: 'text',
                        name: 'max_wingspan',
                        id: 'max_wingspan',
                        value: e.max_wingspan,
                        onChange: o,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          l.jsx(uc, {
            variant: 'primary',
            onClick: s,
            children: 'Get Aircraft Data',
          }),
        ],
      }),
      n &&
        l.jsx(xo, {
          children: l.jsxs(Fj, {
            striped: !0,
            bordered: !0,
            hover: !0,
            children: [
              l.jsx('thead', {
                children: l.jsxs('tr', {
                  children: [
                    l.jsx('th', { children: 'Manufacturer' }),
                    l.jsx('th', { children: 'Model' }),
                    l.jsx('th', { children: 'Engine Type' }),
                    l.jsx('th', { children: 'Engine Thrust (lb-ft)' }),
                    l.jsx('th', { children: 'Max Speed (knots)' }),
                    l.jsx('th', { children: 'Cruise Speed (knots)' }),
                    l.jsx('th', { children: 'Ceiling (ft)' }),
                    l.jsx('th', { children: 'Takeoff Ground Run (ft)' }),
                    l.jsx('th', { children: 'Landing Ground Roll (ft)' }),
                    l.jsx('th', { children: 'Gross Weight (lbs)' }),
                    l.jsx('th', { children: 'Empty Weight (lbs)' }),
                    l.jsx('th', { children: 'Length (ft)' }),
                    l.jsx('th', { children: 'Height (ft)' }),
                    l.jsx('th', { children: 'Wing Span (ft)' }),
                    l.jsx('th', { children: 'Range (nautical miles)' }),
                  ],
                }),
              }),
              l.jsx('tbody', {
                children: n.map((i, a) =>
                  l.jsxs(
                    'tr',
                    {
                      children: [
                        l.jsx('td', { children: i.manufacturer }),
                        l.jsx('td', { children: i.model }),
                        l.jsx('td', { children: i.engine_type }),
                        l.jsx('td', { children: i.engine_thrust_lb_ft }),
                        l.jsx('td', { children: i.max_speed_knots }),
                        l.jsx('td', { children: i.cruise_speed_knots }),
                        l.jsx('td', { children: i.ceiling_ft }),
                        l.jsx('td', { children: i.takeoff_ground_run_ft }),
                        l.jsx('td', { children: i.landing_ground_roll_ft }),
                        l.jsx('td', { children: i.gross_weight_lbs }),
                        l.jsx('td', { children: i.empty_weight_lbs }),
                        l.jsx('td', { children: i.length_ft }),
                        l.jsx('td', { children: i.height_ft }),
                        l.jsx('td', { children: i.wing_span_ft }),
                        l.jsx('td', { children: i.range_nautical_miles }),
                      ],
                    },
                    a
                  )
                ),
              }),
            ],
          }),
        }),
    ],
  })
}
function sS() {
  const [e, t] = p.useState([]),
    [n, r] = p.useState({
      make: '',
      model: '',
      fuel_type: '',
      drive: '',
      cylinders: '',
      transmission: '',
      year: '',
      min_city_mpg: '',
      max_city_mpg: '',
      min_hwy_mpg: '',
      max_hwy_mpg: '',
      min_comb_mpg: '',
      max_comb_mpg: '',
      limit: 50,
    }),
    o = 'cP1TKlvcDX/LLMcD5hHjKw==E5SrJvJtMhSJ8sRm'
  p.useEffect(() => {
    ;(async () => {
      try {
        const c = await fetch(
          `https://api.api-ninjas.com/v1/cars?${new URLSearchParams(n).toString()}`,
          { method: 'GET', headers: { 'X-Api-Key': o } }
        )
        if (!c.ok)
          throw new Error(`API request failed with status: ${c.status}`)
        const u = await c.json()
        t(u)
      } catch (c) {
        console.error('API Request Error:', c)
      }
    })()
  }, [n])
  const s = (a) => {
      const { name: c, value: u } = a.target
      r({ ...n, [c]: u })
    },
    i = (a) => {
      a.preventDefault()
    }
  return l.jsxs('div', {
    className: 'container mt-4',
    children: [
      l.jsx('h1', { className: 'mb-4', children: 'Cars Data' }),
      l.jsxs('form', {
        onSubmit: i,
        children: [
          l.jsxs('div', {
            className: 'row mb-3',
            children: [
              l.jsxs('div', {
                className: 'col',
                children: [
                  l.jsx('label', {
                    htmlFor: 'make',
                    className: 'form-label',
                    children: 'Make:',
                  }),
                  l.jsx('input', {
                    type: 'text',
                    id: 'make',
                    name: 'make',
                    className: 'form-control',
                    value: n.make,
                    onChange: s,
                  }),
                ],
              }),
              l.jsxs('div', {
                className: 'col',
                children: [
                  l.jsx('label', {
                    htmlFor: 'model',
                    className: 'form-label',
                    children: 'Model:',
                  }),
                  l.jsx('input', {
                    type: 'text',
                    id: 'model',
                    name: 'model',
                    className: 'form-control',
                    value: n.model,
                    onChange: s,
                  }),
                ],
              }),
            ],
          }),
          l.jsxs('div', {
            className: 'row mb-3',
            children: [
              l.jsxs('div', {
                className: 'col',
                children: [
                  l.jsx('label', {
                    htmlFor: 'fuel_type',
                    className: 'form-label',
                    children: 'Fuel Type:',
                  }),
                  l.jsxs('select', {
                    id: 'fuel_type',
                    name: 'fuel_type',
                    className: 'form-select',
                    value: n.fuel_type,
                    onChange: s,
                    children: [
                      l.jsx('option', {
                        value: '',
                        children: 'Select Fuel Type',
                      }),
                      l.jsx('option', { value: 'gas', children: 'Gas' }),
                      l.jsx('option', { value: 'diesel', children: 'Diesel' }),
                      l.jsx('option', {
                        value: 'electricity',
                        children: 'Electricity',
                      }),
                    ],
                  }),
                ],
              }),
              l.jsxs('div', {
                className: 'col',
                children: [
                  l.jsx('label', {
                    htmlFor: 'drive',
                    className: 'form-label',
                    children: 'Drive Transmission:',
                  }),
                  l.jsxs('select', {
                    id: 'drive',
                    name: 'drive',
                    className: 'form-select',
                    value: n.drive,
                    onChange: s,
                    children: [
                      l.jsx('option', {
                        value: '',
                        children: 'Select Drive Transmission',
                      }),
                      l.jsx('option', {
                        value: 'fwd',
                        children: 'Front-Wheel Drive (FWD)',
                      }),
                      l.jsx('option', {
                        value: 'rwd',
                        children: 'Rear-Wheel Drive (RWD)',
                      }),
                      l.jsx('option', {
                        value: 'awd',
                        children: 'All-Wheel Drive (AWD)',
                      }),
                      l.jsx('option', {
                        value: '4wd',
                        children: 'Four-Wheel Drive (4WD)',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          l.jsxs('div', {
            className: 'row mb-3',
            children: [
              l.jsxs('div', {
                className: 'col',
                children: [
                  l.jsx('label', {
                    htmlFor: 'cylinders',
                    className: 'form-label',
                    children: 'Cylinders:',
                  }),
                  l.jsxs('select', {
                    id: 'cylinders',
                    name: 'cylinders',
                    className: 'form-select',
                    value: n.cylinders,
                    onChange: s,
                    children: [
                      l.jsx('option', { value: '' }),
                      l.jsx('option', { value: '2', children: '2' }),
                      l.jsx('option', { value: '3', children: '3' }),
                      l.jsx('option', { value: '4', children: '4' }),
                      l.jsx('option', { value: '5', children: '5' }),
                      l.jsx('option', { value: '6', children: '6' }),
                      l.jsx('option', { value: '8', children: '8' }),
                      l.jsx('option', { value: '10', children: '10' }),
                      l.jsx('option', { value: '12', children: '12' }),
                      l.jsx('option', { value: '16', children: '16' }),
                    ],
                  }),
                ],
              }),
              l.jsxs('div', {
                className: 'col',
                children: [
                  l.jsx('label', {
                    htmlFor: 'transmission',
                    className: 'form-label',
                    children: 'Transmission:',
                  }),
                  l.jsxs('select', {
                    id: 'transmission',
                    name: 'transmission',
                    className: 'form-select',
                    value: n.transmission,
                    onChange: s,
                    children: [
                      l.jsx('option', {
                        value: '',
                        children: 'Select Transmission',
                      }),
                      l.jsx('option', { value: 'm', children: 'Manual' }),
                      l.jsx('option', { value: 'a', children: 'Automatic' }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          l.jsxs('div', {
            className: 'row mb-3',
            children: [
              l.jsxs('div', {
                className: 'col',
                children: [
                  l.jsx('label', {
                    htmlFor: 'year',
                    className: 'form-label',
                    children: 'Year:',
                  }),
                  l.jsx('input', {
                    type: 'number',
                    id: 'year',
                    name: 'year',
                    className: 'form-control',
                    value: n.year,
                    onChange: s,
                  }),
                ],
              }),
              l.jsxs('div', {
                className: 'col',
                children: [
                  l.jsx('label', {
                    htmlFor: 'limit',
                    className: 'form-label',
                    children: 'Limit (Results to return):',
                  }),
                  l.jsx('input', {
                    type: 'number',
                    id: 'limit',
                    name: 'limit',
                    className: 'form-control',
                    value: n.limit,
                    onChange: s,
                  }),
                ],
              }),
            ],
          }),
          l.jsxs('div', {
            className: 'row mb-3',
            children: [
              l.jsxs('div', {
                className: 'col',
                children: [
                  l.jsx('label', {
                    htmlFor: 'min_city_mpg',
                    className: 'form-label',
                    children: 'Minimum City MPG:',
                  }),
                  l.jsx('input', {
                    type: 'number',
                    id: 'min_city_mpg',
                    name: 'min_city_mpg',
                    className: 'form-control',
                    value: n.min_city_mpg,
                    onChange: s,
                  }),
                ],
              }),
              l.jsxs('div', {
                className: 'col',
                children: [
                  l.jsx('label', {
                    htmlFor: 'max_city_mpg',
                    className: 'form-label',
                    children: 'Maximum City MPG:',
                  }),
                  l.jsx('input', {
                    type: 'number',
                    id: 'max_city_mpg',
                    name: 'max_city_mpg',
                    className: 'form-control',
                    value: n.max_city_mpg,
                    onChange: s,
                  }),
                ],
              }),
            ],
          }),
          l.jsxs('div', {
            className: 'row mb-3',
            children: [
              l.jsxs('div', {
                className: 'col',
                children: [
                  l.jsx('label', {
                    htmlFor: 'min_hwy_mpg',
                    className: 'form-label',
                    children: 'Minimum Highway MPG:',
                  }),
                  l.jsx('input', {
                    type: 'number',
                    id: 'min_hwy_mpg',
                    name: 'min_hwy_mpg',
                    className: 'form-control',
                    value: n.min_hwy_mpg,
                    onChange: s,
                  }),
                ],
              }),
              l.jsxs('div', {
                className: 'col',
                children: [
                  l.jsx('label', {
                    htmlFor: 'max_hwy_mpg',
                    className: 'form-label',
                    children: 'Maximum Highway MPG:',
                  }),
                  l.jsx('input', {
                    type: 'number',
                    id: 'max_hwy_mpg',
                    name: 'max_hwy_mpg',
                    className: 'form-control',
                    value: n.max_hwy_mpg,
                    onChange: s,
                  }),
                ],
              }),
            ],
          }),
          l.jsxs('div', {
            className: 'row mb-3',
            children: [
              l.jsxs('div', {
                className: 'col',
                children: [
                  l.jsx('label', {
                    htmlFor: 'min_comb_mpg',
                    className: 'form-label',
                    children: 'Minimum Combination MPG:',
                  }),
                  l.jsx('input', {
                    type: 'number',
                    id: 'min_comb_mpg',
                    name: 'min_comb_mpg',
                    className: 'form-control',
                    value: n.min_comb_mpg,
                    onChange: s,
                  }),
                ],
              }),
              l.jsxs('div', {
                className: 'col',
                children: [
                  l.jsx('label', {
                    htmlFor: 'max_comb_mpg',
                    className: 'form-label',
                    children: 'Maximum Combination MPG:',
                  }),
                  l.jsx('input', {
                    type: 'number',
                    id: 'max_comb_mpg',
                    name: 'max_comb_mpg',
                    className: 'form-control',
                    value: n.max_comb_mpg,
                    onChange: s,
                  }),
                ],
              }),
            ],
          }),
          l.jsx('button', {
            type: 'submit',
            className: 'btn btn-primary',
            children: 'Search',
          }),
        ],
      }),
      l.jsxs('table', {
        className: 'table mt-4',
        children: [
          l.jsx('thead', {
            children: l.jsxs('tr', {
              children: [
                l.jsx('th', { children: 'Make' }),
                l.jsx('th', { children: 'Model' }),
                l.jsx('th', { children: 'Year' }),
                l.jsx('th', { children: 'Fuel Type' }),
                l.jsx('th', { children: 'Cylinders' }),
                l.jsx('th', { children: 'Drive' }),
                l.jsx('th', { children: 'Transmission' }),
                l.jsx('th', { children: 'City MPG' }),
                l.jsx('th', { children: 'Highway MPG' }),
                l.jsx('th', { children: 'Combination MPG' }),
              ],
            }),
          }),
          l.jsx('tbody', {
            children: e.map((a, c) =>
              l.jsxs(
                'tr',
                {
                  children: [
                    l.jsx('td', { children: a.make }),
                    l.jsx('td', { children: a.model }),
                    l.jsx('td', { children: a.year }),
                    l.jsx('td', { children: a.fuel_type }),
                    l.jsx('td', { children: a.cylinders }),
                    l.jsx('td', { children: a.drive }),
                    l.jsx('td', { children: a.transmission }),
                    l.jsx('td', { children: a.city_mpg }),
                    l.jsx('td', { children: a.highway_mpg }),
                    l.jsx('td', { children: a.combination_mpg }),
                  ],
                },
                c
              )
            ),
          }),
        ],
      }),
    ],
  })
}
function lS() {
  const [e, t] = p.useState(''),
    [n, r] = p.useState(''),
    [o, s] = p.useState(''),
    i = 'cP1TKlvcDX/LLMcD5hHjKw==E5SrJvJtMhSJ8sRm',
    a = () => {
      fetch(`https://api.api-ninjas.com/v1/dictionary?word=${e}`, {
        method: 'GET',
        headers: { 'X-Api-Key': i },
      })
        .then((c) => c.json())
        .then((c) => {
          c.valid
            ? (r(c.definition), s(''))
            : (r(''), s('Word not found in the dictionary.'))
        })
        .catch((c) => {
          r(''), s(`Error: ${c.message}`)
        })
    }
  return l.jsxs('div', {
    className: 'container mt-5',
    children: [
      l.jsx('h1', { children: 'Dictionary Lookup' }),
      l.jsxs('div', {
        className: 'form-group',
        children: [
          l.jsx('label', { htmlFor: 'word', children: 'Enter a word:' }),
          l.jsx('input', {
            type: 'text',
            className: 'form-control',
            id: 'wordInput',
            placeholder: 'Word',
            value: e,
            onChange: (c) => t(c.target.value),
          }),
        ],
      }),
      l.jsx('button', {
        className: 'btn btn-primary',
        onClick: a,
        children: 'Lookup',
      }),
      n &&
        l.jsx('div', {
          className: 'mt-3',
          children: l.jsxs('div', {
            className: 'alert alert-success',
            children: [
              l.jsx('h4', { className: 'alert-heading', children: e }),
              l.jsx('p', { children: n }),
            ],
          }),
        }),
      o &&
        l.jsx('div', {
          className: 'mt-3',
          children: l.jsx('div', {
            className: 'alert alert-danger',
            children: l.jsx('p', { children: o }),
          }),
        }),
    ],
  })
}
const iS = () => {
    const [e, t] = p.useState(''),
      [n, r] = p.useState(''),
      [o, s] = p.useState(null),
      [i, a] = p.useState(null),
      c = () => {
        const u = 'cP1TKlvcDX/LLMcD5hHjKw==E5SrJvJtMhSJ8sRm',
          f = e.toLowerCase() + n.toLowerCase()
        fetch(`https://api.api-ninjas.com/v1/cryptoprice?symbol=${f}`, {
          headers: { 'X-Api-Key': u },
        })
          .then((d) => {
            if (!d.ok)
              throw new Error(`Request failed with status: ${d.status}`)
            return d.json()
          })
          .then((d) => {
            s(d), a(null)
          })
          .catch((d) => {
            s(null), a(d.message)
          })
      }
    return l.jsxs('div', {
      children: [
        l.jsx('h2', { children: 'Crypto Price Checker' }),
        l.jsxs('div', {
          className: 'form-group',
          children: [
            l.jsx('label', {
              htmlFor: 'targetCurrencyInput',
              children: 'Enter Target Currency:',
            }),
            l.jsx('input', {
              type: 'text',
              id: 'targetCurrencyInput',
              className: 'form-control',
              value: e,
              onChange: (u) => t(u.target.value),
            }),
          ],
        }),
        l.jsxs('div', {
          className: 'form-group',
          children: [
            l.jsx('label', {
              htmlFor: 'baseCurrencyInput',
              children: 'Enter Base Currency:',
            }),
            l.jsx('input', {
              type: 'text',
              id: 'baseCurrencyInput',
              className: 'form-control',
              value: n,
              onChange: (u) => r(u.target.value),
            }),
          ],
        }),
        l.jsx('button', {
          className: 'btn btn-primary',
          onClick: c,
          children: 'Get Price',
        }),
        i && l.jsx('p', { className: 'text-danger', children: i }),
        o &&
          l.jsxs('table', {
            className: 'table',
            children: [
              l.jsx('thead', {
                children: l.jsxs('tr', {
                  children: [
                    l.jsx('th', { children: 'Symbol' }),
                    l.jsx('th', { children: 'Price' }),
                    l.jsx('th', { children: 'Timestamp' }),
                  ],
                }),
              }),
              l.jsx('tbody', {
                children: l.jsxs('tr', {
                  children: [
                    l.jsx('td', { children: o.symbol }),
                    l.jsx('td', { children: o.price }),
                    l.jsx('td', {
                      children: new Date(o.timestamp * 1e3).toLocaleString(),
                    }),
                  ],
                }),
              }),
            ],
          }),
      ],
    })
  },
  aS = () =>
    l.jsxs('div', {
      children: [
        l.jsx('h1', { children: 'Welcome!' }),
        l.jsx('div', {
          children:
            'This project was built to consume the APINinjas API and all of its parameters in a user friendly way. Pick from the above tabs to explore its different APIs, change parameters, and view their results.',
        }),
      ],
    }),
  cS = () => {
    const [e, t] = p.useState(''),
      [n, r] = p.useState(null),
      [o, s] = p.useState(null),
      i = () => {
        fetch(
          `https://api.api-ninjas.com/v1/textlanguage?text=${encodeURIComponent(e)}`,
          {
            headers: {
              'X-Api-Key': 'cP1TKlvcDX/LLMcD5hHjKw==E5SrJvJtMhSJ8sRm',
            },
          }
        )
          .then((c) => {
            if (!c.ok)
              throw new Error(`Request failed with status: ${c.status}`)
            return c.json()
          })
          .then((c) => {
            r(c), s(null)
          })
          .catch((c) => {
            r(null), s(c.message)
          })
      }
    return l.jsxs('div', {
      children: [
        l.jsx('h2', { children: 'Text Language Detector' }),
        l.jsx('div', {
          children: l.jsx('p', {
            children:
              'This API is not always accurate, but at least the API call is working!',
          }),
        }),
        l.jsxs('div', {
          className: 'form-group',
          children: [
            l.jsx('label', { htmlFor: 'textInput', children: 'Enter Text:' }),
            l.jsx('textarea', {
              id: 'textInput',
              className: 'form-control',
              rows: '4',
              value: e,
              onChange: (a) => t(a.target.value),
            }),
          ],
        }),
        l.jsx('button', {
          className: 'btn btn-primary',
          onClick: i,
          children: 'Detect Language',
        }),
        o && l.jsx('p', { className: 'text-danger', children: o }),
        n &&
          l.jsxs('div', {
            children: [
              l.jsx('h3', { children: 'Detected Language:' }),
              l.jsxs('p', { children: ['Language: ', n.language] }),
              l.jsxs('p', { children: ['ISO Code: ', n.iso] }),
            ],
          }),
      ],
    })
  }
function uS() {
  const [e, t] = p.useState('Home'),
    [n, r] = p.useState('Home')
  return (
    p.useEffect(() => {
      ;((s) => {
        switch (s) {
          case 'Home':
            r(l.jsx(aS, {}))
            break
          case 'Exercises':
            r(l.jsx(rS, {}))
            break
          case 'Cars':
            r(l.jsx(sS, {}))
            break
          case 'Logo Search':
            r(l.jsx(nS, {}))
            break
          case 'Aircrafts':
            r(l.jsx(oS, {}))
            break
          case 'Dictionary':
            r(l.jsx(lS, {}))
            break
          case 'Crypto Price':
            r(l.jsx(iS, {}))
            break
          case 'Text Language Detector':
            r(l.jsx(cS, {}))
            break
        }
      })(e)
    }, [e]),
    l.jsxs('div', {
      className: 'container',
      children: [
        l.jsx('h1', {
          style: { paddingTop: '100px' },
          className: 'text-center',
          children: 'API Ninjas',
        }),
        l.jsxs(le.Container, {
          id: 'component-tabs',
          activeKey: e,
          onSelect: (o) => t(o),
          children: [
            l.jsx(xo, {
              children: l.jsxs(I, {
                variant: 'pills',
                className: 'justify-content-center',
                children: [
                  l.jsx(I.Item, {
                    children: l.jsx(I.Link, {
                      eventKey: 'Exercises',
                      children: 'Exercises',
                    }),
                  }),
                  l.jsx(I.Item, {
                    children: l.jsx(I.Link, {
                      eventKey: 'Logo Search',
                      children: 'Logo Search',
                    }),
                  }),
                  l.jsx(I.Item, {
                    children: l.jsx(I.Link, {
                      eventKey: 'Aircrafts',
                      children: 'Aircrafts',
                    }),
                  }),
                  l.jsx(I.Item, {
                    children: l.jsx(I.Link, {
                      eventKey: 'Dictionary',
                      children: 'Dictionary',
                    }),
                  }),
                  l.jsx(I.Item, {
                    children: l.jsx(I.Link, {
                      eventKey: 'Cars',
                      children: 'Cars',
                    }),
                  }),
                  l.jsx(I.Item, {
                    children: l.jsx(I.Link, {
                      eventKey: 'Crypto Price',
                      children: 'Crypto Price',
                    }),
                  }),
                  l.jsx(I.Item, {
                    children: l.jsx(I.Link, {
                      eventKey: 'Text Language Detector',
                      children: 'Text Language Detector',
                    }),
                  }),
                ],
              }),
            }),
            l.jsxs(le.Content, {
              children: [
                l.jsx(le.Pane, { eventKey: 'Exercises', children: n }),
                l.jsx(le.Pane, { eventKey: 'Logo Search', children: n }),
                l.jsx(le.Pane, { eventKey: 'Aircrafts', children: n }),
                l.jsx(le.Pane, { eventKey: 'Dictionary', children: n }),
                l.jsx(le.Pane, { eventKey: 'Cars', children: n }),
                l.jsx(le.Pane, { eventKey: 'Crypto Price', children: n }),
                l.jsx(le.Pane, { eventKey: 'Home', children: n }),
                l.jsx(le.Pane, {
                  eventKey: 'Text Language Detector',
                  children: n,
                }),
              ],
            }),
          ],
        }),
      ],
    })
  )
}
function dS() {
  const [e, t] = p.useState(''),
    [n, r] = p.useState(''),
    [o, s] = p.useState(null),
    i = p.useRef(null),
    a = (j) => {
      t(j.target.value)
    },
    c = () => {
      try {
        const j = JSON.parse(e),
          v = JSON.stringify(j, null, 2)
        r(v)
        const x = u(j)
        s(x)
      } catch {
        alert('Invalid JSON data. Please check your input.'), r(''), s(null)
      }
    },
    u = (j, v = '') => {
      const x = { type: typeof j }
      if (Array.isArray(j))
        (x.type = 'array'),
          (x.items = {}),
          j.length > 0 && (x.items = u(j[0], `${v}[0]`))
      else if (typeof j == 'object') {
        ;(x.type = 'object'), (x.properties = {})
        for (const w in j) x.properties[w] = u(j[w], `${v}.${w}`)
      }
      return x
    },
    f = () => {
      i.current && (i.current.select(), document.execCommand('copy'))
    },
    d = (j, v = 0) =>
      l.jsx('ul', {
        children: Object.entries(j).map(([x, w]) =>
          l.jsxs(
            'li',
            {
              children: [
                l.jsxs('strong', { children: [x, ':'] }),
                typeof w == 'object' ? d(w, v + 1) : ` ${w}`,
              ],
            },
            x
          )
        ),
      }),
    h = (j) => {
      const v = j.target.files[0]
      if (v) {
        const x = new FileReader()
        ;(x.onload = (w) => {
          const m = w.target.result
          t(m)
        }),
          x.readAsText(v)
      }
    }
  return l.jsxs('div', {
    className: 'container mt-5',
    children: [
      l.jsx('h1', {
        className: 'mb-4',
        children: 'JSON Formatter and Analyzer',
      }),
      l.jsx('p', {
        children:
          'Welcome to the JSON Formatter and Analyzer app. This tool allows you to enter JSON data and analyze it for its structure and content. After entering your JSON data, click the "Analyze JSON" button to format the JSON and provide a detailed analysis of its properties and values.',
      }),
      l.jsxs('div', {
        className: 'form-group',
        children: [
          l.jsx('label', {
            htmlFor: 'jsonData',
            children: 'Enter JSON data or Upload a .json file:',
          }),
          l.jsx('input', { type: 'file', accept: '.json', onChange: h }),
          l.jsx('textarea', {
            id: 'jsonData',
            className: 'form-control',
            rows: '10',
            value: e,
            onChange: a,
          }),
        ],
      }),
      l.jsx('button', {
        className: 'btn btn-primary',
        onClick: c,
        children: 'Format and Analyze JSON',
      }),
      l.jsx('button', {
        className: 'btn btn-secondary ml-2',
        onClick: f,
        children: 'Copy Formatted JSON to Clipboard',
      }),
      l.jsx('textarea', {
        ref: i,
        className: 'd-none',
        value: n,
        readOnly: !0,
      }),
      l.jsx('div', {
        children: l.jsxs('div', {
          className: 'd-flex',
          children: [
            l.jsxs('div', {
              className: 'mr-4 p-3',
              style: {
                width: '50%',
                border: '1px solid #333333',
                margin: '10px',
                borderRadius: '10px',
                height: '600px',
                overflowY: 'scroll',
              },
              children: [
                l.jsx('h2', { children: 'Formatted JSON:' }),
                l.jsx('pre', { children: n }),
              ],
            }),
            l.jsxs('div', {
              className: 'mr-4 p-3',
              style: {
                width: '50%',
                border: '1px solid #333333',
                margin: '10px',
                borderRadius: '10px',
                height: '600px',
                overflowY: 'scroll',
              },
              children: [l.jsx('h2', { children: 'Analysis:' }), o && d(o)],
            }),
          ],
        }),
      }),
    ],
  })
}
function fS() {
  const [e, t] = p.useState([Array(9).fill(null)]),
    [n, r] = p.useState(0),
    [o, s] = p.useState(!0),
    [i, a] = p.useState(0),
    [c, u] = p.useState(0),
    [f, d] = p.useState('X'),
    [h, j] = p.useState('O'),
    [v, x] = p.useState([]),
    [w, m] = p.useState(''),
    [g, y] = p.useState(!1),
    S = e[n],
    N = md(S),
    C = (V) => {
      const G = e.slice(0, n + 1),
        X = G[G.length - 1].slice()
      if (N || X[V]) return
      ;(X[V] = o ? 'X' : 'O'), t(G.concat([X])), r(G.length), s(!o)
      const ye = md(X)
      ye
        ? (ye === 'X' ? (a(i + 1), m(f)) : ye === 'O' && (u(c + 1), m(h)),
          _(),
          y(!0))
        : y(!1)
    },
    E = () => {
      const V = ['#ff0000', '#00ff00', '#0000ff', '#ff9900', '#ff00ff'],
        G = Math.floor(Math.random() * V.length)
      return V[G]
    },
    _ = (V) => {
      const G = []
      for (let X = 0; X < 100; X++) {
        const ye = l.jsxs(l.Fragment, {
          children: [
            l.jsx(
              'div',
              {
                className: 'firework-burst',
                style: {
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: '5s',
                  backgroundColor: E(),
                  transform: `rotate(${Math.random() * 360}deg)`,
                },
              },
              X
            ),
            l.jsx(
              'div',
              {
                className: 'firework-burst2',
                style: {
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: '5s',
                  backgroundColor: E(),
                  transform: `rotate(${Math.random() * 360}deg)`,
                },
              },
              X
            ),
            l.jsx(
              'div',
              {
                className: 'firework-burst3',
                style: {
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: '5s',
                  backgroundColor: E(),
                  transform: `rotate(${Math.random() * 360}deg)`,
                },
              },
              X
            ),
            l.jsx(
              'div',
              {
                className: 'firework-burst4',
                style: {
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: '5s',
                  backgroundColor: E(),
                  transform: `rotate(${Math.random() * 360}deg)`,
                },
              },
              X
            ),
          ],
        })
        G.push(ye)
      }
      x(G),
        setTimeout(() => {
          x([])
        }, 5e3)
    },
    M = (V) => {
      const G = S[V]
      let X = 'btn square',
        ye = 'text-dark'
      return (
        G === 'X'
          ? ((X += ' btn-primary'), (ye = 'text-white'))
          : G === 'O' && (X += ' btn-light'),
        l.jsx('button', {
          className: X,
          onClick: () => C(V),
          children: l.jsx('span', { className: ye, children: G }),
        })
      )
    },
    O = () =>
      g
        ? l.jsxs('div', {
            className: 'alert alert-success',
            children: [
              l.jsx('div', {
                id: 'fireworks',
                className: 'fireworks',
                children: v,
              }),
              'Winner: ',
              w,
            ],
          })
        : S.every((V) => V)
          ? l.jsx('div', {
              className: 'alert alert-warning',
              children: "It's a draw!",
            })
          : l.jsxs('div', {
              className: 'alert alert-info',
              children: ['Next player: ', o ? f : h],
            }),
    ae = () => {
      t([Array(9).fill(null)]), r(0), s(!0), m(''), y(!1)
    }
  return l.jsx('div', {
    className: 'container',
    style: { marginTop: '100px' },
    children: l.jsxs('div', {
      className: 'game',
      children: [
        l.jsxs('div', {
          className: 'game-header',
          children: [
            l.jsx('h1', { children: 'Tic-Tac-Toe' }),
            l.jsxs('div', {
              className: 'form-group',
              children: [
                l.jsx('label', {
                  htmlFor: 'xPlayerName',
                  children: 'X Player Name:',
                }),
                l.jsx('input', {
                  type: 'text',
                  id: 'xPlayerName',
                  className: 'form-control',
                  value: f,
                  onChange: (V) => d(V.target.value),
                }),
              ],
            }),
            l.jsxs('div', {
              className: 'form-group',
              children: [
                l.jsx('label', {
                  htmlFor: 'oPlayerName',
                  children: 'O Player Name:',
                }),
                l.jsx('input', {
                  type: 'text',
                  id: 'oPlayerName',
                  className: 'form-control',
                  value: h,
                  onChange: (V) => j(V.target.value),
                }),
              ],
            }),
          ],
        }),
        l.jsxs('div', {
          className: 'game-board',
          children: [
            l.jsx('div', { className: 'status', children: O() }),
            l.jsxs('div', {
              className: 'board',
              children: [
                l.jsxs('div', {
                  className: 'board-row',
                  children: [M(0), M(1), M(2)],
                }),
                l.jsxs('div', {
                  className: 'board-row',
                  children: [M(3), M(4), M(5)],
                }),
                l.jsxs('div', {
                  className: 'board-row',
                  children: [M(6), M(7), M(8)],
                }),
              ],
            }),
          ],
        }),
        l.jsxs('div', {
          className: 'score-board',
          children: [
            l.jsx('h4', { children: 'Score' }),
            l.jsxs('div', {
              className: 'row',
              children: [
                l.jsx('div', {
                  className: 'col',
                  children: l.jsxs('p', { children: [f, ': ', i] }),
                }),
                l.jsx('div', {
                  className: 'col',
                  children: l.jsxs('p', { children: [h, ': ', c] }),
                }),
              ],
            }),
          ],
        }),
        l.jsx('button', {
          className: 'btn btn-danger',
          onClick: ae,
          children: 'Play Again',
        }),
        l.jsx('br', {}),
        l.jsx('div', {
          className: 'container',
          children: l.jsx('a', {
            href: 'portfolio',
            children: l.jsx('button', {
              className: 'btn btn-primary',
              children: 'Back to Portfolio',
            }),
          }),
        }),
      ],
    }),
  })
}
function md(e) {
  const t = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let n = 0; n < t.length; n++) {
    const [r, o, s] = t[n]
    if (e[r] && e[r] === e[o] && e[r] === e[s]) return e[r]
  }
  return null
}
const gd = [
  'bulbasaur',
  'ivysaur',
  'venusaur',
  'charmander',
  'charmeleon',
  'charizard',
  'squirtle',
  'wartortle',
  'blastoise',
  'caterpie',
  'metapod',
  'butterfree',
  'weedle',
  'kakuna',
  'beedrill',
  'pidgey',
  'pidgeotto',
  'pidgeot',
  'rattata',
  'raticate',
  'spearow',
  'fearow',
  'ekans',
  'arbok',
  'pikachu',
  'raichu',
  'sandshrew',
  'sandslash',
  'nidoran♀',
  'nidorina',
  'nidoqueen',
  'nidoran♂',
  'nidorino',
  'nidoking',
  'clefairy',
  'clefable',
  'vulpix',
  'ninetales',
  'jigglypuff',
  'wigglytuff',
  'zubat',
  'golbat',
  'oddish',
  'gloom',
  'vileplume',
  'paras',
  'parasect',
  'venonat',
  'venomoth',
  'digglet',
  'dugtrio',
  'meowth',
  'persian',
  'psyduck',
  'golduck',
  'mankey',
  'primeape',
  'growlithe',
  'arcanine',
  'poliwag',
  'poliwhirl',
  'poliwrath',
  'abra',
  'kadabra',
  'alakazam',
  'machop',
  'machoke',
  'machamp',
  'bellsprout',
  'weepinbell',
  'victreebel',
  'tentacool',
  'tentacruel',
  'geodude',
  'graveler',
  'golem',
  'ponyta',
  'rapidash',
  'slowpoke',
  'slowbro',
  'magnemite',
  'magneton',
  "farfetch'd",
  'doduo',
  'dodrio',
  'seel',
  'dewgong',
  'grimer',
  'muk',
  'shellder',
  'cloyster',
  'gastly',
  'haunter',
  'gengar',
  'onix',
  'drowzee',
  'hypno',
  'krabby',
  'kingler',
  'voltorb',
  'electrode',
  'exeggcute',
  'exeggutor',
  'cubone',
  'marowak',
  'hitmonlee',
  'hitmonchan',
  'lickitung',
  'koffing',
  'weezing',
  'rhyhorn',
  'rhydon',
  'chansey',
  'tangela',
  'kangaskhan',
  'horsea',
  'seadra',
  'goldeen',
  'seaking',
  'staryu',
  'starmie',
  'mr. mime',
  'scyther',
  'jynx',
  'electabuzz',
  'magmar',
  'pinsir',
  'tauros',
  'magikarp',
  'gyarados',
  'lapras',
  'ditto',
  'eevee',
  'vaporeon',
  'jolteon',
  'flareon',
  'porygon',
  'omanyte',
  'omastar',
  'kabuto',
  'kabutops',
  'aerodactyl',
  'snorlax',
  'articuno',
  'zapdos',
  'moltres',
  'dratini',
  'dragonair',
  'dragonite',
  'mewtwo',
  'mew',
]
function pS() {
  const [e, t] = p.useState(''),
    [n, r] = p.useState([]),
    [o, s] = p.useState(''),
    [i, a] = p.useState(0),
    [c, u] = p.useState(6),
    [f, d] = p.useState([])
  p.useEffect(() => {
    const C = gd[Math.floor(Math.random() * gd.length)]
    t(C), r(new Array(C.length).fill('_ '))
  }, []),
    console.log('word'),
    console.log(e),
    console.log("guessedWord.join('')"),
    console.log(e == n.join(''))
  const h = (C) => {
      s(C.target.value)
    },
    j = (C) => {
      if ((C.preventDefault(), o.length === 1 && !f.includes(o))) {
        const E = n.slice()
        let _ = !1
        for (let M = 0; M < e.length; M++) e[M] === o && ((E[M] = o), (_ = !0))
        _ || a(i + 1), r(E), s(''), d([...f, o])
      }
    },
    v = n.join('') === e,
    x = i >= c,
    w = () =>
      l.jsx('div', {
        className: 'hangman-word',
        children: n.map((C, E) =>
          l.jsx('span', { className: 'hangman-letter', children: C }, E)
        ),
      }),
    m = () =>
      l.jsx('div', {
        className: 'used-letters',
        children: l.jsxs('p', { children: ['Used Letters: ', f.join(', ')] }),
      }),
    [g, y] = p.useState(null),
    S = async (C) => {
      try {
        const E = await A.get(`https://pokeapi.co/api/v2/pokemon/${C}`)
        y(E.data)
      } catch (E) {
        console.error('Error fetching Pokemon data:', E)
      }
    },
    N = () => (
      e && S(e.toLowerCase()),
      g
        ? l.jsxs('div', {
            className: 'container',
            children: [
              l.jsx('h2', { children: "Who's that Pokemon?!" }),
              l.jsxs('div', {
                style: { backgroundColor: 'white' },
                children: [
                  !v &&
                    !x &&
                    l.jsx('img', {
                      src: g.sprites.front_shiny,
                      style: { filter: 'brightness(0)' },
                    }),
                  v && l.jsx('img', { src: g.sprites.front_shiny }),
                  x && l.jsx('img', { src: g.sprites.front_shiny }),
                ],
              }),
              l.jsxs('p', { children: ['Height: ', g.height, ' decimetres'] }),
              l.jsxs('p', { children: ['Weight: ', g.weight, ' hectograms'] }),
              l.jsxs('p', {
                children: [
                  'Type: ',
                  g.types.map((C) => C.type.name).join(', '),
                ],
              }),
              l.jsxs('p', {
                children: [
                  'Moves: ',
                  g.moves
                    .map((C) => C.move.name)
                    .slice(0, 4)
                    .join(', '),
                ],
              }),
            ],
          })
        : null
    )
  return l.jsxs('div', {
    className: 'container mt-5',
    children: [
      l.jsx('h1', { children: 'Pokemon Hangman Game' }),
      l.jsxs('p', {
        children: [
          'Try to guess the Pokemon by entering a letter at a time. You have ',
          c - i,
          ' attempts left.',
        ],
      }),
      x &&
        l.jsx(l.Fragment, {
          children: l.jsxs('p', {
            className: 'text-danger',
            children: ['You lost! The word was "', e, '".'],
          }),
        }),
      v &&
        l.jsxs('p', {
          className: 'text-success',
          children: ['Congratulations! You guessed the word: "', e, '".'],
        }),
      l.jsxs(l.Fragment, {
        children: [
          w(),
          m(),
          l.jsxs('form', {
            onSubmit: j,
            children: [
              l.jsx('div', {
                className: 'form-group',
                children: l.jsx('input', {
                  type: 'text',
                  className: 'form-control',
                  placeholder: 'Enter a letter',
                  value: o,
                  onChange: h,
                  maxLength: '1',
                }),
              }),
              l.jsx('button', {
                type: 'submit',
                className: 'btn btn-primary',
                children: 'Guess',
              }),
              l.jsx('div', {
                children: l.jsx('button', {
                  className: 'btn btn-primary',
                  onClick: () => window.location.reload(!1),
                  children: 'New Game',
                }),
              }),
              N(),
            ],
          }),
        ],
      }),
    ],
  })
}
function hS() {
  const [e, t] = p.useState(''),
    [n, r] = p.useState([]),
    [o, s] = p.useState([]),
    [i, a] = p.useState(''),
    [c, u] = p.useState(''),
    f = (m) => /^#[0-9A-F]{6}$/i.test(m),
    d = (m) => {
      const g = parseInt(m.slice(1, 3), 16),
        y = parseInt(m.slice(3, 5), 16),
        S = parseInt(m.slice(5, 7), 16),
        N = 255 - g,
        C = 255 - y,
        E = 255 - S
      return [
        `#${N.toString(16).padStart(2, '0')}${C.toString(16).padStart(2, '0')}${E.toString(16).padStart(2, '0')}`,
      ]
    },
    h = (m) => {
      const g = parseInt(m.slice(1, 3), 16),
        y = parseInt(m.slice(3, 5), 16),
        S = parseInt(m.slice(5, 7), 16),
        N = []
      for (let C = 1; C <= 5; C++) {
        const E = (g + 20 * C) % 256,
          _ = (y + 20 * C) % 256,
          M = (S + 20 * C) % 256,
          O = `#${E.toString(16).padStart(2, '0')}${_.toString(16).padStart(2, '0')}${M.toString(16).padStart(2, '0')}`
        N.push(O)
      }
      return N
    },
    j = (m) => {
      const g = parseInt(m.slice(1, 3), 16),
        y = parseInt(m.slice(3, 5), 16),
        S = parseInt(m.slice(5, 7), 16)
      return 0.299 * g + 0.587 * y + 0.114 * S > 128 ? '#000000' : '#ffffff'
    },
    v = (m) => {
      if ((m.preventDefault(), f(e))) {
        const g = d(e),
          y = h(e),
          S = j(e)
        r(g), s(y), a(S), u(e)
      } else r([]), s([]), a(''), u('')
    },
    x = (m) => {
      t(m.target.value.trim())
    },
    w = (m) => {
      u(m)
      const g = d(m),
        y = h(m),
        S = j(m)
      r(g), s(y), a(S)
    }
  return l.jsxs('div', {
    className: 'container mt-5',
    children: [
      l.jsx('h2', { className: 'mb-4', children: 'Color Selector' }),
      l.jsxs('form', {
        onSubmit: v,
        className: 'mb-4',
        children: [
          l.jsxs('div', {
            className: 'form-group',
            children: [
              l.jsx('label', {
                htmlFor: 'colorInput',
                children: 'Enter a color (HEX format):',
              }),
              l.jsx('input', {
                type: 'text',
                id: 'colorInput',
                className: 'form-control',
                value: e,
                onChange: x,
                placeholder: 'Enter a color (e.g., #FF5733)',
              }),
            ],
          }),
          l.jsx('button', {
            type: 'submit',
            className: 'btn btn-primary',
            children: 'Submit',
          }),
        ],
      }),
      c &&
        l.jsxs('div', {
          className: 'selected-color mb-4',
          children: [
            l.jsx('h3', { children: 'Selected Color:' }),
            l.jsx('div', {
              style: { backgroundColor: c },
              className: 'color-box text-center',
              children: c,
            }),
          ],
        }),
      n.length > 0 &&
        l.jsxs('div', {
          className: 'color-palette',
          children: [
            l.jsx('h3', { children: 'Complementary Color:' }),
            l.jsx('div', {
              className: 'row',
              children: n.map((m, g) =>
                l.jsx(
                  'div',
                  {
                    className: 'col-md-2 mb-3',
                    onClick: () => w(m),
                    children: l.jsx('div', {
                      style: { backgroundColor: m },
                      className: 'color-box text-center',
                      children: m,
                    }),
                  },
                  g
                )
              ),
            }),
          ],
        }),
      o.length > 0 &&
        l.jsxs('div', {
          className: 'color-palette',
          children: [
            l.jsx('h3', { children: 'Analogous Colors:' }),
            l.jsx('div', {
              className: 'row',
              children: o.map((m, g) =>
                l.jsx(
                  'div',
                  {
                    className: 'col-md-2 mb-3',
                    onClick: () => w(m),
                    children: l.jsx('div', {
                      style: { backgroundColor: m },
                      className: 'color-box text-center',
                      children: m,
                    }),
                  },
                  g
                )
              ),
            }),
          ],
        }),
      i &&
        l.jsxs('div', {
          children: [
            l.jsx('h3', { children: 'Inverse Color:' }),
            l.jsx('div', {
              style: { backgroundColor: i },
              className: 'color-box inverse-color text-center',
              children: i,
            }),
          ],
        }),
    ],
  })
}
const mS = () => {
    const [e, t] = p.useState([]),
      [n, r] = p.useState([]),
      [o, s] = p.useState([]),
      [i, a] = p.useState(0)
    p.useEffect(() => {
      const N = ['🌟', '🎈', '🎉', '🎁', '🍰', '🍭', '🍦', '🍬'],
        C = [...N, ...N].sort(() => Math.random() - 0.5)
      t(C)
    }, [])
    const [c, u] = p.useState(0),
      [f, d] = p.useState(null),
      h = () => {
        d(
          setInterval(() => {
            u((N) => N + 0.5)
          }, 1e3)
        )
      },
      j = () => {
        clearInterval(f)
      }
    p.useEffect(
      () => (
        h(),
        () => {
          j()
        }
      ),
      []
    )
    const v = () => {
        const N = Math.floor(c / 60)
            .toString()
            .padStart(2, '0'),
          C = (c % 60).toString().padStart(2, '0')
        return `${N}:${C}`
      },
      x = () =>
        l.jsx('div', {
          className: 'text-center mt-3',
          children: l.jsxs('h2', { children: ['Time: ', v()] }),
        }),
      w = (N) => {
        if (n.length !== 2 && !n.includes(N)) {
          const C = [...n, N]
          if ((r(C), C.length === 2)) {
            const [E, _] = C
            e[E] === e[_] && s([...o, e[E]]),
              setTimeout(() => {
                r([]), a(i + 1)
              }, 1e3)
          }
        }
      },
      m = () => o.length === e.length / 2,
      g = () =>
        m()
          ? l.jsx('div', {
              className: 'text-center mt-3',
              children: l.jsx('h2', {
                className: 'text-success',
                children: 'You Win!',
              }),
            })
          : null,
      y = () => {
        const N = [...e].sort(() => Math.random() - 0.5)
        t(N), a(i + 1)
      },
      S = () =>
        l.jsx('div', {
          className: 'text-center mt-3',
          children: l.jsx('button', {
            className: 'btn btn-primary',
            onClick: y,
            children: 'Shuffle Cards',
          }),
        })
    return l.jsxs('div', {
      className: 'container mt-5',
      children: [
        l.jsx('h1', { className: 'text-center mb-4', children: 'Memory Game' }),
        l.jsx('p', {
          className: 'text-center mb-4',
          children:
            "The goal of the Memory Game is to match all pairs of cards as quickly as possible while keeping the number of moves (flips) to a minimum. It's a classic memory and pattern recognition game that challenges players to remember the positions of the symbols on the cards and match them efficiently.",
        }),
        l.jsx('div', {
          className: 'row',
          children: e.map((N, C) =>
            l.jsx(
              'div',
              {
                className: `col-3 mb-3 ${n.includes(C) || o.includes(N) ? 'disabled' : ''}`,
                onClick: () => w(C),
                children: l.jsx('div', {
                  className: `card ${n.includes(C) || o.includes(N) ? 'flipped' : ''}`,
                  children: l.jsx('div', {
                    className: 'card-body text-center',
                    children: l.jsx('h3', {
                      children: n.includes(C) || o.includes(N) ? N : '?',
                    }),
                  }),
                }),
              },
              C
            )
          ),
        }),
        l.jsxs('p', {
          className: 'text-center mt-3',
          children: ['Moves: ', i],
        }),
        x(),
        S(),
        g(),
      ],
    })
  },
  gS = () => {
    const [n, r] = p.useState(h(1, 100)),
      [o, s] = p.useState(''),
      [i, a] = p.useState('Guess a number between 1 and 100'),
      [c, u] = p.useState(0),
      [f, d] = p.useState(!1)
    function h(w, m) {
      return Math.floor(Math.random() * (m - w + 1)) + w
    }
    const j = (w) => {
        s(w.target.value)
      },
      v = () => {
        const w = parseInt(o)
        if (isNaN(w) || w < 1 || w > 100) {
          a('Please enter a valid number between 1 and 100.')
          return
        }
        u(c + 1),
          w === n
            ? (a(
                `Congratulations! You guessed the number ${n} correctly in ${c} attempts.`
              ),
              d(!0))
            : w < n
              ? a('Try a higher number.')
              : a('Try a lower number.')
      },
      x = () => {
        const w = h(1, 100)
        r(w), s(''), a('Guess a number between 1 and 100'), u(0), d(!1)
      }
    return l.jsxs('div', {
      className: 'container mt-5',
      children: [
        l.jsx('h1', {
          className: 'text-center mb-4',
          children: 'Number Guessing Game',
        }),
        l.jsx('p', { className: 'text-center', children: i }),
        l.jsxs('div', {
          className: 'text-center',
          children: [
            !f &&
              l.jsxs(l.Fragment, {
                children: [
                  l.jsx('input', {
                    type: 'number',
                    value: o,
                    onChange: j,
                    placeholder: 'Enter your guess',
                    className: 'mr-2',
                  }),
                  l.jsx('button', {
                    className: 'btn btn-primary',
                    onClick: v,
                    children: 'Guess',
                  }),
                ],
              }),
            f &&
              l.jsx('button', {
                className: 'btn btn-success',
                onClick: x,
                children: 'Play Again',
              }),
          ],
        }),
        l.jsx('div', {
          className: 'text-center',
          children: l.jsx('a', {
            href: 'portfolio',
            children: l.jsx('button', {
              className: 'btn btn-primary',
              children: 'Back to Portfolio',
            }),
          }),
        }),
      ],
    })
  },
  vS = async (e, t, n) => {
    try {
      const r = await fetch(
        'https://translation.googleapis.com/language/translate/v2?key=AIzaSyBwHW6d6Fuza9d361bXe2WdzZ2p9yVndAU',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ q: e, source: t, target: n }),
        }
      )
      if (r.ok) return (await r.json()).data.translations[0].translatedText
      throw new Error('Failed to translate text')
    } catch (r) {
      throw new Error('Error translating text:', r)
    }
  },
  Wo = (e) =>
    ({
      en: 'English',
      es: 'Spanish',
      fr: 'French',
      de: 'German',
      he: 'Hebrew',
      ar: 'Arabic',
      it: 'Italian',
      ru: 'Russian',
      yi: 'Yiddish',
    })[e] || 'Unknown Language'
function yS() {
  const [e, t] = p.useState(''),
    [n, r] = p.useState(''),
    [o, s] = p.useState('en'),
    [i, a] = p.useState('es'),
    [c, u] = p.useState('en'),
    [f, d] = p.useState(
      `Enter text in ${Wo(o)}, select the input and output languages, and click the 'Translate' button to translate the text. You can also click the 'Swap Languages' button to switch between input and output languages.`
    ),
    [h, j] = p.useState('Swap Lanaguages'),
    [v, x] = p.useState('Translate')
  p.useEffect(() => {
    const N = setInterval(() => {
      u((C) => (C === 'en' ? 'es' : 'en'))
    }, 1e4)
    return () => {
      clearInterval(N)
    }
  }, [])
  const w = async (S) => {
      S.preventDefault()
      try {
        const N = await vS(e, c, i)
        r(N)
      } catch (N) {
        console.error('Error translating text:', N)
      }
    },
    m = (S) => {
      s(S.target.value),
        d(
          `Enter text in ${Wo(S.target.value)}, select the input and output languages, and click the 'Translate' button to translate the text. You can also click the 'Swap Languages' button to switch between input and output languages.`
        )
    },
    g = (S) => {
      a(S.target.value)
    },
    y = () => {
      s(i), a(o)
    }
  return l.jsxs('div', {
    className: 'container mt-5',
    children: [
      l.jsx('h2', { className: 'mb-3', children: 'Translation' }),
      l.jsx('p', {
        className: 'mb-3',
        children:
          c === 'en'
            ? `Enter text in ${Wo(o)}, select the input and output languages, and click the "Translate" button to translate the text. You can also click the "Swap Languages" button to switch between input and output languages.`
            : 'Ingrese el texto en el campo de entrada a continuación, seleccione los idiomas de entrada y salida y haga clic en el botón "Traducir" para traducir el texto. También puede hacer clic en el botón "Intercambiar idiomas" para cambiar entre los idiomas de entrada y salida.',
      }),
      l.jsxs('form', {
        onSubmit: w,
        children: [
          l.jsx('div', {
            className: 'mb-3',
            children: l.jsx('input', {
              type: 'text',
              className: 'form-control',
              placeholder: `Enter text in ${Wo(o)}`,
              value: e,
              onChange: (S) => t(S.target.value),
            }),
          }),
          l.jsx('div', {
            className: 'mb-3',
            children: l.jsxs('div', {
              className: 'input-group',
              children: [
                l.jsxs('select', {
                  className: 'form-select',
                  value: o,
                  onChange: m,
                  children: [
                    l.jsx('option', { value: 'en', children: 'English' }),
                    l.jsx('option', { value: 'es', children: 'Spanish' }),
                    l.jsx('option', { value: 'fr', children: 'French' }),
                    l.jsx('option', { value: 'de', children: 'German' }),
                    l.jsx('option', { value: 'he', children: 'Hebrew' }),
                    l.jsx('option', { value: 'ar', children: 'Arabic' }),
                    l.jsx('option', { value: 'it', children: 'Italian' }),
                    l.jsx('option', { value: 'ru', children: 'Russian' }),
                    l.jsx('option', { value: 'yi', children: 'Yiddish' }),
                  ],
                }),
                l.jsx('span', { className: 'input-group-text', children: '→' }),
                l.jsxs('select', {
                  className: 'form-select',
                  value: i,
                  onChange: g,
                  children: [
                    l.jsx('option', { value: 'es', children: 'Spanish' }),
                    l.jsx('option', { value: 'en', children: 'English' }),
                    l.jsx('option', { value: 'fr', children: 'French' }),
                    l.jsx('option', { value: 'de', children: 'German' }),
                    l.jsx('option', { value: 'he', children: 'Hebrew' }),
                    l.jsx('option', { value: 'ar', children: 'Arabic' }),
                    l.jsx('option', { value: 'it', children: 'Italian' }),
                    l.jsx('option', { value: 'ru', children: 'Russian' }),
                    l.jsx('option', { value: 'yi', children: 'Yiddish' }),
                  ],
                }),
              ],
            }),
          }),
          l.jsx('button', {
            type: 'submit',
            className: 'btn btn-primary',
            children: v,
          }),
        ],
      }),
      l.jsx('button', {
        className: 'btn btn-secondary mt-3',
        onClick: y,
        children: h,
      }),
      l.jsxs('div', {
        className: 'mt-3',
        children: [
          l.jsx('p', { className: 'lead', children: 'Translated Text:' }),
          l.jsx('p', { className: 'fw-bold', children: n }),
        ],
      }),
    ],
  })
}
const xS = () => {
    const [e, t] = p.useState(''),
      [n, r] = p.useState(!1),
      [o, s] = p.useState(null)
    p.useEffect(() => {
      if (
        'SpeechRecognition' in window ||
        'webkitSpeechRecognition' in window
      ) {
        const c = new (window.SpeechRecognition ||
          window.webkitSpeechRecognition)()
        ;(c.lang = 'en-US'),
          (c.onstart = () => {
            r(!0)
          }),
          (c.onresult = (u) => {
            const f = u.results[0][0]
            f && t(f.transcript)
          }),
          (c.onend = () => {
            r(!1)
          }),
          (c.onerror = (u) => {
            console.error('Error:', u.error), r(!1)
          }),
          s(c)
      } else
        console.error('SpeechRecognition API is not supported in this browser.')
      return () => {
        o && o.abort()
      }
    }, [])
    const i = () => {
        o && o.start()
      },
      a = () => {
        o && n && o.stop()
      }
    return l.jsxs('div', {
      className: 'container mt-5',
      children: [
        l.jsx('h1', {
          className: 'mb-4',
          children: 'Speech-to-Text Dictation Tool',
        }),
        l.jsx('p', {
          children:
            'This tool allows you to convert your speech into text. Follow these steps to use the app:',
        }),
        l.jsxs('ol', {
          children: [
            l.jsx('li', {
              children:
                'Click the "Start Recording" button to begin recording your speech.',
            }),
            l.jsx('li', {
              children:
                "Speak clearly and concisely into your device's microphone.",
            }),
            l.jsx('li', {
              children:
                'Click the "Stop Recording" button when you want to stop recording.',
            }),
          ],
        }),
        l.jsx('p', {
          children:
            'Your recorded speech will appear in the "Transcript" section below.',
        }),
        l.jsxs('div', {
          className: 'mb-3',
          children: [
            l.jsx('button', {
              className: 'btn btn-primary',
              onClick: i,
              disabled: n,
              children: 'Start Recording',
            }),
            l.jsx('br', {}),
            l.jsx('button', {
              className: 'btn btn-primary',
              onClick: a,
              disabled: !n,
              children: 'Stop Recording',
            }),
          ],
        }),
        l.jsxs('div', {
          className: 'transcript',
          children: [
            l.jsx('h5', { children: 'Transcript:' }),
            l.jsx('p', { children: e }),
          ],
        }),
        l.jsx('div', {
          className: 'container',
          children: l.jsx('a', {
            href: 'portfolio',
            children: l.jsx('button', {
              className: 'btn btn-primary',
              children: 'Back to Portfolio',
            }),
          }),
        }),
      ],
    })
  },
  Jm = ({ id: e, hovered: t, growOnHover: n }) => {
    const [r, o] = p.useState(0),
      s = [
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${e}.png`,
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${e}.png`,
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${e}.png`,
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${e}.png`,
      ]
    return (
      p.useEffect(() => {
        let i
        return (
          t
            ? (i = setInterval(() => {
                o((a) => (a + 1) % s.length)
              }, 500))
            : o(0),
          () => clearInterval(i)
        )
      }, [t]),
      l.jsx(dt.Img, {
        className: n && 'grow-on-hover-high',
        src: s[r],
        alt: `Pokemon Sprite ${e}`,
      })
    )
  }
function on(e, t) {
  e = e.replace('#', '')
  let n = parseInt(e.substring(0, 2), 16),
    r = parseInt(e.substring(2, 4), 16),
    o = parseInt(e.substring(4, 6), 16)
  return (
    (n = Math.max(0, n - t)),
    (r = Math.max(0, r - t)),
    (o = Math.max(0, o - t)),
    `#${((n << 16) | (r << 8) | o).toString(16).padStart(6, '0')}`
  )
}
function jS(e) {
  const t = parseInt(e.slice(1, 3), 16),
    n = parseInt(e.slice(3, 5), 16),
    r = parseInt(e.slice(5, 7), 16)
  return 0.299 * t + 0.587 * n + 0.114 * r > 128 ? '#000000' : '#ffffff'
}
const wS = ({ name: e, id: t, colorCardBackground: n }) => {
  const [r, o] = p.useState(!1),
    s = () => {
      o(!0)
    },
    i = () => {
      o(!1)
    }
  return l.jsx(Ue, {
    to: `/pokedex/pokemon/${t}`,
    children: l.jsxs(dt, {
      className: `pokemon-image-display grow-on-hover ${r ? 'hovered' : ''}`,
      style: { backgroundColor: 'rgba(0, 0, 0, 0.2)' },
      onMouseEnter: s,
      onMouseLeave: i,
      children: [
        l.jsx(Jm, {
          colorCardBackground: n,
          id: t,
          hovered: r,
          growOnHover: !0,
        }),
        l.jsx(dt.Body, {
          children: l.jsx(dt.Title, {
            style: { backgroundColor: 'rgba(0, 0, 0, 0.3)', color: jS(n) },
            className: 'pokemon-name-list-display',
            children: e,
          }),
        }),
      ],
    }),
  })
}
function SS(e) {
  const t = e.split('/'),
    n = t[t.length - 2]
  return parseInt(n)
}
function Qm({ list: e, setSelectedType: t, colorCardBackground: n }) {
  return l.jsx(Fs, {
    children: e.map((r, o) =>
      l.jsx(
        cn,
        {
          xs: 12,
          sm: 6,
          md: 4,
          lg: 3,
          children: l.jsx(wS, {
            colorCardBackground: n,
            setSelectedType: t,
            name: r.name.charAt(0).toUpperCase() + r.name.slice(1),
            id: SS(r.url),
          }),
        },
        o
      )
    ),
  })
}
class CS extends Q.Component {
  constructor(n) {
    super(n)
    bn(this, 'handleImageError', () => {
      this.setState({ imageError: !0 })
    })
    this.state = { imageError: !1 }
  }
  render() {
    const { src: n, alt: r, ...o } = this.props,
      { imageError: s } = this.state
    return l.jsx('img', {
      src: n,
      alt: r,
      onError: this.handleImageError,
      style: { display: s ? 'none' : 'block' },
      ...o,
    })
  }
}
const Cc = ({ children: e, colorBackground: t }) =>
    l.jsxs(xo, {
      className: 'pokedex-container-styled',
      style: { backgroundColor: t },
      children: [
        l.jsx('div', { className: 'moving-background' }),
        l.jsx(Ue, {
          to: '/pokedex',
          children: l.jsx(CS, {
            src: '/portfolio/games/Pokedex.png',
            alt: 'Pokedex Logo',
            className: 'grow-on-hover-high pokedex-logo',
          }),
        }),
        l.jsx(Fs, { children: e }),
      ],
    }),
  Yl = {
    Normal: '#A8A878',
    Fighting: '#C03028',
    Flying: '#A890F0',
    Poison: '#A040A0',
    Ground: '#E0C068',
    Rock: '#B8A038',
    Bug: '#A8B820',
    Ghost: '#705898',
    Steel: '#B8B8D0',
    Fire: '#F08030',
    Water: '#6890F0',
    Grass: '#78C850',
    Electric: '#F8D030',
    Psychic: '#F85888',
    Ice: '#98D8D8',
    Dragon: '#7038F8',
    Dark: '#705848',
    Fairy: '#EE99AC',
  }
function NS({
  setDamageRelationsData: e,
  setColorBackground: t,
  setPokemonList: n,
  selectedType: r,
  setSelectedType: o,
}) {
  const s = async (i) => {
    const a = i.target.value
    if ((o(a), t(a ? Yl[a] : 'red'), a || r !== ''))
      try {
        const c = a.charAt(0).toLowerCase() + a.slice(1),
          u = await A.get(`https://pokeapi.co/api/v2/type/${c}`),
          f = u.data.pokemon.map((d) => d.pokemon)
        e(u.data.damage_relations), n(f)
      } catch (c) {
        console.error('Error fetching data:', c)
      }
  }
  return l.jsx('div', {
    children: l.jsxs('select', {
      style: { height: '30px', width: '250px' },
      onChange: s,
      value: r,
      children: [
        l.jsx('option', { value: '', children: 'Type' }),
        Object.keys(Yl).map((i) =>
          l.jsx(
            'option',
            {
              value: i,
              style: { backgroundColor: Yl[i], color: 'white' },
              children: i,
            },
            i
          )
        ),
      ],
    }),
  })
}
const kS = [
  'red',
  'blue',
  'yellow',
  'green',
  'black',
  'brown',
  'purple',
  'gray',
  'white',
  'pink',
]
function ES({
  setColorBackground: e,
  setPokemonList: t,
  selectedType: n,
  setSelectedType: r,
}) {
  const o = async (s) => {
    const i = s.target.value
    if ((e(i || 'red'), r(''), i || n !== ''))
      try {
        const c = (
          await A.get(`https://pokeapi.co/api/v2/pokemon-color/${i}`)
        ).data.pokemon_species.map((u) => u)
        t(c)
      } catch (a) {
        console.error('Error fetching data:', a)
      }
    else if (n === '' || !i)
      try {
        const a = await A.get('https://pokeapi.co/api/v2/pokemon?limit=1025')
        t(a.data.results)
      } catch (a) {
        console.error('Error fetching data:', a)
      }
  }
  return l.jsx('div', {
    style: { height: '30px' },
    children: l.jsxs('select', {
      style: { height: '30px', width: '250px' },
      onChange: o,
      value: n,
      children: [
        l.jsx('option', { value: '', children: 'Color' }),
        kS.map((s, i) =>
          l.jsx(
            'option',
            {
              value: s,
              style: { backgroundColor: s, color: 'white' },
              children: s,
            },
            i
          )
        ),
      ],
    }),
  })
}
function TS({
  setSelectedColor: e,
  setColorBackground: t,
  setSelectedType: n,
  setDamageRelationsData: r,
  selectedAbility: o,
  setSelectedAbility: s,
}) {
  const i = [
      'stench',
      'drizzle',
      'speed-boost',
      'battle-armor',
      'sturdy',
      'damp',
      'limber',
      'sand-veil',
      'static',
      'volt-absorb',
      'water-absorb',
      'oblivious',
      'cloud-nine',
      'compound-eyes',
      'insomnia',
      'color-change',
      'immunity',
      'flash-fire',
      'shield-dust',
      'own-tempo',
    ],
    a = {
      stench: '#A040A0',
      drizzle: '#03A9F4',
      'speed-boost': '#FFA726',
      'battle-armor': '#78909C',
      sturdy: '#795548',
      damp: '#00BCD4',
      limber: '#FFC107',
      'sand-veil': '#D84315',
      static: '#FF5722',
      'volt-absorb': '#009688',
      'water-absorb': '#03A9F4',
      oblivious: '#607D8B',
      'cloud-nine': '#F44336',
      'compound-eyes': '#8BC34A',
      insomnia: '#9C27B0',
      'color-change': '#FF5722',
      immunity: '#8BC34A',
      'flash-fire': '#FF9800',
      'shield-dust': '#78909C',
      'own-tempo': '#607D8B',
    },
    c = (u) => {
      const f = u.target.value
      e(null), n(null), r(null), s(f), t(f ? a[f] : 'red')
    }
  return l.jsx('div', {
    children: l.jsxs('select', {
      style: { height: '30px', width: '250px' },
      onChange: c,
      value: o,
      children: [
        l.jsx('option', { value: '', children: 'Abilities' }),
        i.map((u) => l.jsx('option', { value: u, children: u }, u)),
      ],
    }),
  })
}
const Xm = ({ damage_relations: e }) => {
  const [t, n] = p.useState(!0),
    r = () => {
      n(!t)
    },
    o = `damage-relations-container ${t ? '' : 'damage-relations-hidden'}`
  return l.jsxs(l.Fragment, {
    children: [
      l.jsx('div', {
        className: 'hide-button',
        onClick: r,
        children: t ? 'Hide Damage Relations' : 'Show Damage Relations',
      }),
      t &&
        l.jsxs('div', {
          className: o,
          children: [
            l.jsx('div', {
              className: 'damage-heading-container',
              children: l.jsx('h4', {
                style: { paddingTop: '10px' },
                children: 'Damage Relations',
              }),
            }),
            l.jsxs('div', {
              className: 'row',
              children: [
                l.jsx('div', {
                  className: 'col',
                  children: l.jsxs('div', {
                    className: 'damage-type',
                    children: [
                      l.jsx('div', {
                        className: 'damage-type-container',
                        children: l.jsx('h5', {
                          style: { paddingTop: '10px' },
                          children: 'Double Damage From:',
                        }),
                      }),
                      l.jsx('ul', {
                        className: 'damage-list',
                        children: e.double_damage_from.map((s, i) =>
                          l.jsx(
                            Ue,
                            {
                              to: `/pokedex/type/${s.name}`,
                              children: l.jsx('li', {
                                className: 'damage-item grow-on-hover-medium',
                                children: s.name.toUpperCase(),
                              }),
                            },
                            i
                          )
                        ),
                      }),
                    ],
                  }),
                }),
                l.jsx('div', {
                  className: 'col',
                  children: l.jsxs('div', {
                    className: 'damage-type',
                    children: [
                      l.jsx('div', {
                        className: 'damage-type-container',
                        children: l.jsx('h5', {
                          style: { paddingTop: '10px' },
                          children: 'Double Damage To:',
                        }),
                      }),
                      l.jsx('ul', {
                        className: 'damage-list',
                        children: e.double_damage_to.map((s, i) =>
                          l.jsx(
                            Ue,
                            {
                              to: `/pokedex/type/${s.name}`,
                              children: l.jsx('li', {
                                className: 'damage-item grow-on-hover-medium',
                                children: s.name.toUpperCase(),
                              }),
                            },
                            i
                          )
                        ),
                      }),
                    ],
                  }),
                }),
                l.jsx('div', {
                  className: 'col',
                  children: l.jsxs('div', {
                    className: 'damage-type',
                    children: [
                      l.jsx('div', {
                        className: 'damage-type-container',
                        children: l.jsx('h5', {
                          style: { paddingTop: '10px' },
                          children: 'Half Damage From:',
                        }),
                      }),
                      l.jsx('ul', {
                        className: 'damage-list',
                        children: e.half_damage_from.map((s, i) =>
                          l.jsx(
                            Ue,
                            {
                              to: `/pokedex/type/${s.name}`,
                              children: l.jsx('li', {
                                className: 'damage-item grow-on-hover-medium',
                                children: s.name.toUpperCase(),
                              }),
                            },
                            i
                          )
                        ),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            l.jsxs('div', {
              className: 'row',
              children: [
                l.jsx('div', {
                  className: 'col',
                  children: l.jsxs('div', {
                    className: 'damage-type',
                    children: [
                      l.jsx('div', {
                        className: 'damage-type-container',
                        children: l.jsx('h5', {
                          style: { paddingTop: '10px' },
                          children: 'Half Damage To:',
                        }),
                      }),
                      l.jsx('ul', {
                        className: 'damage-list',
                        children: e.half_damage_to.map((s, i) =>
                          l.jsx(
                            Ue,
                            {
                              to: `/pokedex/type/${s.name}`,
                              children: l.jsx('li', {
                                className: 'damage-item grow-on-hover-medium',
                                children: s.name.toUpperCase(),
                              }),
                            },
                            i
                          )
                        ),
                      }),
                    ],
                  }),
                }),
                l.jsx('div', {
                  className: 'col',
                  children: l.jsxs('div', {
                    className: 'damage-type',
                    children: [
                      l.jsx('div', {
                        className: 'damage-type-container',
                        children: l.jsx('h5', {
                          style: { paddingTop: '10px' },
                          children: 'No Damage From:',
                        }),
                      }),
                      l.jsx('ul', {
                        className: 'damage-list',
                        children: e.no_damage_from.map((s, i) =>
                          l.jsx(
                            Ue,
                            {
                              to: `/pokedex/type/${s.name}`,
                              children: l.jsx('li', {
                                className: 'damage-item grow-on-hover-medium',
                                children: s.name.toUpperCase(),
                              }),
                            },
                            i
                          )
                        ),
                      }),
                    ],
                  }),
                }),
                l.jsx('div', {
                  className: 'col',
                  children: l.jsxs('div', {
                    className: 'damage-type',
                    children: [
                      l.jsx('div', {
                        className: 'damage-type-container',
                        children: l.jsx('h5', {
                          style: { paddingTop: '10px' },
                          children: 'No Damage To:',
                        }),
                      }),
                      l.jsx('ul', {
                        className: 'damage-list',
                        children: e.no_damage_to.map((s, i) =>
                          l.jsx(
                            Ue,
                            {
                              to: `/pokedex/type/${s.name}`,
                              children: l.jsx('li', {
                                className: 'damage-item grow-on-hover-medium',
                                children: s.name.toUpperCase(),
                              }),
                            },
                            i
                          )
                        ),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
    ],
  })
}
function bS({
  setSelectedColor: e,
  setColorBackground: t,
  setSelectedType: n,
  setDamageRelationsData: r,
  selectedAbility: o,
  setSelectedAbility: s,
  setSelectedHabitat: i,
  selectedHabitat: a,
}) {
  const c = {
      cave: '#5D4037',
      forest: '#4CAF50',
      grassland: '#8BC34A',
      mountain: '#607D8B',
      rare: '#FF5722',
      'rough-terrain': '#9E9E9E',
      sea: '#03A9F4',
      urban: '#FF9800',
      'waters-edge': '#03A9F4',
    },
    u = [
      'cave',
      'forest',
      'grassland',
      'mountain',
      'rare',
      'rough-terrain',
      'sea',
      'urban',
      'waters-edge',
    ],
    f = (d) => {
      const h = d.target.value
      e(null), s(null), n(null), r(null), i(h), t(h ? c[h] : 'red')
    }
  return l.jsx('div', {
    style: { height: '30px' },
    children: l.jsxs('select', {
      style: { height: '30px', width: '250px' },
      onChange: f,
      value: a,
      children: [
        l.jsx('option', { value: '', children: 'Habitats' }),
        u.map((d) => l.jsx('option', { value: d, children: d }, d)),
      ],
    }),
  })
}
function _S() {
  const [e, t] = p.useState([]),
    [n, r] = p.useState('red'),
    [o, s] = p.useState(null),
    [i, a] = p.useState(null),
    [c, u] = p.useState(null),
    [f, d] = p.useState(null),
    [h, j] = p.useState(null)
  return (
    p.useEffect(() => {
      A.get('https://pokeapi.co/api/v2/pokemon?limit=1025')
        .then((v) => {
          t(v.data.results)
        })
        .catch((v) => {
          console.error('Error fetching data:', v)
        })
    }, []),
    p.useEffect(() => {
      A.get(`https://pokeapi.co/api/v2/ability/${c}`)
        .then((v) => {
          t(v.data.pokemon.map((x) => x.pokemon))
        })
        .catch((v) => {
          console.error('Error fetching data:', v)
        })
    }, [c]),
    p.useEffect(() => {
      h &&
        A.get(`https://pokeapi.co/api/v2/pokemon-habitat/${h}`)
          .then((v) => {
            console.log('HERE'), console.log(v.data), t(v.data.pokemon_species)
          })
          .catch((v) => {
            console.error('Error fetching data:', v)
          })
    }, [h]),
    l.jsxs(Cc, {
      colorBackground: n,
      children: [
        l.jsx('style', {
          children: `
      .sorting-row {
        background-color: rgba(0, 0, 0, 0.1);
      }
          .damage-relations-container {
            background-color: rgba(0, 0, 0, 0.1);
          }
  
          .damage-heading-container {
            background-color: rgba(0, 0, 0, 0.1);
          }
  
          .damage-type-container {
            background-color: rgba(0, 0, 0, 0.1);
          }
  
          .damage-item {
            background-color: rgba(0, 0, 0, 0.1);
          }
  
          .damage-item:hover {
            background-color: rgba(0, 0, 0, 0.1);
          }
          .type-title{
            background-color: rgba(0, 0, 0, 0.1);
          }
        `,
        }),
        l.jsxs('div', {
          className: 'sorting-row row',
          style: { colorBackground: 'transparent' },
          children: [
            l.jsx('div', {
              className: 'col-md-3',
              style: { colorBackground: 'transparent' },
              children: l.jsx(ES, {
                setSelectedType: s,
                setColorBackground: r,
                setPokemonList: t,
                selectedColor: i,
                setSelectedColor: a,
              }),
            }),
            l.jsx('div', {
              className: 'col-md-3',
              style: { colorBackground: 'transparent' },
              children: l.jsx(NS, {
                setSelectedColor: a,
                setColorBackground: r,
                setPokemonList: t,
                selectedType: o,
                setSelectedType: s,
                setDamageRelationsData: d,
              }),
            }),
            l.jsx('div', {
              className: 'col-md-3',
              style: { colorBackground: 'transparent' },
              children: l.jsx(TS, {
                setSelectedAbility: u,
                selectedAbility: c,
                setSelectedColor: a,
                setColorBackground: r,
                setPokemonList: t,
                selectedType: o,
                setSelectedType: s,
                setDamageRelationsData: d,
              }),
            }),
            l.jsx('div', {
              className: 'col-md-3',
              children: l.jsx(bS, {
                setSelectedColor: a,
                setColorBackground: r,
                setSelectedType: r,
                setDamageRelationsData: d,
                selectedAbility: c,
                setSelectedAbility: u,
                setSelectedHabitat: j,
                selectedHabitat: h,
              }),
            }),
          ],
        }),
        f && o && l.jsx(Xm, { damage_relations: f }),
        l.jsx(Qm, {
          list: e,
          setSelectedType: s,
          setColorBackground: r,
          colorCardBackground: n,
          colorBackground: n,
          selectedAbility: c,
        }),
      ],
    })
  )
}
function PS() {
  const [e, t] = p.useState({ name: '', email: '', message: '' }),
    [n, r] = p.useState(!1),
    o = (i) => {
      const { name: a, value: c } = i.target
      t({ ...e, [a]: c })
    },
    s = (i) => {
      if (
        (i.preventDefault(),
        e.name.trim() === '' ||
          !e.email.includes('@') ||
          e.message.trim() === '')
      ) {
        alert('Please fill out all fields correctly.')
        return
      }
      setTimeout(() => {
        r(!0)
      }, 1e3)
    }
  return l.jsxs('div', {
    className: 'container mt-5',
    children: [
      l.jsx('h1', { children: 'Contact Me' }),
      n
        ? l.jsx('div', {
            className: 'alert alert-success',
            children:
              'Thank you for your message! I will get back to you soon.',
          })
        : l.jsxs('form', {
            onSubmit: s,
            children: [
              l.jsxs('div', {
                className: 'mb-3',
                children: [
                  l.jsx('label', {
                    htmlFor: 'name',
                    className: 'form-label',
                    children: 'Your Name',
                  }),
                  l.jsx('input', {
                    type: 'text',
                    className: 'form-control',
                    id: 'name',
                    name: 'name',
                    value: e.name,
                    onChange: o,
                    placeholder: 'John Doe',
                    required: !0,
                  }),
                ],
              }),
              l.jsxs('div', {
                className: 'mb-3',
                children: [
                  l.jsx('label', {
                    htmlFor: 'email',
                    className: 'form-label',
                    children: 'Your Email',
                  }),
                  l.jsx('input', {
                    type: 'email',
                    className: 'form-control',
                    id: 'email',
                    name: 'email',
                    value: e.email,
                    onChange: o,
                    placeholder: 'johndoe@example.com',
                    required: !0,
                  }),
                ],
              }),
              l.jsxs('div', {
                className: 'mb-3',
                children: [
                  l.jsx('label', {
                    htmlFor: 'message',
                    className: 'form-label',
                    children: 'Your Message',
                  }),
                  l.jsx('textarea', {
                    className: 'form-control',
                    id: 'message',
                    name: 'message',
                    value: e.message,
                    onChange: o,
                    rows: '4',
                    placeholder: "I'd love to hear from you!",
                    required: !0,
                  }),
                ],
              }),
              l.jsx('button', {
                type: 'submit',
                className: 'btn btn-primary',
                children: 'Send Message',
              }),
            ],
          }),
    ],
  })
}
const RS = ({ encounterData: e }) => {
    const [t, n] = p.useState([]),
      r = (o) => {
        t.includes(o) ? n(t.filter((s) => s !== o)) : n([...t, o])
      }
    return (
      e.length > 0 &&
      l.jsxs('div', {
        className: 'container',
        children: [
          l.jsx('h2', { children: 'Location Area Encounters' }),
          l.jsx('div', {
            className: 'scrollbox',
            style: { maxHeight: '400px', overflow: 'auto' },
            children: e.map((o, s) => {
              var i
              return l.jsxs(
                'div',
                {
                  className: 'card mb-3',
                  children: [
                    l.jsx('div', {
                      className: 'card-header',
                      children: l.jsxs('button', {
                        className: 'btn btn-link',
                        onClick: () => r(s),
                        children: [
                          'Location: ',
                          o.location_area.name || 'Unknown',
                        ],
                      }),
                    }),
                    t.includes(s) &&
                      l.jsx('div', {
                        className: 'card-body',
                        children: l.jsxs('table', {
                          className:
                            'table table-striped table-bordered table-hover',
                          children: [
                            l.jsx('thead', {
                              children: l.jsxs('tr', {
                                children: [
                                  l.jsx('th', { children: 'Version' }),
                                  l.jsx('th', { children: 'Method' }),
                                  l.jsx('th', { children: 'Level Range' }),
                                  l.jsx('th', { children: 'Chance' }),
                                ],
                              }),
                            }),
                            l.jsx('tbody', {
                              children:
                                (i = o.version_details) == null
                                  ? void 0
                                  : i.map((a, c) => {
                                      var u, f, d, h, j, v
                                      return l.jsxs(
                                        'tr',
                                        {
                                          children: [
                                            l.jsx('td', {
                                              children:
                                                ((u = a.version) == null
                                                  ? void 0
                                                  : u.name) || 'Unknown',
                                            }),
                                            l.jsx('td', {
                                              children:
                                                ((d =
                                                  (f =
                                                    a.encounter_details[0]) ==
                                                  null
                                                    ? void 0
                                                    : f.method) == null
                                                  ? void 0
                                                  : d.name) || 'Unknown',
                                            }),
                                            l.jsx('td', {
                                              children: `${((h = a.encounter_details[0]) == null ? void 0 : h.min_level) || 'N/A'} - ${((j = a.encounter_details[0]) == null ? void 0 : j.max_level) || 'N/A'}`,
                                            }),
                                            l.jsx('td', {
                                              children:
                                                (v = a.encounter_details[0]) !=
                                                  null && v.chance
                                                  ? `${a.encounter_details[0].chance}%`
                                                  : 'N/A',
                                            }),
                                          ],
                                        },
                                        c
                                      )
                                    }),
                            }),
                          ],
                        }),
                      }),
                  ],
                },
                s
              )
            }),
          }),
        ],
      })
    )
  },
  OS = ({ show: e, onHide: t, data: n }) => {
    const { name: r, url: o, version_group_details: s } = n.move,
      [i, a] = p.useState(null),
      [c, u] = p.useState(0),
      [f, d] = p.useState(0)
    p.useEffect(() => {
      e &&
        (async () => {
          try {
            const x = await A.get(o)
            a(x.data), u(0), d(0)
          } catch (x) {
            console.error('Error fetching move info:', x)
          }
        })()
    }, [e, o])
    const h = () => {
        i && c < i.flavor_text_entries.length - 1 && u(c + 1)
      },
      j = () => {
        i && c > 0 && u(c - 1)
      }
    return l.jsxs(Er, {
      show: e,
      onHide: t,
      className: 'pokemon-modal',
      children: [
        l.jsx(Er.Header, {
          closeButton: !0,
          children: l.jsx(Er.Title, {
            className: 'pokemon-title',
            children: r,
          }),
        }),
        l.jsx(Er.Body, {
          children:
            i &&
            l.jsxs('div', {
              className: 'scrollbox',
              style: { maxHeight: '400px', overflowY: 'auto' },
              children: [
                l.jsxs('h3', {
                  className: 'pokemon-description',
                  children: [
                    l.jsx('div', {
                      className: 'arrow left-arrow',
                      onClick: j,
                      children: '← ',
                    }),
                    'Description',
                    l.jsx('div', {
                      className: 'arrow right-arrow',
                      onClick: h,
                      children: '→ ',
                    }),
                  ],
                }),
                l.jsx('p', {
                  children: l.jsx('small', {
                    children: 'Toggle arrow buttons to see more descriptions',
                  }),
                }),
                l.jsx('div', {
                  className: 'pokemon-text',
                  children: l.jsx('p', {
                    className: 'flavor-text',
                    children: i.flavor_text_entries[c].flavor_text,
                  }),
                }),
                l.jsx('h3', {
                  className: 'pokemon-effect',
                  children: 'Effect',
                }),
                l.jsx('div', {
                  className: 'pokemon-text',
                  children: l.jsx('p', {
                    className: 'effect-text',
                    children: i.effect_entries[0].effect,
                  }),
                }),
                l.jsx('h3', {
                  className: 'pokemon-attributes',
                  children: 'Move Attributes',
                }),
                l.jsx('div', {
                  className: 'pokemon-table-container',
                  children: l.jsx('table', {
                    className: 'pokemon-table',
                    style: { width: '100%' },
                    children: l.jsxs('tbody', {
                      children: [
                        i.power &&
                          l.jsxs('tr', {
                            children: [
                              l.jsx('td', { children: 'Power:' }),
                              l.jsx('td', { children: i.power }),
                            ],
                          }),
                        i.accuracy &&
                          l.jsxs('tr', {
                            children: [
                              l.jsx('td', { children: 'Accuracy:' }),
                              l.jsx('td', { children: i.accuracy }),
                            ],
                          }),
                        i.pp &&
                          l.jsxs('tr', {
                            children: [
                              l.jsx('td', { children: 'PP (Power Points):' }),
                              l.jsx('td', { children: i.pp }),
                            ],
                          }),
                        i.effect_chance &&
                          l.jsxs('tr', {
                            children: [
                              l.jsx('td', { children: 'Effect Chance:' }),
                              l.jsx('td', { children: i.effect_chance }),
                            ],
                          }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
        }),
        l.jsx(Er.Footer, {
          children: l.jsx(uc, {
            variant: 'secondary',
            onClick: t,
            className: 'pokemon-button',
            children: 'Close',
          }),
        }),
      ],
    })
  },
  LS = ({ moves: e }) => {
    const [t, n] = p.useState(null),
      r = (s) => {
        n(s)
      },
      o = () => {
        n(null)
      }
    return l.jsxs('div', {
      className: 'moves-container',
      children: [
        l.jsx('h2', { children: 'Moves' }),
        l.jsx('div', {
          className: 'scrollbox',
          style: { maxHeight: '500px', overflowY: 'auto' },
          children: l.jsx('table', {
            className: 'pokemon-details-table',
            children: l.jsx('tbody', {
              children: e.map((s, i) =>
                l.jsx(
                  'tr',
                  {
                    children: l.jsx('td', {
                      children: l.jsx('div', {
                        className: 'move-link',
                        onClick: () => {
                          r(s)
                        },
                        children: s.move.name || 'Unknown',
                      }),
                    }),
                  },
                  i
                )
              ),
            }),
          }),
        }),
        t && l.jsx(OS, { show: !0, onHide: o, data: t }),
      ],
    })
  },
  DS = ({ pokemonData: e }) =>
    l.jsxs('div', {
      className: 'pokemon-stats',
      children: [
        l.jsx('h2', { children: 'Stats' }),
        l.jsxs('table', {
          className: 'pokemon-details-table',
          children: [
            l.jsx('thead', {
              children: l.jsxs('tr', {
                children: [
                  l.jsx('th', { children: 'Stat' }),
                  l.jsx('th', { children: 'Value' }),
                ],
              }),
            }),
            l.jsxs('tbody', {
              children: [
                l.jsxs('tr', {
                  children: [
                    l.jsx('td', { children: 'Base Experience' }),
                    l.jsx('td', { children: e.base_experience }),
                  ],
                }),
                l.jsxs('tr', {
                  children: [
                    l.jsx('td', { children: 'Height (meters)' }),
                    l.jsx('td', { children: e.height / 10 }),
                  ],
                }),
                l.jsxs('tr', {
                  children: [
                    l.jsx('td', { children: 'Weight (kilograms)' }),
                    l.jsx('td', { children: e.weight / 10 }),
                  ],
                }),
                e.stats.map((t, n) =>
                  l.jsxs(
                    'tr',
                    {
                      children: [
                        l.jsx('td', {
                          className: 'grow-on-hover',
                          children: t.stat.name,
                        }),
                        l.jsx('td', { children: t.base_stat }),
                      ],
                    },
                    n
                  )
                ),
              ],
            }),
          ],
        }),
      ],
    })
function MS({ speciesData: e }) {
  return l.jsxs('div', {
    className: 'container',
    children: [
      e.is_legendary && l.jsx('p', { children: 'This Pokemon is legendary' }),
      e.is_mythical && l.jsx('p', { children: 'This Pokemon is mythical' }),
      e.is_baby && l.jsx('p', { children: 'This Pokemon is a baby' }),
      l.jsx('h3', { children: 'SPECIES DATA' }),
      l.jsx('table', {
        className: 'pokemon-details-table',
        children: l.jsxs('tbody', {
          children: [
            e.habitat &&
              l.jsxs('tr', {
                children: [
                  l.jsx('td', { children: 'Habitat' }),
                  l.jsx('td', { children: e.habitat.name }),
                ],
              }),
            e.shape &&
              l.jsxs('tr', {
                children: [
                  l.jsx('td', { children: 'Shape' }),
                  l.jsx('td', { children: e.shape.name }),
                ],
              }),
            e.base_happiness &&
              l.jsxs('tr', {
                children: [
                  l.jsx('td', { children: 'Base Happiness' }),
                  l.jsx('td', { children: e.base_happiness }),
                ],
              }),
            e.capture_rate &&
              l.jsxs('tr', {
                children: [
                  l.jsx('td', { children: 'Capture Rate' }),
                  l.jsx('td', { children: e.capture_rate }),
                ],
              }),
            e.growth_rate &&
              l.jsxs('tr', {
                children: [
                  l.jsx('td', { children: 'Growth Rate' }),
                  l.jsx('td', { children: e.growth_rate.name }),
                ],
              }),
          ],
        }),
      }),
    ],
  })
}
function $S({ speciesData: e }) {
  return (
    console.log(e.flavor_text_entries[0].language.name == 'en'),
    l.jsx('div', {
      className: 'species-description',
      children:
        e.flavor_text_entries &&
        e.flavor_text_entries[0] &&
        l.jsxs('p', {
          children: [
            e.flavor_text_entries[0].language.name == 'en'
              ? e.flavor_text_entries[0].flavor_text
              : e.flavor_text_entries[1].flavor_text,
            ' ',
          ],
        }),
    })
  )
}
const FS = () => {
  const { id: e } = Ap(),
    [t, n] = p.useState(null),
    [r, o] = p.useState(null),
    [s, i] = p.useState(null),
    [a, c] = p.useState(null),
    u = { border: '1px solid #ddd', borderRadius: '10px', padding: '10px' }
  p.useEffect(() => {
    ;(async () => {
      try {
        const h = await A.get(`https://pokeapi.co/api/v2/pokemon/${e}`)
        n(h.data)
        const j = await A.get(h.data.location_area_encounters)
        i(j.data)
      } catch (h) {
        console.error('Error fetching Pokemon data:', h)
      }
    })()
  }, [e]),
    p.useEffect(() => {
      ;(async () => {
        try {
          if (t) {
            const h = await A.get(t.species.url)
            o(h.data.color.name)
            const j = await A.get(
              `https://pokeapi.co/api/v2/pokemon-species/${t.id}`
            )
            c(j.data)
          }
        } catch (h) {
          console.error('Error fetching Pokemon color/species data:', h)
        }
      })()
    }, [t])
  const f = () =>
    l.jsxs('div', {
      className: 'pokemon-details-page',
      children: [
        l.jsx('div', {
          className: 'container',
          children: l.jsxs('div', {
            className: 'row',
            children: [
              l.jsx('div', {
                className: 'col-md-3',
                children: l.jsx('img', {
                  style: { height: '300px' },
                  src: t.sprites.other['official-artwork'].front_default,
                  alt: `${t.name} Official Artwork`,
                }),
              }),
              l.jsx('div', {
                style: { padding: '100px' },
                className: 'col-md-9 d-flex flex-column justify-content-end',
                children: l.jsx('h2', {
                  style: { fontSize: '70px' },
                  children: t.name.toUpperCase(),
                }),
              }),
            ],
          }),
        }),
        a && l.jsx($S, { speciesData: a }),
        l.jsx('div', {
          className: 'container',
          children: l.jsxs('div', {
            className: 'row',
            children: [
              l.jsxs('div', {
                className: 'col-md-9',
                children: [
                  l.jsxs('table', {
                    className: 'pokemon-details-table',
                    children: [
                      l.jsx('thead', {
                        children: l.jsxs('tr', {
                          children: [
                            l.jsx('th', { colSpan: '2', children: 'TYPES' }),
                            l.jsx('th', { children: 'COLOR' }),
                          ],
                        }),
                      }),
                      l.jsx('tbody', {
                        children: l.jsxs('tr', {
                          children: [
                            l.jsx('td', {
                              colSpan: '2',
                              children: t.types.map((d, h) =>
                                l.jsxs(
                                  Q.Fragment,
                                  {
                                    children: [
                                      l.jsx(Ue, {
                                        to: `/pokedex/type/${d.type.name}`,
                                        children: d.type.name,
                                      }),
                                      h < t.types.length - 1 && ', ',
                                    ],
                                  },
                                  d.type.name
                                )
                              ),
                            }),
                            l.jsx('td', { children: r }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  l.jsxs('table', {
                    className: 'pokemon-details-table',
                    children: [
                      l.jsx('thead', {
                        children: l.jsx('tr', {
                          children: l.jsx('th', {
                            colSpan: '2',
                            children: 'FORMS:',
                          }),
                        }),
                      }),
                      l.jsx('tbody', {
                        children: t.forms.map((d, h) =>
                          l.jsx(
                            'tr',
                            { children: l.jsx('td', { children: d.name }) },
                            h
                          )
                        ),
                      }),
                    ],
                  }),
                  l.jsxs('table', {
                    className: 'pokemon-details-table',
                    style: u,
                    children: [
                      l.jsx('thead', {
                        children: l.jsx('tr', {
                          children: l.jsx('th', {
                            colSpan: '2',
                            children: 'ABILITIES:',
                          }),
                        }),
                      }),
                      l.jsx('tbody', {
                        children: t.abilities.map((d, h) =>
                          l.jsx(
                            'tr',
                            {
                              children: l.jsx('td', {
                                children: d.ability.name,
                              }),
                            },
                            h
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              l.jsx('div', {
                className: 'col-md-3',
                children: l.jsx('div', {
                  className: 'sprite-frame',
                  style: { height: '340px' },
                  children: l.jsx(Jm, { id: e, hovered: !0 }),
                }),
              }),
            ],
          }),
        }),
        a && l.jsx(MS, { speciesData: a }),
        l.jsxs('div', {
          className: 'row',
          children: [
            l.jsx('div', {
              className: 'col',
              children: l.jsx(LS, { moves: t.moves }),
            }),
            l.jsx('div', {
              className: 'col',
              children: l.jsx(DS, { pokemonData: t }),
            }),
          ],
        }),
        s
          ? l.jsx(RS, { encounterData: s })
          : l.jsx('p', { children: 'Loading location area encounters...' }),
      ],
    })
  return l.jsx(Cc, {
    colorBackground: r,
    children: t ? f() : l.jsx('p', { children: 'Loading...' }),
  })
}
function IS() {
  const { id: e } = Ap(),
    [t, n] = p.useState(null)
  p.useState([]), p.useState(!1), p.useState(null), p.useState(null)
  const r = {
    normal: '#A8A878',
    fighting: '#C03028',
    flying: '#A890F0',
    poison: '#A040A0',
    ground: '#E0C068',
    rock: '#B8A038',
    bug: '#A8B820',
    ghost: '#705898',
    steel: '#B8B8D0',
    fire: '#F08030',
    water: '#6890F0',
    grass: '#78C850',
    electric: '#F8D030',
    psychic: '#F85888',
    ice: '#98D8D8',
    dragon: '#7038F8',
    dark: '#705848',
    fairy: '#EE99AC',
  }
  if (
    (p.useEffect(() => {
      A.get(`https://pokeapi.co/api/v2/type/${e}`)
        .then((i) => {
          n(i.data)
        })
        .catch((i) => {
          console.error('Error fetching Pokémon list info:', i)
        })
    }, [e]),
    !t)
  )
    return l.jsx('div', { children: 'Loading...' })
  let o = t.pokemon.map((i) => i.pokemon),
    s = r[e]
  return l.jsxs(Cc, {
    colorBackground: s,
    children: [
      l.jsx('style', {
        children: `
          .damage-relations-container {
            background-color: ${on(s, 40)};
            padding: 20px;
            border: 2px solid #000;
            border-radius: 10px;
          }
  
          .damage-type {
            margin: 20px 0;
          }
  
          .damage-heading-container {
            background-color: ${on(s, 80)}; /* Fun background color */
            color: #fff; /* Text color */
            padding: 10px;
            border-radius: 5px;
            margin-bottom: 10px;
            border: 1px solid #000;
          }
  
          .damage-type-container {
            background-color: ${on(s, 100)}; /* Fun background color */
            color: #fff; /* Text color */
            padding: 5px;
            border-radius: 5px;
            margin-bottom: 5px;
            border: 1px solid #000;
          }
  
          .damage-list {
            list-style-type: none;
            padding: 0;
          }
  
          .damage-item {
            background-color: ${on(s, 130)};
            color: #fff;
            padding: 5px 10px;
            margin: 5px;
            border-radius: 5px;
            display: inline-block;
            border: 1px solid #000;
          }
  
          .damage-item:hover {
            background-color: ${on(s, 160)};
            /* color: #000; */
            padding: 5px 10px;
            margin: 5px;
            border-radius: 5px;
            display: inline-block;
            border: 2px solid #000;
          }
          .type-title{
            border: 2px solid #000;
            background-color: ${on(s, 80)};
            color: #fff;
            margin: 10px auto;
            width: 50%;
            padding: 10px;
            align-items: center;
            justify-items: center;
            justify-content: center; /* Center horizontally */
            border-radius: 15px;
            

          }
        `,
      }),
      l.jsx('div', {
        className: 'type-title',
        children: l.jsx('div', {
          style: {
            paddingTop: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          },
          children: l.jsxs('h1', {
            children: ['Type: ', t.name.toUpperCase()],
          }),
        }),
      }),
      l.jsx(Xm, { damage_relations: t.damage_relations }),
      l.jsx(Qm, { list: o, colorCardBackground: on(s, 80) }),
    ],
  })
}
class AS extends p.Component {
  constructor(t) {
    super(t), (this.state = { daysSinceQuit: this.calculateDaysSinceQuit() })
  }
  calculateDaysSinceQuit() {
    const r = new Date() - new Date('2023-10-26T00:00:00')
    return Math.floor(r / (1e3 * 60 * 60 * 24))
  }
  render() {
    const { daysSinceQuit: t } = this.state,
      n = [30, 60, 90, 365],
      r = {
        30: 'Congratulations on reaching 30 days smoke-free!',
        60: "You've made it to 60 days without smoking - keep it up!",
        90: '90 days without smoking is a significant achievement. Stay strong!',
        365: "A whole year smoke-free! You're on the path to better health.",
      }
    return l.jsxs('div', {
      className: 'days-since-quit container',
      style: { marginTop: '50px' },
      children: [
        l.jsx('h1', {
          className: 'title',
          children: 'Days Since You Quit Smoking:',
        }),
        l.jsxs('div', {
          className: 'countdown',
          children: [
            l.jsxs('p', { className: 'count', children: [t, ' days'] }),
            n.map((o) =>
              l.jsx(
                'p',
                { className: 'milestone', children: t >= o ? r[o] : null },
                o
              )
            ),
          ],
        }),
      ],
    })
  }
}
class BS extends p.Component {
  constructor() {
    super()
    bn(this, 'handleDropdownChange', (n) => {
      const { name: r, value: o } = n.target
      this.setState({ [r]: o }, () => {
        this.fetchExerciseData()
      })
    })
    bn(this, 'handleExerciseNameChange', (n) => {
      const { name: r, value: o } = n.target
      this.setState({ [r]: o }, () => {
        this.fetchExerciseData()
      })
    })
    this.state = {
      exerciseData: [],
      exerciseTypes: [],
      muscleGroups: [],
      difficultyLevels: [],
      selectedType: '',
      selectedMuscle: '',
      selectedDifficulty: '',
      exerciseName: '',
    }
  }
  componentDidMount() {
    this.fetchExerciseData(),
      this.fetchExerciseTypes(),
      this.fetchMuscleGroups(),
      this.fetchDifficultyLevels()
  }
  fetchExerciseData() {
    const n = 'cP1TKlvcDX/LLMcD5hHjKw==E5SrJvJtMhSJ8sRm',
      {
        selectedType: r,
        selectedMuscle: o,
        selectedDifficulty: s,
        exerciseName: i,
      } = this.state,
      a = `https://api.api-ninjas.com/v1/exercises?muscle=${o}&type=${r}&difficulty=${s}&name=${i}`
    A.get(a, { headers: { 'X-Api-Key': n } })
      .then((c) => {
        this.setState({ exerciseData: c.data })
      })
      .catch((c) => {
        console.error('Error:', c)
      })
  }
  fetchExerciseTypes() {
    const n = [
      'cardio',
      'olympic_weightlifting',
      'plyometrics',
      'powerlifting',
      'strength',
      'stretching',
      'strongman',
    ]
    this.setState({ exerciseTypes: n })
  }
  fetchMuscleGroups() {
    const n = [
      'abdominals',
      'abductors',
      'adductors',
      'biceps',
      'calves',
      'chest',
      'forearms',
      'glutes',
      'hamstrings',
      'lats',
      'lower_back',
      'middle_back',
      'neck',
      'quadriceps',
      'traps',
      'triceps',
    ]
    this.setState({ muscleGroups: n })
  }
  fetchDifficultyLevels() {
    const n = ['beginner', 'intermediate', 'expert']
    this.setState({ difficultyLevels: n })
  }
  render() {
    const {
      exerciseData: n,
      exerciseTypes: r,
      muscleGroups: o,
      difficultyLevels: s,
      exerciseName: i,
    } = this.state
    return l.jsxs('div', {
      className: 'container',
      style: { marginTop: '100px' },
      children: [
        l.jsx('h1', {
          className: 'mt-4 mb-4',
          children: 'Exercises Encyclopedia',
        }),
        l.jsxs('div', {
          className: 'form-row mb-4',
          children: [
            l.jsx('div', {
              className: 'container',
              children:
                'Search for exercises by name, or filter by muscle group, difficulty level, or type of exercise.',
            }),
            l.jsx('div', {
              className: 'col',
              children: l.jsx('input', {
                type: 'text',
                name: 'exerciseName',
                value: i,
                className: 'form-control',
                placeholder: 'Search by Exercise Name (Optional)',
                onChange: this.handleExerciseNameChange,
              }),
            }),
            l.jsx('div', {
              className: 'col',
              children: l.jsxs('select', {
                name: 'selectedType',
                className: 'form-control',
                onChange: this.handleDropdownChange,
                children: [
                  l.jsx('option', {
                    value: '',
                    children: 'Select Type (Optional)',
                  }),
                  r.map((a, c) =>
                    l.jsx('option', { value: a, children: a }, c)
                  ),
                ],
              }),
            }),
            l.jsx('div', {
              className: 'col',
              children: l.jsxs('select', {
                name: 'selectedMuscle',
                className: 'form-control',
                onChange: this.handleDropdownChange,
                children: [
                  l.jsx('option', {
                    value: '',
                    children: 'Select Muscle (Optional)',
                  }),
                  o.map((a, c) =>
                    l.jsx('option', { value: a, children: a }, c)
                  ),
                ],
              }),
            }),
            l.jsx('div', {
              className: 'col',
              children: l.jsxs('select', {
                name: 'selectedDifficulty',
                className: 'form-control',
                onChange: this.handleDropdownChange,
                children: [
                  l.jsx('option', {
                    value: '',
                    children: 'Select Difficulty (Optional)',
                  }),
                  s.map((a, c) =>
                    l.jsx('option', { value: a, children: a }, c)
                  ),
                ],
              }),
            }),
          ],
        }),
        l.jsxs('table', {
          className: 'table table-striped',
          children: [
            l.jsx('thead', {
              children: l.jsxs('tr', {
                children: [
                  l.jsx('th', { children: 'Name' }),
                  l.jsx('th', { children: 'Type' }),
                  l.jsx('th', { children: 'Equipment' }),
                  l.jsx('th', { children: 'Difficulty' }),
                  l.jsx('th', { children: 'Instructions' }),
                ],
              }),
            }),
            l.jsx('tbody', {
              children: n.map((a, c) =>
                l.jsxs(
                  'tr',
                  {
                    children: [
                      l.jsx('td', { children: a.name }),
                      l.jsx('td', { children: a.type }),
                      l.jsx('td', { children: a.equipment }),
                      l.jsx('td', { children: a.difficulty }),
                      l.jsx('td', { children: a.instructions }),
                    ],
                  },
                  c
                )
              ),
            }),
          ],
        }),
      ],
    })
  }
}
function zS() {
  return l.jsxs(bx, {
    children: [
      l.jsxs(Ho, {
        bg: 'dark',
        expand: 'lg',
        className: 'mb-0 pb-0',
        children: [
          l.jsx(Ho.Brand, { href: '/', children: 'BENMATH.IO' }),
          l.jsx(Ho.Toggle, { 'aria-controls': 'basic-navbar-nav' }),
          l.jsx(Ho.Collapse, {
            id: 'basic-navbar-nav',
            children: l.jsxs(I, {
              className: 'ml-auto',
              children: [
                l.jsx(I.Link, { as: Ue, to: '/about', children: 'About' }),
                l.jsx(I.Link, { as: Ue, to: '/blog', children: 'Blog' }),
                l.jsx(I.Link, {
                  as: Ue,
                  to: '/portfolio',
                  children: 'Portfolio',
                }),
                l.jsx(I.Link, { as: Ue, to: '/contact', children: 'Contact' }),
                l.jsx(I.Link, {
                  href: 'https://github.com/yourusername',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: 'rotate-icon',
                  children: l.jsx(h1, { className: 'rotate-icon', size: 20 }),
                }),
                l.jsx(I.Link, {
                  href: 'https://www.linkedin.com/in/yourprofile',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: 'rotate-icon',
                  children: l.jsx(m1, { className: 'rotate-icon', size: 20 }),
                }),
                l.jsx(I.Link, {
                  href: '/your-resume.pdf',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: 'rotate-icon',
                  children: l.jsx(g1, { className: 'rotate-icon', size: 20 }),
                }),
              ],
            }),
          }),
        ],
      }),
      l.jsxs(Sx, {
        children: [
          l.jsx(ue, { path: '/about', element: l.jsx(Ij, {}) }),
          l.jsx(ue, { path: '/blog', element: l.jsx(s1, {}) }),
          l.jsx(ue, { path: '/portfolio', element: l.jsx(Aj, {}) }),
          l.jsx(ue, { path: '/contact', element: l.jsx(PS, {}) }),
          l.jsx(ue, { path: '/json-formatter', element: l.jsx(dS, {}) }),
          l.jsx(ue, { path: '/tik-tac-toe', element: l.jsx(fS, {}) }),
          l.jsx(ue, { path: '/hangman', element: l.jsx(pS, {}) }),
          l.jsx(ue, { path: '/colors', element: l.jsx(hS, {}) }),
          l.jsx(ue, { path: '/memory', element: l.jsx(mS, {}) }),
          l.jsx(ue, { path: '/translation', element: l.jsx(yS, {}) }),
          l.jsx(ue, { path: '/numbers', element: l.jsx(gS, {}) }),
          l.jsx(ue, { path: '/pokedex', element: l.jsx(_S, {}) }),
          l.jsx(ue, { path: '/pokedex/type/:id', element: l.jsx(IS, {}) }),
          l.jsx(ue, { path: '/pokedex/pokemon/:id', element: l.jsx(FS, {}) }),
          l.jsx(ue, { path: '/dictation', element: l.jsx(xS, {}) }),
          l.jsx(ue, { path: '/days-since-quit', element: l.jsx(AS, {}) }),
          l.jsx(ue, { path: '/workoutPlanner', element: l.jsx(BS, {}) }),
          l.jsx(ue, { path: '/apininjas', element: l.jsx(uS, {}) }),
          l.jsx(ue, { path: '/', element: l.jsx(l1, {}) }),
        ],
      }),
    ],
  })
}
ql.createRoot(document.getElementById('root')).render(
  l.jsx(Q.StrictMode, { children: l.jsx(zS, {}) })
)
