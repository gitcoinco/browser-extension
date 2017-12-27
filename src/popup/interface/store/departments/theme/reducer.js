import { initialState } from './selectors'

import {
    THEME_LAYOUT_PANEL_TOGGLE,
    THEME_FOCUS_SIMPLE,
    THEME_FOCUS_BALANCE,
    THEME_FOCUS_COMPLEX,
    THEME_SPECTRUM_FAMILY_EMOTION,
    THEME_SPECTRUM_FAMILY_ANALYTIC,
} from './actions'

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case THEME_LAYOUT_PANEL_TOGGLE:
            return {
                ...state,
                regions: {
                    ...state.regions,
                    panelLeft: state.regions.panelLeft ? false : true ,
                    panelRight: state.regions.panelRight ? false : true ,
                }
            }
        // Simple Focus
        case THEME_FOCUS_SIMPLE:
            return {
                ...state,
                zones: {
                    header: false,
                    sidebar: false,
                    main: true,
                },
                regions: {
                    tabs: false,
                    tray: false,
                },
                main: {
                    ...state.main,
                    layout: {
                        mt: [0],
                        ml: [0],
                    },
                    regions: {
                        ...state.main.regions,
                        content: {
                            ...state.main.regions.content,
                            layout: {
                                mt: [0],
                                mb: [0],
                                ml: [0],
                                mr: [0],
                                w: 1
                            }
                        }
                    }
                }
            }
        // Balanced Focus
        case THEME_FOCUS_BALANCE:
            return {
                ...state,
                zones: {
                    header: false,
                    sidebar: false,
                    main: true,
                },
                regions: {
                    tabs: true,
                    tray: true,
                },
                main: {
                    ...state.main,
                    layout: {
                        mt: [0],
                        ml: [0],
                    },
                    regions: {
                        ...state.main.regions,
                        content: {
                            ...state.main.regions.content,
                            layout: {
                                mt: state.main.regions.tabs.meta.h.map((heightBreakpoint, index)=> heightBreakpoint + state.main.regions.tabs.meta.mb[index]),
                                mb: [0],
                                ml: state.main.regions.tray.layout.w.map((widthBreakpoint, index)=> widthBreakpoint + state.main.regions.tray.meta.mr[index]),
                                mr: [0],
                                w: state.main.regions.tray.layout.w.map((widthBreakpoint, index)=> `calc(100% - ${state.main.regions.tray.layout.w[index] + state.main.regions.tray.meta.mr[index] + 'px'})`)
                            }
                        }
                    }
                }
            }
        // Complex Focus
        case THEME_FOCUS_COMPLEX:
            return {
                ...state,
                zones: {
                    header: true,
                    sidebar: true,
                    main: true,
                },
                regions: {
                    ...state.regions,
                    tabs: true,
                    tray: true,
                },
                main: {
                    ...state.main,
                    /**
                     * @desc Magic Alert
                     * We check the layout/metadata on the ZoneHeader to absolutely position the ZoneMain accordingly
                     * 
                     * We might want space between to expose the application body background, which signals information/data
                     * using pulsing gradients or other color signals. Most likely the margin-bottom on header will be set by
                     * a reducer from the THEME_SPECTRUMS_ family when it needs to expose gradient/color information in between
                     * the ZoneHeader and ZoneMain.
                     */
                    layout: {
                        mt: state.header.meta.h.map((heightBreakpoint, index)=> heightBreakpoint + state.header.meta.mb[index]),
                        ml: state.sidebar.layout.w,
                    },
                    regions: {
                        ...state.main.regions,
                        content: {
                            ...state.main.regions.content,
                            layout: {
                                mt: state.main.regions.tabs.meta.h.map((heightBreakpoint, index)=> heightBreakpoint + state.main.regions.tabs.meta.mb[index]),
                                mb: [0],
                                ml: state.main.regions.tray.layout.w.map((widthBreakpoint, index)=> widthBreakpoint + state.main.regions.tray.meta.mr[index]),
                                mr: [0],
                                w: state.main.regions.tray.layout.w.map((widthBreakpoint, index)=> `calc(100% - ${state.main.regions.tray.layout.w[index] + state.main.regions.tray.meta.mr[index] + 'px'})`)
                            }
                        }
                    }
                }
            }
        default:
            return state;
    }
}
