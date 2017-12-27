/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'

/* ------------------------- Internal Dependencies -------------------------- */
import { BackgroundImage } from 'atomic'
import { Flex, Box } from 'particles'

/* --------------------------- Styled VideoShowcases ---------------------------- */
const Wrapper = styled.div`

`
const VideoContainer = styled.div`

`
/* ------------------------- VideoShowcase Properties --------------------------- */
/* ------------------------------- VideoShowcase -------------------------------- */
const VideoShowcase = props => {
  return (
    <Wrapper {...props}>
      <BackgroundImage src={props.image} />
      <VideoContainer>
        
      </VideoContainer>
      {props.children}
    </Wrapper>
  )
}

/* ---------------------------- Export Package ------------------------------ */
export default VideoShowcase