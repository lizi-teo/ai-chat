"use client";
import { cn as e } from "../../../lib/utils.js";
import { ChevronDown as t } from "../../../node_modules/lucide-react/dist/esm/icons/chevron-down.js";
import { AnimatePresence as n } from "../../../node_modules/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as r } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
import { useReducedMotion as i } from "../../../node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.js";
import { Button as a } from "../../ui/button.js";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
import { createContext as c, useContext as l, useState as u } from "react";
//#region components/core/SummaryPanel/SummaryPanel.tsx
var d = c({
	isOpen: !0,
	toggle: () => {},
	collapsible: !1
});
function f({ children: n, className: i }) {
	let { isOpen: c, toggle: u, collapsible: f } = l(d);
	return /* @__PURE__ */ s("div", {
		className: e("flex items-center justify-between gap-2 px-4 md:px-5 py-3 md:py-4", f && "cursor-pointer select-none", i),
		onClick: f ? u : void 0,
		role: f ? "button" : void 0,
		"aria-expanded": f ? c : void 0,
		children: [/* @__PURE__ */ o("div", {
			className: "font-semibold text-sm md:text-base text-foreground",
			children: n
		}), f && /* @__PURE__ */ o(r.div, {
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
			children: /* @__PURE__ */ o(a, {
				variant: "ghost",
				size: "icon-xs",
				"aria-hidden": !0,
				tabIndex: -1,
				children: /* @__PURE__ */ o(t, { className: "size-3.5 md:size-4 text-muted-foreground" })
			})
		})]
	});
}
function p({ children: t, className: a }) {
	let { isOpen: s, collapsible: c } = l(d), u = i();
	return c ? /* @__PURE__ */ o(n, {
		initial: !1,
		children: s && /* @__PURE__ */ o(r.div, {
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
				duration: u ? .01 : .25,
				ease: [
					0,
					0,
					.2,
					1
				]
			},
			className: "overflow-hidden",
			children: /* @__PURE__ */ o("div", {
				className: e("px-4 md:px-5 pb-4 md:pb-5", a),
				children: t
			})
		}, "body")
	}) : /* @__PURE__ */ o("div", {
		className: e("px-4 md:px-5 pb-4 md:pb-5", a),
		children: t
	});
}
function m({ defaultOpen: t = !0, collapsible: n = !1, className: r, children: i }) {
	let [a, s] = u(t);
	return /* @__PURE__ */ o(d.Provider, {
		value: {
			isOpen: a,
			toggle: () => s((e) => !e),
			collapsible: n
		},
		children: /* @__PURE__ */ o("div", {
			className: e("rounded-xl border border-border bg-card shadow-card overflow-hidden", r),
			children: i
		})
	});
}
m.Header = f, m.Body = p;
//#endregion
export { m as SummaryPanel };
