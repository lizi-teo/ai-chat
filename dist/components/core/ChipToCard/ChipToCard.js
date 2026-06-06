"use client";
import { cn as e } from "../../../lib/utils.js";
import { AnimatePresence as t } from "../../../node_modules/framer-motion/dist/es/components/AnimatePresence/index.js";
import { LayoutGroup as n } from "../../../node_modules/framer-motion/dist/es/components/LayoutGroup/index.js";
import { motion as r } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
import { useReducedMotion as i } from "../../../node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.js";
import { Button as a } from "../../ui/button.js";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
import { useId as c, useState as l } from "react";
//#region components/core/ChipToCard/ChipToCard.tsx
function u({ chips: u, selectedId: d, onSelectedChange: f, defaultSelectedId: p, className: m }) {
	let h = d !== void 0, [g, _] = l(p ?? null), v = h ? d : g, y = i(), b = c(), x = u.find((e) => e.id === v), S = (e) => {
		h || _(e), f?.(e);
	};
	return /* @__PURE__ */ o(n, {
		id: b,
		children: /* @__PURE__ */ s("div", {
			className: e(m),
			children: [/* @__PURE__ */ o("div", {
				className: "flex flex-wrap gap-2",
				children: /* @__PURE__ */ o(t, {
					initial: !1,
					children: !v && u.map((e) => /* @__PURE__ */ o(r.div, {
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
						children: /* @__PURE__ */ o(a, {
							variant: "outline",
							size: "sm",
							className: "rounded-full",
							onClick: () => S(e.id),
							children: e.label
						})
					}, e.id))
				})
			}), /* @__PURE__ */ o(t, {
				initial: !1,
				children: v && x && /* @__PURE__ */ s(r.div, {
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
					children: [x.card, /* @__PURE__ */ o("div", {
						className: "px-4 pb-4 pt-2 border-t border-border",
						children: /* @__PURE__ */ o(a, {
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
export { u as ChipToCard };
