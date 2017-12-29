/* --------------------------- Define Constants ----------------------------- */
export const BOUNTY_SEARCH_REQUEST = 'BOUNTY_SEARCH_REQUEST'
export const BOUNTY_SEARCH_SUCCESS = 'BOUNTY_SEARCH_SUCCESS'
export const BOUNTY_SEARCH_FAILURE = 'BOUNTY_SEARCH_FAILURE'

/* ---------------------------- Define Actions ------------------------------ */

/*--- Open Dialog ---*/
export const drawerOpen = () => ({
  type: BOUNTY_SEARCH_REQUEST,
})

/*--- Open Dialog ---*/
export const drawerClose = () => ({
  type: BOUNTY_SEARCH_SUCCESS
})
