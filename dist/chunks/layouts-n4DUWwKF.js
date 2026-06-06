import { t as e } from "./utils-DFf2kDEH.js";
import { d as t, h as n, m as r } from "./primitives-C7qjhGUg.js";
import { a as i, i as a, n as o, r as s, t as c } from "./ActionStrip-Cl4Az2xG.js";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
import { useEffect as d, useRef as f } from "react";
var p = {
	grocery: {
		botName: "Coles Assistant",
		messages: [
			{
				role: "bot",
				text: "Hi! What can I help you find today?",
				quickReplies: [
					"Recipe ideas",
					"Reorder last shop",
					"Find specials"
				]
			},
			{
				role: "user",
				text: "Ingredients for pasta carbonara for 4"
			},
			{
				role: "bot",
				text: "Here's what I'd add to your cart:",
				products: [
					{
						name: "Barilla Spaghetti 500g",
						subtitle: "Pasta · Per 100g $0.50",
						price: 2.5,
						image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=400&h=200&fit=crop",
						badge: "In stock",
						badgeVariant: "success",
						primaryAction: "Add to cart",
						secondaryAction: "Swap"
					},
					{
						name: "Free Range Eggs 12pk",
						subtitle: "Eggs · Cage free",
						price: 7.5,
						image: "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?w=400&h=200&fit=crop",
						badge: "Low stock",
						badgeVariant: "warning",
						primaryAction: "Add to cart",
						secondaryAction: "Swap"
					},
					{
						name: "Pancetta 150g",
						subtitle: "Deli · Sliced",
						price: 5.99,
						image: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=400&h=200&fit=crop",
						badge: "In stock",
						badgeVariant: "success",
						primaryAction: "Add to cart",
						secondaryAction: "Swap"
					}
				]
			}
		]
	},
	pharmacy: {
		botName: "Chemist Assistant",
		messages: [
			{
				role: "bot",
				text: "Hi! How can I help you today?",
				quickReplies: [
					"Find medication",
					"Upload eScript",
					"Check interactions"
				]
			},
			{
				role: "user",
				text: "Why can't I add Sudafed to my cart?"
			},
			{
				role: "bot",
				text: "Pseudoephedrine products are Schedule 3 in Australia — they require in-store pharmacist approval and cannot be purchased online. Here's an alternative I can add for you:",
				products: [{
					name: "Dimetapp Cold & Flu PE",
					subtitle: "OTC · Available online · 24 tablets",
					price: 14.99,
					image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=200&fit=crop",
					badge: "In stock",
					badgeVariant: "success",
					primaryAction: "Add to cart",
					secondaryAction: "Learn more"
				}]
			},
			{
				role: "bot",
				text: "Need more help with this?",
				quickReplies: [
					"Chat with pharmacist",
					"Find in-store",
					"Upload script"
				]
			}
		]
	}
};
//#endregion
//#region components/layouts/ChatWidget/ChatWidget.tsx
function m({ vertical: m = "grocery", mockData: h, onAddToCart: g, onSuggestSubstitution: _, onEscalateToHuman: v, className: y }) {
	let b = h ?? p[m], x = f(null);
	return d(() => {
		x.current?.scrollIntoView({ behavior: "instant" });
	}, []), /* @__PURE__ */ u("div", {
		className: e("flex flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-[var(--shadow-card)]", y),
		children: [
			/* @__PURE__ */ u("div", {
				className: "flex items-center gap-3 px-4 md:px-5 py-3 md:py-4 border-b border-border bg-card shrink-0",
				children: [/* @__PURE__ */ l(t, {
					fallback: b.botName ?? "Assistant",
					src: b.avatar,
					size: "sm"
				}), /* @__PURE__ */ l("span", {
					className: "text-sm md:text-base font-medium text-foreground",
					children: b.botName ?? "Assistant"
				})]
			}),
			/* @__PURE__ */ u("div", {
				className: "flex-1 overflow-y-auto min-h-0 px-4 md:px-5 py-4 md:py-5 flex flex-col gap-3 md:gap-4",
				children: [b.messages.map((e, t) => /* @__PURE__ */ u("div", {
					className: "flex flex-col gap-2",
					children: [
						/* @__PURE__ */ l(i, {
							role: e.role === "bot" ? "assistant" : "user",
							children: e.text && /* @__PURE__ */ l(i.Content, { children: e.text })
						}),
						e.products && /* @__PURE__ */ l("div", {
							className: "flex gap-3 overflow-x-auto pb-1 scrollbar-none",
							children: e.products.map((e, t) => /* @__PURE__ */ l("div", {
								className: "w-52 md:w-60 shrink-0",
								children: /* @__PURE__ */ u(o, { children: [
									e.image && /* @__PURE__ */ l(o.Media, {
										src: e.image,
										alt: e.name
									}),
									/* @__PURE__ */ u(o.Body, { children: [
										/* @__PURE__ */ u("div", {
											className: "flex items-start justify-between gap-2",
											children: [/* @__PURE__ */ l(o.Title, { children: e.name }), e.badge && /* @__PURE__ */ l(o.Badge, { children: /* @__PURE__ */ l(n, {
												label: e.badge,
												variant: e.badgeVariant ?? "default"
											}) })]
										}),
										e.subtitle && /* @__PURE__ */ l(o.Subtitle, { children: e.subtitle }),
										/* @__PURE__ */ l(o.Meta, { children: /* @__PURE__ */ l(r, {
											amount: e.price,
											currency: "AUD"
										}) })
									] }),
									(e.primaryAction || e.secondaryAction) && /* @__PURE__ */ u(c, { children: [e.primaryAction && /* @__PURE__ */ l(c.Primary, {
										onClick: () => g?.(e),
										children: e.primaryAction
									}), e.secondaryAction && /* @__PURE__ */ l(c.Secondary, {
										onClick: () => _?.(e),
										children: e.secondaryAction
									})] })
								] })
							}, t))
						}),
						e.quickReplies && e.role === "bot" && /* @__PURE__ */ l("div", { children: /* @__PURE__ */ l(s, {
							options: e.quickReplies,
							onSelect: (e) => {
								/pharmacist/i.test(e) && v?.({ messages: b.messages });
							}
						}) })
					]
				}, t)), /* @__PURE__ */ l("div", { ref: x })]
			}),
			/* @__PURE__ */ l("div", {
				className: "border-t border-border px-4 md:px-5 py-3 md:py-4 shrink-0",
				children: /* @__PURE__ */ u(a, {
					onSend: () => {},
					children: [/* @__PURE__ */ l(a.Field, {}), /* @__PURE__ */ l(a.Send, {})]
				})
			})
		]
	});
}
//#endregion
export { m as t };
