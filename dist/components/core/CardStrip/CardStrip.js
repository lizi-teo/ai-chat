"use client";
import { cn as e } from "../../../lib/utils.js";
import { motion as t } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
import { useReducedMotion as n } from "../../../node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.js";
import { jsx as r } from "react/jsx-runtime";
//#region components/core/CardStrip/CardStrip.tsx
function i({ children: t, className: n }) {
	return /* @__PURE__ */ r("div", {
		className: e("snap-start shrink-0 w-[280px] md:w-[300px]", n),
		children: t
	});
}
function a({ children: i, className: a }) {
	let o = n();
	return /* @__PURE__ */ r(t.div, {
		initial: {
			opacity: 0,
			y: o ? 0 : 8
		},
		animate: {
			opacity: 1,
			y: 0
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
		className: e("flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 pr-6", a),
		style: {
			scrollbarWidth: "none",
			WebkitOverflowScrolling: "touch"
		},
		"aria-label": "Scroll for more options",
		children: i
	});
}
a.Item = i;
//#endregion
export { a as CardStrip };
