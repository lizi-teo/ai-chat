"use client";
import { cn as e } from "../../../lib/utils.js";
import { Check as t } from "../../../node_modules/lucide-react/dist/esm/icons/check.js";
import { AnimatePresence as n } from "../../../node_modules/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as r } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
import { useReducedMotion as i } from "../../../node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
import { createContext as s, useContext as c, useState as l } from "react";
//#region components/core/SelectionGroup/SelectionGroup.tsx
var u = s({
	type: "radio",
	selected: [],
	toggle: () => {}
}), d = {
	hidden: {},
	show: { transition: {
		staggerChildren: .05,
		delayChildren: .05
	} }
}, f = {
	hidden: {
		opacity: 0,
		y: 8
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .2,
			ease: [
				0,
				0,
				.2,
				1
			]
		}
	}
}, p = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { duration: .2 }
	}
};
function m({ value: s, children: l, description: d, icon: m, className: h }) {
	let { type: g, selected: _, toggle: v } = c(u), y = i(), b = _.includes(s);
	return /* @__PURE__ */ o(r.button, {
		variants: y ? p : f,
		onClick: () => v(s),
		role: g,
		"aria-checked": b,
		className: e("w-full flex items-center gap-3 rounded-xl px-4 py-3.5 md:py-4 text-left", "transition-colors duration-150", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", b ? "border-2 border-primary bg-primary/5 shadow-[var(--shadow-card)]" : "border border-border bg-card shadow-[var(--shadow-sm)] hover:border-primary/40 hover:bg-muted/30 hover:shadow-[var(--shadow-card)]", h),
		children: [
			m && /* @__PURE__ */ a("span", {
				className: "shrink-0 size-8 md:size-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground",
				children: m
			}),
			/* @__PURE__ */ o("div", {
				className: "flex-1 min-w-0",
				children: [/* @__PURE__ */ a("p", {
					className: e("text-sm md:text-base font-medium leading-snug", "text-foreground"),
					children: l
				}), d && /* @__PURE__ */ a("p", {
					className: "text-xs md:text-sm text-muted-foreground mt-0.5 leading-snug",
					children: d
				})]
			}),
			/* @__PURE__ */ a("div", {
				className: e("shrink-0 flex items-center justify-center border-2 transition-colors duration-150", g === "radio" ? "rounded-full size-5" : "rounded-md size-5", b ? "border-primary bg-primary" : "border-muted-foreground/40 bg-transparent"),
				children: /* @__PURE__ */ a(n, {
					initial: !1,
					children: b && /* @__PURE__ */ a(r.span, {
						initial: {
							opacity: 0,
							scale: y ? 1 : .5
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						exit: {
							opacity: 0,
							scale: y ? 1 : .5
						},
						transition: {
							duration: .15,
							ease: [
								0,
								0,
								.2,
								1
							]
						},
						children: /* @__PURE__ */ a(t, {
							className: "size-3 text-primary-foreground",
							strokeWidth: 3
						})
					}, "check")
				})
			})
		]
	});
}
function h(e) {
	return e === void 0 ? [] : Array.isArray(e) ? e : [e];
}
function g({ type: t = "radio", value: n, defaultValue: i, onChange: o, className: s, children: c }) {
	let f = n !== void 0, [p, m] = l(() => h(i)), g = f ? h(n) : p;
	function _(e) {
		let n;
		n = t === "radio" ? [e] : g.includes(e) ? g.filter((t) => t !== e) : [...g, e], f || m(n), o?.(t === "radio" ? n[0] ?? "" : n);
	}
	return /* @__PURE__ */ a(u.Provider, {
		value: {
			type: t,
			selected: g,
			toggle: _
		},
		children: /* @__PURE__ */ a(r.div, {
			variants: d,
			initial: "hidden",
			animate: "show",
			role: t === "radio" ? "radiogroup" : "group",
			className: e("flex flex-col gap-2 md:gap-2.5", s),
			children: c
		})
	});
}
g.Option = m;
//#endregion
export { g as SelectionGroup };
