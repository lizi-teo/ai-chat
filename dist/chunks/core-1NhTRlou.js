import { c as e, d as t, f as n, h as r, l as i, m as a, p as o, u as s } from "./primitives-CmcLfdl_.js";
import { t as c } from "./utils-DFf2kDEH.js";
import { t as l } from "./button-CgWFXvz0.js";
import "./ActionStrip-Cv5B75rv.js";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
import { Children as f, createContext as p, useCallback as m, useContext as h, useId as g, useLayoutEffect as _, useMemo as v, useRef as y, useState as b } from "react";
var x = r("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), S = (e) => !e.isLayoutDirty && e.willUpdate(!1);
function C() {
	let e = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new WeakMap(), n = () => e.forEach(S);
	return {
		add: (r) => {
			e.add(r), t.set(r, r.addEventListener("willUpdate", n));
		},
		remove: (r) => {
			e.delete(r);
			let i = t.get(r);
			i && (i(), t.delete(r)), n();
		},
		dirty: n
	};
}
//#endregion
//#region node_modules/framer-motion/dist/es/context/DeprecatedLayoutGroupContext.mjs
var w = p(null);
//#endregion
//#region node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs
function T() {
	let e = y(!1);
	return n(() => (e.current = !0, () => {
		e.current = !1;
	}), []), e;
}
//#endregion
//#region node_modules/framer-motion/dist/es/utils/use-force-update.mjs
function E() {
	let e = T(), [n, r] = b(0), i = m(() => {
		e.current && r(n + 1);
	}, [n]);
	return [m(() => t.postRender(i), [i]), n];
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs
var D = (e) => e === !0, O = (e) => D(e === !0) || e === "id", k = ({ children: e, id: t, inherit: n = !0 }) => {
	let r = h(o), i = h(w), [a, s] = E(), c = y(null), l = r.id || i;
	c.current === null && (O(n) && l && (t = t ? l + "-" + t : l), c.current = {
		id: t,
		group: D(n) && r.group || C()
	});
	let d = v(() => ({
		...c.current,
		forceRender: a
	}), [s]);
	return u(o.Provider, {
		value: d,
		children: e
	});
};
//#endregion
//#region components/core/TypingIndicator/TypingIndicator.tsx
function A({ className: t }) {
	let n = e();
	return /* @__PURE__ */ u(i.div, {
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
		className: c("inline-flex items-center gap-1 rounded-2xl rounded-tl-sm bg-muted px-4 py-3 md:px-5", t),
		"aria-label": "Assistant is typing",
		role: "status",
		children: [
			0,
			1,
			2
		].map((e) => /* @__PURE__ */ u(i.span, {
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
var j = {
	hidden: {},
	show: { transition: {
		staggerChildren: .04,
		delayChildren: .04
	} }
}, M = {
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
}, N = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { duration: .2 }
	}
};
function P({ label: t, value: n, className: r }) {
	let a = e();
	return /* @__PURE__ */ d(i.div, {
		variants: a ? N : M,
		className: c("flex items-center justify-between gap-4 py-2 md:py-2.5", "border-b border-border last:border-0", r),
		children: [/* @__PURE__ */ u("span", {
			className: "text-xs md:text-sm text-muted-foreground shrink-0",
			children: t
		}), /* @__PURE__ */ u("span", {
			className: "text-xs md:text-sm text-foreground font-medium text-right",
			children: n
		})]
	});
}
function F({ className: e, children: t }) {
	return /* @__PURE__ */ u(i.div, {
		variants: j,
		initial: "hidden",
		animate: "show",
		className: c("divide-y-0 px-4 md:px-5 py-1", e),
		children: t
	});
}
F.Row = P;
//#endregion
//#region components/core/SummaryPanel/SummaryPanel.tsx
var I = p({
	isOpen: !0,
	toggle: () => {},
	collapsible: !1
});
function L({ children: e, className: t }) {
	let { isOpen: n, toggle: r, collapsible: a } = h(I);
	return /* @__PURE__ */ d("div", {
		className: c("flex items-center justify-between gap-2 px-4 md:px-5 py-3 md:py-4", a && "cursor-pointer select-none", t),
		onClick: a ? r : void 0,
		role: a ? "button" : void 0,
		"aria-expanded": a ? n : void 0,
		children: [/* @__PURE__ */ u("div", {
			className: "font-semibold text-sm md:text-base text-foreground",
			children: e
		}), a && /* @__PURE__ */ u(i.div, {
			animate: { rotate: n ? 0 : -90 },
			transition: {
				duration: .2,
				ease: [
					0,
					0,
					.2,
					1
				]
			},
			children: /* @__PURE__ */ u(l, {
				variant: "ghost",
				size: "icon-xs",
				"aria-hidden": !0,
				tabIndex: -1,
				children: /* @__PURE__ */ u(x, { className: "size-3.5 md:size-4 text-muted-foreground" })
			})
		})]
	});
}
function R({ children: t, className: n }) {
	let { isOpen: r, collapsible: a } = h(I), o = e();
	return a ? /* @__PURE__ */ u(s, {
		initial: !1,
		children: r && /* @__PURE__ */ u(i.div, {
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
				duration: o ? .01 : .25,
				ease: [
					0,
					0,
					.2,
					1
				]
			},
			className: "overflow-hidden",
			children: /* @__PURE__ */ u("div", {
				className: c("px-4 md:px-5 pb-4 md:pb-5", n),
				children: t
			})
		}, "body")
	}) : /* @__PURE__ */ u("div", {
		className: c("px-4 md:px-5 pb-4 md:pb-5", n),
		children: t
	});
}
function z({ defaultOpen: e = !0, collapsible: t = !1, className: n, children: r }) {
	let [i, a] = b(e);
	return /* @__PURE__ */ u(I.Provider, {
		value: {
			isOpen: i,
			toggle: () => a((e) => !e),
			collapsible: t
		},
		children: /* @__PURE__ */ u("div", {
			className: c("rounded-xl border border-border bg-card shadow-card overflow-hidden", n),
			children: r
		})
	});
}
z.Header = L, z.Body = R;
//#endregion
//#region components/core/SelectionGroup/SelectionGroup.tsx
var B = p({
	type: "radio",
	selected: [],
	toggle: () => {}
}), V = {
	hidden: {},
	show: { transition: {
		staggerChildren: .05,
		delayChildren: .05
	} }
}, H = {
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
}, U = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { duration: .2 }
	}
};
function W({ value: t, children: n, description: r, icon: o, className: l }) {
	let { type: f, selected: p, toggle: m } = h(B), g = e(), _ = p.includes(t);
	return /* @__PURE__ */ d(i.button, {
		variants: g ? U : H,
		onClick: () => m(t),
		role: f,
		"aria-checked": _,
		className: c("w-full flex items-center gap-3 rounded-xl px-4 py-3.5 md:py-4 text-left", "transition-colors duration-150", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", _ ? "border-2 border-primary bg-primary/5 shadow-[var(--shadow-card)]" : "border border-border bg-card shadow-[var(--shadow-sm)] hover:border-primary/40 hover:bg-muted/30 hover:shadow-[var(--shadow-card)]", l),
		children: [
			o && /* @__PURE__ */ u("span", {
				className: "shrink-0 size-8 md:size-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground",
				children: o
			}),
			/* @__PURE__ */ d("div", {
				className: "flex-1 min-w-0",
				children: [/* @__PURE__ */ u("p", {
					className: c("text-sm md:text-base font-medium leading-snug", "text-foreground"),
					children: n
				}), r && /* @__PURE__ */ u("p", {
					className: "text-xs md:text-sm text-muted-foreground mt-0.5 leading-snug",
					children: r
				})]
			}),
			/* @__PURE__ */ u("div", {
				className: c("shrink-0 flex items-center justify-center border-2 transition-colors duration-150", f === "radio" ? "rounded-full size-5" : "rounded-md size-5", _ ? "border-primary bg-primary" : "border-muted-foreground/40 bg-transparent"),
				children: /* @__PURE__ */ u(s, {
					initial: !1,
					children: _ && /* @__PURE__ */ u(i.span, {
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
						children: /* @__PURE__ */ u(a, {
							className: "size-3 text-primary-foreground",
							strokeWidth: 3
						})
					}, "check")
				})
			})
		]
	});
}
function G(e) {
	return e === void 0 ? [] : Array.isArray(e) ? e : [e];
}
function K({ type: e = "radio", value: t, defaultValue: n, onChange: r, className: a, children: o }) {
	let s = t !== void 0, [l, d] = b(() => G(n)), f = s ? G(t) : l;
	function p(t) {
		let n;
		n = e === "radio" ? [t] : f.includes(t) ? f.filter((e) => e !== t) : [...f, t], s || d(n), r?.(e === "radio" ? n[0] ?? "" : n);
	}
	return /* @__PURE__ */ u(B.Provider, {
		value: {
			type: e,
			selected: f,
			toggle: p
		},
		children: /* @__PURE__ */ u(i.div, {
			variants: V,
			initial: "hidden",
			animate: "show",
			role: e === "radio" ? "radiogroup" : "group",
			className: c("flex flex-col gap-2 md:gap-2.5", a),
			children: o
		})
	});
}
K.Option = W;
//#endregion
//#region components/core/CardStrip/CardStrip.tsx
function q({ children: e, className: t }) {
	return /* @__PURE__ */ u("div", {
		className: c("snap-start shrink-0 w-[280px] md:w-[300px]", t),
		children: e
	});
}
function J({ children: t, className: n }) {
	let r = e();
	return /* @__PURE__ */ u(i.div, {
		initial: {
			opacity: 0,
			y: r ? 0 : 8
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
		className: c("flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 pr-6", n),
		style: {
			scrollbarWidth: "none",
			WebkitOverflowScrolling: "touch"
		},
		"aria-label": "Scroll for more options",
		children: t
	});
}
J.Item = q;
//#endregion
//#region components/core/CardStack/CardStack.tsx
var Y = 5, X = 6, Z = 12;
function Q({ children: e, className: t }) {
	return /* @__PURE__ */ u("div", {
		className: c("w-full", t),
		children: e
	});
}
function $({ children: t, expanded: n, onExpandChange: r, defaultExpanded: a = !1, className: o }) {
	let s = n !== void 0, [l, d] = b(a), p = s ? n : l, m = e(), h = y(null), [g, v] = b(0), [x, S] = b(!1), C = f.toArray(t), w = Math.min(C.length, Y), T = C.slice(0, w);
	process.env.NODE_ENV === "development" && C.length > Y && console.warn(`CardStack: received ${C.length} items but only ${Y} are supported. Extra items are hidden.`), _(() => {
		if (!h.current) return;
		let e = () => {
			let e = h.current.getBoundingClientRect().height;
			e > 0 && (v(e), S(!0));
		};
		e();
		let t = new ResizeObserver(e);
		return t.observe(h.current), () => t.disconnect();
	}, []);
	let E = g + Z, D = g + (w - 1) * X, O = g + (w - 1) * E, k = (e) => {
		s || d(e), r?.(e);
	};
	return /* @__PURE__ */ u(i.div, {
		className: c("relative select-none", !p && "cursor-pointer", o),
		animate: x ? { height: p ? O : D } : void 0,
		transition: !x || m ? { duration: 0 } : {
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
		children: T.map((e, t) => /* @__PURE__ */ u(i.div, {
			ref: t === 0 ? h : void 0,
			className: "absolute inset-x-0 top-0",
			style: { zIndex: w - t },
			animate: {
				y: m ? 0 : t * (p ? E : X),
				rotate: m ? 0 : t * (p ? 0 : -1.5)
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
$.Item = Q;
//#endregion
//#region components/core/ChipToCard/ChipToCard.tsx
function ee({ chips: t, selectedId: n, onSelectedChange: r, defaultSelectedId: a, className: o }) {
	let f = n !== void 0, [p, m] = b(a ?? null), h = f ? n : p, _ = e(), v = g(), y = t.find((e) => e.id === h), x = (e) => {
		f || m(e), r?.(e);
	};
	return /* @__PURE__ */ u(k, {
		id: v,
		children: /* @__PURE__ */ d("div", {
			className: c(o),
			children: [/* @__PURE__ */ u("div", {
				className: "flex flex-wrap gap-2",
				children: /* @__PURE__ */ u(s, {
					initial: !1,
					children: !h && t.map((e) => /* @__PURE__ */ u(i.div, {
						layoutId: `${v}-${e.id}`,
						exit: {
							opacity: 0,
							scale: _ ? 1 : .9,
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
						whileTap: _ ? void 0 : { scale: .97 },
						children: /* @__PURE__ */ u(l, {
							variant: "outline",
							size: "sm",
							className: "rounded-full",
							onClick: () => x(e.id),
							children: e.label
						})
					}, e.id))
				})
			}), /* @__PURE__ */ u(s, {
				initial: !1,
				children: h && y && /* @__PURE__ */ d(i.div, {
					layoutId: `${v}-${h}`,
					className: "mt-3 rounded-xl border border-border bg-card overflow-hidden shadow-[var(--shadow-card)]",
					initial: { opacity: +!!_ },
					animate: { opacity: 1 },
					exit: {
						opacity: 0,
						scale: _ ? 1 : .95,
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
					children: [y.card, /* @__PURE__ */ u("div", {
						className: "px-4 pb-4 pt-2 border-t border-border",
						children: /* @__PURE__ */ u(l, {
							variant: "ghost",
							size: "sm",
							onClick: () => x(null),
							className: "text-muted-foreground",
							children: "← Back to options"
						})
					})]
				}, h)
			})]
		})
	});
}
//#endregion
export { z as a, K as i, $ as n, F as o, J as r, A as s, ee as t };
