"use client";
import { cn as e } from "../../../lib/utils.js";
import { StatusBadge as t } from "../../primitives/StatusBadge/StatusBadge.js";
import { PriceDisplay as n } from "../../primitives/PriceDisplay/PriceDisplay.js";
import { EntityAvatar as r } from "../../primitives/EntityAvatar/EntityAvatar.js";
import { MessageBubble as i } from "../../core/MessageBubble/MessageBubble.js";
import { ChatInput as a } from "../../core/ChatInput/ChatInput.js";
import { QuickReplies as o } from "../../core/QuickReplies/QuickReplies.js";
import { MediaCard as s } from "../../core/MediaCard/MediaCard.js";
import { ActionStrip as c } from "../../core/ActionStrip/ActionStrip.js";
import { VERTICAL_MOCK as l } from "./mockData.js";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
import { useEffect as f, useRef as p } from "react";
//#region components/layouts/ChatWidget/ChatWidget.tsx
function m({ vertical: m = "grocery", mockData: h, onAddToCart: g, onSuggestSubstitution: _, onEscalateToHuman: v, className: y }) {
	let b = h ?? l[m], x = p(null);
	return f(() => {
		x.current?.scrollIntoView({ behavior: "instant" });
	}, []), /* @__PURE__ */ d("div", {
		className: e("flex flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-[var(--shadow-card)]", y),
		children: [
			/* @__PURE__ */ d("div", {
				className: "flex items-center gap-3 px-4 md:px-5 py-3 md:py-4 border-b border-border bg-card shrink-0",
				children: [/* @__PURE__ */ u(r, {
					fallback: b.botName ?? "Assistant",
					src: b.avatar,
					size: "sm"
				}), /* @__PURE__ */ u("span", {
					className: "text-sm md:text-base font-medium text-foreground",
					children: b.botName ?? "Assistant"
				})]
			}),
			/* @__PURE__ */ d("div", {
				className: "flex-1 overflow-y-auto min-h-0 px-4 md:px-5 py-4 md:py-5 flex flex-col gap-3 md:gap-4",
				children: [b.messages.map((e, r) => /* @__PURE__ */ d("div", {
					className: "flex flex-col gap-2",
					children: [
						/* @__PURE__ */ u(i, {
							role: e.role === "bot" ? "assistant" : "user",
							children: e.text && /* @__PURE__ */ u(i.Content, { children: e.text })
						}),
						e.products && /* @__PURE__ */ u("div", {
							className: "flex gap-3 overflow-x-auto pb-1 scrollbar-none",
							children: e.products.map((e, r) => /* @__PURE__ */ u("div", {
								className: "w-52 md:w-60 shrink-0",
								children: /* @__PURE__ */ d(s, { children: [
									e.image && /* @__PURE__ */ u(s.Media, {
										src: e.image,
										alt: e.name
									}),
									/* @__PURE__ */ d(s.Body, { children: [
										/* @__PURE__ */ d("div", {
											className: "flex items-start justify-between gap-2",
											children: [/* @__PURE__ */ u(s.Title, { children: e.name }), e.badge && /* @__PURE__ */ u(s.Badge, { children: /* @__PURE__ */ u(t, {
												label: e.badge,
												variant: e.badgeVariant ?? "default"
											}) })]
										}),
										e.subtitle && /* @__PURE__ */ u(s.Subtitle, { children: e.subtitle }),
										/* @__PURE__ */ u(s.Meta, { children: /* @__PURE__ */ u(n, {
											amount: e.price,
											currency: "AUD"
										}) })
									] }),
									(e.primaryAction || e.secondaryAction) && /* @__PURE__ */ d(c, { children: [e.primaryAction && /* @__PURE__ */ u(c.Primary, {
										onClick: () => g?.(e),
										children: e.primaryAction
									}), e.secondaryAction && /* @__PURE__ */ u(c.Secondary, {
										onClick: () => _?.(e),
										children: e.secondaryAction
									})] })
								] })
							}, r))
						}),
						e.quickReplies && e.role === "bot" && /* @__PURE__ */ u("div", { children: /* @__PURE__ */ u(o, {
							options: e.quickReplies,
							onSelect: (e) => {
								/pharmacist/i.test(e) && v?.({ messages: b.messages });
							}
						}) })
					]
				}, r)), /* @__PURE__ */ u("div", { ref: x })]
			}),
			/* @__PURE__ */ u("div", {
				className: "border-t border-border px-4 md:px-5 py-3 md:py-4 shrink-0",
				children: /* @__PURE__ */ d(a, {
					onSend: () => {},
					children: [/* @__PURE__ */ u(a.Field, {}), /* @__PURE__ */ u(a.Send, {})]
				})
			})
		]
	});
}
//#endregion
export { m as ChatWidget };
