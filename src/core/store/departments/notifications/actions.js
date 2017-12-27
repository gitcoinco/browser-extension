/* --------------------------- Define Constants ----------------------------- */
export const NOTIFICATION_OPEN = 'NOTIFICATION_OPEN'
export const NOTIFICATION_CLOSE = 'NOTIFICATION_CLOSE'

/* ---------------------------- Define Actions ------------------------------ */

/*--- Open Notification ---*/
export const notificationOpen = ({payload, metadata}) => ({
  type: NOTIFICATION_OPEN,
  payload,
  metadata
})

/*--- Close Notification ---*/
export const notificationClose = ({payload, metadata}) => ({
  type: NOTIFICATION_CLOSE,
  payload,
  metadata
})