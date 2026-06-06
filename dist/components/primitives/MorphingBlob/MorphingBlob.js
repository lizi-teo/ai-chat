"use client";
import { cn as e } from "../../../lib/utils.js";
import { motion as t } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
import { useReducedMotion as n } from "../../../node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.js";
import { jsx as r } from "react/jsx-runtime";
//#region components/primitives/MorphingBlob/MorphingBlob.tsx
var i = {
	sm: "size-8",
	md: "size-12"
}, a = [
	"60% 40% 55% 45% / 45% 55% 45% 55%",
	"40% 60% 45% 55% / 55% 45% 55% 45%",
	"55% 45% 65% 35% / 40% 60% 50% 50%",
	"45% 55% 40% 60% / 50% 50% 60% 40%",
	"60% 40% 55% 45% / 45% 55% 45% 55%"
];
function o({ size: o = "md", className: s }) {
	let c = n();
	return /* @__PURE__ */ r(t.div, {
		"aria-hidden": "true",
		className: e("bg-muted-foreground/20", i[o], s),
		animate: { borderRadius: c ? "50%" : a },
		transition: c ? {} : {
			duration: 3,
			repeat: Infinity,
			ease: "easeInOut"
		}
	});
}
//#endregion
export { o as MorphingBlob };
