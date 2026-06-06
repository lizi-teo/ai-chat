import { jsx as e } from "react/jsx-runtime";
//#region components/ThemeProvider.tsx
function t({ tokens: t = {}, dark: n = !1, children: r, className: i }) {
	return /* @__PURE__ */ e("div", {
		className: `${n ? "dark" : ""} ${i ?? ""}`.trim() || void 0,
		style: t,
		children: r
	});
}
//#endregion
export { t as default };
