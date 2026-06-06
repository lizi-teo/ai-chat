import { cva as e } from "../../../node_modules/class-variance-authority/dist/index.js";
import { cn as t } from "../../../lib/utils.js";
import { jsx as n } from "react/jsx-runtime";
//#region components/primitives/EntityAvatar/EntityAvatar.tsx
var r = "inline-flex shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground font-medium overflow-hidden", i = {
	sm: "size-7 text-xs",
	md: "size-10 text-sm",
	lg: "size-14 text-base"
}, a = e(r, {
	variants: { size: i },
	defaultVariants: { size: "md" }
});
function o({ fallback: e, src: r, alt: i, size: o, className: s }) {
	let c = e.split(" ").slice(0, 2).map((e) => e[0]?.toUpperCase() ?? "").join("");
	return /* @__PURE__ */ n("div", {
		className: t(a({ size: o }), s),
		children: r ? /* @__PURE__ */ n("img", {
			src: r,
			alt: i ?? e,
			className: "size-full object-cover"
		}) : /* @__PURE__ */ n("span", {
			"aria-label": e,
			children: c
		})
	});
}
//#endregion
export { o as EntityAvatar, r as entityAvatarBase, i as entityAvatarSizeClasses };
