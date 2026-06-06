import { t as e } from "./utils-DFf2kDEH.js";
import { t } from "./button-CgWFXvz0.js";
import { d as n, l as r, u as i } from "./primitives-C7qjhGUg.js";
import { jsx as a } from "react/jsx-runtime";
import { createContext as o, useCallback as s, useContext as c, useEffect as l, useRef as u, useState as d } from "react";
import { AnimatePresence as f, motion as p, useReducedMotion as m } from "motion";
var h = r("arrow-up", [["path", {
	d: "m5 12 7-7 7 7",
	key: "hav0vg"
}], ["path", {
	d: "M12 19V5",
	key: "x0mq9r"
}]]), g = r("mic", [
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
]), _ = o({
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
function x({ children: t, words: n, className: r }) {
	let { role: i } = c(_), o = m(), s = i === "user", l = !s && n && n.length > 0;
	return /* @__PURE__ */ a("div", {
		className: e("max-w-[75%] md:max-w-sm rounded-2xl px-4 py-3 md:px-5 md:py-3.5 text-sm md:text-base leading-relaxed", s ? "bg-primary text-primary-foreground" : "bg-muted text-foreground shadow-[var(--shadow-bubble)]", r),
		children: l ? o ? /* @__PURE__ */ a("span", { children: n.map((e, t) => /* @__PURE__ */ a("span", {
			className: "inline-block mr-[0.25em]",
			children: e
		}, t)) }) : /* @__PURE__ */ a(p.span, {
			variants: y,
			initial: "hidden",
			animate: "show",
			className: "inline",
			children: n.map((e, t) => /* @__PURE__ */ a(p.span, {
				variants: b,
				className: "inline-block mr-[0.25em]",
				children: e
			}, `${e}-${t}`))
		}) : t
	});
}
function S({ size: e = "sm", ...t }) {
	let { role: r, grouped: i, isGenerating: o } = c(_), s = m();
	return r === "user" || i ? null : /* @__PURE__ */ a(p.div, {
		animate: !s && o ? { scale: [
			1,
			1.025,
			1
		] } : { scale: 1 },
		transition: {
			duration: 2.4,
			repeat: o ? Infinity : 0,
			ease: "easeInOut"
		},
		children: /* @__PURE__ */ a(n, {
			size: e,
			...t
		})
	});
}
function C({ datetime: t, className: n }) {
	return /* @__PURE__ */ a(i, {
		datetime: t,
		className: e("text-xs mt-0.5 opacity-60", n)
	});
}
function w({ role: t, grouped: n = !1, isGenerating: r = !1, className: i, children: o }) {
	let s = m(), c = t === "user";
	return /* @__PURE__ */ a(_.Provider, {
		value: {
			role: t,
			grouped: n,
			isGenerating: r
		},
		children: /* @__PURE__ */ a(p.div, {
			initial: c ? {
				opacity: 0,
				x: s ? 0 : 20,
				scaleX: s ? 1 : .96
			} : {
				opacity: 0,
				y: s ? 0 : 8,
				scale: s ? 1 : .97
			},
			animate: c ? {
				opacity: 1,
				x: 0,
				scaleX: 1
			} : {
				opacity: 1,
				y: 0,
				scale: 1
			},
			transition: c ? {
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
			className: e("flex w-full gap-2 md:gap-3", c ? "flex-row-reverse items-end" : "flex-col items-start", i),
			children: o
		})
	});
}
w.Content = x, w.Avatar = S, w.Timestamp = C;
//#endregion
//#region components/core/ChatInput/ChatInput.tsx
var T = o(null);
function E() {
	let e = c(T);
	if (!e) throw Error("ChatInput sub-components must be used inside <ChatInput>");
	return e;
}
function D({ placeholder: t = "Type a message…", className: n }) {
	let { value: r, setValue: i, handleSend: o } = E(), s = u(null);
	return l(() => {
		let e = s.current;
		e && (e.style.height = "auto", e.style.height = `${e.scrollHeight}px`);
	}, [r]), /* @__PURE__ */ a("textarea", {
		ref: s,
		value: r,
		onChange: (e) => i(e.target.value),
		onKeyDown: (e) => {
			e.key === "Enter" && !e.shiftKey && (e.preventDefault(), o());
		},
		placeholder: t,
		rows: 1,
		"aria-label": "Message input",
		className: e("flex-1 resize-none bg-transparent text-sm md:text-base text-foreground", "placeholder:text-muted-foreground leading-relaxed", "focus:outline-none focus:ring-0", "max-h-32 md:max-h-40 overflow-y-auto", "py-1.5", n)
	});
}
function O({ className: n }) {
	let { handleSend: r, value: i, disabled: o } = E(), s = m(), c = i.trim().length > 0 && !o;
	return /* @__PURE__ */ a(t, {
		size: "icon",
		onClick: r,
		disabled: !c,
		"aria-label": "Send message",
		className: e("shrink-0 rounded-full size-9 md:size-10", n),
		children: /* @__PURE__ */ a(f, {
			mode: "wait",
			initial: !1,
			children: c ? /* @__PURE__ */ a(p.span, {
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
				children: /* @__PURE__ */ a(h, { className: "size-4 md:size-5" })
			}, "send") : /* @__PURE__ */ a(p.span, {
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
				children: /* @__PURE__ */ a(g, { className: "size-4 md:size-5" })
			}, "mic")
		})
	});
}
function k({ onSend: t, disabled: n = !1, className: r, children: i }) {
	let [o, c] = d(""), l = s(() => {
		let e = o.trim();
		!e || n || (t(e), c(""));
	}, [
		o,
		n,
		t
	]);
	return /* @__PURE__ */ a(T.Provider, {
		value: {
			value: o,
			setValue: c,
			handleSend: l,
			disabled: n
		},
		children: /* @__PURE__ */ a("div", {
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
function N({ options: n, onSelect: r, className: i }) {
	let o = m();
	return /* @__PURE__ */ a(p.div, {
		variants: A,
		initial: "hidden",
		animate: "show",
		className: e("flex gap-2 overflow-x-auto pb-1 scrollbar-none", i),
		role: "group",
		"aria-label": "Quick reply options",
		children: n.map((e) => /* @__PURE__ */ a(p.div, {
			variants: o ? M : j,
			className: "shrink-0",
			children: /* @__PURE__ */ a(t, {
				variant: "outline",
				size: "sm",
				onClick: () => r(e),
				className: "rounded-full whitespace-nowrap",
				children: e
			})
		}, e))
	});
}
//#endregion
//#region components/core/MediaCard/MediaCard.tsx
function P({ src: t, alt: n, className: r }) {
	return /* @__PURE__ */ a("div", {
		className: e("overflow-hidden rounded-t-xl", r),
		children: /* @__PURE__ */ a("img", {
			src: t,
			alt: n,
			className: "w-full h-40 md:h-48 object-cover"
		})
	});
}
function F({ children: t, className: n }) {
	return /* @__PURE__ */ a("div", {
		className: e("p-4 md:p-5 flex flex-col gap-2", n),
		children: t
	});
}
function I({ children: t, className: n }) {
	return /* @__PURE__ */ a("h3", {
		className: e("font-semibold text-sm md:text-base text-foreground leading-snug", n),
		children: t
	});
}
function L({ children: t, className: n }) {
	return /* @__PURE__ */ a("p", {
		className: e("text-xs md:text-sm text-muted-foreground", n),
		children: t
	});
}
function R({ children: t, className: n }) {
	return /* @__PURE__ */ a("div", {
		className: e("flex", n),
		children: t
	});
}
function z({ children: t, className: n }) {
	return /* @__PURE__ */ a("div", {
		className: e("flex items-center gap-1.5 text-xs md:text-sm", n),
		children: t
	});
}
function B({ className: t, children: n }) {
	let r = m();
	return /* @__PURE__ */ a(p.div, {
		initial: {
			opacity: 0,
			y: r ? 0 : 10
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
			y: r ? 0 : -3,
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
function V({ onClick: n, disabled: r, className: i, children: o }) {
	let s = m();
	return /* @__PURE__ */ a(p.div, {
		initial: {
			opacity: 0,
			y: s ? 0 : 6
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
		children: /* @__PURE__ */ a(t, {
			variant: "default",
			size: "default",
			onClick: n,
			disabled: r,
			className: e("w-full", i),
			children: o
		})
	});
}
function H({ onClick: n, disabled: r, className: i, children: o }) {
	let s = m();
	return /* @__PURE__ */ a(p.div, {
		initial: {
			opacity: 0,
			y: s ? 0 : 6
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
		children: /* @__PURE__ */ a(t, {
			variant: "outline",
			size: "default",
			onClick: n,
			disabled: r,
			className: e("w-full", i),
			children: o
		})
	});
}
function U({ className: t, children: n }) {
	return /* @__PURE__ */ a("div", {
		className: e("flex items-center gap-2 md:gap-3 px-4 md:px-5 py-3 md:py-4", t),
		children: n
	});
}
U.Primary = V, U.Secondary = H;
//#endregion
export { w as a, k as i, B as n, N as r, U as t };
