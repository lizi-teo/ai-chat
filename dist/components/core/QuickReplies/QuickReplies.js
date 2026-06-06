"use client";
import { cn as e } from "../../../lib/utils.js";
import { motion as t } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
import { useReducedMotion as n } from "../../../node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.js";
import { Button as r } from "../../ui/button.js";
import { jsx as i } from "react/jsx-runtime";
//#region components/core/QuickReplies/QuickReplies.tsx
var a = {
	hidden: {},
	show: { transition: {
		staggerChildren: .05,
		delayChildren: .05
	} }
}, o = {
	hidden: {
		opacity: 0,
		y: 10
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
function c({ options: c, onSelect: l, className: u }) {
	let d = n();
	return /* @__PURE__ */ i(t.div, {
		variants: a,
		initial: "hidden",
		animate: "show",
		className: e("flex gap-2 overflow-x-auto pb-1 scrollbar-none", u),
		role: "group",
		"aria-label": "Quick reply options",
		children: c.map((e) => /* @__PURE__ */ i(t.div, {
			variants: d ? s : o,
			className: "shrink-0",
			children: /* @__PURE__ */ i(r, {
				variant: "outline",
				size: "sm",
				onClick: () => l(e),
				className: "rounded-full whitespace-nowrap",
				children: e
			})
		}, e))
	});
}
//#endregion
export { c as QuickReplies };
