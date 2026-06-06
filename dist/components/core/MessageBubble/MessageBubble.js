"use client";
import { cn as e } from "../../../lib/utils.js";
import { EntityAvatar as t } from "../../primitives/EntityAvatar/EntityAvatar.js";
import { TimestampLabel as n } from "../../primitives/TimestampLabel/TimestampLabel.js";
import { motion as r } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
import { useReducedMotion as i } from "../../../node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.js";
import "../../../primitives.js";
import { jsx as a } from "react/jsx-runtime";
import { createContext as o, useContext as s } from "react";
//#region components/core/MessageBubble/MessageBubble.tsx
var c = o({
	role: "assistant",
	grouped: !1,
	isGenerating: !1
}), l = [
	0,
	0,
	.2,
	1
], u = {
	hidden: {},
	show: { transition: { staggerChildren: .05 } }
}, d = {
	hidden: {
		opacity: 0,
		y: 4
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .18,
			ease: l
		}
	}
};
function f({ children: t, words: n, className: o }) {
	let { role: l } = s(c), f = i(), p = l === "user", m = !p && n && n.length > 0;
	return /* @__PURE__ */ a("div", {
		className: e("max-w-[75%] md:max-w-sm rounded-2xl px-4 py-3 md:px-5 md:py-3.5 text-sm md:text-base leading-relaxed", p ? "bg-primary text-primary-foreground" : "bg-muted text-foreground shadow-[var(--shadow-bubble)]", o),
		children: m ? f ? /* @__PURE__ */ a("span", { children: n.map((e, t) => /* @__PURE__ */ a("span", {
			className: "inline-block mr-[0.25em]",
			children: e
		}, t)) }) : /* @__PURE__ */ a(r.span, {
			variants: u,
			initial: "hidden",
			animate: "show",
			className: "inline",
			children: n.map((e, t) => /* @__PURE__ */ a(r.span, {
				variants: d,
				className: "inline-block mr-[0.25em]",
				children: e
			}, `${e}-${t}`))
		}) : t
	});
}
function p({ size: e = "sm", ...n }) {
	let { role: o, grouped: l, isGenerating: u } = s(c), d = i();
	return o === "user" || l ? null : /* @__PURE__ */ a(r.div, {
		animate: !d && u ? { scale: [
			1,
			1.025,
			1
		] } : { scale: 1 },
		transition: {
			duration: 2.4,
			repeat: u ? Infinity : 0,
			ease: "easeInOut"
		},
		children: /* @__PURE__ */ a(t, {
			size: e,
			...n
		})
	});
}
function m({ datetime: t, className: r }) {
	return /* @__PURE__ */ a(n, {
		datetime: t,
		className: e("text-xs mt-0.5 opacity-60", r)
	});
}
function h({ role: t, grouped: n = !1, isGenerating: o = !1, className: s, children: u }) {
	let d = i(), f = t === "user";
	return /* @__PURE__ */ a(c.Provider, {
		value: {
			role: t,
			grouped: n,
			isGenerating: o
		},
		children: /* @__PURE__ */ a(r.div, {
			initial: f ? {
				opacity: 0,
				x: d ? 0 : 20,
				scaleX: d ? 1 : .96
			} : {
				opacity: 0,
				y: d ? 0 : 8,
				scale: d ? 1 : .97
			},
			animate: f ? {
				opacity: 1,
				x: 0,
				scaleX: 1
			} : {
				opacity: 1,
				y: 0,
				scale: 1
			},
			transition: f ? {
				opacity: {
					duration: .15,
					ease: l
				},
				x: {
					type: "spring",
					stiffness: 380,
					damping: 26
				},
				scaleX: {
					type: "spring",
					stiffness: 280,
					damping: 22
				}
			} : {
				duration: .2,
				ease: l
			},
			className: e("flex w-full gap-2 md:gap-3", f ? "flex-row-reverse items-end" : "flex-col items-start", s),
			children: u
		})
	});
}
h.Content = f, h.Avatar = p, h.Timestamp = m;
//#endregion
export { h as MessageBubble };
