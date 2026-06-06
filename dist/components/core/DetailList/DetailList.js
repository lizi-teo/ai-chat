"use client";
import { cn as e } from "../../../lib/utils.js";
import { motion as t } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
import { useReducedMotion as n } from "../../../node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region components/core/DetailList/DetailList.tsx
var a = {
	hidden: {},
	show: { transition: {
		staggerChildren: .04,
		delayChildren: .04
	} }
}, o = {
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
}, s = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { duration: .2 }
	}
};
function c({ label: a, value: c, className: l }) {
	let u = n();
	return /* @__PURE__ */ i(t.div, {
		variants: u ? s : o,
		className: e("flex items-center justify-between gap-4 py-2 md:py-2.5", "border-b border-border last:border-0", l),
		children: [/* @__PURE__ */ r("span", {
			className: "text-xs md:text-sm text-muted-foreground shrink-0",
			children: a
		}), /* @__PURE__ */ r("span", {
			className: "text-xs md:text-sm text-foreground font-medium text-right",
			children: c
		})]
	});
}
function l({ className: n, children: i }) {
	return /* @__PURE__ */ r(t.div, {
		variants: a,
		initial: "hidden",
		animate: "show",
		className: e("divide-y-0 px-4 md:px-5 py-1", n),
		children: i
	});
}
l.Row = c;
//#endregion
export { l as DetailList };
