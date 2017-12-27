/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import Dialog from 'material-ui/Dialog';
/* ------------------------- Internal Dependencies -------------------------- */
import Box from 'atoms/Box'
import Item from 'workshop/core/Item'
/* ------------------------------- Component -------------------------------- */
const DialogFactory = (props) => {
  // Extract Properties | Destructure
  const { dialog, title} = props
  const { open } = dialog

  if(!open) return null
  /*--- Settings Dialog ---*/
  const DialogSettings = {
    title:title ? title : null ,
    autoScrollBodyContent:true,
    modal:false,
    open:open,
    onRequestClose:props.dialogClose,
  }

  return (
    <Box {...props} z={1000}>
      <Dialog {...DialogSettings} >
        <Item foundry={open}/>
      </Dialog>
    </Box>
  )
}

/* ---------------------------- Export Package ------------------------------ */
export default DialogFactory
