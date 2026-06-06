import { t as e } from "./utils-DFf2kDEH.js";
import { t } from "./button-CgWFXvz0.js";
import { c as n, d as r, h as i, m as a, p as o, u as s } from "./primitives-CFk-6qZM.js";
import { jsx as c } from "react/jsx-runtime";
import { createContext as l, useCallback as u, useContext as d, useEffect as f, useRef as p, useState as m } from "react";
var h = o("arrow-up", [["path", {
	d: "m5 12 7-7 7 7",
	key: "hav0vg"
}], ["path", {
	d: "M12 19V5",
	key: "x0mq9r"
}]]), g = o("mic", [
	["path", {
		d: "M12 19v3",
		key: "npa21l"
	}],
	["path", {
		d: "M19 10v2a7 7 0 0 1-14 0v-2",
		key: "1vc78b"
	}],
	["rect", {
		x: "9",
		y: "2",
		width: "6",
		height: "13",
		rx: "3",
		key: "s6n7sd"
	}]
]), _ = l({
	role: "assistant",
	grouped: !1,
	isGenerating: !1
}), v = [
	0,
	0,
	.2,
	1
], y = {
	hidden: {},
	show: { transition: { staggerChildren: .05 } }
}, b = {
	hidden: {
		opacity: 0,
		y: 4
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .18,
			ease: v
		}
	}
};
function x({ children: t, words: n, className: i }) {
	let { role: a } = d(_), o = r(), l = a === "user", u = !l && n && n.length > 0;
	return /* @__PURE__ */ c("div", {
		className: e("max-w-[75%] md:max-w-sm rounded-2xl px-4 py-3 md:px-5 md:py-3.5 text-sm md:text-base leading-relaxed", l ? "bg-primary text-primary-foreground" : "bg-muted text-foreground shadow-[var(--shadow-bubble)]", i),
		children: u ? o ? /* @__PURE__ */ c("span", { children: n.map((e, t) => /* @__PURE__ */ c("span", {
			className: "inline-block mr-[0.25em]",
			children: e
		}, t)) }) : /* @__PURE__ */ c(s.span, {
			variants: y,
			initial: "hidden",
			animate: "show",
			className: "inline",
			children: n.map((e, t) => /* @__PURE__ */ c(s.span, {
				variants: b,
				className: "inline-block mr-[0.25em]",
				children: e
			}, `${e}-${t}`))
		}) : t
	});
}
function S({ size: e = "sm", ...t }) {
	let { role: n, grouped: a, isGenerating: o } = d(_), l = r();
	return n === "user" || a ? null : /* @__PURE__ */ c(s.div, {
		animate: !l && o ? { scale: [
			1,
			1.025,
			1
		] } : { scale: 1 },
		transition: {
			duration: 2.4,
			repeat: o ? Infinity : 0,
			ease: "easeInOut"
		},
		children: /* @__PURE__ */ c(i, {
			size: e,
			...t
		})
	});
}
function C({ datetime: t, className: n }) {
	return /* @__PURE__ */ c(a, {
		datetime: t,
		className: e("text-xs mt-0.5 opacity-60", n)
	});
}
function w({ role: t, grouped: n = !1, isGenerating: i = !1, className: a, children: o }) {
	let l = r(), u = t === "user";
	return /* @__PURE__ */ c(_.Provider, {
		value: {
			role: t,
			grouped: n,
			isGenerating: i
		},
		children: /* @__PURE__ */ c(s.div, {
			initial: u ? {
				opacity: 0,
				x: l ? 0 : 20,
				scaleX: l ? 1 : .96
			} : {
				opacity: 0,
				y: l ? 0 : 8,
				scale: l ? 1 : .97
			},
			animate: u ? {
				opacity: 1,
				x: 0,
				scaleX: 1
			} : {
				opacity: 1,
				y: 0,
				scale: 1
			},
			transition: u ? {
				opacity: {
					duration: .15,
					ease: v
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
				ease: v
			},
			className: e("flex w-full gap-2 md:gap-3", u ? "flex-row-reverse items-end" : "flex-col items-start", a),
			children: o
		})
	});
}
w.Content = x, w.Avatar = S, w.Timestamp = C;
//#endregion
//#region components/core/ChatInput/ChatInput.tsx
var T = l(null);
function E() {
	let e = d(T);
	if (!e) throw Error("ChatInput sub-components must be used inside <ChatInput>");
	return e;
}
function D({ placeholder: t = "Type a message…", className: n }) {
	let { value: r, setValue: i, handleSend: a } = E(), o = p(null);
	return f(() => {
		let e = o.current;
		e && (e.style.height = "auto", e.style.height = `${e.scrollHeight}px`);
	}, [r]), /* @__PURE__ */ c("textarea", {
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
function O({ className: i }) {
	let { handleSend: a, value: o, disabled: l } = E(), u = r(), d = o.trim().length > 0 && !l;
	return /* @__PURE__ */ c(t, {
		size: "icon",
		onClick: a,
		disabled: !d,
		"aria-label": "Send message",
		className: e("shrink-0 rounded-full size-9 md:size-10", i),
		children: /* @__PURE__ */ c(n, {
			mode: "wait",
			initial: !1,
			children: d ? /* @__PURE__ */ c(s.span, {
				initial: u ? { opacity: 0 } : {
					opacity: 0,
					scale: .7,
					rotate: 45
				},
				animate: u ? { opacity: 1 } : {
					opacity: 1,
					scale: 1,
					rotate: 0
				},
				exit: u ? { opacity: 0 } : {
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
				children: /* @__PURE__ */ c(h, { className: "size-4 md:size-5" })
			}, "send") : /* @__PURE__ */ c(s.span, {
				initial: u ? { opacity: 0 } : {
					opacity: 0,
					scale: .7
				},
				animate: u ? { opacity: 1 } : {
					opacity: 1,
					scale: 1
				},
				exit: u ? { opacity: 0 } : {
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
				children: /* @__PURE__ */ c(g, { className: "size-4 md:size-5" })
			}, "mic")
		})
	});
}
function k({ onSend: t, disabled: n = !1, className: r, children: i }) {
	let [a, o] = m(""), s = u(() => {
		let e = a.trim();
		!e || n || (t(e), o(""));
	}, [
		a,
		n,
		t
	]);
	return /* @__PURE__ */ c(T.Provider, {
		value: {
			value: a,
			setValue: o,
			handleSend: s,
			disabled: n
		},
		children: /* @__PURE__ */ c("div", {
			className: e("flex items-end gap-2 md:gap-3 rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]", "px-4 py-3 md:px-5 md:py-3.5", "transition-shadow duration-150 focus-within:ring-2 focus-within:ring-ring focus-within:shadow-[var(--shadow-elevated)]", r),
			children: i
		})
	});
}
k.Field = D, k.Send = O;
//#endregion
//#region components/core/QuickReplies/QuickReplies.tsx
var A = {
	hidden: {},
	show: { transition: {
		staggerChildren: .05,
		delayChildren: .05
	} }
}, j = {
	hidden: {
		opacity: 0,
		y: 10
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .2,
			ease: [
				0,
				0,
				.2,
				1
			]
		}
	}
}, M = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { duration: .2 }
	}
};
function N({ options: n, onSelect: i, className: a }) {
	let o = r();
	return /* @__PURE__ */ c(s.div, {
		variants: A,
		initial: "hidden",
		animate: "show",
		className: e("flex gap-2 overflow-x-auto pb-1 scrollbar-none", a),
		role: "group",
		"aria-label": "Quick reply options",
		children: n.map((e) => /* @__PURE__ */ c(s.div, {
			variants: o ? M : j,
			className: "shrink-0",
			children: /* @__PURE__ */ c(t, {
				variant: "outline",
				size: "sm",
				onClick: () => i(e),
				className: "rounded-full whitespace-nowrap",
				children: e
			})
		}, e))
	});
}
//#endregion
//#region components/core/MediaCard/MediaCard.tsx
function P({ src: t, alt: n, className: r }) {
	return /* @__PURE__ */ c("div", {
		className: e("overflow-hidden rounded-t-xl", r),
		children: /* @__PURE__ */ c("img", {
			src: t,
			alt: n,
			className: "w-full h-40 md:h-48 object-cover"
		})
	});
}
function F({ children: t, className: n }) {
	return /* @__PURE__ */ c("div", {
		className: e("p-4 md:p-5 flex flex-col gap-2", n),
		children: t
	});
}
function I({ children: t, className: n }) {
	return /* @__PURE__ */ c("h3", {
		className: e("font-semibold text-sm md:text-base text-foreground leading-snug", n),
		children: t
	});
}
function L({ children: t, className: n }) {
	return /* @__PURE__ */ c("p", {
		className: e("text-xs md:text-sm text-muted-foreground", n),
		children: t
	});
}
function R({ children: t, className: n }) {
	return /* @__PURE__ */ c("div", {
		className: e("flex", n),
		children: t
	});
}
function z({ children: t, className: n }) {
	return /* @__PURE__ */ c("div", {
		className: e("flex items-center gap-1.5 text-xs md:text-sm", n),
		children: t
	});
}
function B({ className: t, children: n }) {
	let i = r();
	return /* @__PURE__ */ c(s.div, {
		initial: {
			opacity: 0,
			y: i ? 0 : 10
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
			y: i ? 0 : -3,
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
		className: e("rounded-xl border border-border bg-card overflow-hidden shadow-[var(--shadow-card)]", "transition-shadow duration-200 hover:shadow-[var(--shadow-elevated)] cursor-pointer", t),
		children: n
	});
}
B.Media = P, B.Body = F, B.Title = I, B.Subtitle = L, B.Badge = R, B.Meta = z;
//#endregion
//#region components/core/ActionStrip/ActionStrip.tsx
function V({ onClick: n, disabled: i, className: a, children: o }) {
	let l = r();
	return /* @__PURE__ */ c(s.div, {
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
		children: /* @__PURE__ */ c(t, {
			variant: "default",
			size: "default",
			onClick: n,
			disabled: i,
			className: e("w-full", a),
			children: o
		})
	});
}
function H({ onClick: n, disabled: i, className: a, children: o }) {
	let l = r();
	return /* @__PURE__ */ c(s.div, {
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
		children: /* @__PURE__ */ c(t, {
			variant: "outline",
			size: "default",
			onClick: n,
			disabled: i,
			className: e("w-full", a),
			children: o
		})
	});
}
function U({ className: t, children: n }) {
	return /* @__PURE__ */ c("div", {
		className: e("flex items-center gap-2 md:gap-3 px-4 md:px-5 py-3 md:py-4", t),
		children: n
	});
}
U.Primary = V, U.Secondary = H;
//#endregion
export { w as a, k as i, B as n, N as r, U as t };
