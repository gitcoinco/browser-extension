/* ------------------------- Internal Dependencies -------------------------- */
import images from './images.js'
import devices from './devices.js'
import graphics from './graphics.js'
import icons from './icons.js'
import svg from './svg.js'
import screenshots from './screenshots.js'

const assets = {
  graphics: {
    ...graphics
  },
  devices: {
    ...devices
  },
  images: {
    ...images
  },
  icons: {
    ...icons
  },
  svg: {
    ...svg
  },
  screen: {
    ...screenshots
  }
}

export default assets

