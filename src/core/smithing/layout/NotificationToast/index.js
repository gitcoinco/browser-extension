/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { Box } from 'particles'
import { Heading, Paragraph} from 'atomic'
/* ------------------------------- Component -------------------------------- */
const NotificationToast = props => (
<Box>
  <Heading f={[2]} level={[5]} color='charcoal'>{props.title}</Heading>
  <Paragraph f={[]}>{props.message}</Paragraph>
</Box>
)

NotificationToast.defaultProps = {}

export default NotificationToast