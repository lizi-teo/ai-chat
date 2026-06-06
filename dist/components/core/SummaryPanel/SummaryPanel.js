"use client";
import { cn as e } from "../../../lib/utils.js";
import { Button as t } from "../../ui/button.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import { createContext as i, useContext as a, useState as o } from "react";
import { ChevronDown as s } from "lucide-react";
import { AnimatePresence as c, motion as l, useReducedMotion as u } from "framer-motion";
//#region components/core/SummaryPanel/SummaryPanel.tsx
var d = i({
	isOpen: !0,
	toggle: () => {},
	collapsible: !1
});
function f({ children: i, className: o }) {
	let { isOpen: c, toggle: u, collapsible: f } = a(d);
	return /* @__PURE__ */ r("div", {
		className: e("flex items-center justify-between gap-2 px-4 md:px-5 py-3 md:py-4", f && "cursor-pointer select-none", o),
		onClick: f ? u : void 0,
		role: f ? "button" : void 0,
		"aria-expanded": f ? c : void 0,
		children: [/* @__PURE__ */ n("div", {
			className: "font-semibold text-sm md:text-base text-foreground",
			children: i
		}), f && /* @__PURE__ */ n(l.div, {
			animate: { rotate: c ? 0 : -90 },
			transition: {
				duration: .2,
				ease: [
					0,
					0,
					.2,
					1
				]
			},
			children: /* @__PURE__ */ n(t, {
				variant: "ghost",
				size: "icon-xs",
				"aria-hidden": !0,
				tabIndex: -1,
				children: /* @__PURE__ */ n(s, { className: "size-3.5 md:size-4 text-muted-foreground" })
			})
		})]
	});
}
function p({ children: t, className: r }) {
	let { isOpen: i, collapsible: o } = a(d), s = u();
	return o ? /* @__PURE__ */ n(c, {
		initial: !1,
		children: i && /* @__PURE__ */ n(l.div, {
			initial: {
				opacity: 0,
				height: 0
			},
			animate: {
				opacity: 1,
				height: "auto"
			},
			exit: {
				opacity: 0,
				height: 0
			},
			transition: {
				duration: s ? .01 : .25,
				ease: [
					0,
					0,
					.2,
					1
				]
			},
			className: "overflow-hidden",
			children: /* @__PURE__ */ n("div", {
				className: e("px-4 md:px-5 pb-4 md:pb-5", r),
				children: t
			})
		}, "body")
	}) : /* @__PURE__ */ n("div", {
		className: e("px-4 md:px-5 pb-4 md:pb-5", r),
		children: t
	});
}
function m({ defaultOpen: t = !0, collapsible: r = !1, className: i, children: a }) {
	let [s, c] = o(t);
	return /* @__PURE__ */ n(d.Provider, {
		value: {
			isOpen: s,
			toggle: () => c((e) => !e),
			collapsible: r
		},
		children: /* @__PURE__ */ n("div", {
			className: e("rounded-xl border border-border bg-card shadow-card overflow-hidden", i),
			children: a
		})
	});
}
m.Header = f, m.Body = p;
//#endregion
export { m as SummaryPanel };
