"use client";
import { cn as e } from "../../../lib/utils.js";
import { motion as t } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
import { useReducedMotion as n } from "../../../node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.js";
import { jsx as r } from "react/jsx-runtime";
//#region components/core/MediaCard/MediaCard.tsx
function i({ src: t, alt: n, className: i }) {
	return /* @__PURE__ */ r("div", {
		className: e("overflow-hidden rounded-t-xl", i),
		children: /* @__PURE__ */ r("img", {
			src: t,
			alt: n,
			className: "w-full h-40 md:h-48 object-cover"
		})
	});
}
function a({ children: t, className: n }) {
	return /* @__PURE__ */ r("div", {
		className: e("p-4 md:p-5 flex flex-col gap-2", n),
		children: t
	});
}
function o({ children: t, className: n }) {
	return /* @__PURE__ */ r("h3", {
		className: e("font-semibold text-sm md:text-base text-foreground leading-snug", n),
		children: t
	});
}
function s({ children: t, className: n }) {
	return /* @__PURE__ */ r("p", {
		className: e("text-xs md:text-sm text-muted-foreground", n),
		children: t
	});
}
function c({ children: t, className: n }) {
	return /* @__PURE__ */ r("div", {
		className: e("flex", n),
		children: t
	});
}
function l({ children: t, className: n }) {
	return /* @__PURE__ */ r("div", {
		className: e("flex items-center gap-1.5 text-xs md:text-sm", n),
		children: t
	});
}
function u({ className: i, children: a }) {
	let o = n();
	return /* @__PURE__ */ r(t.div, {
		initial: {
			opacity: 0,
			y: o ? 0 : 10
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
		whileHover: {
			y: o ? 0 : -3,
			transition: {
				duration: .2,
				ease: [
					0,
					0,
					.2,
					1
				]
			}
		},
		className: e("rounded-xl border border-border bg-card overflow-hidden shadow-[var(--shadow-card)]", "transition-shadow duration-200 hover:shadow-[var(--shadow-elevated)] cursor-pointer", i),
		children: a
	});
}
u.Media = i, u.Body = a, u.Title = o, u.Subtitle = s, u.Badge = c, u.Meta = l;
//#endregion
export { u as MediaCard };
