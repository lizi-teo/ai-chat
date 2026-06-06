import e from "../node_modules/clsx/dist/clsx.js";
import { twMerge as t } from "../node_modules/tailwind-merge/dist/bundle-mjs.js";
//#region lib/utils.ts
function n(...n) {
	return t(e(n));
}
//#endregion
export { n as cn };
