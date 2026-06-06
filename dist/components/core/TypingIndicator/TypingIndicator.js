"use client";
import { cn as e } from "../../../lib/utils.js";
import { motion as t } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
import { useReducedMotion as n } from "../../../node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.js";
import { jsx as r } from "react/jsx-runtime";
//#region components/core/TypingIndicator/TypingIndicator.tsx
function i({ className: i }) {
	let a = n();
	return /* @__PURE__ */ r(t.div, {
		initial: {
			opacity: 0,
			y: a ? 0 : 6,
			scale: a ? 1 : .97
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		exit: {
			opacity: 0,
			y: a ? 0 : 4
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
		className: e("inline-flex items-center gap-1 rounded-2xl rounded-tl-sm bg-muted px-4 py-3 md:px-5", i),
		"aria-label": "Assistant is typing",
		role: "status",
		children: [
			0,
			1,
			2
		].map((e) => /* @__PURE__ */ r(t.span, {
			animate: a ? { opacity: [
				.4,
				1,
				.4
			] } : {
				opacity: [
					.3,
					1,
					.3
				],
				y: [
					0,
					-4,
					0
				]
			},
			transition: {
				duration: a ? 1.2 : .8,
				repeat: Infinity,
				ease: a ? "linear" : "easeInOut",
				delay: e * .15
			},
			className: "size-1.5 md:size-2 rounded-full bg-muted-foreground"
		}, e))
	});
}
//#endregion
export { i as TypingIndicator };
