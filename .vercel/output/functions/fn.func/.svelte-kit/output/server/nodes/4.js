import * as server from '../entries/pages/auth/signup/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/auth/signup/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/auth/signup/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.DdTUppaV.js","_app/immutable/chunks/scheduler.D8c12eMh.js","_app/immutable/chunks/index.B2zEa4Va.js","_app/immutable/chunks/forms.BgF2Ti0C.js","_app/immutable/chunks/entry.BYM6n63U.js"];
export const stylesheets = [];
export const fonts = [];
