import { n as e, t } from "./utils-DFf2kDEH.js";
import { jsx as n } from "react/jsx-runtime";
import * as r from "react";
import { createElement as i } from "react";
//#region node_modules/class-variance-authority/dist/index.mjs
var a = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, o = e, s = (e, t) => (n) => {
	if (t?.variants == null) return o(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, s = Object.keys(r).map((e) => {
		let t = n?.[e], o = i?.[e];
		if (t === null) return null;
		let s = a(t) || a(o);
		return r[e][s];
	}), c = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return o(e, s, t?.compoundVariants?.reduce((e, t) => {
		let { class: n, className: r, ...a } = t;
		return Object.entries(a).every((e) => {
			let [t, n] = e;
			return Array.isArray(n) ? n.includes({
				...i,
				...c
			}[t]) : {
				...i,
				...c
			}[t] === n;
		}) ? [
			...e,
			n,
			r
		] : e;
	}, []), n?.class, n?.className);
};
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function c() {
	return typeof window < "u";
}
function l(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function u(e) {
	return c() ? e instanceof HTMLElement || e instanceof l(e).HTMLElement : !1;
}
//#endregion
//#region node_modules/@base-ui/utils/esm/safeReact.js
var d = { ...r }, f = {};
function p(e, t) {
	let n = r.useRef(f);
	return n.current === f && (n.current = e(t)), n;
}
//#endregion
//#region node_modules/@base-ui/utils/esm/useStableCallback.js
var m = d.useInsertionEffect, ee = m && m !== d.useLayoutEffect ? m : (e) => e();
function h(e) {
	let t = p(g).current;
	return t.next = e, ee(t.effect), t.trampoline;
}
function g() {
	let e = {
		next: void 0,
		callback: _,
		trampoline: (...t) => e.callback?.(...t),
		effect: () => {
			e.callback = e.next;
		}
	};
	return e;
}
function _() {
	if (process.env.NODE_ENV !== "production") throw Error("Base UI: Cannot call an event handler while rendering.");
}
//#endregion
//#region node_modules/@base-ui/utils/esm/error.js
var v;
process.env.NODE_ENV !== "production" && (v = /* @__PURE__ */ new Set());
function y(...e) {
	if (process.env.NODE_ENV !== "production") {
		let t = e.join(" ");
		v.has(t) || (v.add(t), console.error(`Base UI: ${t}`));
	}
}
var te = typeof document < "u" ? r.useLayoutEffect : () => {};
//#endregion
//#region node_modules/@base-ui/utils/esm/mergeObjects.js
function b(e, t) {
	if (e && !t) return e;
	if (!e && t) return t;
	if (e || t) return {
		...e,
		...t
	};
}
//#endregion
//#region node_modules/@base-ui/react/esm/merge-props/mergeProps.js
var x = {};
function S(e, t, n, r, i) {
	if (!n && !r && !i && !e) return C(t);
	let a = C(e);
	return t && (a = w(a, t)), n && (a = w(a, n)), r && (a = w(a, r)), i && (a = w(a, i)), a;
}
function ne(e) {
	if (e.length === 0) return x;
	if (e.length === 1) return C(e[0]);
	let t = C(e[0]);
	for (let n = 1; n < e.length; n += 1) t = w(t, e[n]);
	return t;
}
function C(e) {
	return O(e) ? { ...k(e, x) } : T(e);
}
function w(e, t) {
	return O(t) ? k(t, e) : E(e, t);
}
function T(e) {
	let t = { ...e };
	for (let e in t) {
		let n = t[e];
		D(e, n) && (t[e] = A(n));
	}
	return t;
}
function E(e, t) {
	if (!t) return e;
	for (let n in t) {
		let r = t[n];
		switch (n) {
			case "style":
				e[n] = b(e.style, r);
				break;
			case "className":
				e[n] = M(e.className, r);
				break;
			default: D(n, r) ? e[n] = re(e[n], r) : e[n] = r;
		}
	}
	return e;
}
function D(e, t) {
	let n = e.charCodeAt(0), r = e.charCodeAt(1), i = e.charCodeAt(2);
	return n === 111 && r === 110 && i >= 65 && i <= 90 && (typeof t == "function" || t === void 0);
}
function O(e) {
	return typeof e == "function";
}
function k(e, t) {
	return O(e) ? e(t) : e ?? x;
}
function re(e, t) {
	return t ? e ? (...n) => {
		let r = n[0];
		if (N(r)) {
			let i = r;
			j(i);
			let a = t(...n);
			return i.baseUIHandlerPrevented || e?.(...n), a;
		}
		let i = t(...n);
		return e?.(...n), i;
	} : A(t) : e;
}
function A(e) {
	return e && ((...t) => {
		let n = t[0];
		return N(n) && j(n), e(...t);
	});
}
function j(e) {
	return e.preventBaseUIHandler = () => {
		e.baseUIHandlerPrevented = !0;
	}, e;
}
function M(e, t) {
	return t ? e ? t + " " + e : t : e;
}
function N(e) {
	return typeof e == "object" && !!e && "nativeEvent" in e;
}
//#endregion
//#region node_modules/@base-ui/utils/esm/formatErrorMessage.js
function ie(e, t) {
	return function(n, ...r) {
		let i = new URL(e);
		return i.searchParams.set("code", n.toString()), r.forEach((e) => i.searchParams.append("args[]", e)), `${t} error #${n}; visit ${i} for the full message.`;
	};
}
var P = ie("https://base-ui.com/production-error", "Base UI"), F = /*#__PURE__*/ r.createContext(void 0);
process.env.NODE_ENV !== "production" && (F.displayName = "CompositeRootContext");
function ae(e = !1) {
	let t = r.useContext(F);
	if (t === void 0 && !e) throw Error(process.env.NODE_ENV === "production" ? P(16) : "Base UI: CompositeRootContext is missing. Composite parts must be placed within <Composite.Root>.");
	return t;
}
//#endregion
//#region node_modules/@base-ui/react/esm/utils/useFocusableWhenDisabled.js
function I(e) {
	let { focusableWhenDisabled: t, disabled: n, composite: i = !1, tabIndex: a = 0, isNativeButton: o } = e, s = i && t !== !1, c = i && t === !1;
	return { props: r.useMemo(() => {
		let e = { onKeyDown(e) {
			n && t && e.key !== "Tab" && e.preventDefault();
		} };
		return i || (e.tabIndex = a, !o && n && (e.tabIndex = t ? a : -1)), (o && (t || s) || !o && n) && (e["aria-disabled"] = n), o && (!t || c) && (e.disabled = n), e;
	}, [
		i,
		n,
		t,
		s,
		c,
		o,
		a
	]) };
}
//#endregion
//#region node_modules/@base-ui/react/esm/internals/use-button/useButton.js
function L(e = {}) {
	let { disabled: t = !1, focusableWhenDisabled: n, tabIndex: i = 0, native: a = !0, composite: o } = e, s = r.useRef(null), c = ae(!0), l = o ?? c !== void 0, { props: u } = I({
		focusableWhenDisabled: n,
		disabled: t,
		composite: l,
		tabIndex: i,
		isNativeButton: a
	});
	process.env.NODE_ENV !== "production" && r.useEffect(() => {
		if (!s.current) return;
		let e = R(s.current);
		a ? e || y(`A component that acts as a button expected a native <button> because the \`nativeButton\` prop is true. Rendering a non-<button> removes native button semantics, which can impact forms and accessibility. Use a real <button> in the \`render\` prop, or set \`nativeButton\` to \`false\`.${d.captureOwnerStack?.() || ""}`) : e && y(`A component that acts as a button expected a non-<button> because the \`nativeButton\` prop is false. Rendering a <button> keeps native behavior while Base UI applies non-native attributes and handlers, which can add unintended extra attributes (such as \`role\` or \`aria-disabled\`). Use a non-<button> in the \`render\` prop, or set \`nativeButton\` to \`true\`.${d.captureOwnerStack?.() || ""}`);
	}, [a]);
	let f = r.useCallback(() => {
		let e = s.current;
		R(e) && l && t && u.disabled === void 0 && e.disabled && (e.disabled = !1);
	}, [
		t,
		u.disabled,
		l
	]);
	return te(f, [f]), {
		getButtonProps: r.useCallback((e = {}) => {
			let { onClick: n, onMouseDown: r, onKeyUp: i, onKeyDown: o, onPointerDown: s, ...c } = e;
			return S({
				onClick(e) {
					if (t) {
						e.preventDefault();
						return;
					}
					n?.(e);
				},
				onMouseDown(e) {
					t || r?.(e);
				},
				onKeyDown(e) {
					if (t || (j(e), o?.(e), e.baseUIHandlerPrevented)) return;
					let r = e.target === e.currentTarget, i = e.currentTarget, s = R(i), c = !a && z(i), u = r && (a ? s : !c), d = e.key === "Enter", f = e.key === " ", p = i.getAttribute("role"), m = p?.startsWith("menuitem") || p === "option" || p === "gridcell";
					if (r && l && f) {
						if (e.defaultPrevented && m) return;
						e.preventDefault(), c || a && s ? (i.click(), e.preventBaseUIHandler()) : u && (n?.(e), e.preventBaseUIHandler());
						return;
					}
					u && (!a && (f || d) && e.preventDefault(), !a && d && n?.(e));
				},
				onKeyUp(e) {
					if (!t) {
						if (j(e), i?.(e), e.target === e.currentTarget && a && l && R(e.currentTarget) && e.key === " ") {
							e.preventDefault();
							return;
						}
						e.baseUIHandlerPrevented || e.target === e.currentTarget && !a && !l && e.key === " " && n?.(e);
					}
				},
				onPointerDown(e) {
					if (t) {
						e.preventDefault();
						return;
					}
					s?.(e);
				}
			}, a ? { type: "button" } : { role: "button" }, u, c);
		}, [
			t,
			u,
			l,
			a
		]),
		buttonRef: h((e) => {
			s.current = e, f();
		})
	};
}
function R(e) {
	return u(e) && e.tagName === "BUTTON";
}
function z(e) {
	return !!(e?.tagName === "A" && e?.href);
}
//#endregion
//#region node_modules/@base-ui/utils/esm/useMergedRefs.js
function B(e, t, n, r) {
	let i = p(H).current;
	return U(i, e, t, n, r) && G(i, [
		e,
		t,
		n,
		r
	]), i.callback;
}
function V(e) {
	let t = p(H).current;
	return W(t, e) && G(t, e), t.callback;
}
function H() {
	return {
		callback: null,
		cleanup: null,
		refs: []
	};
}
function U(e, t, n, r, i) {
	return e.refs[0] !== t || e.refs[1] !== n || e.refs[2] !== r || e.refs[3] !== i;
}
function W(e, t) {
	return e.refs.length !== t.length || e.refs.some((e, n) => e !== t[n]);
}
function G(e, t) {
	if (e.refs = t, t.every((e) => e == null)) {
		e.callback = null;
		return;
	}
	e.callback = (n) => {
		if (e.cleanup &&= (e.cleanup(), null), n != null) {
			let r = Array(t.length).fill(null);
			for (let e = 0; e < t.length; e += 1) {
				let i = t[e];
				if (i != null) switch (typeof i) {
					case "function": {
						let t = i(n);
						typeof t == "function" && (r[e] = t);
						break;
					}
					case "object":
						i.current = n;
						break;
					default:
				}
			}
			e.cleanup = () => {
				for (let e = 0; e < t.length; e += 1) {
					let n = t[e];
					if (n != null) switch (typeof n) {
						case "function": {
							let t = r[e];
							typeof t == "function" ? t() : n(null);
							break;
						}
						case "object":
							n.current = null;
							break;
						default:
					}
				}
			};
		}
	};
}
//#endregion
//#region node_modules/@base-ui/utils/esm/reactVersion.js
var K = parseInt(r.version, 10);
function q(e) {
	return K >= e;
}
//#endregion
//#region node_modules/@base-ui/utils/esm/getReactElementRef.js
function J(e) {
	if (!/*#__PURE__*/ r.isValidElement(e)) return null;
	let t = e, n = t.props;
	return (q(19) ? n?.ref : t.ref) ?? null;
}
//#endregion
//#region node_modules/@base-ui/utils/esm/warn.js
var Y;
process.env.NODE_ENV !== "production" && (Y = /* @__PURE__ */ new Set());
function oe(...e) {
	if (process.env.NODE_ENV !== "production") {
		let t = e.join(" ");
		Y.has(t) || (Y.add(t), console.warn(`Base UI: ${t}`));
	}
}
Object.freeze([]);
var X = Object.freeze({});
//#endregion
//#region node_modules/@base-ui/react/esm/internals/getStateAttributesProps.js
function se(e, t) {
	let n = {};
	for (let r in e) {
		let i = e[r];
		if (t?.hasOwnProperty(r)) {
			let e = t[r](i);
			e != null && Object.assign(n, e);
			continue;
		}
		i === !0 ? n[`data-${r.toLowerCase()}`] = "" : i && (n[`data-${r.toLowerCase()}`] = i.toString());
	}
	return n;
}
//#endregion
//#region node_modules/@base-ui/react/esm/utils/resolveClassName.js
function ce(e, t) {
	return typeof e == "function" ? e(t) : e;
}
//#endregion
//#region node_modules/@base-ui/react/esm/utils/resolveStyle.js
function le(e, t) {
	return typeof e == "function" ? e(t) : e;
}
//#endregion
//#region node_modules/@base-ui/react/esm/internals/useRenderElement.js
function ue(e, t, n = {}) {
	let r = t.render, i = Z(t, n);
	return n.enabled === !1 ? null : he(e, r, i, n.state ?? X);
}
function Z(e, t = {}) {
	let { className: n, style: r, render: i } = e, { state: a = X, ref: o, props: s, stateAttributesMapping: c, enabled: l = !0 } = t, u = l ? ce(n, a) : void 0, d = l ? le(r, a) : void 0, f = l ? se(a, c) : X, p = l && s ? de(s) : void 0, m = l ? b(f, p) ?? {} : X;
	return typeof document < "u" && (l ? Array.isArray(o) ? m.ref = V([
		m.ref,
		J(i),
		...o
	]) : m.ref = B(m.ref, J(i), o) : B(null, null)), l ? (u !== void 0 && (m.className = M(m.className, u)), d !== void 0 && (m.style = b(m.style, d)), m) : X;
}
function de(e) {
	return Array.isArray(e) ? ne(e) : S(void 0, e);
}
var fe = Symbol.for("react.lazy"), pe = /^[A-Z][A-Za-z0-9$]*$/, me = /[a-z]/;
function he(e, t, n, i) {
	if (t) {
		if (typeof t == "function") return process.env.NODE_ENV !== "production" && ge(t), t(n, i);
		let e = S(n, t.props);
		e.ref = n.ref;
		let a = t;
		if (a?.$$typeof === fe && (a = r.Children.toArray(t)[0]), process.env.NODE_ENV !== "production" && !/*#__PURE__*/ r.isValidElement(a)) throw Error([
			"Base UI: The `render` prop was provided an invalid React element as `React.isValidElement(render)` is `false`.",
			"A valid React element must be provided to the `render` prop because it is cloned with props to replace the default element.",
			"https://base-ui.com/r/invalid-render-prop"
		].join("\n"));
		return /*#__PURE__*/ r.cloneElement(a, e);
	}
	if (e && typeof e == "string") return _e(e, n);
	throw Error(process.env.NODE_ENV === "production" ? P(8) : "Base UI: Render element or function are not defined.");
}
function ge(e) {
	let t = e.name;
	t.length !== 0 && pe.test(t) && me.test(t) && oe(`The \`render\` prop received a function named \`${t}\` that starts with an uppercase letter.`, "This usually means a React component was passed directly as `render={Component}`.", "Base UI calls `render` as a plain function, which can break the Rules of Hooks during reconciliation.", "If this is an intentional render callback, rename it to start with a lowercase letter.", "Use `render={<Component />}` or `render={(props) => <Component {...props} />}` instead.", "https://base-ui.com/r/invalid-render-prop");
}
function _e(e, t) {
	return e === "button" ? /*#__PURE__*/ i("button", {
		type: "button",
		...t,
		key: t.key
	}) : e === "img" ? /*#__PURE__*/ i("img", {
		alt: "",
		...t,
		key: t.key
	}) : /*#__PURE__*/ r.createElement(e, t);
}
//#endregion
//#region node_modules/@base-ui/react/esm/button/Button.js
var Q = /*#__PURE__*/ r.forwardRef(function(e, t) {
	let { render: n, className: r, disabled: i = !1, focusableWhenDisabled: a = !1, nativeButton: o = !0, style: s, ...c } = e, { getButtonProps: l, buttonRef: u } = L({
		disabled: i,
		focusableWhenDisabled: a,
		native: o
	});
	return ue("button", e, {
		state: { disabled: i },
		ref: [t, u],
		props: [c, l]
	});
});
process.env.NODE_ENV !== "production" && (Q.displayName = "Button");
//#endregion
//#region components/ui/button.tsx
var $ = s("group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/80",
			outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
			secondary: "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
			ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
			destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
			sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
			lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			icon: "size-8",
			"icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
			"icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
			"icon-lg": "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function ve({ className: e, variant: r = "default", size: i = "default", ...a }) {
	return /* @__PURE__ */ n(Q, {
		"data-slot": "button",
		className: t($({
			variant: r,
			size: i,
			className: e
		})),
		...a
	});
}
//#endregion
export { $ as n, s as r, ve as t };
