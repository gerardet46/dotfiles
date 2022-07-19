// ==UserScript==
// @name          Dark Reader (Unofficial)
// @icon          https://darkreader.org/images/darkreader-icon-256x256.png
// @namespace     DarkReader
// @description	  Inverts the brightness of pages to reduce eye strain
// @version       4.7.15
// @author        https://github.com/darkreader/darkreader#contributors
// @homepageURL   https://darkreader.org/ | https://github.com/darkreader/darkreader
// @run-at        document-end
// @grant         none
// @include       http*
// @exclude       https://discord.com/*
// @exclude       https://app.element.io/*
// @exclude       https://*duckduckgo.com/*
// @exclude       https://*monkeytype.com/*
// @exclude       http://127.0.0.1:*
// @noframes
// ==/UserScript==

/**
 * Minified by jsDelivr using Terser v5.10.0.
 * Original file: /npm/darkreader@4.9.46/darkreader.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).DarkReader = {})
}(this, (function(e) {
    "use strict";
    /*! *****************************************************************************
        Copyright (c) Microsoft Corporation.

        Permission to use, copy, modify, and/or distribute this software for any
        purpose with or without fee is hereby granted.

        THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
        REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
        AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
        INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
        LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
        OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
        PERFORMANCE OF THIS SOFTWARE.
        ***************************************************************************** */
    var t = function() {
        return t = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }, t.apply(this, arguments)
    };

    function r(e, t, r, n) {
        return new(r || (r = Promise))((function(o, a) {
            function i(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function c(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function u(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                    e(t)
                }))).then(i, c)
            }
            u((n = n.apply(e, t || [])).next())
        }))
    }

    function n(e, t) {
        var r, n, o, a, i = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: c(0),
            throw: c(1),
            return: c(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function c(a) {
            return function(c) {
                return function(a) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                        switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                            case 0:
                            case 1:
                                o = a;
                                break;
                            case 4:
                                return i.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, n = a[1], a = [0];
                                continue;
                            case 7:
                                a = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                    i.label = a[1];
                                    break
                                }
                                if (6 === a[0] && i.label < o[1]) {
                                    i.label = o[1], o = a;
                                    break
                                }
                                if (o && i.label < o[2]) {
                                    i.label = o[2], i.ops.push(a);
                                    break
                                }
                                o[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        a = t.call(e, i)
                    } catch (e) {
                        a = [6, e], n = 0
                    } finally {
                        r = o = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, c])
            }
        }
    }

    function o(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            r = t && e[t],
            n = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && n >= e.length && (e = void 0), {
                    value: e && e[n++],
                    done: !e
                }
            }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function a(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, o, a = r.call(e),
            i = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(n = a.next()).done;) i.push(n.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (r = a.return) && r.call(a)
            } finally {
                if (o) throw o.error
            }
        }
        return i
    }

    function i(e, t, r) {
        if (r || 2 === arguments.length)
            for (var n, o = 0, a = t.length; o < a; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
        return e.concat(n || Array.prototype.slice.call(t))
    }
    var c = "bg-fetch-response",
        u = "cs-fetch",
        s = "undefined" == typeof navigator ? "some useragent" : navigator.userAgent.toLowerCase(),
        l = "undefined" == typeof navigator ? "some platform" : navigator.platform.toLowerCase(),
        d = s.includes("chrome") || s.includes("chromium"),
        f = s.includes("thunderbird"),
        h = s.includes("firefox") || s.includes("librewolf") || f;
    s.includes("vivaldi"), s.includes("yabrowser"), s.includes("opr") || s.includes("opera"), s.includes("edg");
    var p = s.includes("safari") && !d,
        v = l.startsWith("win"),
        m = l.startsWith("mac");
    s.includes("mobile");
    var g, b = "function" == typeof ShadowRoot,
        y = "function" == typeof MediaQueryList && "function" == typeof MediaQueryList.prototype.addEventListener;
    (g = s.match(/chrom[e|ium]\/([^ ]+)/)) && g[1] && g[1];
    var k = function() {
        try {
            return document.querySelector(":defined"), !0
        } catch (e) {
            return !1
        }
    }();
    globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.getManifest && globalThis.chrome.runtime.getManifest().manifest_version;
    var w = function() {
        if ("undefined" == typeof document) return !1;
        var e = document.createElement("div");
        return e.setAttribute("style", "color-scheme: dark"), "dark" === e.style.colorScheme
    }();

    function S(e, t, o) {
        return r(this, void 0, void 0, (function() {
            var r;
            return n(this, (function(n) {
                switch (n.label) {
                    case 0:
                        return [4, fetch(e, {
                            cache: "force-cache",
                            credentials: "omit",
                            referrer: o
                        })];
                    case 1:
                        if (r = n.sent(), h && "text/css" === t && e.startsWith("moz-extension://") && e.endsWith(".css")) return [2, r];
                        if (t && !r.headers.get("Content-Type").startsWith(t)) throw new Error("Mime type mismatch when loading ".concat(e));
                        if (!r.ok) throw new Error("Unable to load ".concat(e, " ").concat(r.status, " ").concat(r.statusText));
                        return [2, r]
                }
            }))
        }))
    }

    function _(e, t) {
        return r(this, void 0, void 0, (function() {
            return n(this, (function(r) {
                switch (r.label) {
                    case 0:
                        return [4, S(e, t)];
                    case 1:
                        return [4, E(r.sent())];
                    case 2:
                        return [2, r.sent()]
                }
            }))
        }))
    }

    function E(e) {
        return r(this, void 0, void 0, (function() {
            var t;
            return n(this, (function(r) {
                switch (r.label) {
                    case 0:
                        return [4, e.blob()];
                    case 1:
                        return t = r.sent(), [4, new Promise((function(e) {
                            var r = new FileReader;
                            r.onloadend = function() {
                                return e(r.result)
                            }, r.readAsDataURL(t)
                        }))];
                    case 2:
                        return [2, r.sent()]
                }
            }))
        }))
    }
    var x = function(e) {
            return r(void 0, void 0, void 0, (function() {
                return n(this, (function(t) {
                    return [2, Promise.reject(new Error(["Embedded Dark Reader cannot access a cross-origin resource", e, "Overview your URLs and CORS policies or use", "`DarkReader.setFetchMethod(fetch: (url) => Promise<Response>))`.", "See if using `DarkReader.setFetchMethod(window.fetch)`", "before `DarkReader.enable()` works."].join(" ")))]
                }))
            }))
        },
        C = x;

    function V(e) {
        return r(this, void 0, void 0, (function() {
            return n(this, (function(t) {
                switch (t.label) {
                    case 0:
                        return [4, C(e)];
                    case 1:
                        return [2, t.sent()]
                }
            }))
        }))
    }
    window.chrome || (window.chrome = {}), chrome.runtime || (chrome.runtime = {});
    var R = new Set;

    function T() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return r(this, void 0, void 0, (function() {
            var t, r, o, a, i, s, l;
            return n(this, (function(n) {
                switch (n.label) {
                    case 0:
                        if (!e[0] || e[0].type !== u) return [3, 8];
                        t = e[0].id, n.label = 1;
                    case 1:
                        return n.trys.push([1, 7, , 8]), r = e[0].data, o = r.url, a = r.responseType, [4, V(o)];
                    case 2:
                        return i = n.sent(), "data-url" !== a ? [3, 4] : [4, E(i)];
                    case 3:
                        return s = n.sent(), [3, 6];
                    case 4:
                        return [4, i.text()];
                    case 5:
                        s = n.sent(), n.label = 6;
                    case 6:
                        return R.forEach((function(e) {
                            return e({
                                type: c,
                                data: s,
                                error: null,
                                id: t
                            })
                        })), [3, 8];
                    case 7:
                        return l = n.sent(), console.error(l), R.forEach((function(e) {
                            return e({
                                type: c,
                                data: null,
                                error: l,
                                id: t
                            })
                        })), [3, 8];
                    case 8:
                        return [2]
                }
            }))
        }))
    }

    function M(e) {
        R.add(e)
    }
    if ("function" == typeof chrome.runtime.sendMessage) {
        var L = chrome.runtime.sendMessage;
        chrome.runtime.sendMessage = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            T.apply(void 0, i([], a(e), !1)), L.apply(chrome.runtime, e)
        }
    } else chrome.runtime.sendMessage = T;
    if (chrome.runtime.onMessage || (chrome.runtime.onMessage = {}), "function" == typeof chrome.runtime.onMessage.addListener) {
        var A = chrome.runtime.onMessage.addListener;
        chrome.runtime.onMessage.addListener = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            M(e[0]), A.apply(chrome.runtime.onMessage, e)
        }
    } else chrome.runtime.onMessage.addListener = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return M(e[0])
    };
    var P = "dynamicTheme",
        O = {
            background: "#282a36",
            text: "#f8f8f2"
        },
        j = {
            background: "#44475a",
            text: "#f8f8f2"
        },
        D = {
            mode: 1,
            brightness: 100,
            contrast: 100,
            grayscale: 0,
            sepia: 0,
            useFont: !1,
            fontFamily: m ? "Helvetica Neue" : v ? "Segoe UI" : "Open Sans",
            textStroke: 0,
            engine: P,
            stylesheet: "",
            darkSchemeBackgroundColor: O.background,
            darkSchemeTextColor: O.text,
            lightSchemeBackgroundColor: j.background,
            lightSchemeTextColor: j.text,
            scrollbarColor: m ? "" : "auto",
            selectionColor: "auto",
            styleSystemControls: !w,
            lightColorScheme: "Default",
            darkColorScheme: "Default",
            immediateModify: !1
        };

    function F(e, t) {
        var r, n;
        if (function(e) {
                return null != e.length
            }(e))
            for (var a = 0, i = e.length; a < i; a++) t(e[a]);
        else try {
            for (var c = o(e), u = c.next(); !u.done; u = c.next()) {
                t(u.value)
            }
        } catch (e) {
            r = {
                error: e
            }
        } finally {
            try {
                u && !u.done && (n = c.return) && n.call(c)
            } finally {
                if (r) throw r.error
            }
        }
    }

    function N(e, t) {
        F(t, (function(t) {
            return e.push(t)
        }))
    }

    function q() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
    }

    function B() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
    }

    function I(e) {
        var t, r = !1,
            n = null;
        return Object.assign((function() {
            for (var o = [], c = 0; c < arguments.length; c++) o[c] = arguments[c];
            t = o, n ? r = !0 : (e.apply(void 0, i([], a(t), !1)), n = requestAnimationFrame((function() {
                n = null, r && (e.apply(void 0, i([], a(t), !1)), r = !1)
            })))
        }), {
            cancel: function() {
                cancelAnimationFrame(n), r = !1, n = null
            }
        })
    }

    function W(e) {
        var t = 0;
        return e.seconds && (t += 1e3 * e.seconds), e.minutes && (t += 60 * e.minutes * 1e3), e.hours && (t += 60 * e.hours * 60 * 1e3), e.days && (t += 24 * e.days * 60 * 60 * 1e3), t
    }

    function U(e) {
        e && e.parentNode && e.parentNode.removeChild(e)
    }

    function $(e, t, r) {
        void 0 === r && (r = Function.prototype);
        var n = W({
                seconds: 2
            }),
            o = W({
                seconds: 10
            }),
            a = e.previousSibling,
            i = e.parentNode;
        if (!i) throw new Error("Unable to watch for node position: parent element not found");
        if ("prev-sibling" === t && !a) throw new Error("Unable to watch for node position: there is no previous sibling");
        var c = 0,
            u = null,
            s = null,
            l = I((function() {
                if (!s) {
                    c++;
                    var f = Date.now();
                    if (null == u) u = f;
                    else if (c >= 10) {
                        if (f - u < o) return B("Node position watcher paused: retry in ".concat(n, "ms"), e, a), void(s = setTimeout((function() {
                            u = null, c = 0, s = null, l()
                        }), n));
                        u = f, c = 1
                    }
                    if ("parent" === t && a && a.parentNode !== i) return B("Unable to restore node position: sibling parent changed", e, a, i), void h();
                    if ("prev-sibling" === t) {
                        if (null == a.parentNode) return B("Unable to restore node position: sibling was removed", e, a, i), void h();
                        a.parentNode !== i && (B("Style was moved to another parent", e, a, i), p(a.parentNode))
                    }
                    B("Restoring node position", e, a, i), i.insertBefore(e, a ? a.nextSibling : i.firstChild), d.takeRecords(), r && r()
                }
            })),
            d = new MutationObserver((function() {
                ("parent" === t && e.parentNode !== i || "prev-sibling" === t && e.previousSibling !== a) && l()
            })),
            f = function() {
                d.observe(i, {
                    childList: !0
                })
            },
            h = function() {
                clearTimeout(s), d.disconnect(), l.cancel()
            },
            p = function(e) {
                i = e, h(), f()
            };
        return f(), {
            run: f,
            stop: h,
            skip: function() {
                d.takeRecords()
            }
        }
    }

    function z(e, t) {
        if (null != e)
            for (var r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                    acceptNode: function(e) {
                        return null == e.shadowRoot ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
                    }
                }), n = e.shadowRoot ? r.currentNode : r.nextNode(); null != n; n = r.nextNode()) n.classList.contains("surfingkeys_hints_host") || (t(n), z(n.shadowRoot, t))
    }
    var H = function() {
        return "complete" === document.readyState || "interactive" === document.readyState
    };
    var G = new Set;

    function Q(e) {
        G.add(e)
    }

    function K(e) {
        G.delete(e)
    }

    function J() {
        return "complete" === document.readyState
    }
    var X = new Set;

    function Y(e) {
        X.add(e)
    }
    if (!H()) {
        var Z = function() {
            H() && (G.forEach((function(e) {
                return e()
            })), G.clear(), J() && (document.removeEventListener("readystatechange", Z), X.forEach((function(e) {
                return e()
            })), X.clear()))
        };
        document.addEventListener("readystatechange", Z)
    }
    var ee, te = new Map,
        re = new WeakMap;

    function ne(e, t) {
        var r, n, o;
        if (te.has(e)) r = te.get(e), n = re.get(r);
        else {
            var a = !1,
                i = !1;
            r = new MutationObserver((function(t) {
                if (function(e) {
                        if (e.length > 1e3) return !0;
                        for (var t = 0, r = 0; r < e.length; r++)
                            if ((t += e[r].addedNodes.length) > 1e3) return !0;
                        return !1
                    }(t)) !a || H() ? n.forEach((function(t) {
                    return (0, t.onHugeMutations)(e)
                })) : i || (Q(o = function() {
                    return n.forEach((function(t) {
                        return (0, t.onHugeMutations)(e)
                    }))
                }), i = !0), a = !0;
                else {
                    var r = function(e) {
                        var t = new Set,
                            r = new Set,
                            n = new Set;
                        e.forEach((function(e) {
                            F(e.addedNodes, (function(e) {
                                e instanceof Element && e.isConnected && t.add(e)
                            })), F(e.removedNodes, (function(e) {
                                e instanceof Element && (e.isConnected ? (n.add(e), t.delete(e)) : r.add(e))
                            }))
                        }));
                        var o = [],
                            a = [];
                        return t.forEach((function(e) {
                            t.has(e.parentElement) && o.push(e)
                        })), r.forEach((function(e) {
                            r.has(e.parentElement) && a.push(e)
                        })), o.forEach((function(e) {
                            return t.delete(e)
                        })), a.forEach((function(e) {
                            return r.delete(e)
                        })), {
                            additions: t,
                            moves: n,
                            deletions: r
                        }
                    }(t);
                    n.forEach((function(e) {
                        return (0, e.onMinorMutations)(r)
                    }))
                }
            })), r.observe(e, {
                childList: !0,
                subtree: !0
            }), te.set(e, r), n = new Set, re.set(r, n)
        }
        return n.add(t), {
            disconnect: function() {
                n.delete(t), o && K(o), 0 === n.size && (r.disconnect(), re.delete(r), te.delete(e))
            }
        }
    }
    var oe = new Map;

    function ae(e) {
        return ee || (ee = document.createElement("a")), ee.href = e, ee.href
    }

    function ie(e, t) {
        void 0 === t && (t = null);
        var r = "".concat(e).concat(t ? ";".concat(t) : "");
        if (oe.has(r)) return oe.get(r);
        if (t) {
            var n = new URL(e, ae(t));
            return oe.set(r, n), n
        }
        var o = new URL(ae(e));
        return oe.set(e, o), o
    }

    function ce(e, t) {
        if (t.match(/^data\\?\:/)) return t;
        if (/^\/\//.test(t)) return "".concat(location.protocol).concat(t);
        var r = ie(e);
        return ie(t, r.href).href
    }

    function ue(e, t, r) {
        F(e, (function(e) {
            if (e.selectorText) t(e);
            else if (e.href) try {
                ue(e.styleSheet.cssRules, t, r)
            } catch (e) {
                q("Found a non-loaded link."), r && r()
            } else if (e.media) {
                var n = Array.from(e.media),
                    o = n.some((function(e) {
                        return e.startsWith("screen") || e.startsWith("all") || e.startsWith("(")
                    })),
                    a = n.some((function(e) {
                        return e.startsWith("print") || e.startsWith("speech")
                    }));
                !o && a || ue(e.cssRules, t, r)
            } else e.conditionText ? CSS.supports(e.conditionText) && ue(e.cssRules, t, r) : B("CSSRule type not supported", e)
        }))
    }
    var se = ["background", "border", "border-color", "border-bottom", "border-left", "border-right", "border-top", "outline", "outline-color"],
        le = p ? se.map((function(e) {
            return [e, new RegExp("".concat(e, ":\\s*(.*?)\\s*;"))]
        })) : null;

    function de(e, t) {
        F(e, (function(r) {
            var n = e.getPropertyValue(r).trim();
            n && t(r, n)
        }));
        var r = e.cssText;
        r.includes("var(") && (p ? le.forEach((function(e) {
            var n = a(e, 2),
                o = n[0],
                i = n[1],
                c = r.match(i);
            if (c && c[1]) {
                var u = c[1].trim();
                t(o, u)
            }
        })) : se.forEach((function(r) {
            var n = e.getPropertyValue(r);
            n && n.includes("var(") && t(r, n)
        })))
    }
    var fe = /url\((('.+?')|(".+?")|([^\)]*?))\)/g,
        he = /@import\s*(url\()?(('.+?')|(".+?")|([^\)]*?))\)? ?(screen)?;?/gi;

    function pe(e) {
        return e.replace(/^url\((.*)\)$/, "$1").trim().replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1")
    }

    function ve(e) {
        var t = ie(e);
        return "".concat(t.origin).concat(t.pathname.replace(/\?.*$/, "").replace(/(\/)([^\/]+)$/i, "$1"))
    }
    var me = /\/\*[\s\S]*?\*\//g;
    var ge = /@font-face\s*{[^}]*}/g;

    function be(e) {
        var t = e.h,
            r = e.s,
            n = e.l,
            o = e.a,
            i = void 0 === o ? 1 : o;
        if (0 === r) {
            var c = a([n, n, n].map((function(e) {
                    return Math.round(255 * e)
                })), 3),
                u = c[0],
                s = c[1];
            return {
                r: u,
                g: c[2],
                b: s,
                a: i
            }
        }
        var l = (1 - Math.abs(2 * n - 1)) * r,
            d = l * (1 - Math.abs(t / 60 % 2 - 1)),
            f = n - l / 2,
            h = a((t < 60 ? [l, d, 0] : t < 120 ? [d, l, 0] : t < 180 ? [0, l, d] : t < 240 ? [0, d, l] : t < 300 ? [d, 0, l] : [l, 0, d]).map((function(e) {
                return Math.round(255 * (e + f))
            })), 3);
        return {
            r: h[0],
            g: h[1],
            b: h[2],
            a: i
        }
    }

    function ye(e) {
        var t = e.r,
            r = e.g,
            n = e.b,
            o = e.a,
            a = void 0 === o ? 1 : o,
            i = t / 255,
            c = r / 255,
            u = n / 255,
            s = Math.max(i, c, u),
            l = Math.min(i, c, u),
            d = s - l,
            f = (s + l) / 2;
        if (0 === d) return {
            h: 0,
            s: 0,
            l: f,
            a: a
        };
        var h = 60 * (s === i ? (c - u) / d % 6 : s === c ? (u - i) / d + 2 : (i - c) / d + 4);
        return h < 0 && (h += 360), {
            h: h,
            s: d / (1 - Math.abs(2 * f - 1)),
            l: f,
            a: a
        }
    }

    function ke(e, t) {
        void 0 === t && (t = 0);
        var r = e.toFixed(t);
        if (0 === t) return r;
        var n = r.indexOf(".");
        if (n >= 0) {
            var o = r.match(/0+$/);
            if (o) return o.index === n + 1 ? r.substring(0, n) : r.substring(0, o.index)
        }
        return r
    }

    function we(e) {
        var t = e.h,
            r = e.s,
            n = e.l,
            o = e.a;
        return null != o && o < 1 ? "hsla(".concat(ke(t), ", ").concat(ke(100 * r), "%, ").concat(ke(100 * n), "%, ").concat(ke(o, 2), ")") : "hsl(".concat(ke(t), ", ").concat(ke(100 * r), "%, ").concat(ke(100 * n), "%)")
    }
    var Se = /^rgba?\([^\(\)]+\)$/,
        _e = /^hsla?\([^\(\)]+\)$/,
        Ee = /^#[0-9a-f]+$/i;

    function xe(e) {
        var t, r, n, o, i, c = e.trim().toLowerCase();
        if (c.match(Se)) return t = a(Ce(c, Ve, Re), 4), r = t[0], n = t[1], o = t[2], i = t[3], {
            r: r,
            g: n,
            b: o,
            a: void 0 === i ? 1 : i
        };
        if (c.match(_e)) return function(e) {
            var t = a(Ce(e, Te, Me), 4),
                r = t[0],
                n = t[1],
                o = t[2],
                i = t[3];
            return be({
                h: r,
                s: n,
                l: o,
                a: void 0 === i ? 1 : i
            })
        }(c);
        if (c.match(Ee)) return function(e) {
            var t = e.substring(1);
            switch (t.length) {
                case 3:
                case 4:
                    var r = a([0, 1, 2].map((function(e) {
                        return parseInt("".concat(t[e]).concat(t[e]), 16)
                    })), 3);
                    return {
                        r: r[0], g: r[1], b: r[2], a: 3 === t.length ? 1 : parseInt("".concat(t[3]).concat(t[3]), 16) / 255
                    };
                case 6:
                case 8:
                    var n = a([0, 2, 4].map((function(e) {
                        return parseInt(t.substring(e, e + 2), 16)
                    })), 3);
                    return {
                        r: n[0], g: n[1], b: n[2], a: 6 === t.length ? 1 : parseInt(t.substring(6, 8), 16) / 255
                    }
            }
            throw new Error("Unable to parse ".concat(e))
        }(c);
        if (Pe.has(c)) return function(e) {
            var t = Pe.get(e);
            return {
                r: t >> 16 & 255,
                g: t >> 8 & 255,
                b: t >> 0 & 255,
                a: 1
            }
        }(c);
        if (Oe.has(c)) return function(e) {
            var t = Oe.get(e);
            return {
                r: t >> 16 & 255,
                g: t >> 8 & 255,
                b: t >> 0 & 255,
                a: 1
            }
        }(c);
        if ("transparent" === e) return {
            r: 0,
            g: 0,
            b: 0,
            a: 0
        };
        throw new Error("Unable to parse ".concat(e))
    }

    function Ce(e, t, r) {
        var n = function(e) {
                var t = [],
                    r = 0,
                    n = !1,
                    o = e.indexOf("(");
                e = e.substring(o + 1, e.length - 1);
                for (var a = 0; a < e.length; a++) {
                    var i = e[a];
                    i >= "0" && i <= "9" || "." === i || "+" === i || "-" === i ? n = !0 : !n || " " !== i && "," !== i ? n || (r = a + 1) : (t.push(e.substring(r, a)), n = !1, r = a + 1)
                }
                return n && t.push(e.substring(r, e.length)), t
            }(e),
            o = Object.entries(r);
        return n.map((function(e) {
            return e.trim()
        })).map((function(e, r) {
            var n, i = o.find((function(t) {
                var r = a(t, 1)[0];
                return e.endsWith(r)
            }));
            return n = i ? parseFloat(e.substring(0, e.length - i[0].length)) / i[1] * t[r] : parseFloat(e), t[r] > 1 ? Math.round(n) : n
        }))
    }
    var Ve = [255, 255, 255, 1],
        Re = {
            "%": 100
        };
    var Te = [360, 1, 1, 1],
        Me = {
            "%": 100,
            deg: 360,
            rad: 2 * Math.PI,
            turn: 1
        };
    var Le = function(e) {
        return e >= "0" && e <= "9"
    };

    function Ae(e) {
        for (var t = 0, r = function(t, r, n) {
                e = e.substring(0, t) + n + e.substring(r)
            }, n = function() {
                for (var r = 0, n = 1; n < 4; n++) {
                    var o = e[t + n];
                    if (" " === o) break;
                    if (!Le(o)) break;
                    r *= 10, r += Number(o)
                }
                var a, i = (a = r, Math.floor(Math.log10(a)) + 1);
                if ("%" === e[(t += i) + 1]) return t++, r
            }; 0 !== (t = e.indexOf("calc("));) {
            var o = t;
            t += 4;
            var a = n();
            if (!a) break;
            if (" " !== e[t + 1]) break;
            t++;
            var i = e[t + 1];
            if ("+" !== i && "-" !== i) break;
            if (t++, " " !== e[t + 1]) break;
            t++;
            var c = n();
            if (!c) break;
            var u = void 0;
            u = "".concat("+" === i ? a + c : a - c, "%"), r(o, t + 2, u)
        }
        return e
    }
    var Pe = new Map(Object.entries({
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgrey: 11119017,
            darkgreen: 25600,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            grey: 8421504,
            green: 32768,
            greenyellow: 11403055,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgrey: 13882323,
            lightgreen: 9498256,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
        })),
        Oe = new Map(Object.entries({
            ActiveBorder: 3906044,
            ActiveCaption: 0,
            AppWorkspace: 11184810,
            Background: 6513614,
            ButtonFace: 16777215,
            ButtonHighlight: 15329769,
            ButtonShadow: 10461343,
            ButtonText: 0,
            CaptionText: 0,
            GrayText: 8355711,
            Highlight: 11720703,
            HighlightText: 0,
            InactiveBorder: 16777215,
            InactiveCaption: 16777215,
            InactiveCaptionText: 0,
            InfoBackground: 16514245,
            InfoText: 0,
            Menu: 16185078,
            MenuText: 16777215,
            Scrollbar: 11184810,
            ThreeDDarkShadow: 0,
            ThreeDFace: 12632256,
            ThreeDHighlight: 16777215,
            ThreeDLightShadow: 16777215,
            ThreeDShadow: 0,
            Window: 15527148,
            WindowFrame: 11184810,
            WindowText: 0,
            "-webkit-focus-ring-color": 15046400
        }).map((function(e) {
            var t = a(e, 2),
                r = t[0],
                n = t[1];
            return [r.toLowerCase(), n]
        })));

    function je(e, t, r) {
        return (.2126 * e + .7152 * t + .0722 * r) / 255
    }

    function De(e, t, r, n, o) {
        return (e - t) * (o - n) / (r - t) + n
    }

    function Fe(e, t, r) {
        return Math.min(r, Math.max(t, e))
    }

    function Ne(e, t) {
        for (var r = [], n = 0, o = e.length; n < o; n++) {
            r[n] = [];
            for (var a = 0, i = t[0].length; a < i; a++) {
                for (var c = 0, u = 0, s = e[0].length; u < s; u++) c += e[n][u] * t[u][a];
                r[n][a] = c
            }
        }
        return r
    }

    function qe(e, t, r) {
        void 0 === r && (r = 0);
        for (var n, o = []; n = e.exec(t);) o.push(n[r]);
        return o
    }

    function Be(e, t) {
        void 0 === t && (t = 0);
        for (var r = e.length, n = 0, o = -1, a = t; a < r; a++)
            if (0 === n) {
                if ((i = e.indexOf("(", a)) < 0) break;
                o = i, n++, a = i
            } else {
                var i, c = e.indexOf(")", a);
                if (c < 0) break;
                if ((i = e.indexOf("(", a)) < 0 || c < i) {
                    if (0 === --n) return {
                        start: o,
                        end: c + 1
                    };
                    a = c
                } else n++, a = i
            } return null
    }

    function Ie(e) {
        var t = We.identity();
        return 0 !== e.sepia && (t = Ne(t, We.sepia(e.sepia / 100))), 0 !== e.grayscale && (t = Ne(t, We.grayscale(e.grayscale / 100))), 100 !== e.contrast && (t = Ne(t, We.contrast(e.contrast / 100))), 100 !== e.brightness && (t = Ne(t, We.brightness(e.brightness / 100))), 1 === e.mode && (t = Ne(t, We.invertNHue())), t
    }
    var We = {
        identity: function() {
            return [
                [1, 0, 0, 0, 0],
                [0, 1, 0, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 0, 1, 0],
                [0, 0, 0, 0, 1]
            ]
        },
        invertNHue: function() {
            return [
                [.333, -.667, -.667, 0, 1],
                [-.667, .333, -.667, 0, 1],
                [-.667, -.667, .333, 0, 1],
                [0, 0, 0, 1, 0],
                [0, 0, 0, 0, 1]
            ]
        },
        brightness: function(e) {
            return [
                [e, 0, 0, 0, 0],
                [0, e, 0, 0, 0],
                [0, 0, e, 0, 0],
                [0, 0, 0, 1, 0],
                [0, 0, 0, 0, 1]
            ]
        },
        contrast: function(e) {
            var t = (1 - e) / 2;
            return [
                [e, 0, 0, 0, t],
                [0, e, 0, 0, t],
                [0, 0, e, 0, t],
                [0, 0, 0, 1, 0],
                [0, 0, 0, 0, 1]
            ]
        },
        sepia: function(e) {
            return [
                [.393 + .607 * (1 - e), .769 - .769 * (1 - e), .189 - .189 * (1 - e), 0, 0],
                [.349 - .349 * (1 - e), .686 + .314 * (1 - e), .168 - .168 * (1 - e), 0, 0],
                [.272 - .272 * (1 - e), .534 - .534 * (1 - e), .131 + .869 * (1 - e), 0, 0],
                [0, 0, 0, 1, 0],
                [0, 0, 0, 0, 1]
            ]
        },
        grayscale: function(e) {
            return [
                [.2126 + .7874 * (1 - e), .7152 - .7152 * (1 - e), .0722 - .0722 * (1 - e), 0, 0],
                [.2126 - .2126 * (1 - e), .7152 + .2848 * (1 - e), .0722 - .0722 * (1 - e), 0, 0],
                [.2126 - .2126 * (1 - e), .7152 - .7152 * (1 - e), .0722 + .9278 * (1 - e), 0, 0],
                [0, 0, 0, 1, 0],
                [0, 0, 0, 0, 1]
            ]
        }
    };

    function Ue(e) {
        return e[1 === e.mode ? "darkSchemeBackgroundColor" : "lightSchemeBackgroundColor"]
    }

    function $e(e) {
        return e[1 === e.mode ? "darkSchemeTextColor" : "lightSchemeTextColor"]
    }
    var ze = new Map,
        He = new Map;

    function Ge(e) {
        if (He.has(e)) return He.get(e);
        var t = ye(xe(e));
        return He.set(e, t), t
    }
    var Qe = ["r", "g", "b", "a"],
        Ke = ["mode", "brightness", "contrast", "grayscale", "sepia", "darkSchemeBackgroundColor", "darkSchemeTextColor", "lightSchemeBackgroundColor", "lightSchemeTextColor"];

    function Je(e, t, r, n, o) {
        var i;
        ze.has(r) ? i = ze.get(r) : (i = new Map, ze.set(r, i));
        var c = function(e, t) {
            var r = "";
            return Qe.forEach((function(t) {
                r += "".concat(e[t], ";")
            })), Ke.forEach((function(e) {
                r += "".concat(t[e], ";")
            })), r
        }(e, t);
        if (i.has(c)) return i.get(c);
        var u = be(r(ye(e), null == n ? null : Ge(n), null == o ? null : Ge(o))),
            s = u.r,
            l = u.g,
            d = u.b,
            f = u.a,
            h = a(function(e, t) {
                var r = a(e, 3),
                    n = Ne(t, [
                        [r[0] / 255],
                        [r[1] / 255],
                        [r[2] / 255],
                        [1],
                        [1]
                    ]);
                return [0, 1, 2].map((function(e) {
                    return Fe(Math.round(255 * n[e][0]), 0, 255)
                }))
            }([s, l, d], Ie(t)), 3),
            p = h[0],
            v = h[1],
            m = h[2],
            g = 1 === f ? function(e) {
                var t = e.r,
                    r = e.g,
                    n = e.b,
                    o = e.a;
                return "#".concat((null != o && o < 1 ? [t, r, n, Math.round(255 * o)] : [t, r, n]).map((function(e) {
                    return "".concat(e < 16 ? "0" : "").concat(e.toString(16))
                })).join(""))
            }({
                r: p,
                g: v,
                b: m
            }) : function(e) {
                var t = e.r,
                    r = e.g,
                    n = e.b,
                    o = e.a;
                return null != o && o < 1 ? "rgba(".concat(ke(t), ", ").concat(ke(r), ", ").concat(ke(n), ", ").concat(ke(o, 2), ")") : "rgb(".concat(ke(t), ", ").concat(ke(r), ", ").concat(ke(n), ")")
            }({
                r: p,
                g: v,
                b: m,
                a: f
            });
        return i.set(c, g), g
    }

    function Xe(e) {
        return e
    }

    function Ye(e, t) {
        var r = Ue(t);
        return Je(e, t, Ze, $e(t), r)
    }

    function Ze(e, t, r) {
        var n, o = e.h,
            a = e.s,
            i = e.l,
            c = e.a,
            u = i < .5;
        u ? n = i < .2 || a < .12 : n = a < .24 || i > .8 && (o > 200 && o < 280);
        var s = o,
            l = i;
        return n && (u ? (s = t.h, l = t.s) : (s = r.h, l = r.s)), {
            h: s,
            s: l,
            l: De(i, 0, 1, t.l, r.l),
            a: c
        }
    }

    function et(e, t) {
        var r = e.h,
            n = e.s,
            o = e.l,
            a = e.a,
            i = n < .12 || o > .8 && (r > 200 && r < 280);
        if (o < .5) {
            var c = De(o, 0, .5, 0, .4);
            return i ? {
                h: t.h,
                s: t.s,
                l: c,
                a: a
            } : {
                h: r,
                s: n,
                l: c,
                a: a
            }
        }
        var u = De(o, .5, 1, .4, t.l);
        if (i) return {
            h: t.h,
            s: t.s,
            l: u,
            a: a
        };
        var s = r;
        r > 60 && r < 180 && (s = r > 120 ? De(r, 120, 180, 135, 180) : De(r, 60, 120, 60, 105));
        return s > 40 && s < 80 && (u *= .75), {
            h: s,
            s: n,
            l: u,
            a: a
        }
    }

    function tt(e, r) {
        if (0 === r.mode) return Ye(e, r);
        var n = Ue(r);
        return Je(e, t(t({}, r), {
            mode: 0
        }), et, n)
    }
    var rt, nt = .55;

    function ot(e) {
        return De(e, 205, 245, 205, 220)
    }

    function at(e, t) {
        var r = e.h,
            n = e.s,
            o = e.l,
            a = e.a,
            i = o < .2 || n < .24,
            c = !i && r > 205 && r < 245;
        if (o > .5) {
            var u = De(o, .5, 1, nt, t.l);
            if (i) return {
                h: t.h,
                s: t.s,
                l: u,
                a: a
            };
            var s = r;
            return c && (s = ot(r)), {
                h: s,
                s: n,
                l: u,
                a: a
            }
        }
        if (i) return {
            h: t.h,
            s: t.s,
            l: De(o, 0, .5, t.l, nt),
            a: a
        };
        var l, d = r;
        return c ? (d = ot(r), l = De(o, 0, .5, t.l, Math.min(1, .6000000000000001))) : l = De(o, 0, .5, t.l, nt), {
            h: d,
            s: n,
            l: l,
            a: a
        }
    }

    function it(e, r) {
        if (0 === r.mode) return Ye(e, r);
        var n = $e(r);
        return Je(e, t(t({}, r), {
            mode: 0
        }), at, n)
    }

    function ct(e, t, r) {
        var n = e.h,
            o = e.s,
            a = e.l,
            i = e.a,
            c = n,
            u = o;
        return (a < .2 || o < .24) && (a < .5 ? (c = t.h, u = t.s) : (c = r.h, u = r.s)), {
            h: c,
            s: u,
            l: De(a, 0, 1, .5, .2),
            a: i
        }
    }

    function ut(e, r) {
        if (0 === r.mode) return Ye(e, r);
        var n = $e(r),
            o = Ue(r);
        return Je(e, t(t({}, r), {
            mode: 0
        }), ct, n, o)
    }

    function st(e, t) {
        return tt(e, t)
    }

    function lt(e) {
        var t = [];
        return e.mode === rt.dark && t.push("invert(100%) hue-rotate(180deg)"), 100 !== e.brightness && t.push("brightness(".concat(e.brightness, "%)")), 100 !== e.contrast && t.push("contrast(".concat(e.contrast, "%)")), 0 !== e.grayscale && t.push("grayscale(".concat(e.grayscale, "%)")), 0 !== e.sepia && t.push("sepia(".concat(e.sepia, "%)")), 0 === t.length ? null : t.join(" ")
    }! function(e) {
        e[e.light = 0] = "light", e[e.dark = 1] = "dark"
    }(rt || (rt = {}));
    var dt = 0,
        ft = new Map,
        ht = new Map;

    function pt(e) {
        return r(this, void 0, void 0, (function() {
            return n(this, (function(t) {
                return [2, new Promise((function(t, r) {
                    var n = ++dt;
                    ft.set(n, t), ht.set(n, r), chrome.runtime.sendMessage({
                        type: u,
                        data: e,
                        id: n
                    })
                }))]
            }))
        }))
    }
    chrome.runtime.onMessage.addListener((function(e) {
        var t = e.type,
            r = e.data,
            n = e.error,
            o = e.id;
        if (t === c) {
            var a = ft.get(o),
                i = ht.get(o);
            ft.delete(o), ht.delete(o), n ? i && i(n) : a && a(r)
        }
    }));
    var vt = new(function() {
        function e() {
            this.queue = [], this.timerId = null, this.frameDuration = 1e3 / 60
        }
        return e.prototype.addToQueue = function(e) {
            this.queue.push(e), this.startQueue()
        }, e.prototype.stopQueue = function() {
            null !== this.timerId && (cancelAnimationFrame(this.timerId), this.timerId = null), this.queue = []
        }, e.prototype.startQueue = function() {
            var e = this;
            this.timerId || (this.timerId = requestAnimationFrame((function() {
                e.timerId = null;
                for (var t, r = Date.now(); t = e.queue.shift();)
                    if (t(), Date.now() - r >= e.frameDuration) {
                        e.startQueue();
                        break
                    }
            })))
        }, e
    }());

    function mt(e) {
        return r(this, void 0, void 0, (function() {
            var o = this;
            return n(this, (function(a) {
                return [2, new Promise((function(a, i) {
                    return r(o, void 0, void 0, (function() {
                        var r, o, c, u;
                        return n(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return e.startsWith("data:") ? (r = e, [3, 4]) : [3, 1];
                                case 1:
                                    return n.trys.push([1, 3, , 4]), [4, gt(e)];
                                case 2:
                                    return r = n.sent(), [3, 4];
                                case 3:
                                    return o = n.sent(), i(o), [2];
                                case 4:
                                    return n.trys.push([4, 6, , 7]), [4, bt(r)];
                                case 5:
                                    return c = n.sent(), vt.addToQueue((function() {
                                        a(t({
                                            src: e,
                                            dataURL: r,
                                            width: c.naturalWidth,
                                            height: c.naturalHeight
                                        }, function(e) {
                                            yt || (t = wt, r = wt, (yt = document.createElement("canvas")).width = t, yt.height = r, (kt = yt.getContext("2d")).imageSmoothingEnabled = !1);
                                            var t, r;
                                            var n = e.naturalWidth,
                                                o = e.naturalHeight;
                                            if (0 === o || 0 === n) return B("logWarn(Image is empty ".concat(e.currentSrc, ")")), null;
                                            if (n * o * 4 > St) return q("Skipped large image analyzing(Larger than 5mb in memory)"), {
                                                isDark: !1,
                                                isLight: !1,
                                                isTransparent: !1,
                                                isLarge: !1,
                                                isTooLarge: !0
                                            };
                                            var a = n * o,
                                                i = Math.min(1, Math.sqrt(wt / a)),
                                                c = Math.ceil(n * i),
                                                u = Math.ceil(o * i);
                                            kt.clearRect(0, 0, c, u), kt.drawImage(e, 0, 0, n, o, 0, 0, c, u);
                                            var s, l, d, f, h, p, v, m = kt.getImageData(0, 0, c, u).data,
                                                g = .05,
                                                b = .4,
                                                y = .7,
                                                k = 0,
                                                w = 0,
                                                S = 0;
                                            for (d = 0; d < u; d++)
                                                for (l = 0; l < c; l++) f = m[(s = 4 * (d * c + l)) + 0], h = m[s + 1], p = m[s + 2], m[s + 3] / 255 < g ? k++ : ((v = je(f, h, p)) < b && w++, v > y && S++);
                                            var _ = c * u,
                                                E = _ - k;
                                            return {
                                                isDark: w / E >= .7,
                                                isLight: S / E >= .7,
                                                isTransparent: k / _ >= .1,
                                                isLarge: a >= 48e4,
                                                isTooLarge: !1
                                            }
                                        }(c)))
                                    })), [3, 7];
                                case 6:
                                    return u = n.sent(), i(u), [3, 7];
                                case 7:
                                    return [2]
                            }
                        }))
                    }))
                }))]
            }))
        }))
    }

    function gt(e) {
        return r(this, void 0, void 0, (function() {
            return n(this, (function(t) {
                switch (t.label) {
                    case 0:
                        return new URL(e).origin !== location.origin ? [3, 2] : [4, _(e)];
                    case 1:
                    case 3:
                        return [2, t.sent()];
                    case 2:
                        return [4, pt({
                            url: e,
                            responseType: "data-url"
                        })]
                }
            }))
        }))
    }

    function bt(e) {
        return r(this, void 0, void 0, (function() {
            return n(this, (function(t) {
                return [2, new Promise((function(t, r) {
                    var n = new Image;
                    n.onload = function() {
                        return t(n)
                    }, n.onerror = function() {
                        return r("Unable to load image ".concat(e))
                    }, n.src = e
                }))]
            }))
        }))
    }
    var yt, kt, wt = 1024;
    var St = 5242880;

    function _t(e, t) {
        var r = e.dataURL,
            n = e.width,
            o = e.height,
            a = Ie(t).slice(0, 4).map((function(e) {
                return e.map((function(e) {
                    return e.toFixed(3)
                })).join(" ")
            })).join(" "),
            i = ['<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'.concat(n, '" height="').concat(o, '">'), "<defs>", '<filter id="darkreader-image-filter">', '<feColorMatrix type="matrix" values="'.concat(a, '" />'), "</filter>", "</defs>", '<image width="'.concat(n, '" height="').concat(o, '" filter="url(#darkreader-image-filter)" xlink:href="').concat(r, '" />'), "</svg>"].join("");
        return "data:image/svg+xml;base64,".concat(btoa(i))
    }

    function Et() {
        vt && vt.stopQueue(), yt = null, kt = null
    }
    var xt = "gradient".length,
        Ct = "conic-",
        Vt = Ct.length,
        Rt = "radial-",
        Tt = "linear-";

    function Mt(e, t) {
        return Boolean(e && e.getPropertyPriority(t))
    }

    function Lt(e, t, r, n, o, a) {
        if (e.startsWith("--")) {
            var i = function(e, t, r, n, o, a) {
                return e.getModifierForVariable({
                    varName: t,
                    sourceValue: r,
                    rule: n,
                    ignoredImgSelectors: o,
                    isCancelled: a
                })
            }(n, e, t, r, o, a);
            if (i) return {
                property: e,
                value: i,
                important: Mt(r.style, e),
                sourceValue: t
            }
        } else if (t.includes("var(")) {
            i = function(e, t, r) {
                return e.getModifierForVarDependant(t, r)
            }(n, e, t);
            if (i) return {
                property: e,
                value: i,
                important: Mt(r.style, e),
                sourceValue: t
            }
        } else if (e.includes("color") && "-webkit-print-color-adjust" !== e || "fill" === e || "stroke" === e || "stop-color" === e) {
            i = function(e, t) {
                if (Dt.has(t.toLowerCase())) return t;
                try {
                    var r = Nt(t);
                    return e.includes("background") ? function(e) {
                        return tt(r, e)
                    } : e.includes("border") || e.includes("outline") ? function(e) {
                        return ut(r, e)
                    } : function(e) {
                        return it(r, e)
                    }
                } catch (e) {
                    return B("Color parse error", e), null
                }
            }(e, t);
            if (i) return {
                property: e,
                value: i,
                important: Mt(r.style, e),
                sourceValue: t
            }
        } else if ("background-image" === e || "list-style-image" === e) {
            if (i = Wt(t, r, o, a)) return {
                property: e,
                value: i,
                important: Mt(r.style, e),
                sourceValue: t
            }
        } else if (e.includes("shadow")) {
            i = function(e) {
                var t = Ut(e);
                if (!t) return null;
                return function(e) {
                    return t(e).result
                }
            }(t);
            if (i) return {
                property: e,
                value: i,
                important: Mt(r.style, e),
                sourceValue: t
            }
        }
        return null
    }

    function At() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return e.filter(Boolean).join(", ")
    }

    function Pt(e, r, n) {
        var o = [];
        r || (o.push("html {"), o.push("    background-color: ".concat(tt({
            r: 255,
            g: 255,
            b: 255
        }, e), " !important;")), o.push("}")), w && (o.push("html {"), o.push("    color-scheme: ".concat(1 === e.mode ? "dark" : "dark light", " !important;")), o.push("}"));
        var a = At(r ? "" : "html, body", n ? "input, textarea, select, button" : "");
        return a && (o.push("".concat(a, " {")), o.push("    background-color: ".concat(tt({
            r: 255,
            g: 255,
            b: 255
        }, e), ";")), o.push("}")), o.push("".concat(At("html, body", n ? "input, textarea, select, button" : ""), " {")), o.push("    border-color: ".concat(ut({
            r: 76,
            g: 76,
            b: 76
        }, e), ";")), o.push("    color: ".concat(it({
            r: 0,
            g: 0,
            b: 0
        }, e), ";")), o.push("}"), o.push("a {"), o.push("    color: ".concat(it({
            r: 0,
            g: 64,
            b: 255
        }, e), ";")), o.push("}"), o.push("table {"), o.push("    border-color: ".concat(ut({
            r: 128,
            g: 128,
            b: 128
        }, e), ";")), o.push("}"), o.push("::placeholder {"), o.push("    color: ".concat(it({
            r: 169,
            g: 169,
            b: 169
        }, e), ";")), o.push("}"), o.push("input:-webkit-autofill,"), o.push("textarea:-webkit-autofill,"), o.push("select:-webkit-autofill {"), o.push("    background-color: ".concat(tt({
            r: 250,
            g: 255,
            b: 189
        }, e), " !important;")), o.push("    color: ".concat(it({
            r: 0,
            g: 0,
            b: 0
        }, e), " !important;")), o.push("}"), e.scrollbarColor && o.push(function(e) {
            var r, n, o, a, i, c, u = [];
            if ("auto" === e.scrollbarColor) r = tt({
                r: 241,
                g: 241,
                b: 241
            }, e), n = it({
                r: 96,
                g: 96,
                b: 96
            }, e), o = tt({
                r: 176,
                g: 176,
                b: 176
            }, e), a = tt({
                r: 144,
                g: 144,
                b: 144
            }, e), i = tt({
                r: 96,
                g: 96,
                b: 96
            }, e), c = tt({
                r: 255,
                g: 255,
                b: 255
            }, e);
            else {
                var s = ye(xe(e.scrollbarColor)),
                    l = s.l > .5,
                    d = function(e) {
                        return t(t({}, s), {
                            l: Fe(s.l + e, 0, 1)
                        })
                    },
                    f = function(e) {
                        return t(t({}, s), {
                            l: Fe(s.l - e, 0, 1)
                        })
                    };
                r = we(f(.4)), n = we(l ? f(.4) : d(.4)), o = we(s), a = we(d(.1)), i = we(d(.2))
            }
            u.push("::-webkit-scrollbar {"), u.push("    background-color: ".concat(r, ";")), u.push("    color: ".concat(n, ";")), u.push("}"), u.push("::-webkit-scrollbar-thumb {"), u.push("    background-color: ".concat(o, ";")), u.push("}"), u.push("::-webkit-scrollbar-thumb:hover {"), u.push("    background-color: ".concat(a, ";")), u.push("}"), u.push("::-webkit-scrollbar-thumb:active {"), u.push("    background-color: ".concat(i, ";")), u.push("}"), u.push("::-webkit-scrollbar-corner {"), u.push("    background-color: ".concat(c, ";")), u.push("}"), h && (u.push("* {"), u.push("    scrollbar-color: ".concat(o, " ").concat(r, ";")), u.push("}"));
            return u.join("\n")
        }(e)), e.selectionColor && o.push(function(e) {
            var t = [],
                r = Ot(e),
                n = r.backgroundColorSelection,
                o = r.foregroundColorSelection;
            return ["::selection", "::-moz-selection"].forEach((function(e) {
                t.push("".concat(e, " {")), t.push("    background-color: ".concat(n, " !important;")), t.push("    color: ".concat(o, " !important;")), t.push("}")
            })), t.join("\n")
        }(e)), o.join("\n")
    }

    function Ot(e) {
        var r, n;
        if ("auto" === e.selectionColor) r = tt({
            r: 0,
            g: 96,
            b: 212
        }, t(t({}, e), {
            grayscale: 0
        })), n = it({
            r: 255,
            g: 255,
            b: 255
        }, t(t({}, e), {
            grayscale: 0
        }));
        else {
            var o = ye(xe(e.selectionColor));
            r = e.selectionColor, n = o.l < .5 ? "#FFF" : "#000"
        }
        return {
            backgroundColorSelection: r,
            foregroundColorSelection: n
        }
    }

    function jt(e, t) {
        var r = t.strict,
            n = [],
            o = location.hostname.endsWith("microsoft.com");
        return n.push("html, body, ".concat(r ? "body :not(iframe)".concat(o ? ':not(div[style^="position:absolute;top:0;left:-"]' : "") : "body > :not(iframe)", " {")), n.push("    background-color: ".concat(tt({
            r: 255,
            g: 255,
            b: 255
        }, e), " !important;")), n.push("    border-color: ".concat(ut({
            r: 64,
            g: 64,
            b: 64
        }, e), " !important;")), n.push("    color: ".concat(it({
            r: 0,
            g: 0,
            b: 0
        }, e), " !important;")), n.push("}"), n.join("\n")
    }
    var Dt = new Set(["inherit", "transparent", "initial", "currentcolor", "none", "unset"]),
        Ft = new Map;

    function Nt(e) {
        if (e = e.trim(), Ft.has(e)) return Ft.get(e);
        e.includes("calc(") && (e = Ae(e));
        var t = xe(e);
        return Ft.set(e, t), t
    }

    function qt(e) {
        try {
            return Nt(e)
        } catch (e) {
            return null
        }
    }
    var Bt = new Map,
        It = new Map;

    function Wt(e, o, a, i) {
        var c, u, s = this;
        try {
            var l = function(e) {
                    for (var t = [], r = 0, n = Ct.length, o = function() {
                            var o;
                            if ([Tt, Rt, Ct].find((function(t) {
                                    if (r - t.length >= 0 && e.substring(r - t.length, r) === t) return "repeating" === e.slice(r - t.length - 10, r - t.length - 1) ? (o = "repeating-".concat(t, "gradient"), !0) : "-webkit" === e.slice(r - t.length - 8, r - t.length - 1) ? (o = "-webkit-".concat(t, "gradient"), !0) : (o = "".concat(t, "gradient"), !0)
                                })), !o) return "break";
                            var a = Be(e, r + xt),
                                i = a.start,
                                c = a.end,
                                u = e.substring(i + 1, c - 1);
                            n = c + 1 + Vt, t.push({
                                type: o,
                                content: u,
                                hasComma: !0
                            })
                        }; - 1 !== (r = e.indexOf("gradient", n)) && "break" !== o(););
                    return t.length && (t[t.length - 1].hasComma = !1), t
                }(e),
                d = qe(fe, e);
            if (0 === d.length && 0 === l.length) return e;
            var f = (c = d, u = 0, c.map((function(t) {
                    var r = e.indexOf(t, u);
                    return u = r + t.length, {
                        match: t,
                        index: r
                    }
                }))).map((function(e) {
                    return {
                        type: "url",
                        urlInfo: e
                    }
                })).concat(l.map((function(e) {
                    return {
                        type: "gradient",
                        gradientInfo: e
                    }
                }))),
                h = function(e, r) {
                    var n, o = e.isDark,
                        a = e.isLight,
                        i = e.isTransparent,
                        c = e.isLarge,
                        u = e.isTooLarge,
                        s = e.width;
                    if (u) n = 'url("'.concat(e.src, '")');
                    else if (o && i && 1 === r.mode && !c && s > 2) {
                        q("Inverting dark image ".concat(e.src));
                        var l = _t(e, t(t({}, r), {
                            sepia: Fe(r.sepia + 10, 0, 100)
                        }));
                        n = 'url("'.concat(l, '")')
                    } else if (a && !i && 1 === r.mode)
                        if (c) n = "none";
                        else {
                            q("Dimming light image ".concat(e.src));
                            var d = _t(e, r);
                            n = 'url("'.concat(d, '")')
                        }
                    else if (0 === r.mode && a && !c) {
                        q("Applying filter to image ".concat(e.src));
                        var f = _t(e, t(t({}, r), {
                            brightness: Fe(r.brightness - 10, 5, 200),
                            sepia: Fe(r.sepia + 10, 0, 100)
                        }));
                        n = 'url("'.concat(f, '")')
                    } else n = null;
                    return n
                },
                p = [],
                v = 0;
            return f.forEach((function(t, c) {
                    var u = t.type,
                        l = t.urlInfo,
                        d = t.gradientInfo;
                    if ("url" === u) {
                        var m = l.match,
                            g = l.index,
                            b = v,
                            y = g + m.length;
                        v = y, p.push((function() {
                            return e.substring(b, g)
                        })), p.push(function(e) {
                            var t;
                            if (function(e, t) {
                                    if (!e || 0 === t.length) return !1;
                                    if (t.some((function(e) {
                                            return "*" === e
                                        }))) return !0;
                                    for (var r = e.split(/,\s*/g), n = function(e) {
                                            var n = t[e];
                                            if (r.some((function(e) {
                                                    return e === n
                                                }))) return {
                                                value: !0
                                            }
                                        }, o = 0; o < t.length; o++) {
                                        var a = n(o);
                                        if ("object" == typeof a) return a.value
                                    }
                                    return !1
                                }(o.selectorText, a)) return null;
                            var c = pe(e),
                                u = o.parentStyleSheet,
                                l = u && u.href ? ve(u.href) : (null === (t = u.ownerNode) || void 0 === t ? void 0 : t.baseURI) || location.origin;
                            c = ce(l, c);
                            var d = 'url("'.concat(c, '")');
                            return function(e) {
                                return r(s, void 0, void 0, (function() {
                                    var t, r;
                                    return n(this, (function(n) {
                                        switch (n.label) {
                                            case 0:
                                                return Bt.has(c) ? (t = Bt.get(c), [3, 7]) : [3, 1];
                                            case 1:
                                                return n.trys.push([1, 6, , 7]), It.has(c) ? (r = It.get(c), [4, new Promise((function(e) {
                                                    return r.push(e)
                                                }))]) : [3, 3];
                                            case 2:
                                                return (t = n.sent()) ? [3, 5] : [2, null];
                                            case 3:
                                                return It.set(c, []), [4, mt(c)];
                                            case 4:
                                                t = n.sent(), Bt.set(c, t), It.get(c).forEach((function(e) {
                                                    return e(t)
                                                })), It.delete(c), n.label = 5;
                                            case 5:
                                                return i() ? [2, null] : [3, 7];
                                            case 6:
                                                return B(n.sent()), It.has(c) && (It.get(c).forEach((function(e) {
                                                    return e(null)
                                                })), It.delete(c)), [2, d];
                                            case 7:
                                                return [2, h(t, e) || d]
                                        }
                                    }))
                                }))
                            }
                        }(m)), c === f.length - 1 && p.push((function() {
                            return e.substring(y)
                        }))
                    } else "gradient" === u && p.push(function(e) {
                        var t = e.type,
                            r = e.content,
                            n = e.hasComma,
                            o = /^(from|color-stop|to)\(([^\(\)]*?,\s*)?(.*?)\)$/,
                            a = qe(/([^\(\),]+(\([^\(\)]*(\([^\(\)]*\)*[^\(\)]*)?\))?[^\(\),]*),?/g, r, 1).map((function(e) {
                                var t = qt(e = e.trim());
                                if (t) return function(e) {
                                    return st(t, e)
                                };
                                var r = e.lastIndexOf(" ");
                                if (t = qt(e.substring(0, r))) return function(n) {
                                    return "".concat(st(t, n), " ").concat(e.substring(r + 1))
                                };
                                var n = e.match(o);
                                return n && (t = qt(n[3])) ? function(e) {
                                    return "".concat(n[1], "(").concat(n[2] ? "".concat(n[2], ", ") : "").concat(st(t, e), ")")
                                } : function() {
                                    return e
                                }
                            }));
                        return function(e) {
                            return "".concat(t, "(").concat(a.map((function(t) {
                                return t(e)
                            })).join(", "), ")").concat(n ? ", " : "")
                        }
                    }(d))
                })),
                function(e) {
                    var t = p.filter(Boolean).map((function(t) {
                        return t(e)
                    }));
                    return t.some((function(e) {
                        return e instanceof Promise
                    })) ? Promise.all(t).then((function(e) {
                        var t = "",
                            r = !1;
                        return e.filter(Boolean).forEach((function(e) {
                            r && (e && (t += ", "), r = !1), t += e, e.startsWith("url(") && (r = !0)
                        })), t
                    })) : t.join("")
                }
        } catch (t) {
            return B("Unable to parse gradient ".concat(e), t), null
        }
    }

    function Ut(e) {
        try {
            var t = 0,
                r = qe(/(^|\s)(?!calc)([a-z]+\(.+?\)|#[0-9a-f]+|[a-z]+)(.*?(inset|outset)?($|,))/gi, e, 2),
                n = 0,
                o = r.map((function(o, a) {
                    var i = t,
                        c = e.indexOf(o, t),
                        u = c + o.length;
                    t = u;
                    var s = qt(o);
                    return s ? function(t) {
                        return "".concat(e.substring(i, c)).concat(function(e, t) {
                            return tt(e, t)
                        }(s, t)).concat(a === r.length - 1 ? e.substring(u) : "")
                    } : (n++, function() {
                        return e.substring(i, u)
                    })
                }));
            return function(e) {
                var t = o.map((function(t) {
                    return t(e)
                })).join("");
                return {
                    matchesLength: r.length,
                    unparseableMatchesLength: n,
                    result: t
                }
            }
        } catch (t) {
            return B("Unable to parse shadow ".concat(e), t), null
        }
    }

    function $t() {
        Ft.clear(), ze.clear(), He.clear(), Bt.clear(), Et(), It.clear()
    }
    var zt = new(function() {
        function e() {
            this.varTypes = new Map, this.rulesQueue = [], this.definedVars = new Set, this.varRefs = new Map, this.unknownColorVars = new Set, this.unknownBgVars = new Set, this.undefinedVars = new Set, this.initialVarTypes = new Map, this.changedTypeVars = new Set, this.typeChangeSubscriptions = new Map, this.unstableVarValues = new Map
        }
        return e.prototype.clear = function() {
            this.varTypes.clear(), this.rulesQueue.splice(0), this.definedVars.clear(), this.varRefs.clear(), this.unknownColorVars.clear(), this.unknownBgVars.clear(), this.undefinedVars.clear(), this.initialVarTypes.clear(), this.changedTypeVars.clear(), this.typeChangeSubscriptions.clear(), this.unstableVarValues.clear()
        }, e.prototype.isVarType = function(e, t) {
            return this.varTypes.has(e) && (this.varTypes.get(e) & t) > 0
        }, e.prototype.addRulesForMatching = function(e) {
            this.rulesQueue.push(e)
        }, e.prototype.matchVariablesAndDependants = function() {
            var e = this;
            this.changedTypeVars.clear(), this.initialVarTypes = new Map(this.varTypes), this.collectRootVariables(), this.collectVariablesAndVarDep(this.rulesQueue), this.rulesQueue.splice(0), this.collectRootVarDependants(), this.varRefs.forEach((function(t, r) {
                t.forEach((function(t) {
                    e.varTypes.has(r) && e.resolveVariableType(t, e.varTypes.get(r))
                }))
            })), this.unknownColorVars.forEach((function(t) {
                e.unknownBgVars.has(t) ? (e.unknownColorVars.delete(t), e.unknownBgVars.delete(t), e.resolveVariableType(t, 1)) : e.isVarType(t, 7) ? e.unknownColorVars.delete(t) : e.undefinedVars.add(t)
            })), this.unknownBgVars.forEach((function(t) {
                null != e.findVarRef(t, (function(t) {
                    return e.unknownColorVars.has(t) || e.isVarType(t, 6)
                })) ? e.itarateVarRefs(t, (function(t) {
                    e.resolveVariableType(t, 1)
                })) : e.isVarType(t, 9) ? e.unknownBgVars.delete(t) : e.undefinedVars.add(t)
            })), this.changedTypeVars.forEach((function(t) {
                e.typeChangeSubscriptions.has(t) && e.typeChangeSubscriptions.get(t).forEach((function(e) {
                    e()
                }))
            })), this.changedTypeVars.clear()
        }, e.prototype.getModifierForVariable = function(e) {
            var t = this;
            return function(r) {
                var n = e.varName,
                    o = e.sourceValue,
                    a = e.rule,
                    i = e.ignoredImgSelectors,
                    c = e.isCancelled,
                    u = function() {
                        var e = [],
                            u = function(a, i, c) {
                                if (t.isVarType(n, a)) {
                                    var u, s = i(n);
                                    if (tr(o))
                                        if (rr(o)) {
                                            var l = ur(o, t.unstableVarValues);
                                            l || (l = 1 === a ? "#ffffff" : "#000000"), u = c(l, r)
                                        } else u = Kt(o, (function(e) {
                                            return i(e)
                                        }), (function(e) {
                                            return c(e, r)
                                        }));
                                    else u = c(o, r);
                                    e.push({
                                        property: s,
                                        value: u
                                    })
                                }
                            };
                        if (u(1, Jt, ar), u(2, Xt, ir), u(4, Yt, cr), t.isVarType(n, 8)) {
                            var s = Zt(n),
                                l = o;
                            tr(o) && (l = Kt(o, (function(e) {
                                return Jt(e)
                            }), (function(e) {
                                return ar(e, r)
                            })));
                            var d = Wt(l, a, i, c);
                            l = "function" == typeof d ? d(r) : d, e.push({
                                property: s,
                                value: l
                            })
                        }
                        return e
                    },
                    s = new Set;
                return {
                    declarations: u(),
                    onTypeChange: {
                        addListener: function(e) {
                            var r = function() {
                                var t = u();
                                e(t)
                            };
                            s.add(r), t.subscribeForVarTypeChange(n, r)
                        },
                        removeListeners: function() {
                            s.forEach((function(e) {
                                t.unsubscribeFromVariableTypeChanges(n, e)
                            }))
                        }
                    }
                }
            }
        }, e.prototype.getModifierForVarDependant = function(e, t) {
            var r = this;
            if (t.match(/^\s*(rgb|hsl)a?\(/)) {
                var n = e.startsWith("background"),
                    o = "color" === e || "caret-color" === e;
                return function(e) {
                    var a = ur(t, r.unstableVarValues);
                    return a || (a = n ? "#ffffff" : "#000000"), (n ? ar : o ? ir : cr)(a, e)
                }
            }
            return "background-color" === e ? function(e) {
                return Kt(t, (function(e) {
                    return Jt(e)
                }), (function(t) {
                    return ar(t, e)
                }))
            } : "color" === e || "caret-color" === e ? function(e) {
                return Kt(t, (function(e) {
                    return Xt(e)
                }), (function(t) {
                    return ir(t, e)
                }))
            } : "background" === e || "background-image" === e || "box-shadow" === e ? function(n) {
                var o = new Set,
                    a = function() {
                        var a = Kt(t, (function(e) {
                            return r.isVarType(e, 1) ? Jt(e) : r.isVarType(e, 8) ? Zt(e) : (o.add(e), e)
                        }), (function(e) {
                            return ar(e, n)
                        }));
                        if ("box-shadow" === e) {
                            var i = Ut(a)(n);
                            if (i.unparseableMatchesLength !== i.matchesLength) return i.result
                        }
                        return a
                    },
                    i = a();
                return o.size > 0 ? new Promise((function(e) {
                    var t = o.values().next().value,
                        n = function() {
                            r.unsubscribeFromVariableTypeChanges(t, n);
                            var o = a();
                            e(o)
                        };
                    r.subscribeForVarTypeChange(t, n)
                })) : i
            } : e.startsWith("border") || e.startsWith("outline") ? function(e) {
                return Kt(t, (function(e) {
                    return Yt(e)
                }), (function(t) {
                    return cr(t, e)
                }))
            } : null
        }, e.prototype.subscribeForVarTypeChange = function(e, t) {
            this.typeChangeSubscriptions.has(e) || this.typeChangeSubscriptions.set(e, new Set);
            var r = this.typeChangeSubscriptions.get(e);
            r.has(t) || r.add(t)
        }, e.prototype.unsubscribeFromVariableTypeChanges = function(e, t) {
            this.typeChangeSubscriptions.has(e) && this.typeChangeSubscriptions.get(e).delete(t)
        }, e.prototype.collectVariablesAndVarDep = function(e) {
            var t = this;
            e.forEach((function(e) {
                ue(e, (function(e) {
                    e.style && de(e.style, (function(e, r) {
                        er(e) && t.inspectVariable(e, r), tr(r) && t.inspectVarDependant(e, r)
                    }))
                }))
            }))
        }, e.prototype.collectRootVariables = function() {
            var e = this;
            de(document.documentElement.style, (function(t, r) {
                er(t) && e.inspectVariable(t, r)
            }))
        }, e.prototype.inspectVariable = function(e, t) {
            (this.unstableVarValues.set(e, t), tr(t) && rr(t) && (this.unknownColorVars.add(e), this.definedVars.add(e)), this.definedVars.has(e)) || (this.definedVars.add(e), qt(t) ? this.unknownColorVars.add(e) : (t.includes("url(") || t.includes("linear-gradient(") || t.includes("radial-gradient(")) && this.resolveVariableType(e, 8))
        }, e.prototype.resolveVariableType = function(e, t) {
            var r = this.initialVarTypes.get(e) || 0,
                n = (this.varTypes.get(e) || 0) | t;
            this.varTypes.set(e, n), (n !== r || this.undefinedVars.has(e)) && (this.changedTypeVars.add(e), this.undefinedVars.delete(e)), this.unknownColorVars.delete(e), this.unknownBgVars.delete(e)
        }, e.prototype.collectRootVarDependants = function() {
            var e = this;
            de(document.documentElement.style, (function(t, r) {
                tr(r) && e.inspectVarDependant(t, r)
            }))
        }, e.prototype.inspectVarDependant = function(e, t) {
            var r = this;
            er(e) ? this.iterateVarDeps(t, (function(t) {
                r.varRefs.has(e) || r.varRefs.set(e, new Set), r.varRefs.get(e).add(t)
            })) : "background-color" === e || "box-shadow" === e ? this.iterateVarDeps(t, (function(e) {
                return r.resolveVariableType(e, 1)
            })) : "color" === e || "caret-color" === e ? this.iterateVarDeps(t, (function(e) {
                return r.resolveVariableType(e, 2)
            })) : e.startsWith("border") || e.startsWith("outline") ? this.iterateVarDeps(t, (function(e) {
                return r.resolveVariableType(e, 4)
            })) : "background" !== e && "background-image" !== e || this.iterateVarDeps(t, (function(e) {
                if (!r.isVarType(e, 9)) {
                    var t = null != r.findVarRef(e, (function(e) {
                        return r.unknownColorVars.has(e) || r.isVarType(e, 6)
                    }));
                    r.itarateVarRefs(e, (function(e) {
                        t ? r.resolveVariableType(e, 1) : r.unknownBgVars.add(e)
                    }))
                }
            }))
        }, e.prototype.iterateVarDeps = function(e, t) {
            var r = new Set;
            ! function(e, t) {
                Kt(e, (function(e) {
                    return t(e), e
                }))
            }(e, (function(e) {
                return r.add(e)
            })), r.forEach((function(e) {
                return t(e)
            }))
        }, e.prototype.findVarRef = function(e, t, r) {
            var n, a;
            if (void 0 === r && (r = new Set), r.has(e)) return null;
            if (r.add(e), t(e)) return e;
            var i = this.varRefs.get(e);
            if (!i || 0 === i.size) return null;
            try {
                for (var c = o(i), u = c.next(); !u.done; u = c.next()) {
                    var s = u.value,
                        l = this.findVarRef(s, t, r);
                    if (l) return l
                }
            } catch (e) {
                n = {
                    error: e
                }
            } finally {
                try {
                    u && !u.done && (a = c.return) && a.call(c)
                } finally {
                    if (n) throw n.error
                }
            }
            return null
        }, e.prototype.itarateVarRefs = function(e, t) {
            this.findVarRef(e, (function(e) {
                return t(e), !1
            }))
        }, e.prototype.setOnRootVariableChange = function(e) {
            this.onRootVariableDefined = e
        }, e.prototype.putRootVars = function(e, t) {
            var r, n, i = this,
                c = e.sheet;
            c.cssRules.length > 0 && c.deleteRule(0);
            var u = new Map;
            de(document.documentElement.style, (function(e, r) {
                er(e) && (i.isVarType(e, 1) && u.set(Jt(e), ar(r, t)), i.isVarType(e, 2) && u.set(Xt(e), ir(r, t)), i.isVarType(e, 4) && u.set(Yt(e), cr(r, t)), i.subscribeForVarTypeChange(e, i.onRootVariableDefined))
            }));
            var s = [];
            s.push(":root {");
            try {
                for (var l = o(u), d = l.next(); !d.done; d = l.next()) {
                    var f = a(d.value, 2),
                        h = f[0],
                        p = f[1];
                    s.push("    ".concat(h, ": ").concat(p, ";"))
                }
            } catch (e) {
                r = {
                    error: e
                }
            } finally {
                try {
                    d && !d.done && (n = l.return) && n.call(l)
                } finally {
                    if (r) throw r.error
                }
            }
            s.push("}");
            var v = s.join("\n");
            c.insertRule(v)
        }, e
    }());

    function Ht(e, t) {
        void 0 === t && (t = 0);
        var r = e.indexOf("var(", t);
        if (r >= 0) {
            var n = Be(e, r + 3);
            return n ? {
                start: r,
                end: n.end
            } : null
        }
    }

    function Gt(e, t) {
        var r = function(e) {
                for (var t, r = [], n = 0; t = Ht(e, n);) {
                    var o = t.start,
                        a = t.end;
                    r.push({
                        start: o,
                        end: a,
                        value: e.substring(o, a)
                    }), n = t.end + 1
                }
                return r
            }(e),
            n = r.length;
        if (0 === n) return e;
        var o = e.length,
            a = r.map((function(e) {
                return t(e.value)
            })),
            i = [];
        i.push(e.substring(0, r[0].start));
        for (var c = 0; c < n; c++) {
            i.push(a[c]);
            var u = r[c].end,
                s = c < n - 1 ? r[c + 1].start : o;
            i.push(e.substring(u, s))
        }
        return i.join("")
    }

    function Qt(e) {
        var t, r, n = e.indexOf(",");
        return n >= 0 ? (t = e.substring(4, n).trim(), r = e.substring(n + 1, e.length - 1).trim()) : (t = e.substring(4, e.length - 1).trim(), r = ""), {
            name: t,
            fallback: r
        }
    }

    function Kt(e, t, r) {
        return Gt(e, (function(e) {
            var n, o = Qt(e),
                a = o.name,
                i = o.fallback,
                c = t(a);
            return i ? (n = tr(i) ? Kt(i, t, r) : r ? r(i) : i, "var(".concat(c, ", ").concat(n, ")")) : "var(".concat(c, ")")
        }))
    }

    function Jt(e) {
        return "--darkreader-bg".concat(e)
    }

    function Xt(e) {
        return "--darkreader-text".concat(e)
    }

    function Yt(e) {
        return "--darkreader-border".concat(e)
    }

    function Zt(e) {
        return "--darkreader-bgimg".concat(e)
    }

    function er(e) {
        return e.startsWith("--")
    }

    function tr(e) {
        return e.includes("var(")
    }

    function rr(e) {
        return e.match(/^\s*(rgb|hsl)a?\(/)
    }
    var nr = /^\d{1,3}, ?\d{1,3}, ?\d{1,3}$/;

    function or(e, t, r) {
        var n = function(e) {
                if (nr.test(e)) {
                    var t = e.split(","),
                        r = "rgb(";
                    return t.forEach((function(e) {
                        r += "".concat(e.trim(), ", ")
                    })), r = r.substr(0, r.length - 2), {
                        isRaw: !0,
                        color: r += ")"
                    }
                }
                return {
                    isRaw: !1,
                    color: e
                }
            }(e),
            o = n.isRaw,
            a = n.color,
            i = qt(a);
        if (i) {
            var c = r(i, t);
            if (o) {
                var u = qt(c);
                return u ? "".concat(u.r, ", ").concat(u.g, ", ").concat(u.b) : c
            }
            return c
        }
        return a
    }

    function ar(e, t) {
        return or(e, t, tt)
    }

    function ir(e, t) {
        return or(e, t, it)
    }

    function cr(e, t) {
        return or(e, t, ut)
    }

    function ur(e, t, r) {
        void 0 === r && (r = new Set);
        var n = !1,
            o = Gt(e, (function(e) {
                var o = Qt(e),
                    a = o.name,
                    i = o.fallback;
                if (r.has(a)) return n = !0, null;
                r.add(a);
                var c = t.get(a) || i,
                    u = null;
                return c && (u = tr(c) ? ur(c, t, r) : c), u || (n = !0, null)
            }));
        return n ? null : o
    }
    var sr = {
            "background-color": {
                customProp: "--darkreader-inline-bgcolor",
                cssProp: "background-color",
                dataAttr: "data-darkreader-inline-bgcolor"
            },
            "background-image": {
                customProp: "--darkreader-inline-bgimage",
                cssProp: "background-image",
                dataAttr: "data-darkreader-inline-bgimage"
            },
            "border-color": {
                customProp: "--darkreader-inline-border",
                cssProp: "border-color",
                dataAttr: "data-darkreader-inline-border"
            },
            "border-bottom-color": {
                customProp: "--darkreader-inline-border-bottom",
                cssProp: "border-bottom-color",
                dataAttr: "data-darkreader-inline-border-bottom"
            },
            "border-left-color": {
                customProp: "--darkreader-inline-border-left",
                cssProp: "border-left-color",
                dataAttr: "data-darkreader-inline-border-left"
            },
            "border-right-color": {
                customProp: "--darkreader-inline-border-right",
                cssProp: "border-right-color",
                dataAttr: "data-darkreader-inline-border-right"
            },
            "border-top-color": {
                customProp: "--darkreader-inline-border-top",
                cssProp: "border-top-color",
                dataAttr: "data-darkreader-inline-border-top"
            },
            "box-shadow": {
                customProp: "--darkreader-inline-boxshadow",
                cssProp: "box-shadow",
                dataAttr: "data-darkreader-inline-boxshadow"
            },
            color: {
                customProp: "--darkreader-inline-color",
                cssProp: "color",
                dataAttr: "data-darkreader-inline-color"
            },
            fill: {
                customProp: "--darkreader-inline-fill",
                cssProp: "fill",
                dataAttr: "data-darkreader-inline-fill"
            },
            stroke: {
                customProp: "--darkreader-inline-stroke",
                cssProp: "stroke",
                dataAttr: "data-darkreader-inline-stroke"
            },
            "outline-color": {
                customProp: "--darkreader-inline-outline",
                cssProp: "outline-color",
                dataAttr: "data-darkreader-inline-outline"
            },
            "stop-color": {
                customProp: "--darkreader-inline-stopcolor",
                cssProp: "stop-color",
                dataAttr: "data-darkreader-inline-stopcolor"
            }
        },
        lr = Object.values(sr),
        dr = {};
    lr.forEach((function(e) {
        var t = e.cssProp,
            r = e.customProp;
        return dr[r] = t
    }));
    var fr = ["style", "fill", "stop-color", "stroke", "bgcolor", "color"],
        hr = fr.map((function(e) {
            return "[".concat(e, "]")
        })).join(", ");

    function pr() {
        return lr.map((function(e) {
            var t = e.dataAttr,
                r = e.customProp,
                n = e.cssProp;
            return ["[".concat(t, "] {"), "  ".concat(n, ": var(").concat(r, ") !important;"), "}"].join("\n")
        })).join("\n")
    }
    var vr = new Map,
        mr = new Map;

    function gr(e, t, r) {
        vr.has(e) && (vr.get(e).disconnect(), mr.get(e).disconnect());
        var n = new WeakSet;

        function o(e) {
            (function(e) {
                var t = [];
                return e instanceof Element && e.matches(hr) && t.push(e), (e instanceof Element || b && e instanceof ShadowRoot || e instanceof Document) && N(t, e.querySelectorAll(hr)), t
            })(e).forEach((function(e) {
                n.has(e) || (n.add(e), t(e))
            })), z(e, (function(o) {
                n.has(e) || (n.add(e), r(o.shadowRoot), gr(o.shadowRoot, t, r))
            }))
        }
        var c = ne(e, {
            onMinorMutations: function(e) {
                e.additions.forEach((function(e) {
                    return o(e)
                }))
            },
            onHugeMutations: function() {
                o(e)
            }
        });
        vr.set(e, c);
        var u = 0,
            s = null,
            l = W({
                seconds: 10
            }),
            d = W({
                seconds: 2
            }),
            f = [],
            h = null,
            p = I((function(e) {
                e.forEach((function(e) {
                    fr.includes(e.attributeName) && t(e.target)
                }))
            })),
            v = new MutationObserver((function(e) {
                if (h) f.push.apply(f, i([], a(e), !1));
                else {
                    u++;
                    var t = Date.now();
                    if (null == s) s = t;
                    else if (u >= 50) {
                        if (t - s < l) return h = setTimeout((function() {
                            s = null, u = 0, h = null;
                            var e = f;
                            f = [], p(e)
                        }), d), void f.push.apply(f, i([], a(e), !1));
                        s = t, u = 1
                    }
                    p(e)
                }
            }));
        v.observe(e, {
            attributes: !0,
            attributeFilter: fr.concat(lr.map((function(e) {
                return e.dataAttr
            }))),
            subtree: !0
        }), mr.set(e, v)
    }
    var br = new WeakMap,
        yr = ["brightness", "contrast", "grayscale", "sepia", "mode"];

    function kr(e, t) {
        return fr.map((function(t) {
            return "".concat(t, '="').concat(e.getAttribute(t), '"')
        })).concat(yr.map((function(e) {
            return "".concat(e, '="').concat(t[e], '"')
        }))).join(" ")
    }

    function wr(e, t, r, n) {
        if (kr(e, t) !== br.get(e)) {
            var o = new Set(Object.keys(sr));
            if (r.length > 0 && function(e, t) {
                    for (var r = 0, n = t.length; r < n; r++) {
                        var o = t[r];
                        if (e.matches(o)) return !0
                    }
                    return !1
                }(e, r)) o.forEach((function(t) {
                e.removeAttribute(sr[t].dataAttr)
            }));
            else {
                if (e.hasAttribute("bgcolor"))((c = e.getAttribute("bgcolor")).match(/^[0-9a-f]{3}$/i) || c.match(/^[0-9a-f]{6}$/i)) && (c = "#".concat(c)), u("background-color", "background-color", c);
                if (e.hasAttribute("color") && "mask-icon" !== e.rel)((c = e.getAttribute("color")).match(/^[0-9a-f]{3}$/i) || c.match(/^[0-9a-f]{6}$/i)) && (c = "#".concat(c)), u("color", "color", c);
                if (e instanceof SVGElement) {
                    if (e.hasAttribute("fill")) {
                        var a = e.getAttribute("fill");
                        if ("none" !== a)
                            if (e instanceof SVGTextElement) u("fill", "color", a);
                            else {
                                var i = function() {
                                    var t = e.getBoundingClientRect(),
                                        r = t.width,
                                        n = t.height;
                                    u("fill", r > 32 || n > 32 ? "background-color" : "color", a)
                                };
                                J() ? i() : Y(i)
                            }
                    }
                    e.hasAttribute("stop-color") && u("stop-color", "background-color", e.getAttribute("stop-color"))
                }
                if (e.hasAttribute("stroke")) {
                    var c = e.getAttribute("stroke");
                    u("stroke", e instanceof SVGLineElement || e instanceof SVGTextElement ? "border-color" : "color", c)
                }
                e.style && de(e.style, (function(t, r) {
                    if ("background-image" !== t || !r.includes("url"))
                        if (sr.hasOwnProperty(t) || t.startsWith("--") && !dr[t]) u(t, t, r);
                        else {
                            var n = dr[t];
                            if (n && !e.style.getPropertyValue(n) && !e.hasAttribute(n)) {
                                if ("background-color" === n && e.hasAttribute("bgcolor")) return;
                                e.style.setProperty(t, "")
                            }
                        }
                })), e.style && e instanceof SVGTextElement && e.style.fill && u("fill", "color", e.style.getPropertyValue("fill")), F(o, (function(t) {
                    e.removeAttribute(sr[t].dataAttr)
                })), br.set(e, kr(e, t))
            }
        }

        function u(r, a, i) {
            var c = r.startsWith("--"),
                u = c ? {} : sr[r],
                s = u.customProp,
                l = u.dataAttr,
                d = Lt(a, i, {}, zt, n, null);
            if (d) {
                var f = d.value;
                if ("function" == typeof f && (f = f(t)), c && "object" == typeof f) f.declarations.forEach((function(t) {
                    var r = t.property,
                        n = t.value;
                    !(n instanceof Promise) && e.style.setProperty(r, n)
                }));
                else e.style.setProperty(s, f), e.hasAttribute(l) || e.setAttribute(l, ""), o.delete(r)
            }
        }
    }
    var Sr = "theme-color",
        _r = 'meta[name="'.concat(Sr, '"]'),
        Er = null,
        xr = null;

    function Cr(e, t) {
        Er = Er || e.content;
        try {
            var r = xe(Er);
            e.content = tt(r, t)
        } catch (e) {
            B(e)
        }
    }
    var Vr = ["mode", "brightness", "contrast", "grayscale", "sepia", "darkSchemeBackgroundColor", "darkSchemeTextColor", "lightSchemeBackgroundColor", "lightSchemeTextColor"];
    var Rr = function() {
        var e = [],
            t = null;

        function r() {
            for (var r; r = e.shift();) r();
            t = null
        }
        return {
            add: function(n) {
                e.push(n), t || (t = requestAnimationFrame(r))
            },
            cancel: function() {
                e.splice(0), cancelAnimationFrame(t), t = null
            }
        }
    }();

    function Tr() {
        var e = 0,
            t = new Set,
            r = new Map,
            n = new Set,
            o = null,
            c = !1,
            u = !1;
        return {
            modifySheet: function(s) {
                var l = s.sourceCSSRules,
                    d = s.theme,
                    f = s.ignoreImageAnalysis,
                    h = s.force,
                    p = s.prepareSheet,
                    v = s.isAsyncCancelled,
                    m = 0 === r.size,
                    g = new Set(r.keys()),
                    b = function(e) {
                        var t = "";
                        return Vr.forEach((function(r) {
                            t += "".concat(r, ":").concat(e[r], ";")
                        })), t
                    }(d),
                    y = b !== o;
                c && (u = !0);
                var k = [];
                if (ue(l, (function(e) {
                        var n = e.cssText,
                            o = !1;
                        if (g.delete(n), e.parentRule instanceof CSSMediaRule && (n += ";".concat(e.parentRule.media.mediaText)), t.has(n) || (t.add(n), o = !0), o) {
                            m = !0;
                            var a = [];
                            e.style && de(e.style, (function(t, r) {
                                var n = Lt(t, r, e, zt, f, v);
                                n && a.push(n)
                            }));
                            var i = null;
                            if (a.length > 0) {
                                var c = e.parentRule;
                                i = {
                                    selector: e.selectorText,
                                    declarations: a,
                                    parentRule: c
                                }, k.push(i)
                            }
                            r.set(n, i)
                        } else k.push(r.get(n))
                    }), (function() {
                        c = !0
                    })), g.forEach((function(e) {
                        t.delete(e), r.delete(e)
                    })), o = b, h || m || y) {
                    e++;
                    var w = new Map,
                        S = new Map,
                        _ = 0,
                        E = 0,
                        x = {
                            rule: null,
                            rules: [],
                            isGroup: !0
                        },
                        C = new WeakMap;
                    n.forEach((function(e) {
                        return e()
                    })), n.clear(), k.filter((function(e) {
                        return e
                    })).forEach((function(t) {
                        var r = t.selector,
                            o = t.declarations,
                            c = T(t.parentRule),
                            u = {
                                selector: r,
                                declarations: [],
                                isGroup: !1
                            },
                            s = u.declarations;

                        function l(t, r, n, o) {
                            var a = ++_,
                                i = {
                                    property: t,
                                    value: null,
                                    important: n,
                                    asyncKey: a,
                                    sourceValue: o
                                };
                            s.push(i);
                            var c = e;
                            r.then((function(t) {
                                t && !v() && c === e && (i.value = t, Rr.add((function() {
                                    v() || c !== e || function(e) {
                                        var t = w.get(e),
                                            r = t.rule,
                                            n = t.target,
                                            o = t.index;
                                        n.deleteRule(o), R(n, o, r), w.delete(e)
                                    }(a)
                                })))
                            }))
                        }

                        function f(t, r, o, c) {
                            var u = r,
                                d = u.declarations,
                                f = u.onTypeChange,
                                h = ++E,
                                p = e,
                                m = s.length,
                                g = [];
                            if (0 === d.length) {
                                var b = {
                                    property: t,
                                    value: c,
                                    important: o,
                                    sourceValue: c,
                                    varKey: h
                                };
                                s.push(b), g = [b]
                            }
                            d.forEach((function(e) {
                                if (e.value instanceof Promise) l(e.property, e.value, o, c);
                                else {
                                    var t = {
                                        property: e.property,
                                        value: e.value,
                                        important: o,
                                        sourceValue: c,
                                        varKey: h
                                    };
                                    s.push(t), g.push(t)
                                }
                            })), f.addListener((function(t) {
                                if (!v() && p === e) {
                                    var r = t.map((function(e) {
                                            return {
                                                property: e.property,
                                                value: e.value,
                                                important: o,
                                                sourceValue: c,
                                                varKey: h
                                            }
                                        })),
                                        n = s.indexOf(g[0], m);
                                    s.splice.apply(s, i([n, g.length], a(r), !1)), g = r,
                                        function(e) {
                                            var t = S.get(e),
                                                r = t.rule,
                                                n = t.target,
                                                o = t.index;
                                            n.deleteRule(o), R(n, o, r)
                                        }(h)
                                }
                            })), n.add((function() {
                                return f.removeListeners()
                            }))
                        }
                        c.rules.push(u), o.forEach((function(e) {
                            var t = e.property,
                                r = e.value,
                                n = e.important,
                                o = e.sourceValue;
                            if ("function" == typeof r) {
                                var a = r(d);
                                a instanceof Promise ? l(t, a, n, o) : t.startsWith("--") ? f(t, a, n, o) : s.push({
                                    property: t,
                                    value: a,
                                    important: n,
                                    sourceValue: o
                                })
                            } else s.push({
                                property: t,
                                value: r,
                                important: n,
                                sourceValue: o
                            })
                        }))
                    }));
                    var V = p();
                    ! function e(t, r, n) {
                        t.rules.forEach((function(t) {
                            if (t.isGroup) {
                                var o = function(e, t) {
                                    var r = e.rule;
                                    if (r instanceof CSSMediaRule) {
                                        var n = r.media,
                                            o = t.cssRules.length;
                                        return t.insertRule("@media ".concat(n.mediaText, " {}"), o), t.cssRules[o]
                                    }
                                    return t
                                }(t, r);
                                e(t, o, n)
                            } else n(t, r)
                        }))
                    }(x, V, (function(e, t) {
                        var r = t.cssRules.length;
                        e.declarations.forEach((function(n) {
                            var o = n.asyncKey,
                                a = n.varKey;
                            null != o && w.set(o, {
                                rule: e,
                                target: t,
                                index: r
                            }), null != a && S.set(a, {
                                rule: e,
                                target: t,
                                index: r
                            })
                        })), R(t, r, e)
                    }))
                }

                function R(e, t, r) {
                    var n = r.selector,
                        o = r.declarations,
                        a = "";
                    o.forEach((function(e) {
                        var t, r, n, o, i;
                        a += "".concat((r = (t = e).property, n = t.value, o = t.important, i = t.sourceValue, "".concat(r, ": ").concat(null == n ? i : n).concat(o ? " !important" : "", ";")), " ")
                    }));
                    var i = "".concat(n, " { ").concat(a, " }");
                    e.insertRule(i, t)
                }

                function T(e) {
                    if (null == e) return x;
                    if (C.has(e)) return C.get(e);
                    var t = {
                        rule: e,
                        rules: [],
                        isGroup: !0
                    };
                    return C.set(e, t), T(e.parentRule).rules.push(t), t
                }
            },
            shouldRebuildStyle: function() {
                return c && !u
            }
        }
    }

    function Mr(e) {
        return (e instanceof HTMLStyleElement || e instanceof SVGStyleElement || e instanceof HTMLLinkElement && e.rel && e.rel.toLowerCase().includes("stylesheet") && !e.disabled && (!h || !e.href.startsWith("moz-extension://"))) && !e.classList.contains("darkreader") && "print" !== e.media.toLowerCase() && !e.classList.contains("stylus")
    }

    function Lr(e, t, r) {
        return void 0 === t && (t = []), void 0 === r && (r = !0), Mr(e) ? t.push(e) : (e instanceof Element || b && e instanceof ShadowRoot || e === document) && (F(e.querySelectorAll('style, link[rel*="stylesheet" i]:not([disabled])'), (function(e) {
            return Lr(e, t, !1)
        })), r && z(e, (function(e) {
            return Lr(e.shadowRoot, t, !1)
        }))), t
    }
    var Ar = new WeakSet,
        Pr = new WeakSet,
        Or = !1;
    document.addEventListener("__darkreader__inlineScriptsAllowed", (function() {
        Or = !0
    }));
    var jr = 0,
        Dr = new Map;

    function Fr(e, t) {
        for (var o = t.update, i = t.loadingStart, c = t.loadingEnd, u = [], s = e;
            (s = s.nextElementSibling) && s.matches(".darkreader");) u.push(s);
        var l = u.find((function(e) {
                return e.matches(".darkreader--cors") && !Pr.has(e)
            })) || null,
            d = u.find((function(e) {
                return e.matches(".darkreader--sync") && !Ar.has(e)
            })) || null,
            h = null,
            v = null,
            m = !1,
            g = !0,
            b = Tr(),
            y = new MutationObserver((function() {
                o()
            })),
            k = {
                attributes: !0,
                childList: !0,
                subtree: !0,
                characterData: !0
            };

        function w() {
            return e instanceof HTMLStyleElement && e.textContent.trim().match(he)
        }

        function S(e, t) {
            var r = !1;
            if (e) {
                var n = void 0;
                e: for (var o = 0, a = e.length; o < a; o++)
                    if ((n = e[o]).href) {
                        if (!t) {
                            r = !0;
                            break e
                        }
                        if (n.href.startsWith("http") && !n.href.startsWith(location.origin)) {
                            r = !0;
                            break e
                        }
                    }
            }
            return r
        }

        function _() {
            if (l) return q("[getRulesSync] Using cors-copy."), l.sheet.cssRules;
            if (w()) return q("[getRulesSync] CSSImport detected."), null;
            var t = L();
            return e instanceof HTMLLinkElement && ! function(e) {
                if (e.startsWith("data:")) return !0;
                var t = ie(e);
                return t.protocol === location.protocol && t.hostname === location.hostname && t.port === location.port && t.pathname === location.pathname
            }(e.href) && S(t, !1) ? (q("[getRulesSync] CSSImportRule detected on non-local href."), null) : S(t, !0) ? (q("[getRulesSync] Cross-Origin CSSImportRule detected."), null) : (q("[getRulesSync] Using cssRules."), !t && B("[getRulesSync] cssRules is null, trying again."), t)
        }

        function E() {
            l ? (e.nextSibling !== l && e.parentNode.insertBefore(l, e.nextSibling), l.nextSibling !== d && e.parentNode.insertBefore(d, l.nextSibling)) : e.nextSibling !== d && e.parentNode.insertBefore(d, e.nextSibling)
        }
        var x = !1,
            C = !1,
            V = ++jr;

        function R() {
            return r(this, void 0, void 0, (function() {
                var t, r, o, i, c, u, s;
                return n(this, (function(n) {
                    switch (n.label) {
                        case 0:
                            if (!(e instanceof HTMLLinkElement)) return [3, 7];
                            if (o = a(M(), 2), i = o[0], (c = o[1]) && B(c), !(!i && !c && !p || p && !e.sheet || (d = c, d && d.message && d.message.includes("loading")))) return [3, 5];
                            n.label = 1;
                        case 1:
                            return n.trys.push([1, 3, , 4]), q("Linkelement ".concat(V, " is not loaded yet and thus will be await for"), e), [4, Nr(e, V)];
                        case 2:
                            return n.sent(), [3, 4];
                        case 3:
                            return B(n.sent()), C = !0, [3, 4];
                        case 4:
                            if (m) return [2, null];
                            s = a(M(), 2), i = s[0], (c = s[1]) && B(c), n.label = 5;
                        case 5:
                            return i && !S(i, !1) ? [2, i] : [4, qr(e.href)];
                        case 6:
                            return t = n.sent(), r = ve(e.href), m ? [2, null] : [3, 8];
                        case 7:
                            if (!w()) return [2, null];
                            t = e.textContent.trim(), r = ve(location.href), n.label = 8;
                        case 8:
                            if (!t) return [3, 13];
                            n.label = 9;
                        case 9:
                            return n.trys.push([9, 11, , 12]), [4, Br(t, r)];
                        case 10:
                            return u = n.sent(), l = function(e, t) {
                                if (!t) return null;
                                var r = document.createElement("style");
                                return r.classList.add("darkreader"), r.classList.add("darkreader--cors"), r.media = "screen", r.textContent = t, e.parentNode.insertBefore(r, e.nextSibling), r.sheet.disabled = !0, Pr.add(r), r
                            }(e, u), [3, 12];
                        case 11:
                            return B(n.sent()), [3, 12];
                        case 12:
                            if (l) return h = $(l, "prev-sibling"), [2, l.sheet.cssRules];
                            n.label = 13;
                        case 13:
                            return [2, null]
                    }
                    var d
                }))
            }))
        }
        var T = !1;

        function M() {
            try {
                return null == e.sheet ? [null, null] : [e.sheet.cssRules, null]
            } catch (e) {
                return [null, e]
            }
        }

        function L() {
            var e = a(M(), 2),
                t = e[0],
                r = e[1];
            return r ? (B(r), null) : t
        }

        function A() {
            e.addEventListener("__darkreader__updateSheet", N), f || Or && e.sheet || function() {
                P = j(), D();
                var t = function() {
                    j() !== P && (P = j(), o()), Or && e.sheet ? D() : O = requestAnimationFrame(t)
                };
                t()
            }()
        }
        var P = null,
            O = null;

        function j() {
            var e = L();
            return e ? e.length : null
        }

        function D() {
            cancelAnimationFrame(O)
        }
        var F = !1;

        function N() {
            function e() {
                F = !1, m || o()
            }
            Or = !0, D(), F || (F = !0, "function" == typeof queueMicrotask ? queueMicrotask(e) : requestAnimationFrame(e))
        }

        function I() {
            e.removeEventListener("__darkreader__updateSheet", N), D()
        }

        function W() {
            y.disconnect(), m = !0, h && h.stop(), v && v.stop(), I()
        }
        var z = 0;
        return {
            details: function(e) {
                var t = _();
                return t ? {
                    rules: t
                } : e.secondRound ? (B("Detected dead-lock at details(), returning early to prevent it."), null) : (x || C || (x = !0, i(), R().then((function(e) {
                    x = !1, c(), e && o()
                })).catch((function(e) {
                    B(e), x = !1, c()
                }))), null)
            },
            render: function(t, r) {
                var n = _();

                function a() {
                    return d || ((d = e instanceof SVGStyleElement ? document.createElementNS("http://www.w3.org/2000/svg", "style") : document.createElement("style")).classList.add("darkreader"), d.classList.add("darkreader--sync"), d.media = "screen", e.title && (d.title = e.title), Ar.add(d)), v && v.stop(), E(), null == d.sheet && (d.textContent = ""),
                        function(e) {
                            try {
                                if (e.replaceSync) return void e.replaceSync("")
                            } catch (e) {
                                B("Could not use fastpath for removing rules from stylesheet", e)
                            }
                            for (var t = e.cssRules.length - 1; t >= 0; t--) e.deleteRule(t)
                        }(d.sheet), v ? v.run() : v = $(d, "prev-sibling", (function() {
                            T = !0, i()
                        })), d.sheet
                }

                function i() {
                    var e = T;
                    T = !1, b.modifySheet({
                        prepareSheet: a,
                        sourceCSSRules: n,
                        theme: t,
                        ignoreImageAnalysis: r,
                        force: e,
                        isAsyncCancelled: function() {
                            return m
                        }
                    }), g = 0 === d.sheet.cssRules.length, b.shouldRebuildStyle() && Y((function() {
                        return o()
                    }))
                }
                n && (m = !1, i())
            },
            pause: W,
            destroy: function() {
                if (W(), U(l), U(d), c(), Dr.has(V)) {
                    var e = Dr.get(V);
                    Dr.delete(V), e && e()
                }
            },
            watch: function() {
                y.observe(e, k), e instanceof HTMLStyleElement && A()
            },
            restore: function() {
                d && (++z > 10 ? B("Style sheet was moved multiple times", e) : (B("Restore style", d, e), E(), h && h.skip(), v && v.skip(), g || (T = !0, o())))
            }
        }
    }

    function Nr(e, t) {
        return r(this, void 0, void 0, (function() {
            return n(this, (function(r) {
                return [2, new Promise((function(r, n) {
                    var o = function() {
                            e.removeEventListener("load", a), e.removeEventListener("error", i), Dr.delete(t)
                        },
                        a = function() {
                            o(), q("Linkelement ".concat(t, " has been loaded")), r()
                        },
                        i = function() {
                            o(), n("Linkelement ".concat(t, " couldn't be loaded. ").concat(e.href))
                        };
                    Dr.set(t, (function() {
                        o(), n()
                    })), e.addEventListener("load", a), e.addEventListener("error", i), e.href || i()
                }))]
            }))
        }))
    }

    function qr(e) {
        return r(this, void 0, void 0, (function() {
            return n(this, (function(t) {
                switch (t.label) {
                    case 0:
                        return e.startsWith("data:") ? [4, fetch(e)] : [3, 3];
                    case 1:
                        return [4, t.sent().text()];
                    case 2:
                    case 4:
                        return [2, t.sent()];
                    case 3:
                        return [4, pt({
                            url: e,
                            responseType: "text",
                            mimeType: "text/css",
                            origin: window.location.origin
                        })]
                }
            }))
        }))
    }

    function Br(e, t, a) {
        return void 0 === a && (a = new Map), r(this, void 0, void 0, (function() {
            var r, i, c, u, s, l, d, f, h, p;
            return n(this, (function(n) {
                switch (n.label) {
                    case 0:
                        e = function(e, t) {
                            return e.replace(fe, (function(e) {
                                var r = pe(e);
                                try {
                                    return 'url("'.concat(ce(t, r), '")')
                                } catch (t) {
                                    return B("Not able to replace relative URL with Absolute URL, skipping"), e
                                }
                            }))
                        }(e = function(e) {
                            return e.replace(ge, "")
                        }(e = e.replace(me, "")), t), r = qe(he, e), n.label = 1;
                    case 1:
                        n.trys.push([1, 10, 11, 12]), i = o(r), c = i.next(), n.label = 2;
                    case 2:
                        return c.done ? [3, 9] : (u = c.value, s = pe(u.substring(7).trim().replace(/;$/, "").replace(/screen$/, "")), l = ce(t, s), d = void 0, a.has(l) ? (d = a.get(l), [3, 7]) : [3, 3]);
                    case 3:
                        return n.trys.push([3, 6, , 7]), [4, qr(l)];
                    case 4:
                        return d = n.sent(), a.set(l, d), [4, Br(d, ve(l), a)];
                    case 5:
                        return d = n.sent(), [3, 7];
                    case 6:
                        return B(n.sent()), d = "", [3, 7];
                    case 7:
                        e = e.split(u).join(d), n.label = 8;
                    case 8:
                        return c = i.next(), [3, 2];
                    case 9:
                        return [3, 12];
                    case 10:
                        return f = n.sent(), h = {
                            error: f
                        }, [3, 12];
                    case 11:
                        try {
                            c && !c.done && (p = i.return) && p.call(i)
                        } finally {
                            if (h) throw h.error
                        }
                        return [7];
                    case 12:
                        return [2, e = e.trim()]
                }
            }))
        }))
    }
    var Ir, Wr, Ur = [],
        $r = new Map;

    function zr(e) {
        k && F(e.querySelectorAll(":not(:defined)"), (function(e) {
            var t = e.tagName.toLowerCase();
            if (!t.includes("-")) {
                var o = e.getAttribute("is");
                if (!o) return;
                t = o
            }
            $r.has(t) || ($r.set(t, new Set), function(e) {
                return r(this, void 0, void 0, (function() {
                    return n(this, (function(t) {
                        return [2, new Promise((function(t) {
                            if (window.customElements && "function" == typeof customElements.whenDefined) customElements.whenDefined(e).then((function() {
                                return t()
                            }));
                            else if (Hr) Gr.set(e, t), document.dispatchEvent(new CustomEvent("__darkreader__addUndefinedResolver", {
                                detail: {
                                    tag: e
                                }
                            }));
                            else {
                                var r = function() {
                                    var n = $r.get(e);
                                    n && n.size > 0 && (n.values().next().value.matches(":defined") ? t() : requestAnimationFrame(r))
                                };
                                requestAnimationFrame(r)
                            }
                        }))]
                    }))
                }))
            }(t).then((function() {
                if (Wr) {
                    var e = $r.get(t);
                    $r.delete(t), Wr(Array.from(e))
                }
            }))), $r.get(t).add(e)
        }))
    }
    var Hr = !1;
    document.addEventListener("__darkreader__inlineScriptsAllowed", (function() {
        Hr = !0
    }));
    var Gr = new Map;

    function Qr(e) {
        (Hr = !0, Gr.has(e.detail.tag)) && Gr.get(e.detail.tag)()
    }

    function Kr(e, t, r) {
        Jr();
        var n = new Set(e),
            o = new WeakMap,
            a = new WeakMap;

        function i(e) {
            o.set(e, e.previousElementSibling), a.set(e, e.nextElementSibling)
        }

        function c(e) {
            var r = e.createdStyles,
                c = e.removedStyles,
                u = e.movedStyles;
            r.forEach((function(e) {
                return i(e)
            })), u.forEach((function(e) {
                return i(e)
            })), c.forEach((function(e) {
                return t = e, o.delete(t), void a.delete(t);
                var t
            })), r.forEach((function(e) {
                return n.add(e)
            })), c.forEach((function(e) {
                return n.delete(e)
            })), r.size + c.size + u.size > 0 && t({
                created: Array.from(r),
                removed: Array.from(c),
                moved: Array.from(u),
                updated: []
            })
        }

        function u(e) {
            var t = e.additions,
                r = e.moves,
                n = e.deletions,
                o = new Set,
                a = new Set,
                i = new Set;
            t.forEach((function(e) {
                return Lr(e).forEach((function(e) {
                    return o.add(e)
                }))
            })), n.forEach((function(e) {
                return Lr(e).forEach((function(e) {
                    return a.add(e)
                }))
            })), r.forEach((function(e) {
                return Lr(e).forEach((function(e) {
                    return i.add(e)
                }))
            })), c({
                createdStyles: o,
                removedStyles: a,
                movedStyles: i
            }), t.forEach((function(e) {
                z(e, f), zr(e)
            }))
        }

        function s(e) {
            var t = new Set(Lr(e)),
                r = new Set,
                i = new Set,
                u = new Set;
            t.forEach((function(e) {
                n.has(e) || r.add(e)
            })), n.forEach((function(e) {
                t.has(e) || i.add(e)
            })), t.forEach((function(e) {
                var t;
                r.has(e) || i.has(e) || (t = e).previousElementSibling === o.get(t) && t.nextElementSibling === a.get(t) || u.add(e)
            })), c({
                createdStyles: r,
                removedStyles: i,
                movedStyles: u
            }), z(e, f), zr(e)
        }

        function l(e) {
            var r = new Set,
                n = new Set;
            e.forEach((function(e) {
                var t = e.target;
                t.isConnected && (Mr(t) ? r.add(t) : t instanceof HTMLLinkElement && t.disabled && n.add(t))
            })), r.size + n.size > 0 && t({
                updated: Array.from(r),
                created: [],
                removed: Array.from(n),
                moved: []
            })
        }

        function d(e) {
            var t = ne(e, {
                    onMinorMutations: u,
                    onHugeMutations: s
                }),
                r = new MutationObserver(l);
            r.observe(e, {
                attributes: !0,
                attributeFilter: ["rel", "disabled", "media"],
                subtree: !0
            }), Ur.push(t, r), Ir.add(e)
        }

        function f(e) {
            var t = e.shadowRoot;
            null == t || Ir.has(t) || (d(t), r(t))
        }
        e.forEach(i), d(document), z(document.documentElement, f), Wr = function(e) {
            var r = [];
            e.forEach((function(e) {
                return N(r, Lr(e.shadowRoot))
            })), t({
                created: r,
                updated: [],
                removed: [],
                moved: []
            }), e.forEach((function(e) {
                var t = e.shadowRoot;
                null != t && (f(e), z(t, f), zr(t))
            }))
        }, document.addEventListener("__darkreader__isDefined", Qr), zr(document)
    }

    function Jr() {
        Ur.forEach((function(e) {
            return e.disconnect()
        })), Ur.splice(0, Ur.length), Ir = new WeakSet, Wr = null, $r.clear(), document.removeEventListener("__darkreader__isDefined", Qr)
    }
    var Xr = new WeakMap,
        Yr = new WeakSet;

    function Zr(e) {
        var t = !1;
        return {
            render: function(r, n) {
                e.adoptedStyleSheets.forEach((function(o) {
                    if (!Yr.has(o)) {
                        var c = o.rules,
                            u = new CSSStyleSheet;
                        Tr().modifySheet({
                            prepareSheet: function() {
                                for (var t = u.cssRules.length - 1; t >= 0; t--) u.deleteRule(t);
                                return function(t, r) {
                                    var n = i([], a(e.adoptedStyleSheets), !1),
                                        o = n.indexOf(t),
                                        c = n.indexOf(r);
                                    o !== c - 1 && (c >= 0 && n.splice(c, 1), n.splice(o + 1, 0, r), e.adoptedStyleSheets = n)
                                }(o, u), Xr.set(o, u), Yr.add(u), u
                            },
                            sourceCSSRules: c,
                            theme: r,
                            ignoreImageAnalysis: n,
                            force: !1,
                            isAsyncCancelled: function() {
                                return t
                            }
                        })
                    }
                }))
            },
            destroy: function() {
                t = !0;
                var r = i([], a(e.adoptedStyleSheets), !1);
                e.adoptedStyleSheets.forEach((function(e) {
                    if (Yr.has(e)) {
                        var t = r.indexOf(e);
                        t >= 0 && r.splice(t, 1), Xr.delete(e), Yr.delete(e)
                    }
                })), e.adoptedStyleSheets = r
            }
        }
    }

    function en(e) {
        document.dispatchEvent(new CustomEvent("__darkreader__inlineScriptsAllowed"));
        var t = Object.getOwnPropertyDescriptor(CSSStyleSheet.prototype, "addRule"),
            r = Object.getOwnPropertyDescriptor(CSSStyleSheet.prototype, "insertRule"),
            n = Object.getOwnPropertyDescriptor(CSSStyleSheet.prototype, "deleteRule"),
            o = Object.getOwnPropertyDescriptor(CSSStyleSheet.prototype, "removeRule"),
            c = e ? Object.getOwnPropertyDescriptor(Document.prototype, "styleSheets") : null,
            u = location.hostname.endsWith("baidu.com"),
            s = u ? Object.getOwnPropertyDescriptor(Element.prototype, "getElementsByTagName") : null,
            l = function() {
                Object.defineProperty(CSSStyleSheet.prototype, "addRule", t), Object.defineProperty(CSSStyleSheet.prototype, "insertRule", r), Object.defineProperty(CSSStyleSheet.prototype, "deleteRule", n), Object.defineProperty(CSSStyleSheet.prototype, "removeRule", o), document.removeEventListener("__darkreader__cleanUp", l), document.removeEventListener("__darkreader__addUndefinedResolver", d), e && Object.defineProperty(Document.prototype, "styleSheets", c), u && Object.defineProperty(Element.prototype, "getElementsByTagName", s)
            },
            d = function(e) {
                customElements.whenDefined(e.detail.tag).then((function() {
                    document.dispatchEvent(new CustomEvent("__darkreader__isDefined", {
                        detail: {
                            tag: e.detail.tag
                        }
                    }))
                }))
            };
        document.addEventListener("__darkreader__cleanUp", l), document.addEventListener("__darkreader__addUndefinedResolver", d);
        var f = new Event("__darkreader__updateSheet");
        Object.defineProperty(CSSStyleSheet.prototype, "addRule", Object.assign({}, t, {
            value: function(e, r, n) {
                return t.value.call(this, e, r, n), this.ownerNode && !this.ownerNode.classList.contains("darkreader") && this.ownerNode.dispatchEvent(f), -1
            }
        })), Object.defineProperty(CSSStyleSheet.prototype, "insertRule", Object.assign({}, r, {
            value: function(e, t) {
                var n = r.value.call(this, e, t);
                return this.ownerNode && !this.ownerNode.classList.contains("darkreader") && this.ownerNode.dispatchEvent(f), n
            }
        })), Object.defineProperty(CSSStyleSheet.prototype, "deleteRule", Object.assign({}, n, {
            value: function(e) {
                n.value.call(this, e), this.ownerNode && !this.ownerNode.classList.contains("darkreader") && this.ownerNode.dispatchEvent(f)
            }
        })), Object.defineProperty(CSSStyleSheet.prototype, "removeRule", Object.assign({}, o, {
            value: function(e) {
                o.value.call(this, e), this.ownerNode && !this.ownerNode.classList.contains("darkreader") && this.ownerNode.dispatchEvent(f)
            }
        })), e && Object.defineProperty(Document.prototype, "styleSheets", Object.assign({}, c, {
            get: function() {
                var e = this,
                    t = function() {
                        var t = i([], a(c.get.call(e)), !1).filter((function(e) {
                            return !e.ownerNode.classList.contains("darkreader")
                        }));
                        return t.item = function(e) {
                            return t[e]
                        }, Object.setPrototypeOf(t, StyleSheetList.prototype)
                    },
                    r = t();
                return new Proxy(r, {
                    get: function(e, r) {
                        return t()[r]
                    }
                })
            }
        })), u && Object.defineProperty(Element.prototype, "getElementsByTagName", Object.assign({}, s, {
            value: function(e) {
                var t = this;
                if ("style" !== e) return s.value.call(this, e);
                var r = function() {
                        var r = s.value.call(t, e);
                        return Object.setPrototypeOf(i([], a(r), !1).filter((function(e) {
                            return !e.classList.contains("darkreader")
                        })), NodeList.prototype)
                    },
                    n = r();
                return new Proxy(n, {
                    get: function(e, t) {
                        return r()[Number(t) || t]
                    }
                })
            }
        }))
    }
    var tn = function() {
            if ("randomUUID" in crypto) {
                var e = crypto.randomUUID();
                return e.substring(0, 8) + e.substring(9, 13) + e.substring(14, 18) + e.substring(19, 23) + e.substring(24)
            }
            return Array.from(crypto.getRandomValues(new Uint8Array(16))).map((function(e) {
                return ((t = e) < 16 ? "0" : "") + t.toString(16);
                var t
            })).join("")
        }(),
        rn = new Map,
        nn = [],
        on = null,
        an = null,
        cn = null,
        un = null,
        sn = null;

    function ln(e, t) {
        void 0 === t && (t = document.head || document);
        var r = t.querySelector(".".concat(e));
        return r || ((r = document.createElement("style")).classList.add("darkreader"), r.classList.add(e), r.media = "screen", r.textContent = ""), r
    }
    var dn = new Map;

    function fn(e, t) {
        dn.has(t) && dn.get(t).stop(), dn.set(t, $(e, "parent"))
    }

    function hn() {
        var e = ln("darkreader--fallback", document);
        e.textContent = jt(on, {
            strict: !0
        }), document.head.insertBefore(e, document.head.firstChild), fn(e, "fallback");
        var r = ln("darkreader--user-agent");
        r.textContent = Pt(on, cn, on.styleSystemControls), document.head.insertBefore(r, e.nextSibling), fn(r, "user-agent");
        var n, o, a = ln("darkreader--text");
        on.useFont || on.textStroke > 0 ? a.textContent = (n = on, (o = []).push('*:not(pre, pre *, code, .far, .fa, .glyphicon, [class*="vjs-"], .fab, .fa-github, .fas, .material-icons, .icofont, .typcn, mu, [class*="mu-"], .glyphicon, .icon) {'), n.useFont && n.fontFamily && o.push("  font-family: ".concat(n.fontFamily, " !important;")), n.textStroke > 0 && (o.push("  -webkit-text-stroke: ".concat(n.textStroke, "px !important;")), o.push("  text-stroke: ".concat(n.textStroke, "px !important;"))), o.push("}"), o.join("\n")) : a.textContent = "", document.head.insertBefore(a, e.nextSibling), fn(a, "text");
        var i = ln("darkreader--invert");
        an && Array.isArray(an.invert) && an.invert.length > 0 ? i.textContent = ["".concat(an.invert.join(", "), " {"), "    filter: ".concat(lt(t(t({}, on), {
            contrast: 0 === on.mode ? on.contrast : Fe(on.contrast - 10, 0, 100)
        })), " !important;"), "}"].join("\n") : i.textContent = "", document.head.insertBefore(i, a.nextSibling), fn(i, "invert");
        var c = ln("darkreader--inline");
        c.textContent = pr(), document.head.insertBefore(c, i.nextSibling), fn(c, "inline");
        var u = ln("darkreader--override");
        u.textContent = an && an.css ? mn(an.css) : "", document.head.appendChild(u), fn(u, "override");
        var s = ln("darkreader--variables"),
            l = Ot(on),
            d = on.darkSchemeBackgroundColor,
            f = on.darkSchemeTextColor,
            h = on.lightSchemeBackgroundColor,
            p = on.lightSchemeTextColor,
            v = on.mode,
            m = 0 === v ? h : d,
            g = 0 === v ? p : f;
        m = tt(xe(m), on), g = it(xe(g), on), s.textContent = [":root {", "   --darkreader-neutral-background: ".concat(m, ";"), "   --darkreader-neutral-text: ".concat(g, ";"), "   --darkreader-selection-background: ".concat(l.backgroundColorSelection, ";"), "   --darkreader-selection-text: ".concat(l.foregroundColorSelection, ";"), "}"].join("\n"), document.head.insertBefore(s, c.nextSibling), fn(s, "variables");
        var b = ln("darkreader--root-vars");
        document.head.insertBefore(b, s.nextSibling);
        var y = function(e, t) {
            void 0 === t && (t = document.head || document);
            var r = t.querySelector(".".concat(e));
            return r || ((r = document.createElement("script")).classList.add("darkreader"), r.classList.add(e)), r
        }("darkreader--proxy");
        y.append("(".concat(en, ")(!").concat(an && an.disableStyleSheetsProxy, ")")), document.head.insertBefore(y, b.nextSibling), y.remove()
    }
    var pn = new Set;

    function vn(e) {
        var r = ln("darkreader--inline", e);
        r.textContent = pr(), e.insertBefore(r, e.firstChild);
        var n = ln("darkreader--override", e);
        n.textContent = an && an.css ? mn(an.css) : "", e.insertBefore(n, r.nextSibling);
        var o = ln("darkreader--invert", e);
        an && Array.isArray(an.invert) && an.invert.length > 0 ? o.textContent = ["".concat(an.invert.join(", "), " {"), "    filter: ".concat(lt(t(t({}, on), {
            contrast: 0 === on.mode ? on.contrast : Fe(on.contrast - 10, 0, 100)
        })), " !important;"), "}"].join("\n") : o.textContent = "", e.insertBefore(o, n.nextSibling), pn.add(e)
    }

    function mn(e) {
        return e.replace(/\${(.+?)}/g, (function(e, t) {
            var r = qt(t);
            return r ? Je(r, on, Xe) : (B("Couldn't parse CSSTemplate's color."), t)
        }))
    }

    function gn() {
        var e = document.querySelector(".darkreader--fallback");
        e && (e.textContent = "")
    }
    var bn = 0,
        yn = new Set;

    function kn(e) {
        var t = ++bn;
        q("New manager for element, with loadingStyleID ".concat(t), e);
        var r = Fr(e, {
            update: function() {
                var e = r.details({
                    secondRound: !0
                });
                e && (zt.addRulesForMatching(e.rules), zt.matchVariablesAndDependants(), r.render(on, un))
            },
            loadingStart: function() {
                if (!H() || !Cn) {
                    yn.add(t), q("Current amount of styles loading: ".concat(yn.size));
                    var e = document.querySelector(".darkreader--fallback");
                    e.textContent || (e.textContent = jt(on, {
                        strict: !1
                    }))
                }
            },
            loadingEnd: function() {
                yn.delete(t), q("Removed loadingStyle ".concat(t, ", now awaiting: ").concat(yn.size)), q("To-do to be loaded", yn), 0 === yn.size && H() && gn()
            }
        });
        return rn.set(e, r), r
    }

    function wn(e) {
        var t = rn.get(e);
        t && (t.destroy(), rn.delete(e))
    }
    var Sn = I((function(e) {
            rn.forEach((function(e) {
                return e.render(on, un)
            })), nn.forEach((function(e) {
                return e.render(on, un)
            })), e && e()
        })),
        _n = function() {
            Sn.cancel()
        };

    function En() {
        0 !== yn.size ? B("DOM is ready, but still have styles being loaded.", yn) : gn()
    }
    var xn = null,
        Cn = !document.hidden;

    function Vn() {
        document.removeEventListener("visibilitychange", xn), xn = null
    }

    function Rn() {
        function e() {
            var e, t;
            ! function() {
                _n();
                var e = Lr(document).filter((function(e) {
                    return !rn.has(e)
                })).map((function(e) {
                    return kn(e)
                }));
                e.map((function(e) {
                    return e.details({
                        secondRound: !1
                    })
                })).filter((function(e) {
                    return e && e.rules.length > 0
                })).forEach((function(e) {
                    zt.addRulesForMatching(e.rules)
                })), zt.matchVariablesAndDependants(), zt.setOnRootVariableChange((function() {
                    zt.putRootVars(document.head.querySelector(".darkreader--root-vars"), on)
                })), zt.putRootVars(document.head.querySelector(".darkreader--root-vars"), on), rn.forEach((function(e) {
                    return e.render(on, un)
                })), 0 === yn.size && gn(), e.forEach((function(e) {
                    return e.watch()
                }));
                var t = function(e) {
                    for (var t = [], r = 0, n = e.length; r < n; r++) t.push(e[r]);
                    return t
                }(document.querySelectorAll(hr));
                z(document.documentElement, (function(e) {
                    vn(e.shadowRoot);
                    var r = e.shadowRoot.querySelectorAll(hr);
                    r.length > 0 && N(t, r)
                })), t.forEach((function(e) {
                    return wr(e, on, sn, un)
                })), Tn(document)
            }(), Kr(Array.from(rn.keys()), (function(e) {
                var t = e.created,
                    r = e.updated,
                    n = e.removed,
                    o = e.moved,
                    a = n,
                    i = t.concat(r).concat(o).filter((function(e) {
                        return !rn.has(e)
                    })),
                    c = o.filter((function(e) {
                        return rn.has(e)
                    }));
                q("Styles to be removed:", a), a.forEach((function(e) {
                    return wn(e)
                }));
                var u = i.map((function(e) {
                    return kn(e)
                }));
                u.map((function(e) {
                    return e.details({
                        secondRound: !1
                    })
                })).filter((function(e) {
                    return e && e.rules.length > 0
                })).forEach((function(e) {
                    zt.addRulesForMatching(e.rules)
                })), zt.matchVariablesAndDependants(), u.forEach((function(e) {
                    return e.render(on, un)
                })), u.forEach((function(e) {
                    return e.watch()
                })), c.forEach((function(e) {
                    return rn.get(e).restore()
                }))
            }), (function(e) {
                vn(e), Tn(e)
            })), e = function(e) {
                wr(e, on, sn, un), e === document.documentElement && (e.getAttribute("style") || "").includes("--") && (zt.matchVariablesAndDependants(), zt.putRootVars(document.head.querySelector(".darkreader--root-vars"), on))
            }, t = function(e) {
                vn(e);
                var t = e.querySelectorAll(hr);
                t.length > 0 && F(t, (function(e) {
                    return wr(e, on, sn, un)
                }))
            }, gr(document, e, t), z(document.documentElement, (function(r) {
                gr(r.shadowRoot, e, t)
            })), Q(En)
        }
        var t, r, n, o;
        hn(), document.hidden && !on.immediateModify ? (t = e, r = Boolean(xn), xn = function() {
            document.hidden || (Vn(), t(), Cn = !0)
        }, r || document.addEventListener("visibilitychange", xn)) : e(), n = on, (o = document.querySelector(_r)) ? Cr(o, n) : (xr && xr.disconnect(), (xr = new MutationObserver((function(e) {
            e: for (var t = 0; t < e.length; t++)
                for (var r = e[t].addedNodes, o = 0; o < r.length; o++) {
                    var a = r[o];
                    if (a instanceof HTMLMetaElement && a.name === Sr) {
                        xr.disconnect(), xr = null, Cr(a, n);
                        break e
                    }
                }
        }))).observe(document.head, {
            childList: !0
        }))
    }

    function Tn(e) {
        if (Array.isArray(e.adoptedStyleSheets) && e.adoptedStyleSheets.length > 0) {
            var t = Zr(e);
            nn.push(t), t.render(on, un)
        }
    }

    function Mn() {
        rn.forEach((function(e) {
            return e.pause()
        })), F(dn.values(), (function(e) {
            return e.stop()
        })), dn.clear(), Jr(), vr.forEach((function(e) {
            return e.disconnect()
        })), mr.forEach((function(e) {
            return e.disconnect()
        })), vr.clear(), mr.clear(), K(En), X.clear()
    }

    function Ln() {
        var e, t = document.querySelector('meta[name="darkreader"]');
        return t ? t.content !== tn : ((e = document.createElement("meta")).name = "darkreader", e.content = tn, document.head.appendChild(e), !1)
    }

    function An(e, t, r) {
        if (on = e, (an = t) ? (un = Array.isArray(an.ignoreImageAnalysis) ? an.ignoreImageAnalysis : [], sn = Array.isArray(an.ignoreInlineStyle) ? an.ignoreInlineStyle : []) : (un = [], sn = []), on.immediateModify && (H = function() {
                return !0
            }), cn = r, document.head) {
            if (Ln()) return;
            document.documentElement.setAttribute("data-darkreader-mode", "dynamic"), document.documentElement.setAttribute("data-darkreader-scheme", on.mode ? "dark" : "dimmed"), Rn()
        } else {
            if (!h) {
                var n = ln("darkreader--fallback");
                document.documentElement.appendChild(n), n.textContent = jt(on, {
                    strict: !0
                })
            }
            var o = new MutationObserver((function() {
                if (document.head) {
                    if (o.disconnect(), Ln()) return void Pn();
                    Rn()
                }
            }));
            o.observe(document, {
                childList: !0,
                subtree: !0
            })
        }
    }

    function Pn() {
        document.documentElement.removeAttribute("data-darkreader-mode"), document.documentElement.removeAttribute("data-darkreader-scheme"), zt.clear(), oe.clear(), Vn(), _n(), Mn(), $t(), U(document.querySelector(".darkreader--fallback")), document.head && (! function() {
            xr && (xr.disconnect(), xr = null);
            var e = document.querySelector(_r);
            e && Er && (e.content = Er)
        }(), U(document.head.querySelector(".darkreader--user-agent")), U(document.head.querySelector(".darkreader--text")), U(document.head.querySelector(".darkreader--invert")), U(document.head.querySelector(".darkreader--inline")), U(document.head.querySelector(".darkreader--override")), U(document.head.querySelector(".darkreader--variables")), U(document.head.querySelector(".darkreader--root-vars")), U(document.head.querySelector('meta[name="darkreader"]')), document.dispatchEvent(new CustomEvent("__darkreader__cleanUp")), U(document.head.querySelector(".darkreader--proxy"))), pn.forEach((function(e) {
            U(e.querySelector(".darkreader--inline")), U(e.querySelector(".darkreader--override"))
        })), pn.clear(), F(rn.keys(), (function(e) {
            return wn(e)
        })), yn.clear(), Dr.clear(), F(document.querySelectorAll(".darkreader"), U), nn.forEach((function(e) {
            e.destroy()
        })), nn.splice(0)
    }
    var On = /url\(\"(blob\:.*?)\"\)/g;

    function jn(e) {
        return r(this, void 0, void 0, (function() {
            var t, r;
            return n(this, (function(n) {
                switch (n.label) {
                    case 0:
                        return t = [], qe(On, e, 1).forEach((function(e) {
                            var r = _(e);
                            t.push(r)
                        })), [4, Promise.all(t)];
                    case 1:
                        return r = n.sent(), [2, e.replace(On, (function() {
                            return 'url("'.concat(r.shift(), '")')
                        }))]
                }
            }))
        }))
    }

    function Dn() {
        return r(this, void 0, void 0, (function() {
            function e(e, r) {
                var n = document.querySelector(e);
                n && n.textContent && (t.push("/* ".concat(r, " */")), t.push(n.textContent), t.push(""))
            }
            var t, r, o, a, i;
            return n(this, (function(n) {
                switch (n.label) {
                    case 0:
                        return t = ['/*\n                        _______\n                       /       \\\n                      .==.    .==.\n                     ((  ))==((  ))\n                    / "=="    "=="\\\n                   /____|| || ||___\\\n       ________     ____    ________  ___    ___\n       |  ___  \\   /    \\   |  ___  \\ |  |  /  /\n       |  |  \\  \\ /  /\\  \\  |  |  \\  \\|  |_/  /\n       |  |   )  /  /__\\  \\ |  |__/  /|  ___  \\\n       |  |__/  /  ______  \\|  ____  \\|  |  \\  \\\n_______|_______/__/ ____ \\__\\__|___\\__\\__|___\\__\\____\n|  ___  \\ |  ____/ /    \\   |  ___  \\ |  ____|  ___  \\\n|  |  \\  \\|  |___ /  /\\  \\  |  |  \\  \\|  |___|  |  \\  \\\n|  |__/  /|  ____/  /__\\  \\ |  |   )  |  ____|  |__/  /\n|  ____  \\|  |__/  ______  \\|  |__/  /|  |___|  ____  \\\n|__|   \\__\\____/__/      \\__\\_______/ |______|__|   \\__\\\n                https://darkreader.org\n*/\n\n/*! Dark reader generated CSS | Licensed under MIT https://github.com/darkreader/darkreader/blob/master/LICENSE */\n'], e(".darkreader--fallback", "Fallback Style"), e(".darkreader--user-agent", "User-Agent Style"), e(".darkreader--text", "Text Style"), e(".darkreader--invert", "Invert Style"), e(".darkreader--variables", "Variables Style"), r = [], document.querySelectorAll(".darkreader--sync").forEach((function(e) {
                            F(e.sheet.cssRules, (function(e) {
                                e && e.cssText && r.push(e.cssText)
                            }))
                        })), r.length ? (o = function(e) {
                            function t(e) {
                                return e.replace(/^\s+/, "")
                            }

                            function r(e) {
                                return 0 === e ? "" : " ".repeat(4 * e)
                            }
                            if (e.length < 5e4)
                                for (var n = /[^{}]+{\s*}/; n.test(e);) e = e.replace(n, "");
                            for (var o = e.replace(/\s{2,}/g, " ").replace(/\{/g, "{\n").replace(/\}/g, "\n}\n").replace(/\;(?![^\(|\"]*(\)|\"))/g, ";\n").replace(/\,(?![^\(|\"]*(\)|\"))/g, ",\n").replace(/\n\s*\n/g, "\n").split("\n"), a = 0, i = [], c = 0, u = o.length; c < u; c++) {
                                var s = "".concat(o[c], "\n");
                                s.includes("{") ? i.push(r(a++) + t(s)) : s.includes("}") ? i.push(r(--a) + t(s)) : i.push(r(a) + t(s))
                            }
                            return i.join("").trim()
                        }(r.join("\n")), t.push("/* Modified CSS */"), i = (a = t).push, [4, jn(o)]) : [3, 2];
                    case 1:
                        i.apply(a, [n.sent()]), t.push(""), n.label = 2;
                    case 2:
                        return e(".darkreader--override", "Override Style"), [2, t.join("\n")]
                }
            }))
        }))
    }
    var Fn = !1,
        Nn = function() {
            try {
                return window.self !== window.top
            } catch (e) {
                return console.warn(e), !0
            }
        }();

    function qn(e, r) {
        void 0 === e && (e = {}), void 0 === r && (r = null);
        var n = t(t({}, D), e);
        if (n.engine !== P) throw new Error("Theme engine is not supported.");
        An(n, r, Nn), Fn = !0
    }

    function Bn() {
        Pn(), Fn = !1
    }
    var In = matchMedia("(prefers-color-scheme: dark)"),
        Wn = {
            themeOptions: null,
            fixes: null
        };

    function Un() {
        In.matches ? qn(Wn.themeOptions, Wn.fixes) : Bn()
    }
    var $n = function(e) {
        C = e || x
    };
    e.auto = function(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = null), e ? (Wn = {
            themeOptions: e,
            fixes: t
        }, Un(), y ? In.addEventListener("change", Un) : In.addListener(Un)) : (y ? In.removeEventListener("change", Un) : In.removeListener(Un), Bn())
    }, e.disable = Bn, e.enable = qn, e.exportGeneratedCSS = function() {
        return r(this, void 0, void 0, (function() {
            return n(this, (function(e) {
                switch (e.label) {
                    case 0:
                        return [4, Dn()];
                    case 1:
                        return [2, e.sent()]
                }
            }))
        }))
    }, e.isEnabled = function() {
        return Fn
    }, e.setFetchMethod = $n, Object.defineProperty(e, "__esModule", {
        value: !0
    })
}));
//# sourceMappingURL=/sm/5a2bdc5d7663a0e643f0674a9ceaf6cfa7d1ed8f84448f8321084004e0f0d8af.map

DarkReader.enable({
	brightness: 100,
	contrast: 100,
	sepia: 0,
    darkSchemeBackgroundColor: "#282a36",
    darkSchemeTextColor: "#f8f8f2",
    // darkColorScheme: "Solarized",
    lightSchemeBackgroundColor: "#44475a",
    lightSchemeTextColor: "#f8f8f2",
    // lightColorScheme: "Solarized"
});