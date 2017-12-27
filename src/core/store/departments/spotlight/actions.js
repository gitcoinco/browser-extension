/* --------------------------- Define Constants ----------------------------- */
export const SPOTLIGHT_CHANGE = 'SPOTLIGHT_CHANGE'
export const SPOTLIGHT_FOCUS = 'SPOTLIGHT_FOCUS'

/* ---------------------------- Define Actions ------------------------------ */

/*--- SPOTLIGHT Tab ---*/
export const spotlightChange = payload => ({
  type: SPOTLIGHT_CHANGE,
  payload
})
export const spotlightFocus = payload => ({
  type: SPOTLIGHT_FOCUS,
  payload
})