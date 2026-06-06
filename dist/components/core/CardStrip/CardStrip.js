"use client";
import { cn as e } from "../../../lib/utils.js";
import { jsx as t } from "react/jsx-runtime";
import { motion as n, useReducedMotion as r } from "framer-motion";
//#region components/core/CardStrip/CardStrip.tsx
function i({ children: n, className: r }) {
	return /* @__PURE__ */ t("div", {
		className: e("snap-start shrink-0 w-[280px] md:w-[300px]", r),
		children: n
	});
}
function a({ children: i, className: a }) {
	let o = r();
	return /* @__PURE__ */ t(n.div, {
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
