export const initialState = {}
export const getDeltaData = (state,delta) =>state[delta] && state[delta].data || null
export const getDeltaStatus = (state,delta) =>state[delta] && state[delta].status || null