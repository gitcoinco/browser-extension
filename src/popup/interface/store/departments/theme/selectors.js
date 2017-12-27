export const initialState = {
  // Begin Dashboard
  dashboard: {
    zones: {
    header: true,
    aside: true,
    main: true,
    mainContent: true,
    panelLeft: true,
    panelRight: true,
  },
  regions: {
    tabs: false,
    tray: false,
    panelRight: true,
  },
  /*--- Header ---*/
  header: {
    layout: {
      gradient: 'blue',
      ml: [0],
      mt: [0],
    },
    meta: {
      h: [120, 80],
      mb: [20, 40]
    }
  },
  /*--- Aside ---*/
  aside: {
    layout: {
      bg: 'grayBlue',
      gradient: 'blue',
      br: ['0 15px 0 0'],
      color: ['white'],
      mt: [140, 95],
    
      w: [0, 170, 250],
    },
    meta: {
      mr: 0
    }
  },
  /*--- Main ---*/
  main: {
    layout: {
      bg: 'white',
      h: ['calc(100% - 80px)'],
      direction: ['column', 'row'],
      mt: [80, 120],
      mb: [0],
      ml: [0, 170, 250],
      p: [0],
      w: [1, 1, 'calc(100% - 250px)']
    },
    regions: {
      /*--- Tabs ---*/
      tabs: {
        layout: {
          p: ['5px 10px', '10px 15px']
        },
        meta: {
          h: [40,80],
          mb: [0, 20]
        }
      },
      /*--- Panel Left ---*/
      panelLeft: {
        layout: {
          display: ['block', 'inherit', 'inherit'],
          gradient: 'gray',
          mh: [50, 1],
          mt: [0],
          mb:[0],
          flex: ['0 0 auto'],
        },
        meta: {
          mr: [0]
        }
      },
      /*--- Panel Right ---*/
      panelRight: {
        layout: {
          color: 'white',
          gradient: 'blue',
          mh: [100, 1],
          h: [100, 1],
          mt: [0],
          mb:[0],
          flex: ['0 0 auto'],
          // w: [0, 120, 180]
        },
        meta: {
          mr: [0]
        }
      },
      /*--- Content ---*/
      content: {
        layout: {
          bs: 0,
          display: ['block', 'absolute', 'absolute'],
          h: [300, 1],
          mt: [0],
          mb: [0],
          // ml: [180],
          // mr: [220],
          flex: ['3 5 auto'],
          // w: ['calc(100% - 360px)'],
        }
      },
    }
  }
},
// End Dashboard
entityProfileLayout: {
  absoluteLeft:{
    bottom: true,
    top: true,
    left: true,
    bg:'white',
    pos:['relative !important', 'relative !important', 'absolute !important'],
    h:[1],
    w:[1,1, 0.77],
  },
  absoluteRight: {
    top: true,
    right: true,
    gradient:'gray',
    pos:['relative !important', 'relative !important', 'absolute !important'],
    bs:[3],
    h:[1],
    w:[1,1, 0.23],
    z:15,
  }
},


  zones: {
    header: true,
    sidebar: true,
    footer: true,
    main: true,
  },
  regions: {
    tabs: false,
    tray: false,
    panelLeft: true,
    panelRight: true,
  },
  /*--- Header ---*/
  header: {
    layout: {
      ml: [0],
      mt: [0],
      p: [0]
    },
    meta: {
      h: [120, 80],
      mb: [20, 40]
    }
  },
  /*--- Sidebar ---*/
  footer: {
    layout: {
    
    },
    meta: {
      mr: 0
    }
  },
  /*--- Sidebar ---*/
  sidebar: {
    layout: {
      mt: [140, 120],
      w: [0, 170, 250]
    },
    meta: {
      mr: 0
    }
  },
  /*--- Main ---*/
  main: {
    layout: {
      bg: 'white',
      mt: [0],
      mb: [0],
      ml: [0]
    },
    regions: {
      /*--- Tabs ---*/
      tabs: {
        layout: {
          p: ['5px 10px', '10px 15px']
        },
        meta: {
          h: [40,80],
          mb: [0, 20]
        }
      },
      /*--- Tray ---*/
      tray: {
        layout: {
          mt: [40, 100],
          mb:[20, 40],
          w: [0, 120, 180]
        },
        meta: {
          mr: [0, 40, 40]
        }
      },
      /*--- Content ---*/
      content: {
        layout: {
          mt: [0],
          mb: [0],
          ml: [0],
          mr: [220],
          p: [20],
          w: ['calc(100%)'],
        },
        areas: {
          left: {
            enabled: true,
            layout: {
              flex: ["2 1 25%"],
              p: [10, 25]
            }
          },
          center: {
            enabled: true,
            layout: {
              flex: ["4 1 55%"],
              p: [30]
            }
          },
          right: {
            enabled: true,
            layout: {
              flex: ["1 1 20%"],
              p: [10, 25]
            }
          }
        }
      },
    }
  }
}


export const getDelta =  (state, delta) => state[delta]  || {}

/**
 * @function getZones
 * 
 * @param {Object} state
 * @param {String} zone
 */
export const getZones = (state) => {
  return state.theme
}

/**
 * @function getZones
 * 
 * @param {Object} state
 * @param {String} zone
 */
export const getZonesDashboard = (state) => {
  return state.theme.dashboard
}

/**
 * @function getZone
 * 
 * @param {Object} state
 * @param {String} zone
 */
export const getZone = (state, zone) => {
  return state.theme[zone]
}

/**
 * @function getZoneDashboard
 * 
 * @param {Object} state
 * @param {String} zone
 */
export const getZoneDashboard = (state, zone) => {
  return state.theme.dashboard[zone]
}

/**
 * @function getZoneLayout
 * 
 * @param {Object} state
 * @param {String} zone
 */
export const getZoneLayout = (state, zone) => {
  return state.theme[zone].layout
}
/**
 * @function getZoneLayout
 * 
 * @param {Object} state
 * @param {String} zone
 */
export const getZoneDashboardLayout = (state, zone) => {
  return state.theme.dashboard[zone].layout
}

/**
 * @function getZoneRegions
 * 
 * @param {Object} state
 * @param {String} zone
 */
export const getZoneRegions = (state, zone) => {
  return state.theme[zone].regions
}
