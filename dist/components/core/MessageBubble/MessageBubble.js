"use client";
import { cn as e } from "../../../lib/utils.js";
import { EntityAvatar as t } from "../../primitives/EntityAvatar/EntityAvatar.js";
import { TimestampLabel as n } from "../../primitives/TimestampLabel/TimestampLabel.js";
import "../../../primitives.js";
import { jsx as r } from "react/jsx-runtime";
import { createContext as i, useContext as a } from "react";
import { motion as o, useReducedMotion as s } from "framer-motion";
//#region components/core/MessageBubble/MessageBubble.tsx
var c = i({
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
function f({ children: t, words: n, className: i }) {
	let { role: l } = a(c), f = s(), p = l === "user", m = !p && n && n.length > 0;
	return /* @__PURE__ */ r("div", {
		className: e("max-w-[75%] md:max-w-sm rounded-2xl px-4 py-3 md:px-5 md:py-3.5 text-sm md:text-base leading-relaxed", p ? "bg-primary text-primary-foreground" : "bg-muted text-foreground shadow-[var(--shadow-bubble)]", i),
		children: m ? f ? /* @__PURE__ */ r("span", { children: n.map((e, t) => /* @__PURE__ */ r("span", {
			className: "inline-block mr-[0.25em]",
			children: e
		}, t)) }) : /* @__PURE__ */ r(o.span, {
			variants: u,
			initial: "hidden",
			animate: "show",
			className: "inline",
			children: n.map((e, t) => /* @__PURE__ */ r(o.span, {
				variants: d,
				className: "inline-block mr-[0.25em]",
				children: e
			}, `${e}-${t}`))
		}) : t
	});
}
function p({ size: e = "sm", ...n }) {
	let { role: i, grouped: l, isGenerating: u } = a(c), d = s();
	return i === "user" || l ? null : /* @__PURE__ */ r(o.div, {
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
		children: /* @__PURE__ */ r(t, {
			size: e,
			...n
		})
	});
}
function m({ datetime: t, className: i }) {
	return /* @__PURE__ */ r(n, {
		datetime: t,
		className: e("text-xs mt-0.5 opacity-60", i)
	});
}
function h({ role: t, grouped: n = !1, isGenerating: i = !1, className: a, children: u }) {
	let d = s(), f = t === "user";
	return /* @__PURE__ */ r(c.Provider, {
		value: {
			role: t,
			grouped: n,
			isGenerating: i
		},
		children: /* @__PURE__ */ r(o.div, {
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
			className: e("flex w-full gap-2 md:gap-3", f ? "flex-row-reverse items-end" : "flex-col items-start", a),
			children: u
		})
	});
}
h.Content = f, h.Avatar = p, h.Timestamp = m;
//#endregion
export { h as MessageBubble };
