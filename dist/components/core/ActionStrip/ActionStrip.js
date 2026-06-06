"use client";
import { cn as e } from "../../../lib/utils.js";
import { motion as t } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
import { useReducedMotion as n } from "../../../node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.js";
import { Button as r } from "../../ui/button.js";
import { jsx as i } from "react/jsx-runtime";
//#region components/core/ActionStrip/ActionStrip.tsx
function a({ onClick: a, disabled: o, className: s, children: c }) {
	let l = n();
	return /* @__PURE__ */ i(t.div, {
		initial: {
			opacity: 0,
			y: l ? 0 : 6
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
		className: "flex-1",
		children: /* @__PURE__ */ i(r, {
			variant: "default",
			size: "default",
			onClick: a,
			disabled: o,
			className: e("w-full", s),
			children: c
		})
	});
}
function o({ onClick: a, disabled: o, className: s, children: c }) {
	let l = n();
	return /* @__PURE__ */ i(t.div, {
		initial: {
			opacity: 0,
			y: l ? 0 : 6
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
			],
			delay: .05
		},
		className: "flex-1",
		children: /* @__PURE__ */ i(r, {
			variant: "outline",
			size: "default",
			onClick: a,
			disabled: o,
			className: e("w-full", s),
			children: c
		})
	});
}
function s({ className: t, children: n }) {
	return /* @__PURE__ */ i("div", {
		className: e("flex items-center gap-2 md:gap-3 px-4 md:px-5 py-3 md:py-4", t),
		children: n
	});
}
s.Primary = a, s.Secondary = o;
//#endregion
export { s as ActionStrip };
