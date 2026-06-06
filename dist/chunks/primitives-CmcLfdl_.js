import { t as e } from "./utils-DFf2kDEH.js";
import { r as t, t as n } from "./button-CgWFXvz0.js";
import { Fragment as r, jsx as i, jsxs as a } from "react/jsx-runtime";
import * as o from "react";
import { Children as s, Component as c, Fragment as l, createContext as u, createElement as d, forwardRef as f, isValidElement as p, useCallback as m, useContext as h, useEffect as g, useId as _, useInsertionEffect as v, useLayoutEffect as y, useMemo as b, useRef as x, useState as S } from "react";
//#region \0rolldown/runtime.js
var C = Object.defineProperty, ee = Object.getOwnPropertyDescriptor, te = Object.getOwnPropertyNames, w = Object.prototype.hasOwnProperty, ne = (e, t) => () => (e && (t = e(e = 0)), t), re = (e, t) => {
	let n = {};
	for (var r in e) C(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || C(n, Symbol.toStringTag, { value: "Module" }), n;
}, ie = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = te(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !w.call(e, s) && s !== n && C(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = ee(t, s)) || r.enumerable
	});
	return e;
}, ae = (e) => w.call(e, "module.exports") ? e["module.exports"] : ie(C({}, "__esModule", { value: !0 }), e), oe = "inline-flex items-center rounded-full px-2 py-0.5 text-xs md:text-sm font-medium", se = {
	default: "bg-muted text-muted-foreground",
	success: "bg-success/10 text-success",
	warning: "bg-warning/10 text-warning",
	error: "bg-destructive/10 text-destructive",
	info: "bg-primary/10 text-primary"
}, ce = t(oe, {
	variants: { variant: se },
	defaultVariants: { variant: "default" }
});
function le({ label: t, variant: n, className: r }) {
	return /* @__PURE__ */ i("span", {
		className: e(ce({ variant: n }), r),
		children: t
	});
}
//#endregion
//#region components/primitives/PriceDisplay/PriceDisplay.tsx
function ue(e, t) {
	return new Intl.NumberFormat(void 0, {
		style: "currency",
		currency: t
	}).format(e);
}
function de({ amount: t, currency: n, strikethrough: r, className: o }) {
	return /* @__PURE__ */ a("span", {
		className: e("inline-flex items-baseline gap-1.5", o),
		children: [r !== void 0 && /* @__PURE__ */ i("span", {
			className: "text-muted-foreground line-through text-xs md:text-sm",
			children: ue(r, n)
		}), /* @__PURE__ */ i("span", {
			className: "text-foreground font-semibold text-sm md:text-base",
			children: ue(t, n)
		})]
	});
}
//#endregion
//#region components/primitives/EntityAvatar/EntityAvatar.tsx
var fe = "inline-flex shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground font-medium overflow-hidden", pe = {
	sm: "size-7 text-xs",
	md: "size-10 text-sm",
	lg: "size-14 text-base"
}, me = t(fe, {
	variants: { size: pe },
	defaultVariants: { size: "md" }
});
function he({ fallback: t, src: n, alt: r, size: a, className: o }) {
	let s = t.split(" ").slice(0, 2).map((e) => e[0]?.toUpperCase() ?? "").join("");
	return /* @__PURE__ */ i("div", {
		className: e(me({ size: a }), o),
		children: n ? /* @__PURE__ */ i("img", {
			src: n,
			alt: r ?? t,
			className: "size-full object-cover"
		}) : /* @__PURE__ */ i("span", {
			"aria-label": t,
			children: s
		})
	});
}
//#endregion
//#region components/primitives/TimestampLabel/TimestampLabel.tsx
function ge(e) {
	let t = new Date(e), n = Date.now() - t.getTime(), r = Math.floor(n / 1e3);
	if (r < 60) return "just now";
	if (r < 3600) return `${Math.floor(r / 60)} min ago`;
	if (r < 86400) return `${Math.floor(r / 3600)} hr ago`;
	let i = {
		month: "short",
		day: "numeric"
	};
	return t.getFullYear() !== (/* @__PURE__ */ new Date()).getFullYear() && (i.year = "numeric"), new Intl.DateTimeFormat(void 0, i).format(t);
}
function _e({ datetime: t, className: n }) {
	let r = b(() => ge(t), [t]);
	return /* @__PURE__ */ i("time", {
		dateTime: t,
		className: e("text-muted-foreground text-xs md:text-sm", n),
		children: r
	});
}
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs
var ve = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), ye = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), be = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), xe = (e) => {
	let t = be(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, Se = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, Ce = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
	return !1;
}, we = u({}), Te = () => h(we), Ee = f(({ color: e, size: t, strokeWidth: n, absoluteStrokeWidth: r, className: i = "", children: a, iconNode: o, ...s }, c) => {
	let { size: l = 24, strokeWidth: u = 2, absoluteStrokeWidth: f = !1, color: p = "currentColor", className: m = "" } = Te() ?? {}, h = r ?? f ? Number(n ?? u) * 24 / Number(t ?? l) : n ?? u;
	return d("svg", {
		ref: c,
		...Se,
		width: t ?? l ?? Se.width,
		height: t ?? l ?? Se.height,
		stroke: e ?? p,
		strokeWidth: h,
		className: ve("lucide", m, i),
		...!a && !Ce(s) && { "aria-hidden": "true" },
		...s
	}, [...o.map(([e, t]) => d(e, t)), ...Array.isArray(a) ? a : [a]]);
}), De = (e, t) => {
	let n = f(({ className: n, ...r }, i) => d(Ee, {
		ref: i,
		iconNode: t,
		className: ve(`lucide-${ye(xe(e))}`, `lucide-${e}`, n),
		...r
	}));
	return n.displayName = xe(e), n;
}, Oe = De("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), ke = De("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]), Ae = u({});
//#endregion
//#region node_modules/framer-motion/dist/es/utils/use-constant.mjs
function je(e) {
	let t = x(null);
	return t.current === null && (t.current = e()), t.current;
}
//#endregion
//#region node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var Me = typeof window < "u" ? y : g, Ne = /* @__PURE__ */ u(null);
//#endregion
//#region node_modules/motion-utils/dist/es/array.mjs
function Pe(e, t) {
	e.indexOf(t) === -1 && e.push(t);
}
function Fe(e, t) {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}
//#endregion
//#region node_modules/motion-utils/dist/es/clamp.mjs
var T = (e, t, n) => n > t ? t : n < e ? e : n;
//#endregion
//#region node_modules/motion-utils/dist/es/format-error-message.mjs
function Ie(e, t) {
	return t ? `${e}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${t}` : e;
}
//#endregion
//#region node_modules/motion-utils/dist/es/errors.mjs
var Le = () => {}, E = () => {};
typeof process < "u" && process.env.NODE_ENV !== "production" && (Le = (e, t, n) => {
	!e && typeof console < "u" && console.warn(Ie(t, n));
}, E = (e, t, n) => {
	if (!e) throw Error(Ie(t, n));
});
//#endregion
//#region node_modules/motion-utils/dist/es/global-config.mjs
var D = {}, Re = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), ze = (e) => typeof e == "object" && !!e, Be = (e) => /^0[^.\s]+$/u.test(e);
//#endregion
//#region node_modules/motion-utils/dist/es/memo.mjs
/*#__NO_SIDE_EFFECTS__*/
function Ve(e) {
	let t;
	return () => (t === void 0 && (t = e()), t);
}
//#endregion
//#region node_modules/motion-utils/dist/es/noop.mjs
var O = /* @__NO_SIDE_EFFECTS__ */ (e) => e, He = (...e) => e.reduce((e, t) => (n) => t(e(n))), Ue = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
	let r = t - e;
	return r ? (n - e) / r : 1;
}, We = class {
	constructor() {
		this.subscriptions = [];
	}
	add(e) {
		return Pe(this.subscriptions, e), () => Fe(this.subscriptions, e);
	}
	notify(e, t, n) {
		let r = this.subscriptions.length;
		if (r) if (r === 1) this.subscriptions[0](e, t, n);
		else for (let i = 0; i < r; i++) {
			let r = this.subscriptions[i];
			r && r(e, t, n);
		}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
}, k = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, A = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, Ge = /* @__NO_SIDE_EFFECTS__ */ (e, t) => t ? 1e3 / t * e : 0, Ke = /* @__PURE__ */ new Set();
function qe(e, t, n) {
	e || Ke.has(t) || (console.warn(Ie(t, n)), Ke.add(t));
}
//#endregion
//#region node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs
var Je = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, Ye = 1e-7, Xe = 12;
function Ze(e, t, n, r, i) {
	let a, o, s = 0;
	do
		o = t + (n - t) / 2, a = Je(o, r, i) - e, a > 0 ? n = o : t = o;
	while (Math.abs(a) > Ye && ++s < Xe);
	return o;
}
/*#__NO_SIDE_EFFECTS__*/
function Qe(e, t, n, r) {
	if (e === t && n === r) return O;
	let i = (t) => Ze(t, 0, 1, e, n);
	return (e) => e === 0 || e === 1 ? e : Je(i(e), t, r);
}
//#endregion
//#region node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs
var $e = /* @__NO_SIDE_EFFECTS__ */ (e) => (t) => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, et = /* @__NO_SIDE_EFFECTS__ */ (e) => (t) => 1 - e(1 - t), tt = /*@__PURE__*/ Qe(.33, 1.53, .69, .99), nt = /*@__PURE__*/ et(tt), rt = /*@__PURE__*/ $e(nt), it = (e) => e >= 1 ? 1 : (e *= 2) < 1 ? .5 * nt(e) : .5 * (2 - 2 ** (-10 * (e - 1))), at = (e) => 1 - Math.sin(Math.acos(e)), ot = /* @__PURE__ */ et(at), st = /* @__PURE__ */ $e(at), ct = /*@__PURE__*/ Qe(.42, 0, 1, 1), lt = /*@__PURE__*/ Qe(0, 0, .58, 1), ut = /*@__PURE__*/ Qe(.42, 0, .58, 1), dt = /* @__NO_SIDE_EFFECTS__ */ (e) => Array.isArray(e) && typeof e[0] != "number", ft = /* @__NO_SIDE_EFFECTS__ */ (e) => Array.isArray(e) && typeof e[0] == "number", pt = {
	linear: O,
	easeIn: ct,
	easeInOut: ut,
	easeOut: lt,
	circIn: at,
	circInOut: st,
	circOut: ot,
	backIn: nt,
	backInOut: rt,
	backOut: tt,
	anticipate: it
}, mt = (e) => typeof e == "string", ht = (e) => {
	if (/* @__PURE__ */ ft(e)) {
		E(e.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
		let [t, n, r, i] = e;
		return /* @__PURE__ */ Qe(t, n, r, i);
	} else if (mt(e)) return E(pt[e] !== void 0, `Invalid easing type '${e}'`, "invalid-easing-type"), pt[e];
	return e;
}, gt = [
	"setup",
	"read",
	"resolveKeyframes",
	"preUpdate",
	"update",
	"preRender",
	"render",
	"postRender"
], j = {
	value: null,
	addProjectionMetrics: null
};
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/render-step.mjs
function _t(e, t) {
	let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), i = !1, a = !1, o = /* @__PURE__ */ new WeakSet(), s = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, c = 0;
	function l(t) {
		o.has(t) && (u.schedule(t), e()), c++, t(s);
	}
	let u = {
		schedule: (e, t = !1, a = !1) => {
			let s = a && i ? n : r;
			return t && o.add(e), s.add(e), e;
		},
		cancel: (e) => {
			r.delete(e), o.delete(e);
		},
		process: (e) => {
			if (s = e, i) {
				a = !0;
				return;
			}
			i = !0;
			let o = n;
			n = r, r = o, n.forEach(l), t && j.value && j.value.frameloop[t].push(c), c = 0, n.clear(), i = !1, a && (a = !1, u.process(e));
		}
	};
	return u;
}
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/batcher.mjs
var vt = 40;
function yt(e, t) {
	let n = !1, r = !0, i = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, a = () => n = !0, o = gt.reduce((e, n) => (e[n] = _t(a, t ? n : void 0), e), {}), { setup: s, read: c, resolveKeyframes: l, preUpdate: u, update: d, preRender: f, render: p, postRender: m } = o, h = () => {
		let a = D.useManualTiming, o = a ? i.timestamp : performance.now();
		n = !1, a || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(o - i.timestamp, vt), 1)), i.timestamp = o, i.isProcessing = !0, s.process(i), c.process(i), l.process(i), u.process(i), d.process(i), f.process(i), p.process(i), m.process(i), i.isProcessing = !1, n && t && (r = !1, e(h));
	}, g = () => {
		n = !0, r = !0, i.isProcessing || e(h);
	};
	return {
		schedule: gt.reduce((e, t) => {
			let r = o[t];
			return e[t] = (e, t = !1, i = !1) => (n || g(), r.schedule(e, t, i)), e;
		}, {}),
		cancel: (e) => {
			for (let t = 0; t < gt.length; t++) o[gt[t]].cancel(e);
		},
		state: i,
		steps: o
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/frame.mjs
var { schedule: M, cancel: N, state: P, steps: bt } = /* @__PURE__ */ yt(typeof requestAnimationFrame < "u" ? requestAnimationFrame : O, !0), xt;
function St() {
	xt = void 0;
}
var F = {
	now: () => (xt === void 0 && F.set(P.isProcessing || D.useManualTiming ? P.timestamp : performance.now()), xt),
	set: (e) => {
		xt = e, queueMicrotask(St);
	}
}, Ct = {
	layout: 0,
	mainThread: 0,
	waapi: 0
}, wt = (e) => (t) => typeof t == "string" && t.startsWith(e), Tt = /*@__PURE__*/ wt("--"), Et = /*@__PURE__*/ wt("var(--"), Dt = (e) => Et(e) ? Ot.test(e.split("/*")[0].trim()) : !1, Ot = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function kt(e) {
	return typeof e == "string" ? e.split("/*")[0].includes("var(--") : !1;
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/numbers/index.mjs
var At = {
	test: (e) => typeof e == "number",
	parse: parseFloat,
	transform: (e) => e
}, jt = {
	...At,
	transform: (e) => T(0, 1, e)
}, Mt = {
	...At,
	default: 1
}, Nt = (e) => Math.round(e * 1e5) / 1e5, Pt = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/is-nullish.mjs
function Ft(e) {
	return e == null;
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
var It = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Lt = (e, t) => (n) => !!(typeof n == "string" && It.test(n) && n.startsWith(e) || t && !Ft(n) && Object.prototype.hasOwnProperty.call(n, t)), Rt = (e, t, n) => (r) => {
	if (typeof r != "string") return r;
	let [i, a, o, s] = r.match(Pt);
	return {
		[e]: parseFloat(i),
		[t]: parseFloat(a),
		[n]: parseFloat(o),
		alpha: s === void 0 ? 1 : parseFloat(s)
	};
}, zt = (e) => T(0, 255, e), Bt = {
	...At,
	transform: (e) => Math.round(zt(e))
}, Vt = {
	test: /*@__PURE__*/ Lt("rgb", "red"),
	parse: /*@__PURE__*/ Rt("red", "green", "blue"),
	transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Bt.transform(e) + ", " + Bt.transform(t) + ", " + Bt.transform(n) + ", " + Nt(jt.transform(r)) + ")"
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/color/hex.mjs
function Ht(e) {
	let t = "", n = "", r = "", i = "";
	return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
		red: parseInt(t, 16),
		green: parseInt(n, 16),
		blue: parseInt(r, 16),
		alpha: i ? parseInt(i, 16) / 255 : 1
	};
}
var Ut = {
	test: /*@__PURE__*/ Lt("#"),
	parse: Ht,
	transform: Vt.transform
}, Wt = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
	test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
	parse: parseFloat,
	transform: (t) => `${t}${e}`
}), I = /*@__PURE__*/ Wt("deg"), L = /*@__PURE__*/ Wt("%"), R = /*@__PURE__*/ Wt("px"), Gt = /*@__PURE__*/ Wt("vh"), Kt = /*@__PURE__*/ Wt("vw"), qt = {
	...L,
	parse: (e) => L.parse(e) / 100,
	transform: (e) => L.transform(e * 100)
}, Jt = {
	test: /*@__PURE__*/ Lt("hsl", "hue"),
	parse: /*@__PURE__*/ Rt("hue", "saturation", "lightness"),
	transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + L.transform(Nt(t)) + ", " + L.transform(Nt(n)) + ", " + Nt(jt.transform(r)) + ")"
}, z = {
	test: (e) => Vt.test(e) || Ut.test(e) || Jt.test(e),
	parse: (e) => Vt.test(e) ? Vt.parse(e) : Jt.test(e) ? Jt.parse(e) : Ut.parse(e),
	transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Vt.transform(e) : Jt.transform(e),
	getAnimatableNone: (e) => {
		let t = z.parse(e);
		return t.alpha = 0, z.transform(t);
	}
}, Yt = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/complex/index.mjs
function Xt(e) {
	return isNaN(e) && typeof e == "string" && (e.match(Pt)?.length || 0) + (e.match(Yt)?.length || 0) > 0;
}
var Zt = "number", Qt = "color", $t = "var", en = "var(", tn = "${}", nn = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function rn(e) {
	let t = e.toString(), n = [], r = {
		color: [],
		number: [],
		var: []
	}, i = [], a = 0;
	return {
		values: n,
		split: t.replace(nn, (e) => (z.test(e) ? (r.color.push(a), i.push(Qt), n.push(z.parse(e))) : e.startsWith(en) ? (r.var.push(a), i.push($t), n.push(e)) : (r.number.push(a), i.push(Zt), n.push(parseFloat(e))), ++a, tn)).split(tn),
		indexes: r,
		types: i
	};
}
function an(e) {
	return rn(e).values;
}
function on({ split: e, types: t }) {
	let n = e.length;
	return (r) => {
		let i = "";
		for (let a = 0; a < n; a++) if (i += e[a], r[a] !== void 0) {
			let e = t[a];
			e === Zt ? i += Nt(r[a]) : e === Qt ? i += z.transform(r[a]) : i += r[a];
		}
		return i;
	};
}
function sn(e) {
	return on(rn(e));
}
var cn = (e) => typeof e == "number" ? 0 : z.test(e) ? z.getAnimatableNone(e) : e, ln = (e, t) => typeof e == "number" ? t?.trim().endsWith("/") ? e : 0 : cn(e);
function un(e) {
	let t = rn(e);
	return on(t)(t.values.map((e, n) => ln(e, t.split[n])));
}
var B = {
	test: Xt,
	parse: an,
	createTransformer: sn,
	getAnimatableNone: un
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
function dn(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function fn({ hue: e, saturation: t, lightness: n, alpha: r }) {
	e /= 360, t /= 100, n /= 100;
	let i = 0, a = 0, o = 0;
	if (!t) i = a = o = n;
	else {
		let r = n < .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - r;
		i = dn(s, r, e + 1 / 3), a = dn(s, r, e), o = dn(s, r, e - 1 / 3);
	}
	return {
		red: Math.round(i * 255),
		green: Math.round(a * 255),
		blue: Math.round(o * 255),
		alpha: r
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/immediate.mjs
function pn(e, t) {
	return (n) => n > 0 ? t : e;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/number.mjs
var V = (e, t, n) => e + (t - e) * n, mn = (e, t, n) => {
	let r = e * e, i = n * (t * t - r) + r;
	return i < 0 ? 0 : Math.sqrt(i);
}, hn = [
	Ut,
	Vt,
	Jt
], gn = (e) => hn.find((t) => t.test(e));
function _n(e) {
	let t = gn(e);
	if (Le(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !t) return !1;
	let n = t.parse(e);
	return t === Jt && (n = fn(n)), n;
}
var vn = (e, t) => {
	let n = _n(e), r = _n(t);
	if (!n || !r) return pn(e, t);
	let i = { ...n };
	return (e) => (i.red = mn(n.red, r.red, e), i.green = mn(n.green, r.green, e), i.blue = mn(n.blue, r.blue, e), i.alpha = V(n.alpha, r.alpha, e), Vt.transform(i));
}, yn = new Set(["none", "hidden"]);
function bn(e, t) {
	return yn.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/complex.mjs
function xn(e, t) {
	return (n) => V(e, t, n);
}
function Sn(e) {
	return typeof e == "number" ? xn : typeof e == "string" ? Dt(e) ? pn : z.test(e) ? vn : En : Array.isArray(e) ? Cn : typeof e == "object" ? z.test(e) ? vn : wn : pn;
}
function Cn(e, t) {
	let n = [...e], r = n.length, i = e.map((e, n) => Sn(e)(e, t[n]));
	return (e) => {
		for (let t = 0; t < r; t++) n[t] = i[t](e);
		return n;
	};
}
function wn(e, t) {
	let n = {
		...e,
		...t
	}, r = {};
	for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = Sn(e[i])(e[i], t[i]));
	return (e) => {
		for (let t in r) n[t] = r[t](e);
		return n;
	};
}
function Tn(e, t) {
	let n = [], r = {
		color: 0,
		var: 0,
		number: 0
	};
	for (let i = 0; i < t.values.length; i++) {
		let a = t.types[i], o = e.indexes[a][r[a]];
		n[i] = e.values[o] ?? 0, r[a]++;
	}
	return n;
}
var En = (e, t) => {
	let n = B.createTransformer(t), r = rn(e), i = rn(t);
	return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? yn.has(e) && !i.values.length || yn.has(t) && !r.values.length ? bn(e, t) : He(Cn(Tn(r, i), i.values), n) : (Le(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), pn(e, t));
};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/index.mjs
function Dn(e, t, n) {
	return typeof e == "number" && typeof t == "number" && typeof n == "number" ? V(e, t, n) : Sn(e)(e, t);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/drivers/frame.mjs
var On = (e) => {
	let t = ({ timestamp: t }) => e(t);
	return {
		start: (e = !0) => M.update(t, e),
		stop: () => N(t),
		now: () => P.isProcessing ? P.timestamp : F.now()
	};
}, kn = (e, t, n = 10) => {
	let r = "", i = Math.max(Math.round(t / n), 2);
	for (let t = 0; t < i; t++) r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${r.substring(0, r.length - 2)})`;
}, An = 2e4;
function jn(e) {
	let t = 0, n = e.next(t);
	for (; !n.done && t < 2e4;) t += 50, n = e.next(t);
	return t >= 2e4 ? Infinity : t;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
function Mn(e, t = 100, n) {
	let r = n({
		...e,
		keyframes: [0, t]
	}), i = Math.min(jn(r), An);
	return {
		type: "keyframes",
		ease: (e) => r.next(i * e).value / t,
		duration: /* @__PURE__ */ A(i)
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/spring.mjs
var H = {
	stiffness: 100,
	damping: 10,
	mass: 1,
	velocity: 0,
	duration: 800,
	bounce: .3,
	visualDuration: .3,
	restSpeed: {
		granular: .01,
		default: 2
	},
	restDelta: {
		granular: .005,
		default: .5
	},
	minDuration: .01,
	maxDuration: 10,
	minDamping: .05,
	maxDamping: 1
};
function Nn(e, t) {
	return e * Math.sqrt(1 - t * t);
}
var Pn = 12;
function Fn(e, t, n) {
	let r = n;
	for (let n = 1; n < Pn; n++) r -= e(r) / t(r);
	return r;
}
var In = .001;
function Ln({ duration: e = H.duration, bounce: t = H.bounce, velocity: n = H.velocity, mass: r = H.mass }) {
	let i, a;
	Le(e <= /* @__PURE__ */ k(H.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
	let o = 1 - t;
	o = T(H.minDamping, H.maxDamping, o), e = T(H.minDuration, H.maxDuration, /* @__PURE__ */ A(e)), o < 1 ? (i = (t) => {
		let r = t * o, i = r * e, a = r - n, s = Nn(t, o), c = Math.exp(-i);
		return In - a / s * c;
	}, a = (t) => {
		let r = t * o * e, a = r * n + n, s = o ** 2 * t ** 2 * e, c = Math.exp(-r), l = Nn(t ** 2, o);
		return (-i(t) + In > 0 ? -1 : 1) * ((a - s) * c) / l;
	}) : (i = (t) => -.001 + Math.exp(-t * e) * ((t - n) * e + 1), a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)));
	let s = 5 / e, c = Fn(i, a, s);
	if (e = /* @__PURE__ */ k(e), isNaN(c)) return {
		stiffness: H.stiffness,
		damping: H.damping,
		duration: e
	};
	{
		let t = c ** 2 * r;
		return {
			stiffness: t,
			damping: o * 2 * Math.sqrt(r * t),
			duration: e
		};
	}
}
var Rn = ["duration", "bounce"], zn = [
	"stiffness",
	"damping",
	"mass"
];
function Bn(e, t) {
	return t.some((t) => e[t] !== void 0);
}
function Vn(e) {
	let t = {
		velocity: H.velocity,
		stiffness: H.stiffness,
		damping: H.damping,
		mass: H.mass,
		isResolvedFromDuration: !1,
		...e
	};
	if (!Bn(e, zn) && Bn(e, Rn)) if (t.velocity = 0, e.visualDuration) {
		let n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), i = r * r, a = 2 * T(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
		t = {
			...t,
			mass: H.mass,
			stiffness: i,
			damping: a
		};
	} else {
		let n = Ln({
			...e,
			velocity: 0
		});
		t = {
			...t,
			...n,
			mass: H.mass
		}, t.isResolvedFromDuration = !0;
	}
	return t;
}
function Hn(e = H.visualDuration, t = H.bounce) {
	let n = typeof e == "object" ? e : {
		visualDuration: e,
		keyframes: [0, 1],
		bounce: t
	}, { restSpeed: r, restDelta: i } = n, a = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], s = {
		done: !1,
		value: a
	}, { stiffness: c, damping: l, mass: u, duration: d, velocity: f, isResolvedFromDuration: p } = Vn({
		...n,
		velocity: -/* @__PURE__ */ A(n.velocity || 0)
	}), m = f || 0, h = l / (2 * Math.sqrt(c * u)), g = o - a, _ = /* @__PURE__ */ A(Math.sqrt(c / u)), v = Math.abs(g) < 5;
	r ||= v ? H.restSpeed.granular : H.restSpeed.default, i ||= v ? H.restDelta.granular : H.restDelta.default;
	let y, b, x, S, C, ee;
	if (h < 1) x = Nn(_, h), S = (m + h * _ * g) / x, y = (e) => o - Math.exp(-h * _ * e) * (S * Math.sin(x * e) + g * Math.cos(x * e)), C = h * _ * S + g * x, ee = h * _ * g - S * x, b = (e) => Math.exp(-h * _ * e) * (C * Math.sin(x * e) + ee * Math.cos(x * e));
	else if (h === 1) {
		y = (e) => o - Math.exp(-_ * e) * (g + (m + _ * g) * e);
		let e = m + _ * g;
		b = (t) => Math.exp(-_ * t) * (_ * e * t - m);
	} else {
		let e = _ * Math.sqrt(h * h - 1);
		y = (t) => {
			let n = Math.exp(-h * _ * t), r = Math.min(e * t, 300);
			return o - n * ((m + h * _ * g) * Math.sinh(r) + e * g * Math.cosh(r)) / e;
		};
		let t = (m + h * _ * g) / e, n = h * _ * t - g * e, r = h * _ * g - t * e;
		b = (t) => {
			let i = Math.exp(-h * _ * t), a = Math.min(e * t, 300);
			return i * (n * Math.sinh(a) + r * Math.cosh(a));
		};
	}
	let te = {
		calculatedDuration: p && d || null,
		velocity: (e) => /* @__PURE__ */ k(b(e)),
		next: (e) => {
			if (!p && h < 1) {
				let t = Math.exp(-h * _ * e), n = Math.sin(x * e), a = Math.cos(x * e), c = o - t * (S * n + g * a), l = /* @__PURE__ */ k(t * (C * n + ee * a));
				return s.done = Math.abs(l) <= r && Math.abs(o - c) <= i, s.value = s.done ? o : c, s;
			}
			let t = y(e);
			if (p) s.done = e >= d;
			else {
				let n = /* @__PURE__ */ k(b(e));
				s.done = Math.abs(n) <= r && Math.abs(o - t) <= i;
			}
			return s.value = s.done ? o : t, s;
		},
		toString: () => {
			let e = Math.min(jn(te), An), t = kn((t) => te.next(e * t).value, e, 30);
			return e + "ms " + t;
		},
		toTransition: () => {}
	};
	return te;
}
Hn.applyToOptions = (e) => {
	let t = Mn(e, 100, Hn);
	return e.ease = t.ease, e.duration = /* @__PURE__ */ k(t.duration), e.type = "keyframes", e;
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs
var Un = 5;
function Wn(e, t, n) {
	let r = Math.max(t - Un, 0);
	return /* @__PURE__ */ Ge(n - e(r), t - r);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/inertia.mjs
function Gn({ keyframes: e, velocity: t = 0, power: n = .8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: a = 500, modifyTarget: o, min: s, max: c, restDelta: l = .5, restSpeed: u }) {
	let d = e[0], f = {
		done: !1,
		value: d
	}, p = (e) => s !== void 0 && e < s || c !== void 0 && e > c, m = (e) => s === void 0 ? c : c === void 0 || Math.abs(s - e) < Math.abs(c - e) ? s : c, h = n * t, g = d + h, _ = o === void 0 ? g : o(g);
	_ !== g && (h = _ - d);
	let v = (e) => -h * Math.exp(-e / r), y = (e) => _ + v(e), b = (e) => {
		let t = v(e), n = y(e);
		f.done = Math.abs(t) <= l, f.value = f.done ? _ : n;
	}, x, S, C = (e) => {
		p(f.value) && (x = e, S = Hn({
			keyframes: [f.value, m(f.value)],
			velocity: Wn(y, e, f.value),
			damping: i,
			stiffness: a,
			restDelta: l,
			restSpeed: u
		}));
	};
	return C(0), {
		calculatedDuration: null,
		next: (e) => {
			let t = !1;
			return !S && x === void 0 && (t = !0, b(e), C(e)), x !== void 0 && e >= x ? S.next(e - x) : (!t && b(e), f);
		}
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/interpolate.mjs
function Kn(e, t, n) {
	let r = [], i = n || D.mix || Dn, a = e.length - 1;
	for (let n = 0; n < a; n++) {
		let a = i(e[n], e[n + 1]);
		t && (a = He(Array.isArray(t) ? t[n] || O : t, a)), r.push(a);
	}
	return r;
}
function qn(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
	let a = e.length;
	if (E(a === t.length, "Both input and output ranges must be the same length", "range-length"), a === 1) return () => t[0];
	if (a === 2 && t[0] === t[1]) return () => t[1];
	let o = e[0] === e[1];
	e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
	let s = Kn(t, r, i), c = s.length, l = (n) => {
		if (o && n < e[0]) return t[0];
		let r = 0;
		if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
		let i = /* @__PURE__ */ Ue(e[r], e[r + 1], n);
		return s[r](i);
	};
	return n ? (t) => l(T(e[0], e[a - 1], t)) : l;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs
function Jn(e, t) {
	let n = e[e.length - 1];
	for (let r = 1; r <= t; r++) {
		let i = /* @__PURE__ */ Ue(0, t, r);
		e.push(V(n, 1, i));
	}
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
function Yn(e) {
	let t = [0];
	return Jn(t, e.length - 1), t;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
function Xn(e, t) {
	return e.map((e) => e * t);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs
function Zn(e, t) {
	return e.map(() => t || ut).splice(0, e.length - 1);
}
function Qn({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
	let i = /* @__PURE__ */ dt(r) ? r.map(ht) : ht(r), a = {
		done: !1,
		value: t[0]
	}, o = qn(Xn(n && n.length === t.length ? n : Yn(t), e), t, { ease: Array.isArray(i) ? i : Zn(t, i) });
	return {
		calculatedDuration: e,
		next: (t) => (a.value = o(t), a.done = t >= e, a)
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs
var $n = (e) => e !== null;
function er(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
	let a = e.filter($n), o = i < 0 || t && n !== "loop" && t % 2 == 1 ? 0 : a.length - 1;
	return !o || r === void 0 ? a[o] : r;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs
var tr = {
	decay: Gn,
	inertia: Gn,
	tween: Qn,
	keyframes: Qn,
	spring: Hn
};
function nr(e) {
	typeof e.type == "string" && (e.type = tr[e.type]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs
var rr = class {
	constructor() {
		this.updateFinished();
	}
	get finished() {
		return this._finished;
	}
	updateFinished() {
		this._finished = new Promise((e) => {
			this.resolve = e;
		});
	}
	notifyFinished() {
		this.resolve();
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
}, ir = (e) => e / 100, ar = class extends rr {
	constructor(e) {
		super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
			done: !1,
			value: void 0
		}, this.stop = () => {
			let { motionValue: e } = this.options;
			e && e.updatedAt !== F.now() && this.tick(F.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
		}, Ct.mainThread++, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
	}
	initAnimation() {
		let { options: e } = this;
		nr(e);
		let { type: t = Qn, repeat: n = 0, repeatDelay: r = 0, repeatType: i, velocity: a = 0 } = e, { keyframes: o } = e, s = t || Qn;
		process.env.NODE_ENV !== "production" && s !== Qn && E(o.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${o}`, "spring-two-frames"), s !== Qn && typeof o[0] != "number" && (this.mixKeyframes = He(ir, Dn(o[0], o[1])), o = [0, 100]);
		let c = s({
			...e,
			keyframes: o
		});
		i === "mirror" && (this.mirroredGenerator = s({
			...e,
			keyframes: [...o].reverse(),
			velocity: -a
		})), c.calculatedDuration === null && (c.calculatedDuration = jn(c));
		let { calculatedDuration: l } = c;
		this.calculatedDuration = l, this.resolvedDuration = l + r, this.totalDuration = this.resolvedDuration * (n + 1) - r, this.generator = c;
	}
	updateTime(e) {
		let t = Math.round(e - this.startTime) * this.playbackSpeed;
		this.holdTime === null ? this.currentTime = t : this.currentTime = this.holdTime;
	}
	tick(e, t = !1) {
		let { generator: n, totalDuration: r, mixKeyframes: i, mirroredGenerator: a, resolvedDuration: o, calculatedDuration: s } = this;
		if (this.startTime === null) return n.next(0);
		let { delay: c = 0, keyframes: l, repeat: u, repeatType: d, repeatDelay: f, type: p, onUpdate: m, finalKeyframe: h } = this.options;
		this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - r / this.speed, this.startTime)), t ? this.currentTime = e : this.updateTime(e);
		let g = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1), _ = this.playbackSpeed >= 0 ? g < 0 : g > r;
		this.currentTime = Math.max(g, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = r);
		let v = this.currentTime, y = n;
		if (u) {
			let e = Math.min(this.currentTime, r) / o, t = Math.floor(e), n = e % 1;
			!n && e >= 1 && (n = 1), n === 1 && t--, t = Math.min(t, u + 1), t % 2 && (d === "reverse" ? (n = 1 - n, f && (n -= f / o)) : d === "mirror" && (y = a)), v = T(0, 1, n) * o;
		}
		let b;
		_ ? (this.delayState.value = l[0], b = this.delayState) : b = y.next(v), i && !_ && (b.value = i(b.value));
		let { done: x } = b;
		!_ && s !== null && (x = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0);
		let S = this.holdTime === null && (this.state === "finished" || this.state === "running" && x);
		return S && p !== Gn && (b.value = er(l, this.options, h, this.speed)), m && m(b.value), S && this.finish(), b;
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
	get duration() {
		return /* @__PURE__ */ A(this.calculatedDuration);
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ A(e);
	}
	get time() {
		return /* @__PURE__ */ A(this.currentTime);
	}
	set time(e) {
		e = /* @__PURE__ */ k(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = e, this.tick(e));
	}
	getGeneratorVelocity() {
		let e = this.currentTime;
		if (e <= 0) return this.options.velocity || 0;
		if (this.generator.velocity) return this.generator.velocity(e);
		let t = this.generator.next(e).value;
		return Wn((e) => this.generator.next(e).value, e, t);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(e) {
		let t = this.playbackSpeed !== e;
		t && this.driver && this.updateTime(F.now()), this.playbackSpeed = e, t && this.driver && (this.time = /* @__PURE__ */ A(this.currentTime));
	}
	play() {
		if (this.isStopped) return;
		let { driver: e = On, startTime: t } = this.options;
		this.driver ||= e((e) => this.tick(e)), this.options.onPlay?.();
		let n = this.driver.now();
		this.state === "finished" ? (this.updateFinished(), this.startTime = n) : this.holdTime === null ? this.startTime ||= t ?? n : this.startTime = n - this.holdTime, this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
	}
	pause() {
		this.state = "paused", this.updateTime(F.now()), this.holdTime = this.currentTime;
	}
	complete() {
		this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
	}
	finish() {
		this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
	}
	cancel() {
		this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
	}
	teardown() {
		this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, Ct.mainThread--;
	}
	stopDriver() {
		this.driver &&= (this.driver.stop(), void 0);
	}
	sample(e) {
		return this.startTime = 0, this.tick(e, !0);
	}
	attachTimeline(e) {
		return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), e.observe(this);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs
function or(e) {
	for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs
var U = (e) => e * 180 / Math.PI, sr = (e) => lr(U(Math.atan2(e[1], e[0]))), cr = {
	x: 4,
	y: 5,
	translateX: 4,
	translateY: 5,
	scaleX: 0,
	scaleY: 3,
	scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
	rotate: sr,
	rotateZ: sr,
	skewX: (e) => U(Math.atan(e[1])),
	skewY: (e) => U(Math.atan(e[2])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, lr = (e) => (e %= 360, e < 0 && (e += 360), e), ur = sr, dr = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), fr = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), pr = {
	x: 12,
	y: 13,
	z: 14,
	translateX: 12,
	translateY: 13,
	translateZ: 14,
	scaleX: dr,
	scaleY: fr,
	scale: (e) => (dr(e) + fr(e)) / 2,
	rotateX: (e) => lr(U(Math.atan2(e[6], e[5]))),
	rotateY: (e) => lr(U(Math.atan2(-e[2], e[0]))),
	rotateZ: ur,
	rotate: ur,
	skewX: (e) => U(Math.atan(e[4])),
	skewY: (e) => U(Math.atan(e[1])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function mr(e) {
	return +!!e.includes("scale");
}
function hr(e, t) {
	if (!e || e === "none") return mr(t);
	let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u), r, i;
	if (n) r = pr, i = n;
	else {
		let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		r = cr, i = t;
	}
	if (!i) return mr(t);
	let a = r[t], o = i[1].split(",").map(_r);
	return typeof a == "function" ? a(o) : o[a];
}
var gr = (e, t) => {
	let { transform: n = "none" } = getComputedStyle(e);
	return hr(n, t);
};
function _r(e) {
	return parseFloat(e.trim());
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs
var vr = [
	"transformPerspective",
	"x",
	"y",
	"z",
	"translateX",
	"translateY",
	"translateZ",
	"scale",
	"scaleX",
	"scaleY",
	"rotate",
	"rotateX",
	"rotateY",
	"rotateZ",
	"skew",
	"skewX",
	"skewY"
], yr = /* @__PURE__ */ new Set([...vr, "pathRotation"]), br = (e) => e === At || e === R, xr = new Set([
	"x",
	"y",
	"z"
]), Sr = vr.filter((e) => !xr.has(e));
function Cr(e) {
	let t = [];
	return Sr.forEach((n) => {
		let r = e.getValue(n);
		r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith("scale")));
	}), t;
}
var W = {
	width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0", boxSizing: r }) => {
		let i = e.max - e.min;
		return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
	},
	height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0", boxSizing: r }) => {
		let i = e.max - e.min;
		return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
	},
	top: (e, { top: t }) => parseFloat(t),
	left: (e, { left: t }) => parseFloat(t),
	bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
	right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
	x: (e, { transform: t }) => hr(t, "x"),
	y: (e, { transform: t }) => hr(t, "y")
};
W.translateX = W.x, W.translateY = W.y;
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs
var G = /* @__PURE__ */ new Set(), wr = !1, Tr = !1, Er = !1;
function Dr() {
	if (Tr) {
		let e = Array.from(G).filter((e) => e.needsMeasurement), t = new Set(e.map((e) => e.element)), n = /* @__PURE__ */ new Map();
		t.forEach((e) => {
			let t = Cr(e);
			t.length && (n.set(e, t), e.render());
		}), e.forEach((e) => e.measureInitialState()), t.forEach((e) => {
			e.render();
			let t = n.get(e);
			t && t.forEach(([t, n]) => {
				e.getValue(t)?.set(n);
			});
		}), e.forEach((e) => e.measureEndState()), e.forEach((e) => {
			e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY);
		});
	}
	Tr = !1, wr = !1, G.forEach((e) => e.complete(Er)), G.clear();
}
function Or() {
	G.forEach((e) => {
		e.readKeyframes(), e.needsMeasurement && (Tr = !0);
	});
}
function kr() {
	Er = !0, Or(), Dr(), Er = !1;
}
var Ar = class {
	constructor(e, t, n, r, i, a = !1) {
		this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = r, this.element = i, this.isAsync = a;
	}
	scheduleResolve() {
		this.state = "scheduled", this.isAsync ? (G.add(this), wr || (wr = !0, M.read(Or), M.resolveKeyframes(Dr))) : (this.readKeyframes(), this.complete());
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this;
		if (e[0] === null) {
			let i = r?.get(), a = e[e.length - 1];
			if (i !== void 0) e[0] = i;
			else if (n && t) {
				let r = n.readValue(t, a);
				r != null && (e[0] = r);
			}
			e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]);
		}
		or(e);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(e = !1) {
		this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), G.delete(this);
	}
	cancel() {
		this.state === "scheduled" && (G.delete(this), this.state = "pending");
	}
	resume() {
		this.state === "pending" && this.scheduleResolve();
	}
}, jr = (e) => e.startsWith("--");
//#endregion
//#region node_modules/motion-dom/dist/es/render/dom/style-set.mjs
function Mr(e, t, n) {
	jr(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/supports/flags.mjs
var Nr = {};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/supports/memo.mjs
function Pr(e, t) {
	let n = /* @__PURE__ */ Ve(e);
	return () => Nr[t] ?? n();
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var Fr = /* @__PURE__ */ Pr(() => window.ScrollTimeline !== void 0, "scrollTimeline"), Ir = /*@__PURE__*/ Pr(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
}, "linearEasing"), Lr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Rr = {
	linear: "linear",
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",
	circIn: /*@__PURE__*/ Lr([
		0,
		.65,
		.55,
		1
	]),
	circOut: /*@__PURE__*/ Lr([
		.55,
		0,
		1,
		.45
	]),
	backIn: /*@__PURE__*/ Lr([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: /*@__PURE__*/ Lr([
		.33,
		1.53,
		.69,
		.99
	])
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
function zr(e, t) {
	if (e) return typeof e == "function" ? Ir() ? kn(e, t) : "ease-out" : /* @__PURE__ */ ft(e) ? Lr(e) : Array.isArray(e) ? e.map((e) => zr(e, t) || Rr.easeOut) : Rr[e];
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
function Br(e, t, n, { delay: r = 0, duration: i = 300, repeat: a = 0, repeatType: o = "loop", ease: s = "easeOut", times: c } = {}, l = void 0) {
	let u = { [t]: n };
	c && (u.offset = c);
	let d = zr(s, i);
	Array.isArray(d) && (u.easing = d), j.value && Ct.waapi++;
	let f = {
		delay: r,
		duration: i,
		easing: Array.isArray(d) ? "linear" : d,
		fill: "both",
		iterations: a + 1,
		direction: o === "reverse" ? "alternate" : "normal"
	};
	l && (f.pseudoElement = l);
	let p = e.animate(u, f);
	return j.value && p.finished.finally(() => {
		Ct.waapi--;
	}), p;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
function Vr(e) {
	return typeof e == "function" && "applyToOptions" in e;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
function Hr({ type: e, ...t }) {
	return Vr(e) && Ir() ? e.applyToOptions(t) : (t.duration ??= 300, t.ease ??= "easeOut", t);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs
var Ur = class extends rr {
	constructor(e) {
		if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !e) return;
		let { element: t, name: n, keyframes: r, pseudoElement: i, allowFlatten: a = !1, finalKeyframe: o, onComplete: s } = e;
		this.isPseudoElement = !!i, this.allowFlatten = a, this.options = e, E(typeof e.type != "string", "Mini animate() doesn't support \"type\" as a string.", "mini-spring");
		let c = Hr(e);
		this.animation = Br(t, n, r, c, i), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
			if (this.finishedTime = this.time, !i) {
				let e = er(r, this.options, o, this.speed);
				this.updateMotionValue && this.updateMotionValue(e), Mr(t, n, e), this.animation.cancel();
			}
			s?.(), this.notifyFinished();
		};
	}
	play() {
		this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.finish?.();
	}
	cancel() {
		try {
			this.animation.cancel();
		} catch {}
	}
	stop() {
		if (this.isStopped) return;
		this.isStopped = !0;
		let { state: e } = this;
		e === "idle" || e === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
	}
	commitStyles() {
		let e = this.options?.element;
		!this.isPseudoElement && e?.isConnected && this.animation.commitStyles?.();
	}
	get duration() {
		let e = this.animation.effect?.getComputedTiming?.().duration || 0;
		return /* @__PURE__ */ A(Number(e));
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ A(e);
	}
	get time() {
		return /* @__PURE__ */ A(Number(this.animation.currentTime) || 0);
	}
	set time(e) {
		let t = this.finishedTime !== null;
		this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ k(e), t && this.animation.pause();
	}
	get speed() {
		return this.animation.playbackRate;
	}
	set speed(e) {
		e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
	}
	get state() {
		return this.finishedTime === null ? this.animation.playState : "finished";
	}
	get startTime() {
		return this.manualStartTime ?? Number(this.animation.startTime);
	}
	set startTime(e) {
		this.manualStartTime = this.animation.startTime = e;
	}
	attachTimeline({ timeline: e, rangeStart: t, rangeEnd: n, observe: r }) {
		return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, e && Fr() ? (this.animation.timeline = e, t && (this.animation.rangeStart = t), n && (this.animation.rangeEnd = n), O) : r(this);
	}
}, Wr = {
	anticipate: it,
	backInOut: rt,
	circInOut: st
};
function Gr(e) {
	return e in Wr;
}
function Kr(e) {
	typeof e.ease == "string" && Gr(e.ease) && (e.ease = Wr[e.ease]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/NativeAnimationExtended.mjs
var qr = 10, Jr = class extends Ur {
	constructor(e) {
		Kr(e), nr(e), super(e), e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime), this.options = e;
	}
	updateMotionValue(e) {
		let { motionValue: t, onUpdate: n, onComplete: r, element: i, ...a } = this.options;
		if (!t) return;
		if (e !== void 0) {
			t.set(e);
			return;
		}
		let o = new ar({
			...a,
			autoplay: !1
		}), s = Math.max(qr, F.now() - this.startTime), c = T(0, qr, s - qr), l = o.sample(s).value, { name: u } = this.options;
		i && u && Mr(i, u, l), t.setWithVelocity(o.sample(Math.max(0, s - c)).value, l, c), o.stop();
	}
}, Yr = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (B.test(e) || e === "0") && !e.startsWith("url("));
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs
function Xr(e) {
	let t = e[0];
	if (e.length === 1) return !0;
	for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Zr(e, t, n, r) {
	let i = e[0];
	if (i === null) return !1;
	if (t === "display" || t === "visibility") return !0;
	let a = e[e.length - 1], o = Yr(i, t), s = Yr(a, t);
	return Le(o === s, `You are trying to animate ${t} from "${i}" to "${a}". "${o ? a : i}" is not an animatable value.`, "value-not-animatable"), !o || !s ? !1 : Xr(e) || (n === "spring" || Vr(n)) && r;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs
function Qr(e) {
	e.duration = 0, e.type = "keyframes";
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/utils/accelerated-values.mjs
var $r = new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]), ei = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function ti(e) {
	for (let t = 0; t < e.length; t++) if (typeof e[t] == "string" && ei.test(e[t])) return !0;
	return !1;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs
var ni = new Set([
	"color",
	"backgroundColor",
	"outlineColor",
	"fill",
	"stroke",
	"borderColor",
	"borderTopColor",
	"borderRightColor",
	"borderBottomColor",
	"borderLeftColor"
]), ri = /*@__PURE__*/ Ve(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function ii(e) {
	let { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: a, type: o, keyframes: s } = e;
	if (!(t?.owner?.current instanceof HTMLElement)) return !1;
	let { onUpdate: c, transformTemplate: l } = t.owner.getProps();
	return ri() && n && ($r.has(n) || ni.has(n) && ti(s)) && (n !== "transform" || !l) && !c && !r && i !== "mirror" && a !== 0 && o !== "inertia";
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
var ai = 40, oi = class extends rr {
	constructor({ autoplay: e = !0, delay: t = 0, type: n = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: a = "loop", keyframes: o, name: s, motionValue: c, element: l, ...u }) {
		super(), this.stop = () => {
			this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
		}, this.createdAt = F.now();
		let d = {
			autoplay: e,
			delay: t,
			type: n,
			repeat: r,
			repeatDelay: i,
			repeatType: a,
			name: s,
			motionValue: c,
			element: l,
			...u
		}, f = l?.KeyframeResolver || Ar;
		this.keyframeResolver = new f(o, (e, t, n) => this.onKeyframesResolved(e, t, d, !n), s, c, l), this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(e, t, n, r) {
		this.keyframeResolver = void 0;
		let { name: i, type: a, velocity: o, delay: s, isHandoff: c, onUpdate: l } = n;
		this.resolvedAt = F.now();
		let u = !0;
		Zr(e, i, a, o) || (u = !1, (D.instantAnimations || !s) && l?.(er(e, n, t)), e[0] = e[e.length - 1], Qr(n), n.repeat = 0);
		let d = {
			startTime: r ? this.resolvedAt && this.resolvedAt - this.createdAt > ai ? this.resolvedAt : this.createdAt : void 0,
			finalKeyframe: t,
			...n,
			keyframes: e
		}, f = u && !c && ii(d), p = d.motionValue?.owner?.current, m;
		if (f) try {
			m = new Jr({
				...d,
				element: p
			});
		} catch {
			m = new ar(d);
		}
		else m = new ar(d);
		m.finished.then(() => {
			this.notifyFinished();
		}).catch(O), this.pendingTimeline &&= (this.stopTimeline = m.attachTimeline(this.pendingTimeline), void 0), this._animation = m;
	}
	get finished() {
		return this._animation ? this.animation.finished : this._finished;
	}
	then(e, t) {
		return this.finished.finally(e).then(() => {});
	}
	get animation() {
		return this._animation || (this.keyframeResolver?.resume(), kr()), this._animation;
	}
	get duration() {
		return this.animation.duration;
	}
	get iterationDuration() {
		return this.animation.iterationDuration;
	}
	get time() {
		return this.animation.time;
	}
	set time(e) {
		this.animation.time = e;
	}
	get speed() {
		return this.animation.speed;
	}
	get state() {
		return this.animation.state;
	}
	set speed(e) {
		this.animation.speed = e;
	}
	get startTime() {
		return this.animation.startTime;
	}
	attachTimeline(e) {
		return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
	}
	play() {
		this.animation.play();
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.complete();
	}
	cancel() {
		this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/calc-child-stagger.mjs
function si(e, t, n, r = 0, i = 1) {
	let a = Array.from(e).sort((e, t) => e.sortNodePosition(t)).indexOf(t), o = e.size, s = (o - 1) * r;
	return typeof n == "function" ? n(a, o) : i === 1 ? a * r : s - a * r;
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/index.mjs
var ci = 30, li = (e) => !isNaN(parseFloat(e)), ui = { current: void 0 }, di = class {
	constructor(e, t = {}) {
		this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (e) => {
			let t = F.now();
			if (this.updatedAt !== t && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents)) for (let e of this.dependents) e.dirty();
		}, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner;
	}
	setCurrent(e) {
		this.current = e, this.updatedAt = F.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = li(this.current));
	}
	setPrevFrameValue(e = this.current) {
		this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
	}
	onChange(e) {
		return process.env.NODE_ENV !== "production" && qe(!1, "value.onChange(callback) is deprecated. Switch to value.on(\"change\", callback)."), this.on("change", e);
	}
	on(e, t) {
		this.events[e] || (this.events[e] = new We());
		let n = this.events[e].add(t);
		return e === "change" ? () => {
			n(), M.read(() => {
				this.events.change.getSize() || this.stop();
			});
		} : n;
	}
	clearListeners() {
		for (let e in this.events) this.events[e].clear();
	}
	attach(e, t) {
		this.passiveEffect = e, this.stopPassiveEffect = t;
	}
	set(e) {
		this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
	}
	setWithVelocity(e, t, n) {
		this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - n;
	}
	jump(e, t = !0) {
		this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, t && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
	dirty() {
		this.events.change?.notify(this.current);
	}
	addDependent(e) {
		this.dependents ||= /* @__PURE__ */ new Set(), this.dependents.add(e);
	}
	removeDependent(e) {
		this.dependents && this.dependents.delete(e);
	}
	get() {
		return ui.current && ui.current.push(this), this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		let e = F.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > ci) return 0;
		let t = Math.min(this.updatedAt - this.prevUpdatedAt, ci);
		return /* @__PURE__ */ Ge(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
	}
	start(e) {
		return this.stop(), new Promise((t) => {
			this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify();
		}).then(() => {
			this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
		});
	}
	stop() {
		this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
	}
	isAnimating() {
		return !!this.animation;
	}
	clearAnimation() {
		delete this.animation;
	}
	destroy() {
		this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
};
function fi(e, t) {
	return new di(e, t);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/resolve-transition.mjs
function pi(e, t) {
	if (e?.inherit && t) {
		let { inherit: n, ...r } = e;
		return {
			...t,
			...r
		};
	}
	return e;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs
function mi(e, t) {
	let n = e?.[t] ?? e?.default ?? e;
	return n === e ? n : pi(n, e);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/default-transitions.mjs
var hi = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
}, gi = (e) => ({
	type: "spring",
	stiffness: 550,
	damping: e === 0 ? 2 * Math.sqrt(550) : 30,
	restSpeed: 10
}), _i = {
	type: "keyframes",
	duration: .8
}, vi = {
	type: "keyframes",
	ease: [
		.25,
		.1,
		.35,
		1
	],
	duration: .3
}, yi = (e, { keyframes: t }) => t.length > 2 ? _i : yr.has(e) ? e.startsWith("scale") ? gi(t[1]) : hi : vi, bi = new Set([
	"when",
	"delay",
	"delayChildren",
	"staggerChildren",
	"staggerDirection",
	"repeat",
	"repeatType",
	"repeatDelay",
	"from",
	"elapsed"
]);
function xi(e) {
	for (let t in e) if (!bi.has(t)) return !0;
	return !1;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs
var Si = (e, t, n, r = {}, i, a) => (o) => {
	let s = mi(r, e) || {}, c = s.delay || r.delay || 0, { elapsed: l = 0 } = r;
	l -= /* @__PURE__ */ k(c);
	let u = {
		keyframes: Array.isArray(n) ? n : [null, n],
		ease: "easeOut",
		velocity: t.getVelocity(),
		...s,
		delay: -l,
		onUpdate: (e) => {
			t.set(e), s.onUpdate && s.onUpdate(e);
		},
		onComplete: () => {
			o(), s.onComplete && s.onComplete();
		},
		name: e,
		motionValue: t,
		element: a ? void 0 : i
	};
	xi(s) || Object.assign(u, yi(e, u)), u.duration &&= /* @__PURE__ */ k(u.duration), u.repeatDelay &&= /* @__PURE__ */ k(u.repeatDelay), u.from !== void 0 && (u.keyframes[0] = u.from);
	let d = !1;
	if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (Qr(u), u.delay === 0 && (d = !0)), (D.instantAnimations || D.skipAnimations || i?.shouldSkipAnimations || s.skipAnimations) && (d = !0, Qr(u), u.delay = 0), u.allowFlatten = !s.type && !s.ease, d && !a && t.get() !== void 0) {
		let e = er(u.keyframes, s);
		if (e !== void 0) {
			M.update(() => {
				u.onUpdate(e), u.onComplete();
			});
			return;
		}
	}
	return s.isSync ? new ar(u) : new oi(u);
}, Ci = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function wi(e) {
	let t = Ci.exec(e);
	if (!t) return [,];
	let [, n, r, i] = t;
	return [`--${n ?? r}`, i];
}
var Ti = 4;
function Ei(e, t, n = 1) {
	E(n <= Ti, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
	let [r, i] = wi(e);
	if (!r) return;
	let a = window.getComputedStyle(t).getPropertyValue(r);
	if (a) {
		let e = a.trim();
		return Re(e) ? parseFloat(e) : e;
	}
	return Dt(i) ? Ei(i, t, n + 1) : i;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/resolve-variants.mjs
function Di(e) {
	let t = [{}, {}];
	return e?.values.forEach((e, n) => {
		t[0][n] = e.get(), t[1][n] = e.getVelocity();
	}), t;
}
function Oi(e, t, n, r) {
	if (typeof t == "function") {
		let [i, a] = Di(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
		let [i, a] = Di(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	return t;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/resolve-dynamic-variants.mjs
function ki(e, t, n) {
	let r = e.getProps();
	return Oi(r, t, n === void 0 ? r.custom : n, e);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/keys-position.mjs
var Ai = new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	...vr
]), ji = (e) => Array.isArray(e);
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/setters.mjs
function Mi(e, t, n) {
	e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, fi(n));
}
function Ni(e) {
	return ji(e) ? e[e.length - 1] || 0 : e;
}
function Pi(e, t) {
	let { transitionEnd: n = {}, transition: r = {}, ...i } = ki(e, t) || {};
	i = {
		...i,
		...n
	};
	for (let t in i) Mi(e, t, Ni(i[t]));
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs
var K = (e) => !!(e && e.getVelocity);
//#endregion
//#region node_modules/motion-dom/dist/es/value/will-change/is.mjs
function Fi(e) {
	return !!(K(e) && e.add);
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/will-change/add-will-change.mjs
function Ii(e, t) {
	let n = e.getValue("willChange");
	if (Fi(n)) return n.add(t);
	if (!n && D.WillChange) {
		let n = new D.WillChange("auto");
		e.addValue("willChange", n), n.add(t);
	}
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs
function Li(e) {
	return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
var Ri = "data-" + Li("framerAppearId");
//#endregion
//#region node_modules/motion-dom/dist/es/animation/optimized-appear/get-appear-id.mjs
function zi(e) {
	return e.props[Ri];
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/interfaces/visual-element-target.mjs
function Bi({ protectedKeys: e, needsAnimating: t }, n) {
	let r = e.hasOwnProperty(n) && t[n] !== !0;
	return t[n] = !1, r;
}
function Vi(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
	let { transition: a, transitionEnd: o, ...s } = t, c = e.getDefaultTransition();
	a = a ? pi(a, c) : c;
	let l = a?.reduceMotion, u = a?.skipAnimations;
	r && (a = r);
	let d = [], f = i && e.animationState && e.animationState.getState()[i], p = a?.path;
	p && p.animateVisualElement(e, s, a, n, d);
	for (let t in s) {
		let r = e.getValue(t, e.latestValues[t] ?? null), i = s[t];
		if (i === void 0 || f && Bi(f, t)) continue;
		let o = {
			delay: n,
			...mi(a || {}, t)
		};
		u && (o.skipAnimations = !0);
		let c = r.get();
		if (c !== void 0 && !r.isAnimating() && !Array.isArray(i) && i === c && !o.velocity) {
			M.update(() => r.set(i));
			continue;
		}
		let p = !1;
		if (window.MotionHandoffAnimation) {
			let n = zi(e);
			if (n) {
				let e = window.MotionHandoffAnimation(n, t, M);
				e !== null && (o.startTime = e, p = !0);
			}
		}
		Ii(e, t);
		let m = l ?? e.shouldReduceMotion;
		r.start(Si(t, r, i, m && Ai.has(t) ? { type: !1 } : o, e, p));
		let h = r.animation;
		h && d.push(h);
	}
	if (o) {
		let t = () => M.update(() => {
			o && Pi(e, o);
		});
		d.length ? Promise.all(d).then(t) : t();
	}
	return d;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/interfaces/visual-element-variant.mjs
function Hi(e, t, n = {}) {
	let r = ki(e, t, n.type === "exit" ? e.presenceContext?.custom : void 0), { transition: i = e.getDefaultTransition() || {} } = r || {};
	n.transitionOverride && (i = n.transitionOverride);
	let a = r ? () => Promise.all(Vi(e, r, n)) : () => Promise.resolve(), o = e.variantChildren && e.variantChildren.size ? (r = 0) => {
		let { delayChildren: a = 0, staggerChildren: o, staggerDirection: s } = i;
		return Ui(e, t, r, a, o, s, n);
	} : () => Promise.resolve(), { when: s } = i;
	if (s) {
		let [e, t] = s === "beforeChildren" ? [a, o] : [o, a];
		return e().then(() => t());
	} else return Promise.all([a(), o(n.delay)]);
}
function Ui(e, t, n = 0, r = 0, i = 0, a = 1, o) {
	let s = [];
	for (let c of e.variantChildren) c.notify("AnimationStart", t), s.push(Hi(c, t, {
		...o,
		delay: n + (typeof r == "function" ? 0 : r) + si(e.variantChildren, c, r, i, a)
	}).then(() => c.notify("AnimationComplete", t)));
	return Promise.all(s);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/interfaces/visual-element.mjs
function Wi(e, t, n = {}) {
	e.notify("AnimationStart", t);
	let r;
	if (Array.isArray(t)) {
		let i = t.map((t) => Hi(e, t, n));
		r = Promise.all(i);
	} else if (typeof t == "string") r = Hi(e, t, n);
	else {
		let i = typeof t == "function" ? ki(e, t, n.custom) : t;
		r = Promise.all(Vi(e, i, n));
	}
	return r.then(() => {
		e.notify("AnimationComplete", t);
	});
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/auto.mjs
var Gi = {
	test: (e) => e === "auto",
	parse: (e) => e
}, Ki = (e) => (t) => t.test(e), qi = [
	At,
	R,
	L,
	I,
	Kt,
	Gt,
	Gi
], Ji = (e) => qi.find(Ki(e));
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs
function Yi(e) {
	return typeof e == "number" ? e === 0 : e === null ? !0 : e === "none" || e === "0" || Be(e);
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/complex/filter.mjs
var Xi = new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function Zi(e) {
	let [t, n] = e.slice(0, -1).split("(");
	if (t === "drop-shadow") return e;
	let [r] = n.match(Pt) || [];
	if (!r) return e;
	let i = n.replace(r, ""), a = +!!Xi.has(t);
	return r !== n && (a *= 100), t + "(" + a + i + ")";
}
var Qi = /\b([a-z-]*)\(.*?\)/gu, $i = {
	...B,
	getAnimatableNone: (e) => {
		let t = e.match(Qi);
		return t ? t.map(Zi).join(" ") : e;
	}
}, ea = {
	...B,
	getAnimatableNone: (e) => {
		let t = B.parse(e);
		return B.createTransformer(e)(t.map((e) => typeof e == "number" ? 0 : typeof e == "object" ? {
			...e,
			alpha: 1
		} : e));
	}
}, ta = {
	...At,
	transform: Math.round
}, na = {
	borderWidth: R,
	borderTopWidth: R,
	borderRightWidth: R,
	borderBottomWidth: R,
	borderLeftWidth: R,
	borderRadius: R,
	borderTopLeftRadius: R,
	borderTopRightRadius: R,
	borderBottomRightRadius: R,
	borderBottomLeftRadius: R,
	width: R,
	maxWidth: R,
	height: R,
	maxHeight: R,
	top: R,
	right: R,
	bottom: R,
	left: R,
	inset: R,
	insetBlock: R,
	insetBlockStart: R,
	insetBlockEnd: R,
	insetInline: R,
	insetInlineStart: R,
	insetInlineEnd: R,
	padding: R,
	paddingTop: R,
	paddingRight: R,
	paddingBottom: R,
	paddingLeft: R,
	paddingBlock: R,
	paddingBlockStart: R,
	paddingBlockEnd: R,
	paddingInline: R,
	paddingInlineStart: R,
	paddingInlineEnd: R,
	margin: R,
	marginTop: R,
	marginRight: R,
	marginBottom: R,
	marginLeft: R,
	marginBlock: R,
	marginBlockStart: R,
	marginBlockEnd: R,
	marginInline: R,
	marginInlineStart: R,
	marginInlineEnd: R,
	fontSize: R,
	backgroundPositionX: R,
	backgroundPositionY: R,
	rotate: I,
	pathRotation: I,
	rotateX: I,
	rotateY: I,
	rotateZ: I,
	scale: Mt,
	scaleX: Mt,
	scaleY: Mt,
	scaleZ: Mt,
	skew: I,
	skewX: I,
	skewY: I,
	distance: R,
	translateX: R,
	translateY: R,
	translateZ: R,
	x: R,
	y: R,
	z: R,
	perspective: R,
	transformPerspective: R,
	opacity: jt,
	originX: qt,
	originY: qt,
	originZ: R,
	zIndex: ta,
	fillOpacity: jt,
	strokeOpacity: jt,
	numOctaves: ta
}, ra = {
	...na,
	color: z,
	backgroundColor: z,
	outlineColor: z,
	fill: z,
	stroke: z,
	borderColor: z,
	borderTopColor: z,
	borderRightColor: z,
	borderBottomColor: z,
	borderLeftColor: z,
	filter: $i,
	WebkitFilter: $i,
	mask: ea,
	WebkitMask: ea
}, ia = (e) => ra[e], aa = /*@__PURE__*/ new Set([$i, ea]);
function oa(e, t) {
	let n = ia(e);
	return aa.has(n) || (n = B), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
var sa = new Set([
	"auto",
	"none",
	"0"
]);
function ca(e, t, n) {
	let r = 0, i;
	for (; r < e.length && !i;) {
		let t = e[r];
		typeof t == "string" && !sa.has(t) && rn(t).values.length && (i = e[r]), r++;
	}
	if (i && n) for (let r of t) e[r] = oa(n, i);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
var la = class extends Ar {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i, !0);
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, element: t, name: n } = this;
		if (!t || !t.current) return;
		super.readKeyframes();
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (typeof r == "string" && (r = r.trim(), Dt(r))) {
				let i = Ei(r, t.current);
				i !== void 0 && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r);
			}
		}
		if (this.resolveNoneKeyframes(), !Ai.has(n) || e.length !== 2) return;
		let [r, i] = e, a = Ji(r), o = Ji(i);
		if (kt(r) !== kt(i) && W[n]) {
			this.needsMeasurement = !0;
			return;
		}
		if (a !== o) if (br(a) && br(o)) for (let t = 0; t < e.length; t++) {
			let n = e[t];
			typeof n == "string" && (e[t] = parseFloat(n));
		}
		else W[n] && (this.needsMeasurement = !0);
	}
	resolveNoneKeyframes() {
		let { unresolvedKeyframes: e, name: t } = this, n = [];
		for (let t = 0; t < e.length; t++) (e[t] === null || Yi(e[t])) && n.push(t);
		n.length && ca(e, n, t);
	}
	measureInitialState() {
		let { element: e, unresolvedKeyframes: t, name: n } = this;
		if (!e || !e.current) return;
		n === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = W[n](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
		let r = t[t.length - 1];
		r !== void 0 && e.getValue(n, r).jump(r, !1);
	}
	measureEndState() {
		let { element: e, name: t, unresolvedKeyframes: n } = this;
		if (!e || !e.current) return;
		let r = e.getValue(t);
		r && r.jump(this.measuredOrigin, !1);
		let i = n.length - 1, a = n[i];
		n[i] = W[t](e.measureViewportBox(), window.getComputedStyle(e.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), this.removedTransforms?.length && this.removedTransforms.forEach(([t, n]) => {
			e.getValue(t).set(n);
		}), this.resolveNoneKeyframes();
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
function ua(e, t, n) {
	if (e == null) return [];
	if (e instanceof EventTarget) return [e];
	if (typeof e == "string") {
		let r = document;
		t && (r = t.current);
		let i = n?.[e] ?? r.querySelectorAll(e);
		return i ? Array.from(i) : [];
	}
	return Array.from(e).filter((e) => e != null);
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs
var da = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
//#endregion
//#region node_modules/motion-dom/dist/es/utils/is-html-element.mjs
function fa(e) {
	return ze(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/microtask.mjs
var { schedule: pa, cancel: ma } = /* @__PURE__ */ yt(queueMicrotask, !1), q = {
	x: !1,
	y: !1
};
function ha() {
	return q.x || q.y;
}
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs
function ga(e) {
	return e === "x" || e === "y" ? q[e] ? null : (q[e] = !0, () => {
		q[e] = !1;
	}) : q.x || q.y ? null : (q.x = q.y = !0, () => {
		q.x = q.y = !1;
	});
}
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/utils/setup.mjs
function _a(e, t) {
	let n = ua(e), r = new AbortController();
	return [
		n,
		{
			passive: !0,
			...t,
			signal: r.signal
		},
		() => r.abort()
	];
}
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/hover.mjs
function va(e) {
	return !(e.pointerType === "touch" || ha());
}
function ya(e, t, n = {}) {
	let [r, i, a] = _a(e, n);
	return r.forEach((e) => {
		let n = !1, r = !1, a, o = () => {
			e.removeEventListener("pointerleave", u);
		}, s = (e) => {
			a &&= (a(e), void 0), o();
		}, c = (e) => {
			n = !1, window.removeEventListener("pointerup", c), window.removeEventListener("pointercancel", c), r && (r = !1, s(e));
		}, l = () => {
			n = !0, window.addEventListener("pointerup", c, i), window.addEventListener("pointercancel", c, i);
		}, u = (e) => {
			if (e.pointerType !== "touch") {
				if (n) {
					r = !0;
					return;
				}
				s(e);
			}
		};
		e.addEventListener("pointerenter", (n) => {
			if (!va(n)) return;
			r = !1;
			let o = t(e, n);
			typeof o == "function" && (a = o, e.addEventListener("pointerleave", u, i));
		}, i), e.addEventListener("pointerdown", l, i);
	}), a;
}
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs
var ba = (e, t) => t ? e === t ? !0 : ba(e, t.parentElement) : !1, xa = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, Sa = new Set([
	"BUTTON",
	"INPUT",
	"SELECT",
	"TEXTAREA",
	"A"
]);
function Ca(e) {
	return Sa.has(e.tagName) || e.isContentEditable === !0;
}
var wa = new Set([
	"INPUT",
	"SELECT",
	"TEXTAREA"
]);
function Ta(e) {
	return wa.has(e.tagName) || e.isContentEditable === !0;
}
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs
var Ea = /* @__PURE__ */ new WeakSet();
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs
function Da(e) {
	return (t) => {
		t.key === "Enter" && e(t);
	};
}
function Oa(e, t) {
	e.dispatchEvent(new PointerEvent("pointer" + t, {
		isPrimary: !0,
		bubbles: !0
	}));
}
var ka = (e, t) => {
	let n = e.currentTarget;
	if (!n) return;
	let r = Da(() => {
		if (Ea.has(n)) return;
		Oa(n, "down");
		let e = Da(() => {
			Oa(n, "up");
		});
		n.addEventListener("keyup", e, t), n.addEventListener("blur", () => Oa(n, "cancel"), t);
	});
	n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/press/index.mjs
function Aa(e) {
	return xa(e) && !ha();
}
var ja = /* @__PURE__ */ new WeakSet();
function Ma(e, t, n = {}) {
	let [r, i, a] = _a(e, n), o = (e) => {
		let r = e.currentTarget;
		if (!Aa(e) || ja.has(e)) return;
		Ea.add(r), n.stopPropagation && ja.add(e);
		let a = t(r, e), o = (e, t) => {
			window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", c), Ea.has(r) && Ea.delete(r), Aa(e) && typeof a == "function" && a(e, { success: t });
		}, s = (e) => {
			o(e, r === window || r === document || n.useGlobalTarget || ba(r, e.target));
		}, c = (e) => {
			o(e, !1);
		};
		window.addEventListener("pointerup", s, i), window.addEventListener("pointercancel", c, i);
	};
	return r.forEach((e) => {
		(n.useGlobalTarget ? window : e).addEventListener("pointerdown", o, i), fa(e) && (e.addEventListener("focus", (e) => ka(e, i)), !Ca(e) && !e.hasAttribute("tabindex") && (e.tabIndex = 0));
	}), a;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/is-svg-element.mjs
function Na(e) {
	return ze(e) && "ownerSVGElement" in e;
}
//#endregion
//#region node_modules/motion-dom/dist/es/resize/handle-element.mjs
var Pa = /* @__PURE__ */ new WeakMap(), Fa, Ia = (e, t, n) => (r, i) => i && i[0] ? i[0][e + "Size"] : Na(r) && "getBBox" in r ? r.getBBox()[t] : r[n], La = /*@__PURE__*/ Ia("inline", "width", "offsetWidth"), Ra = /*@__PURE__*/ Ia("block", "height", "offsetHeight");
function za({ target: e, borderBoxSize: t }) {
	Pa.get(e)?.forEach((n) => {
		n(e, {
			get width() {
				return La(e, t);
			},
			get height() {
				return Ra(e, t);
			}
		});
	});
}
function Ba(e) {
	e.forEach(za);
}
function Va() {
	typeof ResizeObserver > "u" || (Fa = new ResizeObserver(Ba));
}
function Ha(e, t) {
	Fa || Va();
	let n = ua(e);
	return n.forEach((e) => {
		let n = Pa.get(e);
		n || (n = /* @__PURE__ */ new Set(), Pa.set(e, n)), n.add(t), Fa?.observe(e);
	}), () => {
		n.forEach((e) => {
			let n = Pa.get(e);
			n?.delete(t), n?.size || Fa?.unobserve(e);
		});
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/resize/handle-window.mjs
var Ua = /* @__PURE__ */ new Set(), Wa;
function Ga() {
	Wa = () => {
		let e = {
			get width() {
				return window.innerWidth;
			},
			get height() {
				return window.innerHeight;
			}
		};
		Ua.forEach((t) => t(e));
	}, window.addEventListener("resize", Wa);
}
function Ka(e) {
	return Ua.add(e), Wa || Ga(), () => {
		Ua.delete(e), !Ua.size && typeof Wa == "function" && (window.removeEventListener("resize", Wa), Wa = void 0);
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/resize/index.mjs
function qa(e, t) {
	return typeof e == "function" ? Ka(e) : Ha(e, t);
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs
function Ja(e) {
	return Na(e) && e.tagName === "svg";
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/find.mjs
var Ya = [
	...qi,
	z,
	B
], Xa = (e) => Ya.find(Ki(e)), Za = () => ({
	translate: 0,
	scale: 1,
	origin: 0,
	originPoint: 0
}), Qa = () => ({
	x: Za(),
	y: Za()
}), $a = () => ({
	min: 0,
	max: 0
}), J = () => ({
	x: $a(),
	y: $a()
}), eo = /* @__PURE__ */ new WeakMap();
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-animation-controls.mjs
function to(e) {
	return typeof e == "object" && !!e && typeof e.start == "function";
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-variant-label.mjs
function no(e) {
	return typeof e == "string" || Array.isArray(e);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/variant-props.mjs
var ro = [
	"animate",
	"whileInView",
	"whileFocus",
	"whileHover",
	"whileTap",
	"whileDrag",
	"exit"
], io = ["initial", ...ro];
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-controlling-variants.mjs
function ao(e) {
	return to(e.animate) || io.some((t) => no(e[t]));
}
function oo(e) {
	return !!(ao(e) || e.variants);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/motion-values.mjs
function so(e, t, n) {
	for (let r in t) {
		let i = t[r], a = n[r];
		if (K(i)) e.addValue(r, i);
		else if (K(a)) e.addValue(r, fi(i, { owner: e }));
		else if (a !== i) if (e.hasValue(r)) {
			let t = e.getValue(r);
			t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
		} else {
			let t = e.getStaticValue(r);
			e.addValue(r, fi(t === void 0 ? i : t, { owner: e }));
		}
	}
	for (let r in n) t[r] === void 0 && e.removeValue(r);
	return t;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/reduced-motion/state.mjs
var co = { current: null }, lo = { current: !1 }, uo = typeof window < "u";
function fo() {
	if (lo.current = !0, uo) if (window.matchMedia) {
		let e = window.matchMedia("(prefers-reduced-motion)"), t = () => co.current = e.matches;
		e.addEventListener("change", t), t();
	} else co.current = !1;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/VisualElement.mjs
var po = [
	"AnimationStart",
	"AnimationComplete",
	"Update",
	"BeforeLayoutMeasure",
	"LayoutMeasure",
	"LayoutAnimationStart",
	"LayoutAnimationComplete"
], mo = {};
function ho(e) {
	mo = e;
}
function go() {
	return mo;
}
var _o = class {
	scrapeMotionValuesFromProps(e, t, n) {
		return {};
	}
	constructor({ parent: e, props: t, presenceContext: n, reducedMotionConfig: r, skipAnimations: i, blockInitialAnimation: a, visualState: o }, s = {}) {
		this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Ar, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
			this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
		}, this.renderScheduledAt = 0, this.scheduleRender = () => {
			let e = F.now();
			this.renderScheduledAt < e && (this.renderScheduledAt = e, M.render(this.render, !1, !0));
		};
		let { latestValues: c, renderState: l } = o;
		this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = t.initial ? { ...c } : {}, this.renderState = l, this.parent = e, this.props = t, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.skipAnimationsConfig = i, this.options = s, this.blockInitialAnimation = !!a, this.isControllingVariants = ao(t), this.isVariantNode = oo(t), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
		let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(t, {}, this);
		for (let e in d) {
			let t = d[e];
			c[e] !== void 0 && K(t) && t.set(c[e]);
		}
	}
	mount(e) {
		if (this.hasBeenMounted) for (let e in this.initialValues) this.values.get(e)?.jump(this.initialValues[e]), this.latestValues[e] = this.initialValues[e];
		this.current = e, eo.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (lo.current || fo(), this.shouldReduceMotion = co.current), process.env.NODE_ENV !== "production" && qe(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
	}
	unmount() {
		this.projection && this.projection.unmount(), N(this.notifyUpdate), N(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
		for (let e in this.events) this.events[e].clear();
		for (let e in this.features) {
			let t = this.features[e];
			t && (t.unmount(), t.isMounted = !1);
		}
		this.current = null;
	}
	addChild(e) {
		this.children.add(e), this.enteringChildren ??= /* @__PURE__ */ new Set(), this.enteringChildren.add(e);
	}
	removeChild(e) {
		this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e);
	}
	bindToMotionValue(e, t) {
		if (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(), t.accelerate && $r.has(e) && this.current instanceof HTMLElement) {
			let { factory: n, keyframes: r, times: i, ease: a, duration: o } = t.accelerate, s = new Ur({
				element: this.current,
				name: e,
				keyframes: r,
				times: i,
				ease: a,
				duration: /* @__PURE__ */ k(o)
			}), c = n(s);
			this.valueSubscriptions.set(e, () => {
				c(), s.cancel();
			});
			return;
		}
		let n = yr.has(e);
		n && this.onBindTransform && this.onBindTransform();
		let r = t.on("change", (t) => {
			this.latestValues[e] = t, this.props.onUpdate && M.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
		}), i;
		typeof window < "u" && window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, e, t)), this.valueSubscriptions.set(e, () => {
			r(), i && i();
		});
	}
	sortNodePosition(e) {
		return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
	}
	updateFeatures() {
		let e = "animation";
		for (e in mo) {
			let t = mo[e];
			if (!t) continue;
			let { isEnabled: n, Feature: r } = t;
			if (!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)), this.features[e]) {
				let t = this.features[e];
				t.isMounted ? t.update() : (t.mount(), t.isMounted = !0);
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props);
	}
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : J();
	}
	getStaticValue(e) {
		return this.latestValues[e];
	}
	setStaticValue(e, t) {
		this.latestValues[e] = t;
	}
	update(e, t) {
		(e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
		for (let t = 0; t < po.length; t++) {
			let n = po[t];
			this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
			let r = e["on" + n];
			r && (this.propEventSubscriptions[n] = this.on(n, r));
		}
		this.prevMotionValues = so(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
	}
	getProps() {
		return this.props;
	}
	getVariant(e) {
		return this.props.variants ? this.props.variants[e] : void 0;
	}
	getDefaultTransition() {
		return this.props.transition;
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint;
	}
	getClosestVariantNode() {
		return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
	}
	addVariantChild(e) {
		let t = this.getClosestVariantNode();
		if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e);
	}
	addValue(e, t) {
		let n = this.values.get(e);
		t !== n && (n && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t), this.latestValues[e] = t.get());
	}
	removeValue(e) {
		this.values.delete(e);
		let t = this.valueSubscriptions.get(e);
		t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
	}
	hasValue(e) {
		return this.values.has(e);
	}
	getValue(e, t) {
		if (this.props.values && this.props.values[e]) return this.props.values[e];
		let n = this.values.get(e);
		return n === void 0 && t !== void 0 && (n = fi(t === null ? void 0 : t, { owner: this }), this.addValue(e, n)), n;
	}
	readValue(e, t) {
		let n = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
		return n != null && (typeof n == "string" && (Re(n) || Be(n)) ? n = parseFloat(n) : !Xa(n) && B.test(t) && (n = oa(e, t)), this.setBaseTarget(e, K(n) ? n.get() : n)), K(n) ? n.get() : n;
	}
	setBaseTarget(e, t) {
		this.baseTarget[e] = t;
	}
	getBaseTarget(e) {
		let { initial: t } = this.props, n;
		if (typeof t == "string" || typeof t == "object") {
			let r = Oi(this.props, t, this.presenceContext?.custom);
			r && (n = r[e]);
		}
		if (t && n !== void 0) return n;
		let r = this.getBaseTargetFromProps(this.props, e);
		return r !== void 0 && !K(r) ? r : this.initialValues[e] !== void 0 && n === void 0 ? void 0 : this.baseTarget[e];
	}
	on(e, t) {
		return this.events[e] || (this.events[e] = new We()), this.events[e].add(t);
	}
	notify(e, ...t) {
		this.events[e] && this.events[e].notify(...t);
	}
	scheduleRenderMicrotask() {
		pa.render(this.render);
	}
}, vo = class extends _o {
	constructor() {
		super(...arguments), this.KeyframeResolver = la;
	}
	sortInstanceNodePosition(e, t) {
		return e.compareDocumentPosition(t) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(e, t) {
		let n = e.style;
		return n ? n[t] : void 0;
	}
	removeValueFromRenderState(e, { vars: t, style: n }) {
		delete t[e], delete n[e];
	}
	handleChildMotionValue() {
		this.childSubscription && (this.childSubscription(), delete this.childSubscription);
		let { children: e } = this.props;
		K(e) && (this.childSubscription = e.on("change", (e) => {
			this.current && (this.current.textContent = `${e}`);
		}));
	}
}, Y = class {
	constructor(e) {
		this.isMounted = !1, this.node = e;
	}
	update() {}
};
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/conversion.mjs
function yo({ top: e, left: t, right: n, bottom: r }) {
	return {
		x: {
			min: t,
			max: n
		},
		y: {
			min: e,
			max: r
		}
	};
}
function bo({ x: e, y: t }) {
	return {
		top: t.min,
		right: e.max,
		bottom: t.max,
		left: e.min
	};
}
function xo(e, t) {
	if (!t) return e;
	let n = t({
		x: e.left,
		y: e.top
	}), r = t({
		x: e.right,
		y: e.bottom
	});
	return {
		top: n.y,
		left: n.x,
		bottom: r.y,
		right: r.x
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/utils/has-transform.mjs
function So(e) {
	return e === void 0 || e === 1;
}
function Co({ scale: e, scaleX: t, scaleY: n }) {
	return !So(e) || !So(t) || !So(n);
}
function wo(e) {
	return Co(e) || To(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function To(e) {
	return Eo(e.x) || Eo(e.y);
}
function Eo(e) {
	return e && e !== "0%";
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/delta-apply.mjs
function Do(e, t, n) {
	return n + t * (e - n);
}
function Oo(e, t, n, r, i) {
	return i !== void 0 && (e = Do(e, i, r)), Do(e, n, r) + t;
}
function ko(e, t = 0, n = 1, r, i) {
	e.min = Oo(e.min, t, n, r, i), e.max = Oo(e.max, t, n, r, i);
}
function Ao(e, { x: t, y: n }) {
	ko(e.x, t.translate, t.scale, t.originPoint), ko(e.y, n.translate, n.scale, n.originPoint);
}
var jo = .999999999999, Mo = 1.0000000000001;
function No(e, t, n, r = !1) {
	let i = n.length;
	if (!i) return;
	t.x = t.y = 1;
	let a, o;
	for (let s = 0; s < i; s++) {
		a = n[s], o = a.projectionDelta;
		let { visualElement: i } = a.options;
		i && i.props.style && i.props.style.display === "contents" || (r && a.options.layoutScroll && a.scroll && a !== a.root && (X(e.x, -a.scroll.offset.x), X(e.y, -a.scroll.offset.y)), o && (t.x *= o.x.scale, t.y *= o.y.scale, Ao(e, o)), r && wo(a.latestValues) && Io(e, a.latestValues, a.layout?.layoutBox));
	}
	t.x < Mo && t.x > jo && (t.x = 1), t.y < Mo && t.y > jo && (t.y = 1);
}
function X(e, t) {
	e.min += t, e.max += t;
}
function Po(e, t, n, r, i = .5) {
	ko(e, t, n, V(e.min, e.max, i), r);
}
function Fo(e, t) {
	return typeof e == "string" ? parseFloat(e) / 100 * (t.max - t.min) : e;
}
function Io(e, t, n) {
	let r = n ?? e;
	Po(e.x, Fo(t.x, r.x), t.scaleX, t.scale, t.originX), Po(e.y, Fo(t.y, r.y), t.scaleY, t.scale, t.originY);
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/utils/measure.mjs
function Lo(e, t) {
	return yo(xo(e.getBoundingClientRect(), t));
}
function Ro(e, t, n) {
	let r = Lo(e, n), { scroll: i } = t;
	return i && (X(r.x, i.offset.x), X(r.y, i.offset.y)), r;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/utils/build-transform.mjs
var zo = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
}, Bo = vr.length;
function Vo(e, t, n) {
	let r = "", i = !0;
	for (let a = 0; a < Bo; a++) {
		let o = vr[a], s = e[o];
		if (s === void 0) continue;
		let c = !0;
		if (typeof s == "number") c = s === +!!o.startsWith("scale");
		else {
			let e = parseFloat(s);
			c = o.startsWith("scale") ? e === 1 : e === 0;
		}
		if (!c || n) {
			let e = da(s, na[o]);
			if (!c) {
				i = !1;
				let t = zo[o] || o;
				r += `${t}(${e}) `;
			}
			n && (t[o] = e);
		}
	}
	let a = e.pathRotation;
	return a && (i = !1, r += `rotate(${da(a, na.pathRotation)}) `), r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/utils/build-styles.mjs
function Ho(e, t, n) {
	let { style: r, vars: i, transformOrigin: a } = e, o = !1, s = !1;
	for (let e in t) {
		let n = t[e];
		if (yr.has(e)) {
			o = !0;
			continue;
		} else if (Tt(e)) {
			i[e] = n;
			continue;
		} else {
			let t = da(n, na[e]);
			e.startsWith("origin") ? (s = !0, a[e] = t) : r[e] = t;
		}
	}
	if (t.transform || (o || n ? r.transform = Vo(t, e.transform, n) : r.transform &&= "none"), s) {
		let { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = a;
		r.transformOrigin = `${e} ${t} ${n}`;
	}
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/utils/render.mjs
function Uo(e, { style: t, vars: n }, r, i) {
	let a = e.style, o;
	for (o in t) a[o] = t[o];
	for (o in i?.applyProjectionStyles(a, r), n) a.setProperty(o, n[o]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/styles/scale-border-radius.mjs
function Wo(e, t) {
	return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
var Go = { correct: (e, t) => {
	if (!t.target) return e;
	if (typeof e == "string") if (R.test(e)) e = parseFloat(e);
	else return e;
	return `${Wo(e, t.target.x)}% ${Wo(e, t.target.y)}%`;
} }, Ko = { correct: (e, { treeScale: t, projectionDelta: n }) => {
	let r = e, i = B.parse(e);
	if (i.length > 5) return r;
	let a = B.createTransformer(e), o = typeof i[0] == "number" ? 0 : 1, s = n.x.scale * t.x, c = n.y.scale * t.y;
	i[0 + o] /= s, i[1 + o] /= c;
	let l = V(s, c, .5);
	return typeof i[2 + o] == "number" && (i[2 + o] /= l), typeof i[3 + o] == "number" && (i[3 + o] /= l), a(i);
} }, qo = {
	borderRadius: {
		...Go,
		applyTo: [
			"borderTopLeftRadius",
			"borderTopRightRadius",
			"borderBottomLeftRadius",
			"borderBottomRightRadius"
		]
	},
	borderTopLeftRadius: Go,
	borderTopRightRadius: Go,
	borderBottomLeftRadius: Go,
	borderBottomRightRadius: Go,
	boxShadow: Ko
};
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-forced-motion-value.mjs
function Jo(e, { layout: t, layoutId: n }) {
	return yr.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!qo[e] || e === "opacity");
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/utils/scrape-motion-values.mjs
function Yo(e, t, n) {
	let r = e.style, i = t?.style, a = {};
	if (!r) return a;
	for (let t in r) (K(r[t]) || i && K(i[t]) || Jo(t, e) || n?.getValue(t)?.liveStyle !== void 0) && (a[t] = r[t]);
	return a;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/HTMLVisualElement.mjs
function Xo(e) {
	return window.getComputedStyle(e);
}
var Zo = class extends vo {
	constructor() {
		super(...arguments), this.type = "html", this.renderInstance = Uo;
	}
	readValueFromInstance(e, t) {
		if (yr.has(t)) return this.projection?.isProjecting ? mr(t) : gr(e, t);
		{
			let n = Xo(e), r = (Tt(t) ? n.getPropertyValue(t) : n[t]) || 0;
			return typeof r == "string" ? r.trim() : r;
		}
	}
	measureInstanceViewportBox(e, { transformPagePoint: t }) {
		return Lo(e, t);
	}
	build(e, t, n) {
		Ho(e, t, n.transformTemplate);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return Yo(e, t, n);
	}
}, Qo = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
}, $o = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
function es(e, t, n = 1, r = 0, i = !0) {
	e.pathLength = 1;
	let a = i ? Qo : $o;
	e[a.offset] = `${-r}`, e[a.array] = `${t} ${n}`;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/build-attrs.mjs
var ts = [
	"offsetDistance",
	"offsetPath",
	"offsetRotate",
	"offsetAnchor"
];
function ns(e, { attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: a = 1, pathOffset: o = 0, ...s }, c, l, u) {
	if (Ho(e, s, l), c) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return;
	}
	e.attrs = e.style, e.style = {};
	let { attrs: d, style: f } = e;
	d.transform && (f.transform = d.transform, delete d.transform), (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%", delete d.transformOrigin), f.transform && (f.transformBox = u?.transformBox ?? "fill-box", delete d.transformBox);
	for (let e of ts) d[e] !== void 0 && (f[e] = d[e], delete d[e]);
	t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), i !== void 0 && es(d, i, a, o, !1);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/camel-case-attrs.mjs
var rs = new Set([
	"baseFrequency",
	"diffuseConstant",
	"kernelMatrix",
	"kernelUnitLength",
	"keySplines",
	"keyTimes",
	"limitingConeAngle",
	"markerHeight",
	"markerWidth",
	"numOctaves",
	"targetX",
	"targetY",
	"surfaceScale",
	"specularConstant",
	"specularExponent",
	"stdDeviation",
	"tableValues",
	"viewBox",
	"gradientTransform",
	"pathLength",
	"startOffset",
	"textLength",
	"lengthAdjust"
]), is = (e) => typeof e == "string" && e.toLowerCase() === "svg";
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/render.mjs
function as(e, t, n, r) {
	Uo(e, t, void 0, r);
	for (let n in t.attrs) e.setAttribute(rs.has(n) ? n : Li(n), t.attrs[n]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/scrape-motion-values.mjs
function os(e, t, n) {
	let r = Yo(e, t, n);
	for (let n in e) if (K(e[n]) || K(t[n])) {
		let t = vr.indexOf(n) === -1 ? n : "attr" + n.charAt(0).toUpperCase() + n.substring(1);
		r[t] = e[n];
	}
	return r;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/SVGVisualElement.mjs
var ss = class extends vo {
	constructor() {
		super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = J;
	}
	getBaseTargetFromProps(e, t) {
		return e[t];
	}
	readValueFromInstance(e, t) {
		if (yr.has(t)) {
			let e = ia(t);
			return e && e.default || 0;
		}
		return t = rs.has(t) ? t : Li(t), e.getAttribute(t);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return os(e, t, n);
	}
	build(e, t, n) {
		ns(e, t, this.isSVGTag, n.transformTemplate, n.style);
	}
	renderInstance(e, t, n, r) {
		as(e, t, n, r);
	}
	mount(e) {
		this.isSVGTag = is(e.tagName), super.mount(e);
	}
}, cs = io.length;
function ls(e) {
	if (!e) return;
	if (!e.isControllingVariants) {
		let t = e.parent && ls(e.parent) || {};
		return e.props.initial !== void 0 && (t.initial = e.props.initial), t;
	}
	let t = {};
	for (let n = 0; n < cs; n++) {
		let r = io[n], i = e.props[r];
		(no(i) || i === !1) && (t[r] = i);
	}
	return t;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/shallow-compare.mjs
function us(e, t) {
	if (!Array.isArray(t)) return !1;
	let n = t.length;
	if (n !== e.length) return !1;
	for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
	return !0;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/animation-state.mjs
var ds = [...ro].reverse(), fs = ro.length;
function ps(e) {
	return (t) => Promise.all(t.map(({ animation: t, options: n }) => Wi(e, t, n)));
}
function ms(e) {
	let t = ps(e), n = _s(), r = !0, i = !1, a = (t) => (n, r) => {
		let i = ki(e, r, t === "exit" ? e.presenceContext?.custom : void 0);
		if (i) {
			let { transition: e, transitionEnd: t, ...r } = i;
			n = {
				...n,
				...r,
				...t
			};
		}
		return n;
	};
	function o(n) {
		t = n(e);
	}
	function s(o) {
		let { props: s } = e, c = ls(e.parent) || {}, l = [], u = /* @__PURE__ */ new Set(), d = {}, f = Infinity;
		for (let t = 0; t < fs; t++) {
			let p = ds[t], m = n[p], h = s[p] === void 0 ? c[p] : s[p], g = no(h), _ = p === o ? m.isActive : null;
			_ === !1 && (f = t);
			let v = h === c[p] && h !== s[p] && g;
			if (v && (r || i) && e.manuallyAnimateOnMount && (v = !1), m.protectedKeys = { ...d }, !m.isActive && _ === null || !h && !m.prevProp || to(h) || typeof h == "boolean") continue;
			if (p === "exit" && m.isActive && _ !== !0) {
				m.prevResolvedValues && (d = {
					...d,
					...m.prevResolvedValues
				});
				continue;
			}
			let y = hs(m.prevProp, h), b = y || p === o && m.isActive && !v && g || t > f && g, x = !1, S = Array.isArray(h) ? h : [h], C = S.reduce(a(p), {});
			_ === !1 && (C = {});
			let { prevResolvedValues: ee = {} } = m, te = {
				...ee,
				...C
			}, w = (t) => {
				b = !0, u.has(t) && (x = !0, u.delete(t)), m.needsAnimating[t] = !0;
				let n = e.getValue(t);
				n && (n.liveStyle = !1);
			};
			for (let e in te) {
				let t = C[e], n = ee[e];
				if (d.hasOwnProperty(e)) continue;
				let r = !1;
				r = ji(t) && ji(n) ? !us(t, n) || y : t !== n, r ? t == null ? u.add(e) : w(e) : t !== void 0 && u.has(e) ? w(e) : m.protectedKeys[e] = !0;
			}
			m.prevProp = h, m.prevResolvedValues = C, m.isActive && (d = {
				...d,
				...C
			}), (r || i) && e.blockInitialAnimation && (b = !1);
			let ne = v && y;
			b && (!ne || x) && l.push(...S.map((t) => {
				let n = { type: p };
				if (typeof t == "string" && (r || i) && !ne && e.manuallyAnimateOnMount && e.parent) {
					let { parent: r } = e, i = ki(r, t);
					if (r.enteringChildren && i) {
						let { delayChildren: t } = i.transition || {};
						n.delay = si(r.enteringChildren, e, t);
					}
				}
				return {
					animation: t,
					options: n
				};
			}));
		}
		if (u.size) {
			let t = {};
			if (typeof s.initial != "boolean") {
				let n = ki(e, Array.isArray(s.initial) ? s.initial[0] : s.initial);
				n && n.transition && (t.transition = n.transition);
			}
			u.forEach((n) => {
				let r = e.getBaseTarget(n), i = e.getValue(n);
				i && (i.liveStyle = !0), t[n] = r ?? null;
			}), l.push({ animation: t });
		}
		let p = !!l.length;
		return r && (s.initial === !1 || s.initial === s.animate) && !e.manuallyAnimateOnMount && (p = !1), r = !1, i = !1, p ? t(l) : Promise.resolve();
	}
	function c(t, r) {
		if (n[t].isActive === r) return Promise.resolve();
		e.variantChildren?.forEach((e) => e.animationState?.setActive(t, r)), n[t].isActive = r;
		let i = s(t);
		for (let e in n) n[e].protectedKeys = {};
		return i;
	}
	return {
		animateChanges: s,
		setActive: c,
		setAnimateFunction: o,
		getState: () => n,
		reset: () => {
			n = _s(), i = !0;
		}
	};
}
function hs(e, t) {
	return typeof t == "string" ? t !== e : Array.isArray(t) ? !us(t, e) : !1;
}
function gs(e = !1) {
	return {
		isActive: e,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {}
	};
}
function _s() {
	return {
		animate: gs(!0),
		whileInView: gs(),
		whileHover: gs(),
		whileTap: gs(),
		whileDrag: gs(),
		whileFocus: gs(),
		exit: gs()
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/copy.mjs
function vs(e, t) {
	e.min = t.min, e.max = t.max;
}
function Z(e, t) {
	vs(e.x, t.x), vs(e.y, t.y);
}
function ys(e, t) {
	e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/delta-calc.mjs
var bs = .9999, xs = 1.0001, Ss = -.01, Cs = .01;
function Q(e) {
	return e.max - e.min;
}
function ws(e, t, n) {
	return Math.abs(e - t) <= n;
}
function Ts(e, t, n, r = .5) {
	e.origin = r, e.originPoint = V(t.min, t.max, e.origin), e.scale = Q(n) / Q(t), e.translate = V(n.min, n.max, e.origin) - e.originPoint, (e.scale >= bs && e.scale <= xs || isNaN(e.scale)) && (e.scale = 1), (e.translate >= Ss && e.translate <= Cs || isNaN(e.translate)) && (e.translate = 0);
}
function Es(e, t, n, r) {
	Ts(e.x, t.x, n.x, r ? r.originX : void 0), Ts(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Ds(e, t, n, r = 0) {
	e.min = (r ? V(n.min, n.max, r) : n.min) + t.min, e.max = e.min + Q(t);
}
function Os(e, t, n, r) {
	Ds(e.x, t.x, n.x, r?.x), Ds(e.y, t.y, n.y, r?.y);
}
function ks(e, t, n, r = 0) {
	let i = r ? V(n.min, n.max, r) : n.min;
	e.min = t.min - i, e.max = e.min + Q(t);
}
function As(e, t, n, r) {
	ks(e.x, t.x, n.x, r?.x), ks(e.y, t.y, n.y, r?.y);
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/delta-remove.mjs
function js(e, t, n, r, i) {
	return e -= t, e = Do(e, 1 / n, r), i !== void 0 && (e = Do(e, 1 / i, r)), e;
}
function Ms(e, t = 0, n = 1, r = .5, i, a = e, o = e) {
	if (L.test(t) && (t = parseFloat(t), t = V(o.min, o.max, t / 100) - o.min), typeof t != "number") return;
	let s = V(a.min, a.max, r);
	e === a && (s -= t), e.min = js(e.min, t, n, s, i), e.max = js(e.max, t, n, s, i);
}
function Ns(e, t, [n, r, i], a, o) {
	Ms(e, t[n], t[r], t[i], t.scale, a, o);
}
var Ps = [
	"x",
	"scaleX",
	"originX"
], Fs = [
	"y",
	"scaleY",
	"originY"
];
function Is(e, t, n, r) {
	Ns(e.x, t, Ps, n ? n.x : void 0, r ? r.x : void 0), Ns(e.y, t, Fs, n ? n.y : void 0, r ? r.y : void 0);
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/utils.mjs
function Ls(e) {
	return e.translate === 0 && e.scale === 1;
}
function Rs(e) {
	return Ls(e.x) && Ls(e.y);
}
function zs(e, t) {
	return e.min === t.min && e.max === t.max;
}
function Bs(e, t) {
	return zs(e.x, t.x) && zs(e.y, t.y);
}
function Vs(e, t) {
	return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Hs(e, t) {
	return Vs(e.x, t.x) && Vs(e.y, t.y);
}
function Us(e) {
	return Q(e.x) / Q(e.y);
}
function Ws(e, t) {
	return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/utils/each-axis.mjs
function $(e) {
	return [e("x"), e("y")];
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/styles/transform.mjs
function Gs(e, t, n) {
	let r = "", i = e.x.translate / t.x, a = e.y.translate / t.y, o = n?.z || 0;
	if ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
		let { transformPerspective: e, rotate: t, pathRotation: i, rotateX: a, rotateY: o, skewX: s, skewY: c } = n;
		e && (r = `perspective(${e}px) ${r}`), t && (r += `rotate(${t}deg) `), i && (r += `rotate(${i}deg) `), a && (r += `rotateX(${a}deg) `), o && (r += `rotateY(${o}deg) `), s && (r += `skewX(${s}deg) `), c && (r += `skewY(${c}deg) `);
	}
	let s = e.x.scale * t.x, c = e.y.scale * t.y;
	return (s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || "none";
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/animation/mix-values.mjs
var Ks = [
	"borderTopLeftRadius",
	"borderTopRightRadius",
	"borderBottomLeftRadius",
	"borderBottomRightRadius"
], qs = Ks.length, Js = (e) => typeof e == "string" ? parseFloat(e) : e, Ys = (e) => typeof e == "number" || R.test(e);
function Xs(e, t, n, r, i, a) {
	i ? (e.opacity = V(0, n.opacity ?? 1, Qs(r)), e.opacityExit = V(t.opacity ?? 1, 0, $s(r))) : a && (e.opacity = V(t.opacity ?? 1, n.opacity ?? 1, r));
	for (let i = 0; i < qs; i++) {
		let a = Ks[i], o = Zs(t, a), s = Zs(n, a);
		o === void 0 && s === void 0 || (o ||= 0, s ||= 0, o === 0 || s === 0 || Ys(o) === Ys(s) ? (e[a] = Math.max(V(Js(o), Js(s), r), 0), (L.test(s) || L.test(o)) && (e[a] += "%")) : e[a] = s);
	}
	(t.rotate || n.rotate) && (e.rotate = V(t.rotate || 0, n.rotate || 0, r));
}
function Zs(e, t) {
	return e[t] === void 0 ? e.borderRadius : e[t];
}
var Qs = /*@__PURE__*/ ec(0, .5, ot), $s = /*@__PURE__*/ ec(.5, .95, O);
function ec(e, t, n) {
	return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ Ue(e, t, r));
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/animate/single-value.mjs
function tc(e, t, n) {
	let r = K(e) ? e : fi(e);
	return r.start(Si("", r, t, n)), r.animation;
}
//#endregion
//#region node_modules/motion-dom/dist/es/events/add-dom-event.mjs
function nc(e, t, n, r = { passive: !0 }) {
	return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/utils/compare-by-depth.mjs
var rc = (e, t) => e.depth - t.depth, ic = class {
	constructor() {
		this.children = [], this.isDirty = !1;
	}
	add(e) {
		Pe(this.children, e), this.isDirty = !0;
	}
	remove(e) {
		Fe(this.children, e), this.isDirty = !0;
	}
	forEach(e) {
		this.isDirty && this.children.sort(rc), this.isDirty = !1, this.children.forEach(e);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/delay.mjs
function ac(e, t) {
	let n = F.now(), r = ({ timestamp: i }) => {
		let a = i - n;
		a >= t && (N(r), e(a - t));
	};
	return M.setup(r, !0), () => N(r);
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/utils/resolve-motion-value.mjs
function oc(e) {
	return K(e) ? e.get() : e;
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/shared/stack.mjs
var sc = class {
	constructor() {
		this.members = [];
	}
	add(e) {
		Pe(this.members, e);
		for (let t = this.members.length - 1; t >= 0; t--) {
			let n = this.members[t];
			if (n === e || n === this.lead || n === this.prevLead) continue;
			let r = n.instance;
			(!r || r.isConnected === !1) && !n.snapshot && (Fe(this.members, n), n.unmount());
		}
		e.scheduleRender();
	}
	remove(e) {
		if (Fe(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
			let e = this.members[this.members.length - 1];
			e && this.promote(e);
		}
	}
	relegate(e) {
		for (let t = this.members.indexOf(e) - 1; t >= 0; t--) {
			let e = this.members[t];
			if (e.isPresent !== !1 && e.instance?.isConnected !== !1) return this.promote(e), !0;
		}
		return !1;
	}
	promote(e, t) {
		let n = this.lead;
		if (e !== n && (this.prevLead = n, this.lead = e, e.show(), n)) {
			n.updateSnapshot(), e.scheduleRender();
			let { layoutDependency: r } = n.options, { layoutDependency: i } = e.options;
			(r === void 0 || r !== i) && (e.resumeFrom = n, t && (n.preserveOpacity = !0), n.snapshot && (e.snapshot = n.snapshot, e.snapshot.latestValues = n.animationValues || n.latestValues), e.root?.isUpdating && (e.isLayoutDirty = !0)), e.options.crossfade === !1 && n.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach((e) => {
			e.options.onExitComplete?.(), e.resumingFrom?.options.onExitComplete?.();
		});
	}
	scheduleRender() {
		this.members.forEach((e) => e.instance && e.scheduleRender(!1));
	}
	removeLeadSnapshot() {
		this.lead?.snapshot && (this.lead.snapshot = void 0);
	}
}, cc = {
	hasAnimatedSinceResize: !0,
	hasEverUpdated: !1
}, lc = {
	nodes: 0,
	calculatedTargetDeltas: 0,
	calculatedProjections: 0
}, uc = [
	"",
	"X",
	"Y",
	"Z"
], dc = 1e3, fc = 0;
function pc(e, t, n, r) {
	let { latestValues: i } = t;
	i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function mc(e) {
	if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
	let { visualElement: t } = e.options;
	if (!t) return;
	let n = zi(t);
	if (window.MotionHasOptimisedAnimation(n, "transform")) {
		let { layout: t, layoutId: r } = e.options;
		window.MotionCancelOptimisedAnimation(n, "transform", M, !(t || r));
	}
	let { parent: r } = e;
	r && !r.hasCheckedOptimisedAppear && mc(r);
}
function hc({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
	return class {
		constructor(e = {}, n = t?.()) {
			this.id = fc++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
				x: 1,
				y: 1
			}, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
				this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
			}, this.updateProjection = () => {
				this.projectionUpdateScheduled = !1, j.value && (lc.nodes = lc.calculatedTargetDeltas = lc.calculatedProjections = 0), this.nodes.forEach(vc), this.nodes.forEach(Dc), this.nodes.forEach(Oc), this.nodes.forEach(yc), j.addProjectionMetrics && j.addProjectionMetrics(lc);
			}, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = e, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
			for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
			this.root === this && (this.nodes = new ic());
		}
		addEventListener(e, t) {
			return this.eventHandlers.has(e) || this.eventHandlers.set(e, new We()), this.eventHandlers.get(e).add(t);
		}
		notifyListeners(e, ...t) {
			let n = this.eventHandlers.get(e);
			n && n.notify(...t);
		}
		hasListeners(e) {
			return this.eventHandlers.has(e);
		}
		mount(t) {
			if (this.instance) return;
			this.isSVG = Na(t) && !Ja(t), this.instance = t;
			let { layoutId: n, layout: r, visualElement: i } = this.options;
			if (i && !i.current && i.mount(t), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (r || n) && (this.isLayoutDirty = !0), e) {
				let n, r = 0, i = () => this.root.updateBlockedByResize = !1;
				M.read(() => {
					r = window.innerWidth;
				}), e(t, () => {
					let e = window.innerWidth;
					e !== r && (r = e, this.root.updateBlockedByResize = !0, n && n(), n = ac(i, 250), cc.hasAnimatedSinceResize && (cc.hasAnimatedSinceResize = !1, this.nodes.forEach(Ec)));
				});
			}
			n && this.root.registerSharedNode(n, this), this.options.animate !== !1 && i && (n || r) && this.addEventListener("didUpdate", ({ delta: e, hasLayoutChanged: t, hasRelativeLayoutChanged: n, layout: r }) => {
				if (this.isTreeAnimationBlocked()) {
					this.target = void 0, this.relativeTarget = void 0;
					return;
				}
				let a = this.options.transition || i.getDefaultTransition() || Fc, { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } = i.getProps(), c = !this.targetLayout || !Hs(this.targetLayout, r), l = !t && n;
				if (this.options.layoutRoot || this.resumeFrom || l || t && (c || !this.currentAnimation)) {
					this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
					let t = {
						...mi(a, "layout"),
						onPlay: o,
						onComplete: s
					};
					(i.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0, t.type = !1), this.startAnimation(t), this.setAnimationOrigin(e, l, t.path);
				} else t || Ec(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
				this.targetLayout = r;
			});
		}
		unmount() {
			this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
			let e = this.getStack();
			e && e.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), N(this.updateProjection);
		}
		blockUpdate() {
			this.updateManuallyBlocked = !0;
		}
		unblockUpdate() {
			this.updateManuallyBlocked = !1;
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize;
		}
		isTreeAnimationBlocked() {
			return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
		}
		startUpdate() {
			this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(kc), this.animationId++);
		}
		getTransformTemplate() {
			let { visualElement: e } = this.options;
			return e && e.getProps().transformTemplate;
		}
		willUpdate(e = !0) {
			if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
				this.options.onExitComplete && this.options.onExitComplete();
				return;
			}
			if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && mc(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
			this.isLayoutDirty = !0;
			for (let e = 0; e < this.path.length; e++) {
				let t = this.path[e];
				t.shouldResetTransform = !0, (typeof t.latestValues.x == "string" || typeof t.latestValues.y == "string") && (t.isLayoutDirty = !0), t.updateScroll("snapshot"), t.options.layoutRoot && t.willUpdate(!1);
			}
			let { layoutId: t, layout: n } = this.options;
			if (t === void 0 && !n) return;
			let r = this.getTransformTemplate();
			this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0, this.updateSnapshot(), e && this.notifyListeners("willUpdate");
		}
		update() {
			if (this.updateScheduled = !1, this.isUpdateBlocked()) {
				let e = this.updateBlockedByResize;
				this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), e && this.nodes.forEach(Sc), this.nodes.forEach(xc);
				return;
			}
			if (this.animationId <= this.animationCommitId) {
				this.nodes.forEach(Cc);
				return;
			}
			this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(wc), this.nodes.forEach(Tc), this.nodes.forEach(gc), this.nodes.forEach(_c)) : this.nodes.forEach(Cc), this.clearAllSnapshots();
			let e = F.now();
			P.delta = T(0, 1e3 / 60, e - P.timestamp), P.timestamp = e, P.isProcessing = !0, bt.update.process(P), bt.preRender.process(P), bt.render.process(P), P.isProcessing = !1;
		}
		didUpdate() {
			this.updateScheduled || (this.updateScheduled = !0, pa.read(this.scheduleUpdate));
		}
		clearAllSnapshots() {
			this.nodes.forEach(bc), this.sharedNodes.forEach(Ac);
		}
		scheduleUpdateProjection() {
			this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, M.preRender(this.updateProjection, !1, !0));
		}
		scheduleCheckAfterUnmount() {
			M.postRender(() => {
				this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
			});
		}
		updateSnapshot() {
			this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Q(this.snapshot.measuredBox.x) && !Q(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
		}
		updateLayout() {
			if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
			if (this.resumeFrom && !this.resumeFrom.instance) for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
			let e = this.layout;
			this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected ||= J(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
			let { visualElement: t } = this.options;
			t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0);
		}
		updateScroll(e = "measure") {
			let t = !!(this.options.layoutScroll && this.instance);
			if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t && this.instance) {
				let t = r(this.instance);
				this.scroll = {
					animationId: this.root.animationId,
					phase: e,
					isRoot: t,
					offset: n(this.instance),
					wasRoot: this.scroll ? this.scroll.isRoot : t
				};
			}
		}
		resetTransform() {
			if (!i) return;
			let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, t = this.projectionDelta && !Rs(this.projectionDelta), n = this.getTransformTemplate(), r = n ? n(this.latestValues, "") : void 0, a = r !== this.prevTransformTemplateValue;
			e && this.instance && (t || wo(this.latestValues) || a) && (i(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender());
		}
		measure(e = !0) {
			let t = this.measurePageBox(), n = this.removeElementScroll(t);
			return e && (n = this.removeTransform(n)), zc(n), {
				animationId: this.root.animationId,
				measuredBox: t,
				layoutBox: n,
				latestValues: {},
				source: this.id
			};
		}
		measurePageBox() {
			let { visualElement: e } = this.options;
			if (!e) return J();
			let t = e.measureViewportBox();
			if (!(this.scroll?.wasRoot || this.path.some(Vc))) {
				let { scroll: e } = this.root;
				e && (X(t.x, e.offset.x), X(t.y, e.offset.y));
			}
			return t;
		}
		removeElementScroll(e) {
			let t = J();
			if (Z(t, e), this.scroll?.wasRoot) return t;
			for (let n = 0; n < this.path.length; n++) {
				let r = this.path[n], { scroll: i, options: a } = r;
				r !== this.root && i && a.layoutScroll && (i.wasRoot && Z(t, e), X(t.x, i.offset.x), X(t.y, i.offset.y));
			}
			return t;
		}
		applyTransform(e, t = !1, n) {
			let r = n || J();
			Z(r, e);
			for (let e = 0; e < this.path.length; e++) {
				let n = this.path[e];
				!t && n.options.layoutScroll && n.scroll && n !== n.root && (X(r.x, -n.scroll.offset.x), X(r.y, -n.scroll.offset.y)), wo(n.latestValues) && Io(r, n.latestValues, n.layout?.layoutBox);
			}
			return wo(this.latestValues) && Io(r, this.latestValues, this.layout?.layoutBox), r;
		}
		removeTransform(e) {
			let t = J();
			Z(t, e);
			for (let e = 0; e < this.path.length; e++) {
				let n = this.path[e];
				if (!wo(n.latestValues)) continue;
				let r;
				n.instance && (Co(n.latestValues) && n.updateSnapshot(), r = J(), Z(r, n.measurePageBox())), Is(t, n.latestValues, n.snapshot?.layoutBox, r);
			}
			return wo(this.latestValues) && Is(t, this.latestValues), t;
		}
		setTargetDelta(e) {
			this.targetDelta = e, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
		}
		setOptions(e) {
			this.options = {
				...this.options,
				...e,
				crossfade: e.crossfade === void 0 ? !0 : e.crossfade
			};
		}
		clearMeasurements() {
			this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
		}
		forceRelativeParentToResolveTarget() {
			this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== P.timestamp && this.relativeParent.resolveTargetDelta(!0);
		}
		resolveTargetDelta(e = !1) {
			let t = this.getLead();
			this.isProjectionDirty ||= t.isProjectionDirty, this.isTransformDirty ||= t.isTransformDirty, this.isSharedProjectionDirty ||= t.isSharedProjectionDirty;
			let n = !!this.resumingFrom || this !== t;
			if (!(e || n && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
			let { layout: r, layoutId: i } = this.options;
			if (!this.layout || !(r || i)) return;
			this.resolvedRelativeTargetAt = P.timestamp;
			let a = this.getClosestProjectingParent();
			a && this.linkedParentVersion !== a.layoutVersion && !a.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && a && a.layout ? this.createRelativeTarget(a, this.layout.layoutBox, a.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = J(), this.targetWithTransforms = J()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Os(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Z(this.target, this.layout.layoutBox), Ao(this.target, this.targetDelta)) : Z(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && a && !!a.resumingFrom == !!this.resumingFrom && !a.options.layoutScroll && a.target && this.animationProgress !== 1 ? this.createRelativeTarget(a, this.target, a.target) : this.relativeParent = this.relativeTarget = void 0), j.value && lc.calculatedTargetDeltas++);
		}
		getClosestProjectingParent() {
			if (!(!this.parent || Co(this.parent.latestValues) || To(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
		}
		createRelativeTarget(e, t, n) {
			this.relativeParent = e, this.linkedParentVersion = e.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = J(), this.relativeTargetOrigin = J(), As(this.relativeTargetOrigin, t, n, this.options.layoutAnchor || void 0), Z(this.relativeTarget, this.relativeTargetOrigin);
		}
		removeRelativeTarget() {
			this.relativeParent = this.relativeTarget = void 0;
		}
		calcProjection() {
			let e = this.getLead(), t = !!this.resumingFrom || this !== e, n = !0;
			if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1), t && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === P.timestamp && (n = !1), n) return;
			let { layout: r, layoutId: i } = this.options;
			if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || i)) return;
			Z(this.layoutCorrected, this.layout.layoutBox);
			let a = this.treeScale.x, o = this.treeScale.y;
			No(this.layoutCorrected, this.treeScale, this.path, t), e.layout && !e.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (e.target = e.layout.layoutBox, e.targetWithTransforms = J());
			let { target: s } = e;
			if (!s) {
				this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
				return;
			}
			!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (ys(this.prevProjectionDelta.x, this.projectionDelta.x), ys(this.prevProjectionDelta.y, this.projectionDelta.y)), Es(this.projectionDelta, this.layoutCorrected, s, this.latestValues), (this.treeScale.x !== a || this.treeScale.y !== o || !Ws(this.projectionDelta.x, this.prevProjectionDelta.x) || !Ws(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", s)), j.value && lc.calculatedProjections++;
		}
		hide() {
			this.isVisible = !1;
		}
		show() {
			this.isVisible = !0;
		}
		scheduleRender(e = !0) {
			if (this.options.visualElement?.scheduleRender(), e) {
				let e = this.getStack();
				e && e.scheduleRender();
			}
			this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
		}
		createProjectionDeltas() {
			this.prevProjectionDelta = Qa(), this.projectionDelta = Qa(), this.projectionDeltaWithTransform = Qa();
		}
		setAnimationOrigin(e, t = !1, n) {
			let r = this.snapshot, i = r ? r.latestValues : {}, a = { ...this.latestValues }, o = Qa();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t;
			let s = J(), c = (r ? r.source : void 0) !== (this.layout ? this.layout.source : void 0), l = this.getStack(), u = !l || l.members.length <= 1, d = !!(c && !u && this.options.crossfade === !0 && !this.path.some(Pc));
			this.animationProgress = 0;
			let f, p = n?.interpolateProjection(e);
			this.mixTargetDelta = (t) => {
				let n = t / 1e3, r = p?.(n);
				r ? (o.x.translate = r.x, o.x.scale = V(e.x.scale, 1, n), o.x.origin = e.x.origin, o.x.originPoint = e.x.originPoint, o.y.translate = r.y, o.y.scale = V(e.y.scale, 1, n), o.y.origin = e.y.origin, o.y.originPoint = e.y.originPoint) : (jc(o.x, e.x, n), jc(o.y, e.y, n)), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (As(s, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), Nc(this.relativeTarget, this.relativeTargetOrigin, s, n), f && Bs(this.relativeTarget, f) && (this.isProjectionDirty = !1), f ||= J(), Z(f, this.relativeTarget)), c && (this.animationValues = a, Xs(a, i, this.latestValues, n, d, u)), r && r.rotate !== void 0 && (this.animationValues ||= a, this.animationValues.pathRotation = r.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n;
			}, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(e) {
			this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation &&= (N(this.pendingAnimation), void 0), this.pendingAnimation = M.update(() => {
				cc.hasAnimatedSinceResize = !0, Ct.layout++, this.motionValue ||= fi(0), this.motionValue.jump(0, !1), this.currentAnimation = tc(this.motionValue, [0, 1e3], {
					...e,
					velocity: 0,
					isSync: !0,
					onUpdate: (t) => {
						this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
					},
					onStop: () => {
						Ct.layout--;
					},
					onComplete: () => {
						Ct.layout--, e.onComplete && e.onComplete(), this.completeAnimation();
					}
				}), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
			});
		}
		completeAnimation() {
			this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
			let e = this.getStack();
			e && e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
		}
		finishAnimation() {
			this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(dc), this.currentAnimation.stop()), this.completeAnimation();
		}
		applyTransformsToTarget() {
			let e = this.getLead(), { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e;
			if (!(!t || !n || !r)) {
				if (this !== e && this.layout && r && Bc(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
					n = this.target || J();
					let t = Q(this.layout.layoutBox.x);
					n.x.min = e.target.x.min, n.x.max = n.x.min + t;
					let r = Q(this.layout.layoutBox.y);
					n.y.min = e.target.y.min, n.y.max = n.y.min + r;
				}
				Z(t, n), Io(t, i), Es(this.projectionDeltaWithTransform, this.layoutCorrected, t, i);
			}
		}
		registerSharedNode(e, t) {
			this.sharedNodes.has(e) || this.sharedNodes.set(e, new sc()), this.sharedNodes.get(e).add(t);
			let n = t.options.initialPromotionConfig;
			t.promote({
				transition: n ? n.transition : void 0,
				preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0
			});
		}
		isLead() {
			let e = this.getStack();
			return e ? e.lead === this : !0;
		}
		getLead() {
			let { layoutId: e } = this.options;
			return e && this.getStack()?.lead || this;
		}
		getPrevLead() {
			let { layoutId: e } = this.options;
			return e ? this.getStack()?.prevLead : void 0;
		}
		getStack() {
			let { layoutId: e } = this.options;
			if (e) return this.root.sharedNodes.get(e);
		}
		promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
			let r = this.getStack();
			r && r.promote(this, n), e && (this.projectionDelta = void 0, this.needsReset = !0), t && this.setOptions({ transition: t });
		}
		relegate() {
			let e = this.getStack();
			return e ? e.relegate(this) : !1;
		}
		resetSkewAndRotation() {
			let { visualElement: e } = this.options;
			if (!e) return;
			let t = !1, { latestValues: n } = e;
			if ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (t = !0), !t) return;
			let r = {};
			n.z && pc("z", e, r, this.animationValues);
			for (let t = 0; t < uc.length; t++) pc(`rotate${uc[t]}`, e, r, this.animationValues), pc(`skew${uc[t]}`, e, r, this.animationValues);
			e.render();
			for (let t in r) e.setStaticValue(t, r[t]), this.animationValues && (this.animationValues[t] = r[t]);
			e.scheduleRender();
		}
		applyProjectionStyles(e, t) {
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) {
				e.visibility = "hidden";
				return;
			}
			let n = this.getTransformTemplate();
			if (this.needsReset) {
				this.needsReset = !1, e.visibility = "", e.opacity = "", e.pointerEvents = oc(t?.pointerEvents) || "", e.transform = n ? n(this.latestValues, "") : "none";
				return;
			}
			let r = this.getLead();
			if (!this.projectionDelta || !this.layout || !r.target) {
				this.options.layoutId && (e.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity, e.pointerEvents = oc(t?.pointerEvents) || ""), this.hasProjected && !wo(this.latestValues) && (e.transform = n ? n({}, "") : "none", this.hasProjected = !1);
				return;
			}
			e.visibility = "";
			let i = r.animationValues || r.latestValues;
			this.applyTransformsToTarget();
			let a = Gs(this.projectionDeltaWithTransform, this.treeScale, i);
			n && (a = n(i, a)), e.transform = a;
			let { x: o, y: s } = this.projectionDelta;
			e.transformOrigin = `${o.origin * 100}% ${s.origin * 100}% 0`, r.animationValues ? e.opacity = r === this ? i.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : i.opacityExit : e.opacity = r === this ? i.opacity === void 0 ? "" : i.opacity : i.opacityExit === void 0 ? 0 : i.opacityExit;
			for (let t in qo) {
				if (i[t] === void 0) continue;
				let { correct: n, applyTo: o, isCSSVariable: s } = qo[t], c = a === "none" ? i[t] : n(i[t], r);
				if (o) {
					let t = o.length;
					for (let n = 0; n < t; n++) e[o[n]] = c;
				} else s ? this.options.visualElement.renderState.vars[t] = c : e[t] = c;
			}
			this.options.layoutId && (e.pointerEvents = r === this ? oc(t?.pointerEvents) || "" : "none");
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach((e) => e.currentAnimation?.stop()), this.root.nodes.forEach(xc), this.root.sharedNodes.clear();
		}
	};
}
function gc(e) {
	e.updateLayout();
}
function _c(e) {
	let t = e.resumeFrom?.snapshot || e.snapshot;
	if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
		let { layoutBox: n, measuredBox: r } = e.layout, { animationType: i } = e.options, a = t.source !== e.layout.source;
		if (i === "size") $((e) => {
			let r = a ? t.measuredBox[e] : t.layoutBox[e], i = Q(r);
			r.min = n[e].min, r.max = r.min + i;
		});
		else if (i === "x" || i === "y") {
			let e = i === "x" ? "y" : "x";
			vs(a ? t.measuredBox[e] : t.layoutBox[e], n[e]);
		} else Bc(i, t.layoutBox, n) && $((r) => {
			let i = a ? t.measuredBox[r] : t.layoutBox[r], o = Q(n[r]);
			i.max = i.min + o, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[r].max = e.relativeTarget[r].min + o);
		});
		let o = Qa();
		Es(o, n, t.layoutBox);
		let s = Qa();
		a ? Es(s, e.applyTransform(r, !0), t.measuredBox) : Es(s, n, t.layoutBox);
		let c = !Rs(o), l = !1;
		if (!e.resumeFrom) {
			let r = e.getClosestProjectingParent();
			if (r && !r.resumeFrom) {
				let { snapshot: i, layout: a } = r;
				if (i && a) {
					let o = e.options.layoutAnchor || void 0, s = J();
					As(s, t.layoutBox, i.layoutBox, o);
					let c = J();
					As(c, n, a.layoutBox, o), Hs(s, c) || (l = !0), r.options.layoutRoot && (e.relativeTarget = c, e.relativeTargetOrigin = s, e.relativeParent = r);
				}
			}
		}
		e.notifyListeners("didUpdate", {
			layout: n,
			snapshot: t,
			delta: s,
			layoutDelta: o,
			hasLayoutChanged: c,
			hasRelativeLayoutChanged: l
		});
	} else if (e.isLead()) {
		let { onExitComplete: t } = e.options;
		t && t();
	}
	e.options.transition = void 0;
}
function vc(e) {
	j.value && lc.nodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty ||= !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty), e.isTransformDirty ||= e.parent.isTransformDirty);
}
function yc(e) {
	e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function bc(e) {
	e.clearSnapshot();
}
function xc(e) {
	e.clearMeasurements();
}
function Sc(e) {
	e.isLayoutDirty = !0, e.updateLayout();
}
function Cc(e) {
	e.isLayoutDirty = !1;
}
function wc(e) {
	e.isAnimationBlocked && e.layout && !e.isLayoutDirty && (e.snapshot = e.layout, e.isLayoutDirty = !0);
}
function Tc(e) {
	let { visualElement: t } = e.options;
	t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Ec(e) {
	e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function Dc(e) {
	e.resolveTargetDelta();
}
function Oc(e) {
	e.calcProjection();
}
function kc(e) {
	e.resetSkewAndRotation();
}
function Ac(e) {
	e.removeLeadSnapshot();
}
function jc(e, t, n) {
	e.translate = V(t.translate, 0, n), e.scale = V(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Mc(e, t, n, r) {
	e.min = V(t.min, n.min, r), e.max = V(t.max, n.max, r);
}
function Nc(e, t, n, r) {
	Mc(e.x, t.x, n.x, r), Mc(e.y, t.y, n.y, r);
}
function Pc(e) {
	return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var Fc = {
	duration: .45,
	ease: [
		.4,
		0,
		.1,
		1
	]
}, Ic = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Lc = Ic("applewebkit/") && !Ic("chrome/") ? Math.round : O;
function Rc(e) {
	e.min = Lc(e.min), e.max = Lc(e.max);
}
function zc(e) {
	Rc(e.x), Rc(e.y);
}
function Bc(e, t, n) {
	return e === "position" || e === "preserve-aspect" && !ws(Us(t), Us(n), .2);
}
function Vc(e) {
	return e !== e.root && e.scroll?.wasRoot;
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/node/DocumentProjectionNode.mjs
var Hc = hc({
	attachResizeListener: (e, t) => nc(e, "resize", t),
	measureScroll: () => ({
		x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
		y: document.documentElement.scrollTop || document.body?.scrollTop || 0
	}),
	checkIsScrollRoot: () => !0
}), Uc = { current: void 0 }, Wc = hc({
	measureScroll: (e) => ({
		x: e.scrollLeft,
		y: e.scrollTop
	}),
	defaultParent: () => {
		if (!Uc.current) {
			let e = new Hc({});
			e.mount(window), e.setOptions({ layoutScroll: !0 }), Uc.current = e;
		}
		return Uc.current;
	},
	resetTransform: (e, t) => {
		e.style.transform = t === void 0 ? "none" : t;
	},
	checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), Gc = u({
	transformPagePoint: (e) => e,
	isStatic: !1,
	reducedMotion: "never"
});
//#endregion
//#region node_modules/framer-motion/dist/es/utils/use-composed-ref.mjs
function Kc(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function qc(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = Kc(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : Kc(e[t], null);
			}
		};
	};
}
function Jc(...e) {
	return o.useCallback(qc(...e), e);
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
var Yc = class extends o.Component {
	getSnapshotBeforeUpdate(e) {
		let t = this.props.childRef.current;
		if (fa(t) && e.isPresent && !this.props.isPresent && this.props.pop !== !1) {
			let e = t.offsetParent, n = fa(e) && e.offsetWidth || 0, r = fa(e) && e.offsetHeight || 0, i = getComputedStyle(t), a = this.props.sizeRef.current;
			a.height = parseFloat(i.height), a.width = parseFloat(i.width), a.top = t.offsetTop, a.left = t.offsetLeft, a.right = n - a.width - a.left, a.bottom = r - a.height - a.top, a.direction = i.direction;
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function Xc({ children: e, isPresent: t, anchorX: n, anchorY: r, root: a, pop: s }) {
	let c = _(), l = x(null), u = x({
		width: 0,
		height: 0,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		direction: "ltr"
	}), { nonce: d } = h(Gc), f = Jc(l, e.props?.ref ?? e?.ref);
	return v(() => {
		let { width: e, height: i, top: o, left: f, right: p, bottom: m, direction: h } = u.current;
		if (t || s === !1 || !l.current || !e || !i) return;
		let g = h === "rtl", _ = n === "left" ? g ? `right: ${p}` : `left: ${f}` : g ? `left: ${f}` : `right: ${p}`, v = r === "bottom" ? `bottom: ${m}` : `top: ${o}`;
		l.current.dataset.motionPopId = c;
		let y = document.createElement("style");
		d && (y.nonce = d);
		let b = a ?? document.head;
		return b.appendChild(y), y.sheet && y.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${i}px !important;
            ${_}px !important;
            ${v}px !important;
          }
        `), () => {
			l.current?.removeAttribute("data-motion-pop-id"), b.contains(y) && b.removeChild(y);
		};
	}, [t]), i(Yc, {
		isPresent: t,
		childRef: l,
		sizeRef: u,
		pop: s,
		children: s === !1 ? e : o.cloneElement(e, { ref: f })
	});
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var Zc = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: a, presenceAffectsLayout: s, mode: c, anchorX: l, anchorY: u, root: d }) => {
	let f = je(Qc), p = _(), m = !0, h = b(() => (m = !1, {
		id: p,
		initial: t,
		isPresent: n,
		custom: a,
		onExitComplete: (e) => {
			f.set(e, !0);
			for (let e of f.values()) if (!e) return;
			r && r();
		},
		register: (e) => (f.set(e, !1), () => f.delete(e))
	}), [
		n,
		f,
		r
	]);
	return s && m && (h = { ...h }), b(() => {
		f.forEach((e, t) => f.set(t, !1));
	}, [n]), o.useEffect(() => {
		!n && !f.size && r && r();
	}, [n]), e = i(Xc, {
		pop: c === "popLayout",
		isPresent: n,
		anchorX: l,
		anchorY: u,
		root: d,
		children: e
	}), i(Ne.Provider, {
		value: h,
		children: e
	});
};
function Qc() {
	return /* @__PURE__ */ new Map();
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
function $c(e = !0) {
	let t = h(Ne);
	if (t === null) return [!0, null];
	let { isPresent: n, onExitComplete: r, register: i } = t, a = _();
	g(() => {
		if (e) return i(a);
	}, [e]);
	let o = m(() => e && r && r(a), [
		a,
		r,
		e
	]);
	return !n && r ? [!1, o] : [!0];
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs
var el = (e) => e.key || "";
function tl(e) {
	let t = [];
	return s.forEach(e, (e) => {
		p(e) && t.push(e);
	}), t;
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
var nl = ({ children: e, custom: t, initial: n = !0, onExitComplete: a, presenceAffectsLayout: o = !0, mode: s = "sync", propagate: c = !1, anchorX: l = "left", anchorY: u = "top", root: d }) => {
	let [f, p] = $c(c), m = b(() => tl(e), [e]), g = c && !f ? [] : m.map(el), _ = x(!0), v = x(m), y = je(() => /* @__PURE__ */ new Map()), C = x(/* @__PURE__ */ new Set()), [ee, te] = S(m), [w, ne] = S(m);
	Me(() => {
		_.current = !1, v.current = m;
		for (let e = 0; e < w.length; e++) {
			let t = el(w[e]);
			g.includes(t) ? (y.delete(t), C.current.delete(t)) : y.get(t) !== !0 && y.set(t, !1);
		}
	}, [
		w,
		g.length,
		g.join("-")
	]);
	let re = [];
	if (m !== ee) {
		let e = [...m];
		for (let t = 0; t < w.length; t++) {
			let n = w[t], r = el(n);
			g.includes(r) || (e.splice(t, 0, n), re.push(n));
		}
		return s === "wait" && re.length && (e = re), ne(tl(e)), te(m), null;
	}
	process.env.NODE_ENV !== "production" && s === "wait" && w.length > 1 && console.warn("You're attempting to animate multiple children within AnimatePresence, but its mode is set to \"wait\". This will lead to odd visual behaviour.");
	let { forceRender: ie } = h(Ae);
	return i(r, { children: w.map((e) => {
		let r = el(e), h = c && !f ? !1 : m === w || g.includes(r);
		return i(Zc, {
			isPresent: h,
			initial: !_.current || n ? void 0 : !1,
			custom: t,
			presenceAffectsLayout: o,
			mode: s,
			root: d,
			onExitComplete: h ? void 0 : () => {
				if (C.current.has(r)) return;
				if (y.has(r)) C.current.add(r), y.set(r, !0);
				else return;
				let e = !0;
				y.forEach((t) => {
					t || (e = !1);
				}), e && (ie?.(), ne(v.current), c && p?.(), a && a());
			},
			anchorX: l,
			anchorY: u,
			children: e
		}, r);
	}) });
}, rl = u({ strict: !1 }), il = {
	animation: [
		"animate",
		"variants",
		"whileHover",
		"whileTap",
		"exit",
		"whileInView",
		"whileFocus",
		"whileDrag"
	],
	exit: ["exit"],
	drag: ["drag", "dragControls"],
	focus: ["whileFocus"],
	hover: [
		"whileHover",
		"onHoverStart",
		"onHoverEnd"
	],
	tap: [
		"whileTap",
		"onTap",
		"onTapStart",
		"onTapCancel"
	],
	pan: [
		"onPan",
		"onPanStart",
		"onPanSessionStart",
		"onPanEnd"
	],
	inView: [
		"whileInView",
		"onViewportEnter",
		"onViewportLeave"
	],
	layout: ["layout", "layoutId"]
}, al = !1;
function ol() {
	if (al) return;
	let e = {};
	for (let t in il) e[t] = { isEnabled: (e) => il[t].some((t) => !!e[t]) };
	ho(e), al = !0;
}
function sl() {
	return ol(), go();
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/features/load-features.mjs
function cl(e) {
	let t = sl();
	for (let n in e) t[n] = {
		...t[n],
		...e[n]
	};
	ho(t);
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
var ll = new Set(/* @__PURE__ */ "animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport".split("."));
function ul(e) {
	return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || ll.has(e);
}
//#endregion
//#region node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function dl(e) {
	var t = Object.create(null);
	return function(n) {
		return t[n] === void 0 && (t[n] = e(n)), t[n];
	};
}
var fl = ne((() => {})), pl = /* @__PURE__ */ re({ default: () => hl }), ml, hl, gl = ne((() => {
	fl(), ml = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, hl = /* #__PURE__ */ dl(function(e) {
		return ml.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
	});
})), _l = (e) => !ul(e);
function vl(e) {
	typeof e == "function" && (_l = (t) => t.startsWith("on") ? !ul(t) : e(t));
}
try {
	vl((gl(), ae(pl)).default);
} catch {}
function yl(e, t, n) {
	let r = {};
	for (let i in e) i === "values" && typeof e.values == "object" || K(e[i]) || (_l(i) || n === !0 && ul(i) || !t && !ul(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
	return r;
}
//#endregion
//#region node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
var bl = /* @__PURE__ */ u({});
//#endregion
//#region node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function xl(e, t) {
	if (ao(e)) {
		let { initial: t, animate: n } = e;
		return {
			initial: t === !1 || no(t) ? t : void 0,
			animate: no(n) ? n : void 0
		};
	}
	return e.inherit === !1 ? {} : t;
}
//#endregion
//#region node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
function Sl(e) {
	let { initial: t, animate: n } = xl(e, h(bl));
	return b(() => ({
		initial: t,
		animate: n
	}), [Cl(t), Cl(n)]);
}
function Cl(e) {
	return Array.isArray(e) ? e.join(" ") : e;
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var wl = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
});
//#endregion
//#region node_modules/framer-motion/dist/es/render/html/use-props.mjs
function Tl(e, t, n) {
	for (let r in t) !K(t[r]) && !Jo(r, n) && (e[r] = t[r]);
}
function El({ transformTemplate: e }, t) {
	return b(() => {
		let n = wl();
		return Ho(n, t, e), Object.assign({}, n.vars, n.style);
	}, [t]);
}
function Dl(e, t) {
	let n = e.style || {}, r = {};
	return Tl(r, n, e), Object.assign(r, El(e, t)), r;
}
function Ol(e, t) {
	let n = {}, r = Dl(e, t);
	return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
var kl = () => ({
	...wl(),
	attrs: {}
});
//#endregion
//#region node_modules/framer-motion/dist/es/render/svg/use-props.mjs
function Al(e, t, n, r) {
	let i = b(() => {
		let n = kl();
		return ns(n, t, is(r), e.transformTemplate, e.style), {
			...n.attrs,
			style: { ...n.style }
		};
	}, [t]);
	if (e.style) {
		let t = {};
		Tl(t, e.style, e), i.style = {
			...t,
			...i.style
		};
	}
	return i;
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
var jl = [
	"animate",
	"circle",
	"defs",
	"desc",
	"ellipse",
	"g",
	"image",
	"line",
	"filter",
	"marker",
	"mask",
	"metadata",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"rect",
	"stop",
	"switch",
	"symbol",
	"svg",
	"text",
	"tspan",
	"use",
	"view"
];
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function Ml(e) {
	return typeof e != "string" || e.includes("-") ? !1 : !!(jl.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/use-render.mjs
function Nl(e, t, n, { latestValues: r }, i, a = !1, o) {
	let s = (o ?? Ml(e) ? Al : Ol)(t, r, i, e), c = yl(t, typeof e == "string", a), u = e === l ? {} : {
		...c,
		...s,
		ref: n
	}, { children: f } = t, p = b(() => K(f) ? f.get() : f, [f]);
	return d(e, {
		...u,
		children: p
	});
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
function Pl({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
	return {
		latestValues: Fl(n, r, i, e),
		renderState: t()
	};
}
function Fl(e, t, n, r) {
	let i = {}, a = r(e, {});
	for (let e in a) i[e] = oc(a[e]);
	let { initial: o, animate: s } = e, c = ao(e), l = oo(e);
	t && l && !c && e.inherit !== !1 && (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
	let u = n ? n.initial === !1 : !1;
	u ||= o === !1;
	let d = u ? s : o;
	if (d && typeof d != "boolean" && !to(d)) {
		let t = Array.isArray(d) ? d : [d];
		for (let n = 0; n < t.length; n++) {
			let r = Oi(e, t[n]);
			if (r) {
				let { transitionEnd: e, transition: t, ...n } = r;
				for (let e in n) {
					let t = n[e];
					if (Array.isArray(t)) {
						let e = u ? t.length - 1 : 0;
						t = t[e];
					}
					t !== null && (i[e] = t);
				}
				for (let t in e) i[t] = e[t];
			}
		}
	}
	return i;
}
var Il = (e) => (t, n) => {
	let r = h(bl), i = h(Ne), a = () => Pl(e, t, r, i);
	return n ? a() : je(a);
}, Ll = /*@__PURE__*/ Il({
	scrapeMotionValuesFromProps: Yo,
	createRenderState: wl
}), Rl = /*@__PURE__*/ Il({
	scrapeMotionValuesFromProps: os,
	createRenderState: kl
}), zl = Symbol.for("motionComponentSymbol");
//#endregion
//#region node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
function Bl(e, t, n) {
	let r = x(n);
	v(() => {
		r.current = n;
	});
	let i = x(null);
	return m((n) => {
		n && e.onMount?.(n), t && (n ? t.mount(n) : t.unmount());
		let a = r.current;
		if (typeof a == "function") if (n) {
			let e = a(n);
			typeof e == "function" && (i.current = e);
		} else i.current ? (i.current(), i.current = null) : a(n);
		else a && (a.current = n);
	}, [t]);
}
//#endregion
//#region node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
var Vl = u({});
//#endregion
//#region node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
function Hl(e) {
	return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function Ul(e, t, n, r, i, a) {
	let { visualElement: o } = h(bl), s = h(rl), c = h(Ne), l = h(Gc), u = l.reducedMotion, d = l.skipAnimations, f = x(null), p = x(!1);
	r ||= s.renderer, !f.current && r && (f.current = r(e, {
		visualState: t,
		parent: o,
		props: n,
		presenceContext: c,
		blockInitialAnimation: c ? c.initial === !1 : !1,
		reducedMotionConfig: u,
		skipAnimations: d,
		isSVG: a
	}), p.current && f.current && (f.current.manuallyAnimateOnMount = !0));
	let m = f.current, _ = h(Vl);
	m && !m.projection && i && (m.type === "html" || m.type === "svg") && Wl(f.current, n, i, _);
	let y = x(!1);
	v(() => {
		m && y.current && m.update(n, c);
	});
	let b = n[Ri], S = x(!!b && typeof window < "u" && !window.MotionHandoffIsComplete?.(b) && window.MotionHasOptimisedAnimation?.(b));
	return Me(() => {
		p.current = !0, m && (y.current = !0, window.MotionIsMounted = !0, m.updateFeatures(), m.scheduleRenderMicrotask(), S.current && m.animationState && m.animationState.animateChanges());
	}), g(() => {
		m && (!S.current && m.animationState && m.animationState.animateChanges(), S.current &&= (queueMicrotask(() => {
			window.MotionHandoffMarkAsComplete?.(b);
		}), !1), m.enteringChildren = void 0);
	}), m;
}
function Wl(e, t, n, r) {
	let { layoutId: i, layout: a, drag: o, dragConstraints: s, layoutScroll: c, layoutRoot: l, layoutAnchor: u, layoutCrossfade: d } = t;
	e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : Gl(e.parent)), e.projection.setOptions({
		layoutId: i,
		layout: a,
		alwaysMeasureLayout: !!o || s && Hl(s),
		visualElement: e,
		animationType: typeof a == "string" ? a : "both",
		initialPromotionConfig: r,
		crossfade: d,
		layoutScroll: c,
		layoutRoot: l,
		layoutAnchor: u
	});
}
function Gl(e) {
	if (e) return e.options.allowProjection === !1 ? Gl(e.parent) : e.projection;
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/index.mjs
function Kl(e, { forwardMotionProps: t = !1, type: n } = {}, r, o) {
	r && cl(r);
	let s = n ? n === "svg" : Ml(e), c = s ? Rl : Ll;
	function l(n, l) {
		let u, d = {
			...h(Gc),
			...n,
			layoutId: ql(n)
		}, { isStatic: f } = d, p = Sl(n), m = c(n, f);
		if (!f && typeof window < "u") {
			Jl(d, r);
			let t = Yl(d);
			u = t.MeasureLayout, p.visualElement = Ul(e, m, d, o, t.ProjectionNode, s);
		}
		return a(bl.Provider, {
			value: p,
			children: [u && p.visualElement ? i(u, {
				visualElement: p.visualElement,
				...d
			}) : null, Nl(e, n, Bl(m, p.visualElement, l), m, f, t, s)]
		});
	}
	l.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
	let u = f(l);
	return u[zl] = e, u;
}
function ql({ layoutId: e }) {
	let t = h(Ae).id;
	return t && e !== void 0 ? t + "-" + e : e;
}
function Jl(e, t) {
	let n = h(rl).strict;
	if (process.env.NODE_ENV !== "production" && t && n) {
		let t = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
		e.ignoreStrict ? Le(!1, t, "lazy-strict-mode") : E(!1, t, "lazy-strict-mode");
	}
}
function Yl(e) {
	let { drag: t, layout: n } = sl();
	if (!t && !n) return {};
	let r = {
		...t,
		...n
	};
	return {
		MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
		ProjectionNode: r.ProjectionNode
	};
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/components/create-proxy.mjs
function Xl(e, t) {
	if (typeof Proxy > "u") return Kl;
	let n = /* @__PURE__ */ new Map(), r = (n, r) => Kl(n, r, e, t);
	return new Proxy((e, t) => (process.env.NODE_ENV !== "production" && qe(!1, "motion() is deprecated. Use motion.create() instead."), r(e, t)), { get: (i, a) => a === "create" ? r : (n.has(a) || n.set(a, Kl(a, void 0, e, t)), n.get(a)) });
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var Zl = (e, t) => t.isSVG ?? Ml(e) ? new ss(t) : new Zo(t, { allowProjection: e !== l }), Ql = class extends Y {
	constructor(e) {
		super(e), e.animationState ||= ms(e);
	}
	updateAnimationControlsSubscription() {
		let { animate: e } = this.node.getProps();
		to(e) && (this.unmountControls = e.subscribe(this.node));
	}
	mount() {
		this.updateAnimationControlsSubscription();
	}
	update() {
		let { animate: e } = this.node.getProps(), { animate: t } = this.node.prevProps || {};
		e !== t && this.updateAnimationControlsSubscription();
	}
	unmount() {
		this.node.animationState.reset(), this.unmountControls?.();
	}
}, $l = 0, eu = {
	animation: { Feature: Ql },
	exit: { Feature: class extends Y {
		constructor() {
			super(...arguments), this.id = $l++, this.isExitComplete = !1;
		}
		update() {
			if (!this.node.presenceContext) return;
			let { isPresent: e, onExitComplete: t } = this.node.presenceContext, { isPresent: n } = this.node.prevPresenceContext || {};
			if (!this.node.animationState || e === n) return;
			if (e && n === !1) {
				if (this.isExitComplete) {
					let { initial: e, custom: t } = this.node.getProps();
					if (typeof e == "string" || typeof e == "object" && e && !Array.isArray(e)) {
						let n = ki(this.node, e, t);
						if (n) {
							let { transition: e, transitionEnd: t, ...r } = n;
							for (let e in r) this.node.getValue(e)?.jump(r[e]);
						}
					}
					this.node.animationState.reset(), this.node.animationState.animateChanges();
				} else this.node.animationState.setActive("exit", !1);
				this.isExitComplete = !1;
				return;
			}
			let r = this.node.animationState.setActive("exit", !e);
			t && !e && r.then(() => {
				this.isExitComplete = !0, t(this.id);
			});
		}
		mount() {
			let { register: e, onExitComplete: t } = this.node.presenceContext || {};
			t && t(this.id), e && (this.unmount = e(this.id));
		}
		unmount() {}
	} }
};
//#endregion
//#region node_modules/framer-motion/dist/es/events/event-info.mjs
function tu(e) {
	return { point: {
		x: e.pageX,
		y: e.pageY
	} };
}
var nu = (e) => (t) => xa(t) && e(t, tu(t));
//#endregion
//#region node_modules/framer-motion/dist/es/events/add-pointer-event.mjs
function ru(e, t, n, r) {
	return nc(e, t, nu(n), r);
}
//#endregion
//#region node_modules/framer-motion/dist/es/utils/get-context-window.mjs
var iu = ({ current: e }) => e ? e.ownerDocument.defaultView : null, au = (e, t) => Math.abs(e - t);
function ou(e, t) {
	let n = au(e.x, t.x), r = au(e.y, t.y);
	return Math.sqrt(n ** 2 + r ** 2);
}
//#endregion
//#region node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs
var su = /*#__PURE__*/ new Set(["auto", "scroll"]), cu = class {
	constructor(e, t, { transformPagePoint: n, contextWindow: r = window, dragSnapToOrigin: i = !1, distanceThreshold: a = 3, element: o } = {}) {
		if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (e) => {
			this.handleScroll(e.target);
		}, this.onWindowScroll = () => {
			this.handleScroll(window);
		}, this.updatePoint = () => {
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			this.lastRawMoveEventInfo && (this.lastMoveEventInfo = lu(this.lastRawMoveEventInfo, this.transformPagePoint));
			let e = du(this.lastMoveEventInfo, this.history), t = this.startEvent !== null, n = ou(e.offset, {
				x: 0,
				y: 0
			}) >= this.distanceThreshold;
			if (!t && !n) return;
			let { point: r } = e, { timestamp: i } = P;
			this.history.push({
				...r,
				timestamp: i
			});
			let { onStart: a, onMove: o } = this.handlers;
			t || (a && a(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, e);
		}, this.handlePointerMove = (e, t) => {
			this.lastMoveEvent = e, this.lastRawMoveEventInfo = t, this.lastMoveEventInfo = lu(t, this.transformPagePoint), M.update(this.updatePoint, !0);
		}, this.handlePointerUp = (e, t) => {
			this.end();
			let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
			if ((this.dragSnapToOrigin || !this.startEvent) && i && i(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let a = du(e.type === "pointercancel" ? this.lastMoveEventInfo : lu(t, this.transformPagePoint), this.history);
			this.startEvent && n && n(e, a), r && r(e, a);
		}, !xa(e)) return;
		this.dragSnapToOrigin = i, this.handlers = t, this.transformPagePoint = n, this.distanceThreshold = a, this.contextWindow = r || window;
		let s = lu(tu(e), this.transformPagePoint), { point: c } = s, { timestamp: l } = P;
		this.history = [{
			...c,
			timestamp: l
		}];
		let { onSessionStart: u } = t;
		u && u(e, du(s, this.history)), this.removeListeners = He(ru(this.contextWindow, "pointermove", this.handlePointerMove), ru(this.contextWindow, "pointerup", this.handlePointerUp), ru(this.contextWindow, "pointercancel", this.handlePointerUp)), o && this.startScrollTracking(o);
	}
	startScrollTracking(e) {
		let t = e.parentElement;
		for (; t;) {
			let e = getComputedStyle(t);
			(su.has(e.overflowX) || su.has(e.overflowY)) && this.scrollPositions.set(t, {
				x: t.scrollLeft,
				y: t.scrollTop
			}), t = t.parentElement;
		}
		this.scrollPositions.set(window, {
			x: window.scrollX,
			y: window.scrollY
		}), window.addEventListener("scroll", this.onElementScroll, { capture: !0 }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
			window.removeEventListener("scroll", this.onElementScroll, { capture: !0 }), window.removeEventListener("scroll", this.onWindowScroll);
		};
	}
	handleScroll(e) {
		let t = this.scrollPositions.get(e);
		if (!t) return;
		let n = e === window, r = n ? {
			x: window.scrollX,
			y: window.scrollY
		} : {
			x: e.scrollLeft,
			y: e.scrollTop
		}, i = {
			x: r.x - t.x,
			y: r.y - t.y
		};
		i.x === 0 && i.y === 0 || (n ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += i.x, this.lastMoveEventInfo.point.y += i.y) : this.history.length > 0 && (this.history[0].x -= i.x, this.history[0].y -= i.y), this.scrollPositions.set(e, r), M.update(this.updatePoint, !0));
	}
	updateHandlers(e) {
		this.handlers = e;
	}
	end() {
		this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), N(this.updatePoint);
	}
};
function lu(e, t) {
	return t ? { point: t(e.point) } : e;
}
function uu(e, t) {
	return {
		x: e.x - t.x,
		y: e.y - t.y
	};
}
function du({ point: e }, t) {
	return {
		point: e,
		delta: uu(e, pu(t)),
		offset: uu(e, fu(t)),
		velocity: mu(t, .1)
	};
}
function fu(e) {
	return e[0];
}
function pu(e) {
	return e[e.length - 1];
}
function mu(e, t) {
	if (e.length < 2) return {
		x: 0,
		y: 0
	};
	let n = e.length - 1, r = null, i = pu(e);
	for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > /* @__PURE__ */ k(t)));) n--;
	if (!r) return {
		x: 0,
		y: 0
	};
	r === e[0] && e.length > 2 && i.timestamp - r.timestamp > /* @__PURE__ */ k(t) * 2 && (r = e[1]);
	let a = /* @__PURE__ */ A(i.timestamp - r.timestamp);
	if (a === 0) return {
		x: 0,
		y: 0
	};
	let o = {
		x: (i.x - r.x) / a,
		y: (i.y - r.y) / a
	};
	return o.x === Infinity && (o.x = 0), o.y === Infinity && (o.y = 0), o;
}
//#endregion
//#region node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
function hu(e, { min: t, max: n }, r) {
	return t !== void 0 && e < t ? e = r ? V(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? V(n, e, r.max) : Math.min(e, n)), e;
}
function gu(e, t, n) {
	return {
		min: t === void 0 ? void 0 : e.min + t,
		max: n === void 0 ? void 0 : e.max + n - (e.max - e.min)
	};
}
function _u(e, { top: t, left: n, bottom: r, right: i }) {
	return {
		x: gu(e.x, n, i),
		y: gu(e.y, t, r)
	};
}
function vu(e, t) {
	let n = t.min - e.min, r = t.max - e.max;
	return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
		min: n,
		max: r
	};
}
function yu(e, t) {
	return {
		x: vu(e.x, t.x),
		y: vu(e.y, t.y)
	};
}
function bu(e, t) {
	let n = .5, r = Q(e), i = Q(t);
	return i > r ? n = /* @__PURE__ */ Ue(t.min, t.max - r, e.min) : r > i && (n = /* @__PURE__ */ Ue(e.min, e.max - i, t.min)), T(0, 1, n);
}
function xu(e, t) {
	let n = {};
	return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
var Su = .35;
function Cu(e = Su) {
	return e === !1 ? e = 0 : e === !0 && (e = Su), {
		x: wu(e, "left", "right"),
		y: wu(e, "top", "bottom")
	};
}
function wu(e, t, n) {
	return {
		min: Tu(e, t),
		max: Tu(e, n)
	};
}
function Tu(e, t) {
	return typeof e == "number" ? e : e[t] || 0;
}
//#endregion
//#region node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
var Eu = /* @__PURE__ */ new WeakMap(), Du = class {
	constructor(e) {
		this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
			x: 0,
			y: 0
		}, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = J(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
	}
	start(e, { snapToCursor: t = !1, distanceThreshold: n } = {}) {
		let { presenceContext: r } = this.visualElement;
		if (r && r.isPresent === !1) return;
		let i = (e) => {
			t && this.snapToCursor(tu(e).point), this.stopAnimation();
		}, a = (e, t) => {
			let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
			if (n && !r && (this.openDragLock && this.openDragLock(), this.openDragLock = ga(n), !this.openDragLock)) return;
			this.latestPointerEvent = e, this.latestPanInfo = t, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), $((e) => {
				let t = this.getAxisMotionValue(e).get() || 0;
				if (L.test(t)) {
					let { projection: n } = this.visualElement;
					if (n && n.layout) {
						let r = n.layout.layoutBox[e];
						r && (t = Q(r) * (parseFloat(t) / 100));
					}
				}
				this.originPoint[e] = t;
			}), i && M.update(() => i(e, t), !1, !0), Ii(this.visualElement, "transform");
			let { animationState: a } = this.visualElement;
			a && a.setActive("whileDrag", !0);
		}, o = (e, t) => {
			this.latestPointerEvent = e, this.latestPanInfo = t;
			let { dragPropagation: n, dragDirectionLock: r, onDirectionLock: i, onDrag: a } = this.getProps();
			if (!n && !this.openDragLock) return;
			let { offset: o } = t;
			if (r && this.currentDirection === null) {
				this.currentDirection = ju(o), this.currentDirection !== null && i && i(this.currentDirection);
				return;
			}
			this.updateAxis("x", t.point, o), this.updateAxis("y", t.point, o), this.visualElement.render(), a && M.update(() => a(e, t), !1, !0);
		}, s = (e, t) => {
			this.latestPointerEvent = e, this.latestPanInfo = t, this.stop(e, t), this.latestPointerEvent = null, this.latestPanInfo = null;
		}, c = () => {
			let { dragSnapToOrigin: e } = this.getProps();
			(e || this.constraints) && this.startAnimation({
				x: 0,
				y: 0
			});
		}, { dragSnapToOrigin: l } = this.getProps();
		this.panSession = new cu(e, {
			onSessionStart: i,
			onStart: a,
			onMove: o,
			onSessionEnd: s,
			resumeAnimation: c
		}, {
			transformPagePoint: this.visualElement.getTransformPagePoint(),
			dragSnapToOrigin: l,
			distanceThreshold: n,
			contextWindow: iu(this.visualElement),
			element: this.visualElement.current
		});
	}
	stop(e, t) {
		let n = e || this.latestPointerEvent, r = t || this.latestPanInfo, i = this.isDragging;
		if (this.cancel(), !i || !r || !n) return;
		let { velocity: a } = r;
		this.startAnimation(a);
		let { onDragEnd: o } = this.getProps();
		o && M.postRender(() => o(n, r));
	}
	cancel() {
		this.isDragging = !1;
		let { projection: e, animationState: t } = this.visualElement;
		e && (e.isAnimationBlocked = !1), this.endPanSession();
		let { dragPropagation: n } = this.getProps();
		!n && this.openDragLock && (this.openDragLock(), this.openDragLock = null), t && t.setActive("whileDrag", !1);
	}
	endPanSession() {
		this.panSession && this.panSession.end(), this.panSession = void 0;
	}
	updateAxis(e, t, n) {
		let { drag: r } = this.getProps();
		if (!n || !Au(e, r, this.currentDirection)) return;
		let i = this.getAxisMotionValue(e), a = this.originPoint[e] + n[e];
		this.constraints && this.constraints[e] && (a = hu(a, this.constraints[e], this.elastic[e])), i.set(a);
	}
	resolveConstraints() {
		let { dragConstraints: e, dragElastic: t } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, r = this.constraints;
		e && Hl(e) ? this.constraints ||= this.resolveRefConstraints() : e && n ? this.constraints = _u(n.layoutBox, e) : this.constraints = !1, this.elastic = Cu(t), r !== this.constraints && !Hl(e) && n && this.constraints && !this.hasMutatedConstraints && $((e) => {
			this.constraints !== !1 && this.getAxisMotionValue(e) && (this.constraints[e] = xu(n.layoutBox[e], this.constraints[e]));
		});
	}
	resolveRefConstraints() {
		let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
		if (!e || !Hl(e)) return !1;
		let n = e.current;
		E(n !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
		let { projection: r } = this.visualElement;
		if (!r || !r.layout) return !1;
		r.root && (r.root.scroll = void 0, r.root.updateScroll());
		let i = Ro(n, r.root, this.visualElement.getTransformPagePoint()), a = yu(r.layout.layoutBox, i);
		if (t) {
			let e = t(bo(a));
			this.hasMutatedConstraints = !!e, e && (a = yo(e));
		}
		return a;
	}
	startAnimation(e) {
		let { drag: t, dragMomentum: n, dragElastic: r, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: o } = this.getProps(), s = this.constraints || {}, c = $((o) => {
			if (!Au(o, t, this.currentDirection)) return;
			let c = s && s[o] || {};
			(a === !0 || a === o) && (c = {
				min: 0,
				max: 0
			});
			let l = r ? 200 : 1e6, u = r ? 40 : 1e7, d = {
				type: "inertia",
				velocity: n ? e[o] : 0,
				bounceStiffness: l,
				bounceDamping: u,
				timeConstant: 750,
				restDelta: 1,
				restSpeed: 10,
				...i,
				...c
			};
			return this.startAxisValueAnimation(o, d);
		});
		return Promise.all(c).then(o);
	}
	startAxisValueAnimation(e, t) {
		let n = this.getAxisMotionValue(e);
		return Ii(this.visualElement, e), n.start(Si(e, n, 0, t, this.visualElement, !1));
	}
	stopAnimation() {
		$((e) => this.getAxisMotionValue(e).stop());
	}
	getAxisMotionValue(e) {
		let t = `_drag${e.toUpperCase()}`;
		return this.visualElement.getProps()[t] || this.visualElement.getValue(e, this.visualElement.latestValues[e] ?? 0);
	}
	snapToCursor(e) {
		$((t) => {
			let { drag: n } = this.getProps();
			if (!Au(t, n, this.currentDirection)) return;
			let { projection: r } = this.visualElement, i = this.getAxisMotionValue(t);
			if (r && r.layout) {
				let { min: n, max: a } = r.layout.layoutBox[t], o = i.get() || 0;
				i.set(e[t] - V(n, a, .5) + o);
			}
		});
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		let { drag: e, dragConstraints: t } = this.getProps(), { projection: n } = this.visualElement;
		if (!Hl(t) || !n || !this.constraints) return;
		this.stopAnimation();
		let r = {
			x: 0,
			y: 0
		};
		$((e) => {
			let t = this.getAxisMotionValue(e);
			if (t && this.constraints !== !1) {
				let n = t.get();
				r[e] = bu({
					min: n,
					max: n
				}, this.constraints[e]);
			}
		});
		let { transformTemplate: i } = this.visualElement.getProps();
		this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.constraints = !1, this.resolveConstraints(), $((t) => {
			if (!Au(t, e, null)) return;
			let n = this.getAxisMotionValue(t), { min: i, max: a } = this.constraints[t];
			n.set(V(i, a, r[t]));
		}), this.visualElement.render();
	}
	addListeners() {
		if (!this.visualElement.current) return;
		Eu.set(this.visualElement, this);
		let e = this.visualElement.current, t = ru(e, "pointerdown", (t) => {
			let { drag: n, dragListener: r = !0 } = this.getProps(), i = t.target, a = i !== e && Ta(i);
			n && r && !a && this.start(t);
		}), n, r = () => {
			let { dragConstraints: t } = this.getProps();
			Hl(t) && t.current && (this.constraints = this.resolveRefConstraints(), n ||= ku(e, t.current, () => this.scalePositionWithinConstraints()));
		}, { projection: i } = this.visualElement, a = i.addEventListener("measure", r);
		i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), M.read(r);
		let o = nc(window, "resize", () => this.scalePositionWithinConstraints()), s = i.addEventListener("didUpdate", (({ delta: e, hasLayoutChanged: t }) => {
			this.isDragging && t && ($((t) => {
				let n = this.getAxisMotionValue(t);
				n && (this.originPoint[t] += e[t].translate, n.set(n.get() + e[t].translate));
			}), this.visualElement.render());
		}));
		return () => {
			o(), t(), a(), s && s(), n && n();
		};
	}
	getProps() {
		let e = this.visualElement.getProps(), { drag: t = !1, dragDirectionLock: n = !1, dragPropagation: r = !1, dragConstraints: i = !1, dragElastic: a = Su, dragMomentum: o = !0 } = e;
		return {
			...e,
			drag: t,
			dragDirectionLock: n,
			dragPropagation: r,
			dragConstraints: i,
			dragElastic: a,
			dragMomentum: o
		};
	}
};
function Ou(e) {
	let t = !0;
	return () => {
		if (t) {
			t = !1;
			return;
		}
		e();
	};
}
function ku(e, t, n) {
	let r = qa(e, Ou(n)), i = qa(t, Ou(n));
	return () => {
		r(), i();
	};
}
function Au(e, t, n) {
	return (t === !0 || t === e) && (n === null || n === e);
}
function ju(e, t = 10) {
	let n = null;
	return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
//#endregion
//#region node_modules/framer-motion/dist/es/gestures/drag/index.mjs
var Mu = class extends Y {
	constructor(e) {
		super(e), this.removeGroupControls = O, this.removeListeners = O, this.controls = new Du(e);
	}
	mount() {
		let { dragControls: e } = this.node.getProps();
		e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || O;
	}
	update() {
		let { dragControls: e } = this.node.getProps(), { dragControls: t } = this.node.prevProps || {};
		e !== t && (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)));
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
	}
}, Nu = (e) => (t, n) => {
	e && M.update(() => e(t, n), !1, !0);
}, Pu = class extends Y {
	constructor() {
		super(...arguments), this.removePointerDownListener = O;
	}
	onPointerDown(e) {
		this.session = new cu(e, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: iu(this.node)
		});
	}
	createPanHandlers() {
		let { onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r } = this.node.getProps();
		return {
			onSessionStart: Nu(e),
			onStart: Nu(t),
			onMove: Nu(n),
			onEnd: (e, t) => {
				delete this.session, r && M.postRender(() => r(e, t));
			}
		};
	}
	mount() {
		this.removePointerDownListener = ru(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		this.removePointerDownListener(), this.session && this.session.end();
	}
}, Fu = !1, Iu = class extends c {
	componentDidMount() {
		let { visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r } = this.props, { projection: i } = e;
		i && (t.group && t.group.add(i), n && n.register && r && n.register(i), Fu && i.root.didUpdate(), i.addEventListener("animationComplete", () => {
			this.safeToRemove();
		}), i.setOptions({
			...i.options,
			layoutDependency: this.props.layoutDependency,
			onExitComplete: () => this.safeToRemove()
		})), cc.hasEverUpdated = !0;
	}
	getSnapshotBeforeUpdate(e) {
		let { layoutDependency: t, visualElement: n, drag: r, isPresent: i } = this.props, { projection: a } = n;
		return a ? (a.isPresent = i, e.layoutDependency !== t && a.setOptions({
			...a.options,
			layoutDependency: t
		}), Fu = !0, r || e.layoutDependency !== t || t === void 0 || e.isPresent !== i ? a.willUpdate() : this.safeToRemove(), e.isPresent !== i && (i ? a.promote() : a.relegate() || M.postRender(() => {
			let e = a.getStack();
			(!e || !e.members.length) && this.safeToRemove();
		})), null) : null;
	}
	componentDidUpdate() {
		let { visualElement: e, layoutAnchor: t } = this.props, { projection: n } = e;
		n && (n.options.layoutAnchor = t, n.root.didUpdate(), pa.postRender(() => {
			!n.currentAnimation && n.isLead() && this.safeToRemove();
		}));
	}
	componentWillUnmount() {
		let { visualElement: e, layoutGroup: t, switchLayoutGroup: n } = this.props, { projection: r } = e;
		Fu = !0, r && (r.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(r), n && n.deregister && n.deregister(r));
	}
	safeToRemove() {
		let { safeToRemove: e } = this.props;
		e && e();
	}
	render() {
		return null;
	}
};
function Lu(e) {
	let [t, n] = $c(), r = h(Ae);
	return i(Iu, {
		...e,
		layoutGroup: r,
		switchLayoutGroup: h(Vl),
		isPresent: t,
		safeToRemove: n
	});
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/features/drag.mjs
var Ru = {
	pan: { Feature: Pu },
	drag: {
		Feature: Mu,
		ProjectionNode: Wc,
		MeasureLayout: Lu
	}
};
//#endregion
//#region node_modules/framer-motion/dist/es/gestures/hover.mjs
function zu(e, t, n) {
	let { props: r } = e;
	e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
	let i = r["onHover" + n];
	i && M.postRender(() => i(t, tu(t)));
}
var Bu = class extends Y {
	mount() {
		let { current: e } = this.node;
		e && (this.unmount = ya(e, (e, t) => (zu(this.node, t, "Start"), (e) => zu(this.node, e, "End"))));
	}
	unmount() {}
}, Vu = class extends Y {
	constructor() {
		super(...arguments), this.isActive = !1;
	}
	onFocus() {
		let e = !1;
		try {
			e = this.node.current.matches(":focus-visible");
		} catch {
			e = !0;
		}
		!e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
	}
	onBlur() {
		!this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
	}
	mount() {
		this.unmount = He(nc(this.node.current, "focus", () => this.onFocus()), nc(this.node.current, "blur", () => this.onBlur()));
	}
	unmount() {}
};
//#endregion
//#region node_modules/framer-motion/dist/es/gestures/press.mjs
function Hu(e, t, n) {
	let { props: r } = e;
	if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
	e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
	let i = r["onTap" + (n === "End" ? "" : n)];
	i && M.postRender(() => i(t, tu(t)));
}
var Uu = class extends Y {
	mount() {
		let { current: e } = this.node;
		if (!e) return;
		let { globalTapTarget: t, propagate: n } = this.node.props;
		this.unmount = Ma(e, (e, t) => (Hu(this.node, t, "Start"), (e, { success: t }) => Hu(this.node, e, t ? "End" : "Cancel")), {
			useGlobalTarget: t,
			stopPropagation: n?.tap === !1
		});
	}
	unmount() {}
}, Wu = /* @__PURE__ */ new WeakMap(), Gu = /* @__PURE__ */ new WeakMap(), Ku = (e) => {
	let t = Wu.get(e.target);
	t && t(e);
}, qu = (e) => {
	e.forEach(Ku);
};
function Ju({ root: e, ...t }) {
	let n = e || document;
	Gu.has(n) || Gu.set(n, {});
	let r = Gu.get(n), i = JSON.stringify(t);
	return r[i] || (r[i] = new IntersectionObserver(qu, {
		root: e,
		...t
	})), r[i];
}
function Yu(e, t, n) {
	let r = Ju(t);
	return Wu.set(e, n), r.observe(e), () => {
		Wu.delete(e), r.unobserve(e);
	};
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs
var Xu = {
	some: 0,
	all: 1
}, Zu = class extends Y {
	constructor() {
		super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
	}
	startObserver() {
		this.stopObserver?.();
		let { viewport: e = {} } = this.node.getProps(), { root: t, margin: n, amount: r = "some", once: i } = e, a = {
			root: t ? t.current : void 0,
			rootMargin: n,
			threshold: typeof r == "number" ? r : Xu[r]
		}, o = (e) => {
			let { isIntersecting: t } = e;
			if (this.isInView === t || (this.isInView = t, i && !t && this.hasEnteredView)) return;
			t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
			let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(), a = t ? n : r;
			a && a(e);
		};
		this.stopObserver = Yu(this.node.current, a, o);
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver > "u") return;
		let { props: e, prevProps: t } = this.node;
		[
			"amount",
			"margin",
			"root"
		].some(Qu(e, t)) && this.startObserver();
	}
	unmount() {
		this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
	}
};
function Qu({ viewport: e = {} }, { viewport: t = {} } = {}) {
	return (n) => e[n] !== t[n];
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/features/gestures.mjs
var $u = {
	inView: { Feature: Zu },
	tap: { Feature: Uu },
	focus: { Feature: Vu },
	hover: { Feature: Bu }
}, ed = { layout: {
	ProjectionNode: Wc,
	MeasureLayout: Lu
} }, td = /*@__PURE__*/ Xl({
	...eu,
	...$u,
	...Ru,
	...ed
}, Zl);
//#endregion
//#region node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs
function nd() {
	!lo.current && fo();
	let [e] = S(co.current);
	return process.env.NODE_ENV !== "production" && qe(e !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), e;
}
//#endregion
//#region components/primitives/Tag/Tag.tsx
function rd({ label: t, onRemove: r, className: o }) {
	let s = nd();
	return /* @__PURE__ */ a(td.span, {
		layout: !0,
		initial: {
			opacity: 0,
			y: s ? 0 : 6
		},
		animate: {
			opacity: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			y: s ? 0 : 4
		},
		transition: {
			duration: .2,
			ease: [
				0,
				0,
				.2,
				1
			]
		},
		className: e("inline-flex items-center gap-1 rounded-full bg-secondary text-secondary-foreground px-2.5 py-0.5 text-xs md:text-sm", o),
		children: [t, r && /* @__PURE__ */ i(n, {
			variant: "ghost",
			size: "icon-xs",
			"aria-label": `Remove ${t}`,
			onClick: r,
			className: "size-3.5 md:size-3 rounded-full p-0",
			children: /* @__PURE__ */ i(ke, { className: "size-2.5" })
		})]
	});
}
//#endregion
//#region components/primitives/ProgressStep/ProgressStep.tsx
var id = "size-3 md:size-3.5 rounded-full border-2 flex items-center justify-center", ad = {
	pending: "bg-muted border-border",
	active: "bg-primary/20 border-primary ring-2 ring-primary/30",
	complete: "bg-primary border-primary"
};
function od({ status: t, label: n, className: r }) {
	let o = nd();
	return /* @__PURE__ */ a("div", {
		className: e("inline-flex flex-col items-center gap-1", r),
		"aria-current": t === "active" ? "step" : void 0,
		children: [/* @__PURE__ */ a("div", {
			className: "relative",
			children: [/* @__PURE__ */ i("div", {
				className: e(id, ad[t]),
				children: /* @__PURE__ */ i(nl, { children: t === "complete" && /* @__PURE__ */ i(td.span, {
					initial: {
						opacity: 0,
						scale: o ? 1 : .5
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					exit: {
						opacity: 0,
						scale: o ? 1 : .5
					},
					transition: {
						duration: .2,
						ease: [
							0,
							0,
							.2,
							1
						]
					},
					className: "flex items-center justify-center",
					children: /* @__PURE__ */ i(Oe, {
						className: "size-2 md:size-2.5 text-primary-foreground",
						strokeWidth: 3
					})
				}, "check") })
			}), t === "active" && !o && /* @__PURE__ */ i(td.div, {
				className: "absolute inset-0 rounded-full border-2 border-primary",
				animate: {
					scale: [
						1,
						1.6,
						1
					],
					opacity: [
						.6,
						0,
						.6
					]
				},
				transition: {
					duration: 1.2,
					repeat: Infinity,
					ease: [
						.4,
						0,
						.2,
						1
					]
				}
			})]
		}), n && /* @__PURE__ */ i("span", {
			className: "text-xs md:text-sm text-muted-foreground",
			children: n
		})]
	});
}
//#endregion
//#region components/primitives/WaveformIndicator/WaveformIndicator.tsx
function sd({ barCount: t = 5, className: n }) {
	let r = nd();
	return /* @__PURE__ */ i("div", {
		role: "status",
		"aria-label": "AI is thinking",
		className: e("inline-flex items-end gap-0.5 md:gap-1", n),
		children: Array.from({ length: t }).map((e, n) => /* @__PURE__ */ i(td.span, {
			className: "block w-0.5 md:w-1 h-4 md:h-5 rounded-full bg-muted-foreground origin-bottom",
			animate: r ? { scaleY: .6 } : { scaleY: [
				.3,
				1,
				.3
			] },
			transition: r ? {} : {
				duration: 1,
				repeat: Infinity,
				ease: "easeInOut",
				delay: n / t * .5
			}
		}, n))
	});
}
//#endregion
//#region components/primitives/MorphingBlob/MorphingBlob.tsx
var cd = {
	sm: "size-8",
	md: "size-12"
}, ld = [
	"60% 40% 55% 45% / 45% 55% 45% 55%",
	"40% 60% 45% 55% / 55% 45% 55% 45%",
	"55% 45% 65% 35% / 40% 60% 50% 50%",
	"45% 55% 40% 60% / 50% 50% 60% 40%",
	"60% 40% 55% 45% / 45% 55% 45% 55%"
];
function ud({ size: t = "md", className: n }) {
	let r = nd();
	return /* @__PURE__ */ i(td.div, {
		"aria-hidden": "true",
		className: e("bg-muted-foreground/20", cd[t], n),
		animate: { borderRadius: r ? "50%" : ld },
		transition: r ? {} : {
			duration: 3,
			repeat: Infinity,
			ease: "easeInOut"
		}
	});
}
//#endregion
//#region components/primitives/SkeletonBlock/SkeletonBlock.tsx
var dd = {
	backgroundImage: "linear-gradient(90deg, var(--color-muted) 0%, var(--color-accent) 45%, var(--color-muted) 100%)",
	backgroundSize: "200% 100%"
}, fd = [
	"w-full",
	"w-5/6",
	"w-4/5",
	"w-full",
	"w-3/4",
	"w-5/6"
];
function pd({ shape: t, lines: n = 3, className: r }) {
	let o = nd(), s = o ? "" : "animate-shimmer", c = o ? void 0 : dd;
	return t === "heading" ? /* @__PURE__ */ i("div", {
		className: e("h-6 md:h-7 w-3/4 rounded-md bg-muted", s, r),
		style: c
	}) : t === "code" ? /* @__PURE__ */ i("div", {
		className: e("rounded-lg bg-muted p-3 md:p-4 space-y-2 md:space-y-3", r),
		children: Array.from({ length: n }).map((t, n) => /* @__PURE__ */ i("div", {
			className: e("h-3 md:h-4 rounded bg-muted-foreground/15", n % 3 == 0 ? "w-4/5" : n % 3 == 1 ? "w-full" : "w-2/3", s),
			style: c
		}, n))
	}) : t === "bullet-list" ? /* @__PURE__ */ i("div", {
		className: e("space-y-2 md:space-y-3", r),
		children: Array.from({ length: n }).map((t, n) => /* @__PURE__ */ a("div", {
			className: "flex items-center gap-2 md:gap-3",
			children: [/* @__PURE__ */ i("span", { className: "size-1.5 md:size-2 rounded-full bg-muted-foreground/30 shrink-0" }), /* @__PURE__ */ i("div", {
				className: e("h-4 md:h-5 rounded-md bg-muted flex-1", n % 2 == 0 ? "max-w-full" : "max-w-[85%]", s),
				style: c
			})]
		}, n))
	}) : /* @__PURE__ */ i("div", {
		className: e("space-y-2 md:space-y-3", r),
		children: Array.from({ length: n }).map((t, n) => /* @__PURE__ */ i("div", {
			className: e("h-4 md:h-5 rounded-md bg-muted", fd[n % fd.length], s),
			style: c
		}, n))
	});
}
//#endregion
export { se as C, oe as S, he as _, id as a, de as b, nd as c, M as d, Me as f, _e as g, De as h, od as i, td as l, Oe as m, ud as n, ad as o, Ae as p, sd as r, rd as s, pd as t, nl as u, fe as v, le as x, pe as y };
