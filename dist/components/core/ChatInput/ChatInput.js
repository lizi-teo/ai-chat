"use client";
import { cn as e } from "../../../lib/utils.js";
import { Button as t } from "../../ui/button.js";
import { jsx as n } from "react/jsx-runtime";
import { createContext as r, useCallback as i, useContext as a, useEffect as o, useRef as s, useState as c } from "react";
import { ArrowUp as l, Mic as u } from "lucide-react";
import { AnimatePresence as d, motion as f, useReducedMotion as p } from "framer-motion";
//#region components/core/ChatInput/ChatInput.tsx
var m = r(null);
function h() {
	let e = a(m);
	if (!e) throw Error("ChatInput sub-components must be used inside <ChatInput>");
	return e;
}
function g({ placeholder: t = "Type a message…", className: r }) {
	let { value: i, setValue: a, handleSend: c } = h(), l = s(null);
	return o(() => {
		let e = l.current;
		e && (e.style.height = "auto", e.style.height = `${e.scrollHeight}px`);
	}, [i]), /* @__PURE__ */ n("textarea", {
		ref: l,
		value: i,
		onChange: (e) => a(e.target.value),
		onKeyDown: (e) => {
			e.key === "Enter" && !e.shiftKey && (e.preventDefault(), c());
		},
		placeholder: t,
		rows: 1,
		"aria-label": "Message input",
		className: e("flex-1 resize-none bg-transparent text-sm md:text-base text-foreground", "placeholder:text-muted-foreground leading-relaxed", "focus:outline-none focus:ring-0", "max-h-32 md:max-h-40 overflow-y-auto", "py-1.5", r)
	});
}
function _({ className: r }) {
	let { handleSend: i, value: a, disabled: o } = h(), s = p(), c = a.trim().length > 0 && !o;
	return /* @__PURE__ */ n(t, {
		size: "icon",
		onClick: i,
		disabled: !c,
		"aria-label": "Send message",
		className: e("shrink-0 rounded-full size-9 md:size-10", r),
		children: /* @__PURE__ */ n(d, {
			mode: "wait",
			initial: !1,
			children: c ? /* @__PURE__ */ n(f.span, {
				initial: s ? { opacity: 0 } : {
					opacity: 0,
					scale: .7,
					rotate: 45
				},
				animate: s ? { opacity: 1 } : {
					opacity: 1,
					scale: 1,
					rotate: 0
				},
				exit: s ? { opacity: 0 } : {
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
				children: /* @__PURE__ */ n(l, { className: "size-4 md:size-5" })
			}, "send") : /* @__PURE__ */ n(f.span, {
				initial: s ? { opacity: 0 } : {
					opacity: 0,
					scale: .7
				},
				animate: s ? { opacity: 1 } : {
					opacity: 1,
					scale: 1
				},
				exit: s ? { opacity: 0 } : {
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
				children: /* @__PURE__ */ n(u, { className: "size-4 md:size-5" })
			}, "mic")
		})
	});
}
function v({ onSend: t, disabled: r = !1, className: a, children: o }) {
	let [s, l] = c(""), u = i(() => {
		let e = s.trim();
		!e || r || (t(e), l(""));
	}, [
		s,
		r,
		t
	]);
	return /* @__PURE__ */ n(m.Provider, {
		value: {
			value: s,
			setValue: l,
			handleSend: u,
			disabled: r
		},
		children: /* @__PURE__ */ n("div", {
			className: e("flex items-end gap-2 md:gap-3 rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]", "px-4 py-3 md:px-5 md:py-3.5", "transition-shadow duration-150 focus-within:ring-2 focus-within:ring-ring focus-within:shadow-[var(--shadow-elevated)]", a),
			children: o
		})
	});
}
v.Field = g, v.Send = _;
//#endregion
export { v as ChatInput };
