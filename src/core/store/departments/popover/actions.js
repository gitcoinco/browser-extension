/* --------------------------- Define Constants ----------------------------- */
export const POPOVER_OPEN = 'POPOVER_OPEN'
export const POPOVER_CLOSE = 'POPOVER_CLOSE'

/* ---------------------------- Define Actions ------------------------------ */

/*--- Open Dialog ---*/
export const popoverOpen = ({payload}) => ({
  type: POPOVER_OPEN,
  payload
})

/*--- Open Dialog ---*/
export const popoverClose = ({payload}) => ({
  type: POPOVER_CLOSE,
  payload
})
