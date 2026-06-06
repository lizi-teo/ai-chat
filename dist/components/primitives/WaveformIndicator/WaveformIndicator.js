"use client";
import { cn as e } from "../../../lib/utils.js";
import { motion as t } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
import { useReducedMotion as n } from "../../../node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.js";
import { jsx as r } from "react/jsx-runtime";
//#region components/primitives/WaveformIndicator/WaveformIndicator.tsx
function i({ barCount: i = 5, className: a }) {
	let o = n();
	return /* @__PURE__ */ r("div", {
		role: "status",
		"aria-label": "AI is thinking",
		className: e("inline-flex items-end gap-0.5 md:gap-1", a),
		children: Array.from({ length: i }).map((e, n) => /* @__PURE__ */ r(t.span, {
			className: "block w-0.5 md:w-1 h-4 md:h-5 rounded-full bg-muted-foreground origin-bottom",
			animate: o ? { scaleY: .6 } : { scaleY: [
				.3,
				1,
				.3
			] },
			transition: o ? {} : {
				duration: 1,
				repeat: Infinity,
				ease: "easeInOut",
				delay: n / i * .5
			}
		}, n))
	});
}
//#endregion
export { i as WaveformIndicator };
