/* --------------------------- Define Constants ----------------------------- */
export const DIALOG_OPEN = 'DIALOG_OPEN'
export const DIALOG_CLOSE = 'DIALOG_CLOSE'

/* ---------------------------- Define Actions ------------------------------ */

/*--- Open Dialog ---*/
export const dialogOpen = ({payload}) => ({
  type: DIALOG_OPEN,
  payload,
})

/*--- Open Dialog ---*/
export const dialogClose = () => ({
  type: DIALOG_CLOSE
})
