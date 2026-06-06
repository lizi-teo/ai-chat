import { _ as e, c as t, g as n, h as r, l as i, u as a } from "./primitives-CmcLfdl_.js";
import { t as o } from "./utils-DFf2kDEH.js";
import { t as s } from "./button-CgWFXvz0.js";
import { jsx as c } from "react/jsx-runtime";
import { createContext as l, useCallback as u, useContext as d, useEffect as f, useRef as p, useState as m } from "react";
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
function x({ children: e, words: n, className: r }) {
	let { role: a } = d(_), s = t(), l = a === "user", u = !l && n && n.length > 0;
	return /* @__PURE__ */ c("div", {
		className: o("max-w-[75%] md:max-w-sm rounded-2xl px-4 py-3 md:px-5 md:py-3.5 text-sm md:text-base leading-relaxed", l ? "bg-primary text-primary-foreground" : "bg-muted text-foreground shadow-[var(--shadow-bubble)]", r),
		children: u ? s ? /* @__PURE__ */ c("span", { children: n.map((e, t) => /* @__PURE__ */ c("span", {
			className: "inline-block mr-[0.25em]",
			children: e
		}, t)) }) : /* @__PURE__ */ c(i.span, {
			variants: y,
			initial: "hidden",
			animate: "show",
			className: "inline",
			children: n.map((e, t) => /* @__PURE__ */ c(i.span, {
				variants: b,
				className: "inline-block mr-[0.25em]",
				children: e
			}, `${e}-${t}`))
		}) : e
	});
}
function S({ size: n = "sm", ...r }) {
	let { role: a, grouped: o, isGenerating: s } = d(_), l = t();
	return a === "user" || o ? null : /* @__PURE__ */ c(i.div, {
		animate: !l && s ? { scale: [
			1,
			1.025,
			1
		] } : { scale: 1 },
		transition: {
			duration: 2.4,
			repeat: s ? Infinity : 0,
			ease: "easeInOut"
		},
		children: /* @__PURE__ */ c(e, {
			size: n,
			...r
		})
	});
}
function C({ datetime: e, className: t }) {
	return /* @__PURE__ */ c(n, {
		datetime: e,
		className: o("text-xs mt-0.5 opacity-60", t)
	});
}
function w({ role: e, grouped: n = !1, isGenerating: r = !1, className: a, children: s }) {
	let l = t(), u = e === "user";
	return /* @__PURE__ */ c(_.Provider, {
		value: {
			role: e,
			grouped: n,
			isGenerating: r
		},
		children: /* @__PURE__ */ c(i.div, {
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
			className: o("flex w-full gap-2 md:gap-3", u ? "flex-row-reverse items-end" : "flex-col items-start", a),
			children: s
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
function D({ placeholder: e = "Type a message…", className: t }) {
	let { value: n, setValue: r, handleSend: i } = E(), a = p(null);
	return f(() => {
		let e = a.current;
		e && (e.style.height = "auto", e.style.height = `${e.scrollHeight}px`);
	}, [n]), /* @__PURE__ */ c("textarea", {
		ref: a,
		value: n,
		onChange: (e) => r(e.target.value),
		onKeyDown: (e) => {
			e.key === "Enter" && !e.shiftKey && (e.preventDefault(), i());
		},
		placeholder: e,
		rows: 1,
		"aria-label": "Message input",
		className: o("flex-1 resize-none bg-transparent text-sm md:text-base text-foreground", "placeholder:text-muted-foreground leading-relaxed", "focus:outline-none focus:ring-0", "max-h-32 md:max-h-40 overflow-y-auto", "py-1.5", t)
	});
}
function O({ className: e }) {
	let { handleSend: n, value: r, disabled: l } = E(), u = t(), d = r.trim().length > 0 && !l;
	return /* @__PURE__ */ c(s, {
		size: "icon",
		onClick: n,
		disabled: !d,
		"aria-label": "Send message",
		className: o("shrink-0 rounded-full size-9 md:size-10", e),
		children: /* @__PURE__ */ c(a, {
			mode: "wait",
			initial: !1,
			children: d ? /* @__PURE__ */ c(i.span, {
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
			}, "send") : /* @__PURE__ */ c(i.span, {
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
function k({ onSend: e, disabled: t = !1, className: n, children: r }) {
	let [i, a] = m(""), s = u(() => {
		let n = i.trim();
		!n || t || (e(n), a(""));
	}, [
		i,
		t,
		e
	]);
	return /* @__PURE__ */ c(T.Provider, {
		value: {
			value: i,
			setValue: a,
			handleSend: s,
			disabled: t
		},
		children: /* @__PURE__ */ c("div", {
			className: o("flex items-end gap-2 md:gap-3 rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]", "px-4 py-3 md:px-5 md:py-3.5", "transition-shadow duration-150 focus-within:ring-2 focus-within:ring-ring focus-within:shadow-[var(--shadow-elevated)]", n),
			children: r
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
function N({ options: e, onSelect: n, className: r }) {
	let a = t();
	return /* @__PURE__ */ c(i.div, {
		variants: A,
		initial: "hidden",
		animate: "show",
		className: o("flex gap-2 overflow-x-auto pb-1 scrollbar-none", r),
		role: "group",
		"aria-label": "Quick reply options",
		children: e.map((e) => /* @__PURE__ */ c(i.div, {
			variants: a ? M : j,
			className: "shrink-0",
			children: /* @__PURE__ */ c(s, {
				variant: "outline",
				size: "sm",
				onClick: () => n(e),
				className: "rounded-full whitespace-nowrap",
				children: e
			})
		}, e))
	});
}
//#endregion
//#region components/core/MediaCard/MediaCard.tsx
function P({ src: e, alt: t, className: n }) {
	return /* @__PURE__ */ c("div", {
		className: o("overflow-hidden rounded-t-xl", n),
		children: /* @__PURE__ */ c("img", {
			src: e,
			alt: t,
			className: "w-full h-40 md:h-48 object-cover"
		})
	});
}
function F({ children: e, className: t }) {
	return /* @__PURE__ */ c("div", {
		className: o("p-4 md:p-5 flex flex-col gap-2", t),
		children: e
	});
}
function I({ children: e, className: t }) {
	return /* @__PURE__ */ c("h3", {
		className: o("font-semibold text-sm md:text-base text-foreground leading-snug", t),
		children: e
	});
}
function L({ children: e, className: t }) {
	return /* @__PURE__ */ c("p", {
		className: o("text-xs md:text-sm text-muted-foreground", t),
		children: e
	});
}
function R({ children: e, className: t }) {
	return /* @__PURE__ */ c("div", {
		className: o("flex", t),
		children: e
	});
}
function z({ children: e, className: t }) {
	return /* @__PURE__ */ c("div", {
		className: o("flex items-center gap-1.5 text-xs md:text-sm", t),
		children: e
	});
}
function B({ className: e, children: n }) {
	let r = t();
	return /* @__PURE__ */ c(i.div, {
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
		className: o("rounded-xl border border-border bg-card overflow-hidden shadow-[var(--shadow-card)]", "transition-shadow duration-200 hover:shadow-[var(--shadow-elevated)] cursor-pointer", e),
		children: n
	});
}
B.Media = P, B.Body = F, B.Title = I, B.Subtitle = L, B.Badge = R, B.Meta = z;
//#endregion
//#region components/core/ActionStrip/ActionStrip.tsx
function V({ onClick: e, disabled: n, className: r, children: a }) {
	let l = t();
	return /* @__PURE__ */ c(i.div, {
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
		children: /* @__PURE__ */ c(s, {
			variant: "default",
			size: "default",
			onClick: e,
			disabled: n,
			className: o("w-full", r),
			children: a
		})
	});
}
function H({ onClick: e, disabled: n, className: r, children: a }) {
	let l = t();
	return /* @__PURE__ */ c(i.div, {
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
		children: /* @__PURE__ */ c(s, {
			variant: "outline",
			size: "default",
			onClick: e,
			disabled: n,
			className: o("w-full", r),
			children: a
		})
	});
}
function U({ className: e, children: t }) {
	return /* @__PURE__ */ c("div", {
		className: o("flex items-center gap-2 md:gap-3 px-4 md:px-5 py-3 md:py-4", e),
		children: t
	});
}
U.Primary = V, U.Secondary = H;
//#endregion
export { w as a, k as i, B as n, N as r, U as t };
