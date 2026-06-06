import { cn as e } from "../../../lib/utils.js";
import { jsx as t } from "react/jsx-runtime";
import { cva as n } from "class-variance-authority";
//#region components/primitives/EntityAvatar/EntityAvatar.tsx
var r = "inline-flex shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground font-medium overflow-hidden", i = {
	sm: "size-7 text-xs",
	md: "size-10 text-sm",
	lg: "size-14 text-base"
}, a = n(r, {
	variants: { size: i },
	defaultVariants: { size: "md" }
});
function o({ fallback: n, src: r, alt: i, size: o, className: s }) {
	let c = n.split(" ").slice(0, 2).map((e) => e[0]?.toUpperCase() ?? "").join("");
	return /* @__PURE__ */ t("div", {
		className: e(a({ size: o }), s),
		children: r ? /* @__PURE__ */ t("img", {
			src: r,
			alt: i ?? n,
			className: "size-full object-cover"
		}) : /* @__PURE__ */ t("span", {
			"aria-label": n,
			children: c
		})
	});
}
//#endregion
export { o as EntityAvatar, r as entityAvatarBase, i as entityAvatarSizeClasses };
