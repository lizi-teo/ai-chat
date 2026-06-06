import { t as e } from "./utils-DFf2kDEH.js";
import { t } from "./button-CgWFXvz0.js";
import { c as n, d as r, f as i, l as a, p as o, u as s } from "./primitives-CFk-6qZM.js";
import "./ActionStrip-C-lhnDL1.js";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
import { Children as u, createContext as d, useContext as f, useId as p, useLayoutEffect as m, useRef as h, useState as g } from "react";
var _ = o("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]);
//#endregion
//#region components/core/TypingIndicator/TypingIndicator.tsx
function v({ className: t }) {
	let n = r();
	return /* @__PURE__ */ c(s.div, {
		initial: {
			opacity: 0,
			y: n ? 0 : 6,
			scale: n ? 1 : .97
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		exit: {
			opacity: 0,
			y: n ? 0 : 4
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
		className: e("inline-flex items-center gap-1 rounded-2xl rounded-tl-sm bg-muted px-4 py-3 md:px-5", t),
		"aria-label": "Assistant is typing",
		role: "status",
		children: [
			0,
			1,
			2
		].map((e) => /* @__PURE__ */ c(s.span, {
			animate: n ? { opacity: [
				.4,
				1,
				.4
			] } : {
				opacity: [
					.3,
					1,
					.3
				],
				y: [
					0,
					-4,
					0
				]
			},
			transition: {
				duration: n ? 1.2 : .8,
				repeat: Infinity,
				ease: n ? "linear" : "easeInOut",
				delay: e * .15
			},
			className: "size-1.5 md:size-2 rounded-full bg-muted-foreground"
		}, e))
	});
}
//#endregion
//#region components/core/DetailList/DetailList.tsx
var y = {
	hidden: {},
	show: { transition: {
		staggerChildren: .04,
		delayChildren: .04
	} }
}, b = {
	hidden: {
		opacity: 0,
		y: 8
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
}, x = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { duration: .2 }
	}
};
function S({ label: t, value: n, className: i }) {
	let a = r();
	return /* @__PURE__ */ l(s.div, {
		variants: a ? x : b,
		className: e("flex items-center justify-between gap-4 py-2 md:py-2.5", "border-b border-border last:border-0", i),
		children: [/* @__PURE__ */ c("span", {
			className: "text-xs md:text-sm text-muted-foreground shrink-0",
			children: t
		}), /* @__PURE__ */ c("span", {
			className: "text-xs md:text-sm text-foreground font-medium text-right",
			children: n
		})]
	});
}
function C({ className: t, children: n }) {
	return /* @__PURE__ */ c(s.div, {
		variants: y,
		initial: "hidden",
		animate: "show",
		className: e("divide-y-0 px-4 md:px-5 py-1", t),
		children: n
	});
}
C.Row = S;
//#endregion
//#region components/core/SummaryPanel/SummaryPanel.tsx
var w = d({
	isOpen: !0,
	toggle: () => {},
	collapsible: !1
});
function T({ children: n, className: r }) {
	let { isOpen: i, toggle: a, collapsible: o } = f(w);
	return /* @__PURE__ */ l("div", {
		className: e("flex items-center justify-between gap-2 px-4 md:px-5 py-3 md:py-4", o && "cursor-pointer select-none", r),
		onClick: o ? a : void 0,
		role: o ? "button" : void 0,
		"aria-expanded": o ? i : void 0,
		children: [/* @__PURE__ */ c("div", {
			className: "font-semibold text-sm md:text-base text-foreground",
			children: n
		}), o && /* @__PURE__ */ c(s.div, {
			animate: { rotate: i ? 0 : -90 },
			transition: {
				duration: .2,
				ease: [
					0,
					0,
					.2,
					1
				]
			},
			children: /* @__PURE__ */ c(t, {
				variant: "ghost",
				size: "icon-xs",
				"aria-hidden": !0,
				tabIndex: -1,
				children: /* @__PURE__ */ c(_, { className: "size-3.5 md:size-4 text-muted-foreground" })
			})
		})]
	});
}
function E({ children: t, className: i }) {
	let { isOpen: a, collapsible: o } = f(w), l = r();
	return o ? /* @__PURE__ */ c(n, {
		initial: !1,
		children: a && /* @__PURE__ */ c(s.div, {
			initial: {
				opacity: 0,
				height: 0
			},
			animate: {
				opacity: 1,
				height: "auto"
			},
			exit: {
				opacity: 0,
				height: 0
			},
			transition: {
				duration: l ? .01 : .25,
				ease: [
					0,
					0,
					.2,
					1
				]
			},
			className: "overflow-hidden",
			children: /* @__PURE__ */ c("div", {
				className: e("px-4 md:px-5 pb-4 md:pb-5", i),
				children: t
			})
		}, "body")
	}) : /* @__PURE__ */ c("div", {
		className: e("px-4 md:px-5 pb-4 md:pb-5", i),
		children: t
	});
}
function D({ defaultOpen: t = !0, collapsible: n = !1, className: r, children: i }) {
	let [a, o] = g(t);
	return /* @__PURE__ */ c(w.Provider, {
		value: {
			isOpen: a,
			toggle: () => o((e) => !e),
			collapsible: n
		},
		children: /* @__PURE__ */ c("div", {
			className: e("rounded-xl border border-border bg-card shadow-card overflow-hidden", r),
			children: i
		})
	});
}
D.Header = T, D.Body = E;
//#endregion
//#region components/core/SelectionGroup/SelectionGroup.tsx
var O = d({
	type: "radio",
	selected: [],
	toggle: () => {}
}), k = {
	hidden: {},
	show: { transition: {
		staggerChildren: .05,
		delayChildren: .05
	} }
}, A = {
	hidden: {
		opacity: 0,
		y: 8
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
}, j = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { duration: .2 }
	}
};
function M({ value: t, children: a, description: o, icon: u, className: d }) {
	let { type: p, selected: m, toggle: h } = f(O), g = r(), _ = m.includes(t);
	return /* @__PURE__ */ l(s.button, {
		variants: g ? j : A,
		onClick: () => h(t),
		role: p,
		"aria-checked": _,
		className: e("w-full flex items-center gap-3 rounded-xl px-4 py-3.5 md:py-4 text-left", "transition-colors duration-150", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", _ ? "border-2 border-primary bg-primary/5 shadow-[var(--shadow-card)]" : "border border-border bg-card shadow-[var(--shadow-sm)] hover:border-primary/40 hover:bg-muted/30 hover:shadow-[var(--shadow-card)]", d),
		children: [
			u && /* @__PURE__ */ c("span", {
				className: "shrink-0 size-8 md:size-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground",
				children: u
			}),
			/* @__PURE__ */ l("div", {
				className: "flex-1 min-w-0",
				children: [/* @__PURE__ */ c("p", {
					className: e("text-sm md:text-base font-medium leading-snug", "text-foreground"),
					children: a
				}), o && /* @__PURE__ */ c("p", {
					className: "text-xs md:text-sm text-muted-foreground mt-0.5 leading-snug",
					children: o
				})]
			}),
			/* @__PURE__ */ c("div", {
				className: e("shrink-0 flex items-center justify-center border-2 transition-colors duration-150", p === "radio" ? "rounded-full size-5" : "rounded-md size-5", _ ? "border-primary bg-primary" : "border-muted-foreground/40 bg-transparent"),
				children: /* @__PURE__ */ c(n, {
					initial: !1,
					children: _ && /* @__PURE__ */ c(s.span, {
						initial: {
							opacity: 0,
							scale: g ? 1 : .5
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						exit: {
							opacity: 0,
							scale: g ? 1 : .5
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
						children: /* @__PURE__ */ c(i, {
							className: "size-3 text-primary-foreground",
							strokeWidth: 3
						})
					}, "check")
				})
			})
		]
	});
}
function N(e) {
	return e === void 0 ? [] : Array.isArray(e) ? e : [e];
}
function P({ type: t = "radio", value: n, defaultValue: r, onChange: i, className: a, children: o }) {
	let l = n !== void 0, [u, d] = g(() => N(r)), f = l ? N(n) : u;
	function p(e) {
		let n;
		n = t === "radio" ? [e] : f.includes(e) ? f.filter((t) => t !== e) : [...f, e], l || d(n), i?.(t === "radio" ? n[0] ?? "" : n);
	}
	return /* @__PURE__ */ c(O.Provider, {
		value: {
			type: t,
			selected: f,
			toggle: p
		},
		children: /* @__PURE__ */ c(s.div, {
			variants: k,
			initial: "hidden",
			animate: "show",
			role: t === "radio" ? "radiogroup" : "group",
			className: e("flex flex-col gap-2 md:gap-2.5", a),
			children: o
		})
	});
}
P.Option = M;
//#endregion
//#region components/core/CardStrip/CardStrip.tsx
function F({ children: t, className: n }) {
	return /* @__PURE__ */ c("div", {
		className: e("snap-start shrink-0 w-[280px] md:w-[300px]", n),
		children: t
	});
}
function I({ children: t, className: n }) {
	let i = r();
	return /* @__PURE__ */ c(s.div, {
		initial: {
			opacity: 0,
			y: i ? 0 : 8
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
		className: e("flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 pr-6", n),
		style: {
			scrollbarWidth: "none",
			WebkitOverflowScrolling: "touch"
		},
		"aria-label": "Scroll for more options",
		children: t
	});
}
I.Item = F;
//#endregion
//#region components/core/CardStack/CardStack.tsx
var L = 5, R = 6, z = 12;
function B({ children: t, className: n }) {
	return /* @__PURE__ */ c("div", {
		className: e("w-full", n),
		children: t
	});
}
function V({ children: t, expanded: n, onExpandChange: i, defaultExpanded: a = !1, className: o }) {
	let l = n !== void 0, [d, f] = g(a), p = l ? n : d, _ = r(), v = h(null), [y, b] = g(0), [x, S] = g(!1), C = u.toArray(t), w = Math.min(C.length, L), T = C.slice(0, w);
	process.env.NODE_ENV === "development" && C.length > L && console.warn(`CardStack: received ${C.length} items but only ${L} are supported. Extra items are hidden.`), m(() => {
		if (!v.current) return;
		let e = () => {
			let e = v.current.getBoundingClientRect().height;
			e > 0 && (b(e), S(!0));
		};
		e();
		let t = new ResizeObserver(e);
		return t.observe(v.current), () => t.disconnect();
	}, []);
	let E = y + z, D = y + (w - 1) * R, O = y + (w - 1) * E, k = (e) => {
		l || f(e), i?.(e);
	};
	return /* @__PURE__ */ c(s.div, {
		className: e("relative select-none", !p && "cursor-pointer", o),
		animate: x ? { height: p ? O : D } : void 0,
		transition: !x || _ ? { duration: 0 } : {
			type: "spring",
			stiffness: 320,
			damping: 28
		},
		onClick: p ? void 0 : () => k(!0),
		onKeyDown: (e) => {
			!p && (e.key === "Enter" || e.key === " ") ? (e.preventDefault(), k(!0)) : p && e.key === "Escape" && k(!1);
		},
		role: "button",
		tabIndex: 0,
		"aria-expanded": p,
		"aria-label": p ? "Card options expanded" : "Tap to expand card options",
		children: T.map((e, t) => /* @__PURE__ */ c(s.div, {
			ref: t === 0 ? v : void 0,
			className: "absolute inset-x-0 top-0",
			style: { zIndex: w - t },
			animate: {
				y: _ ? 0 : t * (p ? E : R),
				rotate: _ ? 0 : t * (p ? 0 : -1.5)
			},
			transition: {
				type: "spring",
				stiffness: 320,
				damping: 28
			},
			children: e
		}, t))
	});
}
V.Item = B;
//#endregion
//#region components/core/ChipToCard/ChipToCard.tsx
function H({ chips: i, selectedId: o, onSelectedChange: u, defaultSelectedId: d, className: f }) {
	let m = o !== void 0, [h, _] = g(d ?? null), v = m ? o : h, y = r(), b = p(), x = i.find((e) => e.id === v), S = (e) => {
		m || _(e), u?.(e);
	};
	return /* @__PURE__ */ c(a, {
		id: b,
		children: /* @__PURE__ */ l("div", {
			className: e(f),
			children: [/* @__PURE__ */ c("div", {
				className: "flex flex-wrap gap-2",
				children: /* @__PURE__ */ c(n, {
					initial: !1,
					children: !v && i.map((e) => /* @__PURE__ */ c(s.div, {
						layoutId: `${b}-${e.id}`,
						exit: {
							opacity: 0,
							scale: y ? 1 : .9,
							transition: {
								duration: .15,
								ease: [
									.4,
									0,
									1,
									1
								]
							}
						},
						className: "shrink-0",
						whileTap: y ? void 0 : { scale: .97 },
						children: /* @__PURE__ */ c(t, {
							variant: "outline",
							size: "sm",
							className: "rounded-full",
							onClick: () => S(e.id),
							children: e.label
						})
					}, e.id))
				})
			}), /* @__PURE__ */ c(n, {
				initial: !1,
				children: v && x && /* @__PURE__ */ l(s.div, {
					layoutId: `${b}-${v}`,
					className: "mt-3 rounded-xl border border-border bg-card overflow-hidden shadow-[var(--shadow-card)]",
					initial: { opacity: +!!y },
					animate: { opacity: 1 },
					exit: {
						opacity: 0,
						scale: y ? 1 : .95,
						transition: {
							duration: .2,
							ease: [
								.4,
								0,
								1,
								1
							]
						}
					},
					transition: {
						duration: .25,
						ease: [
							0,
							0,
							.2,
							1
						]
					},
					children: [x.card, /* @__PURE__ */ c("div", {
						className: "px-4 pb-4 pt-2 border-t border-border",
						children: /* @__PURE__ */ c(t, {
							variant: "ghost",
							size: "sm",
							onClick: () => S(null),
							className: "text-muted-foreground",
							children: "← Back to options"
						})
					})]
				}, v)
			})]
		})
	});
}
//#endregion
export { D as a, P as i, V as n, C as o, I as r, v as s, H as t };
