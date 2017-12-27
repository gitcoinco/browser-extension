/* --------------------------- Define Constants ----------------------------- */
export const DRAWER_OPEN = 'DRAWER_OPEN'
export const DRAWER_CLOSE = 'DRAWER_CLOSE'

/* ---------------------------- Define Actions ------------------------------ */

/*--- Open Dialog ---*/
export const drawerOpen = () => ({
  type: DRAWER_OPEN,
})

/*--- Open Dialog ---*/
export const drawerClose = () => ({
  type: DRAWER_CLOSE
})
