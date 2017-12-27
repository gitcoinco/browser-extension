/* ----------------------------- Initial State ------------------------------ */
/**
 * Focus
 * 
 * @desc The Focus Department handles viewport content changes, related to attention
 * shifting i.e changing focus. Tabs, Calculators, Animations can all hook into the Focus
 * depmartment to either A) Set or B) Observe a Focus Viewport.
 */
export const initialState = {}

/* ------------------------- Department Functions -------------------------- */
export const getViewport = (state, viewport) => state[viewport] || null