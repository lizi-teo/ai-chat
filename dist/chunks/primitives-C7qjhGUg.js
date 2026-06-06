import { t as e } from "./utils-DFf2kDEH.js";
import { r as t, t as n } from "./button-CgWFXvz0.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
import { createContext as a, createElement as o, forwardRef as s, useContext as c, useMemo as l } from "react";
import { AnimatePresence as u, motion as d, useReducedMotion as f } from "motion";
//#region components/primitives/StatusBadge/StatusBadge.tsx
var p = "inline-flex items-center rounded-full px-2 py-0.5 text-xs md:text-sm font-medium", m = {
	default: "bg-muted text-muted-foreground",
	success: "bg-success/10 text-success",
	warning: "bg-warning/10 text-warning",
	error: "bg-destructive/10 text-destructive",
	info: "bg-primary/10 text-primary"
}, h = t(p, {
	variants: { variant: m },
	defaultVariants: { variant: "default" }
});
function g({ label: t, variant: n, className: i }) {
	return /* @__PURE__ */ r("span", {
		className: e(h({ variant: n }), i),
		children: t
	});
}
//#endregion
//#region components/primitives/PriceDisplay/PriceDisplay.tsx
function _(e, t) {
	return new Intl.NumberFormat(void 0, {
		style: "currency",
		currency: t
	}).format(e);
}
function v({ amount: t, currency: n, strikethrough: a, className: o }) {
	return /* @__PURE__ */ i("span", {
		className: e("inline-flex items-baseline gap-1.5", o),
		children: [a !== void 0 && /* @__PURE__ */ r("span", {
			className: "text-muted-foreground line-through text-xs md:text-sm",
			children: _(a, n)
		}), /* @__PURE__ */ r("span", {
			className: "text-foreground font-semibold text-sm md:text-base",
			children: _(t, n)
		})]
	});
}
//#endregion
//#region components/primitives/EntityAvatar/EntityAvatar.tsx
var y = "inline-flex shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground font-medium overflow-hidden", b = {
	sm: "size-7 text-xs",
	md: "size-10 text-sm",
	lg: "size-14 text-base"
}, x = t(y, {
	variants: { size: b },
	defaultVariants: { size: "md" }
});
function S({ fallback: t, src: n, alt: i, size: a, className: o }) {
	let s = t.split(" ").slice(0, 2).map((e) => e[0]?.toUpperCase() ?? "").join("");
	return /* @__PURE__ */ r("div", {
		className: e(x({ size: a }), o),
		children: n ? /* @__PURE__ */ r("img", {
			src: n,
			alt: i ?? t,
			className: "size-full object-cover"
		}) : /* @__PURE__ */ r("span", {
			"aria-label": t,
			children: s
		})
	});
}
//#endregion
//#region components/primitives/TimestampLabel/TimestampLabel.tsx
function C(e) {
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
function w({ datetime: t, className: n }) {
	let i = l(() => C(t), [t]);
	return /* @__PURE__ */ r("time", {
		dateTime: t,
		className: e("text-muted-foreground text-xs md:text-sm", n),
		children: i
	});
}
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs
var T = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), E = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), D = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), O = (e) => {
	let t = D(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, k = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, A = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
	return !1;
}, j = a({}), M = () => c(j), N = s(({ color: e, size: t, strokeWidth: n, absoluteStrokeWidth: r, className: i = "", children: a, iconNode: s, ...c }, l) => {
	let { size: u = 24, strokeWidth: d = 2, absoluteStrokeWidth: f = !1, color: p = "currentColor", className: m = "" } = M() ?? {}, h = r ?? f ? Number(n ?? d) * 24 / Number(t ?? u) : n ?? d;
	return o("svg", {
		ref: l,
		...k,
		width: t ?? u ?? k.width,
		height: t ?? u ?? k.height,
		stroke: e ?? p,
		strokeWidth: h,
		className: T("lucide", m, i),
		...!a && !A(c) && { "aria-hidden": "true" },
		...c
	}, [...s.map(([e, t]) => o(e, t)), ...Array.isArray(a) ? a : [a]]);
}), P = (e, t) => {
	let n = s(({ className: n, ...r }, i) => o(N, {
		ref: i,
		iconNode: t,
		className: T(`lucide-${E(O(e))}`, `lucide-${e}`, n),
		...r
	}));
	return n.displayName = O(e), n;
}, F = P("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), I = P("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]);
//#endregion
//#region components/primitives/Tag/Tag.tsx
function L({ label: t, onRemove: a, className: o }) {
	let s = f();
	return /* @__PURE__ */ i(d.span, {
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
		children: [t, a && /* @__PURE__ */ r(n, {
			variant: "ghost",
			size: "icon-xs",
			"aria-label": `Remove ${t}`,
			onClick: a,
			className: "size-3.5 md:size-3 rounded-full p-0",
			children: /* @__PURE__ */ r(I, { className: "size-2.5" })
		})]
	});
}
//#endregion
//#region components/primitives/ProgressStep/ProgressStep.tsx
var R = "size-3 md:size-3.5 rounded-full border-2 flex items-center justify-center", z = {
	pending: "bg-muted border-border",
	active: "bg-primary/20 border-primary ring-2 ring-primary/30",
	complete: "bg-primary border-primary"
};
function B({ status: t, label: n, className: a }) {
	let o = f();
	return /* @__PURE__ */ i("div", {
		className: e("inline-flex flex-col items-center gap-1", a),
		"aria-current": t === "active" ? "step" : void 0,
		children: [/* @__PURE__ */ i("div", {
			className: "relative",
			children: [/* @__PURE__ */ r("div", {
				className: e(R, z[t]),
				children: /* @__PURE__ */ r(u, { children: t === "complete" && /* @__PURE__ */ r(d.span, {
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
					children: /* @__PURE__ */ r(F, {
						className: "size-2 md:size-2.5 text-primary-foreground",
						strokeWidth: 3
					})
				}, "check") })
			}), t === "active" && !o && /* @__PURE__ */ r(d.div, {
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
		}), n && /* @__PURE__ */ r("span", {
			className: "text-xs md:text-sm text-muted-foreground",
			children: n
		})]
	});
}
//#endregion
//#region components/primitives/WaveformIndicator/WaveformIndicator.tsx
function V({ barCount: t = 5, className: n }) {
	let i = f();
	return /* @__PURE__ */ r("div", {
		role: "status",
		"aria-label": "AI is thinking",
		className: e("inline-flex items-end gap-0.5 md:gap-1", n),
		children: Array.from({ length: t }).map((e, n) => /* @__PURE__ */ r(d.span, {
			className: "block w-0.5 md:w-1 h-4 md:h-5 rounded-full bg-muted-foreground origin-bottom",
			animate: i ? { scaleY: .6 } : { scaleY: [
				.3,
				1,
				.3
			] },
			transition: i ? {} : {
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
var H = {
	sm: "size-8",
	md: "size-12"
}, U = [
	"60% 40% 55% 45% / 45% 55% 45% 55%",
	"40% 60% 45% 55% / 55% 45% 55% 45%",
	"55% 45% 65% 35% / 40% 60% 50% 50%",
	"45% 55% 40% 60% / 50% 50% 60% 40%",
	"60% 40% 55% 45% / 45% 55% 45% 55%"
];
function W({ size: t = "md", className: n }) {
	let i = f();
	return /* @__PURE__ */ r(d.div, {
		"aria-hidden": "true",
		className: e("bg-muted-foreground/20", H[t], n),
		animate: { borderRadius: i ? "50%" : U },
		transition: i ? {} : {
			duration: 3,
			repeat: Infinity,
			ease: "easeInOut"
		}
	});
}
//#endregion
//#region components/primitives/SkeletonBlock/SkeletonBlock.tsx
var G = {
	backgroundImage: "linear-gradient(90deg, var(--color-muted) 0%, var(--color-accent) 45%, var(--color-muted) 100%)",
	backgroundSize: "200% 100%"
}, K = [
	"w-full",
	"w-5/6",
	"w-4/5",
	"w-full",
	"w-3/4",
	"w-5/6"
];
function q({ shape: t, lines: n = 3, className: a }) {
	let o = f(), s = o ? "" : "animate-shimmer", c = o ? void 0 : G;
	return t === "heading" ? /* @__PURE__ */ r("div", {
		className: e("h-6 md:h-7 w-3/4 rounded-md bg-muted", s, a),
		style: c
	}) : t === "code" ? /* @__PURE__ */ r("div", {
		className: e("rounded-lg bg-muted p-3 md:p-4 space-y-2 md:space-y-3", a),
		children: Array.from({ length: n }).map((t, n) => /* @__PURE__ */ r("div", {
			className: e("h-3 md:h-4 rounded bg-muted-foreground/15", n % 3 == 0 ? "w-4/5" : n % 3 == 1 ? "w-full" : "w-2/3", s),
			style: c
		}, n))
	}) : t === "bullet-list" ? /* @__PURE__ */ r("div", {
		className: e("space-y-2 md:space-y-3", a),
		children: Array.from({ length: n }).map((t, n) => /* @__PURE__ */ i("div", {
			className: "flex items-center gap-2 md:gap-3",
			children: [/* @__PURE__ */ r("span", { className: "size-1.5 md:size-2 rounded-full bg-muted-foreground/30 shrink-0" }), /* @__PURE__ */ r("div", {
				className: e("h-4 md:h-5 rounded-md bg-muted flex-1", n % 2 == 0 ? "max-w-full" : "max-w-[85%]", s),
				style: c
			})]
		}, n))
	}) : /* @__PURE__ */ r("div", {
		className: e("space-y-2 md:space-y-3", a),
		children: Array.from({ length: n }).map((t, n) => /* @__PURE__ */ r("div", {
			className: e("h-4 md:h-5 rounded-md bg-muted", K[n % K.length], s),
			style: c
		}, n))
	});
}
//#endregion
export { m as _, R as a, F as c, S as d, y as f, p as g, g as h, B as i, P as l, v as m, W as n, z as o, b as p, V as r, L as s, q as t, w as u };
