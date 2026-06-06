import { cva as e } from "../../../node_modules/class-variance-authority/dist/index.js";
import { cn as t } from "../../../lib/utils.js";
import { jsx as n } from "react/jsx-runtime";
//#region components/primitives/StatusBadge/StatusBadge.tsx
var r = "inline-flex items-center rounded-full px-2 py-0.5 text-xs md:text-sm font-medium", i = {
	default: "bg-muted text-muted-foreground",
	success: "bg-success/10 text-success",
	warning: "bg-warning/10 text-warning",
	error: "bg-destructive/10 text-destructive",
	info: "bg-primary/10 text-primary"
}, a = e(r, {
	variants: { variant: i },
	defaultVariants: { variant: "default" }
});
function o({ label: e, variant: r, className: i }) {
	return /* @__PURE__ */ n("span", {
		className: t(a({ variant: r }), i),
		children: e
	});
}
//#endregion
export { o as StatusBadge, r as statusBadgeBase, i as statusBadgeVariantClasses };
