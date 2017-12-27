/* --------------------------- Define Constants ----------------------------- */
export const THEME_UPDATE = 'THEME_UPDATE';
export const THEME_LAYOUT_PANEL_TOGGLE = 'THEME_LAYOUT_PANEL_TOGGLE'
/**
 * Focus
 * 
 * @desc The THEME_FOCUS_[] family designates different *focus* states the application
 * should be in. For example a user my want to focus explicitily on real-time
 * data overlayed on a map, so dashboard should reconfigure itself to amplify
 * the user's focus. Other scenarious include a user requiring complex navigation 
 * branches and hierarches to "deep dive" into a certain context or data model.
 * 
 * @desc Quantify Focus
 * 0: Simple focus to consume the primary data stream.
 * 50: Balanced focus between simplicity/complex to provide a stable context for the current objective.
 * 100: Complex focus exposing interesting, usefel, real-time and important data streams
 * across the entire applications infrastructure.
 * 
 * @todo The THEME_FOCUS_ actions will be dispatched by a camera, identifying
 * sign-language and visual cues to more quickly inference a users focus.
 * 
 * Most likely the hand gesture will be moving the left hand from left-to-right, signaling 0-100.
 * 
 */
export const THEME_FOCUS_SIMPLE = 'THEME_FOCUS_SIMPLE';
export const THEME_FOCUS_BALANCE = 'THEME_FOCUS_BALANCE';
export const THEME_FOCUS_COMPLEX = 'THEME_FOCUS_COMPLEX';



/**
 * Spectrum
 * 
 * @desc The THEME_SPECTRUM_[] family recommends to the application, what spectrum of cognitive
 * interaction will amplify the current user's objective. In other words, what's the best
 * mechanisms for reconciling the application's interface with the users particular placement
 * on the spectrum in regards to emotional and analytical.
 * 
 * @desc Color
 * A heavy emphasis on color will be used to signal the overall states, and also very specific states
 * of the application.
 * 
 * For example, if a backlog of medium-value communications are being ignored, the whole application
 * background might begin to use pulsing gradients (yellow/orange/red) to signal an overall decline
 * in the organizations efficiency, without sending annoying/ignored emails/alerts. First, this ensures
 * everyone is accountable, because everyone was visually cued in to the organization's communication.
 * Plus, it will stimulate an emotional response, incentizing problem solvers fix the issue arising
 * in the unforseen corners of the organization.
 * 
 * 
 */

// Spectrum Family
export const THEME_SPECTRUM_FAMILY_EMOTION = 'THEME_SPECTRUM_FAMILY_EMOTION'
export const THEME_SPECTRUM_FAMILY_ANALYTIC = 'THEME_SPECTRUM_FAMILY_ANALYTIC'

// Spectrum Family Subset Controls 
export const THEME_SPECTRUM_COLOR_0 = 'THEME_SPECTRUM_COLOR_0'
export const THEME_SPECTRUM_COLOR_100 = 'THEME_SPECTRUM_COLOR_100'
export const THEME_SPECTRUM_DATA_0 = 'THEME_SPECTRUM_DATA_0'
export const THEME_SPECTRUM_DATA_100 = 'THEME_SPECTRUM_DATA_100'


/* ---------------------------- Define Actions ------------------------------ */
export function themeLayoutPanelToggle() {
    return {
        type: THEME_LAYOUT_PANEL_TOGGLE
    }
}
export function themeFocusSimple() {
    return {
        type: THEME_FOCUS_SIMPLE,
    };
}
export function themeFocusBalance() {
    return {
        type: THEME_FOCUS_BALANCE
    };
}
export function themeFocusComplex() {
    return {
        type: THEME_FOCUS_COMPLEX
    };
}
export function themeUpdate() {
    return {
        type: THEME_UPDATE
    };
}