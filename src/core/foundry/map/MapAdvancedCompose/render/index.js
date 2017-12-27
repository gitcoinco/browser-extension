/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react'
import ReactMapGL from 'react-map-gl';
import ContainerDimensions from 'react-container-dimensions'
/* ------------------------- Internal Dependencies -------------------------- */
import { Box } from 'atomic'
import { Item } from 'foundry'
import StyleCompose from 'logic/interface/StyleCompose'
/* ------------------------ Initialize Dependencies ------------------------- */
const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX;
/* ---------------------------- Module Package ------------------------------ */
let itemApplyStyle = _.curry((layout,data)=> ({...data,...layout}))

const Map = ({
  data, foundry, styled, mapStyle, styledMap, 
  onClick, onViewportChange,
  viewport,_onViewportChange,
  containerHeight, containerWidth,
  ...props
}) => {
  if(!foundry || !data) return null
  if(!Array.isArray(data)) data = [data] // It's either a documentList or a document. If document, create 1 item documentList.
  const Items = data ? _.map(data, StyleCompose(styled)) : null;
  const ItemsPropped = _.map(Items, item=> ({...item, foundry: foundry, menu: props.menu}))
  const MapMarkers = ItemsPropped ? _.map(ItemsPropped, Item) : null
  return (
    <Box {...styledMap}>
      <ContainerDimensions>
        { ({ width, height }) => {
        return <ReactMapGL
        {...viewport}
        height={height}
        width={width}
        mapStyle={mapStyle}
        onClick={onClick}
        onViewportChange={onViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        children={MapMarkers}
      />
        }}
      </ContainerDimensions>
    </Box>
  )
}

export default Map