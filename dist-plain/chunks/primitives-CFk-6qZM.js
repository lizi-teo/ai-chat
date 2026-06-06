import { t as e } from "./utils-DFf2kDEH.js";
import { r as t, t as n } from "./button-CgWFXvz0.js";
import { Fragment as r, jsx as i, jsxs as a } from "react/jsx-runtime";
import o, { createContext as s, createElement as c, forwardRef as l, useContext as u, useMemo as d } from "react";
//#region components/primitives/StatusBadge/StatusBadge.tsx
var f = "inline-flex items-center rounded-full px-2 py-0.5 text-xs md:text-sm font-medium", p = {
	default: "bg-muted text-muted-foreground",
	success: "bg-success/10 text-success",
	warning: "bg-warning/10 text-warning",
	error: "bg-destructive/10 text-destructive",
	info: "bg-primary/10 text-primary"
}, m = t(f, {
	variants: { variant: p },
	defaultVariants: { variant: "default" }
});
function h({ label: t, variant: n, className: r }) {
	return /* @__PURE__ */ i("span", {
		className: e(m({ variant: n }), r),
		children: t
	});
}
//#endregion
//#region components/primitives/PriceDisplay/PriceDisplay.tsx
function g(e, t) {
	return new Intl.NumberFormat(void 0, {
		style: "currency",
		currency: t
	}).format(e);
}
function _({ amount: t, currency: n, strikethrough: r, className: o }) {
	return /* @__PURE__ */ a("span", {
		className: e("inline-flex items-baseline gap-1.5", o),
		children: [r !== void 0 && /* @__PURE__ */ i("span", {
			className: "text-muted-foreground line-through text-xs md:text-sm",
			children: g(r, n)
		}), /* @__PURE__ */ i("span", {
			className: "text-foreground font-semibold text-sm md:text-base",
			children: g(t, n)
		})]
	});
}
//#endregion
//#region components/primitives/EntityAvatar/EntityAvatar.tsx
var v = "inline-flex shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground font-medium overflow-hidden", y = {
	sm: "size-7 text-xs",
	md: "size-10 text-sm",
	lg: "size-14 text-base"
}, b = t(v, {
	variants: { size: y },
	defaultVariants: { size: "md" }
});
function x({ fallback: t, src: n, alt: r, size: a, className: o }) {
	let s = t.split(" ").slice(0, 2).map((e) => e[0]?.toUpperCase() ?? "").join("");
	return /* @__PURE__ */ i("div", {
		className: e(b({ size: a }), o),
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
function S(e) {
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
function C({ datetime: t, className: n }) {
	let r = d(() => S(t), [t]);
	return /* @__PURE__ */ i("time", {
		dateTime: t,
		className: e("text-muted-foreground text-xs md:text-sm", n),
		children: r
	});
}
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs
var w = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), T = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), E = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), D = (e) => {
	let t = E(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, O = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, k = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
	return !1;
}, A = s({}), j = () => u(A), M = l(({ color: e, size: t, strokeWidth: n, absoluteStrokeWidth: r, className: i = "", children: a, iconNode: o, ...s }, l) => {
	let { size: u = 24, strokeWidth: d = 2, absoluteStrokeWidth: f = !1, color: p = "currentColor", className: m = "" } = j() ?? {}, h = r ?? f ? Number(n ?? d) * 24 / Number(t ?? u) : n ?? d;
	return c("svg", {
		ref: l,
		...O,
		width: t ?? u ?? O.width,
		height: t ?? u ?? O.height,
		stroke: e ?? p,
		strokeWidth: h,
		className: w("lucide", m, i),
		...!a && !k(s) && { "aria-hidden": "true" },
		...s
	}, [...o.map(([e, t]) => c(e, t)), ...Array.isArray(a) ? a : [a]]);
}), N = (e, t) => {
	let n = l(({ className: n, ...r }, i) => c(M, {
		ref: i,
		iconNode: t,
		className: w(`lucide-${T(D(e))}`, `lucide-${e}`, n),
		...r
	}));
	return n.displayName = D(e), n;
}, P = N("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), F = N("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]), I = (e) => o.forwardRef(function({ children: t, initial: n, animate: r, exit: i, transition: a, whileTap: s, whileHover: c, layout: l, layoutId: u, variants: d, ...f }, p) {
	return o.createElement(e, {
		...f,
		ref: p
	}, t);
}), L = new Proxy({}, { get(e, t) {
	return I(t);
} });
function R({ children: e }) {
	return /* @__PURE__ */ i(r, { children: e });
}
function z({ children: e }) {
	return /* @__PURE__ */ i(r, { children: e });
}
function B() {
	return !1;
}
//#endregion
//#region components/primitives/Tag/Tag.tsx
function V({ label: t, onRemove: r, className: o }) {
	let s = B();
	return /* @__PURE__ */ a(L.span, {
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
			children: /* @__PURE__ */ i(F, { className: "size-2.5" })
		})]
	});
}
//#endregion
//#region components/primitives/ProgressStep/ProgressStep.tsx
var H = "size-3 md:size-3.5 rounded-full border-2 flex items-center justify-center", U = {
	pending: "bg-muted border-border",
	active: "bg-primary/20 border-primary ring-2 ring-primary/30",
	complete: "bg-primary border-primary"
};
function W({ status: t, label: n, className: r }) {
	let o = B();
	return /* @__PURE__ */ a("div", {
		className: e("inline-flex flex-col items-center gap-1", r),
		"aria-current": t === "active" ? "step" : void 0,
		children: [/* @__PURE__ */ a("div", {
			className: "relative",
			children: [/* @__PURE__ */ i("div", {
				className: e(H, U[t]),
				children: /* @__PURE__ */ i(R, { children: t === "complete" && /* @__PURE__ */ i(L.span, {
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
					children: /* @__PURE__ */ i(P, {
						className: "size-2 md:size-2.5 text-primary-foreground",
						strokeWidth: 3
					})
				}, "check") })
			}), t === "active" && !o && /* @__PURE__ */ i(L.div, {
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
function G({ barCount: t = 5, className: n }) {
	let r = B();
	return /* @__PURE__ */ i("div", {
		role: "status",
		"aria-label": "AI is thinking",
		className: e("inline-flex items-end gap-0.5 md:gap-1", n),
		children: Array.from({ length: t }).map((e, n) => /* @__PURE__ */ i(L.span, {
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
var K = {
	sm: "size-8",
	md: "size-12"
}, q = [
	"60% 40% 55% 45% / 45% 55% 45% 55%",
	"40% 60% 45% 55% / 55% 45% 55% 45%",
	"55% 45% 65% 35% / 40% 60% 50% 50%",
	"45% 55% 40% 60% / 50% 50% 60% 40%",
	"60% 40% 55% 45% / 45% 55% 45% 55%"
];
function J({ size: t = "md", className: n }) {
	let r = B();
	return /* @__PURE__ */ i(L.div, {
		"aria-hidden": "true",
		className: e("bg-muted-foreground/20", K[t], n),
		animate: { borderRadius: r ? "50%" : q },
		transition: r ? {} : {
			duration: 3,
			repeat: Infinity,
			ease: "easeInOut"
		}
	});
}
//#endregion
//#region components/primitives/SkeletonBlock/SkeletonBlock.tsx
var Y = {
	backgroundImage: "linear-gradient(90deg, var(--color-muted) 0%, var(--color-accent) 45%, var(--color-muted) 100%)",
	backgroundSize: "200% 100%"
}, X = [
	"w-full",
	"w-5/6",
	"w-4/5",
	"w-full",
	"w-3/4",
	"w-5/6"
];
function Z({ shape: t, lines: n = 3, className: r }) {
	let o = B(), s = o ? "" : "animate-shimmer", c = o ? void 0 : Y;
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
			className: e("h-4 md:h-5 rounded-md bg-muted", X[n % X.length], s),
			style: c
		}, n))
	});
}
//#endregion
export { y as _, H as a, f as b, R as c, B as d, P as f, v as g, x as h, W as i, z as l, C as m, J as n, U as o, N as p, G as r, V as s, Z as t, L as u, _ as v, p as x, h as y };
