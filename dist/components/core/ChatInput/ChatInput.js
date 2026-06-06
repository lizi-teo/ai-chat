"use client";
import { cn as e } from "../../../lib/utils.js";
import { ArrowUp as t } from "../../../node_modules/lucide-react/dist/esm/icons/arrow-up.js";
import { Mic as n } from "../../../node_modules/lucide-react/dist/esm/icons/mic.js";
import { AnimatePresence as r } from "../../../node_modules/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as i } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
import { useReducedMotion as a } from "../../../node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.js";
import { Button as o } from "../../ui/button.js";
import { jsx as s } from "react/jsx-runtime";
import { createContext as c, useCallback as l, useContext as u, useEffect as d, useRef as f, useState as p } from "react";
//#region components/core/ChatInput/ChatInput.tsx
var m = c(null);
function h() {
	let e = u(m);
	if (!e) throw Error("ChatInput sub-components must be used inside <ChatInput>");
	return e;
}
function g({ placeholder: t = "Type a message…", className: n }) {
	let { value: r, setValue: i, handleSend: a } = h(), o = f(null);
	return d(() => {
		let e = o.current;
		e && (e.style.height = "auto", e.style.height = `${e.scrollHeight}px`);
	}, [r]), /* @__PURE__ */ s("textarea", {
		ref: o,
		value: r,
		onChange: (e) => i(e.target.value),
		onKeyDown: (e) => {
			e.key === "Enter" && !e.shiftKey && (e.preventDefault(), a());
		},
		placeholder: t,
		rows: 1,
		"aria-label": "Message input",
		className: e("flex-1 resize-none bg-transparent text-sm md:text-base text-foreground", "placeholder:text-muted-foreground leading-relaxed", "focus:outline-none focus:ring-0", "max-h-32 md:max-h-40 overflow-y-auto", "py-1.5", n)
	});
}
function _({ className: c }) {
	let { handleSend: l, value: u, disabled: d } = h(), f = a(), p = u.trim().length > 0 && !d;
	return /* @__PURE__ */ s(o, {
		size: "icon",
		onClick: l,
		disabled: !p,
		"aria-label": "Send message",
		className: e("shrink-0 rounded-full size-9 md:size-10", c),
		children: /* @__PURE__ */ s(r, {
			mode: "wait",
			initial: !1,
			children: p ? /* @__PURE__ */ s(i.span, {
				initial: f ? { opacity: 0 } : {
					opacity: 0,
					scale: .7,
					rotate: 45
				},
				animate: f ? { opacity: 1 } : {
					opacity: 1,
					scale: 1,
					rotate: 0
				},
				exit: f ? { opacity: 0 } : {
					opacity: 0,
					scale: .7,
					rotate: 45
				},
				transition: {
					duration: .15,
					ease: [
						0,
						0,
						.2,
						1
					]
				},
				className: "flex items-center justify-center",
				children: /* @__PURE__ */ s(t, { className: "size-4 md:size-5" })
			}, "send") : /* @__PURE__ */ s(i.span, {
				initial: f ? { opacity: 0 } : {
					opacity: 0,
					scale: .7
				},
				animate: f ? { opacity: 1 } : {
					opacity: 1,
					scale: 1
				},
				exit: f ? { opacity: 0 } : {
					opacity: 0,
					scale: .7
				},
				transition: {
					duration: .15,
					ease: [
						0,
						0,
						.2,
						1
					]
				},
				className: "flex items-center justify-center",
				children: /* @__PURE__ */ s(n, { className: "size-4 md:size-5" })
			}, "mic")
		})
	});
}
function v({ onSend: t, disabled: n = !1, className: r, children: i }) {
	let [a, o] = p(""), c = l(() => {
		let e = a.trim();
		!e || n || (t(e), o(""));
	}, [
		a,
		n,
		t
	]);
	return /* @__PURE__ */ s(m.Provider, {
		value: {
			value: a,
			setValue: o,
			handleSend: c,
			disabled: n
		},
		children: /* @__PURE__ */ s("div", {
			className: e("flex items-end gap-2 md:gap-3 rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]", "px-4 py-3 md:px-5 md:py-3.5", "transition-shadow duration-150 focus-within:ring-2 focus-within:ring-ring focus-within:shadow-[var(--shadow-elevated)]", r),
			children: i
		})
	});
}
v.Field = g, v.Send = _;
//#endregion
export { v as ChatInput };
